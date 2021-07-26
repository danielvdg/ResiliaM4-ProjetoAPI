const sqlite3 = require("sqlite3").verbose();
const path = require('path');
const pathDatabase = path.resolve(__dirname,'../','database.db');
const db = new sqlite3.Database(pathDatabase);

// ALUNOS ACADEMIA
const ALUNOS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "Alunos" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nome"     varchar(50),
        "endereco" varchar(50),
        "telefone" varchar(11),
        "email"    varchar(30),
        "idade"    INT(3),
        "plano"    INT(1)
    );`;

const ADD_ALUNOS_DATA = `
    INSERT INTO Alunos(id,nome,endereco,telefone,email,idade,plano)
    VALUES
    (0, 'German Cano', 'Rua Batatinha', '21999999999', 'germancano@vasco.com', 33, 1),
    (1,'Marta Vieira da Silva','Rua Maria João','21988888888','martavascaina@vasco.com',35,3)
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