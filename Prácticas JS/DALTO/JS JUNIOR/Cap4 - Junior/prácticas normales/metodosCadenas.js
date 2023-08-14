// concat() //
//let cadena = new String("Cadena de prueba para el capítulo 4");
let cadena = "Cadena de prueba para el capítulo 4";
let cadenaComp = ", y la verdad estoy aprendiendo mucho y entendiendo el código";

let result = cadena.concat(cadenaComp);
document.write(`<p>${result}</p>`);

// startsWith() & endsWith() //

let cadena1 = new String("pruebita");
let cadena2 = "pruebita numero 2";

let res1 = cadena2.startsWith(cadena1);
let res = cadena2.endsWith(cadena1);
document.write(`<p>${res1}</p>`);
document.write(`<p>${res}</p>`);

// includes() //

let a = "El Ministerio De Magia";
let b = "De Magia";
document.write(`<p>${a.includes(b)}</p>`);

// indexOf() & lastIndexOf() //

let c = "prueba de rendimiento de las computadoras rendimiento";
document.write(`<p>${c.indexOf("rendimiento")}</p>`);
document.write(`<p>${c.lastIndexOf("rendimiento")}</p>`);

// padStart() & padEnd() //

let d = "es jueves";
document.write(`<p>${d.padStart(15,"hoy ")}</p>`);
document.write(`<p>${d.padEnd(15," hoy")}</p>`);

//repeat()

let e = "pongan cayoooo ";
document.write(`<p>${e.repeat(5)}</p>`);

//split()

let f = "quisiera saber como estás y como te puedo ayudar";
let fresult = f.split("como");
document.write(`<p>${fresult}</p>`);

//substring()

let g = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let gresult = g.substring(0,6);
document.write(`<p>${gresult}</p>`);

//toLowerCase() & toUpperCase()

let h = "EL PRINCIPAL problema es que NO SE que procede";
let hresult1 = h.toLowerCase();
let hresult2 = h.toUpperCase();
document.write(`<p>${hresult1}</p>`);
document.write(`<p>${hresult2}</p>`);

//toString()
//No hay mucho que comentar acerca de

//trim() & trimEnd() & trimStart()

let i = "       Pues parece que la cosa sigue igual      ";
let itrim = i.trim();
let itrimEnd = i.trimEnd();
let itrimStart = i.trimStart();
document.write(`<p>${i.length}</p>`);
document.write(`<p>${itrim.length}</p>`);
document.write(`<p>${itrimEnd.length}</p>`);
document.write(`<p>${itrimStart.length}</p>`);

//valueOf()

