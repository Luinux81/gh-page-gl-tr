import './vendors/tidy-menu/menu';
import './vendors/tidy-menu/menu.scss';

import './vendors/mmenu-light/mmenu-light';
import './vendors/mmenu-light/mmenu-light.scss';

import { testing, activarTidyMenu } from './vendors/tidy-menu/menu';


export function activarMMenuLight()
{
    var menu = new MmenuLight(
        document.querySelector( '#menu' ),
        'all'
    );

    var navigator = menu.navigation({
        selectedClass: 'Selected',
        slidingSubmenus: false,
        // theme: 'dark',
        title: 'Menu Example #1'
    });

    var drawer = menu.offcanvas({
        position: 'right'
    });

    //	Open the menu.
    document.querySelector( 'a[href="#menu"]' )
        .addEventListener( 'click', evnt => {
            evnt.preventDefault();
            drawer.open();
        });

}

export function test1(){
    testing();
}

export {activarTidyMenu};