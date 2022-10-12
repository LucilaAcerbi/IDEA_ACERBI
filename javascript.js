// Evento enviar formulario 

const boton = document.getElementById ('btnEnviar');

boton.addEventListener ('submit', (e) => {
    e.preventDefault();
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let mensage = document.getElementById('mensage').value;
    
    console.log(userName, email, mensage);

    localStorage.setItem ('Nombre', userName);
    localStorage.setItem ('correo', email);
    localStorage.setItem ('mensaje', mensage);
});

// Evento mostrar clicks en boton enviar

const click = document.getElementById ('btnEnviar');

click.addEventListener ('click', (e) => {
    e.preventDefault();
    console.log ('se hizo click');
})

// Almacenarmiento en LocalStorage, simulo consulta en formulario

const usuario = localStorage.setItem ('Nombre', 'Lucila')
const mail = localStorage.setItem ('correo', 'lucila@mail.com')
const mensaje = localStorage.setItem ('mensaje', 'Hola, quisiera hacer una consulta')



