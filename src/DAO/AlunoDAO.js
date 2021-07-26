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
}