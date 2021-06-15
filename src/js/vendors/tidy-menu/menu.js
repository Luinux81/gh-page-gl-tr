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

    function reposicionaElemento(el,parent){
        //Miramos si el padre del elemento parent es el menu principal con la clase menu

        if(parent.parentElement.classList.contains("Menu")){
            // El elemento es submenu del menu principal            
            el.style.left = "-" + el.offsetWidth/2 + "px";
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