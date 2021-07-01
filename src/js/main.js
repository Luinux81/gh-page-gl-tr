import '../styles/main.scss';

import { activarTidyMenu, activarMMenuLight } from './vendors';

var luxy = require('luxy.js');

window.luxy = luxy;


window.addEventListener("load",function(e){
    
    loadComponent('components/menus/menu1.html', 'placeholder_header--desktop', activarTidyMenu);

    loadComponent('components/menus/menu-mobile-1.html', 'placeholder_header--mobile', activarMMenuLight);

    loadComponent('components/layouts/parallax-luxy-1.html', 'main', ()=>{luxy.init();})
});

function loadComponent(url, target, callback){
    window.fetch(url)
        .then(response => response.text())
        .then(data => {
            let el = document.getElementById(target);
            if(el !== undefined){
                el.innerHTML = data;
                callback();
            }            
        });
}

window.componentLoader = function cargador(opciones){

    switch(opciones.nav){
        case "menu1":
            loadComponent('components/menus/menu1.html', 'placeholder_header--desktop', activarTidyMenu);
            break;

        case "menu-test":
            loadComponent('components/menus/menu-test.html', 'placeholder_header--desktop', activarTidyMenu);
            break;
    }

    switch (opciones.navMobile){
        case "menu-mobile-1":
            loadComponent('components/menus/menu-mobile-1.html', 'placeholder_header--mobile', ()=>{});
            break;
    }

    switch(opciones.layout){
        case "parallax-luxy-1":
            loadComponent('components/layouts/parallax-luxy-1.html', 'main', ()=>{luxy.init();})
            break;
    }

    console.log("componentes cargados")

};