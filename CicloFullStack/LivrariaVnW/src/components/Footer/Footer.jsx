import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import S from "../Footer/style.module.scss";

export default function footer() {
  return (
    <div>
      <section className={S.boxContato}>
        <a
          href="https://web.whatsapp.com/send?phone=40028922&text=Olá,%20vamos%20conversar?"
          target="_blank"
          title="Entre em contato conosco"
        >
          <h3> 4002-8922 </h3>
        </a>
        <nav>
          <a href="https://www.facebook.com/vainaweb">
            <img src={facebook} alt="Logo do Facebook" title="Facebook"/>
          </a>

          <a href="https://x.com/vainaweb">
            <img src={twitter} alt="Logo do Twitter" title="Twitter"/>
          </a>

          <a href="https://www.youtube.com/channel/UCzUldn76ZB0b-g6WOij9m3w">
            <img src={youtube} alt="Logo do YouTube" title="YouTube"/>
          </a>

          <a href="https://br.linkedin.com/company/vainaweb">
            <img src={linkedin} alt="Logo do Linkedin" title="Linkedin"/>
          </a>

          <a href="https://www.instagram.com/vainaweb/">
            <img src={instagram} alt="Logo do Instagram" title="Instagram"/>
          </a>
        </nav>
      </section>
      <section className={S.boxFooter}>
        <p title="Desafio Empower - Vai na Web">Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </div>
  );
}
