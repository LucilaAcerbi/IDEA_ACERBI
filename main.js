const btn = document.getElementById ('btnEnviar');

btn.addEventListener ('click', () => {
    Swal.fire({
        icon: 'success',
        title: '<b>Mensaje enviado<b>',
        text: 'Revisa tu casilla, te contactaremos',
        showConfirmButton: false, 
        timer: 1500
    });
})

