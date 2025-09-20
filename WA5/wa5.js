const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navBurger = document.querySelector('.span');


let toggle = false;


navToggle.addEventListener('click',showMenu );

function showMenu(){
    navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");

   /* if(toggle==false){
    navMenu.classList.toggle("show");
    toggle=true;
    }
    else{
    navMenu.classList.toggle("hide");
    toggle=false;
    }*/
 

}