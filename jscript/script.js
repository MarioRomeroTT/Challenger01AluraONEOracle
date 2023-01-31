var botonEncriptar = document.querySelector(".botton-encript");
var botonDesencriptar = document.querySelector(".botton-desencrip");
var txtEncriptado = document.querySelector(".mns-resultado");
var botonCopiar =  document.querySelector(".copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick =  copiarAlPortapapeles;

function copiarAlPortapapeles(){
  
    navigator.clipboard.writeText(txtEncriptado.value);
    alertcopiadoCorrecto();

}

function validarTexto(){
    let textoEscrito = document.querySelector(".ingrese-texto").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encriptar () {
    if (!validarTexto()){
        ocutarImagenes();
        txtEncriptado.textContent = encriptarTxt(recuperarTextoIngresado());
    }

}

function desencriptar() {
    ocutarImagenes();
    txtEncriptado.textContent = desencriptarTxt(recuperarTextoIngresado());
    
}

function recuperarTextoIngresado() {
    var area = document.querySelector(".ingrese-texto");
    return area.value
}
function ocutarImagenes() {
    var imgResultado = document.querySelector(".contendor-img1pg");
    imgResultado.classList.add("ocultar");
}

function encriptarTxt (mensaje) {
    var texto = mensaje
    var textoFinal = ""
    
    for ( i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal =  textoFinal + texto[i]
        }
    }
    return textoFinal;
}


function desencriptarTxt (mensaje) {
    var texto = mensaje
    var textoFinal = ""

    for ( i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else {
            textoFinal =  textoFinal + texto[i]
        }
    }
    return textoFinal;
}



