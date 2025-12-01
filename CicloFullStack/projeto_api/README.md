<div align="center">
 <a href="https://vainaweb.com.br/">
 <img src="https://i.imgur.com/Ea78oHo.png" width="30%" />
 </a>
</div>

<br>

# 📌 Desafio - API de Doação de Livros

### Contextualizando:
Esta é uma API simples feita com Flask e SQLite que permite cadastrar e listar livros doados.

<hr>

# ▶️ Como rodar o projeto

Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
```
Crie um ambiente virtual (opcional, mas recomendado):
```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

Instale as dependências:
```bash
pip install -r requirements.txt
```

Inicie o servidor:
```bash
python app.py
```

<blockquote> A API estará disponível em http://localhost:5000 </blockquote>
<hr>

# 🔗 Endpoints

## ➕ POST <code>/doar</code>
Cadastra um novo livro.

**Requisição (JSON):**
```bash
{
  "titulo": "Dom Casmurro",
  "categoria": "Romance",
  "autor": "Machado de Assis",
  "imagem_url": "https://link-da-imagem.com"
}
```
**Resposta (201):**
```bash
{
  "mensagem": "Livro cadastrado com sucesso!"
}
```

<hr>

## 📚 GET <code>/livros</code>
Retorna todos os livros cadastrados.

**Resposta (200):**
```bash
[
  {
    "id": 1,
    "titulo": "Dom Casmurro",
    "categoria": "Romance",
    "autor": "Machado de Assis",
    "imagem_url": "https://link-da-imagem.com"
  }
]
```

<hr>

## ❌ DELETE <code>/livros/id</code>
Deletar um Livro.

**Resposta (200):**
```bash
{
    "menssagem": "Livro excluido com sucesso!"
}
```

<hr>

# 🧰 Tecnologias utilizadas
- Python 3
- Flask
- SQLite
- Flask-CORS

<hr>

## Imagens da aplicação:

<div align="left">
 <img src="https://i.imgur.com/Dropmkn.png" height="150" />
 <img src="https://i.imgur.com/sxipHyq.png" height="150" />
</div>

## Projeto da aplicação:

📌 [Figma](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=EndtmH2witkacjOy-0)

## Execução da aplicação:

📌 [Deploy](https://vai-na-web-fullstack-projeto-api.vercel.app/)

 <br>
 
[<- Retornar](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)