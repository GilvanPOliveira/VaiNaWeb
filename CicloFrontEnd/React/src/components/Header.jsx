import React, { useState } from 'react';
import styled from 'styled-components';

const RGBB = styled.div`
  background-color: ${({ bgColor }) => bgColor || '#000'};
  padding: 16px;
  text-align: center;
  color: white;
  transition: 0.5s;
`;

const Container = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: transparent;
  color: #fff;
  &:hover {
    scale: 1.5;
  }
`;

const Header = () => {
  const [bgColor, setbgColor] = useState('#000');

  const mudarCor = (color) => {
    setbgColor(color);
  };

  return (
    <RGBB bgColor={bgColor}>
      <h1>Mude a cor de fundo da Header:</h1>
      <Container>
        <Button onClick={() => mudarCor('#ff0000')}>Vermelho</Button>
        <Button onClick={() => mudarCor('#009933')}>Verde</Button>
        <Button onClick={() => mudarCor('#0066ff')}>Azul</Button>
        <Button onClick={() => mudarCor('#000')}>Preto</Button>
      </Container>
    </RGBB>
  );
};

export default Header;
