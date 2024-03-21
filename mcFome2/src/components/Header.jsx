import React from "react";
import * as S from "./styled";

export default function Header() {
  return (
    <S.HeaderBg>
      <S.HeaderLogo/>
      <S.HeaderApp>
        <S.HeaderDonwload>
          <S.AppIcon/>
          <a href="./">Baixe o App</a>
        </S.HeaderDonwload>
        <S.HeaderEncomenda>
          <a href="./">Peça seu Méqui</a>
          <S.App/>
        </S.HeaderEncomenda>
      </S.HeaderApp>
    </S.HeaderBg>
  );
}
