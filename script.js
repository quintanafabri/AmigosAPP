

let fotoid





function numeroRandomMath() {  // Funcion para generar el numero random .
    let numero = Math.round( Math.random() * (21 - 0) + 0);
    fotoid = numero;
    ImagenLoad();
   
}

function ImagenLoad(){ // Funcion que generara la imagen
    let imagenHTML = '';
    let fotoidStr = (fotoid+1).toString(); // pasamos fotoid a STRING

    imagenHTML = `    <img id="imagen" src="https://quintanafabri.github.io/AmigosAPP/`+amigos.value+`Fotos/`+amigos.value+`_`+fotoidStr+`.jpg" alt="">
    `

document.getElementById("foto").innerHTML = imagenHTML;
};


