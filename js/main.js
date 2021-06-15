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
  var _this = this;

  this.fetch('components/menus/menu1.html').then(function (response) {
    return response.text();
  }).then(function (data) {
    _this.document.getElementById("placeholder_header").innerHTML = data;
    (0,_vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu)();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9ub2RlX21vZHVsZXMvbHV4eS5qcy9kaXN0L2pzL2x1eHkubWluLmpzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3M/ODI4YyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz83NGQ2Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInRlc3QxIiwidGVzdGluZyIsIiQiLCJzZWxlY3RvciIsImNvbnRleHQiLCJkb2N1bWVudCIsImZvckVhY2giLCJjb2xsZWN0aW9uIiwiaXRlcmF0b3IiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwic2hvd01lbnUiLCJtZW51IiwidWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpc0VsZW1lbnRPdXRPZlZpZXdwb3J0IiwicmVwb3NpY2lvbmFFbGVtZW50byIsImhpZGVNZW51IiwiaGlkZUFsbEluYWN0aXZlTWVudXMiLCJwYXJlbnQiLCJlIiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRfd2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInZpZXdwb3J0X2hlaWdodCIsImNsaWVudEhlaWdodCIsImVsZW1lbnRfeCIsImxlZnQiLCJlbGVtZW50X3kiLCJ0b3AiLCJlbGVtZW50X3dpZHRoIiwid2lkdGgiLCJkaWZlcmVuY2lhIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwib2Zmc2V0V2lkdGgiLCJhY3RpdmFyVGlkeU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImx1eHkiLCJyZXF1aXJlIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwiZGF0YSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdPLFNBQVNBLEtBQVQsR0FBZ0I7QUFDbkJDLGtFQUFPO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFFQTtBQUVJLFNBQVNDLENBQVQsQ0FBV0MsUUFBWCxFQUFxQkMsT0FBckIsRUFBNkI7QUFDekJBLFNBQU8sR0FBR0EsT0FBTyxJQUFJQyxRQUFyQjtBQUNBLFNBQU9ELE9BQU8sQ0FBQyxrQkFBRCxDQUFQLENBQTRCRCxRQUE1QixDQUFQO0FBQ0g7O0FBRUQsU0FBU0csT0FBVCxDQUFpQkMsVUFBakIsRUFBNkJDLFFBQTdCLEVBQXNDO0FBQ2xDLE9BQUksSUFBSUMsR0FBUixJQUFlQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosVUFBWixDQUFmLEVBQXVDO0FBQ25DQyxZQUFRLENBQUNELFVBQVUsQ0FB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QUFNLENBQUNGLElBQVAsR0FBY0EsSUFBZDtBQUdBRSxNQUFNLENBQUNMLGdCQUFQLENBQXdCLE1BQXhCLEVBQStCLFVBQVNwQixDQUFULEVBQVc7QUFBQTs7QUFDdEMsT0FBSzBCLEtBQUwsQ0FBVyw2QkFBWCxFQUNLQyxJQURMLENBQ1UsVUFBQUMsUUFBUTtBQUFBLFdBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsR0FEbEIsRUFFS0YsSUFGTCxDQUVXLFVBQUFHLElBQUksRUFBSTtBQUNYLFNBQUksQ0FBQ2xELFFBQUwsQ0FBY21ELGNBQWQsQ0FBNkIsb0JBQTdCLEVBQW1EQyxTQUFuRCxHQUErREYsSUFBL0Q7QUFDQVgsNkRBQWU7QUFDbEIsR0FMTDtBQU1ILENBUEQsRSIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUnO1xyXG5pbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudS5zY3NzJztcclxuXHJcbmltcG9ydCB7IHRlc3RpbmcsIGFjdGl2YXJUaWR5TWVudSB9IGZyb20gJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3QxKCl7XHJcbiAgICB0ZXN0aW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWN0aXZhclRpZHlNZW51fTsiLCIvLyBJdOKAmXMgYW4gSW1tZWRpYXRlbHktSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uLCBvciBJSUZFIGZvciBzaG9ydC4gSXQgZXhlY3V0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXTigJlzIGNyZWF0ZWQuXG5cbi8vKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBjb250ZXh0W1wicXVlcnlTZWxlY3RvckFsbFwiXShzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcil7XG4gICAgICAgIGZvcih2YXIga2V5IGluIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pKXtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8IHVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItdmlzaWJsZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIilcbiAgICAgICAgfSwgMjUpO1xuXG4gICAgICAgIGlmKGlzRWxlbWVudE91dE9mVmlld3BvcnQodWwpKXtcbiAgICAgICAgICAgIHJlcG9zaWNpb25hRWxlbWVudG8odWwsbWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8ICF1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLXZpc2libGVcIik7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlQWxsSW5hY3RpdmVNZW51cyhtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICBmb3JFYWNoKFxuICAgICAgICAgICAgJChcImxpLi1oYXNTdWJtZW51Li1hY3RpdmU6bm90KDpob3ZlcilcIiwgbWVudS5wYXJlbnQpLFxuICAgICAgICAgICAgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5oaWRlTWVudSAmJiBlLmhpZGVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFbGVtZW50T3V0T2ZWaWV3cG9ydChlbCl7XG4gICAgICAgIHZhciByZWN0ICAgICAgICAgICAgID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgdmlld3BvcnRfaGVpZ2h0ICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBlbGVtZW50X3ggICAgICAgID0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxuICAgICAgICAgICAgZWxlbWVudF93aWR0aCAgICA9IHJlY3Qud2lkdGg7XG5cbiAgICAgICAgdmFyIGRpZmVyZW5jaWEgPSB2aWV3cG9ydF93aWR0aCAtIChlbGVtZW50X3grZWxlbWVudF93aWR0aCk7XG5cbiAgICAgICAgXG4gICAgICAgIGlmKGRpZmVyZW5jaWE+MTApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9zaWNpb25hRWxlbWVudG8oZWwscGFyZW50KXtcbiAgICAgICAgLy9NaXJhbW9zIHNpIGVsIHBhZHJlIGRlbCBlbGVtZW50byBwYXJlbnQgZXMgZWwgbWVudSBwcmluY2lwYWwgY29uIGxhIGNsYXNlIG1lbnVcblxuICAgICAgICBpZihwYXJlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJNZW51XCIpKXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsICAgICAgICAgICAgXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aC8yICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBOTyBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCwgcG9zaWNpb25hbW9zIGFsIG90cm8gbGFkbyBkZWwgc3VibWVudSBwYWRyZVxuICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IFwiLVwiICsgZWwub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCl7XG4gICAgLy8gICAgIGFjdGl2YXJNZW51KCk7XG4gICAgLy8gfSk7XG5cbiAgICBmdW5jdGlvbiBhY3RpdmFyVGlkeU1lbnUoKXtcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5zaG93TWVudSA9IHNob3dNZW51O1xuICAgICAgICAgICAgZS5oaWRlTWVudSA9IGhpZGVNZW51O1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpXCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgaGlkZUFsbEluYWN0aXZlTWVudXMpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dNZW51KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdGluZygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3QgZXhwb3J0YWNpb24gY29ycmVjdG9cIik7XG4gICAgfVxuXG4vL30pKCk7XG5cbmV4cG9ydCB7IHRlc3RpbmcsIGFjdGl2YXJUaWR5TWVudSB9OyIsIi8qISBsdXh5LmpzIHYwLjAuNyB8IChjKSAyMDE4IE1pbmVvIE9rdWRhIHwgTUlUIExpY2Vuc2UgfCBnaXQrc3NoOi8vZ2l0QGdpdGh1Yi5jb206bWluMzAzMjcvbHV4eS5naXQgKi9cbiEoZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWUoKTp0Lmx1eHk9ZSgpfSkodGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17d3JhcHBlcjpcIiNsdXh5XCIsdGFyZ2V0czpcIi5sdXh5LWVsXCIsd3JhcHBlclNwZWVkOi4wOCx0YXJnZXRTcGVlZDouMDIsdGFyZ2V0UGVyY2VudGFnZTouMX0sZT13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1lO3ZhciBpPXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lLHM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9e30sZT0wLGk9YXJndW1lbnRzLmxlbmd0aDtlPGk7ZSsrKXt2YXIgcz1hcmd1bWVudHNbZV07IShmdW5jdGlvbihlKXtmb3IodmFyIGkgaW4gZSllLmhhc093blByb3BlcnR5KGkpJiYodFtpXT1lW2ldKX0pKHMpfXJldHVybiB0fSxyPWZ1bmN0aW9uKCl7dGhpcy5UYXJnZXRzPVtdLHRoaXMuVGFyZ2V0c0xlbmd0aD0wLHRoaXMud3JhcHBlcj1cIlwiLHRoaXMud2luZG93SGVpZ2h0PTAsdGhpcy53YXBwZXJPZmZzZXQ9MH07cmV0dXJuIHIucHJvdG90eXBlPXtpc0FuaW1hdGU6ITEsaXNSZXNpemU6ITEsc2Nyb2xsSWQ6XCJcIixyZXNpemVJZDpcIlwiLGluaXQ6ZnVuY3Rpb24oZSl7aWYodGhpcy5zZXR0aW5ncz1zKHQsZXx8e30pLHRoaXMud3JhcHBlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3Mud3JhcHBlciksXCJ1bmRlZmluZWRcIj09PXRoaXMud3JhcHBlcilyZXR1cm4hMTt0aGlzLnRhcmdldHM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnRhcmdldHMpLGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0PXRoaXMud3JhcHBlci5jbGllbnRIZWlnaHQrXCJweFwiLHRoaXMud2luZG93SGVpZ2h0PXdpbmRvdy5jbGllbnRIZWlnaHQsdGhpcy5hdHRhY2hFdmVudCgpLHRoaXMuYXBwbHkodGhpcy50YXJnZXRzLHRoaXMud3JhcHBlciksdGhpcy5hbmltYXRlKCksdGhpcy5yZXNpemUoKX0sYXBwbHk6ZnVuY3Rpb24odCxlKXt0aGlzLndyYXBwZXJJbml0KCksdGhpcy50YXJnZXRzTGVuZ3RoPXQubGVuZ3RoO2Zvcih2YXIgaT0wO2k8dGhpcy50YXJnZXRzTGVuZ3RoO2krKyl7dmFyIHM9e29mZnNldDp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtb2Zmc2V0XCIpLHNwZWVkWDp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtc3BlZWQteFwiKSxzcGVlZFk6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNwZWVkLVlcIikscGVyY2VudGFnZTp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcGVyY2VudGFnZVwiKSxob3Jpem9udGFsOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1ob3Jpem9udGFsXCIpfTt0aGlzLnRhcmdldHNJbml0KHRbaV0scyl9fSx3cmFwcGVySW5pdDpmdW5jdGlvbigpe3RoaXMud3JhcHBlci5zdHlsZS53aWR0aD1cIjEwMCVcIix0aGlzLndyYXBwZXIuc3R5bGUucG9zaXRpb249XCJmaXhlZFwifSx0YXJnZXRzSW5pdDpmdW5jdGlvbih0LGUpe3RoaXMuVGFyZ2V0cy5wdXNoKHtlbG06dCxvZmZzZXQ6ZS5vZmZzZXQ/ZS5vZmZzZXQ6MCxob3Jpem9udGFsOmUuaG9yaXpvbnRhbD9lLmhvcml6b250YWw6MCx0b3A6MCxsZWZ0OjAsc3BlZWRYOmUuc3BlZWRYP2Uuc3BlZWRYOjEsc3BlZWRZOmUuc3BlZWRZP2Uuc3BlZWRZOjEscGVyY2VudGFnZTplLnBlcmNlbnRhZ2U/ZS5wZXJjZW50YWdlOjB9KX0sc2Nyb2xsOmZ1bmN0aW9uKCl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7dGhpcy5zY3JvbGxUb3A9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7dGhpcy5zY3JvbGxUb3AsdGhpcy53aW5kb3dIZWlnaHQ7dGhpcy53cmFwcGVyVXBkYXRlKHRoaXMuc2Nyb2xsVG9wKTtmb3IodmFyIHQ9MDt0PHRoaXMuVGFyZ2V0cy5sZW5ndGg7dCsrKXRoaXMudGFyZ2V0c1VwZGF0ZSh0aGlzLlRhcmdldHNbdF0pfSxhbmltYXRlOmZ1bmN0aW9uKCl7dGhpcy5zY3JvbGwoKSx0aGlzLnNjcm9sbElkPWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpfSx3cmFwcGVyVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy53YXBwZXJPZmZzZXQrPSh0aGlzLnNjcm9sbFRvcC10aGlzLndhcHBlck9mZnNldCkqdGhpcy5zZXR0aW5ncy53cmFwcGVyU3BlZWQsdGhpcy53cmFwcGVyLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKDAsXCIrTWF0aC5yb3VuZCgxMDAqLXRoaXMud2FwcGVyT2Zmc2V0KS8xMDArXCJweCAsMClcIn0sdGFyZ2V0c1VwZGF0ZTpmdW5jdGlvbih0KXt0LnRvcCs9KHRoaXMuc2Nyb2xsVG9wKk51bWJlcih0aGlzLnNldHRpbmdzLnRhcmdldFNwZWVkKSpOdW1iZXIodC5zcGVlZFkpLXQudG9wKSp0aGlzLnNldHRpbmdzLnRhcmdldFBlcmNlbnRhZ2UsdC5sZWZ0Kz0odGhpcy5zY3JvbGxUb3AqTnVtYmVyKHRoaXMuc2V0dGluZ3MudGFyZ2V0U3BlZWQpKk51bWJlcih0LnNwZWVkWCktdC5sZWZ0KSp0aGlzLnNldHRpbmdzLnRhcmdldFBlcmNlbnRhZ2U7dmFyIGU9cGFyc2VJbnQodC5wZXJjZW50YWdlKS10LnRvcC1wYXJzZUludCh0Lm9mZnNldCksaT1NYXRoLnJvdW5kKC0xMDAqZSkvMTAwLHM9MDtpZih0Lmhvcml6b250YWwpe3ZhciByPXBhcnNlSW50KHQucGVyY2VudGFnZSktdC5sZWZ0LXBhcnNlSW50KHQub2Zmc2V0KTtzPU1hdGgucm91bmQoLTEwMCpyKS8xMDB9dC5lbG0uc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrcytcInB4ICxcIitpK1wicHggLDApXCJ9LHJlc2l6ZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC53aW5kb3dIZWlnaHQ9d2luZG93LmlubmVySGVpZ2h0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0fHwwLHBhcnNlSW50KHQud3JhcHBlci5jbGllbnRIZWlnaHQpIT1wYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCkmJihkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodD10LndyYXBwZXIuY2xpZW50SGVpZ2h0K1wicHhcIiksdC5yZXNpemVJZD1lKHQucmVzaXplLmJpbmQodCkpfSxhdHRhY2hFdmVudDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoZnVuY3Rpb24oKXt0LmlzUmVzaXplfHwoaSh0LnJlc2l6ZUlkKSxpKHQuc2Nyb2xsSWQpLHQuaXNSZXNpemU9ITAsc2V0VGltZW91dCgoZnVuY3Rpb24oKXt0LmlzUmVzaXplPSExLHQucmVzaXplSWQ9ZSh0LnJlc2l6ZS5iaW5kKHQpKSx0LnNjcm9sbElkPWUodC5hbmltYXRlLmJpbmQodCkpfSksMjAwKSl9KSl9fSxuZXcgcn0pKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBhY3RpdmFyVGlkeU1lbnUgfSBmcm9tICcuL3ZlbmRvcnMnO1xyXG5cclxudmFyIGx1eHkgPSByZXF1aXJlKCdsdXh5LmpzJyk7XHJcblxyXG53aW5kb3cubHV4eSA9IGx1eHk7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oZSl7XHJcbiAgICB0aGlzLmZldGNoKCdjb21wb25lbnRzL21lbnVzL21lbnUxLmh0bWwnKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAudGhlbiggZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZWhvbGRlcl9oZWFkZXJcIikuaW5uZXJIVE1MID0gZGF0YTtcclxuICAgICAgICAgICAgYWN0aXZhclRpZHlNZW51KCk7XHJcbiAgICAgICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=