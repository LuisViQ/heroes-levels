# Estudos em JavaScript e TypeScript

Colecao de exercicios e desafios resolvidos durante cursos e trilhas na DIO e no Curso em Video. Cada pasta e independente e pode ser explorada separadamente.

## Estrutura
- `Atividade Formacao TS/`
  - `Fundamentos do TS/`: Dio Bank em TypeScript com classes de conta (People, Company, Bonus).
  - `Complementares/`: estacionamento no navegador com controle em localStorage (`index.html`, `script.ts/js`).
  - `Complementares 2/`: lista de tarefas com prioridade em TS (`app.ts/js` + `index.html`).
  - `IntroducaoNodeEAvancado/`: API Express + TypeORM + SQLite para CRUD basico de usuarios.
  - `Introducao ao React/my-app-ts/`: app React + TypeScript com layout e rotas `Home`/`Conta`.
- `Atividades JS ES6/`: exemplos de async/await e `fetch` consumindo `data.json` direto no navegador via `index.html`.
- `Atividades DIO AULAS/`
  - `Desafio1/`: ranking de heroi por XP.
  - `Desafio2/`: calculo de nivel por saldo de vitorias.
  - `Desafio3/`: classes basicas de personagem e ataque.
- `Atividades DIO REFINANDO/` - sete desafios com entrada via `gets/print` da plataforma:
  - `Gerenciamento de Itens Magicos/`
  - `Pontos de Experiencia/`
  - `Combinando Nomes de Pokemons/`
  - `Capturando Pokemons Iniciais/`
  - `Coleta de Tesouros no Dungeon/`
  - `Desafio do Heroi/`
  - `Geracao de Biomas em um Mundo de Blocos/`
- `Atividades CURSO EM VIDEO JS/`
  - `aula #04` a `aula #10`: exercicios rapidos de sintaxe JS/HTML.
  - `exercicio #1` a `exercicio #4`: praticas completas com HTML/CSS/JS.

## Como executar
### TypeScript / Node / React
- **Fundamentos do TS (Dio Bank)**
  ```bash
  cd "Atividade Formacao TS/Fundamentos do TS"
  npm install
  npm run dev
  ```

- **API Node + TypeORM (IntroducaoNodeEAvancado)**
  ```bash
  cd "Atividade Formacao TS/IntroducaoNodeEAvancado"
  npm install
  npm run migration:run   # cria tabelas SQLite em src/database/db.sqlite
  npm run dev             # server em http://localhost:5000
  ```

- **App React + TS**
  ```bash
  cd "Atividade Formacao TS/Introducao ao React/my-app-ts"
  npm install
  npm start
  ```

- **Complementares (1 e 2)**: abra o `index.html` de cada pasta em um servidor estatico simples (ex.: `npx http-server .`) para testar o estacionamento e a lista de tarefas.

### Navegador (ES6 e Curso em Video)
- **Exemplos ES6**
  ```bash
  cd "Atividades JS ES6"
  python3 -m http.server 3000   # ou npx http-server .
  # depois abra http://localhost:3000/index.html
  ```
- **Curso em Video**: abra cada HTML diretamente no navegador.

### Desafios em Node (AULAS)
Rode direto com Node:
```bash
node "Atividades DIO AULAS/Desafio1/index.js"
node "Atividades DIO AULAS/Desafio2/index.js"
node "Atividades DIO AULAS/Desafio3/index.js"
```

### Desafios DIO REFINANDO
Os arquivos usam `gets/print` (fornecidos na plataforma DIO). Para testar localmente, substitua por leituras de `stdin`:
```js
const fs = require("fs");
const entradas = fs.readFileSync(0, "utf8").trim().split("\n");
```
e adapte as saidas para `console.log`.
