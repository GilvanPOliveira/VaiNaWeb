import React, { useState } from "react";
import "../styles/PokemonGrid.scss";

const PokemonGrid = ({ allPokemon, onSelect }) => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(allPokemon.length / itemsPerPage);
  const paginated = allPokemon.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  return (
    <>
      <div className="pokemon-grid">
        {paginated.map((p) => (
          <div
            key={p.id}
            className="pokemon-card"
            onClick={() => onSelect(p.name)}
            title={`Ver ${p.name}`}
            aria-label={`Ver ${p.name}`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
          </div>
        ))}
      </div>
      <button
        className="btn-grid-prev"
        onClick={() => setPage(Math.max(page - 1, 0))}
        aria-label="Página anterior"
        title="Página anterior"
      >
      </button>
      <button
        className="btn-grid-next"
        onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
        aria-label="Página siguiente"
        title="Página siguiente"
      >
      </button>
    </>
  );
};

export default PokemonGrid;
