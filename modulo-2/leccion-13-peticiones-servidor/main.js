'use strict';

const listUl = document.querySelector('.js_swnames');
const inputBtn = document.querySelector('.js_btn');
const inputSearch = document.querySelector('.js_input');

let data =[]; //aquí se guardarán los datos del API

function renderCharacters (){
    let html = ''; //creo la variable para guardar el html

    for( const characterData of data){
        html += `<li>${characterData.name}</li>`;
    }

    listUl.innerHTML = html; //pinto el html en el ul
}

//EVENTOS

inputBtn.addEventListener('click', (event) =>{
    event.preventDefault();

    const characterUser = inputSearch.value;

    fetch (`https://swapi.dev/api/people/?search=${characterUser}`)
    .then (response => response.json()) 
    .then( json => {
        
        console.log(json); 

        data =json.results; 
        
        renderCharacters(); 
    });
    
});

/*fetch ('https://swapi.dev/api/people/')
    .then (response => response.json()) //pasar a json
    .then( json => {
        //código a ejecutar cuando llegue la respuesta de la petición

        console.log(json); //para ver lo que contiene el array de datos en la consola

        data =json.results; //cojo sólo los results de los datos que me llegan.
        
        renderCharacters(); //ejecuto la función para pintar los datos
    })
    */