import React from "react";
import * as S from "./style";
import { useState } from "react";
import bigmac from "../../assets/BigMac.svg";
import batata from "../../assets/Batata.svg";
import sorvete from "../../assets/Sorvete.svg";

export default function Home() {
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
      <S.BannerBg>
        <S.Banner>
          <S.BannerItem src={banner} title="Peça já seu Méqui" />
          <S.BannerTexto>
            <h1>BATEU AQUELA</h1>
            <h1>
              <span>#FOME</span> DE <span>MÉQUI</span>?
            </h1>
          </S.BannerTexto>
        </S.Banner>

        <S.BannerItens>
          <S.BannerItem1 onClick={item1} title="Sanduíches de Carne Bovina" />
          <S.BannerItem2 onClick={item2} title="Acompanhamentos" />
          <S.BannerItem3 onClick={item3} title="Sobremesas" />
        </S.BannerItens>
      </S.BannerBg>

      <S.PromocaoBg>
        <h1>Promoção</h1>
        <S.PromocaoItens>
          <S.PromocaoItem1>
            <S.Pedidos />
            <h2>Que tal um #MéquiNoSofá?</h2>
            <a href="/" title="Peça já seu Méqui">
              Clique Aqui
            </a>
          </S.PromocaoItem1>
          <S.PromocaoItem2>
            <S.Restaurantes />
            <h2>Venha conhecer nossa nova loja</h2>
            <a href="/" title="Ache um Méqui perto de você">
              Clique Aqui
            </a>
          </S.PromocaoItem2>
          <S.PromocaoItem3>
            <S.Medidas />
            <h2>Confira as medidas que o Méqui adotou!</h2>
            <a href="/" title="Confira as medidas tomadas pelo Méqui">
              Clique Aqui
            </a>
          </S.PromocaoItem3>
        </S.PromocaoItens>
      </S.PromocaoBg>
    </>
  );
}
