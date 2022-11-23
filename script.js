const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.getElementById('input-form');
const nomVille = document.getElementById('nomVille');
const temp = document.getElementById('temp');
const tempMin = document.getElementById('tempMin');
const tempMax = document.getElementById('tempMax');
const humidity = document.getElementById('humidity');
const ventVitess = document.getElementById('vent-vitesse');
const ventSens = document.getElementById('vent-direction');

const KELVIN = 273.15;



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
        .then((data) => affMeteo(data))
        .catch((error) => { console.log(error) })
};

//(2.3 % 1).toFixed(4) == "0.3000"

Source: https://prograide.com/pregunta/16734/obtenir-la-partie-decimale-dun-nombre-avec-javascript


function affMeteo(data) {
    let temP = (data.main.temp - KELVIN).toFixed(2);
    let temP_min = (data.main.temp_min - KELVIN).toFixed(2);
    let temP_max = (data.main.temp_max - KELVIN).toFixed(2);
    let vitesseKMH = (data.wind.speed * 1.609344).toFixed(2);
    
    girouette(data.wind.deg);

    nomVille.textContent = `Actuellement, le climat de ${data.name} est :`;
    temp.textContent = `La température ressentie est de ${temP}°C`;
    tempMin.textContent = `La température ressentie est de ${temP_min}°C`;
    tempMax.textContent = `La température ressentie est de ${temP_max}°C`;
    humidity.textContent = ` est de ${data.main.humidity}%`;
    ventVitess.textContent = `La vitesse du vent est de ${vitesseKMH}Km/h`;
    ventSens.textContent = `La direction du vent est : ${varSwitch}`;
    console.log(varSwitch);
    console.log(girouette(55));

    console.log(data);

}
let varSwitch = "";
function girouette(nb) {
    x=parseInt(nb);
    switch (true) {
        case x == 0:return varSwitch = "N(nord)";
            
        case  x<45:return varSwitch = "NNE(nord - nord - est)";
            
        case x==45: return varSwitch = "NE(nord - est)";
            
        case x<68: return varSwitch = "ENE(est - nord - est)";
            
        case x==90: return varSwitch = "E(est)";
            
        case x<113: return varSwitch = "ESE(est - sud - est)";
            
        case x==135: return varSwitch = "SE(sud - est)";
            
        case x<158: return varSwitch = "SSE(sud - sud - est)";
            
        case x==180: return varSwitch = "S(sud)";
            
        case x<203: return varSwitch = "SSO(sud - sud - ouest)";
            
        case x==225: return varSwitch = "SO(sud - ouest)";
            
        case x<248:return varSwitch = "OSO(ouest - sud - ouest)";
            
        case x==270: return varSwitch = "O(ouest)";
            
        case x<293: return varSwitch = "ONO(ouest - nord - ouest)";
            
        case x==315: return varSwitch = "NO(nord - ouest)";
            
        case x<338: return varSwitch = "NNO(nord - nord - ouest)";
            
        default: varSwitch = "N(nord)";
    };
    return varSwitch;
};