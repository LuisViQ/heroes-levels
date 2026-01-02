# Documentacao do sistema uau-lista (app + API)

Este documento descreve ponto a ponto como o app e a API ficaram organizados,
quais endpoints existem e como o fluxo completo funciona.

## 1) Visao geral

- App mobile: `uau-lista`
- Backend API: `uau-lista-api`
- Banco: MySQL
- Padrao backend: Express + MySQL (mysql2) com camadas (routes, controllers, repositories).

## 2) Estrutura de pastas

### API (`uau-lista-api`)

```
uau-lista-api/
  src/
    app.js
    database/
      pool.js
    repositories/
      auth.repository.js
      cart.repository.js
      product.repository.js
      user.repository.js
    controllers/
      auth.controller.js
      cart.controller.js
      product.controller.js
      user.controller.js
    routes/
      auth.routes.js
      cart.routes.js
      product.routes.js
      user.routes.js
  server.js
  .env
```

### App (`uau-lista`)

```
uau-lista/
  src/
    contexts/
      card.tsx
      loginContext.tsx
      productsContext.tsx
      singleProductContext.tsx
    services/
      api.ts
      auth.ts
      cart.ts
      getItem.ts
      getSingleItem.ts
    screens/
      homeScreen/
      loginScreen/
      myList/
      productDetail/
    components/
    routes/
```

## 3) Configuracao e execucao

### API

1. Instalar dependencias:
   - `npm install`
2. Configurar `.env` em `uau-lista-api/.env`:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_PORT`
   - `JWT_SECRET` (opcional)
3. Rodar:
   - `npm run dev` ou `npm start`

### App

1. Configurar `.env` em `uau-lista/.env`:
   - `EXPO_PUBLIC_API_URL=http://<ip>:3000/` (com barra no final)
2. Rodar o Expo normalmente.

Observacoes de rede:
- Android Emulator: `http://10.0.2.2:3000/`
- MEmu: normalmente `http://172.30.192.1:3000/` (rede do host)
- iOS Simulator: `http://localhost:3000/`
- Dispositivo fisico: IP real do PC (ex: `http://192.168.1.25:3000/`)

## 4) Banco de dados

Tabelas utilizadas:
- `users`
- `products`
- `carts` (1 carrinho por usuario)
- `cart_items` (itens do carrinho)

Regras importantes:
- `carts.user_id` unico (garante 1 carrinho por usuario)
- `cart_items` tem unique em `(cart_id, product_id)`

## 5) API - Endpoints

### Auth

**POST /auth/login**
- body:
  - `username` (string)
  - `password` (string)
  - `expiresInMins` (number, opcional)
- response:
  - `token`, `accessToken`
  - `id`, `username`, `name`, `lastName`

Regras de senha:
- Aceita bcrypt (`$2a$...`) quando o hash e valido
- Aceita formato legado: `hash_{username}_{senha}`
- Aceita comparacao direta quando o hash e texto simples

### Products

**GET /products**
- response: `{ products: [...] }`

**GET /products/:id**
- response: `{ id, title, description, price, stock, thumbnail }`

### Cart

**GET /cart/:userId**
- response: `{ cartId, userId, items, total, itemsCount }`

**POST /cart/:userId/items**
- body: `{ productId, quantity }`
- behavior: soma quantidade se o item ja existe

**PATCH /cart/:userId/items/:productId**
- body: `{ quantity }`
- behavior: se quantity <= 0, remove o item

**DELETE /cart/:userId/items/:productId**
- remove item do carrinho

**DELETE /cart/:userId/items**
- limpa carrinho

### Users (debug/uso simples)

**GET /users**
**GET /users/:id**

## 6) App - Fluxo ponto a ponto

1) O app inicia e monta os contexts.

2) `ProductsContext` chama `getItem()` uma vez e usa cache interno para evitar
   carregar duas vezes (especialmente em modo dev).

3) Na tela de login:
   - `handleLogin()` chama `POST /auth/login`
   - resposta entrega `token` e `id`
   - `LoginContext` salva `token`, `name` e `userId`

4) Quando `userId` fica disponivel, `CartProvider` chama `GET /cart/:userId`
   e carrega o carrinho do backend.

5) Ao adicionar item (home ou detalhe):
   - `useCart().addItem()` -> `POST /cart/:userId/items`
   - resposta atualiza o estado do carrinho no app

6) Na tela `MyList`:
   - `+` chama `PATCH /cart/:userId/items/:productId` (quantidade +1)
   - `-` chama `PATCH` ou remove se chegar a 0
   - `Remover` chama `DELETE /cart/:userId/items/:productId`
   - `Limpar` chama `DELETE /cart/:userId/items`

## 7) Mapeamento de dados (API -> App)

- `products` da API ja vem no formato esperado pelo app:
  - `id`, `title`, `thumbnail`, `price`, `description`, `stock`

- Carrinho:
  - Itens retornam `{ id, title, thumbnail, price, quantity }`
  - Se `thumbnail` vier vazio, o app aplica fallback com `picsum`.

## 8) Possiveis erros e como resolver

- Login nao retorna token:
  - verifique `username/senha` com o padrao legado `hash_{username}_{senha}`
  - verifique se o app aponta para o IP correto

- Produtos carregando duas vezes:
  - resolvido com cache em `getItem()` e `loadProducts()`

- Carrinho sem imagem:
  - fallback no app ja resolve; se quiser imagem real, adicionar coluna no banco

## 9) Exemplos rapidos (PowerShell)

```powershell
# Login
$body = @{ username = 'luis'; password = '123' } | ConvertTo-Json
Invoke-WebRequest -UseBasicParsing -Uri http://localhost:3000/auth/login `
  -Method Post -ContentType 'application/json' -Body $body

# Produtos
Invoke-WebRequest -UseBasicParsing -Uri http://localhost:3000/products

# Carrinho
Invoke-WebRequest -UseBasicParsing -Uri http://localhost:3000/cart/1
```
