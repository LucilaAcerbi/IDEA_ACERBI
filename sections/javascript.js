
// Evento enviar formulario 

const boton = document.getElementById ('btnEnviar');

boton.addEventListener ('submit', (event) => {
    event.preventDefault();
    let userName = document.querySelector('#userName').value;
    let email = document.querySelector ('#email').value;
    let mensage = document.querySelector('#mensage').value;
    
    console.log(userName, email, mensage);
});


// Evento mostrar clicks en icono instagram

const click = document.getElementById ('instagram');

click.addEventListener ('click', (event) =>{
    event.preventDefault();
    console.log (click);
})