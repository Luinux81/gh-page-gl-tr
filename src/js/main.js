import '../styles/main.scss';

import { activarTidyMenu } from './vendors';

var luxy = require('luxy.js');

window.luxy = luxy;


window.addEventListener("load",function(e){
    
    loadMenu('components/menus/menu1.html',activarTidyMenu);

    loadLayout('components/layouts/parallax-luxy-1.html',()=>{luxy.init();})
});

function loadMenu(url,callback){
    window.fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("placeholder_header").innerHTML = data;
            callback();
        });
}

function loadLayout(url,callback){
    window.fetch('components/layouts/parallax-luxy-1.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("main").innerHTML = data;
            callback();
        });    
}

window.componentLoader = function cargador(opciones){
    console.log(opciones);

    switch(opciones.nav){
        case "menu1":
            loadMenu('components/menus/menu1.html',activarTidyMenu);
            break;

        case "menu-test":
            loadMenu('components/menus/menu-test.html',activarTidyMenu);
            break;
    }

    switch(opciones.layout){
        case "parallax-luxy-1":
            loadLayout('components/layouts/parallax-luxy-1.html',()=>{luxy.init();})
            break;
    }

    console.log("componentes cargados")

};