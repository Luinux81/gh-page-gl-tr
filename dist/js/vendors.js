/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/vendors/mmenu-light/mmenu-light.js":
/*!***************************************************!*\
  !*** ./src/js/vendors/mmenu-light/mmenu-light.js ***!
  \***************************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(i, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  "use strict";

  n.r(e);

  var i = function () {
    function t(t) {
      var e = this;
      this.listener = function (t) {
        (t.matches ? e.matchFns : e.unmatchFns).forEach(function (t) {
          t();
        });
      }, this.toggler = window.matchMedia(t), this.toggler.addListener(this.listener), this.matchFns = [], this.unmatchFns = [];
    }

    return t.prototype.add = function (t, e) {
      this.matchFns.push(t), this.unmatchFns.push(e), (this.toggler.matches ? t : e)();
    }, t;
  }(),
      o = function o(t) {
    return Array.prototype.slice.call(t);
  },
      s = function s(t, e) {
    return o((e || document).querySelectorAll(t));
  },
      r = ("ontouchstart" in window || navigator.msMaxTouchPoints, navigator.userAgent.indexOf("MSIE") > -1 || navigator.appVersion.indexOf("Trident/") > -1),
      a = "mm-spn",
      c = function () {
    function t(t, e, n, i, o) {
      this.node = t, this.title = e, this.slidingSubmenus = i, this.selectedClass = n, this.node.classList.add(a), r && (this.slidingSubmenus = !1), this.node.classList.add(a + "--" + o), this.node.classList.add(a + "--" + (this.slidingSubmenus ? "navbar" : "vertical")), this._setSelectedl(), this._initAnchors();
    }

    return Object.defineProperty(t.prototype, "prefix", {
      get: function get() {
        return a;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.openPanel = function (t) {
      var e = t.parentElement;

      if (this.slidingSubmenus) {
        var n = t.dataset.mmSpnTitle;
        e === this.node ? this.node.classList.add(a + "--main") : (this.node.classList.remove(a + "--main"), n || o(e.children).forEach(function (t) {
          t.matches("a, span") && (n = t.textContent);
        })), n || (n = this.title), this.node.dataset.mmSpnTitle = n, s(".mm-spn--open", this.node).forEach(function (t) {
          t.classList.remove(a + "--open"), t.classList.remove(a + "--parent");
        }), t.classList.add(a + "--open"), t.classList.remove(a + "--parent");

        for (var i = t.parentElement.closest("ul"); i;) {
          i.classList.add(a + "--open"), i.classList.add(a + "--parent"), i = i.parentElement.closest("ul");
        }
      } else {
        var r = t.matches(".mm-spn--open");
        s(".mm-spn--open", this.node).forEach(function (t) {
          t.classList.remove(a + "--open");
        }), t.classList[r ? "remove" : "add"](a + "--open");

        for (var c = t.parentElement.closest("ul"); c;) {
          c.classList.add(a + "--open"), c = c.parentElement.closest("ul");
        }
      }
    }, t.prototype._setSelectedl = function () {
      var t = s("." + this.selectedClass, this.node),
          e = t[t.length - 1],
          n = null;
      e && (n = e.closest("ul")), n || (n = this.node.querySelector("ul")), this.openPanel(n);
    }, t.prototype._initAnchors = function () {
      var t = this;
      this.node.addEventListener("click", function (e) {
        var n = e.target,
            i = !1;
        (i = (i = (i = i || function (t) {
          return !!t.matches("a");
        }(n)) || function (e) {
          var n;
          return !!(n = e.closest("span") ? e.parentElement : !!e.closest("li") && e) && (o(n.children).forEach(function (e) {
            e.matches("ul") && t.openPanel(e);
          }), !0);
        }(n)) || function (e) {
          var n = s(".mm-spn--open", e),
              i = n[n.length - 1];

          if (i) {
            var o = i.parentElement.closest("ul");
            if (o) return t.openPanel(o), !0;
          }

          return !1;
        }(n)) && e.stopImmediatePropagation();
      });
    }, t;
  }(),
      d = function () {
    function t(t, e) {
      var n = this;
      void 0 === t && (t = null), this.wrapper = document.createElement("div"), this.wrapper.classList.add("mm-ocd"), this.wrapper.classList.add("mm-ocd--" + e), this.content = document.createElement("div"), this.content.classList.add("mm-ocd__content"), this.wrapper.append(this.content), this.backdrop = document.createElement("div"), this.backdrop.classList.add("mm-ocd__backdrop"), this.wrapper.append(this.backdrop), document.body.append(this.wrapper), t && this.content.append(t);

      var i = function i(t) {
        n.close(), t.stopImmediatePropagation();
      };

      this.backdrop.addEventListener("touchstart", i, {
        passive: !0
      }), this.backdrop.addEventListener("mousedown", i, {
        passive: !0
      });
    }

    return Object.defineProperty(t.prototype, "prefix", {
      get: function get() {
        return "mm-ocd";
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.open = function () {
      this.wrapper.classList.add("mm-ocd--open"), document.body.classList.add("mm-ocd-opened");
    }, t.prototype.close = function () {
      this.wrapper.classList.remove("mm-ocd--open"), document.body.classList.remove("mm-ocd-opened");
    }, t;
  }(),
      u = function () {
    function t(t, e) {
      void 0 === e && (e = "all"), this.menu = t, this.toggler = new i(e);
    }

    return t.prototype.navigation = function (t) {
      var e = this;

      if (!this.navigator) {
        var n = (t = t || {}).title,
            i = void 0 === n ? "Menu" : n,
            o = t.selectedClass,
            s = void 0 === o ? "Selected" : o,
            r = t.slidingSubmenus,
            a = void 0 === r || r,
            d = t.theme,
            u = void 0 === d ? "light" : d;
        this.navigator = new c(this.menu, i, s, a, u), this.toggler.add(function () {
          return e.menu.classList.add(e.navigator.prefix);
        }, function () {
          return e.menu.classList.remove(e.navigator.prefix);
        });
      }

      return this.navigator;
    }, t.prototype.offcanvas = function (t) {
      var e = this;

      if (!this.drawer) {
        var n = (t = t || {}).position,
            i = void 0 === n ? "left" : n;
        this.drawer = new d(null, i);
        var o = document.createComment("original menu location");
        this.menu.after(o), this.toggler.add(function () {
          e.drawer.content.append(e.menu);
        }, function () {
          e.drawer.close(), o.after(e.menu);
        });
      }

      return this.drawer;
    }, t;
  }();

  e["default"] = u;
  window.MmenuLight = u;
}]);

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
  }, 25); // Reposicionamiento de elemento
  // Subimos el z-index respecto a la ul superior

  var zIndexBase = menu.parentNode.style.zIndex;

  if (zIndexBase) {
    ul.style.zIndex = zIndexBase + 10;
  } else {
    zIndexBase = 0;
    menu.parentNode.style.zIndex = zIndexBase;
    ul.style.zIndex = 10;
  } // Ajustamos la posición si sale del viewport


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

/***/ "./src/js/vendors/mmenu-light/mmenu-light.scss":
/*!*****************************************************!*\
  !*** ./src/js/vendors/mmenu-light/mmenu-light.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/vendors/tidy-menu/menu.scss":
/*!********************************************!*\
  !*** ./src/js/vendors/tidy-menu/menu.scss ***!
  \********************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/js/vendors.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activarMMenuLight": () => (/* binding */ activarMMenuLight),
