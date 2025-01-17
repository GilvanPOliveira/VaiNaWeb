import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  text-align: center;
  cursor: default;
  background-color: #839697;
  height: 100vh;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 16vh;
    align-items: flex-start;
  }
`;
 
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    width: 100%;
    color: white;
    margin-bottom: 32px;
  }
  @media (max-width: 968px) {
    justify-content: flex-start;
    padding: 24px;
  }
`;

export const Projetos = styled.div`
  max-width: 900px;
  @media (max-width: 1200px) {
    max-width: 590px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
  @media (max-width: 368px) {
    max-width: 130px;
  }
`;