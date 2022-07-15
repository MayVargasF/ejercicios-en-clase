'use strict';

const list = document.querySelector('.js_list');

const handleClick =(ev)=> {
    if (ev.currentTarget.id === 1) {}
}

const listenLi = () => {
    //añadir los eventos

    const liList = document.querySelectorAll('.js_listName');
    for (const item of liList) {
        item.addEventListener('click', handleClick);
    }
}


//uso de catch para que te muestre los errores de un fetch
let characters =[];
const paintHTML = (characters) => {
    let html = '';
    for (const item of characters){
        if (item.name) {
        html += `<li class="js_listName">${item.name}</li>`
        } else {
            html += `<li class="js_listName">Nombre no definido</li>`
        }
    };
    list.innerHTML = html;

    listenLi();
};


fetch ('https://api.sampleapis.com/avatar/characters') //he puesto un error en la URL para que me salga el error
.then (response => response.json())
.then (data =>{
    console.log(data);
    characters = data;
    paintHTML(characters);
})
.catch ((error) => {
    console.log(error);
});





