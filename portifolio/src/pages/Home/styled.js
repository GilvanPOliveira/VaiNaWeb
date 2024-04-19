import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #839697;
  @media (max-width: 755px) {
    align-items: flex-start;
  }
`;

export const Main = styled.div`
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 100%;
  gap: 32px;
  img {
    width: 350px;
    border-radius: 50%;
  }
  @media (max-width: 1000px) {
    img {
      width: 150px;
    }
  }
  @media (max-width: 755px) {
    flex-direction: column;
  }
  @media (max-width: 555px) {
    padding: 32px;
  }
  @media (max-width: 455px) {
    img {
      width: 100px;
    }
    padding: 0;
  }
`;

export const Texto = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  background-color: #839697;
  gap: 32px;
  h1 {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    width: 100%;
    color: white;
  }
  p {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    width: 100%;
    color: white;
  }
  @media (max-width: 455px) {
    gap: 12px;
  }
`;
