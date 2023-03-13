/* Fazendo uma requisição fetch ela deve retorna algo como:
{
    quote:"Alguma coisa"
    author:"Alguém"
}
*/

fetch('https://api.goprogram.ai/inspiration') // O link deve esta dentro de Aspas sempre.
    .then(response => response.json())// o RESPONSE.json tambem retorna uma promessa e precisa ser resolvido com outro .Then
    .then(data => console.log(`"${data.quote}" | ${data.author}`));

/*
De olho na dica 👀: Você reparou que usamos dois .then seguidos após fazer o fetch? Esse processo é chamado de encadeamento.
Podemos usar esse recurso retornando um valor dentro de um .then. O valor retornado será recebido pelo próximo .
then encadeado. No caso acima, estamos retornando o valor de response.json() para o próximo .then, que recebe o valor através da variável data.
*/

//! Adcionalmente pode-se tratar erros com "  .catch((error) => console.log('Erro ao fazer requisição.', error.message)); " o .catch consegue capturar qualquer erro que seja 
//! disparado em qualquer um dos .then sozinhos ou encadeados.