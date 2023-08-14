//ATRIBUTO DE INPUTS

let inp = document.querySelector(".input-normal");
let inp2 = document.querySelector(".input-file");
let env = document.querySelector(".enviar")
let textt = document.querySelector(".texto");

//className

document.write(inp.className);

//value

document.write(inp.value);

//type

inp.type = "range";

//accept

inp2.type="file";
inp2.accept="image/png";


//form
//SOLO FUNCIONA DESDE HTML

//minlength

textt.minLength = 5;

//placeholder

textt.placeholder = "Ingresa el nombre";

//required

textt.required = "required";

//style

env.style.backgroundColor = "blue";
env.style.padding = "10px";
env.style.borderRadius = "3px";
env.style.color = "white";
env.style.border = "1px solid white";
env.style.boxShadow = "3px 3px 5px red";

/*
let frutas = ["banana", "manzana","pera"];

console.log("Primeras frutas: " + frutas );

let nuevasFrutas = ["mango","zapote","jocote"];

console.log("Frutas añadidas: " + nuevasFrutas);

let recorrido = nuevasFrutas.map((valor) => {
    frutas.push(valor);
});

console.log("Frutas completas: " + frutas);

*/