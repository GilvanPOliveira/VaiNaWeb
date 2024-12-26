import styled from "styled-components";

export const MainBg = styled.div`
  display: flex;
  text-align: center;
  background-color: #839697;
  height: 100vh;
  @media (max-width: 968px) {
    align-items: flex-start;
  }
`;
 
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  width: 100%;
  padding: 32px;
  @media (max-width: 968px) {
    margin-top: 17vh;
  }
  @media (max-width: 555px) {
    padding: 12px;
    gap: 32px;
  }
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding: 24px 0 24px 0;
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    color: white;
  }
  p {
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    color: white;
  }
  @media (max-width: 555px) {
    p {
      text-align: justify;
      padding: 12px;
    }
  }
`;

export const Skill = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    padding: 32px 0 32px 0;
    font-size: clamp(1rem, 0.6774rem + 2.5806vw, 3rem);
    color: white;
  }
`;

export const Skills = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;
  img {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
  @media (max-width:  555px) {
    gap: 32px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media (max-width: 300px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
  }
`;
