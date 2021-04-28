/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_thai_beach_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/thai-beach.png */ "./src/images/thai-beach.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_thai_beach_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Remove margin from paragraph elements.\n */\np {\n  margin: 0; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.login-page {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-top: 9vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  border-top: 1em solid rgba(18, 27, 145, 0.522);\n  border-bottom: 1em solid rgba(18, 27, 145, 0.522); }\n  @media screen and (max-width: 800px) {\n    .login-page {\n      margin-top: 18vw; } }\n  @media screen and (max-width: 500px) {\n    .login-page {\n      margin-top: 23vw; } }\n\n.login-container {\n  display: grid;\n  grid-template-rows: 45% 45%;\n  height: 100%;\n  width: 50%; }\n  @media screen and (max-width: 400px) {\n    .login-container {\n      width: 80%; } }\n\n.logo-big {\n  align-self: center;\n  justify-self: center;\n  height: 100%; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  padding: 1vw;\n  background-color: rgba(249, 215, 78, 0.489);\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 0.3em 0.1em rgba(0, 0, 0, 0.2), 0.5em 0.5em 0.5em 0.2em rgba(0, 0, 0, 0.2);\n  color: rgba(4, 5, 5, 0.921); }\n  @media screen and (max-width: 1050px) {\n    .login-form {\n      width: 80%; } }\n  @media screen and (max-width: 800px) {\n    .login-form {\n      width: 100%; } }\n\n.login-input {\n  width: 50%;\n  padding: 0.25vw;\n  border: 1px solid rgba(10, 46, 85, 0.921); }\n  @media screen and (max-width: 1050px) {\n    .login-input {\n      width: 50%; } }\n\n.login-button {\n  width: 5em;\n  align-self: center;\n  cursor: pointer;\n  border: 1px solid rgba(10, 46, 85, 0.921); }\n  .login-button:hover {\n    background-color: rgba(104, 202, 255, 0.811); }\n\n.modal {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  padding: 1% 1% 1% 1%;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.error-modal {\n  display: grid;\n  grid-template-rows: 20% 60%;\n  z-index: 1000;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 15%;\n  margin: 20% auto;\n  border: 1px solid #888888;\n  border-radius: 7px;\n  background-color: #fefefed9;\n  font-size: 1.5rem; }\n  @media screen and (max-width: 800px) {\n    .error-modal {\n      margin-top: 50vw;\n      width: 70%;\n      font-size: 1rem; } }\n  @media screen and (max-width: 500px) {\n    .error-modal {\n      margin-top: 70vw;\n      width: 80%; } }\n  .error-modal p {\n    justify-self: center; }\n\n.cost-modal {\n  display: grid;\n  grid-template-rows: 20% 40% 40%;\n  width: 25vw;\n  height: 15vw;\n  margin: 18vw auto;\n  border: 1px solid #888888;\n  background-color: #fefefed2; }\n  .cost-modal label {\n    justify-self: center;\n    align-self: center;\n    font-size: 1.5vw; }\n  .cost-modal p {\n    justify-self: center;\n    font-size: 1.75vw; }\n\n.booking-modal {\n  display: grid;\n  grid-template-rows: 20% 60%;\n  justify-content: center;\n  align-items: center;\n  width: 50vw;\n  height: 15vw;\n  margin: 18vw auto;\n  border: 1px solid #888888;\n  background-color: #fefefed9;\n  font-size: 2vw; }\n  .booking-modal p {\n    margin: 5vw;\n    justify-self: center; }\n\n.close {\n  justify-self: flex-end;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #aaa;\n  margin-top: 1vw;\n  margin-right: 1vw; }\n  .close:hover {\n    transition: .3s ease; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  z-index: 0;\n  display: grid;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: #C6FFDD;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  font-family: \"Rubik\", sans-serif; }\n\nmain {\n  display: flex;\n  justify-content: center;\n  height: 100%; }\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 94%;\n  height: 100%; }\n\n/** four card width **/\n.grid-title {\n  display: flex;\n  align-items: center;\n  height: 3vw;\n  margin: 4% 0 4% 1.5%;\n  font-size: 3.5vw;\n  color: rgba(21, 28, 63, 0.756); }\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-row-gap: 1.5%;\n  justify-content: space-evenly;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 5%; }\n\n/** three card width **/\n@media screen and (min-width: 626px) and (max-width: 1050px) {\n  .grid-title {\n    font-size: 4vw;\n    margin: 5% 0 5% 1.5%; }\n  .card-grid {\n    grid-template-columns: 31% 31% 31%;\n    grid-row-gap: 1.75%; } }\n\n/** two card width **/\n@media screen and (min-width: 375px) and (max-width: 625px) {\n  .grid-title {\n    margin: 5% 0 5% 2.7%;\n    font-size: 4.5vw; }\n  .card-grid {\n    grid-template-columns: 45% 45%;\n    grid-column-gap: 1.5%;\n    grid-row-gap: 1.75%; } }\n\n/** one card width **/\n@media screen and (max-width: 375px) {\n  .grid-title {\n    margin: 8% 0 7% 10%;\n    font-size: 5.5vw; }\n  .card-grid {\n    grid-template-columns: 80%;\n    grid-row-gap: 1%; } }\n\n.hidden {\n  display: none; }\n\n.noscroll {\n  overflow: hidden; }\n\nheader {\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  min-height: 18vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  border-bottom: 0.6em solid rgba(6, 10, 21, 0.418);\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.2em 0.1em rgba(0, 0, 0, 0.2); }\n  @media screen and (max-width: 800px) {\n    header {\n      height: 30vw; } }\n\n.nav-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n  margin-bottom: 1%; }\n\n.logo-container {\n  max-height: 80%;\n  padding: 1em; }\n\n.logo {\n  height: 80%;\n  max-width: 9vw;\n  max-height: 9vw;\n  justify-self: center;\n  align-self: center;\n  cursor: pointer; }\n\n.nav-center {\n  display: grid;\n  grid-template-rows: 60% 40%;\n  align-items: space-between; }\n  .nav-center .title {\n    justify-self: center;\n    align-self: center;\n    margin: 0%;\n    font-size: 4.5vw;\n    color: rgba(8, 24, 41, 0.715); }\n\n.nav-buttons {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  margin-bottom: 2%; }\n  .nav-buttons button {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    justify-self: center;\n    width: 13vw;\n    height: 3.25vw;\n    padding: 3%;\n    margin: 1% 3% 1% 3%;\n    color: #ffffff;\n    background-color: rgba(48, 59, 114, 0.291);\n    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.2em 0.1em rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(159, 249, 174, 0.534);\n    font-size: 1.3vw;\n    cursor: pointer; }\n    .nav-buttons button:hover {\n      background-color: rgba(142, 238, 240, 0.212); }\n  .nav-buttons i {\n    margin: 0.5em; }\n\n.active {\n  background-color: #11e31c; }\n\n.nav-right {\n  display: grid;\n  grid-template-rows: 40% 40% 20%;\n  margin: 7% 7% 5% 0; }\n  .nav-right button {\n    justify-self: flex-end;\n    align-self: flex-end;\n    width: 5vw;\n    height: 2vw;\n    font-size: 0.8vw;\n    color: #ffffff;\n    background-color: rgba(21, 63, 57, 0.479);\n    border: 1px solid rgba(215, 247, 220, 0.671);\n    cursor: pointer; }\n    .nav-right button:hover {\n      background-color: rgba(62, 152, 221, 0.315); }\n\n.welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  max-height: 4vw;\n  font-size: 1.3vw;\n  font-weight: bold;\n  color: rgba(21, 28, 63, 0.756); }\n\n.total-spent {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  justify-self: center;\n  align-self: center;\n  align-items: center;\n  width: 12vw;\n  height: 3.5vw;\n  background-color: rgba(249, 215, 78, 0.489);\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.2em 0.1em rgba(0, 0, 0, 0.2);\n  color: rgba(1, 3, 5, 0.945); }\n\n.total-title {\n  font-size: 1vw;\n  font-weight: bold;\n  color: rgba(1, 3, 5, 0.945); }\n\n.total-amt {\n  font-size: 1.2vw;\n  color: rgba(12, 66, 17, 0.883); }\n\n.booking-section {\n  display: grid;\n  grid-template-rows: 30% 70%;\n  margin: 3% 7% 1% 7%;\n  max-height: 12vw;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 0.3em 0.1em rgba(0, 0, 0, 0.2), 0.5em 0.5em 0.5em 0.2em rgba(0, 0, 0, 0.2);\n  background-image: linear-gradient(#100638d5, #231a8dde, #1431c4e7);\n  color: rgba(21, 28, 63, 0.756); }\n  @media screen and (max-width: 800px) {\n    .booking-section {\n      max-height: 50vw;\n      height: 17vw; } }\n\n.booking-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2%;\n  font-size: 2.5vw;\n  font-weight: bold;\n  color: #fcf6f6e4; }\n\n.booking-bottom {\n  display: grid;\n  grid-template-columns: 18% 18% 18% 18% 18%;\n  justify-content: space-around;\n  margin: 1% 1% 1% 2%; }\n  .booking-bottom input, .booking-bottom select {\n    max-height: 1.75vw;\n    max-width: 15vw;\n    margin-top: 5%;\n    font-size: 1vw; }\n  .booking-bottom label {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 8%;\n    font-size: 1.25vw;\n    color: #fcf6f6e4; }\n\n.choice {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: center;\n  height: 100%; }\n\n.booking-btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: 3%; }\n  .booking-btns button {\n    margin: 2%;\n    padding: 2% 3% 2% 3%;\n    font-size: 1vw;\n    cursor: pointer; }\n    .booking-btns button:hover {\n      background-color: rgba(196, 247, 248, 0.774); }\n\n/** four card width **/\n.card {\n  display: grid;\n  grid-template-rows: 40% 60%;\n  width: auto;\n  height: 33vw;\n  border-radius: 3px;\n  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.3em 0.3em 0.1em rgba(0, 0, 0, 0.2), 0.5em 0.5em 0.5em 0.2em rgba(0, 0, 0, 0.2); }\n\n.card-top {\n  display: grid;\n  grid-template-rows: 60% 40%;\n  padding: 1%;\n  border-radius: 3px 3px 0 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden; }\n\n.arrow {\n  background-repeat: no-repeat;\n  width: 3vw;\n  height: 3vw;\n  padding: 5% 0 0 5%; }\n\n.card-top-lower-half {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 3%; }\n  .card-top-lower-half h2 {\n    justify-items: center;\n    padding: 3% 5% 3% 5%;\n    margin-bottom: 1%;\n    font-size: 1.5vw;\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.671);\n    background-color: rgba(160, 225, 245, 0.692);\n    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0.3em 0.2em 0.1em rgba(0, 0, 0, 0.2); }\n\n.card-bottom {\n  display: grid;\n  grid-template-rows: 23% 23% 23% 23%;\n  align-items: flex-end;\n  padding: 1.6vw;\n  border-radius: 0 0 3px 3px;\n  background: rgba(255, 255, 255, 0.829); }\n\n.trip-info {\n  display: grid;\n  grid-template-columns: 60% 40%;\n  width: 100%;\n  margin: 5% 1% 3% 1%; }\n  .trip-info h3 {\n    font-size: 1.25vw;\n    margin: 0; }\n\n.data-small {\n  font-size: 1.15vw;\n  color: #330aad; }\n\n.no-match {\n  font-size: 2vw;\n  color: #ffffffa1; }\n\n/** three card width **/\n@media screen and (max-width: 1050px) {\n  .card {\n    height: 44vw; }\n  .arrow {\n    width: 4vw;\n    height: 4vw; }\n  .card-top-lower-half h2 {\n    font-size: 2vw; }\n  .trip-info h3 {\n    font-size: 1.75vw; }\n  .data-small {\n    font-size: 1.75vw; } }\n\n/** two card width **/\n@media screen and (max-width: 625px) {\n  .card {\n    height: 60vw; }\n  .arrow {\n    width: 6vw;\n    height: 6vw; }\n  .card-top-lower-half h2 {\n    font-size: 2.8vw; }\n  .trip-info h3 {\n    font-size: 2.75vw; }\n  .data-small {\n    font-size: 2.5vw; } }\n\n/** one card width **/\n@media screen and (max-width: 375px) {\n  .card {\n    height: 110vw; }\n  .arrow {\n    width: 8vw;\n    height: 8vw; }\n  .card-top-lower-half h2 {\n    font-size: 4.5vw; }\n  .card-bottom {\n    justify-content: center;\n    align-items: center;\n    padding: 3.5vw 6vw 0 0; }\n  .trip-info {\n    margin: 0; }\n    .trip-info h3 {\n      font-size: 4vw; }\n  .data-small {\n    font-size: 4vw; } }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_login.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_modal.scss","webpack://./src/css/_main.scss","webpack://./src/css/_navbar.scss","webpack://./src/css/_booking.scss","webpack://./src/css/_card.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Remove margin from paragraph elements.\n */\n\np {\n  margin: 0;\n}\n\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","@import '_normalize';\n@import '_variables';\n@import '_login';\n@import '_modal';\n@import '_main';\n@import '_navbar';\n@import '_booking';\n@import '_card';",".login-page {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  margin-top: 9vw;\n  background-image: url('../images/thai-beach.png');\n  border-top: 1em solid rgba(18, 27, 145, 0.522);\n  border-bottom: 1em solid rgba(18, 27, 145, 0.522);\n\n  @media screen and (max-width: 800px) {\n    margin-top: 18vw;\n  }\n\n  @media screen and (max-width: 500px) {\n    margin-top: 23vw;\n  }\n}\n\n.login-container {\n  display: grid;\n  grid-template-rows: 45% 45%;\n  height: 100%;\n  width: 50%;\n\n  @media screen and (max-width: 400px) {\n    width: 80%;\n  }\n}\n\n.logo-big {\n  align-self: center;\n  justify-self: center;\n  height: 100%;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  justify-content: space-around;\n  align-items: center;\n  width: 60%;\n  padding: 1vw;\n  background-color: $primary-accent;\n  box-shadow: $shadow-heavy;\n  color: rgba(4, 5, 5, 0.921);\n\n  @media screen and (max-width: 1050px) {\n    width: 80%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n}\n\n.login-input {\n  width: 50%;\n  padding: 0.25vw;\n  border: 1px solid rgba(10, 46, 85, 0.921);\n\n  @media screen and (max-width: 1050px) {\n    width: 50%;\n  }\n}\n\n.login-button {\n  width: 5em;\n  align-self: center;\n  cursor: pointer;\n  border: 1px solid rgba(10, 46, 85, 0.921);\n\n  &:hover {\n    background-color: rgba(104, 202, 255, 0.811);\n  }\n}","// COLORS\n\n$primary-background: linear-gradient(#ffffff, #ecf6f5);\n$primary-header: linear-gradient(#eaf6fae1, #53b9e9);\n$primary-accent: rgba(249, 215, 78, 0.489);\n$primary-dark: rgba(21, 28, 63, 0.756);\n\n$white: #ffffff;\n$offwhite: #ffffffa1;\n\n$shadow-heavy: inset 0 -3em 3em rgba(0, 0, 0, 0.1),\n0.3em 0.3em 0.3em 0.1em rgba(0, 0, 0, 0.2),\n0.5em 0.5em 0.5em 0.2em rgba(0, 0, 0, 0.2);\n\n$shadow-light: inset 0 -3em 3em rgba(0, 0, 0, 0.1),\n0.3em 0.2em 0.1em rgba(0, 0, 0, 0.2);\n\n// FONTS\n\n$primary-font: 'Rubik', sans-serif;",".modal {\n  display: none;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  padding: 1% 1% 1% 1%;\n  background-color: rgba(0,0,0,0.4);\n}\n\n.error-modal {\n  display: grid;\n  grid-template-rows: 20% 60%;\n  z-index: 1000;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 15%;\n  margin: 20% auto;\n  border: 1px solid rgb(136, 136, 136);\n  border-radius: 7px;\n  background-color: #fefefed9;\n  font-size: 1.5rem;\n\n  @media screen and (max-width: 800px) {\n    margin-top: 50vw;\n    width: 70%;\n    font-size: 1rem;\n  }\n\n  @media screen and (max-width: 500px) {\n    margin-top: 70vw;\n    width: 80%;\n  }\n\n  p {\n    justify-self: center;\n  }\n}\n\n.cost-modal {\n  display: grid;\n  grid-template-rows: 20% 40% 40%;\n  width: 25vw;\n  height: 15vw;\n  margin: 18vw auto;\n  border: 1px solid rgb(136, 136, 136);\n  background-color: #fefefed2;\n\n  label {\n    justify-self: center;\n    align-self: center;\n    font-size: 1.5vw;\n  }\n\n  p {\n    justify-self: center;\n    font-size: 1.75vw;\n  }\n}\n\n.booking-modal {\n  display: grid;\n  grid-template-rows: 20% 60%;\n  justify-content: center;\n  align-items: center;\n  width: 50vw;\n  height: 15vw;\n  margin: 18vw auto;\n  border: 1px solid rgb(136, 136, 136);\n  background-color: #fefefed9;\n  font-size: 2vw;\n\n  p {\n    margin: 5vw;\n    justify-self: center;\n  }\n}\n\n.close {\n  justify-self: flex-end;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #aaa;\n  margin-top: 1vw;\n  margin-right: 1vw;\n\n  &:hover {\n    transition: .3s ease;\n  }\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}","// MAIN SECTION\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  z-index: 0;\n  display: grid;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: #C6FFDD;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n  font-family: $primary-font;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\n\n// CARD GRID\n\n.main-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 94%;\n  height: 100%;\n}\n\n/** four card width **/\n\n.grid-title {\n  display: flex;\n  align-items: center;\n  height: 3vw;\n  margin: 4% 0 4% 1.5%;\n  font-size: 3.5vw;\n  color: $primary-dark;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  grid-row-gap: 1.5%;\n  justify-content: space-evenly;\n  align-content: flex-start;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 5%;\n}\n\n/** three card width **/\n\n@media screen and (min-width: 626px) and (max-width: 1050px) {\n  .grid-title {\n    font-size: 4vw;\n    margin: 5% 0 5% 1.5%;\n  }\n\n  .card-grid {\n    grid-template-columns: 31% 31% 31%;\n    grid-row-gap: 1.75%;\n  }\n}\n\n/** two card width **/\n\n@media screen and (min-width: 375px) and (max-width: 625px) {\n  .grid-title {\n    margin: 5% 0 5% 2.7%;\n    font-size: 4.5vw;\n  }\n\n  .card-grid {\n    grid-template-columns: 45% 45%;\n    grid-column-gap: 1.5%;\n    grid-row-gap: 1.75%;\n  }\n}\n\n/** one card width **/\n\n@media screen and (max-width: 375px) {\n  .grid-title {\n    margin: 8% 0 7% 10%;\n    font-size: 5.5vw;\n  }\n  \n  .card-grid {\n    grid-template-columns: 80%;\n    grid-row-gap: 1%;\n  }\n}\n\n// TOGGLED CLASSES\n\n.hidden {\n  display: none;\n}\n\n.noscroll {\n  overflow: hidden;\n}","// NAV BAR\n\nheader {\n  display: grid;\n  grid-template-columns: 20% 60% 20%;\n  min-height: 18vw;\n  background-image: url('../images/thai-beach.png');\n  background-size: cover;\n  border-bottom: 0.6em solid rgba(6, 10, 21, 0.418);\n  box-shadow: $shadow-light;\n\n  @media screen and (max-width: 800px) {\n    height: 30vw;\n  }\n}\n\n// LEFT SIDE\n\n.nav-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n  margin-bottom: 1%;\n}\n\n.logo-container {\n  max-height: 80%;\n  padding: 1em;\n}\n\n.logo {\n  height: 80%;\n  max-width: 9vw;\n  max-height: 9vw;\n  justify-self: center;\n  align-self: center;\n  cursor: pointer;\n}\n\n// CENTER\n\n.nav-center {\n  display: grid;\n  grid-template-rows: 60% 40%;\n  align-items: space-between;\n\n  .title {\n    justify-self: center;\n    align-self: center;\n    margin: 0%;\n    font-size: 4.5vw;\n    color: rgba(8, 24, 41, 0.715);\n  }\n}\n\n.nav-buttons {\n  display: grid;\n  grid-template-columns: 23% 23% 23% 23%;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: flex-end;\n  margin-bottom: 2%;\n\n  button {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    justify-self: center;\n    width: 13vw;\n    height: 3.25vw;\n    padding: 3%;\n    margin: 1% 3% 1% 3%;\n    color: $white;\n    background-color: rgba(48, 59, 114, 0.291);\n    box-shadow: $shadow-light;\n    border: 1px solid rgba(159, 249, 174, 0.534);\n    font-size: 1.3vw;\n    cursor: pointer;\n\n     &:hover {\n      background-color: rgba(142, 238, 240, 0.212);\n    }\n  }\n\n  i {\n    margin: 0.5em;\n  }\n}\n\n.active {\n  background-color:rgb(17, 227, 28);\n}\n\n// RIGHT SIDE\n\n.nav-right {\n  display: grid;\n  grid-template-rows: 40% 40% 20%;\n  margin: 7% 7% 5% 0;\n\n  button {\n    justify-self: flex-end;\n    align-self: flex-end;\n    width: 5vw;\n    height: 2vw;\n    font-size: 0.8vw;\n    color: $white;\n    background-color: rgba(21, 63, 57, 0.479);\n    border: 1px solid rgba(215, 247, 220, 0.671);\n    cursor: pointer;\n    \n    &:hover {\n      background-color: rgba(62, 152, 221, 0.315);\n    }\n  }\n}\n\n.welcome {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  width: 100%;\n  max-height: 4vw;\n  font-size: 1.3vw;\n  font-weight: bold;\n  color: $primary-dark;\n}\n\n.total-spent {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  justify-self: center;\n  align-self: center;\n  align-items: center;\n  width: 12vw;\n  height: 3.5vw;\n  background-color: $primary-accent;\n  box-shadow: $shadow-light;\n  color: rgba(1, 3, 5, 0.945);\n}\n\n.total-title {\n  font-size: 1vw;\n  font-weight: bold;\n  color: rgba(1, 3, 5, 0.945);\n}\n\n.total-amt {\n  font-size: 1.2vw;\n  color: rgba(12, 66, 17, 0.883);\n}","// BOOKING CONTAINER\n\n.booking-section {\n  display: grid;\n  grid-template-rows: 30% 70%;\n  margin: 3% 7% 1% 7%;\n  max-height: 12vw;\n  box-shadow: $shadow-heavy;\n  background-image: linear-gradient(#100638d5, #231a8dde, #1431c4e7);\n  color: $primary-dark;\n\n  @media screen and (max-width: 800px) {\n    max-height: 50vw;\n    height: 17vw;\n  }\n}\n\n.booking-top {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2%;\n  font-size: 2.5vw;\n  font-weight: bold;\n  color: #fcf6f6e4;\n}\n\n.booking-bottom {\n  display: grid;\n  grid-template-columns: 18% 18% 18% 18% 18%;\n  justify-content: space-around;\n  margin: 1% 1% 1% 2%;\n\n  input, select {\n    max-height: 1.75vw;\n    max-width: 15vw;\n    margin-top: 5%;\n    font-size: 1vw;\n  }\n\n  label {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin-bottom: 8%;\n    font-size: 1.25vw;\n    color: #fcf6f6e4;\n  }\n}\n\n.choice {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  justify-content: center;\n  height: 100%;\n}\n\n.booking-btns {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-left: 3%;\n\n  button {\n    margin: 2%;\n    padding: 2% 3% 2% 3%;\n    font-size: 1vw;\n    cursor: pointer;\n    \n    &:hover {\n      background-color: rgba(196, 247, 248, 0.774);\n    }\n  }\n}\n","// TRIP CARD\n\n/** four card width **/\n.card {\n  display: grid;\n  grid-template-rows: 40% 60%;\n  width: auto;\n  height: 33vw;\n  border-radius: 3px;\n  box-shadow: $shadow-heavy;\n}\n\n.card-top {\n  display: grid;\n  grid-template-rows: 60% 40%;\n  padding: 1%;\n  border-radius: 3px 3px 0 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.arrow {\n  background-repeat: no-repeat;\n  width: 3vw;\n  height: 3vw;\n  padding: 5% 0 0 5%;\n}\n\n.card-top-lower-half {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 3%;\n\n  h2 {\n    justify-items: center;\n    padding: 3% 5% 3% 5%;\n    margin-bottom: 1%;\n    font-size: 1.5vw;\n    font-weight: bold;\n    color:hsla(0, 0%, 0%, 0.671);\n    background-color:rgba(160, 225, 245, 0.692);\n    box-shadow: $shadow-light;\n  }\n}\n\n.card-bottom {\n  display: grid;\n  grid-template-rows: 23% 23% 23% 23%;\n  align-items: flex-end;\n  padding: 1.6vw;\n  border-radius: 0 0 3px 3px;\n  background: rgba(255, 255, 255, 0.829);\n}\n\n.trip-info {\n  display: grid;\n  grid-template-columns: 60% 40%;\n\n  width: 100%;\n  margin: 5% 1% 3% 1%;\n\n  h3 {\n    font-size: 1.25vw;\n    margin: 0;\n  }\n}\n\n.data-small {\n  font-size: 1.15vw;\n  color: rgb(51, 10, 173)\n}\n\n.no-match {\n  font-size: 2vw;\n  color: $offwhite;\n}\n\n// MEDIA QUERIES\n\n/** three card width **/\n@media screen and (max-width: 1050px) {\n  .card {\n    height: 44vw;\n  }\n\n  .arrow {\n    width: 4vw;\n    height: 4vw;\n  }\n\n  .card-top-lower-half {\n    h2 {\n      font-size: 2vw;\n    }\n  }\n\n  .trip-info {\n\n    h3 {\n      font-size: 1.75vw;\n    }\n  }\n\n  .data-small {\n    font-size: 1.75vw;\n  }\n}\n\n/** two card width **/\n@media screen and (max-width: 625px) {\n  .card {\n    height: 60vw;\n  }\n\n  .arrow {\n    width: 6vw;\n    height: 6vw;\n  }\n\n  .card-top-lower-half {\n    h2 {\n      font-size: 2.8vw;\n    }\n  }\n\n  .trip-info {\n\n    h3 {\n      font-size: 2.75vw;\n    }\n  }\n\n  .data-small {\n    font-size: 2.5vw;\n  }\n}\n\n/** one card width **/\n@media screen and (max-width: 375px) {\n  .card {\n    height: 110vw;\n  }\n\n  .arrow {\n    width: 8vw;\n    height: 8vw;\n  }\n  \n  .card-top-lower-half {\n\n    h2 {\n      font-size: 4.5vw;\n    }\n  }\n\n  .card-bottom {\n    justify-content: center;\n    align-items: center;\n    padding: 3.5vw 6vw 0 0;\n  }\n\n  .trip-info {\n    margin: 0;\n\n    h3 {\n      font-size: 4vw;\n    }\n  }\n\n  .data-small {\n    font-size: 4vw;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");


