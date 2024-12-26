import S from "./style.module.scss";
import livro from "../../assets/livro.svg";

export default function Doacao() {
  return (
    <section className={S.boxContainer}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <div className={S.boxFormulario}>
        <form action="">
          <div>
            <img src={livro} alt="Livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input
            type="text"
            placeholder="Titulo"
            title="Insira o Título do livro"
          />
          <input
            type="text"
            placeholder="Categoria"
            title="Insira a Categoria do livro"
          />
          <input
            type="text"
            placeholder="Autor"
            title="Insira o Autor(a) do livro"
          />
          <input
            type="text"
            placeholder="Link da Imagem"
            title="Insira o link da imagem do livro"
          />
          <input type="submit" value="Doar" title="Clique para Doar" />
        </form>
      </div>
    </section>
  );
}
