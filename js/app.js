const burguer =document.querySelector('.burguer');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();   
});
function showMenu(){
    burguer.addEventListener('click',()=>{
navbar.classList.toggle('hide');

    })
}