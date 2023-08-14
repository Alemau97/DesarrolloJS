/*
La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos
que se anotaron en dichas clases, pero necesitamos ver esto más ordenadamente

- Crear una función que al pasarle como parámetro la materia, nos devuelva:
    *El profesor asignado
    *El nombre de todos los alumnos
-Crear función que nos diga en cuantas clases está cofla
-Nombrar las clases en las que está y los profesores de cada una

*/

let inscripcion = (materia)=>{
    let materias = {
        matemática: {
            id: 1,
            profesor: "José Carpio",
            cantidadAlumnos: 5,
            nombreAlumnos: ["José", "Carlos","María","Cofla","Karla"]
        },
        física: {
            id: 2,
            profesor: "Miguel Serrano",
            cantidadAlumnos: 8,
            nombreAlumnos: ["José", "Carlos","María","Cofla","Karla","Francisco","Alejandro","Valentina"]
        },
        sociales: {
            id: 3,
            profesor: "Alicia Pérez",
            cantidadAlumnos: 3,
            nombreAlumnos: ["José", "Carlos","María"]
        },
        inglés: {
            id: 4,
            profesor: "José Carpio",
            cantidadAlumnos: 10,
            nombreAlumnos: ["José", "Carlos","María","Francisco","Karla","April","Valentina","Alejandro","Rocío","David"]
        }
    }
    
    if(materias[materia]){
        return `<p>Materia: ${materia}<br>Profesor: ${[materias[materia].profesor]}<br>Alumnos inscritos: ${materias[materia].cantidadAlumnos}<br>
        Alumnos: ${materias[materia].nombreAlumnos}</p>`;
    }else{
        return materias;
    }

}

let conteo = (alumno) =>{
    let accesos = inscripcion();
    let total = 0;
    for(mats in accesos){
        if(accesos[mats]["nombreAlumnos"].includes(alumno)){
            total++;
        }
    }
    return `<p>${alumno} aparece en: ${total} materias</p>`;
    
}

let nombreMateria = (alumno) =>{
    let accesar = inscripcion();
    let conteoNombre = [];
    let conteoProfes = [];
    for(accediendo in accesar){
        if(accesar[accediendo]["nombreAlumnos"].includes(alumno)){
            conteoNombre.push(`${accediendo}`);
            conteoProfes.push(`${accesar[accediendo]["profesor"]}`)
        }
    }
    return `<p>${alumno} está en: ${conteoNombre}, los profesores son ${conteoProfes} respectivamente</p>`;
}

document.write(inscripcion("matemática"));
document.write(inscripcion("física"));
document.write(inscripcion("sociales"));
document.write(inscripcion("inglés"));
document.write(conteo("Cofla"));
document.write(conteo("María"));
document.write(conteo("Valentina"));
document.write(nombreMateria("Cofla"));
document.write(nombreMateria("María"));
document.write(nombreMateria("Valentina"));