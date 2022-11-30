/*O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
*/

/*let num = 1;
for (let index = 10; index > 0; index -= 1){
    num *= index;
    console.log(num);
}
console.log(num);
-----------------------------------------------------------------------------------------------------------------*/

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
//Por exemplo, a palavra “banana” seria invertida para “ananab”. 
//Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

/*let word = 'wilkson';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);
---------------------------------------------------------------------------------------------------------------------*/
/*Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. 
Considere o número de caracteres de cada palavra.*/

/*let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maior.length){
        maior = array[index];//vai receber a maior comparação do array
    }
}

for (let index = 0; index < array.length; index += 1){
    if (array[index].length < menor.length){
        menor =  array[index]; //vai receber a menor comparação do array
    }
} 
console.log(maior);
console.log(menor);
----------------------------------------------------------------------------------------------------------*/
/*Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.*/
let biggestPrimeNumber = 1;

for (let index = 2; index <= 50; index += 1) {// o index começa no 2 pq é o menor numero pedido  e 50 pq é o maior pedido
  let isPrime = true; //formula para saber se um número é primo
  for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {//formula para saber se um número é primo
    if (index % indexDivisor === 0) {//formula para saber se um número é primo
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = index;
  }
}

console.log(biggestPrimeNumber);
