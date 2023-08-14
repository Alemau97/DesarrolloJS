//ARRAY INICIAL

document.write(`<br><h2>AQUI COMIENZAN LOS MÉTODOS DE ARRAYS</h2><br>`);
let mascotas = ["koki","luna","pablita"];
document.write(`<p>Array inicial: ${mascotas}</p>`);

//pop() & shift()

let resultado = mascotas.pop();
document.write(`<p>Elemento eliminado: ${resultado}</p>`);
document.write(`<p>Queda: ${mascotas}</p>`);

let resultado2 = mascotas.shift();
document.write(`<p>Elemento eliminado: ${resultado2}</p>`);
document.write(`<p>Queda: ${mascotas}</p>`);

//push()

let resultado3 = mascotas.push("koki2,tortugona");
document.write(`<p>Después de agregar quedan: ${resultado3} elementos</p>`);
document.write(`<p>Ahora quedan: ${mascotas}</p>`);

//reverse()

let numeros = [1,2,3,4,5,6,7];
document.write(`<p><br>Array inicial: ${numeros}</p>`);
let resultado4 = numeros.reverse();
document.write(`<p>Array orden invertido: ${resultado4}</p>`);

//unshift()

let resultado5 = numeros.unshift(0);
document.write(`<p>Array con número agregado al principio: ${numeros}</p>`);

//sort()

let aleatorio = ["manzanas","arrayan","fresas","sandías","jocotes"];
document.write(`<p><br>Nuevo array: ${aleatorio}</p>`);
let resultado6 = aleatorio.sort();
document.write(`<p>Array ordenado: ${resultado6}</p>`);

//splice()

let resultado7 = aleatorio.splice(1, 2, "mandarinas");
document.write(`<p>Array habiendo eliminado elementos específicos y agregados nuevos en su lugar: ${aleatorio}</p>`);

//join()

let resultado8 = aleatorio.join(" - ");
document.write(`<p>${resultado8}</p>`);

//filter() & forEach() [SON BUCLES PARA ARRAYS]

let array = ["orange","chicken","broccoli","breef"];
document.write(`<p><br>Nuevo array: ${array}</p>`);

document.write(`<p>Hecho con forEach()</p>`)
let resultado9 = array.forEach((posicion)=>{
    document.write(`<p>En esta posición tenemos: ${posicion}</p>`);
});

document.write(`<p><br>Hecho con filter()</p>`)
let resultado10 = array.filter((posicion)=>{
    document.write(`<p>En esta posición tenemos: ${posicion}</p>`);
});

//solo para mostrar los elementos del array (al recorrer cada uno en cada vuelta) que tengan más de 6 letras en este caso
let resultado11 = array.filter((posicion)=> posicion.length > 6)
document.write(`<p>${resultado11}</p>`)

//prueba rápida de funcionamiento (by my own)

//let cant = parseInt(prompt("Ingresa las palabras a ingresar"));
//let almacen = [];
//for(let i = 0; i < cant; i++){
//    almacen[i] = prompt("Nombre de la palabra " + (i+1));
//}
//document.write(`<p>Palabras ingresadas por el usuario: ${almacen}</p>`);

//let saber = prompt("Ingresa la palabra que quiere buscar");

//let pruebaf = almacen.forEach((nombre) => {
//    if(nombre == saber){
//        alert("si");
//    }else{
//        alert("No");
//    }
//});



 
