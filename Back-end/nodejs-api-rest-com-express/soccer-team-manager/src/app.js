/*

const express = require('express');
// importação do express que serve para criar o servidor
const app = express();
// criação do servidor express e atribuição a variavel app
app.use(express.json());
// o app.use deve ser colocado para a leitura do .json
app.get('/', (req, res) =>
// '/' é a rota principal tmb chamada raiz outra poderia ser '/home', '/login' etc
res.status(200).json({ message: 'Ola mundo versão node!' }));
/*
O get serve para fazer uma requisição que retorna um json com a mensagem 
"Ola mundo versão node!" e o status 200 que significa que a requisição foi bem sucedida
*//*
app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'alguma resposta' });
});

module.exports = app;
// exportação do app para ser usado em outros arquivos
*/

const express = require('express');

const app = express();
app.use(express.json());

const teams = [
    {
        id: 1,
        name: 'sao paulo',
        iniciais: 'sp',
    },
    {
        id: 2,
        name: 'palemiras',
        iniciais: 'pal',
    },
];

app.get('/', (req, res) => 
res.status(200).json({ message: 'Ola mundo versão node!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ team: newTeam });
});

module.exports = app;