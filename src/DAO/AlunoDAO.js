module.exports = class AlunoDAO
{
    constructor(db)
    {
        this.db = db;
    }

    getAllAlunos()
    {
        return new Promise((resolve,reject) =>
        {
            this.db.all("SELECT * FROM ALUNOS", (error,rows) =>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    getAluno(id)
    {
        return new Promise((resolve,reject) => 
        {
            this.db.get("SELECT * FROM ALUNOS WHERE id=?",id,(error,rows)=>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    postAluno(newAluno)
    {
        return new Promise ((resolve,reject) =>
        {
            this.db.get("INSERT INTO ALUNOS (nome,cpf,endereco,bairro,telefone,email,idade,plano) VALUES (?,?,?,?,?,?,?,?) ",Object.values(newAluno),(error,rows) => 
            {
                if(error) reject(error)
                else resolve(rows)
            })
        })    
    }
}