import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import * as S from "./styled";
import figma from "../../assets/skills/figma.svg";
import git from "../../assets/skills/git.svg";
import github from "../../assets/skills/github.svg";
import html from "../../assets/skills/html.svg";
import javascript from "../../assets/skills/javascript.svg";
import react from "../../assets/skills/react.svg";
import styled from "../../assets/skills/styled.svg";
import uiDesign from "../../assets/skills/uiDesign.svg";
import uxDesign from "../../assets/skills/uxDesign.svg";
import viteJs from "../../assets/skills/viteJs.svg";
import reactRouter from "../../assets/skills/reactRouter.svg";
import css from "../../assets/skills/css.svg";
import linkedin from "../../assets/social/linkedin.svg";
import curriculo from "../../assets/icon/curriculo.svg";
import curriculoPDF from "../../assets/curriculo.pdf";

export default function Sobre() {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //Currículo
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

  return (
    <S.MainBg className={isDarkMode ? "dark-mode" : ""}>
      <Menu toggleDarkMode={toggleDarkMode} />
      <S.Main className={isDarkMode ? "dark-mode" : ""}>
        <S.Texto className={isDarkMode ? "dark-mode" : ""}>
          <div>
            <h2> Sobre mim</h2>
          </div>
          <S.Conteudo className={isDarkMode ? "dark-mode" : ""}>
            <p>
              Me chamo Gilvan Pereira de Oliveira, tenho 32 anos, recentemente
              fiz uma transição de carreira para a área de desenvolvimento. Já
              trabalhei na área alguns anos atrás, atuei também na área
              administrativa, no setor privado, e no ramo de construção, estou
              me graduando em Engenharia Civil e paralelamente ao curso
              Tecnólogo em Desenvolvimento FullStack, também sigo me
              especializando no desenvolvimento Front-End com cursos intensivos
              e preparatórios como o Vai na Web, no qual tem sido de grande
              valia, tanto para a parte técnica quanto para as Soft Skills.
              Sempre tive o fascínio em aprender algo novo, solucionar problemas
              e criar coisas, e durante a cadeira de automação, todo essa paixão
              se voltou para o desenvolvimento; tanto que resolvi retornar à
              ela! Agora sigo estudando cada vez mais, e em busca de uma
              oportunidade para alavancar minha carreira na área e aprender cada
              vez mais. Atualmente possuo conhecimentos em:
            </p>
            <S.Skills>
              <img src={figma} title="Figma" alt="Figma" />
              <img src={html} title="Html 5" alt="HTML5" />
              <img src={css} title="Css 3" alt="CSS" />
              <img src={uiDesign} title="Ui Design" alt="Ui Design" />
              <img src={uxDesign} title="Ux Design" alt="Ux Design" />
              <img src={git} title="Git" alt="Git" />
              <img src={github} title="GitHub" alt="Github" />
              <img src={javascript} title="JavaScript ES6" alt="JavaScript" />
              <img src={react} title="React" alt="React" />
              <img
                src={reactRouter}
                title="React Router Dom"
                alt="React-Router-Dom"
              />
              <img
                src={styled}
                title="Styled-Components"
                alt="Styled-Components"
              />
              <img src={viteJs} title="Vite.Js" alt="Vite.js" />
            </S.Skills>
            <S.Social className={isDarkMode ? "dark-mode" : ""}>
              <h3>Minhas Redes:</h3>
              <S.Redes className={isDarkMode ? "dark-mode" : ""}>
                <a href="https://github.com/GilvanPOliveira" target="_blank">
                  <S.Git>
                    <img src={github} title="GitHub" alt="GitHub" />
                    <p>
                      https://github.com/<strong>GilvanPOliveira</strong>
                    </p>
                  </S.Git>
                </a>
                <a
                  href="https://www.linkedin.com/in/gilvanpoliveira/"
                  target="_blank"
                >
                  <img src={linkedin} title="Linkedin" alt="Linkedin" />
                  <p>
                    https://www.linkedin.com/in/
                    <strong>gilvanpoliveira</strong>
                  </p>
                </a>
              </S.Redes>
            </S.Social>

            <S.Curriculo className={isDarkMode ? "dark-mode" : ""}>
              <a
                href={curriculoPDF}
                download="curriculo.pdf"
                title="Curriculo"
                className="colapsar"
                onClick={handleDownload}
              >
                <S.CurriculoImg className={isDarkMode ? "dark-mode" : ""}>
                  <img src={curriculo} alt="Currículo" />
                </S.CurriculoImg>
                <S.CurriculoTitulo>Meu Currículo</S.CurriculoTitulo>
              </a>
            </S.Curriculo>
          </S.Conteudo>
        </S.Texto>
      </S.Main>
    </S.MainBg>
  );
}
