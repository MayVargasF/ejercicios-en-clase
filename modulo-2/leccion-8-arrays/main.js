'use strict';

const vowels = ['a', 'e','i','o','u'];

let index = 0;

console.log(vowels [index]); //esto funciona porque en index hay un número.

index ++; // index+= 1; <=>  index = index + 1;

const obj = {};
obj.name = 'Ivanico';

const arr = [];

arr[0] = 100;
arr[1] = 200;

const nombre = [
    'Fulanito',
    'Menganita'
];

nombre.push ('Blanca');
nombre.push ('Cati'); //método para añadir valores a la array, los añade AL FINAL.
nombre.sort(); //método para ordenar valores de la array.

console.log (nombres.length); //para saber cuantos elementos tiene un array o si está vacío.

if (nombre.length === 0) {
    console.log('No hay datos!');
};

//podemos crear una función arrow para añadir valores al array mediante entradas de un formulario

const nameInput = document.querySelector ('.js_name');
const button = document.querySelector ('.js_btn');

button.addEventListener ('click', (event) => {
    event.preventDefault();
    const nameWritten = nameInput.value;

    nombres.push(nameWritten);

    console.log (nombres);
});

//Para hacer atajos a trozos de código nos vamos a config > user snippets > lenguaje > añadimos el trozo de código (prefijo es lo que escribirás con el teclado y en body pones el trozo de código)

//si pones $1, $2 te lleva a esa parte para rellenar, rellenas una y le das a tabulador y así te lleva a lo segundo que tienes que rellenar.

const  = document.querySelector('.');


