function crearElemento(tipo){
    var nodo = document.createElement(tipo);
    return nodo;
}

function crearElementoTexto(tipo, texto){
    var nodo = document.createElement(tipo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}

function crearImagen(src, alt, width, height){
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = height;
    return img;
}