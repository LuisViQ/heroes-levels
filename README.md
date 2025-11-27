# Estudos em JavaScript e TypeScript

Colecao de exercicios e desafios resolvidos durante cursos e trilhas na DIO e no Curso em Video. Cada pasta e independente e pode ser explorada separadamente.

## Estrutura
- `Atividade Formacao TS/` – inicio de um app em TypeScript (DIO Banking) com `ts-node-dev`, configurado via `tsconfig.json`.
- `Atividades JS ES6/` – exemplos de async/await e `fetch` consumindo `data.json` direto no navegador via `index.html`.
- `Atividades DIO AULAS/`
  - `Desafio1/` ranking de heroi por XP.
  - `Desafio2/` calculo de nivel por saldo de vitorias.
  - `Desafio3/` classes basicas de personagem e ataque.
- `Atividades DIO REFINANDO/` – sete desafios com entrada via `gets/print` da plataforma:
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
### TypeScript (DIO Banking)
```bash
cd Atividade Formacao TS
npm install
npm run dev
```

### Exemplos ES6 no navegador
Servir estaticamente para o `fetch` funcionar:
```bash
cd Atividades JS ES6
python3 -m http.server 3000   # ou npx http-server .
# depois abra http://localhost:3000/index.html
```

### Desafios em Node (AULAS)
Rode direto com Node:
```bash
node Atividades DIO AULAS/Desafio1/index.js
node Atividades DIO AULAS/Desafio2/index.js
node Atividades DIO AULAS/Desafio3/index.js
```

### Desafios DIO REFINANDO
Os arquivos usam `gets/print` (fornecidos na plataforma DIO). Para testar localmente, substitua por leituras de `stdin`:
```js
const fs = require("fs");
const entradas = fs.readFileSync(0, "utf8").trim().split("\n");
```
e adapte as saidas para `console.log`.

