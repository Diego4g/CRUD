# Sistema de gerenciamento para hospital

## Sobre

Esta aplicação consiste em armazenar informações dos funcionários e pacientes do hospital bem como a evolução do quadro dos pacientes.

## Rotas da aplicação

### POST `/users`

Rota responsável por fazer o cadastro de novos funcionários do hospital, para isso deve ser necessário fornecer os seguintes dados como ilustrado abaixo:

```
{
    "email": "cabvigle@kegpige.gh",
    "password": "81703782",
}
```
Os usuários podem ser do tipo `commun` ou `master`, por default, novos usuários são cadastrados como `commun`.

### POST `/sessions`

Rota responsável por fazer o login na plataforma. Deve ser informado o email e a senha do usuário para tal.

### POST `/patients`

Rota responsável por fazer o cadastro de novos pacientes do hospital, para isso deve ser necessário fornecer os seguintes dados como ilustrado abaixo:

```
{
	"fullName": "Maria Chapman",
	"age": 36,
	"gender": "feminine",
	"clinic": "Pauline Marsh",
	"local": "Chad",
	"RG": "12909727",
	"CPF": "94232816",
	"CEP": "10276929",
	"status": "active"
}
```

Sendo que o atributo `status` deve ser do tipo `active`, `finalized` ou `transfer`.

**Para acessar esta rota o usuário deve estar logado no sistema**

## PUT `/patients/:id`

Rota responsável por atualizar os dados de um paciente informado pelo `id`. Deve ser informado a descrição da atualização, como no exemplo abaixo:

```
{
	"fullName": "Aladin",
	"description": "mudando nome do aladin"
}
``` 
**Para acessar esta rota o usuário deve estar logado no sistema**

## GET `/patients`

Lista todos os pacientes cadastrado no hospital.
**Para acessar esta rota o usuário deve estar logado no sistema**

## GET `/patients/active`

Lista todos os pacientes com status `active`.
**Para acessar esta rota o usuário deve estar logado no sistema**

## GET `/patients/finalized`

Lista todos os pacientes com status `finalized`.
**Para acessar esta rota o usuário deve estar logado no sistema**

## GET `/patients/transfer`

Lista todos os pacientes com status `transfer`.
**Para acessar esta rota o usuário deve estar logado no sistema**

## POST `/evolution`

Rota responsável por cadastrar o quadro de evolução do paciente. Deve ser informado a descrição e o id do paciente conforme ilustrado abaixo:

```
{
	"description": "O paciente relatou que não esta sentindo nenhuma conformidade após a aplicação da nova medicação",
	"patient_id": "69d43d6a-ad7b-480c-b95d-6f058975a988"
}
```
**Para acessar esta rota o usuário deve estar logado no sistema**

## DELETE `/patients/:id`

Rota responsável por fazer a exclusão de todos os dados de um paciente.

**Para acessar esta rota o usuário deve estar logado no sistema**
**Para acessar esta rota o usuário deve ser do tipo master**



