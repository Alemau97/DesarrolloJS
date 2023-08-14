//Desarrollar un sistema que permita preguntar cuantos alumnos hay en un salón de clases
//Permitir que se pueda ingresar en un array, así mismo con el nombre y las 2 notas del mismo
//Determinar si pasa o no la materia (se pasa con 6)
//Brindar un resumen con el nombre, las notas obtenidas y el promedio.
//El examen equivale al 40% y el proyecto al 60% del semestre

let cantidad = parseInt(prompt("Cuántos alumnos hay en este salón de clases?"));

let alumnos = [];

for (let i = 0; i < cantidad; i++){
    alumnos[i] = [prompt("Cuál es el nombre del alumno " + (i+1) + " ?"), prompt("Ingrese la nota del examen"), prompt("Ingrese la nota del proyecto")]; 
}

let promedio = (nombre, nota1, nota2) =>{
    document.write(`<p>Nombre del alumno: ${nombre}</p>`);
    let primera = parseFloat(nota1*0.40);
    document.write(`<p>En el examen (40%) obtuvo la siguiente nota: ${nota1}, y en equivalencia logró ganar ${primera} </p>`);
    let segunda = parseFloat(nota2*0.60);
    document.write(`<p>En el proyecto (60%) obtuvo la siguiente nota: ${nota2}, y en equivalencia logró ganar ${segunda} </p>`);
    let resultado = primera + segunda;
    return `<p>${aprobar(resultado)}</p>`;
}

let aprobar = (promedios)=>{
    if(promedios >= 6){
        document.write(`<p>Felicidades, has aprobado este curso con una nota de ${promedios}</p>`);
    }else{
        document.write(`<p>Lo sentimos, ha dejado este curso con una nota de ${promedios}</p>`);
    }
}

for (alumno in alumnos){
    document.write(`${promedio(alumnos[alumno][0],alumnos[alumno][1],alumnos[alumno][2])}`);
}