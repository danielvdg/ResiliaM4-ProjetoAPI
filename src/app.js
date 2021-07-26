const express = require('express');
const db = require('./infra/database');
const rotasAluno = require('./controllers/aluno-controller')

const app = express();

app.use(express.json());
rotasAluno(app,db);

module.exports = app;