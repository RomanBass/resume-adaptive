/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/modules/button-contacts.js":
/*!**********************************************!*\
  !*** ./source/js/modules/button-contacts.js ***!
  \**********************************************/
/***/ (function() {

const contactsSection = document.querySelector('.footer');
const contactsButton = document.querySelector('.intro-hobby');

scrollToContacts = () => {
  contactsSection.scrollIntoView({ behavior: "smooth" });
}

contactsButton.addEventListener('click', scrollToContacts);


/***/ }),

/***/ "./source/js/modules/button-up.js":
/*!****************************************!*\
  !*** ./source/js/modules/button-up.js ***!
  \****************************************/
/***/ (function() {

////////////// кнопка ВВЕРХ /////////////////////

const UpButton = {
  VISIBLE_SCROLL_HEIGHT: 100,
  VISIBLE_CURSOR: "pointer",
  VISIBLE_OPACITY: 1,
  HIDEN_CURSOR: "auto",
  HIDEN_OPACITY: 0
};

const upButton = document.querySelector('.button--up');
const bodyElement = document.querySelector('.body');

// скрытие кнопки ВВЕРХ
hideUpButton = () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT) {
    upButton.style.opacity = UpButton.VISIBLE_OPACITY;
    upButton.style.cursor = UpButton.VISIBLE_CURSOR;
  } else {
    upButton.style.opacity = UpButton.HIDEN_OPACITY;
    upButton.style.cursor = UpButton.HIDEN_CURSOR;
  }
}

window.onscroll = () => {
  hideUpButton();
}

// прокрутка до верху по клику кнопки ВВЕРХ
scrollToTop = () => {
  bodyElement.scrollIntoView({ behavior: "smooth" });
}

upButton.addEventListener('click', scrollToTop);

// реакция на мышь
upButton.addEventListener('mouseenter', () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT){
  upButton.style.opacity = 0.7;
  }
});

upButton.addEventListener('mouseleave', () => {
  if (document.documentElement.scrollTop > UpButton.VISIBLE_SCROLL_HEIGHT){
  upButton.style.opacity = 1;
  }
});


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************************!*\
  !*** ./source/js/modules/main.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_contacts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-contacts.js */ "./source/js/modules/button-contacts.js");
/* harmony import */ var _button_contacts_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_contacts_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-up.js */ "./source/js/modules/button-up.js");
/* harmony import */ var _button_up_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_up_js__WEBPACK_IMPORTED_MODULE_1__);



}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map