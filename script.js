

let fotoid
marcelo = true

function marce(){
    if (marcelo === true ){
        document.getElementById("marce").innerHTML = "MARCE DIVINO"
    }
}


function numeroRandomMath() {  // Funcion para generar el numero random .
    let numero = Math.round( Math.random() * (21 - 0) + 0);
    fotoid = numero;
    ImagenLoad();
    marce();
   
}

function ImagenLoad(){ // Funcion que generara la imagen
    let imagenHTML = '';
    let fotoidStr = (fotoid+1).toString(); // pasamos fotoid a STRING

    imagenHTML = `    <img id="imagen" src="https://github.com/quintanafabri/AmigosAPP/blob/main/MarceFotos/Marce_`+fotoidStr+`.jpg" alt="">
    `

document.getElementById("foto").innerHTML = imagenHTML;
};


