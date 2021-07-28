const db = require('../infra/database');
const AlunoDAO = require('../DAO/AlunoDAO');
const Aluno = require('../models/Aluno-Model')

describe("Testando DAO", () =>
{
    it('CREATE', async () =>
    {
        const alunoDB = new AlunoDAO(db);
        let result = await alunoDB.postAluno(new Aluno("Galvão Bueno",25252525252,"Avenida Brasil","Penha",21333333333,"galvaobueno@globo.com",60,2));
        expect(result).toBe
    })

    it('READ', async () =>
    {
        const alunoDB = new AlunoDAO(db);
        let result = await alunoDB.getAllAlunos();
        expect(Array.isArray(result)).toBeTruthy
    })

    it('READ SPECIFIC ID', async () =>
    {
        const alunoDB = new AlunoDAO(db);
        let result = await alunoDB.getAluno(1);
        expect(Array.isArray(result)).toBeTruthy
    })
    
    it('DELETE',async () =>
    {
        const alunoDB = new AlunoDAO(db);
        let result = await alunoDB.deleteAluno(333);
        expect(result).toBe;
    })
})