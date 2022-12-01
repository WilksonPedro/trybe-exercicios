//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
/*
  console.log(`bem-vinda, ${info.personagem}`);para chamar o objeto vc usa a sintaxe 'Objeto(nome do objeto).Chave'(a propriedade dentro do objeto)
  --------------------------------------------------------------------------------------------------------------------------------------------*/

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
//Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:

info['recorrente'] = 'sim';     //inserindo nova propriedade dentro do obejto, tambem poderia ter sido usado o "info.recorrente = sim;'
//--------------------------------------------------------------------------------------------------------------------------------------

/*Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:*/

for (const key in info) 
console.log(key); //o key vai imprimir as propriedades do objeto info.

for (const key in info) {
console.log(info/*primeiro citar o objeto*/[key/*depois pedir as propriedades*/]);
}