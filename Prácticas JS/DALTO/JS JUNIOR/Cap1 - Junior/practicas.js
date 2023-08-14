const heladoAgua = 0.6;
const heladoCrema = 1;
const heladix = 1.6;
const heladovich = 1.7;
const helardo = 1.8;
const confites = 2.9;
const pote = 2.9;

let roberto = prompt("Ingrese el dinero que tiene (roberto)");
let pedro = prompt("Ingrese el dinero que tiene (pedro)");
let cofla = prompt("Ingrese el dinero que tiene (cofla)");
cofla = parseInt(cofla);

if (roberto >= 0.6 && roberto < 1){
    document.write(`<p>Roberto Comprate el helado de agua, pinche pobre xd</p>`);
}
else if(roberto >= 1 && roberto < 1.6){
    document.write(`<p>Roberto Comprate el helado de crema</p>`);
}
else{
    document.write(`<p>Roberto No te alcanza pa na, pa que venis</p>`);
}

if(pedro >= 0.6 && pedro < 1){
    document.write(`<p>Pedro Comprate el helado de agua, pinche pobre xd</p>`);
}
else if(pedro >=1 && pedro < 1.6){
    document.write(`<p>Pedro Comprate el helado de crema</p>`);
}
else if(pedro >=1.6 && pedro < 1.7){
    document.write(`<p>Pedro Comprate el heladix</p>`);
}
else if(pedro >=1.7 && pedro < 1.8){
    document.write(`<p>Pedro Comprate el helado heladovich</p>`);
}
else{
    document.write(`<p>Pedro No te alcanza pa na, pa que venis</p>`);
}

if(cofla >= 0.6 && cofla < 1){
    document.write(`<p>Confla Comprate el helado de agua, pinche pobre xd</p>`);
    let vuelto = cofla - heladoAgua;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else if(cofla >=1 && cofla < 1.6){
    document.write(`<p>Confla Comprate el helado de crema</p>`);
    let vuelto = cofla - heladoCrema;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else if(cofla >=1.6 && cofla < 1.7){
    document.write(`<p>Confla Comprate el heladix</p>`);
    let vuelto = cofla - heladix;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else if(cofla >=1.7 && cofla < 1.8){
    document.write(`<p>Confla Comprate el helado heladovich</p>`);
    let vuelto = cofla - heladovich;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else if(cofla >=1.8 && cofla < 2.9){
    document.write(`<p>Confla Comprate el helado helardo</p>`);
    let vuelto = cofla - helardo;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else if(cofla >=2.9){
    document.write(`<p>Confla Te podes comprar el helado con confites o el pote, vos decidís.</p>`);
    let vuelto = cofla - pote;
    document.write(`<p>Confla El cambio es ${vuelto}</p>`);
}
else{
    document.write(`<p>Cofla No te alcanza pa na, pa que venis</p>`);
}