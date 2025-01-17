import * as S from "./styled";
import { Link } from "react-router-dom";
import perfil from "../../assets/perfil.jpg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export default function Menu() {
  return (
    <S.MenuBg>
      <S.Perfil title="Gilvan Oliveira">
        <img src={perfil} alt="Perfil" />
        <S.Nome>Gilvan Oliveira</S.Nome>
        <S.Cargo>Developer</S.Cargo>
      </S.Perfil>

      <S.Menu>
        <ul>
          <S.MenuItem>
            <Link to="/" title="Início">
              Home
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/sobre" title="Sobre Mim">
              Sobre Mim
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/projetos" title="Projetos">
              Projetos
            </Link>
          </S.MenuItem>
        </ul>
      </S.Menu>

      <S.Social>
        <a href="https://www.linkedin.com/in/gilvanpoliveira/" title="Linkedin">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <S.Git title="GitHub">
          <a href="https://github.com/GilvanPOliveira">
            <img src={github} alt="GitHub" />
          </a>
        </S.Git>
      </S.Social>
    </S.MenuBg>
  );
}
