import S from "./style.module.scss";
import livro from "../../assets/livro.svg";
import axios from "axios";
import { useState } from "react";

export default function Doacao() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");
  const [mensagem, setMensagem] = useState(null);
  const [tipoMensagem, setTipoMensagem] = useState("success");

  const enviarDados = async () => {
    const urlApi = "https://vai-na-web-livraria-api.onrender.com/doar";
    const dadosEnviar = { titulo, categoria, autor, imagem_url };

    try {
      await axios.post(urlApi, dadosEnviar);
      setMensagem("Livro cadastrado com sucesso!");
      setTipoMensagem("success");

      setTitulo("");
      setCategoria("");
      setAutor("");
      setImagem_url("");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setMensagem("Erro ao cadastrar o livro!");
      setTipoMensagem("error");
    }

    setTimeout(() => setMensagem(null), 3000); // limpa mensagem após 3s
  };

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagem_url(e.target.value);
  };

  return (
    <section className={S.boxContainer}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>

      <div className={S.boxFormulario}>
        <div className={S.mensagemBg}>
          <div
            className={`${S.mensagem} ${
              mensagem ? (tipoMensagem === "success" ? S.success : S.error) : ""
            }`}
            style={{
              visibility: mensagem ? "visible" : "hidden",
              opacity: mensagem ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {mensagem || "Mensagem placeholder"}
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={livro} alt="" />
            <h3>Informações do Livro</h3>
          </div>
          <input
            type="text"
            placeholder="Titulo"
            onChange={capturaTitulo}
            value={titulo}
          />
          <input
            type="text"
            placeholder="Categoria"
            onChange={capturaCategoria}
            value={categoria}
          />
          <input
            type="text"
            placeholder="Autor"
            onChange={capturaAutor}
            value={autor}
          />
          <input
            type="text"
            placeholder="Link da Imagem"
            onChange={capturaImagem}
            value={imagem_url}
          />
          <input
            className={S.doar}
            type="submit"
            value="Doar"
            onClick={enviarDados}
          />
        </form>
      </div>
    </section>
  );
}
