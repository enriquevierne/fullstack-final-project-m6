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


Todas as rotas são necessárias autenticação, exceto nas rotas de GET.
| Campo      | Tipo   | Descrição                                       |
| -----------|--------|-------------------------------------------------|
| common     | string | token de usuário comprador                      |
| seller     | string | token de usuário vendedor                       |

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
	- [DELETE - /anouncements/:anouncementId/comments/:commentId](#34-excluir-comentário)

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
DELETE /users/1
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
| 401 Unauthorized | Missing Bearer Token. |
| 403 Forbidden     | Insufficient permission. |
| 404 Not Found   | User not found. |


### 1.4. **Fazer Login**

[ Voltar para os Endpoints ](#5-endpoints)

### `/login`

### Exemplo de Request:
```
POST /login
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:
```json
{  
  "email": "usuario@example.com",
  "password": "secretpassword"
}
```
### Exemplo de Response:
```
200 OK
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjp0cnVlLCJpYXQiOjE2OTc1NTEyNjUsImV4cCI6MTY5ODE1NjA2NSwic3ViIjoiOCJ9.5sCeoDoQS3ANBi2kzw1eZEBIeZ9bTYnvCN5QreY8jNA"
}
```

### Possíveis Erros:
| Código do Erro   | Descrição                    |
|------------------|------------------------------|
| 401 Unauthorized | Invalid credentials.         |


---


## 2. **Anouncements**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto Anouncement é definido como:

| Campo       | Tipo   | Descrição                                        |
| ------------|--------|--------------------------------------------------|
| id          | number | Identificador único do anuncio                   |
| brand       | string | marca do carro                                   |
| car         | string | O modelo do carro                                |
| year        | number | O ano do carro                                   |
| fuel        | string | O combustivel do carro  (FUEL TYPE: gas, etanol) |
| kilometers  | number | A quilometragem do carro                         |
| color       | string | A cor do carro                                   |
| fipe        | number | O preço da fipe do carro                         |
| price       | number | O preço de venda do carro                        |
| description | string | A descrição do anunncio                          |
| createdAt   | string | Data de criação do carro                     |
| updatedAt   | string | Data de atualização do carro                         |
| deletedAt   | string | Data de deleção do carro                         |
| images      | array | As imagens do carro.                             |

O array Images é definido como:

| Campo      | Tipo    | Descrição                     |
| -----------|---------|-------------------------------|
| id         | number  | Identificador único da imagem |
| image_url  | string  | O endereço da imagem          |
| is_cover   | boolean | define se é capa ou não       |

    
### Endpoints

| Método  | Rota           | Descrição              |
|---------|----------------|------------------------|
| POST    | /anouncements         | Criação de um usuário  |
| GET     | /anouncements         | listar anúncios  |
| GET     | /anouncements/:anouncementId | listar anúncio por id  |
| GET     | /anouncements/users/:userId | listar anúncios de um usuário por id  |
| PATCH   | /anouncements/:anouncementId | Edição de um anúncio   |
| DELETE  | /anouncements/:anouncementId | Deleção de um anúncio  |

---

### 2.1. **Criação de Anúncio**

[ Voltar para os Endpoints ](#5-endpoints)

### `/anouncements`

### Exemplo de Request:
```
POST /anouncements
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Corpo da Requisição:
```json
{
	"brand": "Toyota",
	"car": "Camry",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15000,
	"color": "blue",
	"fipe": 25000,
	"price": 28000,
	"description": "Used car in excellent condition.",
	"images": [
		{
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		}
	]
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
	"brand": "Toyota",
	"car": "Camry",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15000,
	"color": "blue",
	"fipe": "25000.00",
	"price": "28000.00",
	"description": "Used car in excellent condition.",
	"images": [
		{
			"id": 1,
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		}
	],
	"user": 1,
	"deletedAt": null,
	"id": 1,
	"createdAt": "2023-10-17",
	"updatedAt": "2023-10-17"
}
```

### Possíveis Erros:
nenhum erro pode retornar além das validações.

---

### 2.2. **Listar Anúncios**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncements`

### Exemplo de Request:
```
GET /anouncements
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
Nenhum

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
[
	{
		"id": 1,
		"brand": "Toyota",
		"car": "Camry",
		"year": 2020,
		"fuel": "gas",
		"kilometers": 15000,
		"color": "blue",
		"fipe": "25000.00",
		"price": "28000.00",
		"description": "Used car in excellent condition.",
		"createdAt": "2023-10-16",
		"updatedAt": "2023-10-16",
		"deletedAt": null,
		"user": {
			"id": 1,
			"name": "John Doe",
			"email": "johns@example.com",
			"document": "2234567890",
			"mobile": "22123456789",
			"birthdate": "1990-01-01",
			"bio": "Lorem ipsum dolor sit amet.",
			"type": true,
			"createdAt": "2023-10-09",
			"updatedAt": "2023-10-09",
			"deletedAt": null
		},
		"images": [
			{
				"id": 1,
				"image_url": "http://example.com/image1.jpg",
				"is_cover": true
			}
		]
	}
]
```

### Possíveis Erros:
no máximo retorna uma lista vazia

---

### 2.3. **listar anúncio por id**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/:anouncementId`

### Exemplo de Request:
```
GET /anouncement/1
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| anouncementId | number      | Identificador único do anuncio |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 4,
	"brand": "Toyota",
	"car": "Camry",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15000,
	"color": "blue",
	"fipe": "25000.00",
	"price": "28000.00",
	"description": "Used car in excellent condition.",
	"createdAt": "2023-10-16",
	"updatedAt": "2023-10-16",
	"deletedAt": null,
	"user": {
		"id": 2,
		"name": "John Doe",
		"email": "johns@example.com",
		"password": "$2a$10$sOUOtCyjEfeiqZq8Cd1Lnu8K.5oyRx7FsDLW0OAoR3.k0kVel7MmO",
		"document": "2234567890",
		"mobile": "22123456789",
		"birthdate": "1990-01-01",
		"bio": "Lorem ipsum dolor sit amet.",
		"type": true,
		"createdAt": "2023-10-09",
		"updatedAt": "2023-10-09",
		"deletedAt": null
	},
	"images": []
}
```

### Possíveis Erros:
| Código do Erro  | Descrição |
|-----------------|-----------|
| 404 Not Found   | Anouncemnt not found. |



### 2.4. **listar anúncios de um usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/users/:userId`

### Exemplo de Request:
```
GET /anouncement/users/1
Host: http://localhost:3000/api
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| userId | number      | Identificador único do usuário |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 1,
	"name": "John Doe",
	"email": "johns@example.com",
	"password": "$2a$10$sOUOtCyjEfeiqZq8Cd1Lnu8K.5oyRx7FsDLW0OAoR3.k0kVel7MmO",
	"document": "2234567890",
	"mobile": "22123456789",
	"birthdate": "1990-01-01",
	"bio": "Lorem ipsum dolor sit amet.",
	"type": true,
	"createdAt": "2023-10-09",
	"updatedAt": "2023-10-09",
	"deletedAt": null,
	"anouncements": [
		{
			"id": 1,
			"brand": "Toyota",
			"car": "Camry",
			"year": 2020,
			"fuel": "gas",
			"kilometers": 15000,
			"color": "blue",
			"fipe": "25000.00",
			"price": "28000.00",
			"description": "Used car in excellent condition.",
			"createdAt": "2023-10-16",
			"updatedAt": "2023-10-16",
			"deletedAt": null,
			"images": [
				{
					"id": 1,
					"image_url": "http://example.com/image1.jpg",
					"is_cover": true
				}
			]
		}
    ]
}
```

### Possíveis Erros:
| Código do Erro  | Descrição |
|-----------------|-----------|
| 404 Not Found   | User not found. |


### 2.5. **editar anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/:anouncementId`

### Exemplo de Request:
```
PATCH /anouncement/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| anouncementId | number      | Identificador único do anúncio |

### Corpo da Requisição:
```json
{
	"brand": "editado",
	"car": "Camaary",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15900,
	"color": "blue",
	"fipe": 25000,
	"price": 28000,
	"description": "Used car in excellent condition.",
	"images": [
		{
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		},
			{
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		},	{
			"image_url": "http://example.com/image1.jpg"
			
		}
	]
}
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 11,
	"brand": "editado",
	"car": "Camaary",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15900,
	"color": "blue",
	"fipe": 25000,
	"price": 28000,
	"description": "Used car in excellent condition.",
	"createdAt": "2023-10-17",
	"updatedAt": "2023-10-17",
	"deletedAt": null,
	"images": [
		{
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		},
		{
			"image_url": "http://example.com/image1.jpg",
			"is_cover": true
		},
		{
			"image_url": "http://example.com/image1.jpg"
		}
	]
}
```

### Possíveis Erros:
| Código do Erro  | Descrição |
|-----------------|-----------|
| 401 Unautihorized   | Missing Bearer Token. |
| 403 Forbidden   | Insufficient permission. |
| 404 Not Found   | Anouncement not found. |


### 2.6. **excluir anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncement/:anouncementId`

