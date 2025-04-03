import S from "./style.module.scss";
import livrariaLogo from "../../assets/livrariaLogo.svg";
import busca from "../../assets/busca.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [buscaInput, setBuscaInput] = useState("");
  const [livros, setLivros] = useState([]);
  const [sugestoes, setSugestoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const response = await axios.get(
          "https://vai-na-web-livraria-api.onrender.com/livros"
        );
        setLivros(response.data);
      } catch (error) {
        console.error("Erro ao carregar livros:", error);
      }
    };
    carregarLivros();
  }, []);

  const handleChange = (e) => {
    const valor = e.target.value;
    setBuscaInput(valor);

    if (valor.trim() === "") {
      setSugestoes([]);
      return;
    }

    const filtrados = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(valor.toLowerCase())
    );
    setSugestoes(filtrados.slice(0, 5));
  };

  const handleBuscar = () => {
    if (buscaInput.trim() !== "") {
      navigate(`/livros-doados?busca=${encodeURIComponent(buscaInput.trim())}`);
      setBuscaInput("");

      setSugestoes([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleBuscar();
    }
  };

  const handleSelecionar = (titulo) => {
    setBuscaInput(titulo);
    setSugestoes([]);
    setBuscaInput("");

    navigate(`/livros-doados?busca=${encodeURIComponent(titulo)}`);
  };

  return (
    <header className={S.boxHeader}>
      <div className={S.boxLogo}>
        <img src={livrariaLogo} alt="Logo Livraria Vai na Web" />
        <h1>Livros Vai na Web</h1>
      </div>

      <nav className={S.boxMenu}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/livros-doados">Livros Doados</a>
          </li>
          <li>
            <a href="/doacao">Doação</a>
          </li>
        </ul>
      </nav>

      <div className={S.boxBusca}>
        <input
          type="text"
          placeholder="O que você procura?"
          value={buscaInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <img src={busca} alt="Lupa" onClick={handleBuscar} />

        {sugestoes.length > 0 && (
          <ul className={S.sugestoes}>
            {sugestoes.map((livro) => (
              <li key={livro.id} onClick={() => handleSelecionar(livro.titulo)}>
                {livro.titulo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
