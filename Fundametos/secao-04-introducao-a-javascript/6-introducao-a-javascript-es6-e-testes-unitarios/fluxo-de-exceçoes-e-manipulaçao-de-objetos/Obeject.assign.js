/* Este método é utilizado para copiar os valores de todas as propriedades de um ou mais  objetos
para outro objeto de destino(ou um novo objeto vazio)
*/

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino.
/*
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
*/

// o Assign sempre ira copiar e substituir os valores dentro do objeto destino por um novo se ele for repetido.

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20, //! este valor sera substituido pelo age do objeto INFO 23
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)
  
  /* Output
    { name: 'Alberto',
    lastName: 'Gomes',
    age: 23,
    job: 'engenheiro',
    children: [ 'Maria', 'João' ],
    wife: 'Ana'
    } */

// Para criar um um objeto que não sera substituído deve-se criar um novo array vazio para as informações como no exemplo abaixo:

const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);//! o objeto criado vazio sempre recebera todas as informações sem perder ou alterar outras a não ser que em outros objetos os mesmo se repitam
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);