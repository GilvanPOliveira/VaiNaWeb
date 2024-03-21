import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import appicon from "../assets/appicon.svg";
import app from "../assets/app.svg";
import bigmac from "../assets/bigmac.svg";
import batata from "../assets/batata.svg";
import sorvete from "../assets/sorvete.svg";
import pedido from "../assets/pedido.png";
import loja from "../assets/loja.png";
import aviso from "../assets/medidas.png";
import footerlogo from "../assets/logo.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

// Reset Global + Centralizar
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
const center = `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Header
export const HeaderBg = styled.header`
  background-color: #fff;
  height: 90px;
  padding: 20px 40px;
  ${center}
  justify-content: space-between;
`;
export const HeaderLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
  cursor: pointer;
`;
export const HeaderApp = styled.div`
  ${center}
  gap: 34px;
`;
export const HeaderDonwload = styled.div`
  ${center}
  gap: 5px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000;
    font: 400 12px "Inter", sans-serif;
  }
`;
export const AppIcon = styled.div`
  width: 25px;
  height: 30px;
  background-image: url(${appicon});
  background-repeat: no-repeat;
`;
export const HeaderEncomenda = styled.div`
  ${center}
  background-color:#FFC72C;
  padding: 10px 15px 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  gap: 13px;
  &:hover {
      background-color: #db0007;
    }
  a {
    text-decoration: none;
    color: #000;
    font: 700 12px "Inter", sans-serif;
  }
`;
export const App = styled.div`
  width: 25px;
  height: 32px;
  background-image: url(${app});
  background-repeat: no-repeat;
`;

// Main
export const BannerBg = styled.div`
  background-color: #ffc72c;
  height: 650px;
  ${center}
  flex-direction: column;
`;
export const Banner = styled.div`
  gap: 180px;
  display: flex;
  ${center};
`;
export const BannerTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  cursor: default;
  h1 {
    font: 800 50px "Inter", sans-serif;
    color: #fff;
    span {
      color: #db0007;
    }
  }
`;
export const BannerItens = styled.div`
  gap: 60px;
  margin-top: 50px;
  ${center}
  align-items: stretch;
`;
export const BannerItem1 = styled.div`
  width: 115px;
  height: 100px;
  cursor: pointer;
  background-image: url(${bigmac});
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
`;
export const BannerItem2 = styled.div`
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-image: url(${batata});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BannerItem3 = styled.div`
  width: 100px;
  height: 150px;
  cursor: pointer;
  background-image: url(${sorvete});
  background-repeat: no-repeat;
  background-size: cover;
`;

// Section
export const PromocaoBg = styled.section`
  background-color: #feb706;
  height: 560px;
  font: 700 24px "Roboto", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: default;
  h1 {
    padding: 60px;
  }
`;
export const PromocaoItens = styled.div`
  ${center}
  gap: 60px;
`;
export const Encomenda = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${pedido});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const PromocaoItem1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: start;
    margin-bottom: 20px;
    height: 72px;
  }
  a {
    text-decoration: none;
    color: #000;
    font: 400 20px "Roboto", sans-serif;
    padding: 12px 32px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 180px;
    height: 40px;
    align-self: center;
    ${center}
    &:hover {
      background-color: #db0007;
    }
  }
`;
export const Loja = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${loja});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const PromocaoItem2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: start;
    margin-bottom: 20px;
    height: 72px;
  }
  a {
    text-decoration: none;
    color: #000;
    font: 400 20px "Roboto", sans-serif;
    padding: 12px 32px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 180px;
    height: 40px;
    align-self: center;
    ${center}
    &:hover {
      background-color: #db0007;
    }
  }
`;
export const Aviso = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${aviso});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const PromocaoItem3 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: start;
    margin-bottom: 20px;
    height: 72px;
  }
  a {
    text-decoration: none;
    color: #000;
    font: 400 20px "Roboto", sans-serif;
    padding: 12px 32px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 180px;
    height: 40px;
    align-self: center;
    ${center}
    &:hover {
      background-color: #db0007;
    }
  }
`;

// Footer
export const FooterBg = styled.footer`
  background-color: #fff;
  height: 70px;
  padding: 20px 40px;
  ${center}
  justify-content: space-between;
`;
export const FooterLogoBg = styled.div`
  ${center}
  h1 {
    font: 200 16px "Roboto", sans-serif;
  }
  cursor: pointer;
`;
export const FooterLogo = styled.div`
  width: 30px;
  height: 25px;
  background-image: url(${footerlogo});
  background-repeat: no-repeat;
`;
export const FooterApp = styled.div`
  ${center}
  gap: 40px;
`;
export const FooterPlayStore = styled.div`
  width: 130px;
  height: 40px;
  background-image: url(${playstore});
  background-repeat: no-repeat;
`;
export const FooterAppStore = styled.div`
  width: 120px;
  height: 40px;
  background-image: url(${appstore});
  background-repeat: no-repeat;
`;