class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.type = user.type;
    this.trips = [];
    this.annualCosts = 0;
  }

  populateTrips(allTrips) {
    allTrips.forEach(trip => {
      if (trip.userID === this.id) {
        this.trips.push(new _Trip_js__WEBPACK_IMPORTED_MODULE_0__["default"](trip));
      }
    });
    this.trips.forEach(trip => trip.getTripDates());
    this.sortTripsByDate();
  }

  getCurrentTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.startDate <= today && trip.endDate >= today;
    });
  }

  getUpcomingTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.startDate > today;
    });
  }

  getPreviousTrips(currentDate) {
    let today = new Date(currentDate).getTime();
    return this.trips.filter(trip => {
      return trip.endDate < today;
    });
  }

  getPendingTrips() {
    return this.trips.filter(trip => {
      return trip.status === 'pending';
    });
  }

  sortTripsByDate() {
    this.trips.sort((a, b) => {
      return a.date.localeCompare(b.date);
    });
  }

  calculateAnnualSpending(currentDate, allDestinations) {
    let currentYear = new Date(currentDate).getFullYear();

    this.annualCosts = this.trips.reduce((total, trip) => {
      let tripYear = new Date(trip.date).getFullYear();
      if (tripYear === currentYear) {
        total += trip.calculateTripCost(allDestinations);
      }
      return Math.round(total);
    }, 0);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripDatum) {
    this.id = tripDatum.id;
    this.userID = tripDatum.userID;
    this.destinationID = tripDatum.destinationID;
    this.travelers = tripDatum.travelers;
    this.date = tripDatum.date;
    this.duration = tripDatum.duration;
    this.suggestedActivities = tripDatum.suggestedActivities;
    this.status = tripDatum.status;
    this.cost = null;
    this.startDate = null;
    this.endDate = null;
  }

  calculateTripCost(allDestinations) {
    let destination = allDestinations.find(place => {
      return place.id === this.destinationID;
    });
    let totalLodging = destination.estimatedLodgingCostPerDay * this.duration;
    let totalAirfare = destination.estimatedFlightCostPerPerson * this.travelers;
    this.cost = (totalLodging + totalAirfare) * 1.10;
    
    return this.cost;
  }

  getTripDates() {
    let start = new Date(this.date);
    let end = new Date(this.date).setDate(new Date(this.date).getDate() + this.duration);
    this.startDate = start.getTime();
    this.endDate = end;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const apiCalls = {

  getAllTravelers() {
    return fetch('http://localhost:3001/api/v1/travelers')
      .then(resp => 
        resp.json()
      )
      .then(allTravelers => {
        return allTravelers.travelers
      })
  },

  getAllTrips() {
    return fetch('http://localhost:3001/api/v1/trips')
      .then(resp => 
        resp.json()
      )
      .then(allTrips => {
        return allTrips.trips
      })
  },

  getAllDestinations() {
    return fetch('http://localhost:3001/api/v1/destinations')
      .then(resp => 
        resp.json()
      )
      .then(allDestinations => {
        return allDestinations.destinations
      })
  },

  getAllData() {
    let promises = [ apiCalls.getAllTravelers(), apiCalls.getAllTrips(), apiCalls.getAllDestinations() ];
    return Promise.all(promises)
      .then(values => {
        return values;
      })
      .catch(error => console.log(`${error}: Error retrieving all data`));
  },

  postNewTripRequest(tripData) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tripData), 
      redirect: 'follow'
    })
      .then(response => {
        if (response.ok) {
          console.log(response)
          response.text();
        } else {
          throw new Error(`Sorry, we could not process your booking request.`);
        }
      })
      .catch(error => {
        console.log(error);
        apiCalls.displayErrorMessage(error);
      });
  },
}

