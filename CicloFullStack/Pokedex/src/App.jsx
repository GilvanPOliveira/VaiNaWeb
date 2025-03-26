import React, { useState, useEffect, useRef, useCallback } from "react";
import "./styles/App.scss";
import pokedexImage from "./assets/pokedex1.png";
import pokedexImage2 from "./assets/pokedex2.png";
import portifolioImage from "./assets/portifolio.png";
import pokeballImage from "./assets/pokeball.png";
import inicialImage from "./assets/inicial.gif";

// Componentes
import SearchBox from "./components/SearchBox";
import PokemonImage from "./components/PokemonImage";
import PokemonData from "./components/PokemonData";
import StatusVertical from "./components/StatusVertical";
import RadarStats from "./components/RadarStats";
import ControlButtons from "./components/ControlButtons";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [originalPokemon, setOriginalPokemon] = useState(null);
  const [typeList, setTypeList] = useState([]);
  const [typeIndex, setTypeIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [showRadar, setShowRadar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captureRate, setCaptureRate] = useState(null);
  const [fadeKey, setFadeKey] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [evolutionSprites, setEvolutionSprites] = useState([]);
  const [evolutionWindowIndex, setEvolutionWindowIndex] = useState(0);

  const searchRef = useRef();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        const nomes = data.results.map((p, i) => ({
          id: i + 1,
          name: p.name,
        }));
        setAllPokemon(nomes);
      });
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setInputFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.length === 0) {
      setFilteredPokemon([]);
      return;
    }

    if (!isNaN(debouncedSearch)) {
      const found = allPokemon.find((p) => p.id === parseInt(debouncedSearch));
      setFilteredPokemon(found ? [found] : []);
    } else {
      setFilteredPokemon(
        allPokemon.filter((p) => p.name.startsWith(debouncedSearch)).slice(0, 6)
      );
    }
  }, [debouncedSearch, allPokemon]);

  const fetchPokemon = useCallback(
    async (input, preserveOriginal = false, resetEvolutionIndex = true) => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!res.ok) return;
        const data = await res.json();
        setPokemon(data);
        setSearch(data.name);
        setFilteredPokemon([]);

        if (!preserveOriginal) {
          setOriginalPokemon(null);
          setTypeList([]);
          setTypeIndex(0);
          setHistory([]);
        }

        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();
        setCaptureRate(speciesData.capture_rate);

        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();

        const extractNamesFromChain = (chain) => {
          const names = [];
          const traverse = (node) => {
            if (!node) return;
            names.push(node.species.name);
            node.evolves_to.forEach(traverse);
          };
          traverse(chain);
          return names;
        };

        const evoNames = extractNamesFromChain(evoData.chain);

        const sprites = await Promise.all(
          evoNames.map(async (name) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const json = await res.json();
            return {
              name,
              image: json.sprites.front_default,
            };
          })
        );
        setEvolutionSprites(sprites);
        setFadeKey((prev) => prev + 1);

        if (resetEvolutionIndex) {
          setEvolutionWindowIndex(0); 
        }
      } catch (err) {
        console.error("Erro ao buscar Pokémon:", err);
      } finally {
        setLoading(false);
      }
    },
    [
      setPokemon,
      setSearch,
      setFilteredPokemon,
      setOriginalPokemon,
      setTypeList,
      setTypeIndex,
      setHistory,
      setCaptureRate,
      setEvolutionSprites,
      setFadeKey,
      setLoading,
      setEvolutionWindowIndex,
    ]
  );

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearch(value);
  };

  const handlePrevious = useCallback(() => {
    if (!pokemon) return fetchPokemon(1000);
    const index = allPokemon.findIndex((p) => p.name === pokemon.name);
    if (pokemon.id === 1) return setPokemon(null);
    fetchPokemon(allPokemon[index - 1].name);
  }, [pokemon, allPokemon, fetchPokemon]);

  const handleNext = useCallback(() => {
    if (!pokemon) return fetchPokemon(1);
    const index = allPokemon.findIndex((p) => p.name === pokemon.name);
    if (pokemon.id === 1000) return setPokemon(null);
    fetchPokemon(allPokemon[index + 1].name);
  }, [pokemon, allPokemon, fetchPokemon]);

  const handlePreviousSameType = useCallback(() => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      fetchPokemon(prev, true);
      setTypeIndex((i) => Math.max(i - 1, 0));
    } else if (originalPokemon) {
      fetchPokemon(originalPokemon.name);
      setOriginalPokemon(null);
      setTypeList([]);
      setTypeIndex(0);
    }
  }, [history, originalPokemon, fetchPokemon]);

  const handleNextSameType = useCallback(async () => {
    if (!pokemon) return;
    if (!originalPokemon) {
      setOriginalPokemon(pokemon);
      setHistory([]);
      const typeName = pokemon.types[0].type.name;
      const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
      const data = await res.json();
      const list = data.pokemon.map((p) => p.pokemon.name);
      const index = list.indexOf(pokemon.name);
      setTypeList(list);
      setTypeIndex(index + 1);
      return;
    }
    if (typeIndex < typeList.length) {
      const next = typeList[typeIndex];
      setHistory((h) => [...h, pokemon.name]);
      fetchPokemon(next, true);
      setTypeIndex(typeIndex + 1);
    }
  }, [pokemon, originalPokemon, typeList, typeIndex, fetchPokemon]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePreviousSameType();
      else if (e.key === "ArrowRight") handleNextSameType();
      else if (e.key === "ArrowUp") handlePrevious();
      else if (e.key === "ArrowDown") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext, handlePreviousSameType, handleNextSameType]);

  const resetPokedex = () => {
    setPokemon(null);
    setSearch("");
    setFilteredPokemon([]);
    setOriginalPokemon(null);
    setTypeList([]);
    setTypeIndex(0);
    setHistory([]);
    setShowBack(false);
    setShowRadar(false);
  };

  return (
    <div className="container">
      <div className="pokedex-container">
        <div className="pokedex-images">
          <img src={pokedexImage} alt="Pokédex" className="pokedex-image1" />
          <img src={pokedexImage2} alt="Pokédex2" className="pokedex-image2" />
        </div>
        <div className="portifolio-link">
          <a
            href="https://gilvanpoliveira.github.io/"
            target="_blank"
            rel="noreferrer"
            title="Ir para Portfólio"
          >
            <img src={portifolioImage} alt="Portifólio" />
            <p>Portifólio</p>
          </a>
        </div>

        <button
          className="btn-reset"
          onClick={resetPokedex}
          aria-label="Resetar Pokédex"
          title="Voltar à tela inicial"
        ></button>
        <button
          className="btn-darkmode"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Alternar modo escuro"
          title="Alternar modo escuro"
        ></button>

        {!pokemon ? (
          <>
            <img
              src={inicialImage}
              alt="Imagem inicial"
              className="pokemon-inicial"
            />
            <img
              src={pokeballImage}
              alt="Pokébola"
              className="pokemon-pokeball"
            />
          </>
        ) : (
          <>
            <PokemonImage key={fadeKey} pokemon={pokemon} showBack={showBack} />
            <PokemonData pokemon={pokemon} captureRate={captureRate} />
            {evolutionSprites.length > 1 && (
              <div className="evolution-chain">
                {evolutionSprites
                  .slice(evolutionWindowIndex, evolutionWindowIndex + 2)
                  .map((evo, idx) => (
                    <img
                      key={evo.name}
                      src={evo.image}
                      alt={evo.name}
                      className={`evolution-image ${
                        evo.name === pokemon.name ? "active" : ""
                      }`}
                      onClick={() => {
                        fetchPokemon(evo.name, false, false);
                        if (
                          evolutionWindowIndex + idx + 1 <
                            evolutionSprites.length &&
                          idx === 1
                        ) {
                          setEvolutionWindowIndex((prev) => prev + 1);
                        }
                        if (evolutionWindowIndex + idx - 1 >= 0 && idx === 0) {
                          setEvolutionWindowIndex((prev) =>
                            Math.max(prev - 1, 0)
                          );
                        }
                      }}
                      title={evo.name}
                      aria-label={`Ver evolução: ${evo.name}`}
                    />
                  ))}
              </div>
            )}
            {showRadar ? (
              <RadarStats stats={pokemon.stats} />
            ) : (
              <StatusVertical stats={pokemon.stats} />
            )}
          </>
        )}

        <PokemonGrid allPokemon={allPokemon} onSelect={fetchPokemon} />

        <SearchBox
          search={search}
          setSearch={setSearch}
          filteredPokemon={inputFocused ? filteredPokemon : []}
          onInputChange={handleInputChange}
          onFocus={() => {
            setInputFocused(true);
            if (search.trim() === "") {
              setFilteredPokemon(allPokemon);
            }
          }}
          onSelect={(name) => fetchPokemon(name)}
          inputRef={searchRef}
        />

        <ControlButtons
          onPrev={handlePrevious}
          onNext={handleNext}
          onBackType={handlePreviousSameType}
          onNextType={handleNextSameType}
          onFrontView={() => setShowBack(false)}
          onBackView={() => setShowBack(true)}
          onShowVertical={() => setShowRadar(false)}
          onShowRadar={() => setShowRadar(true)}
          disabled={loading}
        />

        <div className="led led-1"></div>
        <div className="led led-2"></div>
        <div className="led led-3"></div>
        <div className="led led-4"></div>
        <div className="led led-5"></div>
        <div className="led led-6"></div>
      </div>
    </div>
  );
}

export default App;
