module.exports = class Aluno
{
    constructor(nome,cpf,endereco,bairro,telefone,email,idade,plano)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.bairro = bairro;
        this.telefone = telefone;
        this.email = email;
        this.idade = idade;
        this.plano = plano;
    }
}