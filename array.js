// Creo un array con información ingresada en el formulario

const mensajesRecibidos = [
    {nombre: "", email: "", texto: ""},
];

//APP

const form = document.getElementById ('form');
const user = document.getElementById ('user_name');
const email = document.getElementById ('e-mail');
const message = document.getElementById ('message');

function nuevoMensaje(event){
    event.preventDefault();

    const nombreIntroducido = user;
    const emailIntroducido = email;
    const mensajeIntroducido = message;

    const nuevoMensaje = { nombre: nombreIntroducido, email: emailIntroducido, texto: mensajeIntroducido };
    mensajesRecibidos.push(nuevoMensaje);
}

//Muestro array

console.log(mensajesRecibidos);