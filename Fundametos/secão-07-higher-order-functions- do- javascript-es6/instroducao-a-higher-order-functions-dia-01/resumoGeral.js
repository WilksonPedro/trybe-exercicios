//A tabela abaixo mostra um resumo de como funcionam as HOFs que você aprendeu até agora. Use o seguinte array para visualizar os exemplos da tabela:

const pessoas = [
  { nome: "Joana", idade: 37 },
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 32 },
  { nome: "Aline", idade: 28 },
];
/* forEach não retorna nada, nem espera retorno
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
*/
/*
find
pessoas.find((pessoa) => pessoa.nome === 'Aline');
    Retorna um unico elemento que satisfaça ou undefined se não. retorna true/false
*/
/*
Some
pessoas.some((pessoa) => pessoa.idade > 30);
Retorna um  boleano se algum elemento satisfazer. Pode ser em formado de condição
*/
/*
Every
pessoas.every((pessoa) => pessoa.idade > 30);
Retorna um bolean verdadeiro se todos os elementos forem satisfazer ou false caso contrario. Pode ser em fomato de condição.
*/