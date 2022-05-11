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
    perimetroTriangulo = lado1 + lado2 + base;
    return `El perímetro del triángulo es ${perimetroTriangulo}`;
}

function areaTriangulo(base, altura) {
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
    areaCirculo = (Math.pow(radio,2))*pi;
    return `El área del círculo es ${areaCirculo}`;
}

// Funciones para mostrar el cálculo en la página web

// Cuadrado
function showCuadrado() {
   const input = document.getElementById("ladoCuadrado");
   const value = input.value;
   const calculo = calculoCuadrado(value);
   alert(calculo);
}

// Triángulo
function showTriangulo() {
    const inputLado1 = document.getElementById("lado1Triangulo");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("lado2Triangulo");
    const valueLado2 = inputLado2.value;
    const inputBase = document.getElementById("ladobTriangulo");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("alturaTriangulo");
    const valueAltura = inputAltura.value;

    const calculo = calculoTriangulo(valueLado1, valueLado2, valueBase, valueAltura);
    alert(calculo)
    
    
}

// Círculo
function showCirculo() {
    const input = document.getElementById("radioCirculo");
    const value = input.value;
    const calculo = calculoCirculo(value);
    alert(calculo)
}

