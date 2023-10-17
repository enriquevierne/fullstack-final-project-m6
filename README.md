# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
    - [Instalando Dependências](#31-instalando-dependências)
    - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://www.npmjs.com/package/zod)

A URL do repositório:
https://github.com/enriquevierne/fullstack-final-project-m6

A URL base da aplicação:
http://localhost:3000/api

---

## 2. Diagrama ER
[ Voltar para o topo ](#tabela-de-conteúdos)


Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](/DER.jpeg)

---

## 3. Início Rápido
[ Voltar para o topo ](#tabela-de-conteúdos)


### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
npm install
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
```
e depois este comando:

```
npm run typeorm migration:run -- -d ./src/data-source
```

---
## 4. Autenticação
[ Voltar para o topo ](#tabela-de-conteúdos)


Por enquanto, não foi implementada autenticação.

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
    - [POST - /users](#11-criação-de-usuário)
    - [UPDATE - /users/:userId](#12-editar-usuário)
	- [DELETE - /users/:userId](#13-excluir-usuário)
	- [POST - /login](#13-fazer-login)
- [Anouncements](#2-anouncements)
    - [POST - /anouncements](#21-criação-de-anúncio)
    - [GET - /anouncements](#22-listar-anúncios)
    - [GET - /anouncements/:anouncementId](#23-listar-anúncio-por-id)
    - [GET - /anouncements/users/:userId](#24-listar-anúncios-de-um-usuário)
    - [UPDATE - /anouncements/:anouncementId](#25-editar-anúncio)
	- [DELETE - /anouncements/:anouncementsId](#26-excluir-anúncio)
- [Comments](#3-comments)
    - [POST - /anouncements/:anouncementId/comments](#31-criação-de-comentário)
    - [GET - /anouncements/:anouncementId/comments](#32-listar-comentários-de-um-anúncio)
    - [UPDATE - /anouncements/:anouncementId/comments/:commentId](#33-editar-comentário)
	- [DELETE - /anouncements/:anouncementId/comments/:commentId](#34-excluir-usuário)

---

## 1. **Users**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| name       | string | O nome do usuário                               |
| email      | string | O e-mail do usuário                             |
| password   | string | A senha de acesso do usuário                    |
| document   | string | O documento do usuário                          |
| mobile     | string | O telefone do usuário                           |
| type       | boolean| Define se um usuário é vendedor ou comprador    |
| birthdate  | string | A data de nascimento do usuário                 |
| bio        | string | A biografia do usuário                          |
| createdAt  | string | Data de criação do usuário                      |
| updatedAt  | string | Data de atualização do usuário                  |
| deletedAt  | string | Data de deleção do usuário                      |
| address    | objeto | O endereço do usuário.                          |

O objeto address é definido como:

Campo        | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| zip        | string | O cep do usuário                                |
| street     | string | A rua do usuário                                |
| city       | string | A cidade do usuário                             |
| state      | string | O estado do usuário                             |
| number     | string | O número do usuário                             |
| complement | string | O complemneto do endereço do usuário            |
    
### Endpoints

| Método   | Rota           | Descrição              |
|----------|----------------|------------------------|
| POST     | /users         | Criação de um usuário  |
| PATCH    | /users/:userId | Edição de um usuário   |
| DELETE   | /users/:userId | Deleção de um usuário  |
| POST     | /login         | Fazer login            |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
  "name": "usuario",
  "email": "usuario@example.com",
  "password": "secretpassword",
  "document": "12345678901",
  "mobile": "12345678901",
  "type": false,
  "birthdate": "1990-01-01",
  "bio": "Lorem ipsum dolor sit amet.",
  "createdAt": "2023-10-09T12:34:56Z",
  "updatedAt": "2023-10-09T12:34:56Z",
  "deletedAt": null,
  "address": {
    "zip": "12345678",
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "number": "123",
    "complement": "Apt 456"
  }
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
    "id": 1,
  "name": "usuario",
  "email": "usuario@example.com",
  "document": "12345678901",
  "mobile": "12345678901",
  "type": false,
  "birthdate": "1990-01-01",
  "bio": "Lorem ipsum dolor sit amet.",
  "createdAt": "2023-10-09T12:34:56Z",
  "updatedAt": "2023-10-09T12:34:56Z",
  "deletedAt": null,
  "address": {
    "id":1,
    "zip": "12345678",
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "number": "123",
    "complement": "Apt 456"
  }
}
```

### Possíveis Erros:
| Código do Erro | Descrição                    |
|----------------|------------------------------|
| 409 Conflict   | Email already registered.    |
| 409 Conflict   | Document already registered. |
| 409 Conflict   | Mobile already registered.   |

---

### 1.2. **Editar usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:
```
PATCH /users/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| userId     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
  "name": "usuarioeditado",
  "email": "usuarioeditado@example.com",
  "password": "secretpassword"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": 1,
  "name": "usuarioeditado",
  "email": "usuarioeditado@example.com",
  "password": "secretpassword"
}
```

### Possíveis Erros:
| Código do Erro   | Descrição                    |
|------------------|------------------------------|
| 401 Unauthorized | Missing bearer token.        |
| 404 Not found    | User not found.              |
| 409 Conflict     | Email already registered.    |
| 409 Conflict     | Document already registered. |
| 409 Conflict     | Mobile already registered.   |

---

### 1.3. **Excluir usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:
```
GET /users/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| userId      | number      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```


### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |
## 2. **Anouncements**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Anouncement é definido como:

| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| brand       | string | O nome do usuário                               |
| car      | string | O e-mail do usuário                             |
| year   | string | A senha de acesso do usuário                    |
| fuel   | string | O documento do usuário                          |
| kilometers     | string | O telefone do usuário                           |
| color       | boolean| Define se um usuário é vendedor ou comprador    |
| fipe  | string | A data de nascimento do usuário                 |
| price        | string | A biografia do usuário                          |
| description  | string | Data de criação do usuário                      |
| createdAt  | string | Data de atualização do usuário                  |
| updatedAt  | string | Data de deleção do usuário                      |
| deletedAt  | string | Data de deleção do usuário                      |
| address    | objeto | O endereço do usuário.                          |

O objeto address é definido como:

Campo        | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| id         | number | Identificador único do usuário                  |
| zip        | string | O cep do usuário                                |
| street     | string | A rua do usuário                                |
| city       | string | A cidade do usuário                             |
| state      | string | O estado do usuário                             |
| number     | string | O número do usuário                             |
| complement | string | O complemneto do endereço do usuário            |
    
### Endpoints

| Método   | Rota           | Descrição              |
|----------|----------------|------------------------|
| POST     | /users         | Criação de um usuário  |
| PATCH    | /users/:userId | Edição de um usuário   |
| DELETE   | /users/:userId | Deleção de um usuário  |
| POST     | /login         | Fazer login            |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:
```
POST /users
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{
  "name": "usuario",
  "email": "usuario@example.com",
  "password": "secretpassword",
  "document": "12345678901",
  "mobile": "12345678901",
  "type": false,
  "birthdate": "1990-01-01",
  "bio": "Lorem ipsum dolor sit amet.",
  "createdAt": "2023-10-09T12:34:56Z",
  "updatedAt": "2023-10-09T12:34:56Z",
  "deletedAt": null,
  "address": {
    "zip": "12345678",
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "number": "123",
    "complement": "Apt 456"
  }
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
    "id": 1,
  "name": "usuario",
  "email": "usuario@example.com",
  "document": "12345678901",
  "mobile": "12345678901",
  "type": false,
  "birthdate": "1990-01-01",
  "bio": "Lorem ipsum dolor sit amet.",
  "createdAt": "2023-10-09T12:34:56Z",
  "updatedAt": "2023-10-09T12:34:56Z",
  "deletedAt": null,
  "address": {
    "id":1,
    "zip": "12345678",
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "number": "123",
    "complement": "Apt 456"
  }
}
```

### Possíveis Erros:
| Código do Erro | Descrição                    |
|----------------|------------------------------|
| 409 Conflict   | Email already registered.    |
| 409 Conflict   | Document already registered. |
| 409 Conflict   | Mobile already registered.   |

---

### 1.2. **Editar usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:
```
PATCH /users/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| userId     | string      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
{
  "name": "usuarioeditado",
  "email": "usuarioeditado@example.com",
  "password": "secretpassword"
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
    "id": 1,
  "name": "usuarioeditado",
  "email": "usuarioeditado@example.com",
  "password": "secretpassword"
}
```

### Possíveis Erros:
| Código do Erro   | Descrição                    |
|------------------|------------------------------|
| 401 Unauthorized | Missing bearer token.        |
| 404 Not found    | User not found.              |
| 409 Conflict     | Email already registered.    |
| 409 Conflict     | Document already registered. |
| 409 Conflict     | Mobile already registered.   |

---

### 1.3. **Excluir usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:userId`

### Exemplo de Request:
```
GET /users/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro   | Tipo        | Descrição                             |
|-------------|-------------|---------------------------------------|
| userId      | number      | Identificador único do usuário (User) |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```


### Possíveis Erros:
| Código do Erro | Descrição |
|----------------|-----------|
| 404 Not Found   | User not found. |