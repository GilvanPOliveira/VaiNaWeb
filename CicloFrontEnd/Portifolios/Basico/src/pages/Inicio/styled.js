import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  cursor: default;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #839697;
  height: 100vh;
  @media (max-width: 755px ) {
    align-items: flex-start;

  }
`;

export const Main = styled.div`
  padding: 0 32px 0 32px;
  display: flex ;
  align-items: center;
  width: 100%;
  img {
    width: 350px;
    border-radius: 50%;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    gap: 32px;
  }
  @media (max-width: 768px) {
    margin-top: 18vh;
    img {
      width: 200px;
    }
  }
  @media (max-width: 455px) {
    img {
      width: 150px;
    }
    padding: 12px;
  }
  @media (max-width: 255px) {
    img {
      width: 100px;
    }
  }
`;

export const Texto = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  background-color: #839697;
  gap: 32px;
  padding: 0 12px 0 12px;
  h1 {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    color: white;
  }
  p {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    color: white;
  }
  @media (max-width: 455px) {
    gap: 12px;
  }
`;
