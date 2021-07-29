const request = require('supertest')
const app = require('../app')

describe("Testando rotas",()=>
{
    it('POST /aluno', async ()=>
    {
        const res = await request(app)
        .post('/aluno')
        .send({
            nome:"Antedeguemon",
            cpf:56756756711,
            endereco:"Rua João",
            bairro:"Taquara",
            telefone:21959595555,
            email:'email@gmail.com',
            idade:20,
            plano:3
        })
        expect(res.statusCode).toEqual(201)
        expect(res.body.error).toBeFalsy()
    })

    it('GET /aluno', async () =>
    {
        const res = await request(app)
        .get('/aluno')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('result')
    })
    
    it('GET SPECIFIC ALUNO WITH ID = 1', async () =>
    {
        const res = await request(app)
        .get('/aluno/id/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('result')
        expect(res.body.result.id).toEqual(1)
    })
})