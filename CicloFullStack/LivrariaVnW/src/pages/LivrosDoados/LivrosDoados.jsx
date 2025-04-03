import S from "./style.module.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);
  const [mensagem, setMensagem] = useState(null);
  const [tipoMensagem, setTipoMensagem] = useState("success");
  const [editando, setEditando] = useState(null);
  const [camposEdicao, setCamposEdicao] = useState({
    titulo: "",
    autor: "",
    categoria: "",
    imagem_url: "",
  });

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const termoBusca = query.get("busca")?.toLowerCase() || "";
  const navigate = useNavigate();

  const getLivros = async () => {
    try {
      const response = await axios.get(
        "https://vai-na-web-livraria-api.onrender.com/livros"
      );
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(termoBusca)
  );

  const deletarLivro = async (id) => {
    try {
      await axios.delete(
        `https://vai-na-web-livraria-api.onrender.com/livros/${id}`
      );
      setMensagem("Livro excluído com sucesso!");
      setTipoMensagem("success");
      getLivros();
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      setMensagem("Erro ao excluir o livro!");
      setTipoMensagem("error");
    }
    setTimeout(() => setMensagem(null), 3000);
  };

  const iniciarEdicao = (livro) => {
    setEditando(livro.id);
    setCamposEdicao({
      titulo: livro.titulo,
      autor: livro.autor,
      categoria: livro.categoria,
      imagem_url: livro.imagem_url,
    });
  };

  const salvarEdicao = async (id) => {
    try {
      await axios.patch(
        `https://vai-na-web-livraria-api.onrender.com/livros/${id}`,
        camposEdicao
      );
      setMensagem("Livro atualizado com sucesso!");
      setTipoMensagem("success");
      setEditando(null);
      getLivros();
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      setMensagem("Erro ao atualizar o livro!");
      setTipoMensagem("error");
    }
    setTimeout(() => setMensagem(null), 3000);
  };

  return (
    <>
      <section className={S.boxContainer}>
        <h2>Livros Doados</h2>

        {termoBusca &&
          (livrosFiltrados.length > 0 ? (
            <p className={S.resultadoBusca}>
              Resultado da busca por: <strong>{query.get("busca")}</strong>
            </p>
          ) : (
            <p className={S.resultadoBusca}>
              Nenhum livro encontrado para:{" "}
              <strong>{query.get("busca")}</strong>
            </p>
          ))}

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

        <section className={S.boxCard}>
          {livrosFiltrados.map((item) => (
            <article key={item.id} className={termoBusca ? S.destaque : ""}>
              <img src={item.imagem_url} alt={item.titulo} />
              {editando === item.id ? (
                <>
                  <input
                    type="text"
                    className={S.inputEdicao}
                    value={camposEdicao.titulo}
                    onChange={(e) =>
                      setCamposEdicao({
                        ...camposEdicao,
                        titulo: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className={S.inputEdicao}
                    value={camposEdicao.autor}
                    onChange={(e) =>
                      setCamposEdicao({
                        ...camposEdicao,
                        autor: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className={S.inputEdicao}
                    value={camposEdicao.categoria}
                    onChange={(e) =>
                      setCamposEdicao({
                        ...camposEdicao,
                        categoria: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className={S.inputEdicao}
                    value={camposEdicao.imagem_url}
                    onChange={(e) =>
                      setCamposEdicao({
                        ...camposEdicao,
                        imagem_url: e.target.value,
                      })
                    }
                  />
                  <div className={S.botoesEdicao}>
                    <button
                      className={S.salvar}
                      onClick={() => salvarEdicao(item.id)}
                    >
                      Salvar
                    </button>
                    <button
                      className={S.cancelar}
                      onClick={() => setEditando(null)}
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3>{item.titulo}</h3>
                  <p>{item.autor}</p>
                  <p>{item.categoria}</p>
                  <div className={S.botoesEdicao}>
                    <button
                      className={S.editar}
                      onClick={() => iniciarEdicao(item)}
                    >
                      ✏️ Editar
                    </button>
                    <button
                      className={S.excluir}
                      onClick={() => deletarLivro(item.id)}
                    >
                      🗑️ Excluir
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </section>

        {termoBusca && (
          <button
            className={S.btnVoltar}
            onClick={() => navigate("/livros-doados")}
          >
            Retornar aos Livros Doados
          </button>
        )}
      </section>

      <button className={S.btnDoarMais} onClick={() => navigate("/doacao")}>
        Deseja doar mais um livro?
      </button>
    </>
  );
}
