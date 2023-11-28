class SuperClass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true; // se nao declarado dentro do construtor a variavel isSuper é opcional
    }
    
    protected sayHello(): void { // protected é um modificador que permitir que a classe filha tenha acesso ao metodo mas apenas a classe filha
        console.log("Ola mundo!");    
    }
}

class SubClass extends SuperClass { // subClass esta herdando tudo de SuperClass

    public sayHello2(): void {
        this.sayHello(); // chamando o metodo sayHello da classe SuperClass
    }
}

const myFunc = (object: SubClass) => { // passando um objeto da classe SuperClass
    object.sayHello2(); // pegando o metodo SayHello da classe SuperClass
};

//const superObject = new SuperClass(); // instanciando um objeto da classe SuperClass
const subObject = new SubClass(); // instanciando um objeto da classe SubClass

//myFunc(superObject);
myFunc(subObject);