import styled from "styled-components";
import bigmac from "../../assets/BigMac.svg";
import batata from "../../assets/Batata.svg";
import sorvete from "../../assets/Sorvete.svg";
import pedidos from "../../assets/Pedidos.svg";
import restaurantes from "../../assets/Restaurantes.svg";
import medidas from "../../assets/Medidas.svg";

//Banner
export const BannerBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  background-color: #ffc72c;
  @media (max-width: 920px) {
    height: auto;
    padding: 50px;
  }
  @media (max-width: 310px) {
    height: auto;
    padding: 30px;
  }
`;
export const Banner = styled.div`
  display: flex;
  gap: 90px;
  @media (max-width: 920px) {
    align-items: center;
  }
  @media (max-width: 710px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const BannerTexto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
  cursor: default;
  h1 {
    font: 800 50px/60px "Inter", sans-serif;
    color: #fff;
  }
  span {
    color: #ff0000;
  }
  @media (max-width: 920px) {
    text-align: start;
  }
  @media (max-width: 320px) {
    h1 {
      font: 800 17px/20px "Inter", sans-serif;
    }
  }
`;
export const BannerItem = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
  border-radius: 75%;
  &:hover {
    transition: 0.9s ease;
    transform: scale(1.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  @media (max-width: 710px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 240px) {
    width: 160px;
    height: 160px;
  }
`;
export const BannerItens = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media (max-width: 710px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
  }
`;
export const BannerItem1 = styled.div`
  width: 130px;
  height: 100px;
  cursor: pointer;
  background-image: url(${bigmac});
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  &:hover {
    transform: scale(1.2);
    transition: 1.2s ease;
  }
`;
export const BannerItem2 = styled.div`
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-image: url(${batata});
  align-self: stretch;
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.2);
    transition: 1.2s ease;
  }
  @media (max-width: 710px) {
    align-self: center;
  }
`;
export const BannerItem3 = styled.div`
  width: 100px;
  height: 150px;
  cursor: pointer;
  background-image: url(${sorvete});
  background-repeat: no-repeat;
  background-size: cover;
  &:hover {
    transform: scale(1.2);
    transition: 1.2s ease;
  }
  @media (max-width: 710px) {
    margin-top: 20px;
  }
`;

//Promoção
export const PromocaoBg = styled.div`
  background-color: #feb706;
  height: 560px;
  font: 700 24px "Roboto", sans-serif;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    padding: 60px;
    cursor: default;
  }
  @media (max-width: 1000px) {
    height: auto;
    padding: 0 0 30px 0;
    h1 {
      padding: 20px;
    }
  }
  @media (max-width: 320px) {
    font: 700 12px "Roboto", sans-serif;
  }
`;
export const PromocaoItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const Pedidos = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${pedidos});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 320px) {
    width: 180px;
    height: 110px;
    border-radius: 8px 8px 0 0;
  }
`;
export const PromocaoItem1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  align-items: center;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: start;
    margin-bottom: 20px;
    height: 72px;
    cursor: default;
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #db0007;
      transition: 1.5s ease;
    }
  }
  @media (max-width: 320px) {
    width: 180px;
    height: 250px;
    a {
      padding: 0;
      width: 160px;
    }
    h2 {
      height: 50px;
    }
  }
`;
export const Restaurantes = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${restaurantes});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 320px) {
    width: 180px;
    height: 110px;
    border-radius: 8px 8px 0 0;
  }
`;
export const PromocaoItem2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  align-items: center;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: center;
    margin-bottom: 20px;
    height: 72px;
    cursor: default;
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #db0007;
      transition: 1.5s ease;
    }
  }
  @media (max-width: 320px) {
    width: 180px;
    height: 250px;
    a {
      padding: 0;
      width: 160px;
    }
    h2 {
      height: 50px;
    }
  }
`;
export const Medidas = styled.div`
  width: 280px;
  height: 150px;
  background-image: url(${medidas});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 320px) {
    width: 180px;
    height: 110px;
    border-radius: 8px 8px 0 0;
  }
`;
export const PromocaoItem3 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 280px;
  height: 300px;
  border-radius: 20px;
  align-items: center;
  h2 {
    font: 700 20px "Roboto", sans-serif;
    color: #000;
    padding: 12px;
    text-align: center;
    margin-bottom: 20px;
    height: 72px;
    cursor: default;
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #db0007;
      transition: 1.5s ease;
    }
  }
  @media (max-width: 320px) {
    width: 180px;
    height: 270px;
    a {
      width: 160px;
      padding: 0;
      margin-top: 20px;
    }
    h2 {
      height: 50px;
      padding: 10px;
    }
  }
`;