/* harmony default export */ __webpack_exports__["default"] = (apiCalls);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// DOM GLOBAL VARIABLES

const body = document.querySelector("body");
const modal = document.querySelector('#modal');
const loginPage = document.querySelector('#loginPage');
const userPage = document.querySelector('#userPage');

// DOM FUNCTIONS

const domUpdates = {
  togglePageView() {
    loginPage.classList.toggle('hidden');
    userPage.classList.toggle('hidden');
  },

  welcomeUser(user) {
    const welcomeName = document.querySelector('#welcomeName');
    const [ firstName ] = user.name.split(' ');
    welcomeName.innerText = `${firstName}!`;
  },

  buildBookingSection(allDestinations) {
    let menu = document.querySelector("#destinationMenu");

    allDestinations.sort((a, b) => {
      return a.destination.localeCompare(b.destination);
    });

    allDestinations.forEach(place => {
      menu.insertAdjacentHTML('beforeend', `<option value="${place.id}">${place.destination}</option>`);
    })
  },

  displayTravelCosts(totalCost) {
    const totalDisplay = document.querySelector('#totalAmt');
    totalDisplay.innerText = `$${totalCost}`;
  },

  displayGridTitle(titleText) {
    const gridTitle = document.querySelector('#gridTitle');
    gridTitle.innerText = titleText;
  },

  displayTripCards(userTrips, allDestinations) {
    let cardGrid = document.querySelector('#cardGrid');
    cardGrid.innerHTML = '';

    userTrips.sort((a, b) => {
      return b.date.localeCompare(a.date);
    });

    if (userTrips.length > 0) {
      userTrips.forEach(card => {
        let location = allDestinations.find(place => {
          return place.id === card.destinationID;
        });
        let date = formatDate(card.date);
        let tripCard = 
          `<article class="card">
            <section class="card-top" aria-label="[photograph of ${location.destination}]" style="background-image: url(${location.image})">
              <div class="card-top-upper">
                <img class="arrow" alt="inactive arrow icon" src="./images/arrow.png">
              </div>
              <div class="card-top-lower-half">
                <h2 id="destination">${location.destination}</h2>
              </div>
            </section>
            <section class="card-bottom">
              <div class="trip-info">
                <h3>Start Date:</h3>
                <span class="data-small" id="startDate">${date}</span>
              </div>
              <div class="trip-info">
                <h3>Duration:</h3>
                <span class="data-small" id="duration">${card.duration} days</span>
              </div>
              <div class="trip-info">
                <h3>Travelers:</h3>
                <span class="data-small" id="travelers">${card.travelers}</span>
              </div>
              <div class="trip-info">
                <h3>Trip Status:</h3>
                <span class="data-small" id="tripStatus">${card.status}</span>
              </div>
            </section>
          </article>`;
        cardGrid.insertAdjacentHTML('beforeend', tripCard);
      });
    } else {
      cardGrid.innerHTML = `<article class="no-match">No matching trips!</article>`;
    }
  },

  // MODAL DISPLAY FUNCTIONS

  buildTripCostModal(tripCost) {
    modal.innerHTML = `
    <div tabindex=-1 class="cost-modal" id="costModal" aria-modal="true">
      <span tabindex=0 class="close" id="modalClose">&times;</span>
      <label for="trip-cost">Estimated trip cost:</label>
      <p class="trip-cost">$${tripCost}</p>
    </div>`;

    let costModal = document.querySelector('#costModal');
      
    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    costModal.focus();
    addModalCloseFunctionality();
  },

  buildBookingModal(newTrip, allDestinations) {
    let destination = getDestinationName(newTrip.destinationID, allDestinations);
    let costString = newTrip.cost.toFixed(2).toString();
    let message = `Congratulations, you've booked a trip to ${destination} for $${costString}!`;

    modal.innerHTML = `
      <div tabindex=-1 class="booking-modal" id="bookingModal" aria-modal="true">
        <span tabindex=0 class="close" id="modalClose" type="button" role="button" name="close-button">&times;</span>
        <p class="booking-message">${message}</p>
      </div>`;

    let bookingModal = document.querySelector('#bookingModal');

    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    bookingModal.focus();
    addModalCloseFunctionality();
  },

  buildErrorModal(errorMessage) {
    modal.innerHTML = `
      <div tabindex=-1 class="error-modal" id="errorModal" aria-modal="true">
        <span tabindex=0 class="close" id="modalClose">&times;</span>
        <p id="messageText">${errorMessage}</p>
      </div>`;

    let errorModal = document.querySelector('#errorModal');

    modal.style.display = "inline";
    body.classList.toggle('noscroll');
    errorModal.focus();
    addModalCloseFunctionality();
  }
}

// HELPER FUNCTIONS

function getDestinationName(id, allDestinations) {
  let location = allDestinations.find(place => {
    if (place.id === id) {
      return place;
    }
  });
  return location.destination;
}

function formatDate(date) {
  let split = date.split('/');
  let newDate = `${split[1]}/${split[2]}/${split[0]}`;

  return newDate;
}

function checkKeyPressed(e) {
  if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Escape') {
    closeModal();
  }
}

function addModalCloseFunctionality() {
  const closeButton = document.querySelector('#modalClose');
  closeButton.addEventListener('click', closeModal);
  closeButton.addEventListener('keydown', function(event) {
    checkKeyPressed(event);
  });
}

function closeModal() {
  let modal = document.querySelector('#modal');
  let body = document.querySelector('body');

  modal.style.display = 'none';
  body.classList.toggle('noscroll');
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/arrow.png");

/***/ }),

/***/ "./src/images/thai-beach.png":
/*!***********************************!*\
  !*** ./src/images/thai-beach.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/thai-beach.png");

/***/ }),

/***/ "./src/images/tt-logo-no-text.png":
/*!****************************************!*\
  !*** ./src/images/tt-logo-no-text.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/tt-logo-no-text.png");

/***/ }),

/***/ "./src/images/tt-logo.png":
/*!********************************!*\
  !*** ./src/images/tt-logo.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/tt-logo.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_tt_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/tt-logo.png */ "./src/images/tt-logo.png");
/* harmony import */ var _images_tt_logo_no_text_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/tt-logo-no-text.png */ "./src/images/tt-logo-no-text.png");
/* harmony import */ var _images_thai_beach_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/thai-beach.png */ "./src/images/thai-beach.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiCalls.js */ "./src/apiCalls.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Traveler.js */ "./src/Traveler.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");
// IMPORTS













// GLOBAL VARIABLES

let currentDate = "2020/01/01";

let user, currentTraveler;

let allDestinations, allTravelers, allTrips;

// QUERY SELECTORS

// login
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#loginBtn');

// navbar
const navButtons = document.querySelectorAll('.nav-btn');
const homeButton = document.querySelector('#logo');
const costButton = document.querySelector('#costBtn');
const bookButton = document.querySelector('#bookBtn');
const logoutButton = document.querySelector('#logoutBtn');

// booking
const destinationSelect = document.querySelector('#destinationMenu');
const startDateSelect = document.querySelector('#startDateMenu');
const durationInput = document.querySelector('#durationInput');
const travelersInput = document.querySelector('#travelersInput');

// EVENT LISTENERS

window.addEventListener('load', retrieveAllData);
loginButton.addEventListener('click', function(event) {
  retrieveLoginInfo(event);
});
navButtons.forEach(button => button.addEventListener('click', function(event) {
  populateCardGrid(event);
}));
homeButton.addEventListener('click', displayUserData);
costButton.addEventListener('click', estimateTripCost);
bookButton.addEventListener('click', bookNewTrip);
logoutButton.addEventListener('click', logoutUser);

// HANDLER FUNCTIONS

function retrieveAllData() {
  _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__["default"].getAllData()
    .then(allData => {
      allTravelers = allData[0];
      allTrips = allData[1];
      allDestinations = allData[2];
      if (user) {
        createUser(user);
        displayUserData();
      }
    })
}

function retrieveLoginInfo(event) {
  event.preventDefault();

  user = evaluateUsernameInput(usernameInput.value);

  if (passwordInput.value === 'travel2020' && user) {
    createUser();
    displayUserData();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].togglePageView();
  } else {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildErrorModal('Sorry, login info is incorrect.');
  }
}

function createUser() {
  currentTraveler = new _Traveler_js__WEBPACK_IMPORTED_MODULE_7__["default"](user);
  currentTraveler.populateTrips(allTrips);
  currentTraveler.calculateAnnualSpending(currentDate, allDestinations);
}

function displayUserData() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].welcomeUser(currentTraveler);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildBookingSection(allDestinations);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayTravelCosts(currentTraveler.annualCosts);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayGridTitle('My Trips');
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayTripCards(currentTraveler.trips, allDestinations);
}

function populateCardGrid(e) {
  let clickedID = e.target.id;
  let userData, titleText;

  switch (clickedID) {
  case 'currentTripsButton':
    titleText = 'Current Trips';
    userData = currentTraveler.getCurrentTrips(currentDate);
    break;
  case 'upcomingTripsButton':
    titleText = 'Upcoming Trips';
    userData = currentTraveler.getUpcomingTrips(currentDate);
    break;
  case 'previousTripsButton':
    titleText = 'Previous Trips';
    userData = currentTraveler.getPreviousTrips(currentDate);
    break;
  case 'pendingTripsButton':
    titleText = 'Pending Trips';
    userData = currentTraveler.getPendingTrips();
    break;
  }
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayGridTitle(titleText);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].displayTripCards(userData, allDestinations);
}

function estimateTripCost() {
  let newTripData = receiveBookingInputs();
  let newTripInstance = new _Trip_js__WEBPACK_IMPORTED_MODULE_8__["default"](newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  if (!inputTest) {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildErrorModal('Please provide all required booking info!');
  } else {
    newTripInstance.calculateTripCost(allDestinations);
    let costString = newTripInstance.cost.toFixed(2).toString();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildTripCostModal(costString);
  }
}

function bookNewTrip() {
  let newTripData = receiveBookingInputs();
  let newTripInstance = new _Trip_js__WEBPACK_IMPORTED_MODULE_8__["default"](newTripData);
  let inputTest = evaluateBookingInputs(newTripData);
  
  if (!inputTest) {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildErrorModal('Please provide all required booking info!');
  } else {
    _apiCalls_js__WEBPACK_IMPORTED_MODULE_5__["default"].postNewTripRequest(newTripData)
      .then(function() {
        retrieveAllData();
        newTripInstance.calculateTripCost(allDestinations);
        _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].buildBookingModal(newTripInstance, allDestinations);
      });
  }
}

function logoutUser() {
  user = null;
  usernameInput.value = '';
  passwordInput.value = '';
  retrieveAllData();
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_6__["default"].togglePageView();
}

// HELPER & UTIL FUNCTIONS

function evaluateUsernameInput(username) {
  let splitInput = username.split('');
  let joinedNum = parseInt(splitInput[8] + splitInput[9]);

  let user = allTravelers.find(traveler => {
    return traveler.id === joinedNum;
  });

  return user;
}

function getNextTripID() {
  allTrips.sort((a, b) => {
    return b.id - a.id;
  });
  let [ lastEntry ] = allTrips;

  return lastEntry.id + 1;
}

function receiveBookingInputs() {
  let startDate = formatSelectedDate(startDateSelect.value);
  let numDays = parseInt(durationInput.value);
  let numTravelers = parseInt(travelersInput.value);
  let destID = parseInt(destinationSelect.value);

  let tripObject = {
    "id": getNextTripID(),
    "userID": currentTraveler.id,
    "destinationID": destID,
    "travelers": numTravelers,
    "date": startDate,
    "duration": numDays,
    "status": "pending",
    "suggestedActivities": [],
  };

  return tripObject;
}

function formatSelectedDate(dateInput) {
  let splitDate = dateInput.split('-');
  let formattedDate = splitDate.join('/');

  return formattedDate;
}

