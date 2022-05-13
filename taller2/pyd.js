// Calcular el precio después de descuentos
function calcularTotal(precio, descuento) {
    precio = Number(precio);
    descuento = Number(descuento);
    total = ((precio*(100-descuento))/100).toFixed(2);
    return total;
}

// Mostrar el resultado en la web
function showTotal(){
    const inputPrecio = document.getElementById("precio");
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("descuento");
    const valueDescuento = inputDescuento.value;
    const calculo = calcularTotal(valuePrecio, valueDescuento);
    const showScreen = document.getElementById("showInScreen");
    showScreen.innerText = `En total debes pagar $${calculo}`;
}


