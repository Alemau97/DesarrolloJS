//OBTENCIÓN Y MODIFICACIÓN DE ELEMENTOS

let titulo = document.getElementsByTagName("h1");
titulo[0].classList.add("titulo");
let result = document.getElementById("resultado");

//textContent

let texto = titulo[0].textContent;
document.write(texto);

//innerText - nos devuelve el texto de un nodo que sea VISIBLE

let a = parseInt(prompt("Ingrese el primer número"));
let b = parseInt(prompt("Ingrese el segundo número"));

let suma = (a,b) => {
    return a + b;
};

document.write(`${result.innerText} ${suma(a,b)}`);

//innerHTML

let prueba = titulo[0].innerHTML;
document.write(prueba);
console.log(prueba);
alert(prueba);

//outerHTML

let prueba2 = result.outerHTML;
document.write(prueba2);
console.log(prueba2);
alert(prueba2);