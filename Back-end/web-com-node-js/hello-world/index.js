const readline = require('readline-sync');
//podemos dar qualquer nome para a constante da importação

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Ola mundo! ${name} seja bem vindo!`);
