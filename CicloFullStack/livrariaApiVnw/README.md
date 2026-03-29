# Livraria com API

Aplicação full stack integrando frontend de livraria com API backend.

##

## Sobre

Este projeto integra a aplicação de Livraria com uma API backend, permitindo o armazenamento e gerenciamento de dados em banco.

A proposta foi conectar frontend e backend para simular o funcionamento completo de uma aplicação real.

##

## Objetivo

Consolidar conhecimentos em desenvolvimento full stack, incluindo:

* integração entre frontend e backend
* criação de APIs com Flask
* manipulação de dados em banco
* consumo de endpoints
* organização de aplicações completas

##

## Funcionalidades

### Gerenciamento de Livros

* cadastro de livros
* listagem de registros
* remoção de livros

##

### API

* criação de endpoints REST
* comunicação via JSON
* persistência de dados com banco

##

## Execução

### Clonar o projeto

```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
```

### Ambiente virtual (opcional)

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### Instalar dependências

```bash
pip install -r requirements.txt
```

### Iniciar servidor

```bash
python app.py
```

A aplicação estará disponível em:
http://localhost:5000

##

## Endpoints

### POST /doar

Cadastra um novo livro.

```json
{
  "titulo": "Dom Casmurro",
  "categoria": "Romance",
  "autor": "Machado de Assis",
  "imagem_url": "https://link-da-imagem.com"
}
```

##

### GET /livros

Retorna todos os livros cadastrados.

##

### DELETE /livros/{id}

Remove um livro pelo identificador.

##

## Imagens da Aplicação

<div align="left">
 <img src="https://i.imgur.com/f0TyKPe.png" height="150" />
 <img src="https://i.imgur.com/WJpEEjv.png" height="150" />
 <img src="https://i.imgur.com/G1EmRPL.png" height="150" />
 <img src="https://i.imgur.com/sfGmynH.png" height="150" />
 <img src="https://i.imgur.com/vOS8NHD.png" height="150" />
 <img src="https://i.imgur.com/AKeyKqf.png" height="150" />
 <img src="https://i.imgur.com/rx7OxYO.png" height="150" />
</div>

##

## Projeto

* [Figma](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=EndtmH2witkacjOy-0)

##

## Execução (Frontend)

* [Deploy](https://vai-na-web-fullstack-livraria-vnw-a.vercel.app/)

##

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=python,flask,sqlite,html,css,js,react&perline=10)](https://skillicons.dev)

* Python  
* Flask  
* SQLite  
* HTML  
* CSS  
* JavaScript  
* React  

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io  
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)
