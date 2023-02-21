const pessoaEstudante = {
    nome: 'joao',
    idade: 20,
    email: 'pessoa@gmail.com'

}
// deve-se chamar o objeto por "object" para ele responder e puxar o objeto criado
const novaInformacao = (Object, novaPropriedade, valor) => {
    Object[novaPropriedade] = valor
};

// manipulação do objeto  adicionando  novas propriedades ao mesmo 
novaInformacao(pessoaEstudante, 'telefone', '99-99999-9999');
novaInformacao(pessoaEstudante, 'github', 'jogaozinho.github.com');
novaInformacao(pessoaEstudante, 'linkedin', 'linkedin.com/joão')

console.log(pessoaEstudante);