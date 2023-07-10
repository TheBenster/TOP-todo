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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Quicksand:wght@400;500&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --bg: #212121;\n  --side-clr: #111827;\n  --drk-clr: #030712;\n}\n\nbody {\n  width: 100vw;\n  font-family: \"Inter\";\n  color: black;\n  background-color: white;\n  overflow-x: hidden;\n}\n.task-container {\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  width: 100vw;\n  height: 15vh;\n  padding-left: 30%;\n}\n\n.add-task {\n  background-color: white;\n  color: black;\n  font-weight: 500;\n}\n#task-add {\n  border-radius: 15px;\n  border: solid white 1px;\n  background-color: white;\n  color: black;\n  font-weight: 500;\n  font-size: 1.4rem;\n}\n#task-add:hover {\n  color: #1e3a8a;\n  cursor: pointer;\n}\n\n.modal {\n  display: none;\n  width: 25vw;\n  height: 50vh;\n  color: black;\n  background-color: white;\n  border-radius: 15px;\n}\n\ndialog[open] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n  height: 315px;\n  margin-top: 80px;\n}\ndialog.projModal[open] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 1fr 1fr;\n  gap: 25px;\n  border-radius: 15px;\n  height: 140px;\n  border: none;\n  box-shadow: 0px 5px 4px;\n}\ninput {\n  height: 25px;\n  border-radius: 35px;\n  background-color: #d0d0d0;\n  padding-left: 10px;\n  border: none;\n}\n.entry {\n  display: flex;\n  flex-direction: column;\n}\n#close-modal {\n  height: 25px;\n  margin-top: 10px;\n  color: white;\n  background-color: var(--drk-clr);\n  border: none;\n  border-radius: 35px;\n}\n#submit {\n  margin-top: 10px;\n  height: 25px;\n  color: white;\n  background-color: #212121;\n  border: none;\n  border-radius: 35px;\n}\n#close-modal:hover,\n#submit:hover {\n  cursor: pointer;\n}\n\n.task {\n  width: 75vw;\n  height: 10vh;\n  background-color: ghostwhite;\n  color: black;\n  border: 1px solid;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  text-align: center;\n  flex-wrap: wrap;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  gap: 10px;\n  margin-left: 0px;\n  padding-left: 50px;\n}\n\n.task-div {\n  display: flex;\n  align-items: start;\n  justify-content: end;\n  flex-direction: column;\n  margin-left: 10vw;\n  gap: 25px;\n}\n\n.line-break {\n  border-top: solid 0.5px black;\n  width: 40vw;\n}\n.uiDiv {\n  height: 20px;\n  width: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: space-between;\n}\n\n.task-line {\n  border-top: solid 0.2px gray;\n}\n.side-section {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100vh;\n  background-color: var(--side-clr);\n  color: white;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.side-section h2 {\n  margin-bottom: 10px;\n}\n\n#task-projects {\n  list-style: none;\n  font-size: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#new-proj {\n  border-radius: 20px;\n  background-color: #253556;\n  color: white;\n  border: none;\n  height: 40px;\n  width: 140px;\n}\n\n#new-proj:hover {\n  border: solid 1px #253556;\n  background-color: white;\n  color: #253556;\n  cursor: pointer;\n  transition-duration: 0.4s;\n}\n\n#selected {\n  background-color: hsl(222, 31%, 30%);\n  color: white;\n  height: 50px;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n#task-projects > li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.fas.fa-trash-alt {\n  height: 15px;\n  width: 15px;\n}\n.fas.fa-trash-alt:hover {\n  cursor: pointer;\n}\n.close-n-cancel {\n  padding-top: 25px;\n  display: flex;\n  align-items: space-between;\n  justify-content: space-between;\n}\n\n.close-n-cancel button {\n  width: 60px;\n  height: 20px;\n  border-radius: 12px;\n  border: none;\n  background-color: #1e3a8a;\n  color: white;\n  box-shadow: 0px 2px 5px black;\n}\n\n#task-projects li:hover {\n  cursor: pointer;\n}\n\n.uiDiv > button {\n  width: 100px;\n  height: 20px;\n  background-color: #1e3a8a;\n  color: white;\n  border: none;\n  border-radius: 15px;\n}\n.uiDiv > button:hover {\n  color: #030712;\n  border: solid #030712 0.5px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  background-color: white;\n}\n\n.proj-col {\n  border-radius: 50px;\n  width: 20px;\n  height: 20px;\n}\n#red-proj {\n  background-color: #ef4444;\n}\n\n#purple-proj {\n  background-color: #6366f1;\n}\n#blue-proj {\n  background-color: #2563eb;\n}\n#pink-proj {\n  background-color: #d946ef;\n}\n#palepnk-proj {\n  background-color: #f43f5e;\n}\n#green-proj {\n  background-color: #22c55e;\n}\n#yellow-proj {\n  background-color: #fbbf24;\n}\n.entry-color {\n  padding-top: 20px;\n  display: flex;\n  gap: 10px;\n}\n.selected-color {\n  border: solid 2px rgb(0, 191, 255);\n}\n\n@media (max-width: 700px) {\n  .task {\n    height: 200px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\nconst taskBtn = document.querySelector(\"#task-add\");\nconst closeBtn = document.querySelector(\"#close-modal\");\nconst modal = document.querySelector(\".modal\");\nconst submitBtn = document.querySelector(\"#submit\");\nconst newProj = document.querySelector(\"#new-proj\");\nconst projModal = document.querySelector(\".projModal\");\nconst submitProj = document.querySelector(\"#submitProj\");\nconst cancelProj = document.querySelector(\"#cancelProj\");\nconst trashIcon = document.querySelector(\".fas.fa-trash-alt\");\n\nfunction openModal() {\n  modal.setAttribute(\"open\", \"true\");\n}\n\nfunction closeModal() {\n  modal.removeAttribute(\"open\");\n}\n\ntaskBtn.addEventListener(\"click\", openModal);\ncloseBtn.addEventListener(\"click\", closeModal);\n\nsubmitBtn.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.addTaskToList)();\n  closeModal();\n});\n\nfunction closeProjModal() {\n  projModal.removeAttribute(\"open\");\n}\n\n// appends project to ul and eventually will assign #selected to the current project\nnewProj.addEventListener(\"click\", openOtherModal);\ncancelProj.addEventListener(\"click\", closeProjModal);\n\nsubmitProj.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.addProjectToList)();\n  closeProjModal();\n});\n\ntrashIcon.addEventListener(\"click\", _todos__WEBPACK_IMPORTED_MODULE_1__.delProj);\nfunction openOtherModal() {\n  projModal.setAttribute(\"open\", \"true\");\n}\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.loadProjectsFromStorage)();\n});\nwindow.addEventListener(\"beforeunload\", () => {\n  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.saveProjectsToLocalStorage)();\n});\n\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToList: () => (/* binding */ addProjectToList),\n/* harmony export */   addTaskToList: () => (/* binding */ addTaskToList),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),\n/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\nlet tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\nlet projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\nlet taskList = document.querySelector(\".task-div\");\nlet projectList = document.querySelector(\"#task-projects\");\nconst newProj = document.querySelector(\"#new-proj\");\nlet selectedProject = null;\n\n// Todo obj\nclass Todo {\n  constructor(\n    title,\n    description,\n    dueDate,\n    priority,\n    notes,\n    checklist,\n    project\n  ) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checklist = checklist;\n    this.project = project;\n  }\n}\n\n// add task to array.\nfunction addTaskToList() {\n  let titleInput = document.querySelector(\"#title\");\n  let descInput = document.querySelector(\"#description\");\n  let dateInput = document.querySelector(\"#date\");\n  let priorityInput = document.querySelector(\"#priority\");\n  let notesInput = document.querySelector(\"#notes\");\n\n  let title = titleInput.value;\n  let description = descInput.value;\n  let dueDate = dateInput.value;\n  let priority = priorityInput.value;\n  let notes = notesInput.value;\n\n  if (title.length === 0) {\n    titleInput.value = \"You can't do this\";\n    return;\n  }\n\n  let newTask = new Todo(\n    title,\n    description,\n    dueDate,\n    priority,\n    notes,\n    [],\n    selectedProject\n  );\n\n  tasks.push(newTask);\n  displayTasks();\n  clearInputFields();\n  saveTasksToLocalStorage();\n}\n\nfunction deleteTask(index) {\n  tasks.splice(index, 1);\n  displayTasks();\n  saveTasksToLocalStorage();\n}\n\n// add project to array\n// add project to array\nfunction addProjectToList() {\n  let projectNameInput = document.querySelector(\"#project\");\n  let projectName = projectNameInput.value;\n\n  if (projectName.length === 0) {\n    projectNameInput.value = \"Please enter a project name\";\n    return;\n  }\n\n  const newProject = document.createElement(\"li\");\n  newProject.textContent = projectName;\n\n  const projColorDiv = document.createElement(\"div\");\n  projColorDiv.classList.add(\"proj-col\");\n\n  // const selectedColorDiv = document.querySelector(\".selected-color\");\n  // projColorDiv.style.backgroundColor = selectedColorDiv.dataset.color;\n\n  newProject.prepend(projColorDiv);\n  projectList.appendChild(newProject);\n  newProj.className = \"taskProj\";\n  projects.push(projectName);\n  displayProjects();\n  saveProjectsToLocalStorage();\n}\n\nconst exampleProject = \"Example Project\";\n\n// append to ul\nfunction displayProjects() {\n  projectList.innerHTML = \"\";\n\n  projects.forEach((project, index) => {\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = project;\n\n    const trashIcon = document.createElement(\"i\");\n    trashIcon.classList.add(\"fas\", \"fa-trash-alt\");\n    trashIcon.addEventListener(\"click\", () => delProj(index));\n\n    listItem.appendChild(trashIcon);\n    projectList.appendChild(listItem);\n\n    // add event listener to select the project\n    listItem.addEventListener(\"click\", () => {\n      const selectedListItem = projectList.querySelector(\"#selected\");\n      if (selectedListItem) {\n        selectedListItem.removeAttribute(\"id\");\n      }\n      listItem.id = \"selected\";\n      selectProject(project);\n      updateSelectedListItemBackground();\n    });\n\n    // check if the current project is selected\n    if (project === selectedProject) {\n      listItem.id = \"selected\";\n    }\n  });\n\n  // project color picker\n  // const colorDivs = document.querySelectorAll(\".proj-col\");\n  // colorDivs.forEach((div) => {\n  //   div.addEventListener(\"click\", () => {\n  //     const selectedColorDiv = document.querySelector(\".selected-color\");\n  //     if (selectedColorDiv) {\n  //       selectedColorDiv.classList.remove(\"selected-color\");\n  //     }\n  //     div.classList.add(\"selected-color\");\n  //     updateSelectedListItemBackground();\n  //   });\n  // });\n}\n\n// function updateSelectedListItemBackground() {\n//   const selectedListItem = projectList.querySelector(\"#selected\");\n//   const selectedColorDiv = document.querySelector(\".selected-color\");\n//   if (selectedListItem && selectedColorDiv) {\n//     selectedListItem.style.backgroundColor = selectedColorDiv.dataset.color;\n//   }\n// }\n\nfunction selectProject(project) {\n  selectedProject = project;\n  displayProjects();\n  displayTasks();\n}\n\n// click trashicon and delete proect\nfunction delProj(index) {\n  projects.splice(index, 1);\n  displayProjects();\n  saveProjectsToLocalStorage();\n}\n\n// when you click cancel\nfunction clearInputFields() {\n  let titleInput = document.querySelector(\"#title\");\n  let descInput = document.querySelector(\"#description\");\n  let dateInput = document.querySelector(\"#date\");\n  let priorityInput = document.querySelector(\"#priority\");\n  let notesInput = document.querySelector(\"#notes\");\n\n  titleInput.value = \"\";\n  descInput.value = \"\";\n  dateInput.value = \"\";\n  priorityInput.value = \"\";\n  notesInput.value = \"\";\n}\n\n// display tasks in body\nfunction displayTasks() {\n  taskList.innerHTML = \"\";\n\n  // once clicked, will filter to that specific folder\n  const filteredTasks = tasks.filter(\n    (task) => task.project === selectedProject\n  );\n\n  filteredTasks.forEach((task, index) => {\n    const taskDiv = document.createElement(\"div\");\n    taskDiv.classList.add(\"task\");\n\n    const titleDiv = document.createElement(\"div\");\n    titleDiv.innerHTML = `Task<br><hr class='task-line'>${task.title}`;\n\n    const descDiv = document.createElement(\"div\");\n    if (task.description === \"\") {\n      descDiv.innerHTML = \"\";\n    } else {\n      descDiv.innerHTML = `Description<br><hr class='task-line'>${task.description}`;\n    }\n\n    const dueDiv = document.createElement(\"div\");\n    dueDiv.innerHTML = `Due Date<br><hr class='task-line'>${task.dueDate}`;\n\n    const priorDiv = document.createElement(\"div\");\n    priorDiv.innerHTML = `Priority<br><hr class='task-line'>${task.priority}`;\n\n    const uiDiv = document.createElement(\"div\");\n    uiDiv.classList.add(\"uiDiv\");\n\n    const delBtn = document.createElement(\"button\");\n    delBtn.classList.add(\"del-btn\");\n    delBtn.textContent = \"Delete\";\n    delBtn.addEventListener(\"click\", () => deleteTask(index));\n\n    const checkbox = document.createElement(\"input\");\n    checkbox.setAttribute(\"type\", \"checkbox\");\n    checkbox.checked = task.completed;\n    checkbox.addEventListener(\"change\", () => toggleTaskCompletion(index));\n\n    uiDiv.appendChild(delBtn);\n    taskDiv.appendChild(titleDiv);\n    taskDiv.appendChild(descDiv);\n    taskDiv.appendChild(dueDiv);\n    taskDiv.appendChild(priorDiv);\n    taskDiv.appendChild(uiDiv);\n    taskDiv.appendChild(checkbox);\n    taskList.appendChild(taskDiv);\n  });\n}\n\nfunction saveTasksToLocalStorage() {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction saveProjectsToLocalStorage() {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nfunction loadProjectsFromLocalStorage() {\n  projects = JSON.parse(localStorage.getItem(\"projects\")) || [];\n  displayProjects();\n}\n\ndisplayTasks();\nloadProjectsFromLocalStorage();\n\n\n//# sourceURL=webpack://to-do/./src/todos.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;