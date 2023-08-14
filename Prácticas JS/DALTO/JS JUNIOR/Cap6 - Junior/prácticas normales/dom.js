// DOCUMENT
//getElementById()

let informacion = document.getElementById("info");
document.write(informacion);

//getElementsByTagName()

let parr = document.getElementsByTagName("p");
document.write(parr[1]); 

//querySelector()

let prueba = document.querySelector(".parrafito");
let prueba2 = document.querySelector("#info");
document.write(prueba);
document.write(prueba2);

//querySelectorAll()

let prueba3 = document.querySelectorAll("p");
document.write(prueba3[2]);

//VALORES ATRIBUTOS

const rangoEdad = document.querySelector(".rango");

//setAttribute()

rangoEdad.setAttribute("type","text");
rangoEdad.setAttribute("type","number");
rangoEdad.setAttribute("type","color");

//getAttribute()

let valorAtributo = rangoEdad.getAttribute("type");
document.write(valorAtributo);

//removeAttribute()

let removido = rangoEdad.removeAttribute("type");