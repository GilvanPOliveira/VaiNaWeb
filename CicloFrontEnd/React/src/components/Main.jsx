import React from "react";
import styled from "styled-components";
import Logo from "../assets/vnw.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  height: 50vh;
`;

const Imagem = styled.img`
  width: 350px;
  height: auto;
`;

const Main = () => {
  return (
    <Container>
      <a href="https://vainaweb.com.br/"><Imagem src={Logo} alt="Vai na Web"/></a>
    </Container>
  );
};

export default Main;
