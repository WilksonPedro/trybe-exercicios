const fs = require('fs').promises;

async function test () {
    try {
        await fs.writeFile('./meu-node.txt', 'Meu textão');
        console.log('Arquivo escrito com sucesso!');
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    }
}

test();