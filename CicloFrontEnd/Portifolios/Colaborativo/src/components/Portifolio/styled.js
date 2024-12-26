/* Paleta de cores:
#19182d (Índigo Escuro) Menu
#303651 (Azul-petróleo) Borda / Texto
#5a61ff (Azul Elétrico) Hover img
#8a8cff (Azul Pálido) Selecionado
#c7d2dc (Azul Pastel) Background
#e6e8f0 (Cinza Azulado) Texto 
*/ 

import styled from "styled-components";

export const ProjetosBG = styled.div`
  display: flex;
  padding: 0 32px 0 32px;
`;

export const Projetos = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: warp;
  padding: 30px;
  @media (max-width: 250px) {
    padding: 0px;
  }
`;

export const ProjetosItem = styled.div`
  position: relative;
  max-width: 300px;
  height: 205px;
  background-color: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 15px;

  &:hover {
    height: 320px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }
  &:hover div {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
  }
  &:hover span {
    visibility: hidden;
    opacity: 0;
  }
  @media (max-width: 468px) {
    width: 220px;
    height: 170px;
  }
  @media (max-width: 320px) {
    width: 180px;
    height: 160px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 250px) {
    width: 138px;
    height: 125px;

  }
`;

export const ProjetosImg = styled.div`
  img {
    max-width: 100%;
    border-radius: 15px;
    height: 250px;
  }
  border-radius: 15px;
  position: relative;
  width: 250px;
  height: 175px;
  top: -40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  z-index: 1;
  @media (max-width: 468px) {
    width: 180px;
    height: 120px;
  }
  @media (max-width: 320px) {
    width: 150px;
    height: 105px;
  }
  @media (max-width: 250px) {
    width: 110px;
    height: 77px;
  }
`;

export const ProjetoTitulo = styled.div`
  color: #303651;
  position: relative;
  text-align: center;
  align-self: center;
  margin-top: 30px;
  span {
    font-size: 20px;
    font-weight: bold;
  }
  visibility: visible;
  @media (max-width: 468px) {
    margin-top: 25px;
  }
  @media (max-width: 320px) {
    margin-top: 20px;
  }
  @media (max-width: 250px) {
    margin-top: 10px;
  }
`;

export const ProjetosDescricao = styled.div`
  position: relative;
  color: #303651;
  text-align: justify;
  visibility: hidden;
  opacity: 0;
  padding: 6px;
  transition: 0.3s ease-in-out;
  overflow-y: auto;
  margin-top: -70px;

  h3 {
    margin-bottom: 10px;
    text-align: center;
  }

  //Scroll
  &::-webkit-scrollbar {
    width: 6px; /* Largura do scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do scrollbar */
    border-radius: 5px;
  }
`;