### Exemplo de Request:
```
DELETE /anouncement/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| anouncementId | number      | Identificador único do anúncio |

### Corpo da Requisição:
```json
Vazio
```

### Exemplo de Response:
```
204 NO CONTENT
```

### Possíveis Erros:
| Código do Erro    | Descrição |
|-------------------|-----------|
| 401 Unauthorized | Missing Bearer Token. |
| 403 Forbidden     | Insufficient permission. |
| 404 Not Found     | Anouncement not found. |


## 3. **Comments**
[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo         | Tipo   | Descrição                         |
| --------------|--------|-----------------------------------|
| id            | number | Identificador único do comentário |
| comment_text  | string | O nome do usuário                 |
| createdAt     | string | Data de criação do comentário |
| updatedAt     | string | Data de atualização do comentário     |
| deletedAt     | string | Data de deleção do comentário     |
| userId        | number | Identificador único do usuário    |
| anouncementId | number | Identificador único do anúncio    |

    
### Endpoints

| Método   | Rota                                             | Descrição                                 |
|----------|----------------|-----------------------------------------------------------------------------|
| POST     | /anouncements/:anouncementId/comments            | Criação de um comentário                  |
| GET      | /anouncements/:anouncementId/comments            | listar todos os comentários de um anúncio |
| PATCH    | /anouncements/:anouncementId/comments/:commentId | Edição de um comentário                   |
| DELETE   | /anouncements/:anouncementId/comments/:commentId | Deleção de um comentário                  |

---

### 3.1. **Criação de comentário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/anouncements/:anouncementId/comments`

