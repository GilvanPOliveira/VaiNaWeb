# API de Doação de Livros

API desenvolvida com Flask para cadastro e gerenciamento de livros.

##

## Sobre

Este projeto consiste em uma API simples que permite cadastrar, listar e remover livros utilizando banco de dados.

A aplicação foi construída para praticar conceitos de desenvolvimento backend e criação de serviços REST.

##

## Objetivo

Consolidar conhecimentos em desenvolvimento backend, incluindo:

* criação de APIs com Flask
* manipulação de dados com SQLite
* estruturação de endpoints REST
* comunicação via JSON
* organização de aplicações backend

##

## Funcionalidades

### Cadastro

* registro de livros com título, categoria, autor e imagem

##

### Listagem

* retorno de todos os livros cadastrados

##

### Remoção

* exclusão de livros por identificador

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

A API estará disponível em:
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
 <img src="https://i.imgur.com/Dropmkn.png" height="150" />
 <img src="https://i.imgur.com/sxipHyq.png" height="150" />
</div>

##

## Projeto

* [Figma](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=EndtmH2witkacjOy-0)

##

## Execução (Frontend)

* [Deploy](https://vai-na-web-fullstack-projeto-api.vercel.app/)

##

## Tecnologias Utilizadas

[![My Skills](https://skillicons.dev/icons?i=python,flask,sqlite&perline=10)](https://skillicons.dev)

* Python  
* Flask  
* SQLite  

##

## Contato

* Portfólio: https://gilvanpoliveira.github.io  
* Email: [gilvanoliveira06@gmail.com](mailto:gilvanoliveira06@gmail.com)

##

[← Voltar](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)
