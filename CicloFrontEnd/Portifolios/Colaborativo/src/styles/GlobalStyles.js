import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    } 
    h2 {
        font-size: clamp(1.5rem, 2.5vw, 3rem);
    }
    span {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
    }
    p {
        font-size: clamp(1rem, 1.5vw, 1.5rem);
    }
    h3 {
        font-size: clamp(1rem, 2vw, 2.5rem);
    }
    .menu-titulo {
        font-size: clamp(1rem, 1.25vw, 1.5rem);
    }
    .perfil-nome {
        font-size: clamp(1rem, 1.25vw, 1.5rem);
    }
    .perfil-cargo {
        font-size: clamp(0.75rem, 1vw, 1.25rem);    
    }
    .menu-links h2 {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
    }
    .menu-links li a {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
    }
`;

/* Paleta de cores:
#131524 (Azul Marinho) Texto
#19182d (Índigo Escuro) Menu
#303651 (Azul-petróleo) Borda
#5a61ff (Azul Elétrico) Hover
#8a8cff (Azul Pálido) Selecionado
#c7d2dc (Azul Pastel) Background
#e6e8f0 (Cinza Azulado) Texto 
*/
