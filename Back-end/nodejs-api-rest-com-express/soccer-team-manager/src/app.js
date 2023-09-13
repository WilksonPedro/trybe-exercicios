const express = require('express');
// importação do express que serve para criar o servidor
const teams = [
    {
        id: 1,
        name: 'Palmeiras',
        initials: 'PAL',
    },
    {
        id: 2,
        name: 'Santos',
        initials: 'SAN',
    },
];

const app = express();
app.use(express.json());
// o express.json() deve ser usado para que o servidor entenda o formato json

app.get('/', (req, res) =>
res.status(200).json({ message: 'Ola mundo versão node!' }));
// '/' é a rota raiz do servidor qualquer coisa depois da barra são rotas secundarias

app.get('/teams', (req, res) => res.status(200).json({ teams }));
// rota para mostrar os times times

app.get('/teams/:id', (req, res) => {
    const { id } = req.params;
    const teamsSelec = teams.find((team) => team.id === Number(id));

    if (!teamsSelec) {
        return res.status(404).json({ message: 'Time não encontrado' });
    }

    res.status(200).json({ teamsSelec });
});

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json({ team: newTeam });
    // O status 201 significa que o time foi criado com sucesso
});

app.put('/teams/:id', (req, res) => {
// o metodo put é usado para atualizar um recurso especifico
    const { id } = req.params;
    const { name, initials } = req.body;
    const updateTeam = teams.find((team) => team.id === Number(id));
    // todo dado em req.params/ req.query vem como string por isso é necessario converter para number
    if (!updateTeam) {
        return res.status(404).json({ message: 'Time não encontrado' });
    }
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ team: updateTeam });
});
module.exports = app;
// exportação do app para ser usado em outros arquivos