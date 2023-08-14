//OBJETO WINDOWS

const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
const pausa = document.getElementById("pausar");
const salir = document.getElementById("salir");

let enchanted = "https://www.youtube.com/watch?v=B3RCThxaFJ0";

//window.open()

abrir.onclick = () => {
    window.open(enchanted);
}

//window.close()
cerrar.onclick = () => {
    window.close();
}

//window.closed
document.write(window.closed);

//window.stop()

pausa.onclick = () => {
    window.stop();
}

//window.alert()

alert("hola");

//window.print()

print();

//window.prompt()

prompt("Ingresá tu nombre acá");

//window.confirm()

salir.onclick = () => {
    let pregunta = confirm("Querés salir?");
    if(pregunta){
        window.open("https://www.youtube.com/");
    }else{
        alert("Aquí nos quedamos");
    }
}


/**
 * const nombre2 = document.getElementById("nombre");
const telefono2 = document.getElementById("telefono");
const guardar = document.getElementById("guardar");
const contenido = document.getElementById("contenido");

const nombres = document.createElement("P");
const telefonos = document.createElement("P");
const grupo = document.createDocumentFragment();

let datos = [
    {
        nombre: "Maite",
        telefono: "22868272"
    },
]

let valores = null;
var vaa = null;

guardar.onclick = () => {
    vaa = telefono2.value;
    console.log(telefono2.value);
}

datos.push({nombre: valores, telefono: vaa})


/**
 * 
 * for(let i = 0; i < datos.length; i++){
    document.write(datos[i].nombre);
    document.write(datos[i].telefono);
}
 */

/*
datos.map((datos) => {
    document.write(datos.nombre);
    document.write(datos.telefono);

    /**
     * for(let i = 0; i < datos.length; i++){
        nombres.innerHTML = datoss.nombre;
        telefonos.innerHTML = datoss.telefono;
    }
    grupo.appendChild(nombres);
    grupo.appendChild(telefonos);
    contenido.appendChild(grupo);
     
})*/



