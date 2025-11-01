
let LocationBtn = document.querySelector("#Newlocation").
addEventListener('click', newLocation);

let CityBtn = document.querySelector('#Newcitylevel').
addEventListener('click',newCity);

let MenuBtn = document.querySelector("#menu").
addEventListener('click', newMenu);


const LocationDisplay =  document.querySelector('.location');
const LevelDisplay =  document.querySelector('.City-Level');
const EntryDisplay =  document.querySelector('.City-Entry');
const WeatherDisplay =  document.querySelector('.Weather');

let current = {
    location:"",
    city: "",
    longitude: "unavailable",
    latitude: " unavailable",
    weather: "",
    show: 0
}

 privacyLevel = "";

function newMenu(){
    current.show = 0;
    console.log("wow");
    LocationDisplay.classList.toggle('show');
    LocationDisplay.classList.toggle('hide');
    LevelDisplay.classList.toggle('show');
    LevelDisplay.classList.toggle('hide');
    EntryDisplay.classList.toggle('show');
    EntryDisplay.classList.toggle('hide');
    WeatherDisplay.classList.toggle('show');
    WeatherDisplay.classList.toggle('hide');
    
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
        privacyLevel = 'city';

        // Let user choose location precision
    if (privacyLevel === 'city') {
  // Only send city name to API, not exact coordinates
      console.log("weather");
      current.location = json["sys"]["country"];
      current.city = json["name"];
      current.longitude ="";
       current.latitude ="";
       current.weather = json["weather"][0]["description"];
     } else if (privacyLevel === 'precise') {
       current.longitude ="";
       current.latitude ="";
     }
    console.log(current.city);
    console.log(current.location);
    current.show++;
    displayInfo(json["name"]);
    }catch (err){
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayInfo(city) {
    if(current.show>0){
    const locationText = document.querySelector('#location');
    const cityText = document.querySelector('#citylevel');
    const longitudeText = document.querySelector('#longitude');
    const latitudeText = document.querySelector('#latitude');
    const WeatherText = document.querySelector('#weather');

    cityText.textContent = city;
    locationText.textContent = current.location;
    longitudeText.textContent = current.longitude;
    latitudeText.textContent = current.latitude;

    WeatherText.textContent = current.weather;
    }

}


async function newLocation(){

 try {
        const response = await fetch(endpoint);
        if (!response.ok){
           throw Error(response.statusText);
        }
        const json =  await response.json();
        console.log(json);
    console.log("Success == answer!");
    const locationText = document.querySelector('#location');
    locationText.textContent = current.location;
    privacyLevel = 'precise';

    // Let user choose location precision
        // Let user choose location precision
    if (privacyLevel === 'city') {
  // Only send city name to API, not exact coordinates
      console.log("weather");
      current.location = json["sys"]["country"];
      current.city = json["name"];
     } else if (privacyLevel === 'precise') {
       current.longitude =json["coord"]["lon"];
       current.latitude = json["coord"]["lat"];
     }
     current.show++;
     displayInfo(json["name"]);
    
    }catch (err){
        console.log(err);
        alert('Failed to get new trivia');
    }
}




