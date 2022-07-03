/*menu variables*/
const burguer =document.querySelector('.burguer');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');
/*menu variables*/

/*date variable*/
const fecha = document.querySelector('.fecha');
/*date variable*/

/*menu function*/
document.addEventListener('DOMContentLoaded',()=>{
    showMenu();   
    closeMenu();
    fechaActual();
});

function showMenu(){
    burguer.addEventListener('click',()=>{
navbar.classList.toggle('hide');

    })
}
function closeMenu(){
    links.forEach(links =>{
        links.addEventListener('click', (e)=>{
            /*smooth behavior*/
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value);
            changeSection(section);
            /*smooth behavior*/
            if(e.target.tagName === 'A'){
                navbar.classList.add('hide');
            }
        })
    })
}

/*menu function*/

/*smooth behavior*/
function changeSection(section){
    section.scrollIntoView({
        behavior:'smooth'
    })
}
/*smooth behavior*/

/*date function*/
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}


/*date function*/
