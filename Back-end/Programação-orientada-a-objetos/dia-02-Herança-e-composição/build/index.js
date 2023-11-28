"use strict";
class SuperClass {
    constructor() {
        this.isSuper = true; // se nao declarado dentro do construtor a variavel isSuper é opcional
    }
    SayHello() {
        console.log("Ola mundo!");
    }
}
class SubClass extends SuperClass {
}
const myFunc = (object) => {
    object.SayHello(); // pegando o metodo SayHello da classe SuperClass
};
const superObject = new SuperClass(); // instanciando um objeto da classe SuperClass
const subObject = new SubClass(); // instanciando um objeto da classe SubClass
myFunc(superObject);
myFunc(subObject);
