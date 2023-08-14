//Crear un mini sistema de registro que permita registrar a los alumnos que están presentes (P) y ausentes (A) en clase
//Conocer la situación final de todos los alumnos (Nro total de presentes y ausentes)
//Si tiene un 10% de ausencias por semestre, si se tienen más, aclarar que está reprobado.

let cantidad = prompt("Cuántos alumnos hay inscritos?");

let alumnosTotales = [];

for(let i = 0; i < cantidad; i++){

    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];

}

let tomarAsistencia = (nombre, p) =>{

    let asistencia = prompt(nombre);
    if(asistencia == "p" || asistencia == "P"){
        alumnosTotales[p][1]++;
    }

}

for(let i = 0; i < 30; i++){

    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }

}

for (alumno in alumnosTotales){

    let resultado = `<p>${alumnosTotales[alumno][0]}</p>
                     <p>Aistencias: ${alumnosTotales[alumno][1]}</p>
                     <p>Faltas: ${30 - alumnosTotales[alumno][1]}</p>`;

    if(30 - alumnosTotales[alumno][1] >= 18){
        resultado+= `Reprobado por muchas faltas`;
    }else{
        resultado+= `<p></p>`;
    }
    document.write(`<p>${resultado}</p>`);

}