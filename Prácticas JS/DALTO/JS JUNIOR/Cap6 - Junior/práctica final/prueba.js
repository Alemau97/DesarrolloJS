const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");
const prin = document.querySelector(".claro");
const peso = document.querySelector(".peso");
const input = document.getElementById("input");
const calcular = document.getElementById("calcular");

let total = document.createElement("P");

boton.onclick = () => {
    prin.classList.toggle("oscuro");

    if(prin.classList.contains("oscuro")){
        boton.innerText = "Claro"
    }else{
        boton.innerText = "Oscuro"
    }
};

calcular.onclick = () => {
    total.innerHTML = `Peso en Kg: ${resultado(input.value)}`; 
    total.style.color = "white";
    peso.appendChild(total);
    input.value = "";
};

function resultado (valor){
    return Math.round(valor/2.2);
};

if(prin.classList.contains("oscuro") == false){
    boton.innerText = "Oscuro"
}