'use strict';
// const button = document.querySelector ('js_button')

// button.addEventListener ('click', (event)=>{
//     cosa que sucede en el evento
// })

const button = document.querySelector ('.js_button');
const nameInput = document.querySelector ('.js_nameInput');
const resultParagraph = document.querySelector ('.js_resultParagraph');

//los querySelector siempre al ppio del js

button.addEventListener ('click', (event) => {

    event.preventDefault()

    // con esta línea ya no se envía el formulario sino que se pon el mensaje en la página

    const userName = nameInput.value;

    //esta variable la declaramos dentro, pk las de antes se ejecutan al cargar la página no al hacer click al botón

    if (userName === '') {
        resultParagraph.innerHTML = 'Eh, tú, no has escrito nada!';
    } else {

    const sayHiText = `Hola ${userName} !`;

    resultParagraph.innerHTML = sayHiText;

    }

});

const link = document.querySelector ('.js_link')

link.addEventListener ('click', (event) => {
    event.preventDefault()

    //para que no me lleve al link

    // event.currentTarget = document.querySelector ('.js_link');

    // console.log (event.currentTarget);
});