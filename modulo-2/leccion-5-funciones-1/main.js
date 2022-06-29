'use strict';



function iva (price){
    //lo siguiente es una VARIABLE TOTAL, sólo existe dentro de esta función (el ámbito de la función), no podemos llamarla fuera de la función. En este caso puedes volver a llamar total a una variable dentro de otra función distinta.
 const total = price*1.21;
 return total;
};

// esto en cambio es una VARIABLE GLOBAL
const totalp = document.querySelector('.total')

totalp.innerHTML = iva(100)

//si el argumento viene del valor de un input, definir una variable con el input y colocarlo luego en el lugar de price (parámetro) como argumento.

function updateInfo (){
    const divinfo =document.querySelector ('.js_info');
    divinfo.innerHTML ='Nueva información';
};

//las FUNCIONES SIEMPRE llevan PARÉNTESIS (eso las diferencia de una variable)

updateInfo();

const articleElement = document.querySelector ('.js-article');
const priceElement = document.querySelector ('.js-price');
const btnAdd = document.querySelector ('.js-add');
const articleList = document.querySelector ('.js_articleList');
const total = document.querySelector ('.js_total');
let sumPrice= 0;

function totalPay (price) {
    sumPrice = sumPrice + price;
    //sumPrice += price
    return sumPrice;
}

function handleClick(ev) {
    ev.preventDefault();
    //hemos definido ev para poder ponerle el preventDefault,sería la info del navegador como event.
    const articleValue = articleElement.value;
    const priceValue = priceElement.value;
    articleList.innerHTML += `<li>Articulo: ${articleValue} Precio: ${priceValue} </li>`;
    total.innerHTML = totalPay (parseInt(priceValue));
};

btnAdd.addEventListener ('click', handleClick);

