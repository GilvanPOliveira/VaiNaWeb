import styled from 'styled-components';

const Container = styled.div`
  background-color: #000;
  padding: 32px;
  text-align: center;
  color: white;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;


const Footer = () => {
  return (
      <Container>
        <p>Desenvolvido por <Link href="https://github.com/GilvanPOliveira"> Gilvan Olievira </Link></p>
      </Container>
  );
};

export default Footer;
