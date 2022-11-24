const angulo1 = 70;
const angulo2 = -8;
const angulo3 = 60;

let seraUmTriangulo = angulo1 + angulo2 + angulo3;

let angulosValidos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosValidos) {
    if (seraUmTriangulo === 180){
        console.log(true);
    } else {
        console.log(false);
    
    };
} else {
    console.log('erro:angulo invalido');
}