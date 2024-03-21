import React from "react";
import * as S from "./styled";

export default function Section() {
  return (
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
  );
}
