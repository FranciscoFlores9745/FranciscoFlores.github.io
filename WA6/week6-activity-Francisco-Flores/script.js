// Get all filter buttons and photo cards
const filterButtons = document.querySelectorAll('.gallery-nav button');
const photoCards = document.querySelectorAll('.photo-card');


// Add click event to each button
filterButtons.forEach(button => {

    button.addEventListener('click', (event) => {
        const filterValue = event.target.textContent.toLowerCase();
        filterPhotos(filterValue);

        /*alert(filterValue);*/


        function filterPhotos(category) {
            photoCards.forEach(card => {
                number = 0;
                if (category === 'all' || card.dataset.catagory === category) {
                     number++;
                    console.log(card.dataset.catagory)
                    card.classList.toggle('block');
                    card.style.opacity=100;
                    setTimeout(()=>card.style.display = 'block',500);
                    if(card.style.color == 'red'){
                        card.style.color = 'black'
                    }else{
                    card.style.color = 'red'
                    }
                   
                } else{
                    
                    console.log(card.dataset.catagory)
                     card.classList.toggle('none');
                     card.style.opacity=0;
                    setTimeout(()=>card.style.display = 'none',500);
                     if(card.style.color == 'black'){
                        card.style.color = 'red'
                    }else{
                    card.style.color = 'black'
                    }
                    
                }
            });
        }

        /*function filterPhotos(CheckFilter) {

            if (CheckFilter == 'nature') {
                console.log(CheckFilter);
                
                const photo= document.querySelectorAll('[data-category="nature"]');
                if(photoCards!=photo){
                    return photoCards;
                }
                console.log(photo);

            }
            else if (CheckFilter == 'architecture') {
                console.log(CheckFilter);
            } else {
                console.log(CheckFilter);
            }
        }*/

    });


});