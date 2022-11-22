const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.getElementById('input-form');

let varTest = 0;

btn.addEventListener('click', () => {
    let textInput = input.value;
    return fctCoord(textInput);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let textInput = input.value;
    return fctCoord(textInput);
});

//fct qui avec le nom de la ville et le code pays(FR) permet d'avoir sa position gps, via API !!
function fctCoord(ville) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&appid=147cfa8444d4c4443f5fe7207c42d9bb`) // fletch accepte string en entrée !!
        .then((response) => response.json())
        .then((data) => weatherMaster(data[0].lat, data[0].lon))
        .catch((error) => { console.log(error) })
};


//fonvtion qui prend 2arguments longitude et lattitude pour donner, via API, un objet contenant les details meteo du site !!
function weatherMaster(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=147cfa8444d4c4443f5fe7207c42d9bb`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => { console.log(error) })
};