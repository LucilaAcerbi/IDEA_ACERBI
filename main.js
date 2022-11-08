const form = document.getElementById ('form');
const user = document.getElementById ('user_name');
const email = document.getElementById ('e-mail');
const message = document.getElementById ('message');
const btn = document.getElementById ('btnEnviar');

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body),
    }
    const response =  await fetch ('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_wdjqzjk',
        template_id: 'template_pipgmep',
        user_id: '10jZEFdyS7hUcX0pA',
        template_params: {
            'to_name': user.value,
            'from_name': email.value,
            'message': message.value
        }
    };

    sendEmail(body)
})
     
btn.addEventListener ('click', () => {
    Swal.fire({
        icon: 'success',
        title: '<b>Mensaje enviado<b>',
        text: 'Revisa tu casilla, te contactaremos',
        showConfirmButton: false, 
        timer: 1500
    });
})

