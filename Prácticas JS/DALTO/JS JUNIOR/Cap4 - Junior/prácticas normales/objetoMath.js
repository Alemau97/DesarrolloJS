document.write(`<h2><br>AQUÍ COMIENZAN LOS MÉTODOS DEL OBJETO MATH</h2>`);

//sqrt() & cbrt()

let num = 68;
let numero = Math.sqrt(num);
let numero2 = Math.cbrt(num);

document.write(`<p><br>Raíz cuadrada de ${num}: ${numero}</p>`);
document.write(`<p>Raíz cúbica de ${num}: ${numero2}</p>`);

//max() & min()


let resultadoNum = Math.max(4,5,8964,613,8744,2,1);
let resultadoNum2 = Math.min(4,5,8964,613,8744,2,1);
document.write(`<p>El número mayor del conjunto: ${resultadoNum}</p>`);
document.write(`<p>El número menor del conjunto: ${resultadoNum2}</p>`);

//random()

let numeroPrueba = Math.random();
document.write(`<p>${numeroPrueba}</p>`);

//round()

let pruebaRound = Math.round(24.68);
document.write(`<p>Número original: 24.68 <br>Número redondeado: ${pruebaRound}</p>`);

//fround()

let pruebaFround = Math.fround(7.163164);
document.write(`<p>$Número original: 7.163164 <br>Número redondeado: ${pruebaFround}</p>`);

//floor()

let pruebaFloor = Math.floor(1696.999999);
document.write(`<p>Número original: 1696.999999<br>Número redondeado: ${pruebaFloor}</p>`);

//trunc()

let pruebaTrunc = Math.trunc(9.999999999);
document.write(`<p>Número original: 9.99999999<br>Número "cortado": ${pruebaTrunc}</p>`);

//Apartado propiedades
//PI

let Pi = Math.PI;
document.write(`<p>${Pi}</p>`);

//SQRT1_2 & SQRT2

let cuad = Math.SQRT1_2;
let cuadrada = Math.SQRT2;
document.write(`<p>${cuad}</p>`);
document.write(`<p>${cuadrada}</p>`);

//E, LN2, LN10, LOG2E, LOG10E

let ee = Math.E;
let ln2 = Math.LN2;
let ln10 = Math.LN10;
let log2 = Math.LOG2E;
let log10 = Math.LOG10E;
document.write(`<p>${ee}</p>`);
document.write(`<p>${ln2}</p>`);
document.write(`<p>${ln10}</p>`);
document.write(`<p>${log2}</p>`);
document.write(`<p>${log10}</p>`);