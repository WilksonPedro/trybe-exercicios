/*
01 - Encontre o maior número de um array
Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.
*/

function getMaxNumber(numbers) {
    // Desenvolva seu código nessa função
    let higher = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index]> higher) {
           higher = numbers[index];
        }
    }


     return higher;// Retorne o resultado aqui
}
console.log(getMaxNumber([1, 5, 60, 7, 8, 9, 41, 25]));