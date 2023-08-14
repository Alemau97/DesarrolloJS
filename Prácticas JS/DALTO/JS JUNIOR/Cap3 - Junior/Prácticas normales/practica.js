//CLASES
class mascotas{
    constructor(especie, nombre, edad, talla){
        this.esp = especie;
        this.name = nombre;
        this.age = edad;
        this.size = talla;
        this.info = `Es un ${this.esp}, se llama ${this.name}, tiene ${this.age} años y es ${this.size}`;
    }
    //método
    verInfo(){
        document.write(`<p>${this.info}</p>`);
    }
    //método estático
    static aullar(){
        document.write(`<p>Auuuuuu dicen los perros xd</p>`);
    }
}

//creando los objetos 
const luna = new mascotas("perro French","Luna",3,"mediano");
const koki = new mascotas("perro Chihuahua","Koki",8,"pequeño");

//llamando el método
luna.verInfo();
koki.verInfo();

//llamando al método estático, sin necesidad de crear un objeto
//solo llamando a la clase y al método
mascotas.aullar();

//HERENCIA

//extends ES PARA QUE HEREDE LOS DATOS DE LA CLASE ANTERIOR
//super DENTRO DEL CONSTRUCTOR, ES PARA QUE EL CONSTRUCTOR HEREDE LOS PARÁMETROS, Y ADICIONALMENTE SE LE PUEDEN AÑADIR OTROS
class Perro extends mascotas{
    constructor(especie, nombre, edad, talla, color,raza){
        super(especie,nombre,edad,talla);
        this.color = color;
        //recomendado para métodos get y set
        this.raza = null;
        this.infor = `Es un ${this.esp}, se llama ${this.name}, tiene ${this.age} años y es ${this.size}. El color es ${this.color}
                      y es raza ${this.raza}`;
    }
    //método set (le decimos que este valor puede modificarse si el usuario le indica)
    set setRaza(nombrecito){
        this.raza = nombrecito;
    }
    get getRaza(){
        return this.raza;
    }
    ladrar(){
        document.write(`<p>ALTOKE MI REY</p>`);
    }
    newInfor(){
        document.write(`<p>${this.infor}</p>`);
    }
}

const pruebita = new Perro("Puddle","Pluto",5,"Grande","Blanco","doberman");
pruebita.newInfor();
pruebita.ladrar();
//cambiando propiedad de raza con set y get
pruebita.setRaza = "Husky";
document.write(`<p>${pruebita.getRaza}`);

let cantidad = parseInt(prompt("Cuántos alumnos desea inscribir?"));

let pruebaArray = [];
let i =0;
for(i; i < cantidad; i++){
    pruebaArray.push(prompt("Ingrese el nombre del alumno " + (i+1)));
}

let pregunta = parseInt(prompt("Presione 1 para conocer los alumnos inscritos, presione 2 para salir"));
switch(pregunta){
    case 1:
        document.write(`<p>Los alumnos son: ${pruebaArray.map((x) => x)}</p>`);
        break;
    case 2:
        document.write(`<p>El listado se guardó pero no renderizó</p>`);
        break;
    default:
        document.write(`<p>Soy default</p>`);
}

