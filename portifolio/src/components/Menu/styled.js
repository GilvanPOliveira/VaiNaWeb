import styled from "styled-components";

export const MenuBg = styled.div`
background-color: #4A5051;
width: 300px;
height: 100vh;
`;

export const Perfil = styled.div`
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 0 24px 0;
img{
    width: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const Nome = styled.h2`
font-size: clamp(0.5rem, 0.4194rem + 0.6452vw, 1rem);
padding: 24px 0 12px 0;
`;

export const Cargo = styled.p`
font-size: clamp(0.5rem, 0.4194rem + 0.6452vw, 1rem);
padding: 12px 0 12px 0;
`;

export const Menu = styled.nav`
li:nth-child(1){
    border-top: solid 1px white;
}
display: flex;
flex-direction: column;
list-style: none;
padding: 0 0 48px 0;
`;

export const MenuItem = styled.li`
border-bottom: solid 1px white;
padding: 24px 0 24px 0;
a{
  color: white ;
}
`;

export const Social = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
a{
  img{
    background-color: white;
    border-radius: 15%;
    width: 60px;
    height: 60px;
  }
}
`;
export const Git = styled.div`
a{
  img{
    border-radius: 50%;
  }
}
`;