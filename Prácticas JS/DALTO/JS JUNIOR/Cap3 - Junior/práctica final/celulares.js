// PROBLEMA A
//Se llega a una tienda de celulares y a Cofla le interesan 3 teléfonos, pero los vendedores
//no saben nada, así que se debe crear una solución:
//Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
//Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria RAM
//Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar

//PROBLEMA B
// Ahora quiere ver 2 celulares de alta gama, con los mismos datos que los primeros celulares
//Estos tienen mejores características y pueden grabar en cámara super lenta, reconocimiento facial y una cámara extra


//PROBLEMA A
class celulares{
    constructor(marca,color,peso,resPantalla,resCamara,ram){
        this.brand = marca;
        this.color = color;
        this.weight = peso;
        this.screen = resPantalla;
        this.camera = resCamara;
        this.memory = ram;
        this.on = false;
        this.summary = `El celular es marca ${this.brand}, es color ${this.color} y tiene ${this.memory}GB de memoria RAM, tiene un peso de ${this.weight} lbs,
                        además de tener ${this.screen}Px de resolución en pantalla y ${this.camera}Px de resolución en la cámara`;
    }
    encenderApagar(){
        if(this.on == false){
            document.write(`<p>El celular ${this.brand} se está encendiendo`);
            this.on = true;
        }else{
            document.write(`<p>El celular ${this.brand} ya está encendido`);
        }
    }
    reiniciar(){
        if(this.on == true){
            document.write(`<p>El celular ${this.brand} se está reinciando`);
        }else{
            document.write(`<p>El celular ${this.brand} está apagado`);
        }
    }
    fotoGrabar(){
        document.write(`<p>Foto y video grabados a una resolución de ${this.camera}Px con el celular ${this.brand}</p>`);
    }
    verInfo(){
        document.write(`<p><span>${this.summary}</span></p>`);
    }
}

const samsungS21 = new celulares("Samsung S21","blanco",1,1400,35 + "Mg",16);
const iPhone13 = new celulares("iPhone 13","midnight green",1.5,1400,24 + "Mg",16);
const xiaomi = new celulares("Xiaomi MI 9T","negro",1,1080,60 + "Mg",12);

//celular 1
samsungS21.verInfo();
samsungS21.encenderApagar();
samsungS21.reiniciar();
samsungS21.fotoGrabar();
//celular 2
iPhone13.verInfo();
iPhone13.encenderApagar();
iPhone13.reiniciar();
iPhone13.fotoGrabar();
//celular 3
xiaomi.verInfo();
xiaomi.encenderApagar();
xiaomi.reiniciar();
xiaomi.fotoGrabar();


//PROBLEMA B
document.write(`<h2>AQUÍ COMIENZA EL CATÁLOGO DE GAMA ALTA</h2>`);

class altaGama extends celulares{
    constructor(marca,color,peso,resPantalla,resCamara,ram,nCamaras,rFacial){
    super(marca,color,peso,resPantalla,resCamara,ram)
        this.camaras = nCamaras;
        this.reconocimiento = rFacial;
    }
    infoComp(){
        return `<p>${this.verInfo()}</p>
                <p>Cámaras: ${this.camaras}</p>
                <p>Reconocimiento facial: ${this.reconocimiento}</p>`;
    }
}

const gamaAlta1 = new altaGama("SAMSUNG S21 ULTRA","GOLD",2,1600,70 + " y " + 20,20,2,"Sí");
const gamaAlta2 = new altaGama("iPhone 13 PRO MAX","BLUE",2,1600,70 + " y " + 40,20,2,"Sí");

document.write(`<p>${gamaAlta1.infoComp()}</p>`);
document.write(`<p>${gamaAlta2.infoComp()}</p>`);
