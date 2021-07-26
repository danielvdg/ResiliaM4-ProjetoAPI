const db = require('../infra/database');
const AlunoDAO = require('../DAO/AlunoDAO');

describe("Testando DAO", () =>
{
    it('GET', async () =>
    {
        const alunoDB = new AlunoDAO(db);
        let result = await alunoDB.getAllAlunos();
        expect(Array.isArray(result)).toBeTruthy
    })
})