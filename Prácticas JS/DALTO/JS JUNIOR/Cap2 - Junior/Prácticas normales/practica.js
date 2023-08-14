/******************** ARRAY*/

let info = ["Mauricio Martínez", 22, "San Salvador", "El Salvador" ];

let series = ["The Walking Dead","WandaVision","Stranger Things","MoonKnight"];

document.write(`<p>Mi serie favorita es: ${series[1]}</p>`);
document.write("<p>-------------------------</p>");

/******************** ARRAY ASOCIATIVO*/

let computadora = {
    nombre: "Computadora de Mau",
    procesador: "Ryzen 5 3400G",
    RAM: "16GB",
    disco: "1TB HDD & 256GB SSD"
};

document.write(`<p>Mi computadora se llama: ${computadora["nombre"]}</p>`);
document.write(`<p>Tiene un procesador : ${computadora["procesador"]}</p>`);
document.write(`<p>Tengo ${computadora.RAM} de RAM</p>`);
document.write(`<p>Y almacenamiento de ${computadora["disco"]}</p>`);
document.write("<p>-------------------------</p>");

/******************** BUCLE WHILE*/

let numero = 2;

document.write(`<p>El número original es: ${numero}</p>`);

while (numero < 5){
    numero++;
    document.write(`<p>El número cumplió la condición y lo aumentamos: ${numero}</p>`);
    document.write(`<p>El nuevo número es: ${numero}</p>`);
}
document.write("<p>-------------------------</p>");

/******************** BUCLE DO WHILE Y BREAK*/

let numero2 = 5;

do{
    numero2++;
    document.write(`<p>El bucle continúa: ${numero2}</p>`);
    if(numero2 >= 8){
        document.write(`<p>NO MAMES WEY, tuve que pararlo aquí porque sino te volves loco y llegaba hasta 1000</p>`);
        break;
    }
}
while(numero2 < 10);
document.write("<p>-------------------------</p>");

/******************** BUCLE FOR*/

let base = 9;
document.write(`<p>La base ingresada es <span>${base}</span></p>`);
document.write(`<p>Generando la tabla de multiplicar...</p>`);

for (let i = 1 ; i <= 10; i++){
    let mult = base*i;
    document.write(`<p>${base} * ${i} = ${mult}</p>`);
}
document.write("<p>-------------------------</p>");

/******************** BUCLE FOR Y CONTINUE*/

let numero3 = 5;
document.write("<p>Inciando cuenta regresiva...</p>");

for(numero3; numero3 < 10; numero3++){
    if(numero3 == 8){
        continue;
    }
    document.write("<p>"+numero3+"</p>");
}

document.write("<p>Ocurrió un problema con el número 8, tuvimos que saltarlo</p>");
document.write("<p>-------------------------</p>");

/******************** BUCLE FOR IN & FOR OF*/

let animales = ["León","Cabra","Culebra"];
animales.color = "dorado";

for (let animal in animales){
    document.write(`<p>${animal}</p>`);
}

for (let animal of animales){
    document.write(`<p>${animal}</p>`);
}

document.write(`<p>${animales.color}</p>`);
document.write("<p>-------------------------</p>");

/******************** BUCLE LABEL Y RECORRIENDO UN ARRAY DENTRO DE OTRO*/

let familia1 = ["Rocío", "Mauricio","Luna", "Koki"];
let familia2 = ["Cristina", "Salvador", familia1, "Santos","Teresa"];

forPrueba:
for (let array in familia2){
    if(array == 2){
        for(let array of familia1){
            document.write(`<p>${array}</p>`);
            break forPrueba;
        }
    }
    else{
        document.write(`<p>${familia2[array]}</p>`);
    }
    
}
document.write("<p>-------------------------</p>");

/******************** FUNCIONES Y RETURN*/

function pruebita(){
    let num1 = 20;
    let num2 = 30;

    let multi = num1*num2;
    return multi;
}

let pruebamsg = pruebita();
document.write(`<p>${pruebamsg}</p>`);
document.write("<p>-------------------------</p>");

/******************** FUNCIONES Y PARÁMETROS*/

function pruebita2(nump, nums){
    let suma = nump + nums;
    return suma;
}

document.write(`<p>${pruebita2(12,30)}</p>`);
document.write(`<p>${pruebita2(1,3)}</p>`);
document.write(`<p>${pruebita2(2,50)}</p>`);
document.write(`<p>${pruebita2(10,8)}</p>`);
let sumando = parseInt(prompt("Ingrese el primer número a sumar"));
let sumando2 = parseInt(prompt("Ingrese el segundo número a sumar"));
document.write(`<p>Los números seleccionados fueron ${sumando} y ${sumando2}</p>`)
document.write(`<p>El resultado de la suma es: ${pruebita2(sumando,sumando2)}</p>`);

document.write("<p>-------------------------</p>");

// FUNCIONES FLECHA

let saludo = nombre => `Hola ${nombre}, bienvenido a este curso`;
document.write(`<p>${saludo("Alejandro")}</p>`);