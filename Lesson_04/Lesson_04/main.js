//1

let str = prompt('1.введите текст с кавычками');

let regexp1 = /'/gim;

alert(str.replace(regexp1, '"'))


//2

let str2 = prompt('2.введите текст кавычками в слове');

if(str2){regexp2 = /(^\'|\B\'|\'\B|\'$)/gim;} //aren't

alert(str2.replace(regexp2, '"'))



//3

function check() {
let fiorexp = /([A-ZА-ЯЁ][a-zа-яё]+[\-\s]?){3,}/g
let emailrexp = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/g
let telrexp = /\+7\(\d{3}\)\d{3}-\d{4}/g


const form = document.querySelector('.form')
const sendButton = form.querySelector('.send-button')
const fio = form.querySelector('.fio')
const tel = form.querySelector('.tel')
const email = form.querySelector('.email')
const comment = form.querySelector('.comment')


form.addEventListener('submit', (e) => {
    e.preventDefault() 
    console.log('clicked on sendButton');
    //alert('clicked ');
   
   
    console.log('fio: ', fio.value)
    console.log('tel: ', tel.value)
    console.log('email: ', email.value)
    console.log('comment: ', comment.value)

    if (fiorexp.test(fio.value)) {console.log('good fio'); fio.style.border = "1px solid blue"; } else { alert('check fio');
    fio.style.border = "1px solid red";};

    if (telrexp.test(tel.value)) {console.log('good tel'); tel.style.border = "1px solid blue"; } else { alert('check tel');
    tel.style.border = "1px solid red";};

    if (emailrexp.test(email.value)) {console.log('good mail'); email.style.border = "1px solid blue"; } else { alert('check mail');
    email.style.border = "1px solid red";};
    


});


// почему повторной отправке формы не корректно работают проверки?
//Приходится обновлять страницу

}

check();