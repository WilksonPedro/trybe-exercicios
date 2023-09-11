// src/server.js
const app = require('./app');

app.listen(3001, () => console.log('servidor online na porta 3001'));
// o listen é uma função do express para rodar o servidor na porta 3001
// o primeiro paramentro é uma porta e o segundo é uma função de callback