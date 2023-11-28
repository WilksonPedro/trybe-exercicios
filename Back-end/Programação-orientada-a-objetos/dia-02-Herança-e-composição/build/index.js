"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true; // se nao declarado dentro do construtor a variavel isSuper é opcional
    }
    sayHello() {
        console.log("Ola mundo!");
    }
}
class SubClass extends SuperClass {
    sayHello2() {
        this.sayHello(); // chamando o metodo sayHello da classe SuperClass
    }
}
const myFunc = (object) => {
    object.sayHello2(); // pegando o metodo SayHello da classe SuperClass
};
//const superObject = new SuperClass(); // instanciando um objeto da classe SuperClass
const subObject = new SubClass(); // instanciando um objeto da classe SubClass
//myFunc(superObject);
myFunc(subObject);
