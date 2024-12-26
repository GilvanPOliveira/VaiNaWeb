import * as S from "./styled";
import PortifolioCarousel from "../../components/Portifolio/PortifolioCarousel";
import Menu from "../../components/Menu/Menu";

export default function Projetos() {
  return (
    <S.MainBg>
      <Menu />
      <S.Main>
        <h2>Projetos </h2>
        <S.Projetos>

          <PortifolioCarousel/>
        </S.Projetos>
      </S.Main> 
    </S.MainBg>
  );
}
