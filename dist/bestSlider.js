/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bestSlider"] = factory();
	else
		root["bestSlider"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Slider function factory\n */\nconst bestSlider = (args = {}) => {\n  // Internal Objects\n  let config = {\n    initialSlide: 1,\n    slider: null,\n    slides: null,\n    previousButton: null,\n    nextButton: null,\n    wrapAround: false,\n  };\n\n  let state = {\n    activeSlide: null,\n    totalSlides: null,\n  };\n\n  let callbacks = [];\n\n  const newIndexIsOutsideOfRange = (newIndex) => {\n    const { totalSlides } = state;\n\n    return newIndex < totalSlides || newIndex > totalSlides;\n  };\n\n  const getSlideIndex = (changeAmount) => {\n    const { activeSlide, totalSlides } = state;\n    const { wrapAround } = config;\n\n    let tempIndex = activeSlide + changeAmount;\n    let newIndex = activeSlide;\n\n    console.log(tempIndex);\n\n    if (newIndexIsOutsideOfRange(tempIndex) && wrapAround) {\n      if (tempIndex < 1) {\n        newIndex = totalSlides;\n      } else {\n        newIndex = 1;\n      }\n    } else if (!wrapAround) {\n      newIndex = tempIndex;\n    }\n\n    return newIndex;\n  };\n\n  const isElement = (element) => {\n    return element instanceof Element || element instanceof HTMLDocument;\n  };\n\n  // Set the slider to a specific slide\n  const setSlide = (slide = config.initialSlide) => {\n    state.activeSlide = slide;\n\n    doCallbacks();\n  };\n\n  const previous = () => {\n    setSlide(getSlideIndex(-1));\n  };\n\n  const next = () => {\n    setSlide(getSlideIndex(1));\n  };\n\n  // Initialize\n  const init = () => {\n    // Merge passed options with default configuration\n    config = { ...config, ...args };\n    updateInitialState();\n    doCallbacks();\n\n    return state;\n  };\n\n  // Update initial state\n  const updateInitialState = () => {\n    const { slider, initialSlide } = config;\n\n    if (!slider || !isElement(slider)) return;\n\n    const totalSlides = slider.childElementCount;\n    state.totalSlides = totalSlides;\n    setSlide();\n  };\n\n  // Add a callback that will be triggered on change\n  const addCallback = (newCallback) => {\n    callbacks.push(newCallback);\n  };\n\n  // Do all callbacks in the queue\n  const doCallbacks = () =>\n    callbacks.length && callbacks.forEach((callback) => callback(state));\n\n  if (!init()) return false;\n\n  return {\n    config,\n    state,\n    callbacks,\n    addCallback,\n    init,\n    setSlide,\n    previous,\n    next,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bestSlider);\n\n\n//# sourceURL=webpack://bestSlider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});