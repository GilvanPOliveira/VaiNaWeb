import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import moon from "../../assets/icon/moon.svg";
import sun from "../../assets/icon/sun.svg";
import projetos from "../../assets/icon/projetos.svg";
import vnw from "../../assets/rabbit.svg";
import perfil from "../../assets/perfil.jpg";
import home from "../../assets/icon/home.svg";
import curriculo from "../../assets/icon/curriculo.svg";
import whatsapp from "../../assets/social/whatsapp.svg";
import sobre from "../../assets/icon/sobre.svg";
import btnExpandir from "../../assets/icon/btnExpandir.svg";
import curriculoPDF from "../../assets/curriculo.pdf";

export default function Menu({ toggleDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(); // Chama a função passada por props para atualizar o estado de dark mode na página Inicio
  };

  const [menu, setMenu] = useState(true);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 680) {
        setMenu(true);
      } else {
        Menu.propTypes = {
          toggleDarkMode: PropTypes.func.isRequired,
        };
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 680) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDownload = (e) => {
    const confirmDownload = window.confirm(
      "Deseja efetuar o download do currículo?"
    );
    if (!confirmDownload) {
      e.preventDefault();
      alert("Quando desejar, basta clicar em currículo novamente!");
    }
    alert("Obrigado pela oportunidade!");
  };

  const openWhatsApp = (e) => {
    e.preventDefault();
    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(
      "https://web.whatsapp.com/send?phone=5581992581741&text=Olá,%20vamos%20conversar?",
      "popup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <main className={isDarkMode ? "dark-mode" : "light-mode"}>
      <header
        className={`menuHamburguer ${menu ? "menuAberto" : "menuFechado"}`}
      >
        <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
      </header>
      {menu && (
        <nav className={`menu ${collapsed ? "collapsed" : ""}`}>
          <div className="menu-bg">
            <div className="logo-bg">
              <a href="https://vainaweb.com.br/" className="logo-bg">
                <img src={vnw} alt="Logo" className="logo" />
                <span className="menu-titulo hide">Ficha Técnica</span>
              </a>
            </div>
            <div className="btnExpandir" onClick={toggleCollapse}>
              <img src={btnExpandir} alt="Botão Expandir" />
            </div>
          </div>
          <div className="menu-perfil">
            <div className="perfil-bg">
              <img
                src={perfil}
                alt="Perfil do Usuário"
                className="perfil-img"
              />
            </div>
            <section className="perfil-dados hide">
              <div className="perfil-nome"> Gilvan Oliveira </div>
              <div className="perfil-cargo">Front-End Developer</div>
            </section>
          </div>
          <div className="menu-links">
            <ul>
              <li>
                <a href="/" title="Início" className="colapsar">
                  <img src={home} alt="Início da página" />
                  <span className="link hide">Início</span>
                  <span className="colapsar-item">Início</span>
                </a>
              </li>
              <li>
                <h2>Meus Dados</h2>
              </li>
              <li>
                <a href="/projetos" title="Projetos" className="colapsar">
                  <img src={projetos} alt="Projetos do portifólio" />
                  <span className="link hide">Projetos</span>
                  <span className="colapsar-item">Projetos</span>
                </a>
              </li>
              <li>
                <a href="/sobre" title="Sobre" className="colapsar">
                  <img src={sobre} alt="Descrição sobre o usuário" />
                  <span className="link hide">Sobre</span>
                  <span className="colapsar-item">Sobre</span>
                </a>
              </li>
              <li>
                <h2>Contato</h2>
              </li>
              <li>
                <a
                  href={curriculoPDF}
                  download="curriculo.pdf"
                  title="Curriculo"
                  className="colapsar"
                  onClick={handleDownload}
                >
                  <img src={curriculo} alt="Currículo em pdf para donwload" />
                  <span className="link hide">Currículo</span>
                  <span className="colapsar-item">Currículo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://web.whatsapp.com/send?phone=5581992581741&text=Olá,%20vamos%20conversar?"
                  title="Whatsapp"
                  className="colapsar"
                  onClick={openWhatsApp}
                >
                  <img src={whatsapp} alt="Abre uma conversa no Whatsapp" />
                  <span className="link hide">Whatsapp</span>
                  <span className="colapsar-item">Whatsapp</span>
                </a>
              </li>
              <li>
                <h2>Modo de Exibição</h2>
              </li>
              <li className={isDarkMode ? "dark-mode" : ""}>
                <a
                  href="#dark"
                  title="Dark Mode"
                  className="colapsar"
                  onClick={handleDarkModeToggle} // Alteração aqui
                >
                  <img
                    src={isDarkMode ? moon : sun}
                    alt={isDarkMode ? "dark" : "light"}
                  />
                  <span className="link hide">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                  <span className="colapsar-item">
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </main>
  );
}
