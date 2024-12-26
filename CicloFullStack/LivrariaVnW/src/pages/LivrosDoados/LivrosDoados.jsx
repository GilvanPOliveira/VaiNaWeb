import S from "./style.module.scss";
import livro01 from "../../assets/livro01.png";

export default function LivrosDoados() {
  return (
    <section className={S.boxContainer}>
      <h2>Livros Doados</h2>
      <section className={S.boxCard}>
        <article>
          <img src={livro01} alt="O Protagonista" title="O Protagonista" />
          <p>O Protagonista</p>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}
