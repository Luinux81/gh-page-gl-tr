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
  loadMenu('components/menus/menu1.html', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
  loadLayout('components/layouts/parallax-luxy-1.html', function () {
    luxy.init();
  });
});

function loadMenu(url, callback) {
  window.fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    document.getElementById("placeholder_header").innerHTML = data;
    callback();
  });
}

function loadLayout(url, callback) {
  window.fetch('components/layouts/parallax-luxy-1.html').then(function (response) {
    return response.text();
  }).then(function (data) {
    document.getElementById("main").innerHTML = data;
    callback();
  });
}

window.componentLoader = function cargador(opciones) {
  console.log(opciones);

  switch (opciones.nav) {
    case "menu1":
      loadMenu('components/menus/menu1.html', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;

    case "menu-test":
      loadMenu('components/menus/menu-test.html', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;
  }

  switch (opciones.layout) {
    case "parallax-luxy-1":
      loadLayout('components/layouts/parallax-luxy-1.html', function () {
        luxy.init();
      });
      break;
  }

  console.log("componentes cargados");
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9ub2RlX21vZHVsZXMvbHV4eS5qcy9kaXN0L2pzL2x1eHkubWluLmpzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsidGVzdDEiLCJ0ZXN0aW5nIiwiJCIsInNlbGVjdG9yIiwiY29udGV4dCIsImRvY3VtZW50IiwiZm9yRWFjaCIsImNvbGxlY3Rpb24iLCJpdGVyYXRvciIsImtleSIsIk9iamVjdCIsImtleXMiLCJzaG93TWVudSIsIm1lbnUiLCJ1bCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlzRWxlbWVudE91dE9mVmlld3BvcnQiLCJyZXBvc2ljaW9uYUVsZW1lbnRvIiwiaGlkZU1lbnUiLCJoaWRlQWxsSW5hY3RpdmVNZW51cyIsInBhcmVudCIsImUiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydF93aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidmlld3BvcnRfaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZWxlbWVudF94IiwibGVmdCIsImVsZW1lbnRfeSIsInRvcCIsImVsZW1lbnRfd2lkdGgiLCJ3aWR0aCIsImRpZmVyZW5jaWEiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsImFjdGl2YXJUaWR5TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibHV4eSIsInJlcXVpcmUiLCJ3aW5kb3ciLCJsb2FkTWVudSIsImxvYWRMYXlvdXQiLCJpbml0IiwidXJsIiwiY2FsbGJhY2siLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjb21wb25lbnRMb2FkZXIiLCJjYXJnYWRvciIsIm9wY2lvbmVzIiwibmF2IiwibGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdPLFNBQVNBLEtBQVQsR0FBZ0I7QUFDbkJDLGtFQUFPO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFFQTtBQUVJLFNBQVNDLENBQVQsQ0FBV0MsUUFBWCxFQUFxQkMsT0FBckIsRUFBNkI7QUFDekJBLFNBQU8sR0FBR0EsT0FBTyxJQUFJQyxRQUFyQjtBQUNBLFNBQU9ELE9BQU8sQ0FBQyxrQkFBRCxDQUFQLENBQTRCRCxRQUE1QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0csT0FBVCxDQUFpQkMsVUFBakIsRUFBNkJDLFFBQTdCLEVBQXND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LEVBQTJCO0FBQ2hEbkIsU0FBTyxDQUFDQyxHQUFSLENBQVlrQixRQUFaOztBQUVBLFVBQU9BLFFBQVEsQ0FBQ0MsR0FBaEI7QUFDSSxTQUFLLE9BQUw7QUFDSWYsY0FBUSxDQUFDLDZCQUFELEVBQStCUCxxREFBL0IsQ0FBUjtBQUNBOztBQUVKLFNBQUssV0FBTDtBQUNJTyxjQUFRLENBQUMsaUNBQUQsRUFBbUNQLHFEQUFuQyxDQUFSO0FBQ0E7QUFQUjs7QUFVQSxVQUFPcUIsUUFBUSxDQUFDRSxNQUFoQjtBQUNJLFNBQUssaUJBQUw7QUFDSWYsZ0JBQVUsQ0FBQyx5Q0FBRCxFQUEyQyxZQUFJO0FBQUNKLFlBQUksQ0FBQ0ssSUFBTDtBQUFhLE9BQTdELENBQVY7QUFDQTtBQUhSOztBQU1BUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUVILENBckJELEMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuaW1wb3J0ICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyB0ZXN0aW5nLCBhY3RpdmFyVGlkeU1lbnUgfSBmcm9tICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0MSgpe1xyXG4gICAgdGVzdGluZygpO1xyXG59XHJcblxyXG5leHBvcnQge2FjdGl2YXJUaWR5TWVudX07IiwiLy8gSXTigJlzIGFuIEltbWVkaWF0ZWx5LUludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvbiwgb3IgSUlGRSBmb3Igc2hvcnQuIEl0IGV4ZWN1dGVzIGltbWVkaWF0ZWx5IGFmdGVyIGl04oCZcyBjcmVhdGVkLlxuXG4vLyhmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCl7XG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuICAgICAgICByZXR1cm4gY29udGV4dFtcInF1ZXJ5U2VsZWN0b3JBbGxcIl0oc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvckVhY2goY29sbGVjdGlvbiwgaXRlcmF0b3Ipe1xuICAgICAgICBmb3IodmFyIGtleSBpbiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKSl7XG4gICAgICAgICAgICBpdGVyYXRvcihjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01lbnUobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xuXG4gICAgICAgIGlmKCF1bCB8fCB1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLXZpc2libGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItYW5pbWF0aW5nXCIpXG4gICAgICAgIH0sIDI1KTtcblxuICAgICAgICBpZihpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KHVsKSl7XG4gICAgICAgICAgICByZXBvc2ljaW9uYUVsZW1lbnRvKHVsLG1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU1lbnUobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xuXG4gICAgICAgIGlmKCF1bCB8fCAhdWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXZpc2libGVcIikpIHJldHVybjtcblxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLWFuaW1hdGluZ1wiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi12aXNpYmxlXCIpO1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbEluYWN0aXZlTWVudXMobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgZm9yRWFjaChcbiAgICAgICAgICAgICQoXCJsaS4taGFzU3VibWVudS4tYWN0aXZlOm5vdCg6aG92ZXIpXCIsIG1lbnUucGFyZW50KSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuaGlkZU1lbnUgJiYgZS5oaWRlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudE91dE9mVmlld3BvcnQoZWwpe1xuICAgICAgICB2YXIgcmVjdCAgICAgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgdmlld3BvcnRfd2lkdGggICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHZpZXdwb3J0X2hlaWdodCAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcbiAgICAgICAgICAgIGVsZW1lbnRfeSAgICAgICAgPSByZWN0LnRvcCxcbiAgICAgICAgICAgIGVsZW1lbnRfd2lkdGggICAgPSByZWN0LndpZHRoO1xuXG4gICAgICAgIHZhciBkaWZlcmVuY2lhID0gdmlld3BvcnRfd2lkdGggLSAoZWxlbWVudF94K2VsZW1lbnRfd2lkdGgpO1xuXG4gICAgICAgIFxuICAgICAgICBpZihkaWZlcmVuY2lhPjEwKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvc2ljaW9uYUVsZW1lbnRvKGVsLHBhcmVudCl7XG4gICAgICAgIC8vTWlyYW1vcyBzaSBlbCBwYWRyZSBkZWwgZWxlbWVudG8gcGFyZW50IGVzIGVsIG1lbnUgcHJpbmNpcGFsIGNvbiBsYSBjbGFzZSBtZW51XG5cbiAgICAgICAgaWYocGFyZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCAgICAgICAgICAgIFxuICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IFwiLVwiICsgZWwub2Zmc2V0V2lkdGgvMiArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gRWwgZWxlbWVudG8gTk8gZXMgc3VibWVudSBkZWwgbWVudSBwcmluY2lwYWwsIHBvc2ljaW9uYW1vcyBhbCBvdHJvIGxhZG8gZGVsIHN1Ym1lbnUgcGFkcmVcbiAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBcIi1cIiArIGVsLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpe1xuICAgIC8vICAgICBhY3RpdmFyTWVudSgpO1xuICAgIC8vIH0pO1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhclRpZHlNZW51KCl7XG4gICAgICAgIGZvckVhY2goJChcIi5NZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc2hvd01lbnUgPSBzaG93TWVudTtcbiAgICAgICAgICAgIGUuaGlkZU1lbnUgPSBoaWRlTWVudTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudSBsaVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93TWVudSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFsbEluYWN0aXZlTWVudXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RpbmcoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0IGV4cG9ydGFjaW9uIGNvcnJlY3RvXCIpO1xuICAgIH1cblxuLy99KSgpO1xuXG5leHBvcnQgeyB0ZXN0aW5nLCBhY3RpdmFyVGlkeU1lbnUgfTsiLCIvKiEgbHV4eS5qcyB2MC4wLjcgfCAoYykgMjAxOCBNaW5lbyBPa3VkYSB8IE1JVCBMaWNlbnNlIHwgZ2l0K3NzaDovL2dpdEBnaXRodWIuY29tOm1pbjMwMzI3L2x1eHkuZ2l0ICovXG4hKGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5sdXh5PWUoKX0pKHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3dyYXBwZXI6XCIjbHV4eVwiLHRhcmdldHM6XCIubHV4eS1lbFwiLHdyYXBwZXJTcGVlZDouMDgsdGFyZ2V0U3BlZWQ6LjAyLHRhcmdldFBlcmNlbnRhZ2U6LjF9LGU9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZTt2YXIgaT13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXt9LGU9MCxpPWFyZ3VtZW50cy5sZW5ndGg7ZTxpO2UrKyl7dmFyIHM9YXJndW1lbnRzW2VdOyEoZnVuY3Rpb24oZSl7Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSl9KShzKX1yZXR1cm4gdH0scj1mdW5jdGlvbigpe3RoaXMuVGFyZ2V0cz1bXSx0aGlzLlRhcmdldHNMZW5ndGg9MCx0aGlzLndyYXBwZXI9XCJcIix0aGlzLndpbmRvd0hlaWdodD0wLHRoaXMud2FwcGVyT2Zmc2V0PTB9O3JldHVybiByLnByb3RvdHlwZT17aXNBbmltYXRlOiExLGlzUmVzaXplOiExLHNjcm9sbElkOlwiXCIscmVzaXplSWQ6XCJcIixpbml0OmZ1bmN0aW9uKGUpe2lmKHRoaXMuc2V0dGluZ3M9cyh0LGV8fHt9KSx0aGlzLndyYXBwZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLndyYXBwZXIpLFwidW5kZWZpbmVkXCI9PT10aGlzLndyYXBwZXIpcmV0dXJuITE7dGhpcy50YXJnZXRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy50YXJnZXRzKSxkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodD10aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0K1wicHhcIix0aGlzLndpbmRvd0hlaWdodD13aW5kb3cuY2xpZW50SGVpZ2h0LHRoaXMuYXR0YWNoRXZlbnQoKSx0aGlzLmFwcGx5KHRoaXMudGFyZ2V0cyx0aGlzLndyYXBwZXIpLHRoaXMuYW5pbWF0ZSgpLHRoaXMucmVzaXplKCl9LGFwcGx5OmZ1bmN0aW9uKHQsZSl7dGhpcy53cmFwcGVySW5pdCgpLHRoaXMudGFyZ2V0c0xlbmd0aD10Lmxlbmd0aDtmb3IodmFyIGk9MDtpPHRoaXMudGFyZ2V0c0xlbmd0aDtpKyspe3ZhciBzPXtvZmZzZXQ6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9mZnNldFwiKSxzcGVlZFg6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNwZWVkLXhcIiksc3BlZWRZOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zcGVlZC1ZXCIpLHBlcmNlbnRhZ2U6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmNlbnRhZ2VcIiksaG9yaXpvbnRhbDp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtaG9yaXpvbnRhbFwiKX07dGhpcy50YXJnZXRzSW5pdCh0W2ldLHMpfX0sd3JhcHBlckluaXQ6ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsdGhpcy53cmFwcGVyLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIn0sdGFyZ2V0c0luaXQ6ZnVuY3Rpb24odCxlKXt0aGlzLlRhcmdldHMucHVzaCh7ZWxtOnQsb2Zmc2V0OmUub2Zmc2V0P2Uub2Zmc2V0OjAsaG9yaXpvbnRhbDplLmhvcml6b250YWw/ZS5ob3Jpem9udGFsOjAsdG9wOjAsbGVmdDowLHNwZWVkWDplLnNwZWVkWD9lLnNwZWVkWDoxLHNwZWVkWTplLnNwZWVkWT9lLnNwZWVkWToxLHBlcmNlbnRhZ2U6ZS5wZXJjZW50YWdlP2UucGVyY2VudGFnZTowfSl9LHNjcm9sbDpmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO3RoaXMuc2Nyb2xsVG9wPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO3RoaXMuc2Nyb2xsVG9wLHRoaXMud2luZG93SGVpZ2h0O3RoaXMud3JhcHBlclVwZGF0ZSh0aGlzLnNjcm9sbFRvcCk7Zm9yKHZhciB0PTA7dDx0aGlzLlRhcmdldHMubGVuZ3RoO3QrKyl0aGlzLnRhcmdldHNVcGRhdGUodGhpcy5UYXJnZXRzW3RdKX0sYW5pbWF0ZTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsKCksdGhpcy5zY3JvbGxJZD1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKX0sd3JhcHBlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMud2FwcGVyT2Zmc2V0Kz0odGhpcy5zY3JvbGxUb3AtdGhpcy53YXBwZXJPZmZzZXQpKnRoaXMuc2V0dGluZ3Mud3JhcHBlclNwZWVkLHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZCgwLFwiK01hdGgucm91bmQoMTAwKi10aGlzLndhcHBlck9mZnNldCkvMTAwK1wicHggLDApXCJ9LHRhcmdldHNVcGRhdGU6ZnVuY3Rpb24odCl7dC50b3ArPSh0aGlzLnNjcm9sbFRvcCpOdW1iZXIodGhpcy5zZXR0aW5ncy50YXJnZXRTcGVlZCkqTnVtYmVyKHQuc3BlZWRZKS10LnRvcCkqdGhpcy5zZXR0aW5ncy50YXJnZXRQZXJjZW50YWdlLHQubGVmdCs9KHRoaXMuc2Nyb2xsVG9wKk51bWJlcih0aGlzLnNldHRpbmdzLnRhcmdldFNwZWVkKSpOdW1iZXIodC5zcGVlZFgpLXQubGVmdCkqdGhpcy5zZXR0aW5ncy50YXJnZXRQZXJjZW50YWdlO3ZhciBlPXBhcnNlSW50KHQucGVyY2VudGFnZSktdC50b3AtcGFyc2VJbnQodC5vZmZzZXQpLGk9TWF0aC5yb3VuZCgtMTAwKmUpLzEwMCxzPTA7aWYodC5ob3Jpem9udGFsKXt2YXIgcj1wYXJzZUludCh0LnBlcmNlbnRhZ2UpLXQubGVmdC1wYXJzZUludCh0Lm9mZnNldCk7cz1NYXRoLnJvdW5kKC0xMDAqcikvMTAwfXQuZWxtLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK3MrXCJweCAsXCIraStcInB4ICwwKVwifSxyZXNpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3Qud2luZG93SGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodHx8MCxwYXJzZUludCh0LndyYXBwZXIuY2xpZW50SGVpZ2h0KSE9cGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQpJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQ9dC53cmFwcGVyLmNsaWVudEhlaWdodCtcInB4XCIpLHQucmVzaXplSWQ9ZSh0LnJlc2l6ZS5iaW5kKHQpKX0sYXR0YWNoRXZlbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKGZ1bmN0aW9uKCl7dC5pc1Jlc2l6ZXx8KGkodC5yZXNpemVJZCksaSh0LnNjcm9sbElkKSx0LmlzUmVzaXplPSEwLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5pc1Jlc2l6ZT0hMSx0LnJlc2l6ZUlkPWUodC5yZXNpemUuYmluZCh0KSksdC5zY3JvbGxJZD1lKHQuYW5pbWF0ZS5iaW5kKHQpKX0pLDIwMCkpfSkpfX0sbmV3IHJ9KSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgYWN0aXZhclRpZHlNZW51IH0gZnJvbSAnLi92ZW5kb3JzJztcclxuXHJcbnZhciBsdXh5ID0gcmVxdWlyZSgnbHV4eS5qcycpO1xyXG5cclxud2luZG93Lmx1eHkgPSBsdXh5O1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKGUpe1xyXG4gICAgXHJcbiAgICBsb2FkTWVudSgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJyxhY3RpdmFyVGlkeU1lbnUpO1xyXG5cclxuICAgIGxvYWRMYXlvdXQoJ2NvbXBvbmVudHMvbGF5b3V0cy9wYXJhbGxheC1sdXh5LTEuaHRtbCcsKCk9PntsdXh5LmluaXQoKTt9KVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KHVybCxjYWxsYmFjayl7XHJcbiAgICB3aW5kb3cuZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZWhvbGRlcl9oZWFkZXJcIikuaW5uZXJIVE1MID0gZGF0YTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZExheW91dCh1cmwsY2FsbGJhY2spe1xyXG4gICAgd2luZG93LmZldGNoKCdjb21wb25lbnRzL2xheW91dHMvcGFyYWxsYXgtbHV4eS0xLmh0bWwnKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTCA9IGRhdGE7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7ICAgIFxyXG59XHJcblxyXG53aW5kb3cuY29tcG9uZW50TG9hZGVyID0gZnVuY3Rpb24gY2FyZ2Fkb3Iob3BjaW9uZXMpe1xyXG4gICAgY29uc29sZS5sb2cob3BjaW9uZXMpO1xyXG5cclxuICAgIHN3aXRjaChvcGNpb25lcy5uYXYpe1xyXG4gICAgICAgIGNhc2UgXCJtZW51MVwiOlxyXG4gICAgICAgICAgICBsb2FkTWVudSgnY29tcG9uZW50cy9tZW51cy9tZW51MS5odG1sJyxhY3RpdmFyVGlkeU1lbnUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBcIm1lbnUtdGVzdFwiOlxyXG4gICAgICAgICAgICBsb2FkTWVudSgnY29tcG9uZW50cy9tZW51cy9tZW51LXRlc3QuaHRtbCcsYWN0aXZhclRpZHlNZW51KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKG9wY2lvbmVzLmxheW91dCl7XHJcbiAgICAgICAgY2FzZSBcInBhcmFsbGF4LWx1eHktMVwiOlxyXG4gICAgICAgICAgICBsb2FkTGF5b3V0KCdjb21wb25lbnRzL2xheW91dHMvcGFyYWxsYXgtbHV4eS0xLmh0bWwnLCgpPT57bHV4eS5pbml0KCk7fSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjb21wb25lbnRlcyBjYXJnYWRvc1wiKVxyXG5cclxufTsiXSwic291cmNlUm9vdCI6IiJ9