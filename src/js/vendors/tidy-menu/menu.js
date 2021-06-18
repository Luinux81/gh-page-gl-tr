// It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.

//(function(){

    function $(selector, context){
        context = context || document;
        return context["querySelectorAll"](selector);
    }

    function forEach(collection, iterator){
        for(var key in Object.keys(collection)){
            iterator(collection[key]);
        }
    }

    function showMenu(menu){
        var menu = this;
        var ul = $("ul", menu)[0];

        if(!ul || ul.classList.contains("-visible")) return;

        menu.classList.add("-active");
        ul.classList.add("-animating");
        ul.classList.add("-visible");
        setTimeout(function(){
            ul.classList.remove("-animating")
        }, 25);

        // Reposicionamiento de elemento

        // Subimos el z-index respecto a la ul superior
        var zIndexBase = menu.parentNode.style.zIndex;

        if(zIndexBase){            
            ul.style.zIndex = zIndexBase + 10;
        }
        else{
            zIndexBase = 0;
            menu.parentNode.style.zIndex = zIndexBase;
            ul.style.zIndex = 10;
        }

        // Ajustamos la posición si sale del viewport
        if(isElementOutOfViewport(ul)){
            reposicionaElemento(ul,menu);
        }
    }

    function hideMenu(menu){
        var menu = this;
        var ul = $("ul", menu)[0];

        if(!ul || !ul.classList.contains("-visible")) return;

        menu.classList.remove("-active");
        ul.classList.add("-animating");
        setTimeout(function(){
            ul.classList.remove("-visible");
            ul.classList.remove("-animating");

            if(menu.parentNode.classList.contains("Menu")){
                ul.style.left = 0;
            }
        }, 300);
    }

    function hideAllInactiveMenus(menu){
        var menu = this;
        forEach(
            $("li.-hasSubmenu.-active:not(:hover)", menu.parent),
            function(e){
                e.hideMenu && e.hideMenu();                
            }
        );
    }

    function isElementOutOfViewport(el){
        var rect             = el.getBoundingClientRect(),
            viewport_width   = document.documentElement.clientWidth,
            viewport_height  = document.documentElement.clientHeight,
            element_x        = rect.left,
            element_y        = rect.top,
            element_width    = rect.width;

        var diferencia = viewport_width - (element_x+element_width);

        
        if(diferencia>10){
            return false;
        }
        else{
            return true;
        }
    }

    function getOverflownPixels(el){
        var rect         = el.getBoundingClientRect(),
        viewport_width   = document.documentElement.clientWidth,
        viewport_height  = document.documentElement.clientHeight,
        element_x        = rect.left,
        element_y        = rect.top,
        element_width    = rect.width;

        var diferencia = viewport_width - (element_x+element_width);
        

        return Math.abs(Math.round(diferencia));
    }

    function reposicionaElemento(el,parent){
        //Miramos si el padre del elemento parent es el menu principal con la clase menu

        if(parent.parentElement.classList.contains("Menu")){
            // El elemento es submenu del menu principal            
            let outsidePixels = getOverflownPixels(el) + 40;

            // outsidePixels = outsidePixels + (outsidePixels*0.2);            
            //console.log("Outside:",outsidePixels);            
            
            el.style.left = "-" + String(outsidePixels) + "px";
        }
        else{
            // El elemento NO es submenu del menu principal, posicionamos al otro lado del submenu padre
            el.style.left = "-" + el.offsetWidth + "px";
        }
        
    }

    // window.addEventListener("load", function(){
    //     activarMenu();
    // });

    function activarTidyMenu(){
        forEach($(".Menu li.-hasSubmenu"), function(e){
            e.showMenu = showMenu;
            e.hideMenu = hideMenu;
        });
    
        forEach($(".Menu > li.-hasSubmenu"), function(e){
            e.addEventListener("click", showMenu);
        });
    
        forEach($(".Menu > li.-hasSubmenu li"), function(e){
            e.addEventListener("mouseenter", hideAllInactiveMenus);
        });
    
        forEach($(".Menu > li.-hasSubmenu li.-hasSubmenu"), function(e){
            e.addEventListener("mouseenter", showMenu);
        });
    
        document.addEventListener("click", hideAllInactiveMenus);
    }

    function testing(){
        console.log("Test exportacion correcto");
    }

//})();

export { testing, activarTidyMenu };