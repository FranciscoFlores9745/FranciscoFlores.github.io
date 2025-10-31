
let LocationBtn = document.querySelector("#Newlocation").
addEventListener('click', newLocation);

let CityBtn = document.querySelector('#Newcitylevel').
addEventListener('click',newCity);

let current = {
    location:"",
    city: "",
}

const endpoint = "https://api.openweathermap.org/data/2.5/weather?id=524901&appid=b57472c5b576f050d2d77d7d08ecbc0d";


async function newCity(){
    //console.log("Success");

    try {
        const response = await fetch(endpoint);
        if (!response.ok){
           throw Error(response.statusText);
        }
        const json =  await response.json();
        console.log(json);
       // console.log(json);
        displayInfo(json["name"]);
        current.city = json["name"];
        current.location = json["sys"]["country"];
        console.log(current.city);
        console.log(current.location);
    }catch (err){
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayInfo(city) {
    const locationText = document.querySelector('#location');
    const cityText = document.querySelector('#citylevel');
    cityText.textContent = city;
    locationText.textContent = "";
}


function newLocation(){
    console.log("Success == answer!");
    const locationText = document.querySelector('#location');
    locationText.textContent = current.location;
}

newCity();