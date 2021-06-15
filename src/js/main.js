import '../styles/main.scss';

import { activarTidyMenu } from './vendors';

var luxy = require('luxy.js');

window.luxy = luxy;


window.addEventListener("load",function(e){
    this.fetch('components/menus/menu1.html')
        .then(response => response.text())
        .then( data => {
            this.document.getElementById("placeholder_header").innerHTML = data;
            activarTidyMenu();
        });
});