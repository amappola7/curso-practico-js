// Área y perímetro del cuadrado

function cuadrado(lado) {
    perimetroCuadrado = lado*4;
    console.log(`El perímetro del cuadrado es ${perimetroCuadrado}`);

    areaCuadrado = Math.pow(lado,2);
    console.log(`El área del cuadrado es ${areaCuadrado}`);
}

// Área y perímetro del triángulo

function triangulo(lado1, lado2, base, altura) {
    perimetroTriangulo = lado1 + lado2 + base;
    console.log(`El perímetro del triángulo es ${perimetroTriangulo}`)

    areaTriangulo = (base*altura)/2;
    console.log(`El área del triángulo es ${areaTriangulo}`)
}

// Área y perímetro del círculo

function circulo(radio) {
    const pi = Math.PI;
    let diametro = radio*2;
    console.log(`El diámetro del círculo es ${diametro}`)
    perimetroCirculo = diametro*pi;
    console.log(`El perímetro del círculo es ${perimetroCirculo}`)

    areaCirculo = (Math.pow(radio,2))*pi;
    console.log(`El área del círculo es ${areaCirculo}`);
}


