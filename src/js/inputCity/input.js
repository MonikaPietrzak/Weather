import axios from 'axios';

export function test() {
    console.log('działam');
}
//Wpisz swój klucz do api google
const apiKey = "AIzaSyBrmu53UCOZERlv7TtHakd-lFs_UFWxpy4";
const googlePlacesApiUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pl&key=" + apiKey;

// function autocomplete(input, cities) {

// }

const cities = ['kalisz', 'torun', 'poznan', 'warszawa', 'wroclaw', 'wielun', 'kamieniec', 'twardogora'];

const myPromise = new Promise((resolve, reject) => {
    resolve(cities);
})


//Dodać addEventListener za każdym razem jak jest wpisana litera
//W addEventListener jest wywoływana funkcja pobierająca wartośc inputa
let myInput = document.getElementById("cityInput");
myInput.addEventListener("keydown", function () {
    let inputValue = document.getElementById("cityInput").value;


    //Symulacja strzału do api pobraną wartością z inputa - w odp bedzie tablica



    //Wyświetlenie listy miast na sztywno - po każdym wpisaniu zeby sie cala lista pokazala
    //po kliknięciu w podpowiedz podmiana wartosci inputa 

    axios.get(googlePlacesApiUrl).then(showAutocompleteList.bind(this));
    //dodac new promise, ktory zawsze bedzie zwracal resolve tablice. Jak promise sie wykona ...
    //tutaj wywołanie promisa
});

function showAutocompleteList(cities) {
    removeCitiesBoxChildren();
    var citiesBox = document.getElementById("citiesBox");
    for (const city of cities) {
        let cityDiv = document.createElement("div");
        cityDiv.innerHTML = city;
        cityDiv.addEventListener('click', cityDivOnClick);
        citiesBox.appendChild(cityDiv);
    }
}

function cityDivOnClick(event) {
    const cityName = event.target.innerHTML;
    setCityInputValue(cityName);
    removeCitiesBoxChildren();
}

function setCityInputValue(cityName) {
    const cityInput = document.getElementById("cityInput");
    cityInput.value = cityName;
}

function removeCitiesBoxChildren() {
    const citiesBox = document.getElementById("citiesBox");
    while (citiesBox.firstChild) {
        citiesBox.removeChild(citiesBox.firstChild);
    }
}