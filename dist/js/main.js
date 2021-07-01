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


/***/ }),

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendors */ "./src/js/vendors.js");



var luxy = __webpack_require__(/*! luxy.js */ "./node_modules/luxy.js/dist/js/luxy.min.js");

window.luxy = luxy;
window.addEventListener("load", function (e) {
  loadComponent('components/menus/menu1.html', 'placeholder_header--desktop', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
  loadComponent('components/menus/menu-mobile-1.html', 'placeholder_header--mobile', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarMMenuLight);
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
      loadComponent('components/menus/menu1.html', 'placeholder_header--desktop', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;

    case "menu-test":
      loadComponent('components/menus/menu-test.html', 'placeholder_header--desktop', _vendors__WEBPACK_IMPORTED_MODULE_1__.activarTidyMenu);
      break;
  }

  switch (opciones.navMobile) {
    case "menu-mobile-1":
      loadComponent('components/menus/menu-mobile-1.html', 'placeholder_header--mobile', function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy9tbWVudS1saWdodC9tbWVudS1saWdodC5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvanMvdmVuZG9ycy90aWR5LW1lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9ub2RlX21vZHVsZXMvbHV4eS5qcy9kaXN0L2pzL2x1eHkubWluLmpzIiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS8uL3NyYy9qcy92ZW5kb3JzL21tZW51LWxpZ2h0L21tZW51LWxpZ2h0LnNjc3MiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL3ZlbmRvcnMvdGlkeS1tZW51L21lbnUuc2NzcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9naC1wYWdlcy1nbG9iYWwtdHJpYmUtY2xvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2doLXBhZ2VzLWdsb2JhbC10cmliZS1jbG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2gtcGFnZXMtZ2xvYmFsLXRyaWJlLWNsb25lLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOlsiYWN0aXZhck1NZW51TGlnaHQiLCJtZW51IiwiTW1lbnVMaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdmlnYXRvciIsIm5hdmlnYXRpb24iLCJzZWxlY3RlZENsYXNzIiwic2xpZGluZ1N1Ym1lbnVzIiwidGl0bGUiLCJkcmF3ZXIiLCJvZmZjYW52YXMiLCJwb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldm50IiwicHJldmVudERlZmF1bHQiLCJvcGVuIiwidGVzdDEiLCJ0ZXN0aW5nIiwidCIsImUiLCJuIiwiaSIsImV4cG9ydHMiLCJvIiwibCIsImNhbGwiLCJtIiwiYyIsImQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsIl9fZXNNb2R1bGUiLCJjcmVhdGUiLCJiaW5kIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImxpc3RlbmVyIiwibWF0Y2hlcyIsIm1hdGNoRm5zIiwidW5tYXRjaEZucyIsImZvckVhY2giLCJ0b2dnbGVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwiYWRkIiwicHVzaCIsIkFycmF5Iiwic2xpY2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwibXNNYXhUb3VjaFBvaW50cyIsInVzZXJBZ2VudCIsImluZGV4T2YiLCJhcHBWZXJzaW9uIiwiYSIsIm5vZGUiLCJjbGFzc0xpc3QiLCJfc2V0U2VsZWN0ZWRsIiwiX2luaXRBbmNob3JzIiwiY29uZmlndXJhYmxlIiwib3BlblBhbmVsIiwicGFyZW50RWxlbWVudCIsImRhdGFzZXQiLCJtbVNwblRpdGxlIiwicmVtb3ZlIiwiY2hpbGRyZW4iLCJ0ZXh0Q29udGVudCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJ0YXJnZXQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRlbnQiLCJhcHBlbmQiLCJiYWNrZHJvcCIsImJvZHkiLCJjbG9zZSIsInBhc3NpdmUiLCJ1IiwidGhlbWUiLCJwcmVmaXgiLCJjcmVhdGVDb21tZW50IiwiYWZ0ZXIiLCIkIiwic2VsZWN0b3IiLCJjb250ZXh0IiwiY29sbGVjdGlvbiIsIml0ZXJhdG9yIiwia2V5Iiwia2V5cyIsInNob3dNZW51IiwidWwiLCJjb250YWlucyIsInNldFRpbWVvdXQiLCJ6SW5kZXhCYXNlIiwicGFyZW50Tm9kZSIsInN0eWxlIiwiekluZGV4IiwiaXNFbGVtZW50T3V0T2ZWaWV3cG9ydCIsInJlcG9zaWNpb25hRWxlbWVudG8iLCJoaWRlTWVudSIsImxlZnQiLCJoaWRlQWxsSW5hY3RpdmVNZW51cyIsInBhcmVudCIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdwb3J0X3dpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ2aWV3cG9ydF9oZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJlbGVtZW50X3giLCJlbGVtZW50X3kiLCJ0b3AiLCJlbGVtZW50X3dpZHRoIiwid2lkdGgiLCJkaWZlcmVuY2lhIiwiZ2V0T3ZlcmZsb3duUGl4ZWxzIiwiTWF0aCIsImFicyIsInJvdW5kIiwib3V0c2lkZVBpeGVscyIsIlN0cmluZyIsIm9mZnNldFdpZHRoIiwiYWN0aXZhclRpZHlNZW51IiwiY29uc29sZSIsImxvZyIsImx1eHkiLCJyZXF1aXJlIiwibG9hZENvbXBvbmVudCIsImluaXQiLCJ1cmwiLCJjYWxsYmFjayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImRhdGEiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImNvbXBvbmVudExvYWRlciIsImNhcmdhZG9yIiwib3BjaW9uZXMiLCJuYXYiLCJuYXZN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QUQsRUFBZ0MsNkJBQWhDLEVBQStETCxxREFBL0QsQ0FBYjtBQUNBOztBQUVKLFNBQUssV0FBTDtBQUNJSyxtQkFBYSxDQUFDLGlDQUFELEVBQW9DLDZCQUFwQyxFQUFtRUwscURBQW5FLENBQWI7QUFDQTtBQVBSOztBQVVBLFVBQVFtQixRQUFRLENBQUNFLFNBQWpCO0FBQ0ksU0FBSyxlQUFMO0FBQ0loQixtQkFBYSxDQUFDLHFDQUFELEVBQXdDLDRCQUF4QyxFQUFzRSxZQUFJLENBQUUsQ0FBNUUsQ0FBYjtBQUNBO0FBSFI7O0FBTUEsVUFBT2MsUUFBUSxDQUFDRyxNQUFoQjtBQUNJLFNBQUssaUJBQUw7QUFDSWpCLG1CQUFhLENBQUMseUNBQUQsRUFBNEMsTUFBNUMsRUFBb0QsWUFBSTtBQUFDRixZQUFJLENBQUNHLElBQUw7QUFBYSxPQUF0RSxDQUFiO0FBQ0E7QUFIUjs7QUFNQUwsU0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFFSCxDQTFCRCxDIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcbmltcG9ydCAnLi92ZW5kb3JzL3RpZHktbWVudS9tZW51LnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3ZlbmRvcnMvbW1lbnUtbGlnaHQvbW1lbnUtbGlnaHQnO1xyXG5pbXBvcnQgJy4vdmVuZG9ycy9tbWVudS1saWdodC9tbWVudS1saWdodC5zY3NzJztcclxuXHJcbmltcG9ydCB7IHRlc3RpbmcsIGFjdGl2YXJUaWR5TWVudSB9IGZyb20gJy4vdmVuZG9ycy90aWR5LW1lbnUvbWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXJNTWVudUxpZ2h0KClcclxue1xyXG4gICAgdmFyIG1lbnUgPSBuZXcgTW1lbnVMaWdodChcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI21lbnUnICksXHJcbiAgICAgICAgJ2FsbCdcclxuICAgICk7XHJcblxyXG4gICAgdmFyIG5hdmlnYXRvciA9IG1lbnUubmF2aWdhdGlvbih7XHJcbiAgICAgICAgc2VsZWN0ZWRDbGFzczogJ1NlbGVjdGVkJyxcclxuICAgICAgICBzbGlkaW5nU3VibWVudXM6IGZhbHNlLFxyXG4gICAgICAgIC8vIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgdGl0bGU6ICdNZW51IEV4YW1wbGUgIzEnXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZHJhd2VyID0gbWVudS5vZmZjYW52YXMoe1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1x0T3BlbiB0aGUgbWVudS5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdhW2hyZWY9XCIjbWVudVwiXScgKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldm50ID0+IHtcclxuICAgICAgICAgICAgZXZudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkcmF3ZXIub3BlbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3QxKCl7XHJcbiAgICB0ZXN0aW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWN0aXZhclRpZHlNZW51fTsiLCIhZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihpKXtpZihlW2ldKXJldHVybiBlW2ldLmV4cG9ydHM7dmFyIG89ZVtpXT17aTppLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbaV0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31uLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLGkpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDppfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIoaSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGksXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKGksbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gaX0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIGU9dGhpczt0aGlzLmxpc3RlbmVyPWZ1bmN0aW9uKHQpeyh0Lm1hdGNoZXM/ZS5tYXRjaEZuczplLnVubWF0Y2hGbnMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QoKX0pKX0sdGhpcy50b2dnbGVyPXdpbmRvdy5tYXRjaE1lZGlhKHQpLHRoaXMudG9nZ2xlci5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKSx0aGlzLm1hdGNoRm5zPVtdLHRoaXMudW5tYXRjaEZucz1bXX1yZXR1cm4gdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQsZSl7dGhpcy5tYXRjaEZucy5wdXNoKHQpLHRoaXMudW5tYXRjaEZucy5wdXNoKGUpLCh0aGlzLnRvZ2dsZXIubWF0Y2hlcz90OmUpKCl9LHR9KCksbz1mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCl9LHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbygoZXx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwodCkpfSxyPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpPi0xfHxuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiVHJpZGVudC9cIik+LTEpLGE9XCJtbS1zcG5cIixjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsbixpLG8pe3RoaXMubm9kZT10LHRoaXMudGl0bGU9ZSx0aGlzLnNsaWRpbmdTdWJtZW51cz1pLHRoaXMuc2VsZWN0ZWRDbGFzcz1uLHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGEpLHImJih0aGlzLnNsaWRpbmdTdWJtZW51cz0hMSksdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoYStcIi0tXCIrbyksdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoYStcIi0tXCIrKHRoaXMuc2xpZGluZ1N1Ym1lbnVzP1wibmF2YmFyXCI6XCJ2ZXJ0aWNhbFwiKSksdGhpcy5fc2V0U2VsZWN0ZWRsKCksdGhpcy5faW5pdEFuY2hvcnMoKX1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwicHJlZml4XCIse2dldDpmdW5jdGlvbigpe3JldHVybiBhfSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLm9wZW5QYW5lbD1mdW5jdGlvbih0KXt2YXIgZT10LnBhcmVudEVsZW1lbnQ7aWYodGhpcy5zbGlkaW5nU3VibWVudXMpe3ZhciBuPXQuZGF0YXNldC5tbVNwblRpdGxlO2U9PT10aGlzLm5vZGU/dGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoYStcIi0tbWFpblwiKToodGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoYStcIi0tbWFpblwiKSxufHxvKGUuY2hpbGRyZW4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QubWF0Y2hlcyhcImEsIHNwYW5cIikmJihuPXQudGV4dENvbnRlbnQpfSkpKSxufHwobj10aGlzLnRpdGxlKSx0aGlzLm5vZGUuZGF0YXNldC5tbVNwblRpdGxlPW4scyhcIi5tbS1zcG4tLW9wZW5cIix0aGlzLm5vZGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QuY2xhc3NMaXN0LnJlbW92ZShhK1wiLS1vcGVuXCIpLHQuY2xhc3NMaXN0LnJlbW92ZShhK1wiLS1wYXJlbnRcIil9KSksdC5jbGFzc0xpc3QuYWRkKGErXCItLW9wZW5cIiksdC5jbGFzc0xpc3QucmVtb3ZlKGErXCItLXBhcmVudFwiKTtmb3IodmFyIGk9dC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJ1bFwiKTtpOylpLmNsYXNzTGlzdC5hZGQoYStcIi0tb3BlblwiKSxpLmNsYXNzTGlzdC5hZGQoYStcIi0tcGFyZW50XCIpLGk9aS5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJ1bFwiKX1lbHNle3ZhciByPXQubWF0Y2hlcyhcIi5tbS1zcG4tLW9wZW5cIik7cyhcIi5tbS1zcG4tLW9wZW5cIix0aGlzLm5vZGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QuY2xhc3NMaXN0LnJlbW92ZShhK1wiLS1vcGVuXCIpfSkpLHQuY2xhc3NMaXN0W3I/XCJyZW1vdmVcIjpcImFkZFwiXShhK1wiLS1vcGVuXCIpO2Zvcih2YXIgYz10LnBhcmVudEVsZW1lbnQuY2xvc2VzdChcInVsXCIpO2M7KWMuY2xhc3NMaXN0LmFkZChhK1wiLS1vcGVuXCIpLGM9Yy5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoXCJ1bFwiKX19LHQucHJvdG90eXBlLl9zZXRTZWxlY3RlZGw9ZnVuY3Rpb24oKXt2YXIgdD1zKFwiLlwiK3RoaXMuc2VsZWN0ZWRDbGFzcyx0aGlzLm5vZGUpLGU9dFt0Lmxlbmd0aC0xXSxuPW51bGw7ZSYmKG49ZS5jbG9zZXN0KFwidWxcIikpLG58fChuPXRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKFwidWxcIikpLHRoaXMub3BlblBhbmVsKG4pfSx0LnByb3RvdHlwZS5faW5pdEFuY2hvcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXQsaT0hMTsoaT0oaT0oaT1pfHxmdW5jdGlvbih0KXtyZXR1cm4hIXQubWF0Y2hlcyhcImFcIil9KG4pKXx8ZnVuY3Rpb24oZSl7dmFyIG47cmV0dXJuISEobj1lLmNsb3Nlc3QoXCJzcGFuXCIpP2UucGFyZW50RWxlbWVudDohIWUuY2xvc2VzdChcImxpXCIpJiZlKSYmKG8obi5jaGlsZHJlbikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5tYXRjaGVzKFwidWxcIikmJnQub3BlblBhbmVsKGUpfSkpLCEwKX0obikpfHxmdW5jdGlvbihlKXt2YXIgbj1zKFwiLm1tLXNwbi0tb3BlblwiLGUpLGk9bltuLmxlbmd0aC0xXTtpZihpKXt2YXIgbz1pLnBhcmVudEVsZW1lbnQuY2xvc2VzdChcInVsXCIpO2lmKG8pcmV0dXJuIHQub3BlblBhbmVsKG8pLCEwfXJldHVybiExfShuKSkmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCl9KSl9LHR9KCksZD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2YXIgbj10aGlzO3ZvaWQgMD09PXQmJih0PW51bGwpLHRoaXMud3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibW0tb2NkXCIpLHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibW0tb2NkLS1cIitlKSx0aGlzLmNvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1tLW9jZF9fY29udGVudFwiKSx0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMuY29udGVudCksdGhpcy5iYWNrZHJvcD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChcIm1tLW9jZF9fYmFja2Ryb3BcIiksdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmJhY2tkcm9wKSxkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLndyYXBwZXIpLHQmJnRoaXMuY29udGVudC5hcHBlbmQodCk7dmFyIGk9ZnVuY3Rpb24odCl7bi5jbG9zZSgpLHQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCl9O3RoaXMuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixpLHtwYXNzaXZlOiEwfSksdGhpcy5iYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsaSx7cGFzc2l2ZTohMH0pfXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJwcmVmaXhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJtbS1vY2RcIn0sZW51bWVyYWJsZTohMSxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtbS1vY2QtLW9wZW5cIiksZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW0tb2NkLW9wZW5lZFwiKX0sdC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1tLW9jZC0tb3BlblwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtbS1vY2Qtb3BlbmVkXCIpfSx0fSgpLHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dm9pZCAwPT09ZSYmKGU9XCJhbGxcIiksdGhpcy5tZW51PXQsdGhpcy50b2dnbGVyPW5ldyBpKGUpfXJldHVybiB0LnByb3RvdHlwZS5uYXZpZ2F0aW9uPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoIXRoaXMubmF2aWdhdG9yKXt2YXIgbj0odD10fHx7fSkudGl0bGUsaT12b2lkIDA9PT1uP1wiTWVudVwiOm4sbz10LnNlbGVjdGVkQ2xhc3Mscz12b2lkIDA9PT1vP1wiU2VsZWN0ZWRcIjpvLHI9dC5zbGlkaW5nU3VibWVudXMsYT12b2lkIDA9PT1yfHxyLGQ9dC50aGVtZSx1PXZvaWQgMD09PWQ/XCJsaWdodFwiOmQ7dGhpcy5uYXZpZ2F0b3I9bmV3IGModGhpcy5tZW51LGkscyxhLHUpLHRoaXMudG9nZ2xlci5hZGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGUubWVudS5jbGFzc0xpc3QuYWRkKGUubmF2aWdhdG9yLnByZWZpeCl9KSwoZnVuY3Rpb24oKXtyZXR1cm4gZS5tZW51LmNsYXNzTGlzdC5yZW1vdmUoZS5uYXZpZ2F0b3IucHJlZml4KX0pKX1yZXR1cm4gdGhpcy5uYXZpZ2F0b3J9LHQucHJvdG90eXBlLm9mZmNhbnZhcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLmRyYXdlcil7dmFyIG49KHQ9dHx8e30pLnBvc2l0aW9uLGk9dm9pZCAwPT09bj9cImxlZnRcIjpuO3RoaXMuZHJhd2VyPW5ldyBkKG51bGwsaSk7dmFyIG89ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIm9yaWdpbmFsIG1lbnUgbG9jYXRpb25cIik7dGhpcy5tZW51LmFmdGVyKG8pLHRoaXMudG9nZ2xlci5hZGQoKGZ1bmN0aW9uKCl7ZS5kcmF3ZXIuY29udGVudC5hcHBlbmQoZS5tZW51KX0pLChmdW5jdGlvbigpe2UuZHJhd2VyLmNsb3NlKCksby5hZnRlcihlLm1lbnUpfSkpfXJldHVybiB0aGlzLmRyYXdlcn0sdH0oKTtlLmRlZmF1bHQ9dTt3aW5kb3cuTW1lbnVMaWdodD11fV0pOyIsIi8vIEl04oCZcyBhbiBJbW1lZGlhdGVseS1JbnZva2VkIEZ1bmN0aW9uIEV4cHJlc3Npb24sIG9yIElJRkUgZm9yIHNob3J0LiBJdCBleGVjdXRlcyBpbW1lZGlhdGVseSBhZnRlciBpdOKAmXMgY3JlYXRlZC5cclxuXHJcbi8vKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgZnVuY3Rpb24gJChzZWxlY3RvciwgY29udGV4dCl7XHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHRbXCJxdWVyeVNlbGVjdG9yQWxsXCJdKHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdG9yKXtcclxuICAgICAgICBmb3IodmFyIGtleSBpbiBPYmplY3Qua2V5cyhjb2xsZWN0aW9uKSl7XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKGNvbGxlY3Rpb25ba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dNZW51KG1lbnUpe1xyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcclxuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XHJcblxyXG4gICAgICAgIGlmKCF1bCB8fCB1bC5jbGFzc0xpc3QuY29udGFpbnMoXCItdmlzaWJsZVwiKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlXCIpO1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItYW5pbWF0aW5nXCIpO1xyXG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoXCItdmlzaWJsZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItYW5pbWF0aW5nXCIpXHJcbiAgICAgICAgfSwgMjUpO1xyXG5cclxuICAgICAgICAvLyBSZXBvc2ljaW9uYW1pZW50byBkZSBlbGVtZW50b1xyXG5cclxuICAgICAgICAvLyBTdWJpbW9zIGVsIHotaW5kZXggcmVzcGVjdG8gYSBsYSB1bCBzdXBlcmlvclxyXG4gICAgICAgIHZhciB6SW5kZXhCYXNlID0gbWVudS5wYXJlbnROb2RlLnN0eWxlLnpJbmRleDtcclxuXHJcbiAgICAgICAgaWYoekluZGV4QmFzZSl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVsLnN0eWxlLnpJbmRleCA9IHpJbmRleEJhc2UgKyAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgekluZGV4QmFzZSA9IDA7XHJcbiAgICAgICAgICAgIG1lbnUucGFyZW50Tm9kZS5zdHlsZS56SW5kZXggPSB6SW5kZXhCYXNlO1xyXG4gICAgICAgICAgICB1bC5zdHlsZS56SW5kZXggPSAxMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFqdXN0YW1vcyBsYSBwb3NpY2nDs24gc2kgc2FsZSBkZWwgdmlld3BvcnRcclxuICAgICAgICBpZihpc0VsZW1lbnRPdXRPZlZpZXdwb3J0KHVsKSl7XHJcbiAgICAgICAgICAgIHJlcG9zaWNpb25hRWxlbWVudG8odWwsbWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVNZW51KG1lbnUpe1xyXG4gICAgICAgIHZhciBtZW51ID0gdGhpcztcclxuICAgICAgICB2YXIgdWwgPSAkKFwidWxcIiwgbWVudSlbMF07XHJcblxyXG4gICAgICAgIGlmKCF1bCB8fCAhdWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXZpc2libGVcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwiLWFuaW1hdGluZ1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHVsLmNsYXNzTGlzdC5yZW1vdmUoXCItdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgdWwuY2xhc3NMaXN0LnJlbW92ZShcIi1hbmltYXRpbmdcIik7XHJcblxyXG4gICAgICAgICAgICBpZihtZW51LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWVudVwiKSl7XHJcbiAgICAgICAgICAgICAgICB1bC5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUFsbEluYWN0aXZlTWVudXMobWVudSl7XHJcbiAgICAgICAgdmFyIG1lbnUgPSB0aGlzO1xyXG4gICAgICAgIGZvckVhY2goXHJcbiAgICAgICAgICAgICQoXCJsaS4taGFzU3VibWVudS4tYWN0aXZlOm5vdCg6aG92ZXIpXCIsIG1lbnUucGFyZW50KSxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBlLmhpZGVNZW51ICYmIGUuaGlkZU1lbnUoKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudE91dE9mVmlld3BvcnQoZWwpe1xyXG4gICAgICAgIHZhciByZWN0ICAgICAgICAgICAgID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgIHZpZXdwb3J0X3dpZHRoICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgICAgIHZpZXdwb3J0X2hlaWdodCAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgICAgICBlbGVtZW50X3ggICAgICAgID0gcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICBlbGVtZW50X3kgICAgICAgID0gcmVjdC50b3AsXHJcbiAgICAgICAgICAgIGVsZW1lbnRfd2lkdGggICAgPSByZWN0LndpZHRoO1xyXG5cclxuICAgICAgICB2YXIgZGlmZXJlbmNpYSA9IHZpZXdwb3J0X3dpZHRoIC0gKGVsZW1lbnRfeCtlbGVtZW50X3dpZHRoKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGlmZXJlbmNpYT4xMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldE92ZXJmbG93blBpeGVscyhlbCl7XHJcbiAgICAgICAgdmFyIHJlY3QgICAgICAgICA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgIHZpZXdwb3J0X3dpZHRoICAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgdmlld3BvcnRfaGVpZ2h0ICA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgZWxlbWVudF94ICAgICAgICA9IHJlY3QubGVmdCxcclxuICAgICAgICBlbGVtZW50X3kgICAgICAgID0gcmVjdC50b3AsXHJcbiAgICAgICAgZWxlbWVudF93aWR0aCAgICA9IHJlY3Qud2lkdGg7XHJcblxyXG4gICAgICAgIHZhciBkaWZlcmVuY2lhID0gdmlld3BvcnRfd2lkdGggLSAoZWxlbWVudF94K2VsZW1lbnRfd2lkdGgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZlcmVuY2lhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVwb3NpY2lvbmFFbGVtZW50byhlbCxwYXJlbnQpe1xyXG4gICAgICAgIC8vTWlyYW1vcyBzaSBlbCBwYWRyZSBkZWwgZWxlbWVudG8gcGFyZW50IGVzIGVsIG1lbnUgcHJpbmNpcGFsIGNvbiBsYSBjbGFzZSBtZW51XHJcblxyXG4gICAgICAgIGlmKHBhcmVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIk1lbnVcIikpe1xyXG4gICAgICAgICAgICAvLyBFbCBlbGVtZW50byBlcyBzdWJtZW51IGRlbCBtZW51IHByaW5jaXBhbCAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgb3V0c2lkZVBpeGVscyA9IGdldE92ZXJmbG93blBpeGVscyhlbCkgKyA0MDtcclxuXHJcbiAgICAgICAgICAgIC8vIG91dHNpZGVQaXhlbHMgPSBvdXRzaWRlUGl4ZWxzICsgKG91dHNpZGVQaXhlbHMqMC4yKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk91dHNpZGU6XCIsb3V0c2lkZVBpeGVscyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gXCItXCIgKyBTdHJpbmcob3V0c2lkZVBpeGVscykgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vIEVsIGVsZW1lbnRvIE5PIGVzIHN1Ym1lbnUgZGVsIG1lbnUgcHJpbmNpcGFsLCBwb3NpY2lvbmFtb3MgYWwgb3RybyBsYWRvIGRlbCBzdWJtZW51IHBhZHJlXHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBcIi1cIiArIGVsLm9mZnNldFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBhY3RpdmFyTWVudSgpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhclRpZHlNZW51KCl7XHJcbiAgICAgICAgZm9yRWFjaCgkKFwiLk1lbnUgbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnNob3dNZW51ID0gc2hvd01lbnU7XHJcbiAgICAgICAgICAgIGUuaGlkZU1lbnUgPSBoaWRlTWVudTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGZvckVhY2goJChcIi5NZW51ID4gbGkuLWhhc1N1Ym1lbnVcIiksIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpXCIpLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoaWRlQWxsSW5hY3RpdmVNZW51cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBmb3JFYWNoKCQoXCIuTWVudSA+IGxpLi1oYXNTdWJtZW51IGxpLi1oYXNTdWJtZW51XCIpLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93TWVudSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFsbEluYWN0aXZlTWVudXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRlc3RpbmcoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3QgZXhwb3J0YWNpb24gY29ycmVjdG9cIik7XHJcbiAgICB9XHJcblxyXG4vL30pKCk7XHJcblxyXG5leHBvcnQgeyB0ZXN0aW5nLCBhY3RpdmFyVGlkeU1lbnUgfTsiLCIvKiEgbHV4eS5qcyB2MC4wLjcgfCAoYykgMjAxOCBNaW5lbyBPa3VkYSB8IE1JVCBMaWNlbnNlIHwgZ2l0K3NzaDovL2dpdEBnaXRodWIuY29tOm1pbjMwMzI3L2x1eHkuZ2l0ICovXG4hKGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5sdXh5PWUoKX0pKHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3dyYXBwZXI6XCIjbHV4eVwiLHRhcmdldHM6XCIubHV4eS1lbFwiLHdyYXBwZXJTcGVlZDouMDgsdGFyZ2V0U3BlZWQ6LjAyLHRhcmdldFBlcmNlbnRhZ2U6LjF9LGU9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZTt2YXIgaT13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSxzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXt9LGU9MCxpPWFyZ3VtZW50cy5sZW5ndGg7ZTxpO2UrKyl7dmFyIHM9YXJndW1lbnRzW2VdOyEoZnVuY3Rpb24oZSl7Zm9yKHZhciBpIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShpKSYmKHRbaV09ZVtpXSl9KShzKX1yZXR1cm4gdH0scj1mdW5jdGlvbigpe3RoaXMuVGFyZ2V0cz1bXSx0aGlzLlRhcmdldHNMZW5ndGg9MCx0aGlzLndyYXBwZXI9XCJcIix0aGlzLndpbmRvd0hlaWdodD0wLHRoaXMud2FwcGVyT2Zmc2V0PTB9O3JldHVybiByLnByb3RvdHlwZT17aXNBbmltYXRlOiExLGlzUmVzaXplOiExLHNjcm9sbElkOlwiXCIscmVzaXplSWQ6XCJcIixpbml0OmZ1bmN0aW9uKGUpe2lmKHRoaXMuc2V0dGluZ3M9cyh0LGV8fHt9KSx0aGlzLndyYXBwZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLndyYXBwZXIpLFwidW5kZWZpbmVkXCI9PT10aGlzLndyYXBwZXIpcmV0dXJuITE7dGhpcy50YXJnZXRzPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy50YXJnZXRzKSxkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodD10aGlzLndyYXBwZXIuY2xpZW50SGVpZ2h0K1wicHhcIix0aGlzLndpbmRvd0hlaWdodD13aW5kb3cuY2xpZW50SGVpZ2h0LHRoaXMuYXR0YWNoRXZlbnQoKSx0aGlzLmFwcGx5KHRoaXMudGFyZ2V0cyx0aGlzLndyYXBwZXIpLHRoaXMuYW5pbWF0ZSgpLHRoaXMucmVzaXplKCl9LGFwcGx5OmZ1bmN0aW9uKHQsZSl7dGhpcy53cmFwcGVySW5pdCgpLHRoaXMudGFyZ2V0c0xlbmd0aD10Lmxlbmd0aDtmb3IodmFyIGk9MDtpPHRoaXMudGFyZ2V0c0xlbmd0aDtpKyspe3ZhciBzPXtvZmZzZXQ6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9mZnNldFwiKSxzcGVlZFg6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNwZWVkLXhcIiksc3BlZWRZOnRbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zcGVlZC1ZXCIpLHBlcmNlbnRhZ2U6dFtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmNlbnRhZ2VcIiksaG9yaXpvbnRhbDp0W2ldLmdldEF0dHJpYnV0ZShcImRhdGEtaG9yaXpvbnRhbFwiKX07dGhpcy50YXJnZXRzSW5pdCh0W2ldLHMpfX0sd3JhcHBlckluaXQ6ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIuc3R5bGUud2lkdGg9XCIxMDAlXCIsdGhpcy53cmFwcGVyLnN0eWxlLnBvc2l0aW9uPVwiZml4ZWRcIn0sdGFyZ2V0c0luaXQ6ZnVuY3Rpb24odCxlKXt0aGlzLlRhcmdldHMucHVzaCh7ZWxtOnQsb2Zmc2V0OmUub2Zmc2V0P2Uub2Zmc2V0OjAsaG9yaXpvbnRhbDplLmhvcml6b250YWw/ZS5ob3Jpem9udGFsOjAsdG9wOjAsbGVmdDowLHNwZWVkWDplLnNwZWVkWD9lLnNwZWVkWDoxLHNwZWVkWTplLnNwZWVkWT9lLnNwZWVkWToxLHBlcmNlbnRhZ2U6ZS5wZXJjZW50YWdlP2UucGVyY2VudGFnZTowfSl9LHNjcm9sbDpmdW5jdGlvbigpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO3RoaXMuc2Nyb2xsVG9wPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3B8fGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO3RoaXMuc2Nyb2xsVG9wLHRoaXMud2luZG93SGVpZ2h0O3RoaXMud3JhcHBlclVwZGF0ZSh0aGlzLnNjcm9sbFRvcCk7Zm9yKHZhciB0PTA7dDx0aGlzLlRhcmdldHMubGVuZ3RoO3QrKyl0aGlzLnRhcmdldHNVcGRhdGUodGhpcy5UYXJnZXRzW3RdKX0sYW5pbWF0ZTpmdW5jdGlvbigpe3RoaXMuc2Nyb2xsKCksdGhpcy5zY3JvbGxJZD1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKX0sd3JhcHBlclVwZGF0ZTpmdW5jdGlvbigpe3RoaXMud2FwcGVyT2Zmc2V0Kz0odGhpcy5zY3JvbGxUb3AtdGhpcy53YXBwZXJPZmZzZXQpKnRoaXMuc2V0dGluZ3Mud3JhcHBlclNwZWVkLHRoaXMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm09XCJ0cmFuc2xhdGUzZCgwLFwiK01hdGgucm91bmQoMTAwKi10aGlzLndhcHBlck9mZnNldCkvMTAwK1wicHggLDApXCJ9LHRhcmdldHNVcGRhdGU6ZnVuY3Rpb24odCl7dC50b3ArPSh0aGlzLnNjcm9sbFRvcCpOdW1iZXIodGhpcy5zZXR0aW5ncy50YXJnZXRTcGVlZCkqTnVtYmVyKHQuc3BlZWRZKS10LnRvcCkqdGhpcy5zZXR0aW5ncy50YXJnZXRQZXJjZW50YWdlLHQubGVmdCs9KHRoaXMuc2Nyb2xsVG9wKk51bWJlcih0aGlzLnNldHRpbmdzLnRhcmdldFNwZWVkKSpOdW1iZXIodC5zcGVlZFgpLXQubGVmdCkqdGhpcy5zZXR0aW5ncy50YXJnZXRQZXJjZW50YWdlO3ZhciBlPXBhcnNlSW50KHQucGVyY2VudGFnZSktdC50b3AtcGFyc2VJbnQodC5vZmZzZXQpLGk9TWF0aC5yb3VuZCgtMTAwKmUpLzEwMCxzPTA7aWYodC5ob3Jpem9udGFsKXt2YXIgcj1wYXJzZUludCh0LnBlcmNlbnRhZ2UpLXQubGVmdC1wYXJzZUludCh0Lm9mZnNldCk7cz1NYXRoLnJvdW5kKC0xMDAqcikvMTAwfXQuZWxtLnN0eWxlLnRyYW5zZm9ybT1cInRyYW5zbGF0ZTNkKFwiK3MrXCJweCAsXCIraStcInB4ICwwKVwifSxyZXNpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3Qud2luZG93SGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodHx8MCxwYXJzZUludCh0LndyYXBwZXIuY2xpZW50SGVpZ2h0KSE9cGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQpJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQ9dC53cmFwcGVyLmNsaWVudEhlaWdodCtcInB4XCIpLHQucmVzaXplSWQ9ZSh0LnJlc2l6ZS5iaW5kKHQpKX0sYXR0YWNoRXZlbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKGZ1bmN0aW9uKCl7dC5pc1Jlc2l6ZXx8KGkodC5yZXNpemVJZCksaSh0LnNjcm9sbElkKSx0LmlzUmVzaXplPSEwLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5pc1Jlc2l6ZT0hMSx0LnJlc2l6ZUlkPWUodC5yZXNpemUuYmluZCh0KSksdC5zY3JvbGxJZD1lKHQuYW5pbWF0ZS5iaW5kKHQpKX0pLDIwMCkpfSkpfX0sbmV3IHJ9KSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG5pbXBvcnQgeyBhY3RpdmFyVGlkeU1lbnUsIGFjdGl2YXJNTWVudUxpZ2h0IH0gZnJvbSAnLi92ZW5kb3JzJztcclxuXHJcbnZhciBsdXh5ID0gcmVxdWlyZSgnbHV4eS5qcycpO1xyXG5cclxud2luZG93Lmx1eHkgPSBsdXh5O1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKGUpe1xyXG4gICAgXHJcbiAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL21lbnVzL21lbnUxLmh0bWwnLCAncGxhY2Vob2xkZXJfaGVhZGVyLS1kZXNrdG9wJywgYWN0aXZhclRpZHlNZW51KTtcclxuXHJcbiAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL21lbnVzL21lbnUtbW9iaWxlLTEuaHRtbCcsICdwbGFjZWhvbGRlcl9oZWFkZXItLW1vYmlsZScsIGFjdGl2YXJNTWVudUxpZ2h0KTtcclxuXHJcbiAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL2xheW91dHMvcGFyYWxsYXgtbHV4eS0xLmh0bWwnLCAnbWFpbicsICgpPT57bHV4eS5pbml0KCk7fSlcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29tcG9uZW50KHVybCwgdGFyZ2V0LCBjYWxsYmFjayl7XHJcbiAgICB3aW5kb3cuZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYoZWwgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuY29tcG9uZW50TG9hZGVyID0gZnVuY3Rpb24gY2FyZ2Fkb3Iob3BjaW9uZXMpe1xyXG5cclxuICAgIHN3aXRjaChvcGNpb25lcy5uYXYpe1xyXG4gICAgICAgIGNhc2UgXCJtZW51MVwiOlxyXG4gICAgICAgICAgICBsb2FkQ29tcG9uZW50KCdjb21wb25lbnRzL21lbnVzL21lbnUxLmh0bWwnLCAncGxhY2Vob2xkZXJfaGVhZGVyLS1kZXNrdG9wJywgYWN0aXZhclRpZHlNZW51KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgXCJtZW51LXRlc3RcIjpcclxuICAgICAgICAgICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51LXRlc3QuaHRtbCcsICdwbGFjZWhvbGRlcl9oZWFkZXItLWRlc2t0b3AnLCBhY3RpdmFyVGlkeU1lbnUpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKG9wY2lvbmVzLm5hdk1vYmlsZSl7XHJcbiAgICAgICAgY2FzZSBcIm1lbnUtbW9iaWxlLTFcIjpcclxuICAgICAgICAgICAgbG9hZENvbXBvbmVudCgnY29tcG9uZW50cy9tZW51cy9tZW51LW1vYmlsZS0xLmh0bWwnLCAncGxhY2Vob2xkZXJfaGVhZGVyLS1tb2JpbGUnLCAoKT0+e30pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2gob3BjaW9uZXMubGF5b3V0KXtcclxuICAgICAgICBjYXNlIFwicGFyYWxsYXgtbHV4eS0xXCI6XHJcbiAgICAgICAgICAgIGxvYWRDb21wb25lbnQoJ2NvbXBvbmVudHMvbGF5b3V0cy9wYXJhbGxheC1sdXh5LTEuaHRtbCcsICdtYWluJywgKCk9PntsdXh5LmluaXQoKTt9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudGVzIGNhcmdhZG9zXCIpXHJcblxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=