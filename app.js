document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('phoneNumber').addEventListener('blur', validatePhone);
document.getElementById('email').addEventListener('blur', validateEmail);


const form = document.getElementById('form');

form.addEventListener('submit', callback);

function callback(e){
    e.preventDefault();
    validateName();
    validateEmail();
    validateZip();
    validatePhone();
}

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z ]{2,10}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');

    }
}
function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}
function validatePhone(){
    const phone = document.getElementById('phoneNumber');
    const re = /^\+?\(?\+?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}