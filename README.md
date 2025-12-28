# Aulas GPM — JavaScript, TypeScript e React Native

Repositório de estudos organizado por trilhas. Aqui tem desafios rápidos, mini projetos e apps completos. Cada pasta é independente: entre, rode, e volte quando quiser.

## O que você encontra
- fundamentos de JS com exercícios curtos
- desafios de lógica da DIO (incluindo versões refinadas)
- projetos em TypeScript (web e Node)
- apps mobile com React Native (Expo)

## Projetos em destaque
- **Dio Bank (TS)**: classes, herança e regras de negócio simples.
- **API Node + TypeORM**: CRUD com SQLite e migrations.
- **React + TS**: app com rotas e layout base.
- **React Native (Expo)**: portfólio mobile, gerador de senha, tela Bat-Sinal.

## Mapa rápido
| Pasta | O que é | Como executar |
| --- | --- | --- |
| `Atividade Formacao TS/` | TypeScript + Node + React | `npm install` / `npm run dev` / `npm start` |
| `Atividade Formacao React Native/` | Apps Expo | `npm install` / `npm start` |
| `Atividades JS ES6/` | async/await + fetch | servidor estático |
| `Atividades DIO AULAS/` | desafios de lógica | `node index.js` |
| `Atividades DIO REFINANDO/` | desafios com `gets/print` | adaptar stdin |
| `Atividades CURSO EM VIDEO JS/` | exercícios JS/HTML | abrir no navegador |

## Por onde começar
1. **JavaScript base**: `Atividades CURSO EM VIDEO JS/` e depois `Atividades JS ES6/`.
2. **Lógica e desafios**: `Atividades DIO AULAS/` e `Atividades DIO REFINANDO/`.
3. **TypeScript**: `Atividade Formacao TS/Fundamentos do TS/`.
4. **Front-end**: `Atividade Formacao TS/Introducao ao React/my-app-ts/`.
5. **Mobile**: `Atividade Formacao React Native/react-nav/`.

## Como rodar (atalhos)
### TypeScript / Node / React
```bash
cd "Atividade Formacao TS/Fundamentos do TS"
npm install
npm run dev
```

```bash
cd "Atividade Formacao TS/IntroducaoNodeEAvancado"
npm install
npm run migration:run
npm run dev
```

```bash
cd "Atividade Formacao TS/Introducao ao React/my-app-ts"
npm install
npm start
```

### React Native (Expo)
```bash
cd "Atividade Formacao React Native/react-nav"
npm install
npm start
```
Troque o caminho por `bat-help`, `bat-pass-app`, `aula-states` ou `introduicaoaoreactnative` para outros apps.

### Navegador
```bash
cd "Atividades JS ES6"
python -m http.server 3000
```
Depois abra `http://localhost:3000/index.html`.

### Desafios em Node
```bash
node "Atividades DIO AULAS/Desafio1/index.js"
node "Atividades DIO AULAS/Desafio2/index.js"
node "Atividades DIO AULAS/Desafio3/index.js"
```

## Observações
- Os desafios em `Atividades DIO REFINANDO/` usam `gets/print` da plataforma. Para testar localmente, leia do `stdin` e use `console.log`.
- Cada pasta tem seu próprio contexto e dependências.
