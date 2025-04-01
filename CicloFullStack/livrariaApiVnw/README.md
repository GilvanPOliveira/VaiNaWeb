# Desafio 10.2 - Projeto API - Livraria Vai na Web

### Contextualização:

O nosso segundo desafio do módulo de Back-end é desenvolver uma API utilizando e para cadastrar e listar livros. Você irá aplicar os  conceitos que aprendemos de desenvolvimento web, banco de dados e boas práticas na construção de APIs.  

Você precisa criar uma API em Flask que permita:
  - Cadastrar um livro no banco de dados (POST com a rota /doar)  
  - Listar todos os livros cadastrados (GET com a rota /livros)  
  - Exibir uma página inicial (GET com a rota /) com uma mensagem personalizada à sua escolha.

⚙️ Requisitos técnicos:
1️⃣ Utilize Flask para criar as rotas.
2️⃣ Utilize SQLite como banco de dados.  
3️⃣ A tabela do banco de dados deve ser chamada LIVROS e conter os seguintes campos:
  - id (chave primária, autoincrementada)
  - titulo (texto, obrigatório)
  - categoria (texto, obrigatório)
  - autor (texto, obrigatório)
  - imagem_url (texto, obrigatório)
5️⃣ Ao cadastrar um novo livro, a API deve retornar uma resposta JSON com o código 201 confirmando o cadastro.  
6️⃣ A rota GET /livros deve retornar todos os livros cadastrados no banco de dados, organizados em um JSON contendo: 
  - id
  - título
  - categoria
  - autor
  - imagem_url  
7️⃣ A rota inicial (/) deve exibir uma mensagem personalizada que você irá criar!

## Imagens da aplicação:

<div align="left">
 <img src="" height="150" />
</div>

## Projeto da aplicação:

📌 [Figma](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=EndtmH2witkacjOy-0)

## Execução da aplicação:

📌 [Deploy]()

 <br>
 
[<- Retornar ao Ciclo FullStack](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)

  <br>
  
[<- Retornar ao Repositório Vai na Web](https://github.com/GilvanPOliveira/VaiNaWeb)
