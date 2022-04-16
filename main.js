const email = document.getElementById('email')
const phone = document.getElementById('phone')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

function checkEmail() {
    const filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;

    if (!filter.test(email.value)){
        alert('Пожалуйста напишите правильный email адрес!');
        email.focus();
        return false;
    }else {
        console.log(email.value)
    }
}

function checkPhone() {
    const filter = [0-9]

    if (!filter.test(phone.value)) {
        alert('Пожалуста введи правильны номер!');
        phone.focus();
        return false;
    }else {
        console.log(phone.value)
    }
}

btn.addEventListener("click", () => {
    checkEmail();
    checkPhone();
    result.innerText = 'Success!'
})
