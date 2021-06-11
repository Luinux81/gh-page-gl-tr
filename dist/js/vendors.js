/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendors.js":
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/tidy-menu/menu */ \"./src/js/vendors/tidy-menu/menu.js\");\n/* harmony import */ var _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vendors_tidy_menu_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/tidy-menu/menu.scss */ \"./src/js/vendors/tidy-menu/menu.scss\");\n\n\n\n//# sourceURL=webpack://gh-pages-global-tribe-clone/./src/js/vendors.js?");

/***/ }),

/***/ "./src/js/vendors/tidy-menu/menu.js":
/*!******************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.js ***!
  \******************************************/
/***/ (() => {

eval("(function () {\n  function $(selector, context) {\n    context = context || document;\n    return context[\"querySelectorAll\"](selector);\n  }\n\n  function forEach(collection, iterator) {\n    for (var key in Object.keys(collection)) {\n      iterator(collection[key]);\n    }\n  }\n\n  function showMenu(menu) {\n    var menu = this;\n    var ul = $(\"ul\", menu)[0];\n    if (!ul || ul.classList.contains(\"-visible\")) return;\n    menu.classList.add(\"-active\");\n    ul.classList.add(\"-animating\");\n    ul.classList.add(\"-visible\");\n    setTimeout(function () {\n      ul.classList.remove(\"-animating\");\n    }, 25);\n  }\n\n  function hideMenu(menu) {\n    var menu = this;\n    var ul = $(\"ul\", menu)[0];\n    if (!ul || !ul.classList.contains(\"-visible\")) return;\n    menu.classList.remove(\"-active\");\n    ul.classList.add(\"-animating\");\n    setTimeout(function () {\n      ul.classList.remove(\"-visible\");\n      ul.classList.remove(\"-animating\");\n    }, 300);\n  }\n\n  function hideAllInactiveMenus(menu) {\n    var menu = this;\n    forEach($(\"li.-hasSubmenu.-active:not(:hover)\", menu.parent), function (e) {\n      e.hideMenu && e.hideMenu();\n    });\n  }\n\n  window.addEventListener(\"load\", function () {\n    forEach($(\".Menu li.-hasSubmenu\"), function (e) {\n      e.showMenu = showMenu;\n      e.hideMenu = hideMenu;\n    });\n    forEach($(\".Menu > li.-hasSubmenu\"), function (e) {\n      e.addEventListener(\"click\", showMenu);\n    });\n    forEach($(\".Menu > li.-hasSubmenu li\"), function (e) {\n      e.addEventListener(\"mouseenter\", hideAllInactiveMenus);\n    });\n    forEach($(\".Menu > li.-hasSubmenu li.-hasSubmenu\"), function (e) {\n      e.addEventListener(\"mouseenter\", showMenu);\n    });\n    document.addEventListener(\"click\", hideAllInactiveMenus);\n  });\n})();\n\n//# sourceURL=webpack://gh-pages-global-tribe-clone/./src/js/vendors/tidy-menu/menu.js?");

/***/ }),

/***/ "./src/js/vendors/tidy-menu/menu.scss":
/*!********************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gh-pages-global-tribe-clone/./src/js/vendors/tidy-menu/menu.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/vendors.js");
/******/ 	
/******/ })()
;