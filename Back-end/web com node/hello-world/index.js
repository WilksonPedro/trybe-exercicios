const readline = require('readline-sync');
// require serve para importar uma biblioteca

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello ${name}! vc tem ${age} anos!`);