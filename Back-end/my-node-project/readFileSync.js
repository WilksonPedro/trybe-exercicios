/* const fs = require('fs'); importa o modulo fs sincrono

const fs = require('fs');

const nomeDoArquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}
*/

const fs = require('fs').promises; // importa o modulo fs assincrono para usar o async/await

async function test () {
try {
    const data = await fs.readFile('./meu-node.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.log(`Erro ao ler o arquivo: ${err.message}`);

}
}

test();