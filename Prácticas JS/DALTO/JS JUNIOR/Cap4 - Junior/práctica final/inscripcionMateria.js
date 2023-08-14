/* 
    Cofla ya vio las materias y se decidió en cual se va a inscribir así que en tres días lo hará
    El problema es que se cayó el sistema de inscripciones.

    SOLUCIONES:
    -Crear una función para preguntarle a cofla en que materia se quiere inscribir
    -Si hay 6 alumnos anotados en la materia, negarle la inscripción
    -Si hay menos de 6 alumnos, inscribir a Cofla y añadirlo a la lista de alumnos.
*/

let pregunta = prompt("Materias: física, sociales, inglés, matemática, dibujo <br> En cuál quieres inscribir?");

let inscribir = (deseoInscripcion) => {
    let materias = {
        física:{
            id: 1,
            profesor: "Julio Navas",
            clases: "Martes",
            cantidadAlumnos: 6,
            nombreAlumnos: ["José","Miguel","Valentina","Mayra","Alejandro","Josefina"]
        },
        sociales:{
            id: 2,
            profesor: "Raquel Ostorga",
            clases: "Jueves",
            cantidadAlumnos: 3,
            nombreAlumnos: ["María","April","Antonio"]
        },
        inglés:{
            id: 3,
            profesor: "Claudia Martínez",
            clases: "Viernes",
            cantidadAlumnos: 4,
            nombreAlumnos: ["Mauricio","Katherine","Carlos","Josefina"]
        },
        matemática:{
            id: 4,
            profesor: "Miguel Oviedo",
            clases: "Lunes",
            cantidadAlumnos: 1,
            nombreAlumnos: ["José"]
        },
        dibujo:{
            id: 5,
            profesor: "Xiomara Contreras",
            clases: "Miércoles",
            cantidadAlumnos: 5,
            nombreAlumnos: ["Alejandro","Mirna","David","María","Patricia"]
        }
    }
    let respuesta = materias[deseoInscripcion];
    if(respuesta){
        if(respuesta.nombreAlumnos.length >= 6){
            return `<p>La materia <span>${deseoInscripcion}</span> ya está llena</p>`;
        }else{
            respuesta.nombreAlumnos.push("Cofla");
            respuesta.cantidadAlumnos++;
            return `<p>materia inscrita: ${deseoInscripcion}<br> alumnos inscritos: ${respuesta.cantidadAlumnos}<br> listado de alumnos: ${respuesta.nombreAlumnos}</p>`;
        }
    }else{  
        return `<p>Esta materia no está ofertada</p>`
    }
}

document.write(inscribir(pregunta));