/* harmony export */   "test1": () => (/* binding */ test1),
/* harmony export */   "activarTidyMenu": () => (/* reexport safe */ _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__.activarTidyMenu)
/* harmony export */ });
/* harmony import */ var _vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/tidy-menu/menu */ "./src/js/vendors/tidy-menu/menu.js");
/* harmony import */ var _vendors_tidy_menu_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors/tidy-menu/menu.scss */ "./src/js/vendors/tidy-menu/menu.scss");
/* harmony import */ var _vendors_mmenu_light_mmenu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendors/mmenu-light/mmenu-light */ "./src/js/vendors/mmenu-light/mmenu-light.js");
/* harmony import */ var _vendors_mmenu_light_mmenu_light__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_mmenu_light_mmenu_light__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors_mmenu_light_mmenu_light_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendors/mmenu-light/mmenu-light.scss */ "./src/js/vendors/mmenu-light/mmenu-light.scss");





function activarMMenuLight() {
  var menu = new MmenuLight(document.querySelector('#menu'), 'all');
  var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: false,
    // theme: 'dark',
    title: 'Menu Example #1'
  });
  var drawer = menu.offcanvas({
    position: 'right'
  }); //	Open the menu.

  document.querySelector('a[href="#menu"]').addEventListener('click', function (evnt) {
    evnt.preventDefault();
    drawer.open();
  });
}
function test1() {
  (0,_vendors_tidy_menu_menu__WEBPACK_IMPORTED_MODULE_0__.testing)();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy9tbWVudS1saWdodC9tbWVudS1saWdodC5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy9tbWVudS1saWdodC9tbWVudS1saWdodC5zY3NzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzLmpzIl0sIm5hbWVzIjpbInQiLCJlIiwibiIsImkiLCJleHBvcnRzIiwibyIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJfX2VzTW9kdWxlIiwiY3JlYXRlIiwiYmluZCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJsaXN0ZW5lciIsIm1hdGNoZXMiLCJtYXRjaEZucyIsInVubWF0Y2hGbnMiLCJmb3JFYWNoIiwidG9nZ2xlciIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsImFkZCIsInB1c2giLCJBcnJheSIsInNsaWNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2aWdhdG9yIiwibXNNYXhUb3VjaFBvaW50cyIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJhcHBWZXJzaW9uIiwiYSIsIm5vZGUiLCJ0aXRsZSIsInNsaWRpbmdTdWJtZW51cyIsInNlbGVjdGVkQ2xhc3MiLCJjbGFzc0xpc3QiLCJfc2V0U2VsZWN0ZWRsIiwiX2luaXRBbmNob3JzIiwiY29uZmlndXJhYmxlIiwib3BlblBhbmVsIiwicGFyZW50RWxlbWVudCIsImRhdGFzZXQiLCJtbVNwblRpdGxlIiwicmVtb3ZlIiwiY2hpbGRyZW4iLCJ0ZXh0Q29udGVudCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIndyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiY29udGVudCIsImFwcGVuZCIsImJhY2tkcm9wIiwiYm9keSIsImNsb3NlIiwicGFzc2l2ZSIsIm9wZW4iLCJ1IiwibWVudSIsIm5hdmlnYXRpb24iLCJ0aGVtZSIsInByZWZpeCIsIm9mZmNhbnZhcyIsImRyYXdlciIsInBvc2l0aW9uIiwiY3JlYXRlQ29tbWVudCIsImFmdGVyIiwiTW1lbnVMaWdodCIsIiQiLCJzZWxlY3RvciIsImNvbnRleHQiLCJjb2xsZWN0aW9uIiwiaXRlcmF0b3IiLCJrZXkiLCJrZXlzIiwic2hvd01lbnUiLCJ1bCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInpJbmRleEJhc2UiLCJwYXJlbnROb2RlIiwic3R5bGUiLCJ6SW5kZXgiLCJpc0VsZW1lbnRPdXRPZlZpZXdwb3J0IiwicmVwb3NpY2lvbmFFbGVtZW50byIsImhpZGVNZW51IiwibGVmdCIsImhpZGVBbGxJbmFjdGl2ZU1lbnVzIiwicGFyZW50IiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld3BvcnRfd2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInZpZXdwb3J0X2hlaWdodCIsImNsaWVudEhlaWdodCIsImVsZW1lbnRfeCIsImVsZW1lbnRfeSIsInRvcCIsImVsZW1lbnRfd2lkdGgiLCJ3aWR0aCIsImRpZmVyZW5jaWEiLCJnZXRPdmVyZmxvd25QaXhlbHMiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJvdXRzaWRlUGl4ZWxzIiwiU3RyaW5nIiwib2Zmc2V0V2lkdGgiLCJhY3RpdmFyVGlkeU1lbnUiLCJ0ZXN0aW5nIiwiY29uc29sZSIsImxvZyIsImFjdGl2YXJNTWVudUxpZ2h0IiwiZXZudCIsInByZXZlbnREZWZhdWx0IiwidGVzdDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFTQSxDQUFULEVBQVc7QUFBQyxNQUFJQyxDQUFDLEdBQUMsRUFBTjs7QUFBUyxXQUFTQyxDQUFULENBQVdDLENBQVgsRUFBYTtBQUFDLFFBQUdGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFKLEVBQVEsT0FBT0YsQ0FBQyxDQUFDRSxDQUFELENBQUQsQ0FBS0MsT0FBWjtBQUFvQixRQUFJQyxDQUFDLEdBQUNKLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQUs7QUFBQ0EsT0FBQyxFQUFDQSxDQUFIO0FBQUtHLE9BQUMsRUFBQyxDQUFDLENBQVI7QUFBVUYsYUFBTyxFQUFDO0FBQWxCLEtBQVg7QUFBaUMsV0FBT0osQ0FBQyxDQUFDRyxDQUFELENBQUQsQ0FBS0ksSUFBTCxDQUFVRixDQUFDLENBQUNELE9BQVosRUFBb0JDLENBQXBCLEVBQXNC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QjtBQUNuQk4sa0VBQU87QUFDViIsImZpbGUiOiJqcy92ZW5kb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4oaSl7aWYoZVtpXSlyZXR1cm4gZVtpXS5leHBvcnRzO3ZhciBvPWVbaV09e2k6aSxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W2ldLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9bi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxpKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6aX0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBpPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChpLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIGl9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXRoaXM7dGhpcy5saXN0ZW5lcj1mdW5jdGlvbih0KXsodC5tYXRjaGVzP2UubWF0Y2hGbnM6ZS51bm1hdGNoRm5zKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0KCl9KSl9LHRoaXMudG9nZ2xlcj13aW5kb3cubWF0Y2hNZWRpYSh0KSx0aGlzLnRvZ2dsZXIuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lciksdGhpcy5tYXRjaEZucz1bXSx0aGlzLnVubWF0Y2hGbnM9W119cmV0dXJuIHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0LGUpe3RoaXMubWF0Y2hGbnMucHVzaCh0KSx0aGlzLnVubWF0Y2hGbnMucHVzaChlKSwodGhpcy50b2dnbGVyLm1hdGNoZXM/dDplKSgpfSx0fSgpLG89ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHQpfSxzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIG8oKGV8fGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHQpKX0scj0oXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvd3x8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMsbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRVwiKT4tMXx8bmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIlRyaWRlbnQvXCIpPi0xKSxhPVwibW0tc3BuXCIsYz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLG4saSxvKXt0aGlzLm5vZGU9dCx0aGlzLnRpdGxlPWUsdGhpcy5zbGlkaW5nU3VibWVudXM9aSx0aGlzLnNlbGVjdGVkQ2xhc3M9bix0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChhKSxyJiYodGhpcy5zbGlkaW5nU3VibWVudXM9ITEpLHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGErXCItLVwiK28pLHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGErXCItLVwiKyh0aGlzLnNsaWRpbmdTdWJtZW51cz9cIm5hdmJhclwiOlwidmVydGljYWxcIikpLHRoaXMuX3NldFNlbGVjdGVkbCgpLHRoaXMuX2luaXRBbmNob3JzKCl9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInByZWZpeFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYX0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5vcGVuUGFuZWw9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnRFbGVtZW50O2lmKHRoaXMuc2xpZGluZ1N1Ym1lbnVzKXt2YXIgbj10LmRhdGFzZXQubW1TcG5UaXRsZTtlPT09dGhpcy5ub2RlP3RoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGErXCItLW1haW5cIik6KHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKGErXCItLW1haW5cIiksbnx8byhlLmNoaWxkcmVuKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0Lm1hdGNoZXMoXCJhLCBzcGFuXCIpJiYobj10LnRleHRDb250ZW50KX0pKSksbnx8KG49dGhpcy50aXRsZSksdGhpcy5ub2RlLmRhdGFzZXQubW1TcG5UaXRsZT1uLHMoXCIubW0tc3BuLS1vcGVuXCIsdGhpcy5ub2RlKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmNsYXNzTGlzdC5yZW1vdmUoYStcIi0tb3BlblwiKSx0LmNsYXNzTGlzdC5yZW1vdmUoYStcIi0tcGFyZW50XCIpfSkpLHQuY2xhc3NMaXN0LmFkZChhK1wiLS1vcGVuXCIpLHQuY2xhc3NMaXN0LnJlbW92ZShhK1wiLS1wYXJlbnRcIik7Zm9yKHZhciBpPXQucGFyZW50RWxlbWVudC5jbG9zZXN0KFwidWxcIik7aTspaS5jbGFzc0xpc3QuYWRkKGErXCItLW9wZW5cIiksaS5jbGFzc0xpc3QuYWRkKGErXCItLXBhcmVudFwiKSxpPWkucGFyZW50RWxlbWVudC5jbG9zZXN0KFwidWxcIil9ZWxzZXt2YXIgcj10Lm1hdGNoZXMoXCIubW0tc3BuLS1vcGVuXCIpO3MoXCIubW0tc3BuLS1vcGVuXCIsdGhpcy5ub2RlKS5mb3JFYWNoKChmdW5jdGlvbih0KXt0LmNsYXNzTGlzdC5yZW1vdmUoYStcIi0tb3BlblwiKX0pKSx0LmNsYXNzTGlzdFtyP1wicmVtb3ZlXCI6XCJhZGRcIl0oYStcIi0tb3BlblwiKTtmb3IodmFyIGM9dC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJ1bFwiKTtjOyljLmNsYXNzTGlzdC5hZGQoYStcIi0tb3BlblwiKSxjPWMucGFyZW50RWxlbWVudC5jbG9zZXN0KFwidWxcIil9fSx0LnByb3RvdHlwZS5fc2V0U2VsZWN0ZWRsPWZ1bmN0aW9uKCl7dmFyIHQ9cyhcIi5cIit0aGlzLnNlbGVjdGVkQ2xhc3MsdGhpcy5ub2RlKSxlPXRbdC5sZW5ndGgtMV0sbj1udWxsO2UmJihuPWUuY2xvc2VzdChcInVsXCIpKSxufHwobj10aGlzLm5vZGUucXVlcnlTZWxlY3RvcihcInVsXCIpKSx0aGlzLm9wZW5QYW5lbChuKX0sdC5wcm90b3R5cGUuX2luaXRBbmNob3JzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGZ1bmN0aW9uKGUpe3ZhciBuPWUudGFyZ2V0LGk9ITE7KGk9KGk9KGk9aXx8ZnVuY3Rpb24odCl7cmV0dXJuISF0Lm1hdGNoZXMoXCJhXCIpfShuKSl8fGZ1bmN0aW9uKGUpe3ZhciBuO3JldHVybiEhKG49ZS5jbG9zZXN0KFwic3BhblwiKT9lLnBhcmVudEVsZW1lbnQ6ISFlLmNsb3Nlc3QoXCJsaVwiKSYmZSkmJihvKG4uY2hpbGRyZW4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UubWF0Y2hlcyhcInVsXCIpJiZ0Lm9wZW5QYW5lbChlKX0pKSwhMCl9KG4pKXx8ZnVuY3Rpb24oZSl7dmFyIG49cyhcIi5tbS1zcG4tLW9wZW5cIixlKSxpPW5bbi5sZW5ndGgtMV07aWYoaSl7dmFyIG89aS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJ1bFwiKTtpZihvKXJldHVybiB0Lm9wZW5QYW5lbChvKSwhMH1yZXR1cm4hMX0obikpJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfSkpfSx0fSgpLGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dmFyIG49dGhpczt2b2lkIDA9PT10JiYodD1udWxsKSx0aGlzLndyYXBwZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1tLW9jZFwiKSx0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1tLW9jZC0tXCIrZSksdGhpcy5jb250ZW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtbS1vY2RfX2NvbnRlbnRcIiksdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmNvbnRlbnQpLHRoaXMuYmFja2Ryb3A9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoXCJtbS1vY2RfX2JhY2tkcm9wXCIpLHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5iYWNrZHJvcCksZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy53cmFwcGVyKSx0JiZ0aGlzLmNvbnRlbnQuYXBwZW5kKHQpO3ZhciBpPWZ1bmN0aW9uKHQpe24uY2xvc2UoKSx0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpfTt0aGlzLmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsaSx7cGFzc2l2ZTohMH0pLHRoaXMuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLGkse3Bhc3NpdmU6ITB9KX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicHJlZml4XCIse2dldDpmdW5jdGlvbigpe3JldHVyblwibW0tb2NkXCJ9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbigpe3RoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibW0tb2NkLS1vcGVuXCIpLGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1tLW9jZC1vcGVuZWRcIil9LHQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtbS1vY2QtLW9wZW5cIiksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW0tb2NkLW9wZW5lZFwiKX0sdH0oKSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZvaWQgMD09PWUmJihlPVwiYWxsXCIpLHRoaXMubWVudT10LHRoaXMudG9nZ2xlcj1uZXcgaShlKX1yZXR1cm4gdC5wcm90b3R5cGUubmF2aWdhdGlvbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLm5hdmlnYXRvcil7dmFyIG49KHQ9dHx8e30pLnRpdGxlLGk9dm9pZCAwPT09bj9cIk1lbnVcIjpuLG89dC5zZWxlY3RlZENsYXNzLHM9dm9pZCAwPT09bz9cIlNlbGVjdGVkXCI6byxyPXQuc2xpZGluZ1N1Ym1lbnVzLGE9dm9pZCAwPT09cnx8cixkPXQudGhlbWUsdT12b2lkIDA9PT1kP1wibGlnaHRcIjpkO3RoaXMubmF2aWdhdG9yPW5ldyBjKHRoaXMubWVudSxpLHMsYSx1KSx0aGlzLnRvZ2dsZXIuYWRkKChmdW5jdGlvbigpe3JldHVybiBlLm1lbnUuY2xhc3NMaXN0LmFkZChlLm5hdmlnYXRvci5wcmVmaXgpfSksKGZ1bmN0aW9uKCl7cmV0dXJuIGUubWVudS5jbGFzc0xpc3QucmVtb3ZlKGUubmF2aWdhdG9yLnByZWZpeCl9KSl9cmV0dXJuIHRoaXMubmF2aWdhdG9yfSx0LnByb3RvdHlwZS5vZmZjYW52YXM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZighdGhpcy5kcmF3ZXIpe3ZhciBuPSh0PXR8fHt9KS5wb3NpdGlvbixpPXZvaWQgMD09PW4/XCJsZWZ0XCI6bjt0aGlzLmRyYXdlcj1uZXcgZChudWxsLGkpO3ZhciBvPWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJvcmlnaW5hbCBtZW51IGxvY2F0aW9uXCIpO3RoaXMubWVudS5hZnRlcihvKSx0aGlzLnRvZ2dsZXIuYWRkKChmdW5jdGlvbigpe2UuZHJhd2VyLmNvbnRlbnQuYXBwZW5kKGUubWVudSl9KSwoZnVuY3Rpb24oKXtlLmRyYXdlci5jbG9zZSgpLG8uYWZ0ZXIoZS5tZW51KX0pKX1yZXR1cm4gdGhpcy5kcmF3ZXJ9LHR9KCk7ZS5kZWZhdWx0PXU7d2luZG93Lk1tZW51TGlnaHQ9dX1dKTsiLCIvLyBJdOKAmXMgYW4gSW1tZWRpYXRlbHktSW52b2tlZCBGdW5jdGlvbiBFeHByZXNzaW9uLCBvciBJSUZFIGZvciBzaG9ydC4gSXQgZXhlY3V0ZXMgaW1tZWRpYXRlbHkgYWZ0ZXIgaXTigJlzIGNyZWF0ZWQuXHJcblxyXG4vLyhmdW5jdGlvbigpe1xyXG5cclxuICAgIGZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpe1xyXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0W1wicXVlcnlTZWxlY3RvckFsbFwiXShzZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcil7XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gT2JqZWN0LmtleXMoY29sbGVjdGlvbikpe1xyXG4gICAgICAgICAgICBpdGVyYXRvcihjb2xsZWN0aW9uW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVudShtZW51KXtcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xyXG5cclxuICAgICAgICBpZighdWwgfHwgdWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXZpc2libGVcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLWFuaW1hdGluZ1wiKTtcclxuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLXZpc2libGVcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLWFuaW1hdGluZ1wiKVxyXG4gICAgICAgIH0sIDI1KTtcclxuXHJcbiAgICAgICAgLy8gUmVwb3NpY2lvbmFtaWVudG8gZGUgZWxlbWVudG9cclxuXHJcbiAgICAgICAgLy8gU3ViaW1vcyBlbCB6LWluZGV4IHJlc3BlY3RvIGEgbGEgdWwgc3VwZXJpb3JcclxuICAgICAgICB2YXIgekluZGV4QmFzZSA9IG1lbnUucGFyZW50Tm9kZS5zdHlsZS56SW5kZXg7XHJcblxyXG4gICAgICAgIGlmKHpJbmRleEJhc2UpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB1bC5zdHlsZS56SW5kZXggPSB6SW5kZXhCYXNlICsgMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHpJbmRleEJhc2UgPSAwO1xyXG4gICAgICAgICAgICBtZW51LnBhcmVudE5vZGUuc3R5bGUuekluZGV4ID0gekluZGV4QmFzZTtcclxuICAgICAgICAgICAgdWwuc3R5bGUuekluZGV4ID0gMTA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBanVzdGFtb3MgbGEgcG9zaWNpw7NuIHNpIHNhbGUgZGVsIHZpZXdwb3J0XHJcbiAgICAgICAgaWYoaXNFbGVtZW50T3V0T2ZWaWV3cG9ydCh1bCkpe1xyXG4gICAgICAgICAgICByZXBvc2ljaW9uYUVsZW1lbnRvKHVsLG1lbnUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlTWVudShtZW51KXtcclxuICAgICAgICB2YXIgbWVudSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHVsID0gJChcInVsXCIsIG1lbnUpWzBdO1xyXG5cclxuICAgICAgICBpZighdWwgfHwgIXVsLmNsYXNzTGlzdC5jb250YWlucyhcIi12aXNpYmxlXCIpKSByZXR1cm47XHJcblxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XHJcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcIi1hbmltYXRpbmdcIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB1bC5jbGFzc0xpc3QucmVtb3ZlKFwiLXZpc2libGVcIik7XHJcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItYW5pbWF0aW5nXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYobWVudS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIk1lbnVcIikpe1xyXG4gICAgICAgICAgICAgICAgdWwuc3R5bGUubGVmdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKG1lbnUpe1xyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcclxuICAgICAgICBmb3JFYWNoKFxyXG4gICAgICAgICAgICAkKFwibGkuLWhhc1N1Ym1lbnUuLWFjdGl2ZTpub3QoOmhvdmVyKVwiLCBtZW51LnBhcmVudCksXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgZS5oaWRlTWVudSAmJiBlLmhpZGVNZW51KCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KGVsKXtcclxuICAgICAgICB2YXIgcmVjdCAgICAgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICAgICAgICB2aWV3cG9ydF9oZWlnaHQgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcclxuICAgICAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxyXG4gICAgICAgICAgICBlbGVtZW50X3dpZHRoICAgID0gcmVjdC53aWR0aDtcclxuXHJcbiAgICAgICAgdmFyIGRpZmVyZW5jaWEgPSB2aWV3cG9ydF93aWR0aCAtIChlbGVtZW50X3grZWxlbWVudF93aWR0aCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRpZmVyZW5jaWE+MTApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRPdmVyZmxvd25QaXhlbHMoZWwpe1xyXG4gICAgICAgIHZhciByZWN0ICAgICAgICAgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICB2aWV3cG9ydF93aWR0aCAgID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIHZpZXdwb3J0X2hlaWdodCAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGVsZW1lbnRfeCAgICAgICAgPSByZWN0LmxlZnQsXHJcbiAgICAgICAgZWxlbWVudF95ICAgICAgICA9IHJlY3QudG9wLFxyXG4gICAgICAgIGVsZW1lbnRfd2lkdGggICAgPSByZWN0LndpZHRoO1xyXG5cclxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKE1hdGgucm91bmQoZGlmZXJlbmNpYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcG9zaWNpb25hRWxlbWVudG8oZWwscGFyZW50KXtcclxuICAgICAgICAvL01pcmFtb3Mgc2kgZWwgcGFkcmUgZGVsIGVsZW1lbnRvIHBhcmVudCBlcyBlbCBtZW51IHByaW5jaXBhbCBjb24gbGEgY2xhc2UgbWVudVxyXG5cclxuICAgICAgICBpZihwYXJlbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJNZW51XCIpKXtcclxuICAgICAgICAgICAgLy8gRWwgZWxlbWVudG8gZXMgc3VibWVudSBkZWwgbWVudSBwcmluY2lwYWwgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG91dHNpZGVQaXhlbHMgPSBnZXRPdmVyZmxvd25QaXhlbHMoZWwpICsgNDA7XHJcblxyXG4gICAgICAgICAgICAvLyBvdXRzaWRlUGl4ZWxzID0gb3V0c2lkZVBpeGVscyArIChvdXRzaWRlUGl4ZWxzKjAuMik7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJPdXRzaWRlOlwiLG91dHNpZGVQaXhlbHMpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZWwuc3R5bGUubGVmdCA9IFwiLVwiICsgU3RyaW5nKG91dHNpZGVQaXhlbHMpICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBOTyBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCwgcG9zaWNpb25hbW9zIGFsIG90cm8gbGFkbyBkZWwgc3VibWVudSBwYWRyZVxyXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBlbC5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgYWN0aXZhck1lbnUoKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXJUaWR5TWVudSgpe1xyXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5zaG93TWVudSA9IHNob3dNZW51O1xyXG4gICAgICAgICAgICBlLmhpZGVNZW51ID0gaGlkZU1lbnU7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd01lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudSBsaVwiKSwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgaGlkZUFsbEluYWN0aXZlTWVudXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgPiBsaS4taGFzU3VibWVudSBsaS4taGFzU3VibWVudVwiKSwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd01lbnUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBbGxJbmFjdGl2ZU1lbnVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0ZXN0aW5nKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUZXN0IGV4cG9ydGFjaW9uIGNvcnJlY3RvXCIpO1xyXG4gICAgfVxyXG5cclxuLy99KSgpO1xyXG5cclxuZXhwb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuaW1wb3J0ICcuL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vdmVuZG9ycy9tbWVudS1saWdodC9tbWVudS1saWdodCc7XHJcbmltcG9ydCAnLi92ZW5kb3JzL21tZW51LWxpZ2h0L21tZW51LWxpZ2h0LnNjc3MnO1xyXG5cclxuaW1wb3J0IHsgdGVzdGluZywgYWN0aXZhclRpZHlNZW51IH0gZnJvbSAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51JztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhck1NZW51TGlnaHQoKVxyXG57XHJcbiAgICB2YXIgbWVudSA9IG5ldyBNbWVudUxpZ2h0KFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcjbWVudScgKSxcclxuICAgICAgICAnYWxsJ1xyXG4gICAgKTtcclxuXHJcbiAgICB2YXIgbmF2aWdhdG9yID0gbWVudS5uYXZpZ2F0aW9uKHtcclxuICAgICAgICBzZWxlY3RlZENsYXNzOiAnU2VsZWN0ZWQnLFxyXG4gICAgICAgIHNsaWRpbmdTdWJtZW51czogZmFsc2UsXHJcbiAgICAgICAgLy8gdGhlbWU6ICdkYXJrJyxcclxuICAgICAgICB0aXRsZTogJ01lbnUgRXhhbXBsZSAjMSdcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBkcmF3ZXIgPSBtZW51Lm9mZmNhbnZhcyh7XHJcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCdcclxuICAgIH0pO1xyXG5cclxuICAgIC8vXHRPcGVuIHRoZSBtZW51LlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2FbaHJlZj1cIiNtZW51XCJdJyApXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2bnQgPT4ge1xyXG4gICAgICAgICAgICBldm50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRyYXdlci5vcGVuKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdDEoKXtcclxuICAgIHRlc3RpbmcoKTtcclxufVxyXG5cclxuZXhwb3J0IHthY3RpdmFyVGlkeU1lbnV9OyJdLCJzb3VyY2VSb290IjoiIn0=