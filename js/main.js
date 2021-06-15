/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendors.js":
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "test1": () => (/* binding */ test1),
/* harmony export */   "activarTidyMenu": () => (/* reexport safe */ _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__.activarTidyMenu)
/* harmony export */ });
/* harmony import */ var _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/tidy-menu/menu */ "./src/js/vendors/tidy-menu/menu.js");
/* harmony import */ var _vendors_tidy_menu_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/tidy-menu/menu.scss */ "./src/js/vendors/tidy-menu/menu.scss");



function test1() {
  (0,_vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__.testing)();
}


/***/ }),

/***/ "./src/js/vendors/tidy-menu/menu.js":
/*!******************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testing": () => (/* binding */ testing),
/* harmony export */   "activarTidyMenu": () => (/* binding */ activarTidyMenu)
/* harmony export */ });
// It’s an Immediately-Invoked Function Expression, or IIFE for short. It executes immediately after it’s created.
//(function(){
function $(selector, context) {
  context = context || document;
  return context["querySelectorAll"](selector);
}

function forEach(collection, iterator) {
  for (var key in Object.keys(collection)) {
    iterator(collection[key]);
  }
}

function showMenu(menu) {
  var menu = this;
  var ul = $("ul", menu)[0];
  if (!ul || ul.classList.contains("-visible")) return;
  menu.classList.add("-active");
  ul.classList.add("-animating");
  ul.classList.add("-visible");
  setTimeout(function () {
    ul.classList.remove("-animating");
  }, 25);

  if (isElementOutOfViewport(ul)) {
    reposicionaElemento(ul, menu);
  }
}

function hideMenu(menu) {
  var menu = this;
  var ul = $("ul", menu)[0];
  if (!ul || !ul.classList.contains("-visible")) return;
  menu.classList.remove("-active");
  ul.classList.add("-animating");
  setTimeout(function () {
    ul.classList.remove("-visible");
    ul.classList.remove("-animating");
  }, 300);
}

function hideAllInactiveMenus(menu) {
  var menu = this;
  forEach($("li.-hasSubmenu.-active:not(:hover)", menu.parent), function (e) {
    e.hideMenu && e.hideMenu();
  });
}

function isElementOutOfViewport(el) {
  var rect = el.getBoundingClientRect(),
      viewport_width = document.documentElement.clientWidth,
      viewport_height = document.documentElement.clientHeight,
      element_x = rect.left,
      element_y = rect.top,
      element_width = rect.width;
  var diferencia = viewport_width - (element_x + element_width);

  if (diferencia > 10) {
    return false;
  } else {
    return true;
  }
}

function reposicionaElemento(el, parent) {
  //Miramos si el padre del elemento parent es el menu principal con la clase menu
  if (parent.parentElement.classList.contains("Menu")) {
    // El elemento es submenu del menu principal            
    el.style.left = "-" + el.offsetWidth / 2 + "px";
  } else {
    // El elemento NO es submenu del menu principal, posicionamos al otro lado del submenu padre
    el.style.left = "-" + el.offsetWidth + "px";
  }
} // window.addEventListener("load", function(){
//     activarMenu();
// });


function activarTidyMenu() {
  forEach($(".Menu li.-hasSubmenu"), function (e) {
    e.showMenu = showMenu;
    e.hideMenu = hideMenu;
  });
  forEach($(".Menu > li.-hasSubmenu"), function (e) {
    e.addEventListener("click", showMenu);
  });
  forEach($(".Menu > li.-hasSubmenu li"), function (e) {
    e.addEventListener("mouseenter", hideAllInactiveMenus);
  });
  forEach($(".Menu > li.-hasSubmenu li.-hasSubmenu"), function (e) {
    e.addEventListener("mouseenter", showMenu);
  });
  document.addEventListener("click", hideAllInactiveMenus);
}

function testing() {
  console.log("Test exportacion correcto");
} //})();




/***/ }),

/***/ "./node_modules/luxy.js/dist/js/luxy.min.js":
/*!**************************************************!*\
  !*** ./node_modules/luxy.js/dist/js/luxy.min.js ***!
  \**************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! luxy.js v0.0.7 | (c) 2018 Mineo Okuda | MIT License | git+ssh://git@github.com:min30327/luxy.git */
