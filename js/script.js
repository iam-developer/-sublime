
$(document).ready(function(){

    $('#about_btn').on("click", function(e){
        e.preventDefault();
            var top = $("#about_sublime").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });

    $('#project_btn').on("click", function(e){
        e.preventDefault();
            var top = $("#projects").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });

    $('#development_btn').on("click", function(e){
        e.preventDefault();
            var top = $("#services_provided").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });

    $('#blog_btn').on("click", function(e){
        e.preventDefault();
            var top = $("#blogs").offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 700);
    });
});

//  ПРОВЕРКА ИНПУТОВ::

function check_form() {

let inputs = document.querySelectorAll('.input');
let inner_text = document.querySelector('.inner_text');
let name = document.querySelector('[name = name]').value;
let phone = document.querySelector('[name = phone]').value;
let email = document.querySelector('[name = email]').value;
let message = document.querySelector('[name = message]').value;

    for(let i = 0; i < inputs.length; i ++) {
        if(inputs[i].value == '') {
            inner_text.innerText = 'Заполните все поля!';
            inner_text.style.color = "#fff";
            inner_text.style.backgroundColor = "red";
            inner_text.style.transition = "0.4s";
            return false;
        }
        else {
            inner_text.innerText = 'Ваши данные успешно отправлены!';
            inner_text.style.color = "#fff";
            inner_text.style.backgroundColor = "green";
            inner_text.style.transition = "0.4s";
        }
    }
    show_feed(name,phone,email,message);
}

// POST запрос:

const link = 'https://www.jsonstore.io/f25507f7538fcaaaf55892699e87b35b20e5ad873db5f25a2a52b9bb625cd251';

var array =[];

function show_feed(name,phone,email,message) {
    let obj = {
        name: name,
        phone: phone,
        email: email,
        message: message
    }

    array.push(obj);

    fetch(link,{
        headers:{'Content-type': 'application/json'},
        method: 'POST',
        body:JSON.stringify(array),
    })
        .then(res => res.json())
        .then(data => {
              if(data.ok == true) {
                 console.log(data);
              }
        })
}

