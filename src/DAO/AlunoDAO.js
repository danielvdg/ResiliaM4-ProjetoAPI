module.exports = class AlunoDAO
{
    constructor(db)
    {
        this.db = db;
    }

    postAluno(newAluno)
    {
        return new Promise ((resolve,reject) =>
        {
            this.db.run("INSERT INTO ALUNOS (nome,cpf,endereco,bairro,telefone,email,idade,plano) VALUES (?,?,?,?,?,?,?,?) ",Object.values(newAluno),(error,rows) => 
            {
                if(error) reject(error)
                else resolve(rows)
            })
        })    
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

    getAluno(idAluno)
    {
        return new Promise((resolve,reject) => 
        {
            this.db.get("SELECT * FROM ALUNOS WHERE id=?",idAluno,(error,rows)=>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    deleteAluno(idAluno)
    {
        return new Promise((resolve,reject) =>
        {
            this.db.run("DELETE FROM ALUNOS WHERE id = ?",idAluno,(error,rows) =>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }

    updateAluno(id,nome,cpf,endereco,bairro,telefone,email,idade,plano)
    {
        const arrUpdateAluno = [];
        arrUpdateAluno.push(nome,cpf,endereco,bairro,telefone,email,idade,plano,id)
        let sql = "UPDATE ALUNOS SET nome=?,cpf=?,endereco=?,bairro=?,telefone=?,email=?,idade=?,plano=? WHERE id=?";

        return new Promise((resolve,reject) =>
        {
            this.db.run(sql,arrUpdateAluno,(error,rows) =>
            {
                if(error) reject(error);
                else resolve(rows);
            })
        })
    }
}