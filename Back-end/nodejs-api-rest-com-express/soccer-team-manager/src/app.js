const express = require('express');
// importação do express que serve para criar o servidor
const app = express();

app.get('/', (req, res) =>
res.status(200).json({ message: 'Ola mundo versão node!' }));
// '/' é a rota raiz do servidor qualquer coisa depois da barra são rotas secundarias

module.exports = app;
// exportação do app para ser usado em outros arquivos