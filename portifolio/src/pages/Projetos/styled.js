import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  text-align: center;
  background-color: #839697;
  @media (max-width: 968px) {
    width: 100%;
    margin-top: 16vh;
    height: 100vh;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h2 {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    width: 800px;
    color: white;
    margin-bottom: 32px;
  }
  @media (max-width: 968px) {
    justify-content: flex-start;
    padding: 24px;
  }
`;

export const Projetos = styled.div`
  width: 900px;
  @media (max-width: 1200px) {
    max-width: 590px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const ProjetosItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;
  background-color: #4a5051;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ProjetosImg = styled.div`
  img {
    width: 200px;
    height: 150px;
  }
`;

export const ProjetosDescricao = styled.div`
  padding: 10px;
  overflow-y: auto;
  max-height: 100px;
  p {
    font-size: clamp(0.5rem, 0.4194rem + 0.6452vw, 1rem);
    text-align: justify;
    color: white;
    padding: 0 12px 0 12px;
  }
  //Scroll
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 5px;
  }
`;
