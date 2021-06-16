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

    if (menu.parent.classList.contains("Menu")) {
      ul.style.left = 0;
    }
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

function getOverflownPixels(el) {
  var rect = el.getBoundingClientRect(),
      viewport_width = document.documentElement.clientWidth,
      viewport_height = document.documentElement.clientHeight,
      element_x = rect.left,
      element_y = rect.top,
      element_width = rect.width;
  var diferencia = viewport_width - (element_x + element_width);
  return Math.abs(Math.round(diferencia));
}

function reposicionaElemento(el, parent) {
  //Miramos si el padre del elemento parent es el menu principal con la clase menu
  if (parent.parentElement.classList.contains("Menu")) {
    // El elemento es submenu del menu principal            
    // el.style.left = "-" + el.offsetWidth/2 + "px";
    var outsidePixels = getOverflownPixels(el) + 40; // outsidePixels = outsidePixels + (outsidePixels*0.2);

    console.log("Outside:", outsidePixels);
    el.style.left = "-" + String(outsidePixels) + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9ub2RlX21vZHVsZXMvbHV4eS5qcy9kaXN0L2pzL2x1eHkubWluLmpzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsidGVzdDEiLCJ0ZXN0aW5nIiwiJCIsInNlbGVjdG9yIiwiY29udGV4dCIsImRvY3VtZW50IiwiZm9yRWFjaCIsImNvbGxlY3Rpb24iLCJpdGVyYXRvciIsImtleSIsIk9iamVjdCIsImtleXMiLCJzaG93TWVudSIsIm1lbnUiLCJ1bCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlzRWxlbWVudE91dE9mVmlld3BvcnQiLCJyZXBvc2ljaW9uYUVsZW1lbnRvIiwiaGlkZU1lbnUiLCJwYXJlbnQiLCJzdHlsZSIsImxlZnQiLCJoaWRlQWxsSW5hY3RpdmVNZW51cyIsImUiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydF93aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidmlld3BvcnRfaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZWxlbWVudF94IiwiZWxlbWVudF95IiwidG9wIiwiZWxlbWVudF93aWR0aCIsIndpZHRoIiwiZGlmZXJlbmNpYSIsImdldE92ZXJmbG93blBpeGVscyIsIk1hdGgiLCJhYnMiLCJyb3VuZCIsInBhcmVudEVsZW1lbnQiLCJvdXRzaWRlUGl4ZWxzIiwiY29uc29sZSIsImxvZyIsIlN0cmluZyIsIm9mZnNldFdpZHRoIiwiYWN0aXZhclRpZHlNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImx1eHkiLCJyZXF1aXJlIiwid2luZG93IiwibG9hZENvbXBvbmVudCIsImluaXQiLCJ1cmwiLCJ0YXJnZXQiLCJjYWxsYmFjayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNvbXBvbmVudExvYWRlciIsImNhcmdhZG9yIiwib3BjaW9uZXMiLCJuYXYiLCJsYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBR08sU0FBU0EsS0FBVCxHQUFnQjtBQUNuQkMsa0VBQU87QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDtBQUVBO0FBRUksU0FBU0MsQ0FBVCxDQUFXQyxRQUFYLEVBQXFCQyxPQUFyQixFQUE2QjtBQUN6QkEsU0FBTyxHQUFHQSxPQUFPLElBQUlDLFFBQXJCO0FBQ0EsU0FBT0QsT0FBTyxDQUFDLGtC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QUFMO0FBQWEsT0FBdEUsQ0FBYjtBQUNBO0FBSFI7O0FBTUFWLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBRUgsQ0FwQkQsQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUnO1xyXG5pbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudS5zY3NzJztcclxuXHJcbmltcG9ydCB7IHRlc3RpbmcsIGFjdGl2YXJUaWR5TWVudSB9IGZyb20gJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3QxKCl7XHJcbiAgICB0ZXN0aW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWN0aXZhclRpZHlNZW51fTsiLCIvLyBJdOKAmXMgYW4gSW1tZWRpYXRlbHktSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uLCBvciBJSUZFIGZvciBzaG9ydC4gSXQgZXhlY3V0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXTigJlzIGNyZWF0ZWQuXG5cbi8vKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBjb250ZXh0W1wicXVlcnlTZWxlY3RvckFsbFwiXShzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcil7XG4gICAgICAgIGZvcih2YXIga2V5IGluIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pKXtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8IHVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItdmlzaWJsZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIilcbiAgICAgICAgfSwgMjUpO1xuXG4gICAgICAgIGlmKGlzRWxlbWVudE91dE9mVmlld3BvcnQodWwpKXtcbiAgICAgICAgICAgIHJlcG9zaWNpb25hRWxlbWVudG8odWwsbWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8ICF1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLXZpc2libGVcIik7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKTtcblxuICAgICAgICAgICAgaWYobWVudS5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XG4gICAgICAgICAgICAgICAgdWwuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbEluYWN0aXZlTWVudXMobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgZm9yRWFjaChcbiAgICAgICAgICAgICQoXCJsaS4taGFzU3VibWVudS4tYWN0aXZlOm5vdCg6aG92ZXIpXCIsIG1lbnUucGFyZW50KSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuaGlkZU1lbnUgJiYgZS5oaWRlTWVudSgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KGVsKXtcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHZpZXdwb3J0X3dpZHRoICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGVsZW1lbnRfeCAgICAgICAgPSByZWN0LmxlZnQsXG4gICAgICAgICAgICBlbGVtZW50X3kgICAgICAgID0gcmVjdC50b3AsXG4gICAgICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcblxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcblxuICAgICAgICBcbiAgICAgICAgaWYoZGlmZXJlbmNpYT4xMCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3ZlcmZsb3duUGl4ZWxzKGVsKXtcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcbiAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxuICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcblxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGgucm91bmQoZGlmZXJlbmNpYSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9zaWNpb25hRWxlbWVudG8oZWwscGFyZW50KXtcbiAgICAgICAgLy9NaXJhbW9zIHNpIGVsIHBhZHJlIGRlbCBlbGVtZW50byBwYXJlbnQgZXMgZWwgbWVudSBwcmluY2lwYWwgY29uIGxhIGNsYXNlIG1lbnVcblxuICAgICAgICBpZihwYXJlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJNZW51XCIpKXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aC8yICsgXCJweFwiO1xuXG4gICAgICAgICAgICBsZXQgb3V0c2lkZVBpeGVscyA9IGdldE92ZXJmbG93blBpeGVscyhlbCkgKyA0MDtcbiAgICAgICAgICAgIC8vIG91dHNpZGVQaXhlbHMgPSBvdXRzaWRlUGl4ZWxzICsgKG91dHNpZGVQaXhlbHMqMC4yKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXRzaWRlOlwiLG91dHNpZGVQaXhlbHMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBTdHJpbmcob3V0c2lkZVBpeGVscykgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIE5PIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsLCBwb3NpY2lvbmFtb3MgYWwgb3RybyBsYWRvIGRlbCBzdWJtZW51IHBhZHJlXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgYWN0aXZhck1lbnUoKTtcbiAgICAvLyB9KTtcblxuICAgIGZ1bmN0aW9uIGFjdGl2YXJUaWR5TWVudSgpe1xuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnNob3dNZW51ID0gc2hvd01lbnU7XG4gICAgICAgICAgICBlLmhpZGVNZW51ID0gaGlkZU1lbnU7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGlcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0aW5nKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBleHBvcnRhY2lvbiBjb3JyZWN0b1wiKTtcbiAgICB9XG5cbi8vfSkoKTtcblxuZXhwb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH07IiwiLyohIGx1eHkuanMgdjAuMC43IHwgKGMpIDIwMTggTWluZW8gT2t1ZGEgfCBNSVQgTGljZW5zZSB8IGdpdCtzc2g6Ly9naXRAZ2l0aHViLmNvbTptaW4zMDMyNy9sdXh5LmdpdCAqL1xuIShmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQubHV4eT1lKCl9KSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXt3cmFwcGVyOlwiI2x1eHlcIix0YXJnZXRzOlwiLmx1eHktZWxcIix3cmFwcGVyU3BlZWQ6LjA4LHRhcmdldFNwZWVkOi4wMix0YXJnZXRQZXJjZW50YWdlOi4xfSxlPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWU7dmFyIGk9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUscz1mdW5jdGlvbigpe2Zvcih2YXIgdD17fSxlPTAsaT1hcmd1bWVudHMubGVuZ3RoO2U8aTtlKyspe3ZhciBzPWFyZ3VtZW50c1tlXTshKGZ1bmN0aW9uKGUpe2Zvcih2YXIgaSBpbiBlKWUuaGFzT3duUHJvcGVydHkoaSkmJih0W2ldPWVbaV0pfSkocyl9cmV0dXJuIHR9LHI9ZnVuY3Rpb24oKXt0aGlzLlRhcmdldHM9W10sdGhpcy5UYXJnZXRzTGVuZ3RoPTAsdGhpcy53cmFwcGVyPVwiXCIsdGhpcy53aW5kb3dIZWlnaHQ9MCx0aGlzLndhcHBlck9mZnNldD0wfTtyZXR1cm4gci5wcm90b3R5cGU9e2lzQW5pbWF0ZTohMSxpc1Jlc2l6ZTohMSxzY3JvbGxJZDpcIlwiLHJlc2l6ZUlkOlwiXCIsaW5pdDpmdW5jdGlvbihlKXtpZih0aGlzLnNldHRpbmdzPXModCxlfHx7fSksdGhpcy53cmFwcGVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy53cmFwcGVyKSxcInVuZGVmaW5lZFwiPT09dGhpcy53cmFwcGVyKXJldHVybiExO3RoaXMudGFyZ2V0cz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3MudGFyZ2V0cyksZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQ9dGhpcy53cmFwcGVyLmNsaWVudEhlaWdodCtcInB4XCIsdGhpcy53aW5kb3dIZWlnaHQ9d2luZG93LmNsaWVudEhlaWdodCx0aGlzLmF0dGFjaEV2ZW50KCksdGhpcy5hcHBseSh0aGlzLnRhcmdldHMsdGhpcy53cmFwcGVyKSx0aGlzLmFuaW1hdGUoKSx0aGlzLnJlc2l6ZSgpfSxhcHBseTpmdW5jdGlvbih0LGUpe3RoaXMud3JhcHBlckluaXQoKSx0aGlzLnRhcmdldHNMZW5ndGg9dC5sZW5ndGg7Zm9yKHZhciBpPTA7aTx0aGlzLnRhcmdldHNMZW5ndGg7aSsrKXt2YXIgcz17b2Zmc2V0OnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vZmZzZXRcIiksc3BlZWRYOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zcGVlZC14XCIpLHNwZWVkWTp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtc3BlZWQtWVwiKSxwZXJjZW50YWdlOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wZXJjZW50YWdlXCIpLGhvcml6b250YWw6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhvcml6b250YWxcIil9O3RoaXMudGFyZ2V0c0luaXQodFtpXSxzKX19LHdyYXBwZXJJbml0OmZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLnN0eWxlLndpZHRoPVwiMTAwJVwiLHRoaXMud3JhcHBlci5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCJ9LHRhcmdldHNJbml0OmZ1bmN0aW9uKHQsZSl7dGhpcy5UYXJnZXRzLnB1c2goe2VsbTp0LG9mZnNldDplLm9mZnNldD9lLm9mZnNldDowLGhvcml6b250YWw6ZS5ob3Jpem9udGFsP2UuaG9yaXpvbnRhbDowLHRvcDowLGxlZnQ6MCxzcGVlZFg6ZS5zcGVlZFg/ZS5zcGVlZFg6MSxzcGVlZFk6ZS5zcGVlZFk/ZS5zcGVlZFk6MSxwZXJjZW50YWdlOmUucGVyY2VudGFnZT9lLnBlcmNlbnRhZ2U6MH0pfSxzY3JvbGw6ZnVuY3Rpb24oKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDt0aGlzLnNjcm9sbFRvcD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDt0aGlzLnNjcm9sbFRvcCx0aGlzLndpbmRvd0hlaWdodDt0aGlzLndyYXBwZXJVcGRhdGUodGhpcy5zY3JvbGxUb3ApO2Zvcih2YXIgdD0wO3Q8dGhpcy5UYXJnZXRzLmxlbmd0aDt0KyspdGhpcy50YXJnZXRzVXBkYXRlKHRoaXMuVGFyZ2V0c1t0XSl9LGFuaW1hdGU6ZnVuY3Rpb24oKXt0aGlzLnNjcm9sbCgpLHRoaXMuc2Nyb2xsSWQ9ZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSl9LHdyYXBwZXJVcGRhdGU6ZnVuY3Rpb24oKXt0aGlzLndhcHBlck9mZnNldCs9KHRoaXMuc2Nyb2xsVG9wLXRoaXMud2FwcGVyT2Zmc2V0KSp0aGlzLnNldHRpbmdzLndyYXBwZXJTcGVlZCx0aGlzLndyYXBwZXIuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoMCxcIitNYXRoLnJvdW5kKDEwMCotdGhpcy53YXBwZXJPZmZzZXQpLzEwMCtcInB4ICwwKVwifSx0YXJnZXRzVXBkYXRlOmZ1bmN0aW9uKHQpe3QudG9wKz0odGhpcy5zY3JvbGxUb3AqTnVtYmVyKHRoaXMuc2V0dGluZ3MudGFyZ2V0U3BlZWQpKk51bWJlcih0LnNwZWVkWSktdC50b3ApKnRoaXMuc2V0dGluZ3MudGFyZ2V0UGVyY2VudGFnZSx0LmxlZnQrPSh0aGlzLnNjcm9sbFRvcCpOdW1iZXIodGhpcy5zZXR0aW5ncy50YXJnZXRTcGVlZCkqTnVtYmVyKHQuc3BlZWRYKS10LmxlZnQpKnRoaXMuc2V0dGluZ3MudGFyZ2V0UGVyY2VudGFnZTt2YXIgZT1wYXJzZUludCh0LnBlcmNlbnRhZ2UpLXQudG9wLXBhcnNlSW50KHQub2Zmc2V0KSxpPU1hdGgucm91bmQoLTEwMCplKS8xMDAscz0wO2lmKHQuaG9yaXpvbnRhbCl7dmFyIHI9cGFyc2VJbnQodC5wZXJjZW50YWdlKS10LmxlZnQtcGFyc2VJbnQodC5vZmZzZXQpO3M9TWF0aC5yb3VuZCgtMTAwKnIpLzEwMH10LmVsbS5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitzK1wicHggLFwiK2krXCJweCAsMClcIn0scmVzaXplOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LndpbmRvd0hlaWdodD13aW5kb3cuaW5uZXJIZWlnaHR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHR8fDAscGFyc2VJbnQodC53cmFwcGVyLmNsaWVudEhlaWdodCkhPXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0KSYmKGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0PXQud3JhcHBlci5jbGllbnRIZWlnaHQrXCJweFwiKSx0LnJlc2l6ZUlkPWUodC5yZXNpemUuYmluZCh0KSl9LGF0dGFjaEV2ZW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLChmdW5jdGlvbigpe3QuaXNSZXNpemV8fChpKHQucmVzaXplSWQpLGkodC5zY3JvbGxJZCksdC5pc1Jlc2l6ZT0hMCxzZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuaXNSZXNpemU9ITEsdC5yZXNpemVJZD1lKHQucmVzaXplLmJpbmQodCkpLHQuc2Nyb2xsSWQ9ZSh0LmFuaW1hdGUuYmluZCh0KSl9KSwyMDApKX0pKX19LG5ldyByfSkpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCB7IGFjdGl2YXJUaWR5TWVudSB9IGZyb20gJy4vdmVuZG9ycyc7XHJcblxyXG52YXIgbHV4eSA9IHJlcXVpcmUoJ2x1eHkuanMnKTtcclxuXHJcbndpbmRvdy5sdXh5ID0gbHV4eTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixmdW5jdGlvbihlKXtcclxuICAgIFxyXG4gICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJywgJ3BsYWNlaG9sZGVyX2hlYWRlcicsIGFjdGl2YXJUaWR5TWVudSk7XHJcblxyXG4gICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9sYXlvdXRzL3BhcmFsbGF4LWx1eHktMS5odG1sJywgJ21haW4nLCAoKT0+e2x1eHkuaW5pdCgpO30pXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZENvbXBvbmVudCh1cmwsIHRhcmdldCwgY2FsbGJhY2spe1xyXG4gICAgd2luZG93LmZldGNoKHVybClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmKGVsICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxufVxyXG5cclxud2luZG93LmNvbXBvbmVudExvYWRlciA9IGZ1bmN0aW9uIGNhcmdhZG9yKG9wY2lvbmVzKXtcclxuXHJcbiAgICBzd2l0Y2gob3BjaW9uZXMubmF2KXtcclxuICAgICAgICBjYXNlIFwibWVudTFcIjpcclxuICAgICAgICAgICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJywgJ3BsYWNlaG9sZGVyX2hlYWRlcicsIGFjdGl2YXJUaWR5TWVudSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFwibWVudS10ZXN0XCI6XHJcbiAgICAgICAgICAgIGxvYWRDb21wb25lbnQoJ2NvbXBvbmVudHMvbWVudXMvbWVudS10ZXN0Lmh0bWwnLCAncGxhY2Vob2xkZXJfaGVhZGVyJywgYWN0aXZhclRpZHlNZW51KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKG9wY2lvbmVzLmxheW91dCl7XHJcbiAgICAgICAgY2FzZSBcInBhcmFsbGF4LWx1eHktMVwiOlxyXG4gICAgICAgICAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL2xheW91dHMvcGFyYWxsYXgtbHV4eS0xLmh0bWwnLCAnbWFpbicsICgpPT57bHV4eS5pbml0KCk7fSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnRlcyBjYXJnYWRvc1wiKVxyXG5cclxufTsiXSwic291cmNlUm9vdCI6IiJ9