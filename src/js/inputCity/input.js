import axios from 'axios';

export function test() {
    console.log('działam');
}
var googlePlacesAutocompleteService = new google.maps.places.AutocompleteService();
// function autocomplete(input, cities) {

// }


const myPromise = new Promise((resolve, reject) => {
    resolve(cities);
})


let myInput = document.getElementById("cityInput");
myInput.addEventListener("keyup", function () {
    let inputValue = document.getElementById("cityInput").value;

    if (inputValue.length >= 3) {
        googlePlacesAutocompleteService.getQueryPredictions({
            input: inputValue
        }, showAutocompleteList.bind(this));
    }

});

function showAutocompleteList(citiesPredictions, status) {
    removeCitiesBoxChildren();
    var citiesBox = document.getElementById("citiesBox");
    for (const city of citiesPredictions) {
        let cityDiv = document.createElement("div");
        cityDiv.innerHTML = city.description;
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