!(function(t,e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(this,(function(){"use strict";var t={wrapper:"#luxy",targets:".luxy-el",wrapperSpeed:.08,targetSpeed:.02,targetPercentage:.1},e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e;var i=window.cancelAnimationFrame||window.mozCancelAnimationFrame,s=function(){for(var t={},e=0,i=arguments.length;e<i;e++){var s=arguments[e];!(function(e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(s)}return t},r=function(){this.Targets=[],this.TargetsLength=0,this.wrapper="",this.windowHeight=0,this.wapperOffset=0};return r.prototype={isAnimate:!1,isResize:!1,scrollId:"",resizeId:"",init:function(e){if(this.settings=s(t,e||{}),this.wrapper=document.querySelector(this.settings.wrapper),"undefined"===this.wrapper)return!1;this.targets=document.querySelectorAll(this.settings.targets),document.body.style.height=this.wrapper.clientHeight+"px",this.windowHeight=window.clientHeight,this.attachEvent(),this.apply(this.targets,this.wrapper),this.animate(),this.resize()},apply:function(t,e){this.wrapperInit(),this.targetsLength=t.length;for(var i=0;i<this.targetsLength;i++){var s={offset:t[i].getAttribute("data-offset"),speedX:t[i].getAttribute("data-speed-x"),speedY:t[i].getAttribute("data-speed-Y"),percentage:t[i].getAttribute("data-percentage"),horizontal:t[i].getAttribute("data-horizontal")};this.targetsInit(t[i],s)}},wrapperInit:function(){this.wrapper.style.width="100%",this.wrapper.style.position="fixed"},targetsInit:function(t,e){this.Targets.push({elm:t,offset:e.offset?e.offset:0,horizontal:e.horizontal?e.horizontal:0,top:0,left:0,speedX:e.speedX?e.speedX:1,speedY:e.speedY?e.speedY:1,percentage:e.percentage?e.percentage:0})},scroll:function(){document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop,this.windowHeight;this.wrapperUpdate(this.scrollTop);for(var t=0;t<this.Targets.length;t++)this.targetsUpdate(this.Targets[t])},animate:function(){this.scroll(),this.scrollId=e(this.animate.bind(this))},wrapperUpdate:function(){this.wapperOffset+=(this.scrollTop-this.wapperOffset)*this.settings.wrapperSpeed,this.wrapper.style.transform="translate3d(0,"+Math.round(100*-this.wapperOffset)/100+"px ,0)"},targetsUpdate:function(t){t.top+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedY)-t.top)*this.settings.targetPercentage,t.left+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedX)-t.left)*this.settings.targetPercentage;var e=parseInt(t.percentage)-t.top-parseInt(t.offset),i=Math.round(-100*e)/100,s=0;if(t.horizontal){var r=parseInt(t.percentage)-t.left-parseInt(t.offset);s=Math.round(-100*r)/100}t.elm.style.transform="translate3d("+s+"px ,"+i+"px ,0)"},resize:function(){var t=this;t.windowHeight=window.innerHeight||document.documentElement.clientHeight||0,parseInt(t.wrapper.clientHeight)!=parseInt(document.body.style.height)&&(document.body.style.height=t.wrapper.clientHeight+"px"),t.resizeId=e(t.resize.bind(t))},attachEvent:function(){var t=this;window.addEventListener("resize",(function(){t.isResize||(i(t.resizeId),i(t.scrollId),t.isResize=!0,setTimeout((function(){t.isResize=!1,t.resizeId=e(t.resize.bind(t)),t.scrollId=e(t.animate.bind(t))}),200))}))}},new r}));

/***/ }),

/***/ "./src/js/vendors/tidy-menu/menu.scss":
/*!********************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors */ "./src/js/vendors.js");



var luxy = __webpack_require__(/*! luxy.js */ "./node_modules/luxy.js/dist/js/luxy.min.js");

window.luxy = luxy;
window.addEventListener("load", function (e) {
  loadComponent('components/menus/menu1.html', 'placeholder_header', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
  loadComponent('components/layouts/parallax-luxy-1.html', 'main', function () {
    luxy.init();
  });
});

function loadComponent(url, target, callback) {
  window.fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    var el = document.getElementById(target);

    if (el !== undefined) {
      el.innerHTML = data;
      callback();
    }
  });
}

