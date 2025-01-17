import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.HeaderBg>
      <S.HeaderLogoImg title="McDonald's" />
      <S.HeaderApp>
        <S.HeaderDownload title="Baixe o App">
          <S.HeaderAppIcon />
          <h1>Baixe o app</h1>
        </S.HeaderDownload>
        <S.HeaderPedidos title="Peça seu Méqui">
          <a href="/">
            <h1>Peça seu Méqui</h1>
          </a>
          <S.HeaderEncomendaApp />
        </S.HeaderPedidos>
      </S.HeaderApp>
    </S.HeaderBg>
  );
}
