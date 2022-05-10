// Área y perímetro del cuadrado
console.group("Cuadrado")
let ladoCuadrado = prompt("¿Cuál es el valor de los lados de tu cuadrado?");

let perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}`)

let areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es ${areaCuadrado}`)
console.groupEnd()


// Área y perímetro del triángulo
console.group("Triangulo")
let ladoTriangulo1 = Number(prompt("Ingresa el valor del primer lado del triángulo: "));
let ladoTriangulo2 = Number(prompt("Ingresa el valor del segundo lado del triángulo: "));
let baseTriangulo = Number(prompt("Ingresa el valor de la base del triángulo: "));
let alturaTriangulo = Number(prompt("Ingresa el valor de la altura del triángulo: "));

let perimetroTriangulo = ladoTriangulo1+ ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es ${perimetroTriangulo}`)

let areaTriangulo = (baseTriangulo * alturaTriangulo)/2 ;
console.log(`El área del triángulo es ${areaTriangulo}`)
console.groupEnd

// Área y perímetro del círculo
console.group("Círculo")
let radio = Number(prompt("Ingresa el valor del diámetro  del círculo: "));
let diametro = radio * 2;
const pi = Math.PI;

let perimetroCirculo = diametro*pi ;
console.log(`El perímetro del círculo es ${perimetroCirculo}`)

let areaCirculo = (Math.pow(radio,2))*pi;
console.log(`El área del círculo es ${areaCirculo}`)
console.groupEnd
