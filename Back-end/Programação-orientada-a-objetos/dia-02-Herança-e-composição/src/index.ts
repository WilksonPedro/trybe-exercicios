class SuperClass {
    isSuper: boolean;

    constructor() {
        this.isSuper = true; // se nao declarado dentro do construtor a variavel isSuper é opcional
    }
    
    public SayHello(): void {
        console.log("Ola mundo!");    
    }
}

class SubClass extends SuperClass { // subClass esta herdando tudo de SuperClass

}

const myFunc = (object: SuperClass) => { // passando um objeto da classe SuperClass
    object.SayHello(); // pegando o metodo SayHello da classe SuperClass
};

const superObject = new SuperClass(); // instanciando um objeto da classe SuperClass
const subObject = new SubClass(); // instanciando um objeto da classe SubClass

myFunc(superObject);
myFunc(subObject);