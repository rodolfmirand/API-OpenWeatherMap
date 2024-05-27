
const url = 'http://localhost:8080/weather?city=';

function getWeather() {

    var inputValue = document.getElementById('inputValue').value;
    var inputValueFormatted = inputValue.replace(/\s+/g, '+');
    var endpoint = url + inputValueFormatted;

    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', endpoint, false);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            localStorage.setItem('cidade', getValueFromPath(xhttp.response, 'name'));
            localStorage.setItem('temp', getValueFromPath(xhttp.response, 'main.temp'));
            localStorage.setItem('sensterm', getValueFromPath(xhttp.response, 'main.feels_like'));
            localStorage.setItem('vento', getValueFromPath(xhttp.response, 'wind.speed'));
            localStorage.setItem('pressao', getValueFromPath(xhttp.response, 'main.pressure'));
            localStorage.setItem('umidade', getValueFromPath(xhttp.response, 'main.humidity'));
            localStorage.setItem('tempmax', getValueFromPath(xhttp.response, 'main.temp_max'));
            localStorage.setItem('tempmin', getValueFromPath(xhttp.response, 'main.temp_min'));
        } else {
            localStorage.setItem('cidade', "Cidade não encontrada!");
            localStorage.setItem('temp', "");
            localStorage.setItem('sensterm', "");
            localStorage.setItem('vento', "");
            localStorage.setItem('pressao', "");
            localStorage.setItem('umidade', "");
            localStorage.setItem('tempmax', "");
            localStorage.setItem('tempmin', "");
        }
    }
    xhttp.send();
}

window.onload = function () {
    var temp = localStorage.getItem('temp');
    var cidade = localStorage.getItem('cidade');
    var sensterm = localStorage.getItem('sensterm');
    var vento = localStorage.getItem('vento');
    var pressao = localStorage.getItem('pressao');
    var umidade = localStorage.getItem('umidade');
    var tempmax = localStorage.getItem('tempmax');
    var tempmin = localStorage.getItem('tempmin');

    addCityToTable(cidade, temp, sensterm, vento, pressao, umidade, tempmax, tempmin);
}

function addCityToTable(cidade, temp, sensterm, vento, pressao, umidade, tempmax, tempmin) {
    document.getElementById('cidade').innerText = cidade;
    document.getElementById('temp').innerText = temp;
    document.getElementById('sensterm').innerText = sensterm;
    document.getElementById('vento').innerText = vento;
    document.getElementById('pressao').innerText = pressao;
    document.getElementById('umidade').innerText = umidade;
    document.getElementById('tempmax').innerText = tempmax;
    document.getElementById('tempmin').innerText = tempmin;
}

function getValueFromPath(obj, path) {
    var json = JSON.parse(obj);
    const keys = path.split('.');
    let current = json;

    for (const key of keys) {
        if (current[key] === undefined) {
            return undefined;
        }
        current = current[key];
    }

    return current;
}