### Exemplo de Request:
```
POST /anouncements/1/comments 
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| anouncementId | number      | Identificador único do anuncio |

### Corpo da Requisição:
```json
{
	"comment_text": "Um comentário"
}
```
### Exemplo de Response:
```
201 Created
```

```json
{
	"comment_text": "Um comentário",
	"user": 6,
	"anouncement": 1,
	"deletedAt": null,
	"id": 1,
	"createdAt": "2023-10-17",
	"updatedAt": "2023-10-17"
}
```

### Possíveis Erros:
| Código do Erro   | Descrição               |
|------------------|-------------------------|
| 401 Unauthorized | Missing Bearer Token.   |
| 404 Not found    | Anouncement not found.  |


---

### 3.2. **Listar comentários de um anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncements/:anouncementId/comments`

### Exemplo de Request:
```
GET `/anouncements/1/comments`
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                      |
|---------------|-------------|--------------------------------|
| anouncementId | string      | Identificador único do anuncio |

### Corpo da Requisição:
```json
vazio
```

### Exemplo de Response:
```
200 OK
```
```json
{
	"id": 4,
	"brand": "Toyota",
	"car": "Camry",
	"year": 2020,
	"fuel": "gas",
	"kilometers": 15000,
	"color": "blue",
	"fipe": "25000.00",
	"price": "28000.00",
	"description": "Used car in excellent condition.",
	"createdAt": "2023-10-16",
	"updatedAt": "2023-10-16",
	"deletedAt": null,
	"comments": [
		{
			"id": 1,
			"comment_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna ac est pulvinar pharetra. Quisque euismod turpis nec magna consequat, a volutpat sem laoreet. Vestibulum in mi id urna consequat bibendum. Aliquam ullamcorper urna non nisi malesuada, eu tincidunt tortor consequat. Maecenas nec efficitur turpis. Nunc interdum eros vitae vestibulum vulputate. Duis eget lacinia odio. Sed suscipit, elit non bibendum ultricies, sapien metus semper",
			"createdAt": "2023-10-17",
			"updatedAt": "2023-10-17",
			"deletedAt": null
		},
		{
			"id": 2,
			"comment_text": "Um comentário",
			"createdAt": "2023-10-17",
			"updatedAt": "2023-10-17",
			"deletedAt": null
		}
	]
}
```

### Possíveis Erros:
| Código do Erro   | Descrição                    |
|------------------|------------------------------|
| 401 Unauthorized | Missing bearer token.        |
| 404 Not found    | Anouncement not found.       |

---

### 3.3. **Editar comentário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/anouncements/:anouncementId/comments/:commentId`

### Exemplo de Request:
```
PATCH /anouncements/1/comments/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                         |
|---------------|-------------|-----------------------------------|
| anouncementId | number      | Identificador único do anuncio    |
| commentId     | number      | Identificador único do comentario |

### Corpo da Requisição:
```json
{
	"comment_text": "comentario editado"
}
```

### Exemplo de Response:
```
204 NO CONTENT
```
```json
{
	"id": 1,
	"comment_text": "comentario editado",
	"createdAt": "2023-10-17",
	"updatedAt": "2023-10-17",
	"deletedAt": null
}
```

### Possíveis Erros:
| Código do Erro  | Descrição              |
|-----------------|------------------------|
| 404 Not Found   | Anouncement not found. |
| 404 Not Found   | Comment not found. |


### 3.4. **Excluir comentário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/anouncements/:anouncementId/comments/:commentId`

### Exemplo de Request:
```
DELETE /anouncements/1/comments/1
Host: http://localhost:3000/api
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parâmetro     | Tipo        | Descrição                         |
|---------------|-------------|-----------------------------------|
| anouncementId | number      | Identificador único do anuncio    |
| commentId     | number      | Identificador único do comentario |

### Corpo da Requisição:
```json
vazio
```
### Exemplo de Response:
```
204 NO CONTENT
```

### Possíveis Erros:
| Código do Erro    | Descrição |
|-------------------|-----------|
| 401 Unauthorized | Missing Bearer Token. |
| 403 Forbidden     | Insufficient permission. |
| 404 Not Found     | Anouncement not found. |
| 404 Not Found   | Comment not found. |


---

