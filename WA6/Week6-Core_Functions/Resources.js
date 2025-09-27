const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navBurger = document.querySelectorAll('span');


let toggle = false;
/* This is for the look of the hamburger menu and also its function so that you can access other pages on smaller screens, but to also show the user that it is
working as intended*/

navToggle.addEventListener('click', showMenu);

function showMenu() {
    navMenu.classList.toggle("show");
    navBurger.forEach(span => {
        span.classList.toggle("open");
    })

    navMenu.classList.toggle("hide");
    navBurger.forEach(span => {
        span.classList.toggle("close");
    })


    if (toggle == false) {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Close navigation menu')
        toggle = true;
    }
    else {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        toggle = false;
    }


}

document.addEventListener('click', (e) => {
    if ((!navMenu.contains(e.target) && !navToggle.contains(e.target)) && toggle == true) {

        toggle = false;
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        navMenu.classList.toggle("hide");
        navBurger.forEach(span => {
            span.classList.toggle("close");
        })

    }
})