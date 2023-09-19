/* const fs = require('fs');
// fs serve para ler e escrever arquivos internos
const nomeDoArquivo = 'meuArquivo.txt';
// criada uma const nomeDoArquivo para leitura

try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  // erro caso o arquivo não exista
  console.log(err);
} */

const fs = require('fs').promises;

async function main() {
    // para utilizar o async await é necessário criar uma função assíncrona
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()