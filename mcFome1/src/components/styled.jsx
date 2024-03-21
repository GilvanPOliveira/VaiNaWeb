import { createGlobalStyle, styled } from "styled-components";
import logo from "../assets/logo.svg";
import celularApp from "../assets/celularApp.svg";
import celularEncomenda from "../assets/celular.svg";
import bigmac from "../assets/bigmac.png";
import batata from "../assets/batata.png";
import sorvete from "../assets/sorvete.png";
import encomenda from "../assets/encomenda.png";
import loja from "../assets/loja.png";
import aviso from "../assets/aviso.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'); 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    max-width: 1115px;
    margin: 0 auto;
  }
`;

// Header
export const HeaderBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
`;

export const HeaderLogo = styled.header`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 60px;
  height: 50px;
`;

export const HeaderMenu = styled.div`
  display: flex;
  gap: 34px;
`;

export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    font-family: "Inter", sans-serif;
    margin-top: 4px;
  }
`;

export const CelularApp = styled.div`
  background-image: url(${celularApp});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
`;

export const HeaderEncomenda = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #000;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    font-family: "Inter", sans-serif;
    margin-top: 4px;
  }
  background-color: #ffc72c;
  border-radius: 8px;
  width: 160px;
  height: 45px;
  justify-content: center;
  gap: 6px;
  &:hover {
    background-color: #db0007;
  }
`;

export const CelularEncomenda = styled.div`
  background-image: url(${celularEncomenda});
  background-repeat: no-repeat;
  width: 25px;
  height: 30px;
`;

// Banner
export const BannerBg = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 50px 15px 50px 15px;
  background-color: #ffc72c;
  height: 600px;
`;

export const Banner = styled.div`
  display: flex;
  gap: 120px;
  padding: 20px;
  align-self: center;
  align-items: center;
  /* cursor: pointer; */
  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 40px;
    line-height: 1.2;
    color: #fff;
    cursor: default;
    span {
      color: #db0007;
    }
  }
`;

export const BannerItens = styled.div`
  display: flex;
  align-self: center;
  gap: 80px;
  padding: 40px;
  align-items: center;
`;

export const BannerItem1 = styled.div`
  background-image: url(${bigmac});
  background-repeat: no-repeat;
  background-size: cover;
  width: 120px;
  height: 110px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const BannerItem2 = styled.div`
  background-image: url(${batata});
  background-repeat: no-repeat;
  width: 120px;
  height: 110px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

export const BannerItem3 = styled.div`
  background-image: url(${sorvete});
  background-repeat: no-repeat;
  width: 120px;
  height: 110px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

// Promoção
export const PromocaoBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  padding: 50px 15px 50px 15px;
  background-color: #feb706;
  height: 600px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: #fff;
  }
`;

export const PromocaoItens = styled.div`
  display: flex;
  gap: 60px;
  padding: 60px;
  align-items: center;
`;

export const PromocaoItem1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    padding: 12px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    margin-top: 30px;
    padding: 24px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #db0007;
    }
  }
`;

export const Encomenda = styled.div`
  background-image: url(${encomenda});
  background-repeat: no-repeat;
  background-size: cover;
  width: 280px;
  height: 150px;
`;

export const PromocaoItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    padding: 12px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    margin-top: 10px;
    padding: 24px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #db0007;
    }
  }
`;

export const Loja = styled.div`
  background-image: url(${loja});
  background-repeat: no-repeat;
  background-size: cover;
  width: 280px;
  height: 150px;
`;

export const PromocaoItem3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 280px;
  height: 300px;
  background-color: #fff;
  border-radius: 20px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    padding: 12px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    font-family: "Roboto", sans-serif;
    margin-top: 10px;
    padding: 24px;
    background-color: #ffbc0d;
    border-radius: 10px;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #db0007;
    }
  }
`;

export const Aviso = styled.div`
  background-image: url(${aviso});
  background-repeat: no-repeat;
  background-size: cover;
  width: 280px;
  height: 150px;
`;

// Footer
export const FooterBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 32px;
  background-color: #fff;
`;

export const FooterCopy = styled.div`
  display: flex;
  a {
    text-decoration: none;
    color: #000;
  }
  gap: 10px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    margin-top: 3px;
  }
`;

export const FooterLogo = styled.header`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 20px;
`;

export const FooterApp = styled.div`
  display: flex;
  gap: 40px;
`;

export const PlayStore = styled.div`
  background-image: url(${playstore});
  background-repeat: no-repeat;
  width: 130px;
  height: 40px;
`;

export const AppStore = styled.div`
  background-image: url(${appstore});
  background-repeat: no-repeat;
  width: 120px;
  height: 40px;
`;
