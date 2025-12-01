<div align="center">
 <a href="https://vainaweb.com.br/">
 <img src="https://i.imgur.com/Ea78oHo.png" width="30%" />
 </a>
</div>

<br>

# 📌 Desafio - Pokedex (Consumo de API)

### Contextualização:

Aplicação desenvolvida no **Ciclo FullStack** do programa **Vai na Web**: uma **Pokédex interativa** construída com **React + Vite**, consumindo a **[PokeAPI](https://pokeapi.co/)** para exibir informações detalhadas dos Pokémon.

## 🎯 Objetivo do projeto

- Praticar **consumo de APIs REST** em uma aplicação React.
- Trabalhar com **estado**, **efeitos colaterais** (`useEffect`), **hooks de callback** (`useCallback`) e **refs**.
- Implementar **busca**, **navegação**, **visualização de dados** e **gráficos** em uma interface temática inspirada em uma Pokédex.

## 🧩 Funcionalidades

- 🔎 **Busca por Pokémon**
  - Busca por **nome** ou **ID**.
  - Sugestões em tempo real (lista de resultados filtrados).
  - Debounce para evitar requisições desnecessárias.

- 📋 **Listagem geral de Pokémon**
  - Carrega até **1000 Pokémon** da API.
  - **Grid paginado** com miniaturas e nome.
  - Clique em um card para carregar os detalhes na Pokédex principal.

- 📊 **Detalhes do Pokémon**
  - Número (`id`) e nome.
  - Altura e peso convertidos para unidades mais amigáveis.
  - Tipos, habilidades e golpes principais.
  - **Taxa de captura** (%) via endpoint de espécies (`/pokemon-species`).

- 🧬 **Cadeia evolutiva**
  - Carrossel com as evoluções do Pokémon atual (mostra até 2 por vez).
  - Destaque visual para o Pokémon selecionado.
  - Clique em um sprite da evolução para carregar o Pokémon correspondente.

- 🎮 **Sprites e animações**
  - Usa sprites **animadas da 5ª geração** quando disponíveis.
  - Alterna entre **frente** e **costas** do Pokémon.
  - Efeito de **fade-in** ao trocar de Pokémon.

- 📈 **Visualização de status**
  - Exibição dos atributos base (HP, ATK, DEF, SpA, SpD, SPD).
  - Alternância entre:
    - **Barras verticais** (component `StatusVertical`).
    - **Gráfico radar** usando **Recharts** (`RadarChart`).

- 🎛 **Controles de navegação**
  - Botões para:
    - Pokémon anterior / próximo (por ID).
    - Navegar por Pokémon do **mesmo tipo** (anterior / próximo).
    - Alternar frente/costas do sprite.
    - Alternar visualização de **barras** / **gráfico radar**.
    - Voltar para a **tela inicial**.

- ⌨️ **Atalhos de teclado**
  - **Seta para cima/baixo** → Pokémon anterior / próximo.
  - **Seta esquerda/direita** → navegação entre Pokémon do mesmo tipo.

- 📱 **Layout responsivo**
  - Ajustes de layout para telas menores via `@media` queries.
  - Interface pensada para lembrar uma Pokédex física, com tela, LEDs e botões.

## Imagens da aplicação:

<div align="left">
 <img src="https://i.imgur.com/KbDtMW3.png" height="150" />
 <img src="https://i.imgur.com/qPLqmjL.png" height="150" />
 <img src="https://i.imgur.com/fGCcCTx.png" height="150" />
</div>

## Execução da aplicação:

📌 [Deploy](https://vai-na-web-fullstack-pokedex.vercel.app/)

 <br>
 
[<- Retornar](https://github.com/GilvanPOliveira/VaiNaWeb/tree/main/CicloFullStack)