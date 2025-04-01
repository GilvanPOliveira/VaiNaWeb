let livros = [];
let livrosExibidos = 3;
let modoEdicao = false;
let livroEditandoId = null;

const campos = {
  titulo: document.getElementById("titulo"),
  categoria: document.getElementById("categoria"),
  autor: document.getElementById("autor"),
  imagem_url: document.getElementById("imagem_url"),
};

const botaoAcao = document.querySelector(".btn-container button");

function showMessage(message, type) {
  const messageBox = document.getElementById("messageBox");
  messageBox.innerText = message;
  messageBox.className = "message " + type;
  messageBox.style.display = "block";
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}

function limparCampos() {
  campos.titulo.value = "";
  campos.categoria.value = "";
  campos.autor.value = "";
  campos.imagem_url.value = "";

  modoEdicao = false;
  livroEditandoId = null;
  botaoAcao.textContent = "Cadastrar Livro";
}

async function doarLivro() {
  const { titulo, categoria, autor, imagem_url } = campos;

  if (!titulo.value || !categoria.value || !autor.value || !imagem_url.value) {
    showMessage("Todos os campos são obrigatórios!", "error");
    return;
  }

  if (modoEdicao) {
    await atualizarLivro(livroEditandoId);
    return;
  }

  const response = await fetch("http://127.0.0.1:5000/doar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      titulo: titulo.value,
      categoria: categoria.value,
      autor: autor.value,
      imagem_url: imagem_url.value,
    }),
  });

  const data = await response.json();
  showMessage(data.mensagem || data.erro, data.mensagem ? "success" : "error");

  limparCampos();
  livrosExibidos = livros.length;
  listarLivros();
}

async function listarLivros() {
  const response = await fetch("http://127.0.0.1:5000/livros", { cache: "no-store" });
  livros = await response.json();
  livrosExibidos = livros.length;
  renderizarLivros();
}


function renderizarLivros() {
  const lista = document.getElementById("listaLivros");
  lista.innerHTML = "";

  const livrosParaMostrar = livros.slice(0, livrosExibidos);

  livrosParaMostrar.forEach((livro) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <img src="${livro.imagem_url}" alt="Capa do livro">
      <div>
        <strong>${livro.titulo}</strong><br>
        ${livro.autor} - <em>${livro.categoria}</em>
        <div style="margin-top: 5px;">
          <button onclick="deletarLivro(${livro.id})">🗑️</button>
          <button onclick="editarLivro(${livro.id})">✏️</button>
        </div>
      </div>
    `;
    lista.appendChild(item);
  });
}

function carregarMaisLivros() {
  const proximoLote = livrosExibidos + 9;
  livrosExibidos = Math.min(proximoLote, livros.length);
  renderizarLivros();
}

async function deletarLivro(id) {
  const response = await fetch(`http://127.0.0.1:5000/livros/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  showMessage(
    data.mensagem || data.erro,
    data.mensagem ? "success" : "error"
  );
  listarLivros();
}

function editarLivro(id) {
  const livro = livros.find((l) => l.id === id);
  if (!livro) return;

  campos.titulo.value = livro.titulo;
  campos.categoria.value = livro.categoria;
  campos.autor.value = livro.autor;
  campos.imagem_url.value = livro.imagem_url;

  modoEdicao = true;
  livroEditandoId = id;
  botaoAcao.textContent = "Salvar Alterações";
}

async function atualizarLivro(id) {
  const { titulo, categoria, autor, imagem_url } = campos;

  const response = await fetch(`http://127.0.0.1:5000/livros/${id}`, {
    method: "PATCH", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      titulo: titulo.value,
      categoria: categoria.value,
      autor: autor.value,
      imagem_url: imagem_url.value,
    }),
  });

  const data = await response.json();
  showMessage(data.mensagem || data.erro, data.mensagem ? "success" : "error");

  limparCampos();
  livrosExibidos = livros.length;
  listarLivros();
}

window.onload = async () => {
  await listarLivros();

  document
    .querySelector(".list-container")
    .addEventListener("scroll", function () {
      if (this.scrollTop + this.clientHeight >= this.scrollHeight) {
        carregarMaisLivros();
      }
    });

  botaoAcao.textContent = "Cadastrar Livro";
};
