/* Paleta de cores:
#19182d (Índigo Escuro) Menu
#303651 (Azul-petróleo) Borda / Texto
#5a61ff (Azul Elétrico) Hover img
#8a8cff (Azul Pálido) Selecionado
#c7d2dc (Azul Pastel) Background
#e6e8f0 (Cinza Azulado) Texto 
*/

import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 12px;
  min-height: 100vh;
  background-color: #c7d2dc;
  &.dark-mode {
    background-color: #19182d;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  padding: 24px 32px 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 32px;
  img {
    width: 350px;
    border-radius: 50%;
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    img{
      width: 300px;
    }
  }
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    img{
      width: 250px;
    }
    padding: 12px;
  }
  @media (max-width: 350px) {
    flex-direction: column-reverse;
    img{
      width: 200px;
    }
    margin-top: 48px;
  }
  @media (max-width: 250px) {
    flex-direction: column-reverse;
    img{
      width: 180px;
    }
    margin-top: 52px;
  }
`;

export const Frase = styled.div`
  display: flex;
  margin-top: 24px;
  font-style: italic;
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #e6e8f0;
  color: #303651;
  border-radius: 12px;
  &.dark-mode {
    background-color: #303651;
    color: #e6e8f0;
  }
`;

// Estilos para o light mode
export const MainBgLight = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  min-height: 100vh;
  background-color: #c7d2dc;
  @media (max-width: 700px) {
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const TextoLight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #e6e8f0;
  color: #303651;
  border-radius: 12px;
`;

// Estilos para o dark mode
export const MainBgDark = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  min-height: 100vh;
  background-color: #19182d;
  @media (max-width: 700px) {
    align-items: flex-start;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const TextoDark = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #303651;
  color: #e6e8f0;
  border-radius: 12px;
`;