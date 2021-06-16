/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendors/tidy-menu/menu.js":
/*!******************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

    if (menu.parentNode.classList.contains("Menu")) {
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
    var outsidePixels = getOverflownPixels(el) + 40; // outsidePixels = outsidePixels + (outsidePixels*0.2);            
    //console.log("Outside:",outsidePixels);            

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

/***/ "./src/js/vendors/tidy-menu/menu.scss":
/*!********************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5zY3NzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzLmpzIl0sIm5hbWVzIjpbIiQiLCJzZWxlY3RvciIsImNvbnRleHQiLCJkb2N1bWVudCIsImZvckVhY2giLCJjb2xsZWN0aW9uIiwiaXRlcmF0b3IiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwic2hvd01lbnUiLCJtZW51IiwidWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpc0VsZW1lbnRPdXRPZlZpZXdwb3J0IiwicmVwb3NpY2lvbmFFbGVtZW50byIsImhpZGVNZW51IiwicGFyZW50Tm9kZSIsInN0eWxlIiwibGVmdCIsImhpZGVBbGxJbmFjdGl2ZU1lbnVzIiwicGFyZW50IiwiZSIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0X3dpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ2aWV3cG9ydF9oZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlbGVtZW50X3giLCJlbGVtZW50X3kiLCJ0b3AiLCJlbGVtZW50X3dpZHRoIiwid2lkdGgiLCJkaWZlcmVuY2lhIiwiZ2V0T3ZlcmZsb3duUGl4ZWxzIiwiTWF0aCIsImFicyIsInJvdW5kIiwicGFyZW50RWxlbWVudCIsIm91dHNpZGVQaXhlbHMiLCJTdHJpbmciLCJvZmZzZXRXaWR0aCIsImFjdGl2YXJUaWR5TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0aW5nIiwiY29uc29sZSIsImxvZyIsInRlc3QxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUksU0FBU0EsQ0FBVCxDQUFXQyxRQUFYLEVBQXFCQyxPQUFyQixFQUE2QjtBQUN6QkEsU0FBTyxHQUFHQSxPQUFPLElBQUlDLFFBQXJCO0FBQ0EsU0FBT0QsT0FBTyxDQUFDLGtCQUFELENBQVAsQ0FBNEJELFFBQTVCLENBQVA7QUFDSDs7QUFFRCxTQUFTRyxPQUFULENBQWlCQyxVQUFqQixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDbEMsT0FBSSxJQUFJQyxHQUFSLElBQWVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixVQUFaLENBQWYsRUFBdUM7QUFDbkNDLFlBQVEsQ0FBQ0QsVUFBVSxDQUFDRSxHQUFELENBQVgsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsU0FBU0csUUFBVCxDQUFrQkMsSUFBbEIsRUFBdUI7QUFDbkIsTUFBSUEsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxFQUFFLEdBQUdaLENBQUMsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBRCxDQUFjLENBQWQsQ0FBVDtBQUVBLE1BQUcsQ0FBQ0MsRUFBRCxJQUFPQSxFQUFFLENBQUNDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixVQUF0QixDQUFWLEVBQTZDO0FBRTdDSCxNQUFJLENBQUNFLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixTQUFuQjtBQUNBSCxJQUFFLENBQUNDLFNB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LENBQVQsRUFBVztBQUMvQ0EsS0FBQyxDQUFDd0IsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMxQixvQkFBakM7QUFDSCxHQUZNLENBQVA7QUFJQXBCLFNBQU8sQ0FBQ0osQ0FBQyxDQUFDLHVDQUFELENBQUYsRUFBNkMsVUFBUzBCLENBQVQsRUFBVztBQUMzREEsS0FBQyxDQUFDd0IsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUN4QyxRQUFqQztBQUNILEdBRk0sQ0FBUDtBQUlBUCxVQUFRLENBQUMrQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQzFCLG9CQUFuQztBQUNIOztBQUVELFNBQVMyQixPQUFULEdBQWtCO0FBQ2RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0gsQyxDQUVMOzs7Ozs7Ozs7Ozs7OztBQzlJQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFHTyxTQUFTQyxLQUFULEdBQWdCO0FBQ25CSCxrRUFBTztBQUNWIiwiZmlsZSI6ImpzL3ZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJdOKAmXMgYW4gSW1tZWRpYXRlbHktSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uLCBvciBJSUZFIGZvciBzaG9ydC4gSXQgZXhlY3V0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXTigJlzIGNyZWF0ZWQuXG5cbi8vKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBjb250ZXh0W1wicXVlcnlTZWxlY3RvckFsbFwiXShzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcil7XG4gICAgICAgIGZvcih2YXIga2V5IGluIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pKXtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8IHVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItdmlzaWJsZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIilcbiAgICAgICAgfSwgMjUpO1xuXG4gICAgICAgIGlmKGlzRWxlbWVudE91dE9mVmlld3BvcnQodWwpKXtcbiAgICAgICAgICAgIHJlcG9zaWNpb25hRWxlbWVudG8odWwsbWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8ICF1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLXZpc2libGVcIik7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKTtcblxuICAgICAgICAgICAgaWYobWVudS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIk1lbnVcIikpe1xuICAgICAgICAgICAgICAgIHVsLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKG1lbnUpe1xuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XG4gICAgICAgIGZvckVhY2goXG4gICAgICAgICAgICAkKFwibGkuLWhhc1N1Ym1lbnUuLWFjdGl2ZTpub3QoOmhvdmVyKVwiLCBtZW51LnBhcmVudCksXG4gICAgICAgICAgICBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLmhpZGVNZW51ICYmIGUuaGlkZU1lbnUoKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFbGVtZW50T3V0T2ZWaWV3cG9ydChlbCl7XG4gICAgICAgIHZhciByZWN0ICAgICAgICAgICAgID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgdmlld3BvcnRfaGVpZ2h0ICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICBlbGVtZW50X3ggICAgICAgID0gcmVjdC5sZWZ0LFxuICAgICAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxuICAgICAgICAgICAgZWxlbWVudF93aWR0aCAgICA9IHJlY3Qud2lkdGg7XG5cbiAgICAgICAgdmFyIGRpZmVyZW5jaWEgPSB2aWV3cG9ydF93aWR0aCAtIChlbGVtZW50X3grZWxlbWVudF93aWR0aCk7XG5cbiAgICAgICAgXG4gICAgICAgIGlmKGRpZmVyZW5jaWE+MTApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE92ZXJmbG93blBpeGVscyhlbCl7XG4gICAgICAgIHZhciByZWN0ICAgICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgdmlld3BvcnRfd2lkdGggICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgdmlld3BvcnRfaGVpZ2h0ICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgIGVsZW1lbnRfeCAgICAgICAgPSByZWN0LmxlZnQsXG4gICAgICAgIGVsZW1lbnRfeSAgICAgICAgPSByZWN0LnRvcCxcbiAgICAgICAgZWxlbWVudF93aWR0aCAgICA9IHJlY3Qud2lkdGg7XG5cbiAgICAgICAgdmFyIGRpZmVyZW5jaWEgPSB2aWV3cG9ydF93aWR0aCAtIChlbGVtZW50X3grZWxlbWVudF93aWR0aCk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhNYXRoLnJvdW5kKGRpZmVyZW5jaWEpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvc2ljaW9uYUVsZW1lbnRvKGVsLHBhcmVudCl7XG4gICAgICAgIC8vTWlyYW1vcyBzaSBlbCBwYWRyZSBkZWwgZWxlbWVudG8gcGFyZW50IGVzIGVsIG1lbnUgcHJpbmNpcGFsIGNvbiBsYSBjbGFzZSBtZW51XG5cbiAgICAgICAgaWYocGFyZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG91dHNpZGVQaXhlbHMgPSBnZXRPdmVyZmxvd25QaXhlbHMoZWwpICsgNDA7XG5cbiAgICAgICAgICAgIC8vIG91dHNpZGVQaXhlbHMgPSBvdXRzaWRlUGl4ZWxzICsgKG91dHNpZGVQaXhlbHMqMC4yKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJPdXRzaWRlOlwiLG91dHNpZGVQaXhlbHMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBTdHJpbmcob3V0c2lkZVBpeGVscykgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIE5PIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsLCBwb3NpY2lvbmFtb3MgYWwgb3RybyBsYWRvIGRlbCBzdWJtZW51IHBhZHJlXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgYWN0aXZhck1lbnUoKTtcbiAgICAvLyB9KTtcblxuICAgIGZ1bmN0aW9uIGFjdGl2YXJUaWR5TWVudSgpe1xuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnNob3dNZW51ID0gc2hvd01lbnU7XG4gICAgICAgICAgICBlLmhpZGVNZW51ID0gaGlkZU1lbnU7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGlcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0aW5nKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBleHBvcnRhY2lvbiBjb3JyZWN0b1wiKTtcbiAgICB9XG5cbi8vfSkoKTtcblxuZXhwb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcbmltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH0gZnJvbSAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdDEoKXtcclxuICAgIHRlc3RpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IHthY3RpdmFyVGlkeU1lbnV9OyJdLCJzb3VyY2VSb290IjoiIn0=