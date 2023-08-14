//MÉTODOS DE CLASSLISTS
//Add()

let titulo = document.querySelector(".titulo");
let añadir = titulo.classList.add("principal", "prueba"); 

//Remove()

let quitar = titulo.classList.remove("prueba");

//Item()

let ver = titulo.classList.item(1);
document.write(ver);

//Contains()

let comp = titulo.classList.contains("prueba");
document.write(comp);
let comp2 = titulo.classList.contains("principal");
document.write(comp2);

//Toggle()

let cambio = titulo.classList.toggle("prueba");
console.log(cambio);

//Replace()

let reemp = titulo.classList.replace("prueba", "sinPrueba");