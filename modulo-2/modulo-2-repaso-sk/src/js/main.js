'use strict';

const listPalette = document.querySelector('.js-list-palette');
let palettes = []; //guardar lo que me devuelva el servidor

function listenerPalettes(){
    const liPalette = document.querySelectorAll('.js-palettes');
    
    for(const li of liPalette){
        li.addEventListener('click',);
    }
}

function renderPalettes(){
    let html = '';

    for(const onePalette of palettes) {

        html += `<li class="palette js-palettes">`;
        html += `<h1 class="palette__title">${onePalette.name}</h1>`;
        html += `<div class="palette__color">`;

        for(const paletteColors of onePalette.colors) {
            html += `<div class="palette__colors" style="background-color: #${paletteColors}"></div>`;
        }
      
        html += ` </div></li>`;
       
    }

    listPalette.innerHTML = html
    listenerPalettes();
}

function getDataApi(){
    fetch('https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json')
    .then((response)=>response.json())
    .then(data => {
    palettes = data.palettes; //aquí guardamos los datos del servidor dentro de la variable que creamos arriba`
    renderPalettes();
    });
}

getDataApi();

//Ponemos el listener en los li porque así da igual donde pinchemos siempre que esté dentro del li.