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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5zY3NzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzLmpzIl0sIm5hbWVzIjpbIiQiLCJzZWxlY3RvciIsImNvbnRleHQiLCJkb2N1bWVudCIsImZvckVhY2giLCJjb2xsZWN0aW9uIiwiaXRlcmF0b3IiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwic2hvd01lbnUiLCJtZW51IiwidWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJpc0VsZW1lbnRPdXRPZlZpZXdwb3J0IiwicmVwb3NpY2lvbmFFbGVtZW50byIsImhpZGVNZW51IiwicGFyZW50Iiwic3R5bGUiLCJsZWZ0IiwiaGlkZUFsbEluYWN0aXZlTWVudXMiLCJlIiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRfd2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInZpZXdwb3J0X2hlaWdodCIsImNsaWVudEhlaWdodCIsImVsZW1lbnRfeCIsImVsZW1lbnRfeSIsInRvcCIsImVsZW1lbnRfd2lkdGgiLCJ3aWR0aCIsImRpZmVyZW5jaWEiLCJnZXRPdmVyZmxvd25QaXhlbHMiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwYXJlbnRFbGVtZW50Iiwib3V0c2lkZVBpeGVscyIsImNvbnNvbGUiLCJsb2ciLCJTdHJpbmciLCJvZmZzZXRXaWR0aCIsImFjdGl2YXJUaWR5TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0aW5nIiwidGVzdDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFSSxTQUFTQSxDQUFULENBQVdDLFFBQVgsRUFBcUJDLE9BQXJCLEVBQTZCO0FBQ3pCQSxTQUFPLEdBQUdBLE9BQU8sSUFBSUMsUUFBckI7QUFDQSxTQUFPRCxPQUFPLENBQUMsa0JBQUQsQ0FBUCxDQUE0QkQsUUFBNUIsQ0FBUDtBQUNIOztBQUVELFNBQVNHLE9BQVQsQ0FBaUJDLFVBQWpCLEVBQTZCQyxRQUE3QixFQUFzQztBQUNsQyxPQUFJLElBQUlDLEdBQVIsSUFBZUMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFVBQVosQ0FBZixFQUF1QztBQUNuQ0MsWUFBUSxDQUFDRCxVQUFVLENBQUNFLEdBQUQsQ0FBWCxDQUFSO0FBQ0g7QUFDSjs7QUFFRCxTQUFTRyxRQUFULENBQWtCQyxJQUFsQixFQUF1QjtBQUNuQixNQUFJQSxJQUFJLEdBQUcsSUFBWDtBQUNBLE1BQUlDLEVBQUUsR0FBR1osQ0FBQyxDQUFDLElBQUQsRUFBT1csSUFBUCxDQUFELENBQWMsQ0FBZCxDQUFUO0FBRUEsTUFBRyxDQUFDQyxFQUFELElBQU9BLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhQyxRQUFiLENBQXNCLFVBQXRCLENBQVYsRUFBNkM7QUFFN0NILE1BQUksQ0FBQ0UsU0FBTCxDQUFlRSxHQUFmLENBQW1CLFNBQW5CO0FBQ0FILElBQUUsQ0FBQ0MsU0FBSCxDQUFhRSxHQUFi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QyxDQUFDLDJCQUFELENBQUYsRUFBaUMsVUFBU3lCLENBQVQsRUFBVztBQUMvQ0EsS0FBQyxDQUFDMEIsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUMzQixvQkFBakM7QUFDSCxHQUZNLENBQVA7QUFJQXBCLFNBQU8sQ0FBQ0osQ0FBQyxDQUFDLHVDQUFELENBQUYsRUFBNkMsVUFBU3lCLENBQVQsRUFBVztBQUMzREEsS0FBQyxDQUFDMEIsZ0JBQUYsQ0FBbUIsWUFBbkIsRUFBaUN6QyxRQUFqQztBQUNILEdBRk0sQ0FBUDtBQUlBUCxVQUFRLENBQUNnRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQzNCLG9CQUFuQztBQUNIOztBQUVELFNBQVM0QixPQUFULEdBQWtCO0FBQ2ROLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0gsQyxDQUVMOzs7Ozs7Ozs7Ozs7OztBQ2hKQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFHTyxTQUFTTSxLQUFULEdBQWdCO0FBQ25CRCxrRUFBTztBQUNWIiwiZmlsZSI6ImpzL3ZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJdOKAmXMgYW4gSW1tZWRpYXRlbHktSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uLCBvciBJSUZFIGZvciBzaG9ydC4gSXQgZXhlY3V0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXTigJlzIGNyZWF0ZWQuXG5cbi8vKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHJldHVybiBjb250ZXh0W1wicXVlcnlTZWxlY3RvckFsbFwiXShzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcil7XG4gICAgICAgIGZvcih2YXIga2V5IGluIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pKXtcbiAgICAgICAgICAgIGl0ZXJhdG9yKGNvbGxlY3Rpb25ba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8IHVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XG5cbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItdmlzaWJsZVwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIilcbiAgICAgICAgfSwgMjUpO1xuXG4gICAgICAgIGlmKGlzRWxlbWVudE91dE9mVmlld3BvcnQodWwpKXtcbiAgICAgICAgICAgIHJlcG9zaWNpb25hRWxlbWVudG8odWwsbWVudSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTWVudShtZW51KXtcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XG5cbiAgICAgICAgaWYoIXVsIHx8ICF1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLXZpc2libGVcIik7XG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKTtcblxuICAgICAgICAgICAgaWYobWVudS5wYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XG4gICAgICAgICAgICAgICAgdWwuc3R5bGUubGVmdCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbEluYWN0aXZlTWVudXMobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgZm9yRWFjaChcbiAgICAgICAgICAgICQoXCJsaS4taGFzU3VibWVudS4tYWN0aXZlOm5vdCg6aG92ZXIpXCIsIG1lbnUucGFyZW50KSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuaGlkZU1lbnUgJiYgZS5oaWRlTWVudSgpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KGVsKXtcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIHZpZXdwb3J0X3dpZHRoICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGVsZW1lbnRfeCAgICAgICAgPSByZWN0LmxlZnQsXG4gICAgICAgICAgICBlbGVtZW50X3kgICAgICAgID0gcmVjdC50b3AsXG4gICAgICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcblxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcblxuICAgICAgICBcbiAgICAgICAgaWYoZGlmZXJlbmNpYT4xMCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3ZlcmZsb3duUGl4ZWxzKGVsKXtcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcbiAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxuICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcblxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGgucm91bmQoZGlmZXJlbmNpYSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9zaWNpb25hRWxlbWVudG8oZWwscGFyZW50KXtcbiAgICAgICAgLy9NaXJhbW9zIHNpIGVsIHBhZHJlIGRlbCBlbGVtZW50byBwYXJlbnQgZXMgZWwgbWVudSBwcmluY2lwYWwgY29uIGxhIGNsYXNlIG1lbnVcblxuICAgICAgICBpZihwYXJlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJNZW51XCIpKXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aC8yICsgXCJweFwiO1xuXG4gICAgICAgICAgICBsZXQgb3V0c2lkZVBpeGVscyA9IGdldE92ZXJmbG93blBpeGVscyhlbCkgKyA0MDtcbiAgICAgICAgICAgIC8vIG91dHNpZGVQaXhlbHMgPSBvdXRzaWRlUGl4ZWxzICsgKG91dHNpZGVQaXhlbHMqMC4yKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPdXRzaWRlOlwiLG91dHNpZGVQaXhlbHMpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBTdHJpbmcob3V0c2lkZVBpeGVscykgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIE5PIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsLCBwb3NpY2lvbmFtb3MgYWwgb3RybyBsYWRvIGRlbCBzdWJtZW51IHBhZHJlXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcbiAgICAvLyAgICAgYWN0aXZhck1lbnUoKTtcbiAgICAvLyB9KTtcblxuICAgIGZ1bmN0aW9uIGFjdGl2YXJUaWR5TWVudSgpe1xuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnNob3dNZW51ID0gc2hvd01lbnU7XG4gICAgICAgICAgICBlLmhpZGVNZW51ID0gaGlkZU1lbnU7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dNZW51KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGlcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0ZXN0aW5nKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdCBleHBvcnRhY2lvbiBjb3JyZWN0b1wiKTtcbiAgICB9XG5cbi8vfSkoKTtcblxuZXhwb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcbmltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH0gZnJvbSAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdDEoKXtcclxuICAgIHRlc3RpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IHthY3RpdmFyVGlkeU1lbnV9OyJdLCJzb3VyY2VSb290IjoiIn0=