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
  @media (max-width: 800px) {
    align-items: flex-start;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  padding: 12px 32px 32px 24px;
  @media (max-width: 680px) {
    margin-top: 24px;
  }
  @media (max-width: 450px) {
    margin-top: 0;
    padding: 12px 12px 24px 12px;
  }
  @media (max-width: 250px) {
    margin-top: 55px;
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  color: #303651;
  h2 {
    padding: 12px 0 24px 0;
  }
  p {
    text-align: justify;
  }
  &.dark-mode {
    color: #e6e8f0;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #e6e8f0;
  &.dark-mode {
    background-color: #303651;
  }
  border-radius: 12px;
  align-items: center;
  @media (max-width: 350px) {
    padding: 12px;
  }
`;

export const Curriculo = styled.div`
  display: flex;
  padding: 24px 32px 24px 32px;
  background-color: #303651;
  color: #e6e8f0;
  border-radius: 12px;
  &.dark-mode {
    background-color: #e6e8f0;
    color: #303651;
  }
  a {
    display: flex;
    gap: 16px;
    text-decoration: none;
    color: #e6e8f0;
  }
  &.dark-mode a {
    color: #303651;
  }
  align-items: center;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
  @media (max-width: 250px) {
    padding: 12px;
    a {
      gap: 0;
    }
  }
`;

export const CurriculoImg = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  &.dark-mode {
    background-color: #303651;
  }
  @media (max-width: 250px) {
    img {
      display: none;
    }
  }
`;

export const CurriculoTitulo = styled.div`
  font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
`;

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  img {
    width: 60px;
    height: 60px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Social = styled.div`
  display: flex;
  font-size: clamp(0.5rem, 0.25rem + 1.6vw, 2rem);
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  padding: 0 0 12px 0;
  gap: 24px;
  img {
    width: 50px;
    height: 50px; 
    background-color: #fff;
    border-radius: 20%;
    &:hover {
      transform: scale(1.3);
    }
  }
  @media (max-width: 350px) {
    align-items: center;
    align-self: center;
  }
`;

export const Git = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  p {
    font-size: clamp(0.5rem, 0.35rem + 1.3vw, 1.5rem);
  }
  img {
    border-radius: 50%;
  }
`;

export const Redes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 0;
  gap: 24px;
  &.dark-mode a {
    color: #e6e8f0;
  }
  p {
    font-size: clamp(0.5rem, 0.35rem + 1.3vw, 1.5rem);
  }
  margin-bottom: 24px;
  a {
    display: flex;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    color: #303651;
  }
  @media (max-width: 350px) {
    p {
      display: none;
    }
    flex-direction: row;
    padding: 0;
  }
`;
