import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projetos from "./Portifolio";
import setaEsquerda from "../../assets/setaEsquerda.svg";
import setaDireita from "../../assets/setaDireita.svg";
import * as S from "./styled";
import { Link } from "react-router-dom";

const PortifolioCarousel = () => {
  const settings = {
    // dots: false, // Pontos de navegação
    infinite: true, // Loop
    // speed: 500, // Velocidade de troca de slide
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true, // Autoplay
    // autoplaySpeed: 3000, // Tempo de troca de slide
    arrows: true, // Setas de navegação
    prevArrow: <img src={setaEsquerda} alt="Anterior" />,
    nextArrow: <img src={setaDireita} alt="Próximo" />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 368,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {projetos.map((projeto) => (
        <S.ProjetosBG key={projeto.id}>
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
                <div className="image-overlay">
                  <span className="imgTitle">{projeto.title}</span>
                </div>
              </Link>
            </S.ProjetosImg>
            <S.ProjetosDescricao>
              <h3>{projeto.title}</h3>
              <p>{projeto.description}</p>
            </S.ProjetosDescricao>
          </S.ProjetosItem>
        </S.ProjetosBG>
      ))}
    </Slider>
  );
};

export default PortifolioCarousel;
