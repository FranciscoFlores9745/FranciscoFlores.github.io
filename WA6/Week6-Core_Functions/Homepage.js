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
/* This is for the filters, this makes sure that when certain things are checked off, that it will hide or show the information that the user chose*/
const filterButtons = document.querySelectorAll('.info-nav button');
const photoCards = document.querySelectorAll('.content');


// Button filters
filterButtons.forEach(button => {

    button.addEventListener('click', (event) => {
        const filterValue = event.target.textContent.toLowerCase();
        filterPhotos(filterValue);

        /*alert(filterValue);*/


        function filterPhotos(category) {
            number = 0;
            photoCards.forEach(card => {


                if (category === 'all' || card.dataset.catagory === category) {
                    number++;
                    console.log(card.dataset.catagory)
                    card.classList.toggle('block');
                    card.style.opacity = 100;
                    setTimeout(() => card.style.display = 'block', 500);
                    if (card.style.color == 'red') {
                        card.style.color = 'black'
                    } else {
                        card.style.color = 'red'
                    }
                    document.getElementById("Photos").innerText = "#Photos: " + number;

                } else {

                    console.log(card.dataset.catagory)
                    card.classList.toggle('none');
                    card.style.opacity = 0;
                    setTimeout(() => card.style.display = 'none', 500);
                    if (card.style.color == 'black') {
                        card.style.color = 'red'
                    } else {
                        card.style.color = 'black'
                    }

                }
            });
        }

    });


});


/*make sure to add not only filters but also buttons for more information if the user wants it */