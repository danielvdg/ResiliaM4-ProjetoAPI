const sqlite3 = require("sqlite3").verbose();
const path = require('path');
const pathDatabase = path.resolve(__dirname,'../infra','database.db');
const db = new sqlite3.Database(pathDatabase);

// ALUNOS ACADEMIA
const ALUNOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "Alunos" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nome"     varchar(50),
        "cpf"      INT(11),
        "endereco" varchar(50),
        "bairro"   varchar(25),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    INT(3),
        "plano"    INT(1)
    );`;

const ADD_ALUNOS_DATA = `
    INSERT INTO Alunos(id,nome,cpf,endereco,bairro,telefone,email,idade,plano)
    VALUES
    (1,'German Cano',12345678912, 'Rua Batatinha','Barra da Tijuca', '21999999999', 'germancano@vasco.com', 33, 1),
    (2,'Marta Vieira da Silva',98765432198,'Rua Maria João','Leblon','21988888888','martavascaina@vasco.com',35,1),
    (3,'Edson Gomes Cardoso Santos',32132132112,'Rua João Maria','Olaria','21977777777','jacare@eotchan.com',49,3),
    (4,'Oscar Daniel Bezerra Schmidt',45645645678,'Rua Voluntários da Pátria','Botafogo','21966666666','oscarschmidt@gmail.com',63,2),
    (5,'Maria da Graça Xuxa Meneghel',43243243210,'Rua São Clemente','Botafogo','21955555555','xuxa@record.com',58,3)
    `;

function criaTabelaAlunos()
{
    db.run(ALUNOS_SCHEMA,(error) =>
    {
        if(error) console.log(error)
    });
};

function populaTabelaAlunos()
{
    db.run(ADD_ALUNOS_DATA,(error) =>
    {
        if(error) console.log("Erro ao popular tabela de alunos")
    });
};

db.serialize( () =>
{
    criaTabelaAlunos();
    populaTabelaAlunos();
});