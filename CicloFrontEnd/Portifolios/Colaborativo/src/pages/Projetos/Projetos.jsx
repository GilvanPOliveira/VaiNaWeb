// Projetos.jsx
import React, { useState } from "react";
import * as S from "./styled";
import PortifolioCarrossel from "../../components/Portifolio/PortifolioCarrossel";
import Menu from "../../components/Menu/Menu";

export default function Projetos() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <S.MainBg className={isDarkMode ? "dark-mode" : ""}>
      <Menu toggleDarkMode={toggleDarkMode} />
      <S.Main className={isDarkMode ? "dark-mode" : ""}>
        <h2>Projetos </h2>
        <S.Projetos>
          <PortifolioCarrossel />
        </S.Projetos>
      </S.Main>
    </S.MainBg>
  );
}
