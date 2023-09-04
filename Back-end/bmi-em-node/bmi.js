const readline = require('readline-sync');
// importaçao por commonJS (node)
const bmi = (weight, height) => weight / height ** 2;

let weight = readline.questionFloat("What’s your weight? (kg) ");
let heigth = readline.questionFloat("What’s your height? (m) "); 

console.log(`Seu IMC é ${bmi(weight, heigth)}`);

if (bmi < 18.5) {
    console.log("abaixo do peso");
} else if (bmi < 25) {
    console.log("peso ideal");
} else  if (bmi < 30) {
    console.log("acima do peso");
} else if (bmi < 35) {
    console.log("obesidade grau 1");
} else ( bmi => 35) 
    console.log("obesidade grau 2");
