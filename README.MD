# 📖 DOCUMENTAÇÃO 📖

API para o sistema medico de cadastro de medicos e clinicas, relacionada ao desafio da empresa winmed.

Logo abaixo, segue as rotas da api que funcionam

#### ⚠️ IMPORTANTE ⚠️

É importante gerar um token e se autenticar para poder usar as rotas abaixo:

POST >> /login >> JSON-BODY

| Verb | Action | url |
| ------ | ------ |------ | 
| GET | Get Users | '/users'  | 
| GET | Get Doctors | '/doctors'  | 
| GET | Get Clinics | '/clinics'  | 
| POST | Add User | '/users' | 
| POST | Add Clinic | '/register/clinic' | 
| POST | Add Doctor | '/register/doctor' | 
| PATCH |Update Clinic | '/update/clinic/:id' | 
| PATCH |Update Doctor | '/update/doctor/:id' | 
| DELETE |Delete Clinic | '/delete/clinic/:id' | 
| DELETE |Delete Doctor | '/delete/doctor/:id' | 

## 👨‍💻️ Tecnogias utilizadas

O projeto foi desenvolvido utilizando a seguinte tecnologia:

- [NodeJS](https://node.com.br)

### Padronização de código
 
 - [Prettier](https://prettier.io/)

 ### IDE

  - [Visual Studio Code](https://code.visualstudio.com/)


## 📦️ Como utilizar o projeto

Para copiar o projeto, utilize os comandos:

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/Gabriel4420/backend_winmed_challenge.git
  
```
Para instalar as dependências e iniciar o projeto, você pode utilizar o yarn ou npm:

**Utilizando yarn**

```bash
  # verificar as dependências
  ❯ yarn
  # rodar projeto
  ❯ yarn dev
 ```

**Utilizando npm**

```bash
  # Atualizar as dependências
  ❯ npm install 

  # Iniciar o projeto
  ❯ npm dev
```
<h4 align="center">
  Feito com ❤️ por Gabriel Rodrigues 👋️ <a href="mailto:gabriel_rodrigues_perez@hotmail.com">Entre em contato!</a>
</h4>

<p align="center">

  <a href="https://www.linkedin.com/in/gabriel-rodrigues-perez-2069b072/">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/LinkedIn-Gabriel_Rodrigues-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/gabriel.rodrigues.perez">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/Facebook-Gabriel_Rodrigues-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/gabriel_rodrigues_perez/">
    <img alt="Gabriel Rodrigues Perez" src="https://img.shields.io/badge/Instagram-@gabriel4420-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
  
  
</p>