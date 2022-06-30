'use strict';

// function validarEdad (edad){
//     if (edad < 18){
//         console.log('Tienes que esperar unos añitos');
//     } else {
//         console.log('bienvenida');
//     }
// }

//Esto es equivalente en arrow a lo de abajo: guardamos la función en una variable.

const validarEdad = (edad)=> {
    if (edad < 18){
        console.log('Tienes que esperar unos añitos');
    } else {
        console.log('bienvenida');
    }
};

validarEdad(20);
validarEdad(15);

//función de un solo parámetro: nos ahorramos los paréntesis
//si sólo hay una instrucción: nos ahorramos las llaves

// const saludar = (nameAdalaber)=> {return `Bienvenida ${nameAdalaber}`};

const saludar = (nameAdalaber,lastName) => `Bienvenida ${nameAdalaber} ${lastName}`;

console.log(saludar('Sandra', 'Ruiz'));

//EJEMPLO DESCUENTOS

/*
ibiza: 90%
barcelona: 20%
vigo: 50%

desc: 5%
sevilla: 0%

1. Traigo los elementos del HTML
2. Escuchar el click del botón
3. Definir la función arrow (condicional del descuento)

*/

//Se puede hacer una función por cada cosa que queramos hacer y que la función manejadora de eventos sea sólo manejadora y dentro llamemos a la funciones definidas anteriormente que necesitemos.


const destinoElement = document.querySelector ('.js_destino');
const btn = document.querySelector ('.js_btn');
const salidaElement = document.querySelector ('.js_msj');

// const toLowerCase = (destino) => {
//     return destino.toLowerCase();
// }

const toLowerCase = destino => destino.toLowerCase ();

//toLowerCase() es una función de js que convierte lo que hay en el input en minúsculas (hay otra para mayúsculas)

const handleClick = (event) => {
    event.preventDefault();

    // const inputDestino = destinoElement.value;
    // const destinoValue = toLowerCase (inputDestino);

    // esto de arriba se puede poner como está abajo

    const destinoValue = destinoElement.value.toLowerCase();

   let desc = 0;

    if ( destinoValue === 'ibiza') {
        desc = 90;
    } else if ( destinoValue === 'barcelona') {
        desc = 20;
    } else if ( destinoValue === 'vigo'){
        desc = 50;
    } else if (destinoValue === 'sevilla') {
        desc = 0;
    } else {
        desc = 5;
    }

    salidaElement.innerHTML = `Tienes un descuento de ${desc} %`;

};

btn.addEventListener('click',handleClick);

