//ATRIBUTOS GLOBALES
//SE USAN DENTRO DEL .SETATTRIBUTE()

//contentEditable()

let variable = document.querySelector(".titulo");
let ident = document.getElementById("titulo2");
let editable = variable.setAttribute("contentEditable","true");

//dir()

let direc = variable.setAttribute("dir","ltr");

//hidden()
//NO importa si el valor es FALSO o VERDADERO, SIEMPRE lo ocultará
//let oculto = variable.setAttribute("hidden","false");

//tabindex()

let focus = variable.setAttribute("tabindex","2");
let foc = ident.setAttribute("tabindex","1");

//title

let cambio = variable.setAttribute("title","seguro que es el primero?xd");