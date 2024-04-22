import React from "react";
import * as S from "./Styled";

export default function Main() {
  return (
    <S.grid>
      <S.headerBg> Header </S.headerBg>
      <S.navBg> Menu </S.navBg>
      <S.asideBg> Aside </S.asideBg>
      <S.mainBg> Main </S.mainBg>
      <S.asideBg> Aside </S.asideBg>
      <S.footerBg> Footer </S.footerBg>
    </S.grid>
  );
}
