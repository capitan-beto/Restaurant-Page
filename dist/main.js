/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icons/favicon-32x32.png */ \"./src/images/icons/favicon-32x32.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/hamburger.svg */ \"./src/images/icons/hamburger.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/home.svg */ \"./src/images/icons/home.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/info.svg */ \"./src/images/icons/info.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/location.svg */ \"./src/images/icons/location.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/instagram.svg */ \"./src/images/icons/instagram.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! images/icons/facebook.svg */ \"./src/images/icons/facebook.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --main-bg-yellow: #ffc107;\\n}\\n\\nbody {\\n    margin: 0;\\n    font-family: 'Noto Sans TC', sans-serif;\\n\\n    display: grid;\\n    grid-template-columns: 20vw 80vw;\\n    grid-template-rows: 9vh 91vh;\\n}\\n\\n#header {\\n    background-color: black;\\n    display: flex;\\n    align-items: center;\\n\\n    grid-column: 1 / -1;\\n}\\n\\n.logo, .hamburger {\\n    width: 32px;\\n    height: 32px;\\n    margin: 0 5px 0 5px;\\n    cursor: pointer;\\n}\\n\\n.logo {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.hamburger {\\n    border: none;\\n\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: 100%;\\n    filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(293deg) brightness(113%) contrast(100%);\\n}\\n\\n#content {\\n    display: grid;\\n    grid-template-rows: 1fr 5fr;\\n    grid-column: 1 / -1;\\n    grid-row: 2 / 3;\\n}\\n\\n\\n.shade-content {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    background: #000;\\n    filter: opacity(.3);\\n    display: none;\\n}\\n\\n.menu-categories {\\n    background: var(--main-bg-yellow);\\n    padding: 16px 0 0 20px;\\n\\n    font-size: 32px;\\n    font-weight: 900;\\n    color: #fff;\\n}\\n\\n.options {\\n    display: grid;\\n\\n    grid-template-columns: repeat(3, 1fr);\\n}\\n\\n.options > button {\\n    margin: 10px;\\n    border-radius: 5px;\\n    color: #fff;\\n    font-weight: bolder;\\n    font-size: large;\\n    text-transform: uppercase;\\n    border: none;\\n    cursor: pointer;\\n\\n    background-size: cover;\\n    background-position: center center;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.options > button > p {\\n    width: 100%;\\n    height: 100%;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.options > button > p:hover {\\n    backdrop-filter: blur(3px);\\n}\\n\\n#sidebar {\\n    background-color: var(--main-bg-yellow);\\n\\n    grid-row: 2 / 3;\\n\\n}\\n\\n.hide{\\n    display: none;\\n}\\n\\n.sidebar-option {\\n    display: flex;\\n    align-items: center;\\n    background-color: var(--main-bg-yellow);\\n    border: none;\\n    width: 100%;\\n    padding: 7% 0 7% 0;\\n\\n    font-weight: bold;\\n    font-size: 16px;\\n    color: #fff;\\n    letter-spacing: 1px;\\n}\\n\\n.sidebar-option:hover {\\n    background-color: rgba(255, 255, 255, .2);\\n    cursor: pointer;\\n}\\n\\n.sidebar-option > div {\\n    margin: 0 5px 0 5px;\\n}\\n\\n.side-icon {\\n    width: 20px;\\n    height: 20px;\\n    background-size: 100%;\\n\\n    filter: invert(99%) sepia(3%) saturate(0%) hue-rotate(293deg) brightness(113%) contrast(100%);\\n}\\n\\n.sidebar-option:nth-child(1) > .side-icon{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\n\\n.sidebar-option:nth-child(1) > .side-text::before {\\n    content: \\\"Inicio\\\";\\n}\\n\\n.sidebar-option:nth-child(2) > .side-icon{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n}\\n\\n.sidebar-option:nth-child(2) > .side-text::before {\\n    content: \\\"Información\\\";\\n}\\n\\n.sidebar-option:nth-child(3) > .side-icon{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n}\\n\\n.sidebar-option:nth-child(3) > .side-text::before {\\n    content: \\\"Ubicación\\\";\\n}\\n\\n.sidebar-option:nth-child(4) > .side-icon{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n}\\n\\n.sidebar-option:nth-child(4) > .side-text::before {\\n    content: \\\"Instagram\\\";\\n}\\n\\n.sidebar-option:nth-child(5) > .side-icon{\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n}\\n\\n.sidebar-option:nth-child(5) > .side-text::before {\\n    content: \\\"Facebook\\\";\\n}\\n\\n.about-body {\\n    display: grid;\\n    gap: 30px;\\n    margin: 0;\\n    grid-row: 1 / 3;\\n\\n    justify-self: center;\\n    width: 90%;\\n    padding: 15px 0;\\n\\n    background-color: var(--main-bg-yellow);\\n    border-radius: 5px;\\n}\\n\\n.member-container {\\n    display: grid;\\n\\n    grid-template-columns: 300px 1fr;\\n    grid-template-rows: 50px auto;\\n    margin-left: 5vw;\\n    background: rgb(0,0,0);\\n    background: linear-gradient(94deg, rgba(0,0,0,1) 0%, rgba(64,48,2,1) 44%, rgba(104,79,3,1) 59%, rgba(144,109,4,1) 75%, rgba(255,193,7,1) 100%);\\n    padding: 25px;\\n    border-radius: 5px;\\n}\\n\\n.img-member{\\n    grid-area: 1 / 1 / 3 / 2;\\n\\n    width: 230px;\\n    aspect-ratio: 1 / 1;\\n    background-size: cover;\\n    background-position: center;\\n    border-radius: 5px;\\n}\\n\\n.img-member:hover {\\n    filter: grayscale(100%);\\n}\\n\\n.title-member{\\n    grid-area: 1 / 2 / 2 / 3;\\n    margin: 0;\\n    height: 50px;\\n    color: #fff;\\n}\\n\\n.para-member{\\n    grid-area: 2 / 2 / 3 / 3;\\n    margin: 0;\\n    height: 50px;\\n    color: #fff;\\n}\\n\\n.map-container {\\n    display: grid;\\n    justify-content: center;\\n    align-items: center;\\n    justify-self: center;\\n}\\n\\n\\n.map-container iframe {\\n    width: 600px;\\n    height: 450px;\\n    border: 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\n\n\nfunction aboutPage() {\n    let categories = document.querySelector(\"#content\");\n    let shade = document.querySelector(\".shade-content\");\n    let sidebar = document.querySelector(\"#sidebar\");\n\n    categories.remove();\n    shade.style.display = \"none\";\n    sidebar.classList.toggle(\"hide\");\n\n    let container = document.createElement(\"div\");\n    container.setAttribute(\"id\", \"content\");\n    container.style.gridTemplateRows = \"100%\";\n    document.body.style.backgroundColor = \"#000\";\n\n    let content = document.createElement(\"div\");\n    content.classList.add(\"about-body\");\n    container.appendChild(content);\n\n    let entry = (() => {\n        for (const item of _data_js__WEBPACK_IMPORTED_MODULE_1__.about){\n            let member = document.createElement(\"div\");\n            member.classList.add(\"member-container\");\n            \n            let imgMember = document.createElement(\"div\");\n            imgMember.classList.add(\"img-member\");\n            let titleMember = document.createElement(\"h1\");\n            titleMember.classList.add(\"title-member\");\n            let paraMember = document.createElement(\"p\");\n            paraMember.classList.add(\"para-member\");\n\n            imgMember.style.backgroundImage = item.img;\n            titleMember.textContent = item.name;\n            paraMember.textContent = item.about;\n            \n            \n            content.appendChild(member);\n            member.append(imgMember, titleMember, paraMember);\n\n        }\n    })();\n\n   return container;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about),\n/* harmony export */   \"items\": () => (/* binding */ items)\n/* harmony export */ });\nlet items = [\n    {\n        name: \"Entradas\",\n        img: \"url(../src/images/items/gyozas.jpg)\"\n    },\n    {\n        name: \"Combos\",\n        img: \"url(../src/images/items/combos.jpg)\"\n    },\n    {\n        name: \"Gohan\",\n        img: \"url(../src/images/items/gohan.jpg)\"\n    },\n    {\n        name: \"Nuestras Variedades\",\n        img: \"url(../src/images/items/variedades.jpg)\"\n    },\n    {\n        name: \"Promos\",\n        img: \"url(../src/images/items/promos.jpg)\"\n    },\n    {\n        name: \"Barcos\",\n        img: \"url(../src/images/items/barcos.jpg)\"\n    },\n    {\n        name: \"Salsas\",\n        img: \"url(../src/images/items/salsas.jpg)\"\n    },\n    {\n        name: \"Extras\",\n        img: \"url(../src/images/items/extras.jpg)\"\n    },\n    {\n        name: \"Ramen\",\n        img: \"url(../src/images/items/ramen.jpg)\"\n    },\n]\n\nlet about = [\n    {\n        name: \"Sushi Rock\",\n        about: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\",\n        id: \"sushi\",\n        img: \"url(../src/images/members/local.png)\"\n    },\n    {\n        name: \"Lean\",\n        about: \"Lorem ipsum dolor sit amet.\",\n        id: \"lean\",\n        img: \"url(../src/images/members/lean.png)\"\n    },\n    {\n        name: \"Agula\",\n        about: \"Lorem ipsum dolor sit amet.\",\n        id: \"agula\",\n        img: \"url(../src/images/members/agula.png)\"\n    },\n]\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n\n\n\n\n\nfunction header() {\n    const bodyHeader = document.createElement(\"div\");\n    bodyHeader.setAttribute(\"id\", \"header\");\n    \n    const hamburger = document.createElement(\"button\");\n    hamburger.classList.add(\"hamburger\");\n    \n    const shade = document.createElement(\"div\");\n    document.body.appendChild(shade);\n    shade.classList.add(\"shade-content\");\n    shade.onclick = () => { displaySide() };\n    \n    hamburger.addEventListener(\"click\", () => {\n        displaySide();\n    })\n    \n    const displaySide = () => {\n        const sideContainer = document.getElementById(\"sidebar\");\n        const content = document.getElementById(\"content\")\n        if(sideContainer.classList.contains(\"hide\")){ \n            sideContainer.classList = \"visible\";\n            content.style.gridColumn = \"2 / -1\";\n            shade.style.display = \"block\";\n        } else {\n            sideContainer.classList = \"hide\";\n            content.style.gridColumn = \"1 / -1\";\n            shade.style.display = \"none\";\n        }\n    }\n    \n    const logo = document.createElement(\"div\");\n    logo.classList.add(\"logo\");\n    \n    logo.addEventListener(\"click\", () => {\n        document.location.href = \"index.html\";\n    })\n    \n    bodyHeader.append(hamburger, logo);\n    \n    return bodyHeader;\n}\n\n\n\nfunction container() {\n    const content = document.createElement(\"div\");\n    content.setAttribute(\"id\", \"content\");\n    \n    const cat = document.createElement(\"div\");\n    cat.classList.add(\"menu-categories\");\n    cat.textContent = \"Categorías\";\n    \n    const optionsContainer = document.createElement(\"div\");\n    optionsContainer.classList.add(\"options\");\n    \n    _data_js__WEBPACK_IMPORTED_MODULE_1__.items.forEach(item => {\n        let menuItem = document.createElement(\"button\");\n        let p = document.createElement(\"p\");\n        p.textContent = item.name;\n        menuItem.style.backgroundImage = item.img;\n        menuItem.appendChild(p);\n        optionsContainer.append(menuItem);\n    })\n    \n    content.append(cat,optionsContainer);\n    \n    return content;\n}\n\nfunction sidebar() {\n    const sideContainer = document.createElement(\"div\");\n    sideContainer.setAttribute(\"id\", \"sidebar\");\n    sideContainer.classList.add(\"hide\");\n    \n    for(let i = 0; i < 5; i++){\n        let a = document.createElement(\"button\");\n        a.classList.add(\"sidebar-option\");\n        let icon = document.createElement(\"div\");\n        icon.classList.add(\"side-icon\");\n        let text = document.createElement(\"div\");\n        text.classList.add(\"side-text\");\n        \n        \n        a.append(icon, text);\n        sideContainer.appendChild(a);\n    }\n    \n    \n    return sideContainer;\n}\n\ndocument.body.append(header(), container(), sidebar());\n\nfunction sidebarLinks() {\n    const home = document.querySelector(\"#sidebar button:nth-child(1)\");\n    home.addEventListener(\"click\", () => { \n        returnHome();\n    });\n    \n    const info = document.querySelector(\"#sidebar button:nth-child(2)\");\n    info.addEventListener(\"click\", () => {\n        document.body.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.aboutPage)());\n    })\n\n    const location = document.querySelector(\"#sidebar button:nth-child(3)\");\n    location.addEventListener(\"click\", () => {\n        document.body.appendChild((0,_location_js__WEBPACK_IMPORTED_MODULE_3__.locationPage)());\n    })\n    \n    const insta = document.querySelector(\"#sidebar button:nth-child(4)\");\n    insta.addEventListener(\"click\", () => {\n        window.open(\"http://www.instagram.com/sushirock.arroyito\");\n    })\n\n    const fb = document.querySelector(\"#sidebar button:nth-child(5)\");\n    fb.addEventListener(\"click\", () => {\n        window.open(\"https://www.facebook.com/sushirock.arroyito\");\n    })\n    \n}\n\nfunction returnHome() {\n    let categories = document.querySelector(\"#content\");\n    categories.remove();\n    document.querySelector(\".shade-content\").style.display = \"none\";\n    document.body.appendChild(container());\n    document.body.style.background = \"white\";\n    document.querySelector(\"#sidebar\").classList = \"hide\";\n}\n\nsidebarLinks();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"locationPage\": () => (/* binding */ locationPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction locationPage() {\n    let categories = document.querySelector(\"#content\");\n    let shade = document.querySelector(\".shade-content\");\n    let sidebar = document.querySelector(\"#sidebar\");\n\n    categories.remove();\n    shade.style.display = \"none\";\n    sidebar.classList.toggle(\"hide\");\n\n    let container = document.createElement(\"div\");\n    container.setAttribute(\"id\", \"content\");\n    container.style.gridTemplateRows = \"1fr\"\n    document.body.style.backgroundColor = \"#000\";\n\n    let content = document.createElement(\"div\");\n    content.classList.add(\"about-body\");\n    container.appendChild(content);\n\n    let mapContainer = document.createElement(\"div\");\n    mapContainer.classList.add(\"map-container\");\n    content.appendChild(mapContainer);\n\n    const iframe = document.createElement(\"iframe\");\n    iframe.src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d724.4348157511951!2d-63.05746537781037!3d-31.415598189021004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943355d1d3dae2d3%3A0xd4d321103c547f23!2sSushi%20Rock!5e0!3m2!1sen!2sar!4v1675296641642!5m2!1sen!2sar\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade`\n    mapContainer.appendChild(iframe);\n\n   return container;\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/location.js?");

