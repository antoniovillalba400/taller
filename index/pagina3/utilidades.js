function crearElemento(tipo) {
    return document.createElement(tipo);
}

function crearElementoTexto(texto) {
    return document.createTextNode(texto);
}

function agregarTexto(elemento, texto) {
    elemento.appendChild(crearElementoTexto(texto));
}

function agregarAtributo(elemento, atributo, valor) {
    elemento.setAttribute(atributo, valor);
}