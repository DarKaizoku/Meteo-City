const btn = document.getElementById('btn');
const input = document.getElementById('input');
const form = document.getElementById('input-form');


function fctCoord (ville) { 
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&appid=147cfa8444d4c4443f5fe7207c42d9bb`) // fletch accepte string en entrée !!
.then((response) => response.json())
.then((data) => console.log(data)) //appellet mastermeteo
};

btn.addEventListener('click', () => {
        let textInput = input.value;
        return fctCoord(textInput);
});

/* form.addEventListener('submit', (event) => {
    event.preventDefault();
    let textInput = input.value;
    return fctCoord(textInput);
}); */

/* function weatherMaster(lna,lon){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&appid=147cfa8444d4c4443f5fe7207c42d9bb`) // changer le fletch en coordo meteo
.then((response) => response.json())
.then((data) => console.log(data)) 
}; */