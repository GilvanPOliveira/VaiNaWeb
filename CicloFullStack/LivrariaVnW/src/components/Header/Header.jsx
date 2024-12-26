import S from "./style.module.scss";
import livrariaLogo from "../../assets/livrariaLogo.svg";
import busca from "../../assets/busca.svg";

const Header = () => {
  return (
    <header className={S.boxHeader}>
      <div className={S.boxLogo}>
        <img
          src={livrariaLogo}
          alt="Logo Livraria Vai na Web"
          title="Livros Vai na Web"
        />
        <h1 title="Desafio Empower - Vai na Web">Livros Vai na Web</h1>
      </div>
      <nav className={S.boxMenu}>
        <ul>
          <li>
            <a href="/" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="/livros-doados" title="Livros Doados">
              Livros Doados
            </a>
          </li>
          <li>
            <a href="/doacao" title="Doação">
              Doação
            </a>
          </li>
        </ul>
      </nav>
      <div className={S.boxBusca}>
        <input
          type="text"
          placeholder="O que você procura?"
          title="Digite o livro que deseja buscar"
        />
        <img src={busca} alt="Lupa para buscar" />
      </div>
    </header>
  );
};

export default Header;
