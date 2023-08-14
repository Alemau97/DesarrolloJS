//OBTENCIÓN Y MODIFICACIÓN DE CHILDS

//firstChild - selecciona primer elemento (sin espacios)
//lastChild - selecciona el último elemento (sin espacios)
//firstElementChild - selecciona el primer elemento
//lastElementChild - selecciona el último elemento
//childNodes - devuelve todos los nodos hijos con texto
//children - devuelve todos los nodos sin texto


let contenedor = document.getElementById("contenido");
let h2_normal = document.querySelector(".h2-normal");
let p_normal = document.querySelector(".p-normal");
let meque = document.querySelector(".meque");

const parrafo = document.createElement("P");
parrafo.innerHTML = "soy un párrafo";
const h2 = document.createElement("H2");
h2.innerHTML = "soy un h2";

/**
 * 
 * const fragmento = document.createDocumentFragment();

    fragmento.appendChild(parrafo);
    fragmento.appendChild(h2);

    contenedor.appendChild(fragmento);
 */

//MÉTODOS DE CHILDS

let p = document.createElement("P");

//replaceChild()

contenedor.replaceChild(h2,h2_normal);
contenedor.replaceChild(parrafo,p_normal);

//removeChild()

contenedor.removeChild(meque);

//hasChildNodes()

let comprobar = contenedor.hasChildNodes();

if(comprobar){
    p.innerHTML = "El contenedor sí tiene hijos";
    p.classList.add("titulo");
    contenedor.appendChild(p);
}else{
    p.innerHTML = "El contenedor NO tiene hijos";
    p.classList.add("principal");
    contenedor.appendChild(p);
}


//PROPIEDADES DE PARENTS

//parentElement
console.log(h2.parentElement);

//parentNode
console.log(contenedor.parentNode);

//MÉTODOS DE SIBLINGS

//nextSibling

console.log(h2.nextSibling);

//previousSibling

console.log(h2.previousSibling);

//nextElementSibling

console.log(h2.nextElementSibling);

//previousElementSibling

console.log(h2.previousElementSibling);

