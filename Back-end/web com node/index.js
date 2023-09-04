/* // index.js
const convert = require('./brlValue');
// pode-se dar o nome que quiser para uma função importada

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7 */
/*----------------------------------------------------*/

// index.js
const brlValue = require('./brlValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7