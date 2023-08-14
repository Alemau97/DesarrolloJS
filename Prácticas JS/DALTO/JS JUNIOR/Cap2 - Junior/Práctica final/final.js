//Primero en entrar
let primero = false;

let validarClientes = (tiempo) =>{
    
    let edad = parseInt(prompt("Qué edad tenés?"));

    if(edad >= 18){
        if(tiempo > 2 && tiempo <=7 && primero == false){
            document.write(`<p>Son las ${tiempo}:00 Hs</p>`);
            document.write(`<p>Cumplís la edad para entrar, además sos el primero, así que entrás gratis</p>`);
            primero = true;
        }else{
            document.write(`<p>Son las ${tiempo}:00 Hs</p>`);
            document.write(`<p>Cumplís la edad para entrar, pero tenés que pagar $5.00 la entrada</p>`);
        }
    }else{
        document.write(`<p>A dónde crees que vas? no tenés la edad para entrar</p>`);
    }
}

validarClientes(4);
validarClientes(8);
validarClientes(1);
validarClientes(6);
validarClientes(9);