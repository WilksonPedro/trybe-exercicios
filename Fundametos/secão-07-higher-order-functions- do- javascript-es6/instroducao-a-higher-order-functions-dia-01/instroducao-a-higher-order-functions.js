/* forEach

const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas);
*/

/*
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => { // forEach esta multiplicando todos os elementos do array
  console.log(element * 2); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
});
*/

/*
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = (element) => {
  console.log(element * 2);
}

numbers.forEach(multiply); // forEach executado em outra função
*/

/*
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso bando de dados!`);
});
*/

/* fazendo separado do callback do forEach

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const emailChecker = (email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
}

emailListInData.forEach(emailChecker);
*/

//===========================================================================

// Array.find
/*
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20); // 18
*/

/*
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade > 50); // 73
*/

/*
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade === 33); // undefined se não atender nenhuma condição
*/

/* Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(verifyNumber); // retornou o primeiro encontrado 30
*/

/* Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ["João", "Irene", "Fernando", "Maria"];
const findName = () => {
  return names.find((name) => name.length === 5);
  console.log(`Encontrou!`);
};
console.log(findName()); // retornara Irene
*/
//=================================================================================================

//Array.some e Array.every
/*
const pessoas = [
  { nome: "Ana", cargo: "Analista" },
  { nome: "João", cargo: "Gerência" },
  { nome: "Aline", cargo: "Analista" },
  { nome: "Joana", cargo: "Gerência" },
];
const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === "Gerência");
===== Some retorna true se ao menos um elemento de uma array  satisfazer uma
===== condição 
console.log(verificaCargo); // true
*/

// array.every: é usado para verificar se a função esta passando em todas as condições

/*
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).every((grade) => grade === 'Aprovado'); // false

console.log(verifyGrades);
*/
//==================================================================

/* Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se
 o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele: */

/*
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((currentName) => currentName === name) // estrutura do some sendo retornada pela função hasName
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));
*/
//===========================================================================