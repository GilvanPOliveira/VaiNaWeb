import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import Perfil from "../../assets/perfil.jpg";
import * as S from "./styled";

export default function Inicio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <S.MainBg className={isDarkMode ? "dark-mode" : ""}>
      <Menu toggleDarkMode={toggleDarkMode} />
      <S.Main>
        <S.Texto className={isDarkMode ? "dark-mode" : ""}>
          <p>Olá, me chamo Gilvan Oliveira, sou um desenvolvedor Front-End. </p>
          <S.Frase>
            <p>
              “ Não é a linguagem de programação que define o programador, mas
              sim sua lógica. ”
            </p>
          </S.Frase>
        </S.Texto>
        <img src={Perfil} alt="Perfil" />
      </S.Main>
    </S.MainBg>
  );
}
