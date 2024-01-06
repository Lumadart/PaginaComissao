const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){

 const nav = document.getElementById('navbar');
 nav.classList.toggle('active-menu')

}

btnMobile.addEventListener('click',toggleMenu);