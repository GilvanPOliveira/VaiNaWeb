import Menu from "../../components/Menu/Menu";
import * as S from "./styled";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import styled from "../../assets/styled.svg";

export default function Sobre() {
  return (
    <S.MainBg> 
      <Menu />
      <S.Main>
        <S.Texto>
          <div>
            <h2> Sobre mim</h2>
          </div>
          <div>
            <p>
              Lore m ipsum dolor sit amet consectetur adipisicing elit. Maiores
              suscipit incidunt distinctio optio velit sapiente modi, nemo eaque
              temporibus aliquid cum ea quod laboriosam deserunt voluptatum corrupti vitae delectus voluptate?
            </p>
          </div>
        </S.Texto>
        <S.Skill>
          <div>
            <h2>Habilidades:</h2>
            <S.Skills>
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={javascript} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={styled} alt="Styled-Components" />
            </S.Skills>
          </div>
        </S.Skill>
      </S.Main>
    </S.MainBg>
  );
}
