const Aluno = require('../models/Aluno-Model');
const AlunoDAO = require('../DAO/AlunoDAO')

module.exports = (app,db) => 
{
    let alunoDB = new AlunoDAO(db);

    app.post('/aluno', async (req,res) =>
    {
        const {nome,cpf,endereco,bairro,telefone,email,idade,plano} = req.body
        let newAluno = new Aluno(nome,cpf,endereco,bairro,telefone,email,idade,plano)

        try {
            await alunoDB.postAluno(newAluno)
            res.status(201).json({
                message:"Aluno inserido com sucesso",
                error:false
            })
        } catch (error)
        {
            res.status(500).json({
                message:"Erro ao inserir aluno",
                log:error.message,
                error})    
        }
    })

    app.get('/aluno', async (req,res) =>
    {
        try{
            let result = await alunoDB.getAllAlunos()
            
            res.json({
                result:result
            });
        }
        catch(error)
        {
            res.status(500).res.json({error:error.message});
        }
    });

    app.get('/aluno/:id', async (req,res) =>
    {
        const { id } = req.params;
        try {
            if(parseInt(id))
            {
                let result = await alunoDB.getAluno(id)
                if(result) 
                    res.json(result)
                else
                    throw new Error("Nenhum usuario encontrado");
            }
            else
                throw new Error("É necessário um ID tipo Inteiro, nenhumo outro tipo aceito");

        } catch (error) 
        {
            res.status(500).json({error:error.message})    
        }
    })
};