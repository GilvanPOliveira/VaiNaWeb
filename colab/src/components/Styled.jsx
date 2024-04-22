import style, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Center = css`
  display: flex;
  align-items: center; 
  justify-content: center;
`;

export const grid = style.div`
  display: grid;
  grid-template-rows: repeat(4, 200px);
  grid-template-columns: 20% auto 20%;
  @media (max-width: 400px) {
    grid-template-rows: repeat(6, 100px);
    grid-template-columns: 1fr;
  }
`;

export const headerBg = style.div`
  background-color: #000;
  grid-column: 1 / 4;
  color: #fff;
  ${Center}
`;

export const navBg = style.div`
  background-color: #111;
  grid-column: 1 / 4;
  color: #fff;
  ${Center}
`;

export const mainBg = style.div`
  background-color: #222;
  color: #fff;
  ${Center}
  @media (max-width: 400px) {
    grid-column: 1 / 4;
  }
`;

export const asideBg = style.div`
  background-color: #333;
  color: #fff;
  ${Center}
  @media (max-width: 400px) {
    grid-column: 1 / 4;
  }
`;

export const footerBg = style.div`
  background-color: #444;
  grid-column: 1 / 4;
  ${Center}
`;
