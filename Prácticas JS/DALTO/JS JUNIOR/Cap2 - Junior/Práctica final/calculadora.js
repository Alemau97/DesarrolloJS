//Calculadora hiper mega básica

let suma = (num1, num2) =>{
    let resultado = num1 + num2;
    return resultado;
}

let resta = (num1, num2) =>{
    let resultado = num1 - num2;
    return resultado;
}

let div = (num1, num2) =>{
    let resultado = num1 / num2;
    return resultado;
}

let multi = (num1, num2) =>{
    let resultado = num1 * num2;
    return resultado;
}

alert(`Qué operación quiere realizar?`);
let pregunta = parseInt( prompt(`1: suma, 2: resta, 3: división, 4: multiplicación`));
let num_1 = prompt(`Ingrese el primer número`);
let num_2 = prompt(`Ingrese el segundo número`)

if(pregunta == 1){
    document.write(`<p>El primer número fue: ${num_1} y el segundo: ${num_2}, el resultado de la operación es: ${suma(num_1,num_2)}</p>`);
}else if(pregunta == 2){
    document.write(`<p>El primer número fue: ${num_1} y el segundo: ${num_2}, el resultado de la operación es: ${resta(num_1, num_2)}</p>`);
}else if(pregunta == 3){
    document.write(`<p>El primer número fue: ${num_1} y el segundo: ${num_2}, el resultado de la operación es: ${div(num_1, num_2)}</p>`);
}else if(pregunta == 4){
    document.write(`<p>El primer número fue: ${num_1} y el segundo: ${num_2}, el resultado de la operación es: ${multi(num_1, num_2)}</p>`);
}else{
    document.write(`<p>Seleccione una opción válida</p>`);
}