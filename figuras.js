// Funciones para calcular el área y perímetro de las figuras

 // Área y perímetro del cuadrado
function perimetroCuadrado(lado) {
    perimetroCuadrado = lado*4;
    return `El perímetro del cuadrado es ${perimetroCuadrado}`;
}

function areaCuadrado(lado) {
    areaCuadrado = Math.pow(lado,2);
    return `El área del cuadrado es ${areaCuadrado}`;
}

// Área y perímetro del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    lado1 = Number(lado1);
    lado2 = Number(lado2);
    base = Number(base);
    perimetroTriangulo = lado1 + lado2 + base;
    return `El perímetro del triángulo es ${perimetroTriangulo}`;
}

function areaTriangulo(base, altura) {
    base = Number(base);
    altura = Number(altura);
    areaTriangulo = (base*altura)/2;
    return `El área del triángulo es ${areaTriangulo}`;
}

// Área y perímetro del círculo
function perimetroCirculo(radio) {
    const pi = Math.PI;
    let diametro = radio*2;

    perimetroCirculo = diametro*pi;
    return `El perímetro del círculo es ${perimetroCirculo}`;
}

function areaCirculo(radio) {
    const pi = Math.PI;
    radio = Number(radio);
    areaCirculo = (Math.pow(radio,2))*pi;
    return `El área del círculo es ${areaCirculo}`;
}

// Funciones para mostrar el cálculo en la página web

// Cuadrado
function showPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const calculo = perimetroCuadrado(value);
    alert(calculo);
}

function showAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const calculo = areaCuadrado(value);
    alert(calculo);
}

// Triángulo
function showPerimetroTriangulo(){
    const inputLado1 = document.getElementById("lado1Triangulo")
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("lado2Triangulo")
    const valueLado2 = inputLado2.value;
    const inputLadob = document.getElementById("ladobTriangulo")
    const valueLadob = inputLadob.value;
    const calculo = perimetroTriangulo(valueLado1, valueLado2, valueLadob);
    alert(calculo);
}

function showAreaTriangulo(){
    const inputLadob = document.getElementById("ladobTriangulo")
    const valueLadob = inputLadob.value;
    const inputAltura = document.getElementById("alturaTriangulo")
    const valueAltura= inputAltura.value;
    const calculo = areaTriangulo(valueLadob, valueAltura);
    alert(calculo);
}

// Círculo
function showPerimetroCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;
    const calculo = perimetroCirculo(value);
    alert(calculo)
}

function showAreaCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;
    const calculo = areaCirculo(value);
    alert(calculo)
}

// Altura de un triángulo isósceles
function alturaTIsosceles(ladoA1, ladoA2, ladoB) {
    ladoA1 = Number(ladoA1);
    ladoA2 = Number(ladoA2);
    ladoB = Number(ladoB);

    if (ladoA1 != ladoA2){
        alert("Los lados del triángulo son diferentes, la altura será incorrecta")
    }

    let altura = ((Math.sqrt((Math.pow(ladoA1,2))-((Math.pow(ladoB,2))/4))));
    altura = altura.toFixed(2);
    return `La altura del triángulo isósceles es de ${altura}`;
}

function showAlturaIsosceles(){
    const inputLadoA1 = document.getElementById("ladoA1Isosceles");
    const valueLadoA1 = inputLadoA1.value;
    const inputLadoA2 = document.getElementById("ladoA2Isosceles");
    const valueLadoA2 = inputLadoA2.value;
    const inputLadoB = document.getElementById("ladoBIsosceles");
    const valueLadoB = inputLadoB.value;
    const calculo = alturaTIsosceles(valueLadoA1, valueLadoA2, valueLadoB);
    alert(calculo);
}
