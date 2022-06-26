const burguer =document.querySelector('.burguer');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');

document.addEventListener('DOMContentLoaded',()=>{
    showMenu();   
    closeMenu();
});

function showMenu(){
    burguer.addEventListener('click',()=>{
navbar.classList.toggle('hide');

    })

function closeMenu(){
    links.forEach(links =>{
        links.addEventListener('click', (e)=>{

            if(e.target.tagName === 'A'){
                navbar.classList.add('hide');
            }
        })
    })
}
}