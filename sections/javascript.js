const boton = document.getElementById ('btnEnviar');
// console.log (boton);

boton.addEventListener ('submit', (event) => {
    event.preventDefault();
    let userName = document.querySelector('#userName').value;
    let email = document.querySelector ('#email').value;
    let mensage = document.querySelector('#mensage').value;
    
    console.log(userName, email, mensage);
});