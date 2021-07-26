const Aluno = require('../models/Aluno-Model');
const AlunoDAO = require('../DAO/AlunoDAO')

module.exports = (app,db) => 
{
    let alunoDB = new AlunoDAO(db);

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
            res.status(500).res.json({message:error.message});
        }
    });
};