//CREACIÓN DE ELEMENTOS

const contenedor = document.getElementById("contenido");

//createElement()
//Para que JS reconozca el elemento, debemos escribirlo en MAYÚSCULAS

const item = document.createElement("LI");
console.log(item);

//createTextNode()

const texto = document.createTextNode("Elemento parte de la lista");

//appendChild()

item.appendChild(texto);

contenedor.appendChild(item);

//innerHTML

//item.innerHTML = "Prueba2"


//createDocumentFragment()

const fragmento = document.createDocumentFragment();

const item2 = document.createElement("LI");

item2.innerHTML = "Segundo";

fragmento.appendChild(item);
fragmento.appendChild(item2);

contenedor.appendChild(fragmento);


