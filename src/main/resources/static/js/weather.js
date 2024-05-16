const url = 'http://localhost:8080/weather?city=';

var listCities = [];
var listTemps = [];

function getWeather() {

    var inputValue = document.getElementById('inputValue').value;
    var inputValueFormatted = inputValue.replace(/\s+/g, '+');
    var endpoint = url + inputValueFormatted;

    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', endpoint, false);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            localStorage.setItem('cidade', inputValue.toUpperCase());
            localStorage.setItem('temp', xhttp.responseText);
        }
    }
    xhttp.send();
}

window.onload = function () {
    var temp = localStorage.getItem('temp');
    var cidade = localStorage.getItem('cidade');
    if (temp && cidade) {
        addCityToTable(cidade, temp);
    }
}

function addCityToTable(city, temp) {
    var tableBody = document.querySelector("#weatherTable tbody");

    var newRow = document.createElement('tr');
    newRow.innerHTML = "<td>" + city + "</td><td>" + temp + "</td>";

    tableBody.appendChild(newRow);
}

