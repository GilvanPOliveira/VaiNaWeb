# Desafio 10.2 - 📚 API de Doação de Livros

### Esta é uma API simples feita com Flask e SQLite que permite cadastrar e listar livros doados.

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
 <img src="https://i.imgur.com/f0TyKPe.png" height="150" />
 <img src="https://i.imgur.com/WJpEEjv.png" height="150" />
 <img src="https://i.imgur.com/G1EmRPL.png" height="150" />
 <img src="https://i.imgur.com/sfGmynH.png" height="150" />
 <img src="https://i.imgur.com/vOS8NHD.png" height="150" />
 <img src="https://i.imgur.com/AKeyKqf.png" height="150" />
 <img src="https://i.imgur.com/rx7OxYO.png" height="150" />
</div>

## Projeto da aplicação:

📌 [Figma](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=EndtmH2witkacjOy-0)

## Execução da aplicação:

📌 [Deploy](https://vai-na-web-livraria.vercel.app/)

 <br>
 
[<- Retornar ao Ciclo FullStack](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)

  <br>
  
[<- Retornar ao Repositório Vai na Web](https://github.com/GilvanPOliveira/VaiNaWeb)
