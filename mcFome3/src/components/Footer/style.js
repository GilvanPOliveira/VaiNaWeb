import styled from "styled-components";
import footerLogo from "../../assets/Logo.svg";
import playstore from "../../assets/Play_Store.svg";
import appstore from "../../assets/App_Store.svg";

export const FooterBg = styled.footer`
  background-color: #fff;
  padding: 50px 25px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 555px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px 12px;
  }
`;
export const FooterLogoImg = styled.div`
  background-image: url(${footerLogo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 24px;
  cursor: pointer;
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: end;
  gap: 15px;
  h1 {
    font: 200 16px/19px "Roboto", sans-serif;
    cursor: default;
  }
  @media (max-width: 555px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FooterApp = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 555px) {
    flex-direction: column;
    gap: 20px;
    padding:  0 0 30px 0 ;
  }
`;
export const FooterPlayStore = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 3px;
  background-image: url(${playstore});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FooterAppStore = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 3px;
  background-image: url(${appstore});
  background-repeat: no-repeat;
  background-size: cover;
`;
