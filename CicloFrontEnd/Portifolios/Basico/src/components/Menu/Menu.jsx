import * as S from "./styled";
import { Link } from "react-router-dom";
import perfil from "../../assets/perfil.jpg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import facebook from "../../assets/facebook.svg";

export default function Menu() {
  return (
    <S.MenuBg>

      <S.Perfil>
        <img src={perfil} alt="Perfil"/>
        <S.Nome>Gilvan Oliveira</S.Nome>
        <S.Cargo> Front-End Developer</S.Cargo>
      </S.Perfil>

      <S.Menu>
        <ul>
          <S.MenuItem>
            <Link to="/">Home</Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/sobre">Sobre Mim</Link>
          </S.MenuItem >
          <S.MenuItem> 
            <Link to="/projetos">Projetos</Link>
          </S.MenuItem>
        </ul>
      </S.Menu>

      <S.Social>
        <a href="https://www.linkedin.com/in/gilvanpoliveira/">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <S.Git>
          <a href="https://github.com/GilvanPOliveira">
            <img src={github} alt="GitHub" />
          </a>
        </S.Git>
        <a href="https://www.facebook.com/gilvanpoliveira06/">
          <img src={facebook} alt="Facebook" />
        </a>
      </S.Social>
      
    </S.MenuBg>
  );
}
