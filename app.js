// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables

// Elemento lista que guarda los amigos
let listadoAmigos = [];

// Variable que guarda un nombre
let amigo = "";

// Funcion para agregar un amigo a la lista
/* Funcionamiento:
    - Busca el elemento por Id y toma su valor
    - Verifica que no este vacio ni nulo
    - Agrega el elemento a la lista
    - Limpia la caja de texto llamando a otra funcion*/
function agregarAmigo() {
  amigo = document.getElementById("amigo").value;
  if (typeof amigo === "string" && amigo.length === 0) {
    alert("Por favor, inserte un nombre.");
  } else if (amigo === null) {
    alert("Por favor, inserte un nombre.");
  } else {
    listadoAmigos.push(amigo);
    limpiarCajaPorId();
  }
}

function limpiarCajaPorId() {
  document.getElementById("amigo").value = "";
}
