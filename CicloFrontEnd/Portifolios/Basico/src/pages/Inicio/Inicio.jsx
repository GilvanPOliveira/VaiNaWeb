import Menu from "../../components/Menu/Menu";
import Perfil from "../../assets/perfil.jpg";
import * as S from "./styled";

export default function Inicio() {
  return (
    <S.MainBg>
      <Menu />
      <S.Main>
        <S.Texto>
          <div>
            <h1> Olá, meu nome é Gilvan Oliveira sou dev Front-End </h1>
          </div>
          <div>
            <p>
              Não é a linguagem de programação que define o programador, mas sim sua lógica. 
            </p>
          </div>
        </S.Texto>
        <img src={Perfil}  alt="Perfil" />
      </S.Main>
    </S.MainBg>
  );
}
