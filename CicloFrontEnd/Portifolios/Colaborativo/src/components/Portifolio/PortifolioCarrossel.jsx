import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projetos from "./Portifolio";
import setaEsquerda from "../../assets/icon/setaEsquerda.svg";
import setaDireita from "../../assets/icon/setaDireita.svg";
import * as S from "./styled";
import { Link } from "react-router-dom";

const PortifolioCarrossel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <img src={setaEsquerda} alt="Anterior" />,
    nextArrow: <img src={setaDireita} alt="Próximo" />,
    responsive: [
      {
        breakpoint: 1268,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      }
    ],
  };

  return (
    <Slider {...settings}>
      {projetos.map((projeto) => (
        <S.ProjetosBG key={projeto.id}>
          <S.Projetos>
            <S.ProjetosItem>
              <S.ProjetosImg>
                <img src={projeto.image} alt={projeto.title} />
                <Link
                  to={projeto.link}
                  onClick={(e) => {
                    e.preventDefault();
                    const width = 600;
                    const height = 400;
                    const left = (window.screen.width - width) / 2;
                    const top = (window.screen.height - height) / 2;
                    window.open(
                      projeto.link,
                      "popup",
                      `width=${width},height=${height},left=${left},top=${top}`
                    );
                  }}
                >
                  <S.ProjetoTitulo>
                    <span>{projeto.title}</span>
                  </S.ProjetoTitulo>
                </Link>
              </S.ProjetosImg>
              <S.ProjetosDescricao>
                <h3>{projeto.title}</h3>
                <p>{projeto.description}</p>
              </S.ProjetosDescricao>
            </S.ProjetosItem>
          </S.Projetos>
        </S.ProjetosBG>
      ))}
    </Slider>
  );
};

export default PortifolioCarrossel;
