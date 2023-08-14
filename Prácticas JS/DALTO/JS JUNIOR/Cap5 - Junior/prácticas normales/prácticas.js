// FUNCIONES DE REGISTRO //

//console.assert()
console.assert(5>6);
console.assert(5-2 >1);

//console.clear()
console.clear();

//console.error(mensaje)
console.error("No funciona de esa manera");

//console.info(mensaje)
console.info("Ojalá un día sentirme desarrollador web");

//console.log(mensaje)
let msg = "hola";
console.log(`${msg}`);

//console.table()

let objeto = {
    valor: "formato",
    contenido: "mensaje"
};

let array = [2, "tercero", "frutas", 503];

console.table(objeto);
console.table(array);

//console.warn(mensaje)
console.warn("Podés pasar pero no es por aquí");

//console.dir(mensaje)
console.dir(array);

// FUNCIONES DE CONTEO //

//console.count()
console.count();
console.count();
console.count();
console.count();

//console.countReset()
console.countReset();

// FUNCIONES DE AGRUPAMIENTO //

//console.group()
console.group("saludos");
console.log("hola");
console.log("como");

//console.groupEnd()
console.groupEnd();
console.log("hola");
console.groupEnd();

//console.groupCollapsed()
console.groupCollapsed("verduras");
console.log("tomates");
console.log("cebollas");
console.log("chiles");
console.groupEnd();

// FUNCIONES DE TEMPORIZACIÓN //

//console.time()
console.time();

//console.timeLog()
console.timeLog();

//console.timeEnd()
console.timeEnd();