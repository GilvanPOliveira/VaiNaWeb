import React from "react";
import * as S from "./styled";
import { useState } from "react";
import bigmac from "../assets/bigmac.png";
import batata from "../assets/batata.png";
import sorvete from "../assets/sorvete.png";

function McFome() {
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
    <>
      <S.HeaderBg>
        <a href="./"><S.HeaderLogo /></a>
        <S.HeaderMenu>
          <S.HeaderApp>
            <S.CelularApp />
            <a href="./">Baixe o app</a>
          </S.HeaderApp>
          <S.HeaderEncomenda>
            <a href="./">Peça seu Méqui</a>
            <S.CelularEncomenda />
          </S.HeaderEncomenda>
        </S.HeaderMenu>
      </S.HeaderBg>

      <S.BannerBg>
        <S.Banner>
          <img src={banner} width={300} height={300} />
          <h1>
            BATEU AQUELA
            <br />
            <span>#FOME</span> DE <span>MÉQUI</span>?
          </h1>
        </S.Banner>
        <S.BannerItens>
          <S.BannerItem1 onClick={item1} />
          <S.BannerItem2 onClick={item2} />
          <S.BannerItem3 onClick={item3} />
        </S.BannerItens>
      </S.BannerBg>

      <S.PromocaoBg>
        <h1>Promoção</h1>
        <S.PromocaoItens>
          <S.PromocaoItem1>
            <S.Encomenda />
            <h2>Que tal um #MéquiNoSofá?</h2>
            <a href="./">Clique Aqui</a>
          </S.PromocaoItem1>
          <S.PromocaoItem2>
            <S.Loja />
            <h2>Venha conhecer nossa nova loja</h2>
            <a href="./">Clique Aqui</a>
          </S.PromocaoItem2>
          <S.PromocaoItem3>
            <S.Aviso />
            <h2>Confira as medidas que o Méqui adotou!</h2>
            <a href="./">Clique Aqui</a>
          </S.PromocaoItem3>
        </S.PromocaoItens>
      </S.PromocaoBg>

      <S.FooterBg>
        <S.FooterCopy>
          <a href="./"><S.FooterLogo /></a>
          <a href="./"><h1>© McDonald’s 2024</h1></a>
        </S.FooterCopy>
        <S.FooterApp>
          <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.app&pli=1">
            <S.PlayStore />
          </a>
          <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187">
            <S.AppStore />
          </a>
        </S.FooterApp>
      </S.FooterBg>
    </>
  );
}

export default McFome;
