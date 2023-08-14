let operacion = parseInt(prompt("1-Suma, 2-Resta, 3-Multiplicación, 4-División, 5-Potencia, 6-Raíz Cuadrada, 7-Raíz cúbica"));

let suma = (x,y) => {
    let resultado = x + y;
    return `<p>Primer número: ${x}, segundo número: ${y}<br>Resultado: ${resultado}</p>`;
}

let resta = (x,y) => {
    let resultado = x - y;
    return `<p>Primer número: ${x}, segundo número: ${y}<br>Resultado: ${resultado}</p>`;
}

let mult = (x,y) => {
    let resultado = x * y;
    return `<p>Primer número: ${x}, segundo número: ${y}<br>Resultado: ${resultado}</p>`;
}

let div = (x,y) => {
    let resultado = x / y;
    return `<p>Primer número: ${x}, segundo número: ${y}<br>Resultado: ${resultado}</p>`;
}

let pot = (x,y) => {
    let resultado = Math.pow(x,y);
    return `<p>Base: ${x}, exponente: ${y}<br>Resultado: ${resultado}</p>`;
}

let sqrt = (x) => {
    let resultado = Math.sqrt(x);
    return `<p>Número: ${x}<br>Resultado: ${resultado}</p>`;
}

let cbrt = (x) => {
    let resultado = Math.cbrt(x);
    return `<p>Número: ${x}<br>Resultado: ${resultado}</p>`;
}

let calculadora = (seleccion) => {
    if(seleccion == 1){
        let num1 = parseInt(prompt("Ingrese el primer número"));
        let num2 = parseInt(prompt("Ingrese el segundo número"));
        return suma(num1,num2);
    }else if(seleccion == 2){
        let num1 = parseInt(prompt("Ingrese el primer número"));
        let num2 = parseInt(prompt("Ingrese el segundo número"));
        return resta(num1,num2);
    }else if(seleccion == 3){
        let num1 = parseInt(prompt("Ingrese el primer número"));
        let num2 = parseInt(prompt("Ingrese el segundo número"));
        return mult(num1,num2);
    }else if(seleccion == 4){
        let num1 = parseInt(prompt("Ingrese el primer número"));
        let num2 = parseInt(prompt("Ingrese el segundo número"));
        return div(num1,num2);
    }else if(seleccion == 5){
        let num1 = parseInt(prompt("Ingrese la base"));
        let num2 = parseInt(prompt("Ingrese el exponente"));
        return pot(num1,num2);
    }else if(seleccion == 6){
        let num1 = parseInt(prompt("Ingrese el número"));
        return sqrt(num1);
    }else if(seleccion == 7){
        let num1 = parseInt(prompt("Ingrese el número"));
        return cbrt(num1);
    }else{
        return `<p>Ingrese una operación válida</p>`;
    }

}

document.write(`<p>${calculadora(operacion)}</p>`);