/***/ }),

/***/ "./src/images/icons/facebook.svg":
/*!***************************************!*\
  !*** ./src/images/icons/facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95728f8f306ef79ecfe8.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/facebook.svg?");

/***/ }),

/***/ "./src/images/icons/favicon-32x32.png":
/*!********************************************!*\
  !*** ./src/images/icons/favicon-32x32.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d761c31ca35065901821.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/favicon-32x32.png?");

/***/ }),

/***/ "./src/images/icons/hamburger.svg":
/*!****************************************!*\
  !*** ./src/images/icons/hamburger.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"113d59e2703636dfe157.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/hamburger.svg?");

/***/ }),

/***/ "./src/images/icons/home.svg":
/*!***********************************!*\
  !*** ./src/images/icons/home.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07ed4b9aaa91b821b21d.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/home.svg?");

/***/ }),

/***/ "./src/images/icons/info.svg":
/*!***********************************!*\
  !*** ./src/images/icons/info.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"387faf68f701656b69f5.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/info.svg?");

/***/ }),

/***/ "./src/images/icons/instagram.svg":
/*!****************************************!*\
  !*** ./src/images/icons/instagram.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbf657178a36a03de78e.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/instagram.svg?");

/***/ }),

/***/ "./src/images/icons/location.svg":
/*!***************************************!*\
  !*** ./src/images/icons/location.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f059afe05723edb3a73.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/icons/location.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;