// função que gera numeros aleatorios
const generateRandomNumber = () => Math.round(Math.random() * 10);

// uma promessa resolvida que ira retornar o numero aleatorio
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  resolvedPromise()
    .then((result) =>{
    console.log(result);
  });