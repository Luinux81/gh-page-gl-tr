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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5zY3NzPzgyOGMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL3ZlbmRvcnMuanMiXSwibmFtZXMiOlsiJCIsInNlbGVjdG9yIiwiY29udGV4dCIsImRvY3VtZW50IiwiZm9yRWFjaCIsImNvbGxlY3Rpb24iLCJpdGVyYXRvciIsImtleSIsIk9iamVjdCIsImtleXMiLCJzaG93TWVudSIsIm1lbnUiLCJ1bCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImlzRWxlbWVudE91dE9mVmlld3BvcnQiLCJyZXBvc2ljaW9uYUVsZW1lbnRvIiwiaGlkZU1lbnUiLCJoaWRlQWxsSW5hY3RpdmVNZW51cyIsInBhcmVudCIsImUiLCJlbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3cG9ydF93aWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidmlld3BvcnRfaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZWxlbWVudF94IiwibGVmdCIsImVsZW1lbnRfeSIsInRvcCIsImVsZW1lbnRfd2lkdGgiLCJ3aWR0aCIsImRpZmVyZW5jaWEiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJvZmZzZXRXaWR0aCIsImFjdGl2YXJUaWR5TWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0aW5nIiwiY29uc29sZSIsImxvZyIsInRlc3QxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUksU0FBU0EsQ0FBVCxDQUFXQyxRQUFYLEVBQXFCQyxPQUFyQixFQUE2QjtBQUN6QkEsU0FBTyxHQUFHQSxPQUFPLElBQUlDLFFBQXJCO0FBQ0EsU0FBT0QsT0FBTyxDQUFDLGtCQUFELENBQVAsQ0FBNEJELFFBQTVCLENBQVA7QUFDSDs7QUFFRCxTQUFTRyxPQUFULENBQWlCQyxVQUFqQixFQUE2QkMsUUFBN0IsRUFBc0M7QUFDbEMsT0FBSSxJQUFJQyxHQUFSLElBQWVDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixVQUFaLENBQWYsRUFBdUM7QUFDbkNDLFlBQVEsQ0FBQ0QsVUFBVSxDQUFDRSxHQUFELENBQVgsQ0FBUjtBQUNIO0FBQ0o7O0FBRUQsU0FBU0csUUFBVCxDQUFrQkMsSUFBbEIsRUFBdUI7QUFDbkIsTUFBSUEsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxFQUFFLEdBQUdaLENBQUMsQ0FBQyxJQUFELEVBQU9XLElBQVAsQ0FBRCxDQUFjLENBQWQsQ0FBVDtBQUVBLE1BQUcsQ0FBQ0MsRUFBRCxJQUFPQSxFQUFFLENBQUNDLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixVQUF0QixDQUFWLEVBQTZDO0FBRTdDSCxNQUFJLENBQUNFLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixTQUFuQjtBQUNBSCxJQUFFLENBQUNDLFNBQUgsQ0FBYUUsR0FBYixDQUFpQixZQUFqQjtBQUNBSCxJQUFFLENBQUNDLFNBQUgsQ0FBYUUsR0FBYixDQUFpQixVQUFqQjtBQUNB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bnQiOlsiLy8gSXTigJlzIGFuIEltbWVkaWF0ZWx5LUludm9rZWQgRnVuY3Rpb24gRXhwcmVzc2lvbiwgb3IgSUlGRSBmb3Igc2hvcnQuIEl0IGV4ZWN1dGVzIGltbWVkaWF0ZWx5IGFmdGVyIGl04oCZcyBjcmVhdGVkLlxuXG4vLyhmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCl7XG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuICAgICAgICByZXR1cm4gY29udGV4dFtcInF1ZXJ5U2VsZWN0b3JBbGxcIl0oc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvckVhY2goY29sbGVjdGlvbiwgaXRlcmF0b3Ipe1xuICAgICAgICBmb3IodmFyIGtleSBpbiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKSl7XG4gICAgICAgICAgICBpdGVyYXRvcihjb2xsZWN0aW9uW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01lbnUobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xuXG4gICAgICAgIGlmKCF1bCB8fCB1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xuXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIi1hY3RpdmVcIik7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLXZpc2libGVcIik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItYW5pbWF0aW5nXCIpXG4gICAgICAgIH0sIDI1KTtcblxuICAgICAgICBpZihpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KHVsKSl7XG4gICAgICAgICAgICByZXBvc2ljaW9uYUVsZW1lbnRvKHVsLG1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU1lbnUobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xuXG4gICAgICAgIGlmKCF1bCB8fCAhdWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXZpc2libGVcIikpIHJldHVybjtcblxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLWFuaW1hdGluZ1wiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi12aXNpYmxlXCIpO1xuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIik7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUFsbEluYWN0aXZlTWVudXMobWVudSl7XG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcbiAgICAgICAgZm9yRWFjaChcbiAgICAgICAgICAgICQoXCJsaS4taGFzU3VibWVudS4tYWN0aXZlOm5vdCg6aG92ZXIpXCIsIG1lbnUucGFyZW50KSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUuaGlkZU1lbnUgJiYgZS5oaWRlTWVudSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudE91dE9mVmlld3BvcnQoZWwpe1xuICAgICAgICB2YXIgcmVjdCAgICAgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgdmlld3BvcnRfd2lkdGggICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHZpZXdwb3J0X2hlaWdodCAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcbiAgICAgICAgICAgIGVsZW1lbnRfeSAgICAgICAgPSByZWN0LnRvcCxcbiAgICAgICAgICAgIGVsZW1lbnRfd2lkdGggICAgPSByZWN0LndpZHRoO1xuXG4gICAgICAgIHZhciBkaWZlcmVuY2lhID0gdmlld3BvcnRfd2lkdGggLSAoZWxlbWVudF94K2VsZW1lbnRfd2lkdGgpO1xuXG4gICAgICAgIFxuICAgICAgICBpZihkaWZlcmVuY2lhPjEwKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvc2ljaW9uYUVsZW1lbnRvKGVsLHBhcmVudCl7XG4gICAgICAgIC8vTWlyYW1vcyBzaSBlbCBwYWRyZSBkZWwgZWxlbWVudG8gcGFyZW50IGVzIGVsIG1lbnUgcHJpbmNpcGFsIGNvbiBsYSBjbGFzZSBtZW51XG5cbiAgICAgICAgaWYocGFyZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCAgICAgICAgICAgIFxuICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IFwiLVwiICsgZWwub2Zmc2V0V2lkdGgvMiArIFwicHhcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gRWwgZWxlbWVudG8gTk8gZXMgc3VibWVudSBkZWwgbWVudSBwcmluY2lwYWwsIHBvc2ljaW9uYW1vcyBhbCBvdHJvIGxhZG8gZGVsIHN1Ym1lbnUgcGFkcmVcbiAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBcIi1cIiArIGVsLm9mZnNldFdpZHRoICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpe1xuICAgIC8vICAgICBhY3RpdmFyTWVudSgpO1xuICAgIC8vIH0pO1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhclRpZHlNZW51KCl7XG4gICAgICAgIGZvckVhY2goJChcIi5NZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUuc2hvd01lbnUgPSBzaG93TWVudTtcbiAgICAgICAgICAgIGUuaGlkZU1lbnUgPSBoaWRlTWVudTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudSBsaVwiKSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnUgbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93TWVudSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFsbEluYWN0aXZlTWVudXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRlc3RpbmcoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0IGV4cG9ydGFjaW9uIGNvcnJlY3RvXCIpO1xuICAgIH1cblxuLy99KSgpO1xuXG5leHBvcnQgeyB0ZXN0aW5nLCBhY3RpdmFyVGlkeU1lbnUgfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuaW1wb3J0ICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyB0ZXN0aW5nLCBhY3RpdmFyVGlkeU1lbnUgfSBmcm9tICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0MSgpe1xyXG4gICAgdGVzdGluZygpO1xyXG59XHJcblxyXG5leHBvcnQge2FjdGl2YXJUaWR5TWVudX07Il0sInNvdXJjZVJvb3QiOiIifQ==