// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

// Elemento lista que guarda los amigos
let listadoAmigos = [];

// Variable que guarda un nombre
let amigo = "";

// Elemento HTML de la lista
let lista = "";

// Funcion para agregar un amigo a la lista
/* Funcionamiento:
    - Busca el elemento por Id y toma su valor
    - Verifica que no este vacio ni nulo
    - Agrega el elemento a la lista
    - Limpia la caja de texto llamando a otra funcion
    - Actualiza la lista en la vista*/
function agregarAmigo() {
    amigo = document.getElementById("amigo").value;
    if (typeof amigo === "string" && amigo.length === 0) {
        alert("Por favor, inserte un nombre.");
    } else if (amigo === null) {
        alert("Por favor, inserte un nombre.");
    } else {
        listadoAmigos.push(amigo);
        limpiarCajaPorId();
        actualizarLista(listadoAmigos);
    }
}

function limpiarCajaPorId() {
    document.getElementById("amigo").value = "";
}

// Funcion para actualizar la lista en la vista
/* Parametros:
    - listadoAmigos es la lista donde estan almacenados los amigos
   Funcionamiento:
    - Obtiene el elemento de la vista que contiene la lista
    - Limpia la lista en la vista
    - Se crean tantos elementos hayan sido guardados en la lista, y se muestran en la vista */
function actualizarLista(listadoAmigos) {
    lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listadoAmigos.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = element;
        lista.appendChild(li);
    });
}