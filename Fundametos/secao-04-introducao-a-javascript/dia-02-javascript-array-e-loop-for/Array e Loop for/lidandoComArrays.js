//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*let result = 0; //variavel criada para fazer a soma do array.
let sum = 0; //soma para fazer a media
let highNumber = numbers[0] //a let highNumber recebe o primeiro elemento do array numbers.

//for (let index = 0; index < numbers.length; index += 1)  
//for (let index = 1; index < numbers.length; index += 1) { //para fazer a comparação de qual é o maior o index começa no 1
//    console.log(numbers[index]); imprimi a lista da nova variável index!
//   result += numbers[index]; //soma da let result de todos os elementos do array numbers.

/*    sum += numbers[index]; // soma todos os elementos dentro do array para depois fazer a media.
 
let average = sum / numbers.length; //faz a media da soma pelo quantidades de elementos do array.
console.log(average);
 
if (average > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}*/
/*    if (numbers[index] > highNumber) { //se o numero index for maior que o higherNumber sera substituído
        highNumber = numbers[index]; //highNUmber recebe o maior numero que comparado.
    }
}*/
//console.log(highNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
/*for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {// se o valor for diferente de 0 o numero é impar se não ele passa para o proximo.
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result + ' é o total de valores impares' );
}*/

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

/*let smallNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smallNumber) { //se o index for menor que o smallnumber ele vai receber esse valor maior
        smallNumber = numbers[index];
    }

}
console.log(smallNumber);
*/

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.
/*
let numbers = [];

for (let index = 1; index <= 25; index +=1){ 
    numbers.push(index); //o comando push vai colocar os numero no começo do array ate 25
}
    console.log(numbers);*/

//Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23, 24,
    25]

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index] / 2); //vai mostrar o resultado da divisão dos elementos do array.
    
};
//terminado