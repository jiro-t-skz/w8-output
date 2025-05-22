document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

localStorage.setItem('savedEmail', email);
localStorage.setItem('savedPassword', password);
});


window.addEventListener('DOMContentLoaded',function(){
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

if(savedEmail){
    document.querySelector('#email').value = savedEmail;
}
if(savedPassword){
    document.querySelector('#password').value = savedPassword;
}
})