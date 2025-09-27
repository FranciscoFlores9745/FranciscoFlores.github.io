const navToggle = document.querySelector('.nav-toggle');
const filterToggle = document.querySelector('.filter-toggle');
const navMenu = document.querySelector('.nav-menu');
const infoNav = document.querySelector('.info-nav');
const navBurger = document.querySelectorAll('spanMenu');
const navBurger2 = document.querySelectorAll('spanFilter');


let toggle1 = false;
let toggle2 =false;
/* This is for the look of the hamburger menu and also its function so that you can access other pages on smaller screens, but to also show the user that it is
working as intended*/

navToggle.addEventListener('click', showMenu);

filterToggle.addEventListener('click', showFilter);



/* Hamburger Menu for the Pages */
function showMenu() {
    navMenu.classList.toggle("show");
    navBurger.forEach(span => {
        span.classList.toggle("open");
    })

    navMenu.classList.toggle("hide");
    navBurger.forEach(span => {
        span.classList.toggle("close");
    })


    if (toggle1 == false) {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Close navigation menu')
        toggle1 = true;
    }
    else {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        toggle1 = false;
    }


}

document.addEventListener('click', (e) => {
    if ((!navMenu.contains(e.target) && !navToggle.contains(e.target)) && toggle1 == true) {

        toggle1 = false;
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        navMenu.classList.toggle("hide");
        navBurger.forEach(span => {
            span.classList.toggle("close");
        })

    }
})

/* Hamburger Menu for the Filters */
function showFilter() {
    infoNav.classList.toggle("show");
    navBurger2.forEach(span => {
        span.classList.toggle("open");
    })

    infoNav.classList.toggle("hide");
    navBurger2.forEach(span => {
        span.classList.toggle("close");
    })


    if (toggle2 == false) {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Close navigation menu')
        toggle2 = true;
    }
    else {
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        toggle2 = false;
    }


}

document.addEventListener('click', (e) => {
    if ((!infoNav.contains(e.target) && !filterToggle.contains(e.target)) && toggle2 == true) {

        toggle2 = false;
        document.getElementById('aria-expanded').setAttribute('aria-label', 'Toggle navigation menu')
        infoNav.classList.toggle("hide");
        navBurger2.forEach(span => {
            span.classList.toggle("close");
        })

    }
})


/* This is for the filters, this makes sure that when certain things are checked off, that it will hide or show the information that the user chose*/
const filterButtons = document.querySelectorAll('.info-nav li button');
const contentInfo = document.querySelectorAll('.content-container');


// Button filters
filterButtons.forEach(button => {

    button.addEventListener('click', (event) => {
        const filterValue = event.target.textContent.toLowerCase();
        filterContent(filterValue);
        console.log(filterValue);



        function filterContent(category) {
           contentInfo.forEach(card => {
                if (category === 'all' || card.dataset.catagory === category) {
                    console.log(card.dataset.catagory);
                    console.log(category);

                    card.classList.toggle('grid');
                    //card.style.display = 'grid'
                    card.style.opacity = 100;
                    setTimeout(() => card.style.display = 'grid',500);

                } else if(category === 'none'|| card.dataset.catagory !== category){

                    console.log(card.dataset.catagory);
                    console.log(category);
                    card.classList.toggle('none');
                    //card.style.display = 'none'
                    card.style.opacity = 0;
                    setTimeout(() => card.style.display = 'none',500);

                }
            });
        }

    });


});



/*make sure to add not only filters but also buttons for more information if the user wants it */