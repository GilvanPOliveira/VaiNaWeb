import Menu from "../../components/Menu/Menu";
import * as S from "./styled";
import miniwiki from "../../assets/miniwiki.png";
import mc from "../../assets/mc.png";
import natal from "../../assets/natal.png";
import prime from "../../assets/prime.png";
import selfcare from "../../assets/selfcare.png";
import beat from "../../assets/beat.png";
import vite from "../../assets/vite.png";

import Carousel from "react-grid-carousel";

export default function Sobre() {
  return (
    <S.MainBg>
      <Menu />
      <S.Main>
        <h2>Projetos</h2>
        <S.Projetos>
          <Carousel
            cols={3}
            rows={1}
            gap={50}
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 2,
                rows: 2,
                gap: 50,
              },
              {
                breakpoint: 768,
                cols: 1,
                rows: 2,
                gap: 50,
              },
            ]}
            loop
          >
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={miniwiki} alt="MiniWiki" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={beat} alt="Beat" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={mc} alt="McDonalds" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={vite} alt="Vite + React" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={selfcare} alt="SelfCare" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={prime} alt="Prime Video" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
            <Carousel.Item>
              <S.ProjetosItem>
                <S.ProjetosImg>
                  <img src={natal} alt="Projeto Natal" />
                </S.ProjetosImg>
                <S.ProjetosDescricao>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae distinctio, velit eos voluptatum ipsum similique
                    dignissimos blanditiis delectus nostrum iure dolorem ut
                    asperiores tenetur, sapiente voluptatibus? Asperiores,
                    recusandae? Facere, ea.
                  </p>
                </S.ProjetosDescricao>
              </S.ProjetosItem>
            </Carousel.Item>
          </Carousel>
        </S.Projetos>
      </S.Main>
    </S.MainBg>
  );
}
