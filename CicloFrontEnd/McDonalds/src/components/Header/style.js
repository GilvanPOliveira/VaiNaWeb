import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import app_Icon from "../../assets/App_Icon.png";
import app_Celular from "../../assets/App_Celular.svg";

export const HeaderBg = styled.header`
  background-color: #fff;
  height: 90px;
  padding: 50px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 505px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 30px 12px;
  }
`;
export const HeaderLogoImg = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  height: 50px;
  cursor: pointer;
`;
export const HeaderApp = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 505px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const HeaderDownload = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 25px;
  h1 {
    font: 200 16px/19px "Roboto", sans-serif;
  }
  cursor: pointer;
`;
export const HeaderAppIcon = styled.div`
  background-image: url(${app_Icon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 29px;
  height: 30px;
  @media (max-width: 240px) {
    display: none;
  }
`;
export const HeaderPedidos = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ffc72c;
  padding: 10px 30px;
  border-radius: 8px;
  h1 {
    font: 700 12px/15px "Inter", sans-serif;
  }
  a {
    color: #000;
  }
  &:hover {
    background-color: #db0007;
  }
  cursor: pointer;
`;
export const HeaderEncomendaApp = styled.div`
  background-image: url(${app_Celular});
  background-repeat: no-repeat;
  background-size: cover;
  width: 26px;
  height: 32px;
  @media (max-width: 240px) {
    display: none;
  }
`;
