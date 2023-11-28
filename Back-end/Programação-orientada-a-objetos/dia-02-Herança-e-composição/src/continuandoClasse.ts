class Superclass2 {
    isSuper: boolean;
  
    constructor() {
      this.isSuper = true;
    }
  
    public sayHello(): void {
      console.log('Olá mundo!');
    }
  }

  class SubClass2 extends Superclass2 {
   
    constructor() {
        super(); // chamando o construtor da classe pai
        this.isSuper = false; // alterando o valor da variavel isSuper
    }
  }

  const myFunc2 = (object: Superclass2) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub...!');
    
  }

const sup = new Superclass2();
const sub = new SubClass2();

myFunc2(sup);
myFunc2(sub);