window.componentLoader = function cargador(opciones) {
  switch (opciones.nav) {
    case "menu1":
      loadComponent('components/menus/menu1.html', 'placeholder_header', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;

    case "menu-test":
      loadComponent('components/menus/menu-test.html', 'placeholder_header', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;
  }

  switch (opciones.layout) {
    case "parallax-luxy-1":
      loadComponent('components/layouts/parallax-luxy-1.html', 'main', function () {
        luxy.init();
      });
      break;
  }

  console.log("componentes cargados");
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9ub2RlX21vZHVsZXMvbHV4eS5qcy9kaXN0L2pzL2x1eHkubWluLmpzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsidGVzdDEiLCJ0ZXN0aW5nIiwiJCIsInNlbGVjdG9yIiwiY29udGV4dCIsImRvY3VtZW50IiwiZm9yRWFjaCIsImNvbGxlY3Rpb24iLCJpdGVyYXRvciIsImtleSIsIk9iamVjdCIsImtleXMiLCJzaG93TWVudSIsIm1lbnUiLCJ1bCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlzRWxlbWVudE91dE9mVmlld3BvcnQiLCJyZXBvc2ljaW9uYUVsZW1lbnRvIiwiaGlkZU1lbnUiLCJoaWRlQWxsSW5hY3RpdmVNZW51cyIsInBhcmVudCIsImUiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydF93aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidmlld3BvcnRfaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZWxlbWVudF94IiwibGVmdCIsImVsZW1lbnRfeSIsInRvcCIsImVsZW1lbnRfd2lkdGgiLCJ3aWR0aCIsImRpZmVyZW5jaWEiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsImFjdGl2YXJUaWR5TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibHV4eSIsInJlcXVpcmUiLCJ3aW5kb3ciLCJsb2FkQ29tcG9uZW50IiwiaW5pdCIsInVybCIsInRhcmdldCIsImNhbGxiYWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwidW5kZWZpbmVkIiwiaW5uZXJIVE1MIiwiY29tcG9uZW50TG9hZGVyIiwiY2FyZ2Fkb3IiLCJvcGNpb25lcyIsIm5hdiIsImxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHTyxTQUFTQSxLQUFULEdBQWdCO0FBQ25CQyxrRUFBTztBQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JEO0FBRUE7QUFFSSxTQUFTQyxDQUFULENBQVdDLFFBQVgsRUFBcUJDLE9BQXJCLEVBQTZCO0FBQ3pCQSxTQUFPLEdBQUdBLE9BQU8sSUFBSUMsUUFBckI7QUFDQSxTQUFPRCxPQUFPLENBQUMsa0JBQUQsQ0FBUCxDQUE0QkQsUUFBNUIsQ0FBUDtBQUNIOztBQUVELFNBQVNHLE9BQVQsQ0FBaUJDLFVBQWpCLEVBQTZC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RCxFQUFvQyxvQkFBcEMsRUFBMERQLHFEQUExRCxDQUFiO0FBQ0E7QUFQUjs7QUFVQSxVQUFPc0IsUUFBUSxDQUFDRSxNQUFoQjtBQUNJLFNBQUssaUJBQUw7QUFDSWpCLG1CQUFhLENBQUMseUNBQUQsRUFBNEMsTUFBNUMsRUFBb0QsWUFBSTtBQUFDSCxZQUFJLENBQUNJLElBQUw7QUFBYSxPQUF0RSxDQUFiO0FBQ0E7QUFIUjs7QUFNQU4sU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFFSCxDQXBCRCxDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcbmltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH0gZnJvbSAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdDEoKXtcclxuICAgIHRlc3RpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IHthY3RpdmFyVGlkeU1lbnV9OyIsIi8vIEl04oCZcyBhbiBJbW1lZGlhdGVseS1JbnZva2VkIEZ1bmN0aW9uIEV4cHJlc3Npb24sIG9yIElJRkUgZm9yIHNob3J0LiBJdCBleGVjdXRlcyBpbW1lZGlhdGVseSBhZnRlciBpdOKAmXMgY3JlYXRlZC5cblxuLy8oZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcbiAgICAgICAgcmV0dXJuIGNvbnRleHRbXCJxdWVyeVNlbGVjdG9yQWxsXCJdKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdG9yKXtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gT2JqZWN0LmtleXMoY29sbGVjdGlvbikpe1xuICAgICAgICAgICAgaXRlcmF0b3IoY29sbGVjdGlvbltrZXldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZW51KG1lbnUpe1xuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XG4gICAgICAgIHZhciB1bCA9ICQoXCJ1bFwiLCBtZW51KVswXTtcblxuICAgICAgICBpZighdWwgfHwgdWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXZpc2libGVcIikpIHJldHVybjtcblxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlXCIpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLWFuaW1hdGluZ1wiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi12aXNpYmxlXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKVxuICAgICAgICB9LCAyNSk7XG5cbiAgICAgICAgaWYoaXNFbGVtZW50T3V0T2ZWaWV3cG9ydCh1bCkpe1xuICAgICAgICAgICAgcmVwb3NpY2lvbmFFbGVtZW50byh1bCxtZW51KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVNZW51KG1lbnUpe1xuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XG4gICAgICAgIHZhciB1bCA9ICQoXCJ1bFwiLCBtZW51KVswXTtcblxuICAgICAgICBpZighdWwgfHwgIXVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZVwiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItdmlzaWJsZVwiKTtcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKG1lbnUpe1xuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XG4gICAgICAgIGZvckVhY2goXG4gICAgICAgICAgICAkKFwibGkuLWhhc1N1Ym1lbnUuLWFjdGl2ZTpub3QoOmhvdmVyKVwiLCBtZW51LnBhcmVudCksXG4gICAgICAgICAgICBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLmhpZGVNZW51ICYmIGUuaGlkZU1lbnUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KGVsKXtcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHZpZXdwb3J0X3dpZHRoICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGVsZW1lbnRfeCAgICAgICAgPSByZWN0LmxlZnQsXG4gICAgICAgICAgICBlbGVtZW50X3kgICAgICAgID0gcmVjdC50b3AsXG4gICAgICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcblxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcblxuICAgICAgICBcbiAgICAgICAgaWYoZGlmZXJlbmNpYT4xMCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3NpY2lvbmFFbGVtZW50byhlbCxwYXJlbnQpe1xuICAgICAgICAvL01pcmFtb3Mgc2kgZWwgcGFkcmUgZGVsIGVsZW1lbnRvIHBhcmVudCBlcyBlbCBtZW51IHByaW5jaXBhbCBjb24gbGEgY2xhc2UgbWVudVxuXG4gICAgICAgIGlmKHBhcmVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIk1lbnVcIikpe1xuICAgICAgICAgICAgLy8gRWwgZWxlbWVudG8gZXMgc3VibWVudSBkZWwgbWVudSBwcmluY2lwYWwgICAgICAgICAgICBcbiAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBcIi1cIiArIGVsLm9mZnNldFdpZHRoLzIgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIE5PIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsLCBwb3NpY2lvbmFtb3MgYWwgb3RybyBsYWRvIGRlbCBzdWJtZW51IHBhZHJlXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgYWN0aXZhck1lbnUoKTtcbiAgICAvLyB9KTtcblxuICAgIGZ1bmN0aW9uIGFjdGl2YXJUaWR5TWVudSgpe1xuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnNob3dNZW51ID0gc2hvd01lbnU7XG4gICAgICAgICAgICBlLmhpZGVNZW51ID0gaGlkZU1lbnU7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGlcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0aW5nKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBleHBvcnRhY2lvbiBjb3JyZWN0b1wiKTtcbiAgICB9XG5cbi8vfSkoKTtcblxuZXhwb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH07IiwiLyohIGx1eHkuanMgdjAuMC43IHwgKGMpIDIwMTggTWluZW8gT2t1ZGEgfCBNSVQgTGljZW5zZSB8IGdpdCtzc2g6Ly9naXRAZ2l0aHViLmNvbTptaW4zMDMyNy9sdXh5LmdpdCAqL1xuIShmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQubHV4eT1lKCl9KSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt3cmFwcGVyOlwiI2x1eHlcIix0YXJnZXRzOlwiLmx1eHktZWxcIix3cmFwcGVyU3BlZWQ6LjA4LHRhcmdldFNwZWVkOi4wMix0YXJnZXRQZXJjZW50YWdlOi4xfSxlPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWU7dmFyIGk9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUscz1mdW5jdGlvbigpe2Zvcih2YXIgdD17fSxlPTAsaT1hcmd1bWVudHMubGVuZ3RoO2U8aTtlKyspe3ZhciBzPWFyZ3VtZW50c1tlXTshKGZ1bmN0aW9uKGUpe2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPWVbaV0pfSkocyl9cmV0dXJuIHR9LHI9ZnVuY3Rpb24oKXt0aGlzLlRhcmdldHM9W10sdGhpcy5UYXJnZXRzTGVuZ3RoPTAsdGhpcy53cmFwcGVyPVwiXCIsdGhpcy53aW5kb3dIZWlnaHQ9MCx0aGlzLndhcHBlck9mZnNldD0wfTtyZXR1cm4gci5wcm90b3R5cGU9e2lzQW5pbWF0ZTohMSxpc1Jlc2l6ZTohMSxzY3JvbGxJZDpcIlwiLHJlc2l6ZUlkOlwiXCIsaW5pdDpmdW5jdGlvbihlKXtpZih0aGlzLnNldHRpbmdzPXModCxlfHx7fSksdGhpcy53cmFwcGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy53cmFwcGVyKSxcInVuZGVmaW5lZFwiPT09dGhpcy53cmFwcGVyKXJldHVybiExO3RoaXMudGFyZ2V0cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3MudGFyZ2V0cyksZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQ9dGhpcy53cmFwcGVyLmNsaWVudEhlaWdodCtcInB4XCIsdGhpcy53aW5kb3dIZWlnaHQ9d2luZG93LmNsaWVudEhlaWdodCx0aGlzLmF0dGFjaEV2ZW50KCksdGhpcy5hcHBseSh0aGlzLnRhcmdldHMsdGhpcy53cmFwcGVyKSx0aGlzLmFuaW1hdGUoKSx0aGlzLnJlc2l6ZSgpfSxhcHBseTpmdW5jdGlvbih0LGUpe3RoaXMud3JhcHBlckluaXQoKSx0aGlzLnRhcmdldHNMZW5ndGg9dC5sZW5ndGg7Zm9yKHZhciBpPTA7aTx0aGlzLnRhcmdldHNMZW5ndGg7aSsrKXt2YXIgcz17b2Zmc2V0OnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vZmZzZXRcIiksc3BlZWRYOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zcGVlZC14XCIpLHNwZWVkWTp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtc3BlZWQtWVwiKSxwZXJjZW50YWdlOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wZXJjZW50YWdlXCIpLGhvcml6b250YWw6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhvcml6b250YWxcIil9O3RoaXMudGFyZ2V0c0luaXQodFtpXSxzKX19LHdyYXBwZXJJbml0OmZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLnN0eWxlLndpZHRoPVwiMTAwJVwiLHRoaXMud3JhcHBlci5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCJ9LHRhcmdldHNJbml0OmZ1bmN0aW9uKHQsZSl7dGhpcy5UYXJnZXRzLnB1c2goe2VsbTp0LG9mZnNldDplLm9mZnNldD9lLm9mZnNldDowLGhvcml6b250YWw6ZS5ob3Jpem9udGFsP2UuaG9yaXpvbnRhbDowLHRvcDowLGxlZnQ6MCxzcGVlZFg6ZS5zcGVlZFg/ZS5zcGVlZFg6MSxzcGVlZFk6ZS5zcGVlZFk/ZS5zcGVlZFk6MSxwZXJjZW50YWdlOmUucGVyY2VudGFnZT9lLnBlcmNlbnRhZ2U6MH0pfSxzY3JvbGw6ZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDt0aGlzLnNjcm9sbFRvcD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDt0aGlzLnNjcm9sbFRvcCx0aGlzLndpbmRvd0hlaWdodDt0aGlzLndyYXBwZXJVcGRhdGUodGhpcy5zY3JvbGxUb3ApO2Zvcih2YXIgdD0wO3Q8dGhpcy5UYXJnZXRzLmxlbmd0aDt0KyspdGhpcy50YXJnZXRzVXBkYXRlKHRoaXMuVGFyZ2V0c1t0XSl9LGFuaW1hdGU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbCgpLHRoaXMuc2Nyb2xsSWQ9ZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSl9LHdyYXBwZXJVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLndhcHBlck9mZnNldCs9KHRoaXMuc2Nyb2xsVG9wLXRoaXMud2FwcGVyT2Zmc2V0KSp0aGlzLnNldHRpbmdzLndyYXBwZXJTcGVlZCx0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoMCxcIitNYXRoLnJvdW5kKDEwMCotdGhpcy53YXBwZXJPZmZzZXQpLzEwMCtcInB4ICwwKVwifSx0YXJnZXRzVXBkYXRlOmZ1bmN0aW9uKHQpe3QudG9wKz0odGhpcy5zY3JvbGxUb3AqTnVtYmVyKHRoaXMuc2V0dGluZ3MudGFyZ2V0U3BlZWQpKk51bWJlcih0LnNwZWVkWSktdC50b3ApKnRoaXMuc2V0dGluZ3MudGFyZ2V0UGVyY2VudGFnZSx0LmxlZnQrPSh0aGlzLnNjcm9sbFRvcCpOdW1iZXIodGhpcy5zZXR0aW5ncy50YXJnZXRTcGVlZCkqTnVtYmVyKHQuc3BlZWRYKS10LmxlZnQpKnRoaXMuc2V0dGluZ3MudGFyZ2V0UGVyY2VudGFnZTt2YXIgZT1wYXJzZUludCh0LnBlcmNlbnRhZ2UpLXQudG9wLXBhcnNlSW50KHQub2Zmc2V0KSxpPU1hdGgucm91bmQoLTEwMCplKS8xMDAscz0wO2lmKHQuaG9yaXpvbnRhbCl7dmFyIHI9cGFyc2VJbnQodC5wZXJjZW50YWdlKS10LmxlZnQtcGFyc2VJbnQodC5vZmZzZXQpO3M9TWF0aC5yb3VuZCgtMTAwKnIpLzEwMH10LmVsbS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitzK1wicHggLFwiK2krXCJweCAsMClcIn0scmVzaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LndpbmRvd0hlaWdodD13aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR8fDAscGFyc2VJbnQodC53cmFwcGVyLmNsaWVudEhlaWdodCkhPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0KSYmKGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0PXQud3JhcHBlci5jbGllbnRIZWlnaHQrXCJweFwiKSx0LnJlc2l6ZUlkPWUodC5yZXNpemUuYmluZCh0KSl9LGF0dGFjaEV2ZW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLChmdW5jdGlvbigpe3QuaXNSZXNpemV8fChpKHQucmVzaXplSWQpLGkodC5zY3JvbGxJZCksdC5pc1Jlc2l6ZT0hMCxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuaXNSZXNpemU9ITEsdC5yZXNpemVJZD1lKHQucmVzaXplLmJpbmQodCkpLHQuc2Nyb2xsSWQ9ZSh0LmFuaW1hdGUuYmluZCh0KSl9KSwyMDApKX0pKX19LG5ldyByfSkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCB7IGFjdGl2YXJUaWR5TWVudSB9IGZyb20gJy4vdmVuZG9ycyc7XHJcblxyXG52YXIgbHV4eSA9IHJlcXVpcmUoJ2x1eHkuanMnKTtcclxuXHJcbndpbmRvdy5sdXh5ID0gbHV4eTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbihlKXtcclxuICAgIFxyXG4gICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJywgJ3BsYWNlaG9sZGVyX2hlYWRlcicsIGFjdGl2YXJUaWR5TWVudSk7XHJcblxyXG4gICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9sYXlvdXRzL3BhcmFsbGF4LWx1eHktMS5odG1sJywgJ21haW4nLCAoKT0+e2x1eHkuaW5pdCgpO30pXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZENvbXBvbmVudCh1cmwsIHRhcmdldCwgY2FsbGJhY2spe1xyXG4gICAgd2luZG93LmZldGNoKHVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmKGVsICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxufVxyXG5cclxud2luZG93LmNvbXBvbmVudExvYWRlciA9IGZ1bmN0aW9uIGNhcmdhZG9yKG9wY2lvbmVzKXtcclxuXHJcbiAgICBzd2l0Y2gob3BjaW9uZXMubmF2KXtcclxuICAgICAgICBjYXNlIFwibWVudTFcIjpcclxuICAgICAgICAgICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJywgJ3BsYWNlaG9sZGVyX2hlYWRlcicsIGFjdGl2YXJUaWR5TWVudSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwibWVudS10ZXN0XCI6XHJcbiAgICAgICAgICAgIGxvYWRDb21wb25lbnQoJ2NvbXBvbmVudHMvbWVudXMvbWVudS10ZXN0Lmh0bWwnLCAncGxhY2Vob2xkZXJfaGVhZGVyJywgYWN0aXZhclRpZHlNZW51KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKG9wY2lvbmVzLmxheW91dCl7XHJcbiAgICAgICAgY2FzZSBcInBhcmFsbGF4LWx1eHktMVwiOlxyXG4gICAgICAgICAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL2xheW91dHMvcGFyYWxsYXgtbHV4eS0xLmh0bWwnLCAnbWFpbicsICgpPT57bHV4eS5pbml0KCk7fSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnRlcyBjYXJnYWRvc1wiKVxyXG5cclxufTsiXSwic291cmNlUm9vdCI6IiJ9