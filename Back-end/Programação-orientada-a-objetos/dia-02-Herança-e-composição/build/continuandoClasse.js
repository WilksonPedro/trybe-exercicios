"use strict";
class Superclass2 {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Olá mundo!');
    }
}
class SubClass2 extends Superclass2 {
    constructor() {
        super(); // chamando o construtor da classe pai
        this.isSuper = false; // alterando o valor da variavel isSuper
    }
}
const myFunc2 = (object) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub...!');
};
const sup = new Superclass2();
const sub = new SubClass2();
myFunc2(sup);
myFunc2(sub);
