# Academia API RESTFUL - Resilia Módulo 4

### Sobre

Projeto do módulo 4 do curso Resilia. Simulando, no caso deste projeto, o sistema de alunos da academia. API utilizando verbos HTTP e baseado no padrão RESTFUL.

## Ferramentas necessárias (download e instalação)

* [NodeJS](https://nodejs.org/en/download/)
* [Insomnia](https://insomnia.rest/download)

## Primeiros passos

Para baixar o projeto, baixe por zip:

![baixarzip](https://i.ibb.co/DpVBCsB/baixarzip.png)
<br>

Ou clone o projeto usando o git:

![clonargit](https://i.ibb.co/0jjvn86/clonargit.png)

## Pacotes NPM

![node](https://img.shields.io/badge/NodeJS-14.17.1-brightgreen) ![npm](https://img.shields.io/badge/npm-6.14.13-orange) ![Express](https://img.shields.io/badge/Express-4.17.1-red)  ![Sqlite3](https://img.shields.io/badge/SQlite3-v5.0.2-red) ![Jest](https://img.shields.io/badge/jest-27.0.6-blue) ![Nodemon](https://img.shields.io/badge/Nodemon-2.0.12-green) ![Supertest](https://img.shields.io/badge/supertest-6.1.4-green)

Após baixar o projeto, abra o terminal na pasta do projeto e utilize o comando:

```
npm install 
```
Não se preocupe se demorar a baixar todos os pacotes. 

## Rodando o projeto

Primeiro, iremos criar o banco de dados usando o comando:

```
npm run database
```
![](https://i.ibb.co/rdctk5G/database.png)
<br>

Banco de dados criado, agora podemos "ligar" o servidor:
```
npm run start
```

![](https://i.ibb.co/BtMjS3F/server.png)

## VERBOS HTTP
#### Básico do Insomnia

[Tutorial Insomnia em Inglês](https://www.youtube.com/watch?v=H16GUC9Svyk)

Criar uma request:<br>
![](https://i.ibb.co/M8rzz0v/insomnia1.png)

Escolher o método que quiser:<br>
![](https://i.ibb.co/sq887fn/insomnia2.png)

Enviar dados via JSON:<br>
![](https://i.ibb.co/hCpnMT5/insomnia3.png)

#### MÉTODO GET
```
http://localhost:40001/aluno/
```


O resultado deve ser parecido ou igual a esse:

![abc](https://i.ibb.co/V3SK185/get-all.png)

#### MÉTODO POST
Usando o mesmo link postado acima 
```
http://localhost:40001/aluno/
```

Utilize esse JSON padrão que disponibilizo, ou crie o seu:
```
{
    "nome":"Antônio de Carvalho Barbosa",
    "cpf":12345678912,
    "endereco": "Rua Afonso Cavalcanti",
    "bairro": "Copacabana",
    "telefone": "21222222222",
    "email": "tonyramos@gmail.com",
    "idade": 72,
    "plano": 3
}
```

Retornando uma mensagem como essa:

![](https://i.ibb.co/PCmCtyM/post.png)

Se retornar e utilizar o GET, verá que ele está inserido junto aos outros.
<br>

#### MÉTODO GET BY ID

Podemos ler um ID especifíco usando esse caminho, trocando o "?" por um ID:
```
http://localhost:40001/aluno/id/?
```

Resultado usando o id 7:

![](https://i.ibb.co/whfHnnD/get-id.png)
<br>

Se não houver um id válido, ele retorna um erro:

![](https://i.ibb.co/mRCkW3w/get-id-erro.png)

<br>

#### MÉTODO PUT

Atualizando um usuário (necessário um ID válido):
```
http://localhost:40001/aluno/id/?
```

Mais um JSON padrão:
```
{
    "nome":"Maurren Higa Maggi",
    "cpf":87687687654,
    "endereco": "Rua B",
    "bairro": "Urca",
    "telefone": "21943434343",
    "email": "maurrenmaggi@gmail.com",
    "idade": 45,
    "plano": 1
}
```

Retorno:

![](https://i.ibb.co/hD85vDF/update.png)

Se retornar e utilizar o GET, verá que ele está atualizado junto aos outros.
<br>

#### MÉTODO DELETE

Para deletar um aluno, também precisamos especificar um id:
```
http://localhost:40001/aluno/id/?
```

Retorno:

![](https://i.ibb.co/k42rC18/delete.png)


Se retornar e utilizar o GET, verá que este aluno não está junto aos outros. Deletado, RIP!

<br>

## TESTE

Para testar rotas e o DAO sem servidor, use o comando:

```
npm run test
```

Se tudo estiver correto, aparecerá assim:

![testeunitario](https://i.ibb.co/HqSVPJw/testeunitario.png)