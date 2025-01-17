import styled from "styled-components";

export const ProjetosBG = styled.div`
  display: flex;
  padding: 0 32px 0 32px;
  @media (max-width: 768px) {
    padding: 0 0 24px 12px;
  }
  @media (max-width: 368px) {
    padding: 0;
    align-items: flex-start;
  }
`;

export const ProjetosItem = styled.div`
  background-color: #4a5051;
  max-width: 130px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ProjetosImg = styled.div`
  img {
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
  }
  position: relative;
  overflow: hidden;
  height: 100%;

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
  }

  .image-overlay:hover {
    opacity: 1;
  }

  .image-title {
    color: white;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    transition: opacity 0.3s ease;
  }
`;

export const ProjetosDescricao = styled.div`
  padding: 12px 0 0 0;
  overflow-y: auto;
  max-height: 100px;
  h3 {
    font-size: clamp(0.5rem, 0.4194rem + 0.6452vw, 1rem);
    color: white;
    margin-bottom: 12px;
  }
  p {
    font-size: clamp(0.5rem, 0.4194rem + 0.6452vw, 1rem);
    text-align: center;
    color: white;
    cursor: pointer;
  }
  //Scroll
  &::-webkit-scrollbar {
    width: 0.5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 5px;
  }
`;