function evaluateBookingInputs(newTripData) {
  let isComplete = true;
  if (newTripData.date === '' || !newTripData.duration || !newTripData.travelers || newTripData.destinationID <= 0) {
    isComplete = false;
  }

  return isComplete;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90aGFpLWJlYWNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3R0LWxvZ28tbm8tdGV4dC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90dC1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENB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NEJBQTRCLGdEQUFJO0FBQ2hDOztBQUVBO0FBQ0EsSUFBSSxzREFBVTtBQUNkLEdBQUc7QUFDSCxJQUFJLG9EQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBVTtBQUNsQixPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvdGhhaS1iZWFjaC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSBtYXJnaW4gZnJvbSBwYXJhZ3JhcGggZWxlbWVudHMuXFxuICovXFxucCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lOyB9XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgLyogMSAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtOyB9XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmxvZ2luLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOXZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJvcmRlci10b3A6IDFlbSBzb2xpZCByZ2JhKDE4LCAyNywgMTQ1LCAwLjUyMik7XFxuICBib3JkZXItYm90dG9tOiAxZW0gc29saWQgcmdiYSgxOCwgMjcsIDE0NSwgMC41MjIpOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAubG9naW4tcGFnZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTh2dzsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAubG9naW4tcGFnZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMjN2dzsgfSB9XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NSUgNDUlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmxvZ2luLWNvbnRhaW5lciB7XFxuICAgICAgd2lkdGg6IDgwJTsgfSB9XFxuXFxuLmxvZ28tYmlnIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgMjE1LCA3OCwgMC40ODkpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAuM2VtIDAuM2VtIDAuM2VtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMC41ZW0gMC41ZW0gMC41ZW0gMC4yZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6IHJnYmEoNCwgNSwgNSwgMC45MjEpOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgLmxvZ2luLWZvcm0ge1xcbiAgICAgIHdpZHRoOiA4MCU7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmxvZ2luLWZvcm0ge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4ubG9naW4taW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAuMjV2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAsIDQ2LCA4NSwgMC45MjEpOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgLmxvZ2luLWlucHV0IHtcXG4gICAgICB3aWR0aDogNTAlOyB9IH1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gIHdpZHRoOiA1ZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwLCA0NiwgODUsIDAuOTIxKTsgfVxcbiAgLmxvZ2luLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyMDIsIDI1NSwgMC44MTEpOyB9XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcblxcbi5lcnJvci1tb2RhbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNjAlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDE1JTtcXG4gIG1hcmdpbjogMjAlIGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4ODg4O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZWQ5O1xcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5lcnJvci1tb2RhbCB7XFxuICAgICAgbWFyZ2luLXRvcDogNTB2dztcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAuZXJyb3ItbW9kYWwge1xcbiAgICAgIG1hcmdpbi10b3A6IDcwdnc7XFxuICAgICAgd2lkdGg6IDgwJTsgfSB9XFxuICAuZXJyb3ItbW9kYWwgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyOyB9XFxuXFxuLmNvc3QtbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDQwJSA0MCU7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogMTV2dztcXG4gIG1hcmdpbjogMTh2dyBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODg4ODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmVkMjsgfVxcbiAgLmNvc3QtbW9kYWwgbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZ3OyB9XFxuICAuY29zdC1tb2RhbCBwIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3OyB9XFxuXFxuLmJvb2tpbmctbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDYwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxNXZ3O1xcbiAgbWFyZ2luOiAxOHZ3IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4ODg4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZWQ5O1xcbiAgZm9udC1zaXplOiAydnc7IH1cXG4gIC5ib29raW5nLW1vZGFsIHAge1xcbiAgICBtYXJnaW46IDV2dztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7IH1cXG5cXG4uY2xvc2Uge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNhYWE7XFxuICBtYXJnaW4tdG9wOiAxdnc7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dzsgfVxcbiAgLmNsb3NlOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7IH1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICB6LWluZGV4OiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6ICNDNkZGREQ7XFxuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y3Nzk3ZCwgI0ZCRDc4NiwgI0M2RkZERCk7XFxuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjc3OTdkLCAjRkJENzg2LCAjQzZGRkREKTtcXG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUnViaWtcXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDk0JTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi8qKiBmb3VyIGNhcmQgd2lkdGggKiovXFxuLmdyaWQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDN2dztcXG4gIG1hcmdpbjogNCUgMCA0JSAxLjUlO1xcbiAgZm9udC1zaXplOiAzLjV2dztcXG4gIGNvbG9yOiByZ2JhKDIxLCAyOCwgNjMsIDAuNzU2KTsgfVxcblxcbi5jYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxLjUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTsgfVxcblxcbi8qKiB0aHJlZSBjYXJkIHdpZHRoICoqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyNnB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAuZ3JpZC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBtYXJnaW46IDUlIDAgNSUgMS41JTsgfVxcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzElIDMxJSAzMSU7XFxuICAgIGdyaWQtcm93LWdhcDogMS43NSU7IH0gfVxcblxcbi8qKiB0d28gY2FyZCB3aWR0aCAqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDYyNXB4KSB7XFxuICAuZ3JpZC10aXRsZSB7XFxuICAgIG1hcmdpbjogNSUgMCA1JSAyLjclO1xcbiAgICBmb250LXNpemU6IDQuNXZ3OyB9XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NSUgNDUlO1xcbiAgICBncmlkLWNvbHVtbi1nYXA6IDEuNSU7XFxuICAgIGdyaWQtcm93LWdhcDogMS43NSU7IH0gfVxcblxcbi8qKiBvbmUgY2FyZCB3aWR0aCAqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgLmdyaWQtdGl0bGUge1xcbiAgICBtYXJnaW46IDglIDAgNyUgMTAlO1xcbiAgICBmb250LXNpemU6IDUuNXZ3OyB9XFxuICAuY2FyZC1ncmlkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCU7XFxuICAgIGdyaWQtcm93LWdhcDogMSU7IH0gfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5ub3Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xcbiAgbWluLWhlaWdodDogMTh2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC42ZW0gc29saWQgcmdiYSg2LCAxMCwgMjEsIDAuNDE4KTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwLjNlbSAwLjJlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGhlYWRlciB7XFxuICAgICAgaGVpZ2h0OiAzMHZ3OyB9IH1cXG5cXG4ubmF2LWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxJTsgfVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG1heC13aWR0aDogOXZ3O1xcbiAgbWF4LWhlaWdodDogOXZ3O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubmF2LWNlbnRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MCUgNDAlO1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5uYXYtY2VudGVyIC50aXRsZSB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIGZvbnQtc2l6ZTogNC41dnc7XFxuICAgIGNvbG9yOiByZ2JhKDgsIDI0LCA0MSwgMC43MTUpOyB9XFxuXFxuLm5hdi1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzJSAyMyUgMjMlIDIzJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiAyJTsgfVxcbiAgLm5hdi1idXR0b25zIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEzdnc7XFxuICAgIGhlaWdodDogMy4yNXZ3O1xcbiAgICBwYWRkaW5nOiAzJTtcXG4gICAgbWFyZ2luOiAxJSAzJSAxJSAzJTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDU5LCAxMTQsIDAuMjkxKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAuM2VtIDAuMmVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTksIDI0OSwgMTc0LCAwLjUzNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zdnc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmF2LWJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MiwgMjM4LCAyNDAsIDAuMjEyKTsgfVxcbiAgLm5hdi1idXR0b25zIGkge1xcbiAgICBtYXJnaW46IDAuNWVtOyB9XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTFlMzFjOyB9XFxuXFxuLm5hdi1yaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MCUgNDAlIDIwJTtcXG4gIG1hcmdpbjogNyUgNyUgNSUgMDsgfVxcbiAgLm5hdi1yaWdodCBidXR0b24ge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgaGVpZ2h0OiAydnc7XFxuICAgIGZvbnQtc2l6ZTogMC44dnc7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCA2MywgNTcsIDAuNDc5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTUsIDI0NywgMjIwLCAwLjY3MSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubmF2LXJpZ2h0IGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MiwgMTUyLCAyMjEsIDAuMzE1KTsgfVxcblxcbi53ZWxjb21lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA0dnc7XFxuICBmb250LXNpemU6IDEuM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiYSgyMSwgMjgsIDYzLCAwLjc1Nik7IH1cXG5cXG4udG90YWwtc3BlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMnZ3O1xcbiAgaGVpZ2h0OiAzLjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyMTUsIDc4LCAwLjQ4OSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0zZW0gM2VtIHJnYmEoMCwgMCwgMCwgMC4xKSwgMC4zZW0gMC4yZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgY29sb3I6IHJnYmEoMSwgMywgNSwgMC45NDUpOyB9XFxuXFxuLnRvdGFsLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogcmdiYSgxLCAzLCA1LCAwLjk0NSk7IH1cXG5cXG4udG90YWwtYW10IHtcXG4gIGZvbnQtc2l6ZTogMS4ydnc7XFxuICBjb2xvcjogcmdiYSgxMiwgNjYsIDE3LCAwLjg4Myk7IH1cXG5cXG4uYm9va2luZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxuICBtYXJnaW46IDMlIDclIDElIDclO1xcbiAgbWF4LWhlaWdodDogMTJ2dztcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNlbSAzZW0gcmdiYSgwLCAwLCAwLCAwLjEpLCAwLjNlbSAwLjNlbSAwLjNlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAuNWVtIDAuNWVtIDAuNWVtIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMTAwNjM4ZDUsICMyMzFhOGRkZSwgIzE0MzFjNGU3KTtcXG4gIGNvbG9yOiByZ2JhKDIxLCAyOCwgNjMsIDAuNzU2KTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmJvb2tpbmctc2VjdGlvbiB7XFxuICAgICAgbWF4LWhlaWdodDogNTB2dztcXG4gICAgICBoZWlnaHQ6IDE3dnc7IH0gfVxcblxcbi5ib29raW5nLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICBmb250LXNpemU6IDIuNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2ZjZjZmNmU0OyB9XFxuXFxuLmJvb2tpbmctYm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4JSAxOCUgMTglIDE4JSAxOCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbjogMSUgMSUgMSUgMiU7IH1cXG4gIC5ib29raW5nLWJvdHRvbSBpbnB1dCwgLmJvb2tpbmctYm90dG9tIHNlbGVjdCB7XFxuICAgIG1heC1oZWlnaHQ6IDEuNzV2dztcXG4gICAgbWF4LXdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiAxdnc7IH1cXG4gIC5ib29raW5nLWJvdHRvbSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDglO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgY29sb3I6ICNmY2Y2ZjZlNDsgfVxcblxcbi5jaG9pY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW46IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5ib29raW5nLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWxlZnQ6IDMlOyB9XFxuICAuYm9va2luZy1idG5zIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDIlIDMlIDIlIDMlO1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5ib29raW5nLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NiwgMjQ3LCAyNDgsIDAuNzc0KTsgfVxcblxcbi8qKiBmb3VyIGNhcmQgd2lkdGggKiovXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNDAlIDYwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAzM3Z3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAuM2VtIDAuM2VtIDAuM2VtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMC41ZW0gMC41ZW0gMC41ZW0gMC4yZW0gcmdiYSgwLCAwLCAwLCAwLjIpOyB9XFxuXFxuLmNhcmQtdG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwJSA0MCU7XFxuICBwYWRkaW5nOiAxJTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLmFycm93IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogM3Z3O1xcbiAgaGVpZ2h0OiAzdnc7XFxuICBwYWRkaW5nOiA1JSAwIDAgNSU7IH1cXG5cXG4uY2FyZC10b3AtbG93ZXItaGFsZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIG1hcmdpbi1ib3R0b206IDMlOyB9XFxuICAuY2FyZC10b3AtbG93ZXItaGFsZiBoMiB7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMyUgNSUgMyUgNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDElO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MCwgMjI1LCAyNDUsIDAuNjkyKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksIDAuM2VtIDAuMmVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxcblxcbi5jYXJkLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMyUgMjMlIDIzJSAyMyU7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwYWRkaW5nOiAxLjZ2dztcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyOSk7IH1cXG5cXG4udHJpcC1pbmZvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwJSA0MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNSUgMSUgMyUgMSU7IH1cXG4gIC50cmlwLWluZm8gaDMge1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLmRhdGEtc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjE1dnc7XFxuICBjb2xvcjogIzMzMGFhZDsgfVxcblxcbi5uby1tYXRjaCB7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIGNvbG9yOiAjZmZmZmZmYTE7IH1cXG5cXG4vKiogdGhyZWUgY2FyZCB3aWR0aCAqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiA0NHZ3OyB9XFxuICAuYXJyb3cge1xcbiAgICB3aWR0aDogNHZ3O1xcbiAgICBoZWlnaHQ6IDR2dzsgfVxcbiAgLmNhcmQtdG9wLWxvd2VyLWhhbGYgaDIge1xcbiAgICBmb250LXNpemU6IDJ2dzsgfVxcbiAgLnRyaXAtaW5mbyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3OyB9XFxuICAuZGF0YS1zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXZ3OyB9IH1cXG5cXG4vKiogdHdvIGNhcmQgd2lkdGggKiovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjI1cHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiA2MHZ3OyB9XFxuICAuYXJyb3cge1xcbiAgICB3aWR0aDogNnZ3O1xcbiAgICBoZWlnaHQ6IDZ2dzsgfVxcbiAgLmNhcmQtdG9wLWxvd2VyLWhhbGYgaDIge1xcbiAgICBmb250LXNpemU6IDIuOHZ3OyB9XFxuICAudHJpcC1pbmZvIGgzIHtcXG4gICAgZm9udC1zaXplOiAyLjc1dnc7IH1cXG4gIC5kYXRhLXNtYWxsIHtcXG4gICAgZm9udC1zaXplOiAyLjV2dzsgfSB9XFxuXFxuLyoqIG9uZSBjYXJkIHdpZHRoICoqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAuY2FyZCB7XFxuICAgIGhlaWdodDogMTEwdnc7IH1cXG4gIC5hcnJvdyB7XFxuICAgIHdpZHRoOiA4dnc7XFxuICAgIGhlaWdodDogOHZ3OyB9XFxuICAuY2FyZC10b3AtbG93ZXItaGFsZiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogNC41dnc7IH1cXG4gIC5jYXJkLWJvdHRvbSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAzLjV2dyA2dncgMCAwOyB9XFxuICAudHJpcC1pbmZvIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC50cmlwLWluZm8gaDMge1xcbiAgICAgIGZvbnQtc2l6ZTogNHZ3OyB9XFxuICAuZGF0YS1zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogNHZ3OyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25hdmJhci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ib29raW5nLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBQTtBQUVBOytFQ0ErRTtBREcvRTs7O0VDQ0U7QURJRjtFQUNFLGlCQUFpQjtFQUNqQixNQUFBO0VBQ0EsOEJBQThCO0VBQzlCLE1BQUEsRUFBTzs7QUFHVDsrRUNIK0U7QURNL0U7O0VDSEU7QURPRjtFQUNFLFNBQVMsRUFBQTs7QUFHWDs7RUNMRTtBRFNGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VDTkU7QURXRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7K0VDVitFO0FEYS9FOzs7RUNURTtBRGNGO0VBQ0UsdUJBQXVCO0VBQ3ZCLE1BQUE7RUFDQSxTQUFTO0VBQ1QsTUFBQTtFQUNBLGlCQUFpQjtFQUNqQixNQUFBLEVBQU87O0FBR1Q7OztFQ1hFO0FEZ0JGO0VBQ0UsaUNBQWlDO0VBQ2pDLE1BQUE7RUFDQSxjQUFjO0VBQ2QsTUFBQSxFQUFPOztBQUdUOytFQ2YrRTtBRGtCL0U7O0VDZkU7QURtQkY7RUFDRSw2QkFBNkIsRUFBQTs7QUFHL0I7OztFQ2hCRTtBRHFCRjtFQUNFLG1CQUFtQjtFQUNuQixNQUFBO0VBQ0EsMEJBQTBCO0VBQzFCLE1BQUE7RUFDQSxpQ0FBaUM7RUFDakMsTUFBQSxFQUFPOztBQUdUOztFQ25CRTtBRHVCRjs7RUFFRSxtQkFBbUIsRUFBQTs7QUFHckI7OztFQ3BCRTtBRHlCRjs7O0VBR0UsaUNBQWlDO0VBQ2pDLE1BQUE7RUFDQSxjQUFjO0VBQ2QsTUFBQSxFQUFPOztBQUdUOztFQ3ZCRTtBRDJCRjtFQUNFLFNBQVMsRUFBQTs7QUFJWDs7RUMxQkU7QUQ4QkY7RUFDRSxjQUFjLEVBQUE7O0FBR2hCOzs7RUMzQkU7QURnQ0Y7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjsrRUNqQytFO0FEb0MvRTs7RUNqQ0U7QURxQ0Y7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7K0VDcEMrRTtBRHVDL0U7OztFQ25DRTtBRHdDRjs7Ozs7RUFLRSxvQkFBb0I7RUFDcEIsTUFBQTtFQUNBLGVBQWU7RUFDZixNQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLE1BQUE7RUFDQSxTQUFTO0VBQ1QsTUFBQSxFQUFPOztBQUdUOzs7RUNyQ0U7QUQwQ0Y7O0VBRUUsTUFBQTtFQUNBLGlCQUFpQixFQUFBOztBQUduQjs7O0VDdkNFO0FENENGOztFQUVFLE1BQUE7RUFDQSxvQkFBb0IsRUFBQTs7QUFHdEI7O0VDMUNFO0FEOENGOzs7O0VBSUUsMEJBQTBCLEVBQUE7O0FBRzVCOztFQzVDRTtBRGdERjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7O0VDOUNFO0FEa0RGOzs7O0VBSUUsOEJBQThCLEVBQUE7O0FBR2hDOztFQ2hERTtBRG9ERjtFQUNFLDhCQUE4QixFQUFBOztBQUdoQzs7Ozs7RUMvQ0U7QURzREY7RUFDRSxzQkFBc0I7RUFDdEIsTUFBQTtFQUNBLGNBQWM7RUFDZCxNQUFBO0VBQ0EsY0FBYztFQUNkLE1BQUE7RUFDQSxlQUFlO0VBQ2YsTUFBQTtFQUNBLFVBQVU7RUFDVixNQUFBO0VBQ0EsbUJBQW1CO0VBQ25CLE1BQUEsRUFBTzs7QUFHVDs7RUNwREU7QUR3REY7RUFDRSx3QkFBd0IsRUFBQTs7QUFHMUI7O0VDdERFO0FEMERGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7O0VDdkRFO0FBQ0Y7O0VENkRFLHNCQUFzQjtFQUN0QixNQUFBO0VBQ0EsVUFBVTtFQUNWLE1BQUEsRUFBTzs7QUFHVDs7RUMxREU7QUFDRjs7RUQrREUsWUFBWSxFQUFBOztBQUdkOzs7RUMzREU7QUFDRjtFRGdFRSw2QkFBNkI7RUFDN0IsTUFBQTtFQUNBLG9CQUFvQjtFQUNwQixNQUFBLEVBQU87O0FBR1Q7O0VDOURFO0FBQ0Y7RURrRUUsd0JBQXdCLEVBQUE7O0FBRzFCOzs7RUMvREU7QURvRUY7RUFDRSwwQkFBMEI7RUFDMUIsTUFBQTtFQUNBLGFBQWE7RUFDYixNQUFBLEVBQU87O0FBR1Q7K0VDbkUrRTtBRHNFL0U7O0VDbkVFO0FEdUVGO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjs7RUNyRUU7QUR5RUY7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7K0VDeEUrRTtBRDJFL0U7O0VDeEVFO0FENEVGO0VBQ0UsYUFBYSxFQUFBOztBQUdmOztFQzFFRTtBQUNGO0VEOEVFLGFBQWEsRUFBQTs7QUVsWWY7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5REFBaUQ7RUFDakQsOENBQThDO0VBQzlDLGlEQUFpRCxFQUFBO0VBRWpEO0lBWEY7TUFZSSxnQkFBZ0IsRUFBQSxFQU1uQjtFQUhDO0lBZkY7TUFnQkksZ0JBQWdCLEVBQUEsRUFFbkI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFFVjtJQU5GO01BT0ksVUFBVSxFQUFBLEVBRWI7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWiwyQ0N6Q3dDO0VEMEN4Qyx1SUNsQ3dDO0VEbUN4QywyQkFBMkIsRUFBQTtFQUUzQjtJQVpGO01BYUksVUFBVSxFQUFBLEVBTWI7RUFIQztJQWhCRjtNQWlCSSxXQUFXLEVBQUEsRUFFZDs7QUFFRDtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YseUNBQXlDLEVBQUE7RUFFekM7SUFMRjtNQU1JLFVBQVUsRUFBQSxFQUViOztBQUVEO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUNBQXlDLEVBQUE7RUFKM0M7SUFPSSw0Q0FBNEMsRUFBQTs7QUUzRWhEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGlCQUFpQixFQUFBO0VBRWpCO0lBZEY7TUFlSSxnQkFBZ0I7TUFDaEIsVUFBVTtNQUNWLGVBQWUsRUFBQSxFQVdsQjtFQVJDO0lBcEJGO01BcUJJLGdCQUFnQjtNQUNoQixVQUFVLEVBQUEsRUFNYjtFQTVCRDtJQTBCSSxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUFvQztFQUNwQywyQkFBMkIsRUFBQTtFQVA3QjtJQVVJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFacEI7SUFnQkksb0JBQW9CO0lBQ3BCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQTtFQVZoQjtJQWFJLFdBQVc7SUFDWCxvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0VBTm5CO0lBU0ksb0JBQW9CLEVBQUE7O0FBSXhCOztFQUVFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQ2hHakI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsOEJBQUE7RUFDQSx3RUFBd0U7RUFDeEUsK0JBQUE7RUFDQSxnRUFBZ0U7RUFDaEUscUVBQUE7RUFFQSxnQ0ZMZ0MsRUFBQTs7QUVRbEM7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFLZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2Qsc0JBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsOEJGOUNvQyxFQUFBOztBRWlEdEM7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CLHVCQUFBO0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxvQkFBb0IsRUFBQTtFQUd0QjtJQUNFLGtDQUFrQztJQUNsQyxtQkFBbUIsRUFBQSxFQUNwQjs7QUFHSCxxQkFBQTtBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBLEVBQ3BCOztBQUdILHFCQUFBO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBQSxFQUNqQjs7QUFLSDtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGdCQUFnQixFQUFBOztBQ2pIbEI7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQix5REFBaUQ7RUFDakQsc0JBQXNCO0VBQ3RCLGlEQUFpRDtFQUNqRCxxRkhNa0MsRUFBQTtFR0psQztJQVRGO01BVUksWUFBWSxFQUFBLEVBRWY7O0FBSUQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUtqQjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsMEJBQTBCLEVBQUE7RUFINUI7SUFNSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNkJBQTZCLEVBQUE7O0FBSWpDO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtFQU5uQjtJQVNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0hsRVc7SUdtRVgsMENBQTBDO0lBQzFDLHFGSDVEZ0M7SUc2RGhDLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0lBdEJuQjtNQXlCTSw0Q0FBNEMsRUFBQTtFQXpCbEQ7SUE4QkksYUFBYSxFQUFBOztBQUlqQjtFQUNFLHlCQUFpQyxFQUFBOztBQUtuQztFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCLEVBQUE7RUFIcEI7SUFNSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNIcEdXO0lHcUdYLHlDQUF5QztJQUN6Qyw0Q0FBNEM7SUFDNUMsZUFBZSxFQUFBO0lBZG5CO01BaUJNLDJDQUEyQyxFQUFBOztBQUtqRDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhCSDNIb0MsRUFBQTs7QUc4SHRDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYiwyQ0h4SXdDO0VHeUl4QyxxRkg5SGtDO0VHK0hsQywyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEIsRUFBQTs7QUN2SmhDO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVJSkt3QztFSUp4QyxrRUFBa0U7RUFDbEUsOEJKSm9DLEVBQUE7RUlNcEM7SUFURjtNQVVJLGdCQUFnQjtNQUNoQixZQUFZLEVBQUEsRUFFZjs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBO0VBSnJCO0lBT0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYyxFQUFBO0VBVmxCO0lBY0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZSxFQUFBO0VBSmpCO0lBT0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZSxFQUFBO0lBVm5CO01BYU0sNENBQTRDLEVBQUE7O0FDckVsRCxzQkFBQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SUxHd0MsRUFBQTs7QUtBMUM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTtFQUpuQjtJQU9JLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsMkJBQTRCO0lBQzVCLDRDQUEyQztJQUMzQyxxRkw1QmdDLEVBQUE7O0FLZ0NwQztFQUNFLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsc0NBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUU5QixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7RUFMckI7SUFRSSxpQkFBaUI7SUFDakIsU0FBUyxFQUFBOztBQUliO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsY0FBYztFQUNkLGdCTHBFa0IsRUFBQTs7QUt5RXBCLHVCQUFBO0FBQ0E7RUFDRTtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsVUFBVTtJQUNWLFdBQVcsRUFBQTtFQUdiO0lBRUksY0FBYyxFQUFBO0VBSWxCO0lBR0ksaUJBQWlCLEVBQUE7RUFJckI7SUFDRSxpQkFBaUIsRUFBQSxFQUNsQjs7QUFHSCxxQkFBQTtBQUNBO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFHZDtJQUNFLFVBQVU7SUFDVixXQUFXLEVBQUE7RUFHYjtJQUVJLGdCQUFnQixFQUFBO0VBSXBCO0lBR0ksaUJBQWlCLEVBQUE7RUFJckI7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFHSCxxQkFBQTtBQUNBO0VBQ0U7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLFVBQVU7SUFDVixXQUFXLEVBQUE7RUFHYjtJQUdJLGdCQUFnQixFQUFBO0VBSXBCO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBQTtFQUd4QjtJQUNFLFNBQVMsRUFBQTtJQURYO01BSUksY0FBYyxFQUFBO0VBSWxCO0lBQ0UsY0FBYyxFQUFBLEVBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSBtYXJnaW4gZnJvbSBwYXJhZ3JhcGggZWxlbWVudHMuXFxuICovXFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIkBpbXBvcnQgJ19ub3JtYWxpemUnO1xcbkBpbXBvcnQgJ192YXJpYWJsZXMnO1xcbkBpbXBvcnQgJ19sb2dpbic7XFxuQGltcG9ydCAnX21vZGFsJztcXG5AaW1wb3J0ICdfbWFpbic7XFxuQGltcG9ydCAnX25hdmJhcic7XFxuQGltcG9ydCAnX2Jvb2tpbmcnO1xcbkBpbXBvcnQgJ19jYXJkJztcIixcIi5sb2dpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDl2dztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL3RoYWktYmVhY2gucG5nJyk7XFxuICBib3JkZXItdG9wOiAxZW0gc29saWQgcmdiYSgxOCwgMjcsIDE0NSwgMC41MjIpO1xcbiAgYm9yZGVyLWJvdHRvbTogMWVtIHNvbGlkIHJnYmEoMTgsIDI3LCAxNDUsIDAuNTIyKTtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIG1hcmdpbi10b3A6IDE4dnc7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBtYXJnaW4tdG9wOiAyM3Z3O1xcbiAgfVxcbn1cXG5cXG4ubG9naW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1JSA0NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG59XFxuXFxuLmxvZ28tYmlnIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDYwJTtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWFjY2VudDtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctaGVhdnk7XFxuICBjb2xvcjogcmdiYSg0LCA1LCA1LCAwLjkyMSk7XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ubG9naW4taW5wdXQge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAuMjV2dztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAsIDQ2LCA4NSwgMC45MjEpO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgd2lkdGg6IDVlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTAsIDQ2LCA4NSwgMC45MjEpO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAyMDIsIDI1NSwgMC44MTEpO1xcbiAgfVxcbn1cIixcIi8vIENPTE9SU1xcblxcbiRwcmltYXJ5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjZWNmNmY1KTtcXG4kcHJpbWFyeS1oZWFkZXI6IGxpbmVhci1ncmFkaWVudCgjZWFmNmZhZTEsICM1M2I5ZTkpO1xcbiRwcmltYXJ5LWFjY2VudDogcmdiYSgyNDksIDIxNSwgNzgsIDAuNDg5KTtcXG4kcHJpbWFyeS1kYXJrOiByZ2JhKDIxLCAyOCwgNjMsIDAuNzU2KTtcXG5cXG4kd2hpdGU6ICNmZmZmZmY7XFxuJG9mZndoaXRlOiAjZmZmZmZmYTE7XFxuXFxuJHNoYWRvdy1oZWF2eTogaW5zZXQgMCAtM2VtIDNlbSByZ2JhKDAsIDAsIDAsIDAuMSksXFxuMC4zZW0gMC4zZW0gMC4zZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjIpLFxcbjAuNWVtIDAuNWVtIDAuNWVtIDAuMmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG5cXG4kc2hhZG93LWxpZ2h0OiBpbnNldCAwIC0zZW0gM2VtIHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4wLjNlbSAwLjJlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuLy8gRk9OVFNcXG5cXG4kcHJpbWFyeS1mb250OiAnUnViaWsnLCBzYW5zLXNlcmlmO1wiLFwiLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG59XFxuXFxuLmVycm9yLW1vZGFsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSA2MCU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMTUlO1xcbiAgbWFyZ2luOiAyMCUgYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmVkOTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgbWFyZ2luLXRvcDogNTB2dztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgbWFyZ2luLXRvcDogNzB2dztcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIHAge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmNvc3QtbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDQwJSA0MCU7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogMTV2dztcXG4gIG1hcmdpbjogMTh2dyBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzNiwgMTM2LCAxMzYpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZWQyO1xcblxcbiAgbGFiZWwge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgfVxcblxcbiAgcCB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNzV2dztcXG4gIH1cXG59XFxuXFxuLmJvb2tpbmctbW9kYWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDYwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiAxNXZ3O1xcbiAgbWFyZ2luOiAxOHZ3IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTM2LCAxMzYsIDEzNik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlZDk7XFxuICBmb250LXNpemU6IDJ2dztcXG5cXG4gIHAge1xcbiAgICBtYXJnaW46IDV2dztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVxcblxcbi5jbG9zZSB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2FhYTtcXG4gIG1hcmdpbi10b3A6IDF2dztcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcblxcbiAgJjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcbiAgfVxcbn1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsXCIvLyBNQUlOIFNFQ1RJT05cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHotaW5kZXg6IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogI0M2RkZERDtcXG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjc3OTdkLCAjRkJENzg2LCAjQzZGRkREKTtcXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNzc5N2QsICNGQkQ3ODYsICNDNkZGREQpO1xcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcblxcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vLyBDQVJEIEdSSURcXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDk0JTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyoqIGZvdXIgY2FyZCB3aWR0aCAqKi9cXG5cXG4uZ3JpZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogM3Z3O1xcbiAgbWFyZ2luOiA0JSAwIDQlIDEuNSU7XFxuICBmb250LXNpemU6IDMuNXZ3O1xcbiAgY29sb3I6ICRwcmltYXJ5LWRhcms7XFxufVxcblxcbi5jYXJkLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDIzJSAyMyUgMjMlO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxLjUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXG59XFxuXFxuLyoqIHRocmVlIGNhcmQgd2lkdGggKiovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjI2cHgpIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC5ncmlkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIG1hcmdpbjogNSUgMCA1JSAxLjUlO1xcbiAgfVxcblxcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzElIDMxJSAzMSU7XFxuICAgIGdyaWQtcm93LWdhcDogMS43NSU7XFxuICB9XFxufVxcblxcbi8qKiB0d28gY2FyZCB3aWR0aCAqKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDYyNXB4KSB7XFxuICAuZ3JpZC10aXRsZSB7XFxuICAgIG1hcmdpbjogNSUgMCA1JSAyLjclO1xcbiAgICBmb250LXNpemU6IDQuNXZ3O1xcbiAgfVxcblxcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDQ1JTtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjUlO1xcbiAgICBncmlkLXJvdy1nYXA6IDEuNzUlO1xcbiAgfVxcbn1cXG5cXG4vKiogb25lIGNhcmQgd2lkdGggKiovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5ncmlkLXRpdGxlIHtcXG4gICAgbWFyZ2luOiA4JSAwIDclIDEwJTtcXG4gICAgZm9udC1zaXplOiA1LjV2dztcXG4gIH1cXG4gIFxcbiAgLmNhcmQtZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlO1xcbiAgICBncmlkLXJvdy1nYXA6IDElO1xcbiAgfVxcbn1cXG5cXG4vLyBUT0dHTEVEIENMQVNTRVNcXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ub3Njcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIixcIi8vIE5BViBCQVJcXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDYwJSAyMCU7XFxuICBtaW4taGVpZ2h0OiAxOHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvdGhhaS1iZWFjaC5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItYm90dG9tOiAwLjZlbSBzb2xpZCByZ2JhKDYsIDEwLCAyMSwgMC40MTgpO1xcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGhlaWdodDogMzB2dztcXG4gIH1cXG59XFxuXFxuLy8gTEVGVCBTSURFXFxuXFxuLm5hdi1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMSU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBtYXgtaGVpZ2h0OiA4MCU7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogODAlO1xcbiAgbWF4LXdpZHRoOiA5dnc7XFxuICBtYXgtaGVpZ2h0OiA5dnc7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLy8gQ0VOVEVSXFxuXFxuLm5hdi1jZW50ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjAlIDQwJTtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgLnRpdGxlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgZm9udC1zaXplOiA0LjV2dztcXG4gICAgY29sb3I6IHJnYmEoOCwgMjQsIDQxLCAwLjcxNSk7XFxuICB9XFxufVxcblxcbi5uYXYtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMyUgMjMlIDIzJSAyMyU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuXFxuICBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxM3Z3O1xcbiAgICBoZWlnaHQ6IDMuMjV2dztcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIG1hcmdpbjogMSUgMyUgMSUgMyU7XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDU5LCAxMTQsIDAuMjkxKTtcXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTksIDI0OSwgMTc0LCAwLjUzNCk7XFxuICAgIGZvbnQtc2l6ZTogMS4zdnc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQyLCAyMzgsIDI0MCwgMC4yMTIpO1xcbiAgICB9XFxuICB9XFxuXFxuICBpIHtcXG4gICAgbWFyZ2luOiAwLjVlbTtcXG4gIH1cXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNywgMjI3LCAyOCk7XFxufVxcblxcbi8vIFJJR0hUIFNJREVcXG5cXG4ubmF2LXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSA0MCUgMjAlO1xcbiAgbWFyZ2luOiA3JSA3JSA1JSAwO1xcblxcbiAgYnV0dG9uIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIGhlaWdodDogMnZ3O1xcbiAgICBmb250LXNpemU6IDAuOHZ3O1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCA2MywgNTcsIDAuNDc5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTUsIDI0NywgMjIwLCAwLjY3MSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjIsIDE1MiwgMjIxLCAwLjMxNSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLndlbGNvbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDR2dztcXG4gIGZvbnQtc2l6ZTogMS4zdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAkcHJpbWFyeS1kYXJrO1xcbn1cXG5cXG4udG90YWwtc3BlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMnZ3O1xcbiAgaGVpZ2h0OiAzLjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWFjY2VudDtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctbGlnaHQ7XFxuICBjb2xvcjogcmdiYSgxLCAzLCA1LCAwLjk0NSk7XFxufVxcblxcbi50b3RhbC10aXRsZSB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYmEoMSwgMywgNSwgMC45NDUpO1xcbn1cXG5cXG4udG90YWwtYW10IHtcXG4gIGZvbnQtc2l6ZTogMS4ydnc7XFxuICBjb2xvcjogcmdiYSgxMiwgNjYsIDE3LCAwLjg4Myk7XFxufVwiLFwiLy8gQk9PS0lORyBDT05UQUlORVJcXG5cXG4uYm9va2luZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSA3MCU7XFxuICBtYXJnaW46IDMlIDclIDElIDclO1xcbiAgbWF4LWhlaWdodDogMTJ2dztcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctaGVhdnk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzEwMDYzOGQ1LCAjMjMxYThkZGUsICMxNDMxYzRlNyk7XFxuICBjb2xvcjogJHByaW1hcnktZGFyaztcXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIG1heC1oZWlnaHQ6IDUwdnc7XFxuICAgIGhlaWdodDogMTd2dztcXG4gIH1cXG59XFxuXFxuLmJvb2tpbmctdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG4gIGZvbnQtc2l6ZTogMi41dnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmNmNmY2ZTQ7XFxufVxcblxcbi5ib29raW5nLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOCUgMTglIDE4JSAxOCUgMTglO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW46IDElIDElIDElIDIlO1xcblxcbiAgaW5wdXQsIHNlbGVjdCB7XFxuICAgIG1heC1oZWlnaHQ6IDEuNzV2dztcXG4gICAgbWF4LXdpZHRoOiAxNXZ3O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZm9udC1zaXplOiAxdnc7XFxuICB9XFxuXFxuICBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDglO1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgY29sb3I6ICNmY2Y2ZjZlNDtcXG4gIH1cXG59XFxuXFxuLmNob2ljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbjogMDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYm9va2luZy1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1sZWZ0OiAzJTtcXG5cXG4gIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMiU7XFxuICAgIHBhZGRpbmc6IDIlIDMlIDIlIDMlO1xcbiAgICBmb250LXNpemU6IDF2dztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTYsIDI0NywgMjQ4LCAwLjc3NCk7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvLyBUUklQIENBUkRcXG5cXG4vKiogZm91ciBjYXJkIHdpZHRoICoqL1xcbi5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwJSA2MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMzN2dztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctaGVhdnk7XFxufVxcblxcbi5jYXJkLXRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MCUgNDAlO1xcbiAgcGFkZGluZzogMSU7XFxuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFycm93IHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogM3Z3O1xcbiAgaGVpZ2h0OiAzdnc7XFxuICBwYWRkaW5nOiA1JSAwIDAgNSU7XFxufVxcblxcbi5jYXJkLXRvcC1sb3dlci1oYWxmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxuXFxuICBoMiB7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMyUgNSUgMyUgNSU7XFxuICAgIG1hcmdpbi1ib3R0b206IDElO1xcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6aHNsYSgwLCAwJSwgMCUsIDAuNjcxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2MCwgMjI1LCAyNDUsIDAuNjkyKTtcXG4gICAgYm94LXNoYWRvdzogJHNoYWRvdy1saWdodDtcXG4gIH1cXG59XFxuXFxuLmNhcmQtYm90dG9tIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIzJSAyMyUgMjMlIDIzJTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmc6IDEuNnZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODI5KTtcXG59XFxuXFxuLnRyaXAtaW5mbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MCUgNDAlO1xcblxcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDUlIDElIDMlIDElO1xcblxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDEuMjV2dztcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbn1cXG5cXG4uZGF0YS1zbWFsbCB7XFxuICBmb250LXNpemU6IDEuMTV2dztcXG4gIGNvbG9yOiByZ2IoNTEsIDEwLCAxNzMpXFxufVxcblxcbi5uby1tYXRjaCB7XFxuICBmb250LXNpemU6IDJ2dztcXG4gIGNvbG9yOiAkb2Zmd2hpdGU7XFxufVxcblxcbi8vIE1FRElBIFFVRVJJRVNcXG5cXG4vKiogdGhyZWUgY2FyZCB3aWR0aCAqKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiA0NHZ3O1xcbiAgfVxcblxcbiAgLmFycm93IHtcXG4gICAgd2lkdGg6IDR2dztcXG4gICAgaGVpZ2h0OiA0dnc7XFxuICB9XFxuXFxuICAuY2FyZC10b3AtbG93ZXItaGFsZiB7XFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDJ2dztcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXAtaW5mbyB7XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDEuNzV2dztcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRhdGEtc21hbGwge1xcbiAgICBmb250LXNpemU6IDEuNzV2dztcXG4gIH1cXG59XFxuXFxuLyoqIHR3byBjYXJkIHdpZHRoICoqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyNXB4KSB7XFxuICAuY2FyZCB7XFxuICAgIGhlaWdodDogNjB2dztcXG4gIH1cXG5cXG4gIC5hcnJvdyB7XFxuICAgIHdpZHRoOiA2dnc7XFxuICAgIGhlaWdodDogNnZ3O1xcbiAgfVxcblxcbiAgLmNhcmQtdG9wLWxvd2VyLWhhbGYge1xcbiAgICBoMiB7XFxuICAgICAgZm9udC1zaXplOiAyLjh2dztcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRyaXAtaW5mbyB7XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDIuNzV2dztcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRhdGEtc21hbGwge1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbiAgfVxcbn1cXG5cXG4vKiogb25lIGNhcmQgd2lkdGggKiovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiAxMTB2dztcXG4gIH1cXG5cXG4gIC5hcnJvdyB7XFxuICAgIHdpZHRoOiA4dnc7XFxuICAgIGhlaWdodDogOHZ3O1xcbiAgfVxcbiAgXFxuICAuY2FyZC10b3AtbG93ZXItaGFsZiB7XFxuXFxuICAgIGgyIHtcXG4gICAgICBmb250LXNpemU6IDQuNXZ3O1xcbiAgICB9XFxuICB9XFxuXFxuICAuY2FyZC1ib3R0b20ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMy41dncgNnZ3IDAgMDtcXG4gIH1cXG5cXG4gIC50cmlwLWluZm8ge1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGgzIHtcXG4gICAgICBmb250LXNpemU6IDR2dztcXG4gICAgfVxcbiAgfVxcblxcbiAgLmRhdGEtc21hbGwge1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBUcmlwIGZyb20gJy4vVHJpcC5qcyc7XG5cbmNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodXNlcikge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnR5cGUgPSB1c2VyLnR5cGU7XG4gICAgdGhpcy50cmlwcyA9IFtdO1xuICAgIHRoaXMuYW5udWFsQ29zdHMgPSAwO1xuICB9XG5cbiAgcG9wdWxhdGVUcmlwcyhhbGxUcmlwcykge1xuICAgIGFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBpZiAodHJpcC51c2VySUQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgdGhpcy50cmlwcy5wdXNoKG5ldyBUcmlwKHRyaXApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRyaXBzLmZvckVhY2godHJpcCA9PiB0cmlwLmdldFRyaXBEYXRlcygpKTtcbiAgICB0aGlzLnNvcnRUcmlwc0J5RGF0ZSgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFRyaXBzKGN1cnJlbnREYXRlKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpLmdldFRpbWUoKTtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICByZXR1cm4gdHJpcC5zdGFydERhdGUgPD0gdG9kYXkgJiYgdHJpcC5lbmREYXRlID49IHRvZGF5O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXBjb21pbmdUcmlwcyhjdXJyZW50RGF0ZSkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgcmV0dXJuIHRyaXAuc3RhcnREYXRlID4gdG9kYXk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcmV2aW91c1RyaXBzKGN1cnJlbnREYXRlKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUpLmdldFRpbWUoKTtcbiAgICByZXR1cm4gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICByZXR1cm4gdHJpcC5lbmREYXRlIDwgdG9kYXk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQZW5kaW5nVHJpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4ge1xuICAgICAgcmV0dXJuIHRyaXAuc3RhdHVzID09PSAncGVuZGluZyc7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0VHJpcHNCeURhdGUoKSB7XG4gICAgdGhpcy50cmlwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kYXRlLmxvY2FsZUNvbXBhcmUoYi5kYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUFubnVhbFNwZW5kaW5nKGN1cnJlbnREYXRlLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgY3VycmVudFllYXIgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSkuZ2V0RnVsbFllYXIoKTtcblxuICAgIHRoaXMuYW5udWFsQ29zdHMgPSB0aGlzLnRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGxldCB0cmlwWWVhciA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmICh0cmlwWWVhciA9PT0gY3VycmVudFllYXIpIHtcbiAgICAgICAgdG90YWwgKz0gdHJpcC5jYWxjdWxhdGVUcmlwQ29zdChhbGxEZXN0aW5hdGlvbnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQodG90YWwpO1xuICAgIH0sIDApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7IiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXBEYXR1bSkge1xuICAgIHRoaXMuaWQgPSB0cmlwRGF0dW0uaWQ7XG4gICAgdGhpcy51c2VySUQgPSB0cmlwRGF0dW0udXNlcklEO1xuICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXBEYXR1bS5kZXN0aW5hdGlvbklEO1xuICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcERhdHVtLnRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSB0cmlwRGF0dW0uZGF0ZTtcbiAgICB0aGlzLmR1cmF0aW9uID0gdHJpcERhdHVtLmR1cmF0aW9uO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBEYXR1bS5zdWdnZXN0ZWRBY3Rpdml0aWVzO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdHVtLnN0YXR1cztcbiAgICB0aGlzLmNvc3QgPSBudWxsO1xuICAgIHRoaXMuc3RhcnREYXRlID0gbnVsbDtcbiAgICB0aGlzLmVuZERhdGUgPSBudWxsO1xuICB9XG5cbiAgY2FsY3VsYXRlVHJpcENvc3QoYWxsRGVzdGluYXRpb25zKSB7XG4gICAgbGV0IGRlc3RpbmF0aW9uID0gYWxsRGVzdGluYXRpb25zLmZpbmQocGxhY2UgPT4ge1xuICAgICAgcmV0dXJuIHBsYWNlLmlkID09PSB0aGlzLmRlc3RpbmF0aW9uSUQ7XG4gICAgfSk7XG4gICAgbGV0IHRvdGFsTG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdGhpcy5kdXJhdGlvbjtcbiAgICBsZXQgdG90YWxBaXJmYXJlID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRoaXMudHJhdmVsZXJzO1xuICAgIHRoaXMuY29zdCA9ICh0b3RhbExvZGdpbmcgKyB0b3RhbEFpcmZhcmUpICogMS4xMDtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5jb3N0O1xuICB9XG5cbiAgZ2V0VHJpcERhdGVzKCkge1xuICAgIGxldCBzdGFydCA9IG5ldyBEYXRlKHRoaXMuZGF0ZSk7XG4gICAgbGV0IGVuZCA9IG5ldyBEYXRlKHRoaXMuZGF0ZSkuc2V0RGF0ZShuZXcgRGF0ZSh0aGlzLmRhdGUpLmdldERhdGUoKSArIHRoaXMuZHVyYXRpb24pO1xuICAgIHRoaXMuc3RhcnREYXRlID0gc3RhcnQuZ2V0VGltZSgpO1xuICAgIHRoaXMuZW5kRGF0ZSA9IGVuZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwOyIsImNvbnN0IGFwaUNhbGxzID0ge1xuXG4gIGdldEFsbFRyYXZlbGVycygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzJylcbiAgICAgIC50aGVuKHJlc3AgPT4gXG4gICAgICAgIHJlc3AuanNvbigpXG4gICAgICApXG4gICAgICAudGhlbihhbGxUcmF2ZWxlcnMgPT4ge1xuICAgICAgICByZXR1cm4gYWxsVHJhdmVsZXJzLnRyYXZlbGVyc1xuICAgICAgfSlcbiAgfSxcblxuICBnZXRBbGxUcmlwcygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgICAgLnRoZW4ocmVzcCA9PiBcbiAgICAgICAgcmVzcC5qc29uKClcbiAgICAgIClcbiAgICAgIC50aGVuKGFsbFRyaXBzID0+IHtcbiAgICAgICAgcmV0dXJuIGFsbFRyaXBzLnRyaXBzXG4gICAgICB9KVxuICB9LFxuXG4gIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlc3AgPT4gXG4gICAgICAgIHJlc3AuanNvbigpXG4gICAgICApXG4gICAgICAudGhlbihhbGxEZXN0aW5hdGlvbnMgPT4ge1xuICAgICAgICByZXR1cm4gYWxsRGVzdGluYXRpb25zLmRlc3RpbmF0aW9uc1xuICAgICAgfSlcbiAgfSxcblxuICBnZXRBbGxEYXRhKCkge1xuICAgIGxldCBwcm9taXNlcyA9IFsgYXBpQ2FsbHMuZ2V0QWxsVHJhdmVsZXJzKCksIGFwaUNhbGxzLmdldEFsbFRyaXBzKCksIGFwaUNhbGxzLmdldEFsbERlc3RpbmF0aW9ucygpIF07XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgLnRoZW4odmFsdWVzID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coYCR7ZXJyb3J9OiBFcnJvciByZXRyaWV2aW5nIGFsbCBkYXRhYCkpO1xuICB9LFxuXG4gIHBvc3ROZXdUcmlwUmVxdWVzdCh0cmlwRGF0YSkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJpcERhdGEpLCBcbiAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNvcnJ5LCB3ZSBjb3VsZCBub3QgcHJvY2VzcyB5b3VyIGJvb2tpbmcgcmVxdWVzdC5gKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgYXBpQ2FsbHMuZGlzcGxheUVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgICB9KTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpQ2FsbHM7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gRE9NIEdMT0JBTCBWQVJJQUJMRVNcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbmNvbnN0IGxvZ2luUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpblBhZ2UnKTtcbmNvbnN0IHVzZXJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJQYWdlJyk7XG5cbi8vIERPTSBGVU5DVElPTlNcblxuY29uc3QgZG9tVXBkYXRlcyA9IHtcbiAgdG9nZ2xlUGFnZVZpZXcoKSB7XG4gICAgbG9naW5QYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIHVzZXJQYWdlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICB9LFxuXG4gIHdlbGNvbWVVc2VyKHVzZXIpIHtcbiAgICBjb25zdCB3ZWxjb21lTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWxjb21lTmFtZScpO1xuICAgIGNvbnN0IFsgZmlyc3ROYW1lIF0gPSB1c2VyLm5hbWUuc3BsaXQoJyAnKTtcbiAgICB3ZWxjb21lTmFtZS5pbm5lclRleHQgPSBgJHtmaXJzdE5hbWV9IWA7XG4gIH0sXG5cbiAgYnVpbGRCb29raW5nU2VjdGlvbihhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzdGluYXRpb25NZW51XCIpO1xuXG4gICAgYWxsRGVzdGluYXRpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmRlc3RpbmF0aW9uLmxvY2FsZUNvbXBhcmUoYi5kZXN0aW5hdGlvbik7XG4gICAgfSk7XG5cbiAgICBhbGxEZXN0aW5hdGlvbnMuZm9yRWFjaChwbGFjZSA9PiB7XG4gICAgICBtZW51Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxvcHRpb24gdmFsdWU9XCIke3BsYWNlLmlkfVwiPiR7cGxhY2UuZGVzdGluYXRpb259PC9vcHRpb24+YCk7XG4gICAgfSlcbiAgfSxcblxuICBkaXNwbGF5VHJhdmVsQ29zdHModG90YWxDb3N0KSB7XG4gICAgY29uc3QgdG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsQW10Jyk7XG4gICAgdG90YWxEaXNwbGF5LmlubmVyVGV4dCA9IGAkJHt0b3RhbENvc3R9YDtcbiAgfSxcblxuICBkaXNwbGF5R3JpZFRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IGdyaWRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNncmlkVGl0bGUnKTtcbiAgICBncmlkVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xuICB9LFxuXG4gIGRpc3BsYXlUcmlwQ2FyZHModXNlclRyaXBzLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgY2FyZEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyZEdyaWQnKTtcbiAgICBjYXJkR3JpZC5pbm5lckhUTUwgPSAnJztcblxuICAgIHVzZXJUcmlwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi5kYXRlLmxvY2FsZUNvbXBhcmUoYS5kYXRlKTtcbiAgICB9KTtcblxuICAgIGlmICh1c2VyVHJpcHMubGVuZ3RoID4gMCkge1xuICAgICAgdXNlclRyaXBzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGFsbERlc3RpbmF0aW9ucy5maW5kKHBsYWNlID0+IHtcbiAgICAgICAgICByZXR1cm4gcGxhY2UuaWQgPT09IGNhcmQuZGVzdGluYXRpb25JRDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBkYXRlID0gZm9ybWF0RGF0ZShjYXJkLmRhdGUpO1xuICAgICAgICBsZXQgdHJpcENhcmQgPSBcbiAgICAgICAgICBgPGFydGljbGUgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhcmQtdG9wXCIgYXJpYS1sYWJlbD1cIltwaG90b2dyYXBoIG9mICR7bG9jYXRpb24uZGVzdGluYXRpb259XVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7bG9jYXRpb24uaW1hZ2V9KVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b3AtdXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYXJyb3dcIiBhbHQ9XCJpbmFjdGl2ZSBhcnJvdyBpY29uXCIgc3JjPVwiLi9pbWFnZXMvYXJyb3cucG5nXCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b3AtbG93ZXItaGFsZlwiPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cImRlc3RpbmF0aW9uXCI+JHtsb2NhdGlvbi5kZXN0aW5hdGlvbn08L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZC1ib3R0b21cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyaXAtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMz5TdGFydCBEYXRlOjwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRhLXNtYWxsXCIgaWQ9XCJzdGFydERhdGVcIj4ke2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyaXAtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMz5EdXJhdGlvbjo8L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0YS1zbWFsbFwiIGlkPVwiZHVyYXRpb25cIj4ke2NhcmQuZHVyYXRpb259IGRheXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRyYXZlbGVyczo8L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF0YS1zbWFsbFwiIGlkPVwidHJhdmVsZXJzXCI+JHtjYXJkLnRyYXZlbGVyc308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRyaXAgU3RhdHVzOjwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXRhLXNtYWxsXCIgaWQ9XCJ0cmlwU3RhdHVzXCI+JHtjYXJkLnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvYXJ0aWNsZT5gO1xuICAgICAgICBjYXJkR3JpZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRyaXBDYXJkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJkR3JpZC5pbm5lckhUTUwgPSBgPGFydGljbGUgY2xhc3M9XCJuby1tYXRjaFwiPk5vIG1hdGNoaW5nIHRyaXBzITwvYXJ0aWNsZT5gO1xuICAgIH1cbiAgfSxcblxuICAvLyBNT0RBTCBESVNQTEFZIEZVTkNUSU9OU1xuXG4gIGJ1aWxkVHJpcENvc3RNb2RhbCh0cmlwQ29zdCkge1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IHRhYmluZGV4PS0xIGNsYXNzPVwiY29zdC1tb2RhbFwiIGlkPVwiY29zdE1vZGFsXCIgYXJpYS1tb2RhbD1cInRydWVcIj5cbiAgICAgIDxzcGFuIHRhYmluZGV4PTAgY2xhc3M9XCJjbG9zZVwiIGlkPVwibW9kYWxDbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8bGFiZWwgZm9yPVwidHJpcC1jb3N0XCI+RXN0aW1hdGVkIHRyaXAgY29zdDo8L2xhYmVsPlxuICAgICAgPHAgY2xhc3M9XCJ0cmlwLWNvc3RcIj4kJHt0cmlwQ29zdH08L3A+XG4gICAgPC9kaXY+YDtcblxuICAgIGxldCBjb3N0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29zdE1vZGFsJyk7XG4gICAgICBcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vc2Nyb2xsJyk7XG4gICAgY29zdE1vZGFsLmZvY3VzKCk7XG4gICAgYWRkTW9kYWxDbG9zZUZ1bmN0aW9uYWxpdHkoKTtcbiAgfSxcblxuICBidWlsZEJvb2tpbmdNb2RhbChuZXdUcmlwLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgZGVzdGluYXRpb24gPSBnZXREZXN0aW5hdGlvbk5hbWUobmV3VHJpcC5kZXN0aW5hdGlvbklELCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgIGxldCBjb3N0U3RyaW5nID0gbmV3VHJpcC5jb3N0LnRvRml4ZWQoMikudG9TdHJpbmcoKTtcbiAgICBsZXQgbWVzc2FnZSA9IGBDb25ncmF0dWxhdGlvbnMsIHlvdSd2ZSBib29rZWQgYSB0cmlwIHRvICR7ZGVzdGluYXRpb259IGZvciAkJHtjb3N0U3RyaW5nfSFgO1xuXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiB0YWJpbmRleD0tMSBjbGFzcz1cImJvb2tpbmctbW9kYWxcIiBpZD1cImJvb2tpbmdNb2RhbFwiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIHRhYmluZGV4PTAgY2xhc3M9XCJjbG9zZVwiIGlkPVwibW9kYWxDbG9zZVwiIHR5cGU9XCJidXR0b25cIiByb2xlPVwiYnV0dG9uXCIgbmFtZT1cImNsb3NlLWJ1dHRvblwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzPVwiYm9va2luZy1tZXNzYWdlXCI+JHttZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PmA7XG5cbiAgICBsZXQgYm9va2luZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2tpbmdNb2RhbCcpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xuICAgIGJvb2tpbmdNb2RhbC5mb2N1cygpO1xuICAgIGFkZE1vZGFsQ2xvc2VGdW5jdGlvbmFsaXR5KCk7XG4gIH0sXG5cbiAgYnVpbGRFcnJvck1vZGFsKGVycm9yTWVzc2FnZSkge1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgdGFiaW5kZXg9LTEgY2xhc3M9XCJlcnJvci1tb2RhbFwiIGlkPVwiZXJyb3JNb2RhbFwiIGFyaWEtbW9kYWw9XCJ0cnVlXCI+XG4gICAgICAgIDxzcGFuIHRhYmluZGV4PTAgY2xhc3M9XCJjbG9zZVwiIGlkPVwibW9kYWxDbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgIDxwIGlkPVwibWVzc2FnZVRleHRcIj4ke2Vycm9yTWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgbGV0IGVycm9yTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3JNb2RhbCcpO1xuXG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xuICAgIGVycm9yTW9kYWwuZm9jdXMoKTtcbiAgICBhZGRNb2RhbENsb3NlRnVuY3Rpb25hbGl0eSgpO1xuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcblxuZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25OYW1lKGlkLCBhbGxEZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGxvY2F0aW9uID0gYWxsRGVzdGluYXRpb25zLmZpbmQocGxhY2UgPT4ge1xuICAgIGlmIChwbGFjZS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiBwbGFjZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbG9jYXRpb24uZGVzdGluYXRpb247XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICBsZXQgc3BsaXQgPSBkYXRlLnNwbGl0KCcvJyk7XG4gIGxldCBuZXdEYXRlID0gYCR7c3BsaXRbMV19LyR7c3BsaXRbMl19LyR7c3BsaXRbMF19YDtcblxuICByZXR1cm4gbmV3RGF0ZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tLZXlQcmVzc2VkKGUpIHtcbiAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJyB8fCBlLmNvZGUgPT09ICdOdW1wYWRFbnRlcicgfHwgZS5jb2RlID09PSAnRXNjYXBlJykge1xuICAgIGNsb3NlTW9kYWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRNb2RhbENsb3NlRnVuY3Rpb25hbGl0eSgpIHtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxDbG9zZScpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjaGVja0tleVByZXNzZWQoZXZlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9zY3JvbGwnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcnJvdy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90aGFpLWJlYWNoLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3R0LWxvZ28tbm8tdGV4dC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90dC1sb2dvLnBuZ1wiOyIsIi8vIElNUE9SVFNcblxuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG5pbXBvcnQgJy4vaW1hZ2VzL3R0LWxvZ28ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvdHQtbG9nby1uby10ZXh0LnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3RoYWktYmVhY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXJyb3cucG5nJztcblxuaW1wb3J0IGFwaUNhbGxzIGZyb20gJy4vYXBpQ2FsbHMuanMnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL1RyYXZlbGVyLmpzJztcbmltcG9ydCBUcmlwIGZyb20gJy4vVHJpcC5qcyc7XG5cbi8vIEdMT0JBTCBWQVJJQUJMRVNcblxubGV0IGN1cnJlbnREYXRlID0gXCIyMDIwLzAxLzAxXCI7XG5cbmxldCB1c2VyLCBjdXJyZW50VHJhdmVsZXI7XG5cbmxldCBhbGxEZXN0aW5hdGlvbnMsIGFsbFRyYXZlbGVycywgYWxsVHJpcHM7XG5cbi8vIFFVRVJZIFNFTEVDVE9SU1xuXG4vLyBsb2dpblxubGV0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKTtcbmxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbkJ0bicpO1xuXG4vLyBuYXZiYXJcbmNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ0bicpO1xuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvJyk7XG5jb25zdCBjb3N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nvc3RCdG4nKTtcbmNvbnN0IGJvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va0J0bicpO1xuY29uc3QgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ291dEJ0bicpO1xuXG4vLyBib29raW5nXG5jb25zdCBkZXN0aW5hdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXN0aW5hdGlvbk1lbnUnKTtcbmNvbnN0IHN0YXJ0RGF0ZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFydERhdGVNZW51Jyk7XG5jb25zdCBkdXJhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1cmF0aW9uSW5wdXQnKTtcbmNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVyc0lucHV0Jyk7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJldHJpZXZlQWxsRGF0YSk7XG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHJldHJpZXZlTG9naW5JbmZvKGV2ZW50KTtcbn0pO1xubmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICBwb3B1bGF0ZUNhcmRHcmlkKGV2ZW50KTtcbn0pKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VXNlckRhdGEpO1xuY29zdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVzdGltYXRlVHJpcENvc3QpO1xuYm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tOZXdUcmlwKTtcbmxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dFVzZXIpO1xuXG4vLyBIQU5ETEVSIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiByZXRyaWV2ZUFsbERhdGEoKSB7XG4gIGFwaUNhbGxzLmdldEFsbERhdGEoKVxuICAgIC50aGVuKGFsbERhdGEgPT4ge1xuICAgICAgYWxsVHJhdmVsZXJzID0gYWxsRGF0YVswXTtcbiAgICAgIGFsbFRyaXBzID0gYWxsRGF0YVsxXTtcbiAgICAgIGFsbERlc3RpbmF0aW9ucyA9IGFsbERhdGFbMl07XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjcmVhdGVVc2VyKHVzZXIpO1xuICAgICAgICBkaXNwbGF5VXNlckRhdGEoKTtcbiAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUxvZ2luSW5mbyhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHVzZXIgPSBldmFsdWF0ZVVzZXJuYW1lSW5wdXQodXNlcm5hbWVJbnB1dC52YWx1ZSk7XG5cbiAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICd0cmF2ZWwyMDIwJyAmJiB1c2VyKSB7XG4gICAgY3JlYXRlVXNlcigpO1xuICAgIGRpc3BsYXlVc2VyRGF0YSgpO1xuICAgIGRvbVVwZGF0ZXMudG9nZ2xlUGFnZVZpZXcoKTtcbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmJ1aWxkRXJyb3JNb2RhbCgnU29ycnksIGxvZ2luIGluZm8gaXMgaW5jb3JyZWN0LicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXIoKSB7XG4gIGN1cnJlbnRUcmF2ZWxlciA9IG5ldyBUcmF2ZWxlcih1c2VyKTtcbiAgY3VycmVudFRyYXZlbGVyLnBvcHVsYXRlVHJpcHMoYWxsVHJpcHMpO1xuICBjdXJyZW50VHJhdmVsZXIuY2FsY3VsYXRlQW5udWFsU3BlbmRpbmcoY3VycmVudERhdGUsIGFsbERlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVc2VyRGF0YSgpIHtcbiAgZG9tVXBkYXRlcy53ZWxjb21lVXNlcihjdXJyZW50VHJhdmVsZXIpO1xuICBkb21VcGRhdGVzLmJ1aWxkQm9va2luZ1NlY3Rpb24oYWxsRGVzdGluYXRpb25zKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VHJhdmVsQ29zdHMoY3VycmVudFRyYXZlbGVyLmFubnVhbENvc3RzKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5R3JpZFRpdGxlKCdNeSBUcmlwcycpO1xuICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwQ2FyZHMoY3VycmVudFRyYXZlbGVyLnRyaXBzLCBhbGxEZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUNhcmRHcmlkKGUpIHtcbiAgbGV0IGNsaWNrZWRJRCA9IGUudGFyZ2V0LmlkO1xuICBsZXQgdXNlckRhdGEsIHRpdGxlVGV4dDtcblxuICBzd2l0Y2ggKGNsaWNrZWRJRCkge1xuICBjYXNlICdjdXJyZW50VHJpcHNCdXR0b24nOlxuICAgIHRpdGxlVGV4dCA9ICdDdXJyZW50IFRyaXBzJztcbiAgICB1c2VyRGF0YSA9IGN1cnJlbnRUcmF2ZWxlci5nZXRDdXJyZW50VHJpcHMoY3VycmVudERhdGUpO1xuICAgIGJyZWFrO1xuICBjYXNlICd1cGNvbWluZ1RyaXBzQnV0dG9uJzpcbiAgICB0aXRsZVRleHQgPSAnVXBjb21pbmcgVHJpcHMnO1xuICAgIHVzZXJEYXRhID0gY3VycmVudFRyYXZlbGVyLmdldFVwY29taW5nVHJpcHMoY3VycmVudERhdGUpO1xuICAgIGJyZWFrO1xuICBjYXNlICdwcmV2aW91c1RyaXBzQnV0dG9uJzpcbiAgICB0aXRsZVRleHQgPSAnUHJldmlvdXMgVHJpcHMnO1xuICAgIHVzZXJEYXRhID0gY3VycmVudFRyYXZlbGVyLmdldFByZXZpb3VzVHJpcHMoY3VycmVudERhdGUpO1xuICAgIGJyZWFrO1xuICBjYXNlICdwZW5kaW5nVHJpcHNCdXR0b24nOlxuICAgIHRpdGxlVGV4dCA9ICdQZW5kaW5nIFRyaXBzJztcbiAgICB1c2VyRGF0YSA9IGN1cnJlbnRUcmF2ZWxlci5nZXRQZW5kaW5nVHJpcHMoKTtcbiAgICBicmVhaztcbiAgfVxuICBkb21VcGRhdGVzLmRpc3BsYXlHcmlkVGl0bGUodGl0bGVUZXh0KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcENhcmRzKHVzZXJEYXRhLCBhbGxEZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBlc3RpbWF0ZVRyaXBDb3N0KCkge1xuICBsZXQgbmV3VHJpcERhdGEgPSByZWNlaXZlQm9va2luZ0lucHV0cygpO1xuICBsZXQgbmV3VHJpcEluc3RhbmNlID0gbmV3IFRyaXAobmV3VHJpcERhdGEpO1xuICBsZXQgaW5wdXRUZXN0ID0gZXZhbHVhdGVCb29raW5nSW5wdXRzKG5ld1RyaXBEYXRhKTtcbiAgaWYgKCFpbnB1dFRlc3QpIHtcbiAgICBkb21VcGRhdGVzLmJ1aWxkRXJyb3JNb2RhbCgnUGxlYXNlIHByb3ZpZGUgYWxsIHJlcXVpcmVkIGJvb2tpbmcgaW5mbyEnKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdUcmlwSW5zdGFuY2UuY2FsY3VsYXRlVHJpcENvc3QoYWxsRGVzdGluYXRpb25zKTtcbiAgICBsZXQgY29zdFN0cmluZyA9IG5ld1RyaXBJbnN0YW5jZS5jb3N0LnRvRml4ZWQoMikudG9TdHJpbmcoKTtcbiAgICBkb21VcGRhdGVzLmJ1aWxkVHJpcENvc3RNb2RhbChjb3N0U3RyaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBib29rTmV3VHJpcCgpIHtcbiAgbGV0IG5ld1RyaXBEYXRhID0gcmVjZWl2ZUJvb2tpbmdJbnB1dHMoKTtcbiAgbGV0IG5ld1RyaXBJbnN0YW5jZSA9IG5ldyBUcmlwKG5ld1RyaXBEYXRhKTtcbiAgbGV0IGlucHV0VGVzdCA9IGV2YWx1YXRlQm9va2luZ0lucHV0cyhuZXdUcmlwRGF0YSk7XG4gIFxuICBpZiAoIWlucHV0VGVzdCkge1xuICAgIGRvbVVwZGF0ZXMuYnVpbGRFcnJvck1vZGFsKCdQbGVhc2UgcHJvdmlkZSBhbGwgcmVxdWlyZWQgYm9va2luZyBpbmZvIScpO1xuICB9IGVsc2Uge1xuICAgIGFwaUNhbGxzLnBvc3ROZXdUcmlwUmVxdWVzdChuZXdUcmlwRGF0YSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXRyaWV2ZUFsbERhdGEoKTtcbiAgICAgICAgbmV3VHJpcEluc3RhbmNlLmNhbGN1bGF0ZVRyaXBDb3N0KGFsbERlc3RpbmF0aW9ucyk7XG4gICAgICAgIGRvbVVwZGF0ZXMuYnVpbGRCb29raW5nTW9kYWwobmV3VHJpcEluc3RhbmNlLCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nb3V0VXNlcigpIHtcbiAgdXNlciA9IG51bGw7XG4gIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9ICcnO1xuICByZXRyaWV2ZUFsbERhdGEoKTtcbiAgZG9tVXBkYXRlcy50b2dnbGVQYWdlVmlldygpO1xufVxuXG4vLyBIRUxQRVIgJiBVVElMIEZVTkNUSU9OU1xuXG5mdW5jdGlvbiBldmFsdWF0ZVVzZXJuYW1lSW5wdXQodXNlcm5hbWUpIHtcbiAgbGV0IHNwbGl0SW5wdXQgPSB1c2VybmFtZS5zcGxpdCgnJyk7XG4gIGxldCBqb2luZWROdW0gPSBwYXJzZUludChzcGxpdElucHV0WzhdICsgc3BsaXRJbnB1dFs5XSk7XG5cbiAgbGV0IHVzZXIgPSBhbGxUcmF2ZWxlcnMuZmluZCh0cmF2ZWxlciA9PiB7XG4gICAgcmV0dXJuIHRyYXZlbGVyLmlkID09PSBqb2luZWROdW07XG4gIH0pO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0VHJpcElEKCkge1xuICBhbGxUcmlwcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGIuaWQgLSBhLmlkO1xuICB9KTtcbiAgbGV0IFsgbGFzdEVudHJ5IF0gPSBhbGxUcmlwcztcblxuICByZXR1cm4gbGFzdEVudHJ5LmlkICsgMTtcbn1cblxuZnVuY3Rpb24gcmVjZWl2ZUJvb2tpbmdJbnB1dHMoKSB7XG4gIGxldCBzdGFydERhdGUgPSBmb3JtYXRTZWxlY3RlZERhdGUoc3RhcnREYXRlU2VsZWN0LnZhbHVlKTtcbiAgbGV0IG51bURheXMgPSBwYXJzZUludChkdXJhdGlvbklucHV0LnZhbHVlKTtcbiAgbGV0IG51bVRyYXZlbGVycyA9IHBhcnNlSW50KHRyYXZlbGVyc0lucHV0LnZhbHVlKTtcbiAgbGV0IGRlc3RJRCA9IHBhcnNlSW50KGRlc3RpbmF0aW9uU2VsZWN0LnZhbHVlKTtcblxuICBsZXQgdHJpcE9iamVjdCA9IHtcbiAgICBcImlkXCI6IGdldE5leHRUcmlwSUQoKSxcbiAgICBcInVzZXJJRFwiOiBjdXJyZW50VHJhdmVsZXIuaWQsXG4gICAgXCJkZXN0aW5hdGlvbklEXCI6IGRlc3RJRCxcbiAgICBcInRyYXZlbGVyc1wiOiBudW1UcmF2ZWxlcnMsXG4gICAgXCJkYXRlXCI6IHN0YXJ0RGF0ZSxcbiAgICBcImR1cmF0aW9uXCI6IG51bURheXMsXG4gICAgXCJzdGF0dXNcIjogXCJwZW5kaW5nXCIsXG4gICAgXCJzdWdnZXN0ZWRBY3Rpdml0aWVzXCI6IFtdLFxuICB9O1xuXG4gIHJldHVybiB0cmlwT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTZWxlY3RlZERhdGUoZGF0ZUlucHV0KSB7XG4gIGxldCBzcGxpdERhdGUgPSBkYXRlSW5wdXQuc3BsaXQoJy0nKTtcbiAgbGV0IGZvcm1hdHRlZERhdGUgPSBzcGxpdERhdGUuam9pbignLycpO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUJvb2tpbmdJbnB1dHMobmV3VHJpcERhdGEpIHtcbiAgbGV0IGlzQ29tcGxldGUgPSB0cnVlO1xuICBpZiAobmV3VHJpcERhdGEuZGF0ZSA9PT0gJycgfHwgIW5ld1RyaXBEYXRhLmR1cmF0aW9uIHx8ICFuZXdUcmlwRGF0YS50cmF2ZWxlcnMgfHwgbmV3VHJpcERhdGEuZGVzdGluYXRpb25JRCA8PSAwKSB7XG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29tcGxldGU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==