import React from "react";
import * as S from "./styled";
import { useState } from "react";
import bigmac from "../assets/bigmac.svg";
import batata from "../assets/batata.svg";
import sorvete from "../assets/sorvete.svg";

export default function Main() {
  const [banner, setBanner] = useState(bigmac);

  function item1() {
    setBanner(bigmac);
  }

  function item2() {
    setBanner(batata);
  }

  function item3() {
    setBanner(sorvete);
  }
  return (
    <S.BannerBg>
      <S.Banner>
        <img src={banner} width={300} height={300} />
        <S.BannerTexto>
          <h1>BATEU AQUELA</h1>
          <h1>
            <span>#FOME</span> DE <span>MÉQUI</span>?
          </h1>
        </S.BannerTexto>
      </S.Banner>
      <S.BannerItens>
        <S.BannerItem1 onClick={item1} />
        <S.BannerItem2 onClick={item2} />
        <S.BannerItem3 onClick={item3} />
      </S.BannerItens>
    </S.BannerBg>
  );
}
