var AllergicText =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/allergic-text.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/allergic-text.ts":
/*!******************************!*\
  !*** ./src/allergic-text.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst cursor_ts_1 = __webpack_require__(/*! ./cursor.ts */ \"./src/cursor.ts\");\nconst character_ts_1 = __webpack_require__(/*! ./character.ts */ \"./src/character.ts\");\nclass AllergicText {\n    constructor($element, color) {\n        const cursor = cursor_ts_1.Cursor.get_or_create();\n        this.$element = $element;\n        this.color = color;\n        this.characters = [];\n        this.createCharacters();\n        this.characters.forEach(c => {\n            if (/[\\w]/i.test(c.$element.innerText)) {\n                cursor.addObserver(c);\n            }\n        });\n    }\n    static getByElement($element) {\n        let match = null;\n        AllergicText.cached.forEach((at) => {\n            if (at.$element.isSameNode($element)) {\n                match = at;\n            }\n        });\n        return match || null;\n        // return AllergicText.cached.find((at: AllergicText) => at.$element.isSameNode($element))\n    }\n    static create($element, color) {\n        if (!AllergicText.isValidElement($element)) {\n            throw new Error('Invalid element type');\n        }\n        if (!AllergicText.hasText($element)) {\n            throw new Error('Element has no text to allergize');\n        }\n        let aText = AllergicText.getByElement($element);\n        if (!!aText) {\n            return aText;\n        }\n        aText = new AllergicText($element, color);\n        AllergicText.cached.push(aText);\n        return aText;\n    }\n    static isValidElement(obj) {\n        return ['div', 'p', 'article'].indexOf(obj.tagName ? obj.tagName.toLowerCase() : '') !== -1;\n    }\n    static hasText($element) {\n        return !!$element.innerText.length;\n    }\n    createCharacters() {\n        const text = this.$element.innerText;\n        this.$element.innerText = '';\n        this.characters = text.split('').map(char => {\n            let c = document.createElement('span');\n            c.innerText = char;\n            this.$element.appendChild(c);\n            return new character_ts_1.Character(c, this.color);\n        });\n    }\n}\nexports.AllergicText = AllergicText;\nAllergicText.cached = [];\n\n\n//# sourceURL=webpack://AllergicText/./src/allergic-text.ts?");

/***/ }),

/***/ "./src/character.ts":
/*!**************************!*\
  !*** ./src/character.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst utils_ts_1 = __webpack_require__(/*! ./utils.ts */ \"./src/utils.ts\");\nclass Character {\n    constructor($element, color) {\n        this.$element = $element;\n        this.targetColor = color;\n        this.position = this.$element.getBoundingClientRect();\n        window.addEventListener('scroll', () => this.updatePosition());\n        window.addEventListener('resize', () => this.updatePosition());\n    }\n    update(cPos) {\n        const ePos = this.position;\n        this.$element.style.color = utils_ts_1.pixelToColor(utils_ts_1.distanceFromCursor(ePos, cPos), this.targetColor);\n    }\n    updatePosition() {\n        this.position = this.$element.getBoundingClientRect();\n    }\n}\nexports.Character = Character;\n\n\n//# sourceURL=webpack://AllergicText/./src/character.ts?");

/***/ }),

/***/ "./src/cursor.ts":
/*!***********************!*\
  !*** ./src/cursor.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Cursor {\n    constructor() {\n        this.position = { x: 0, y: 0 };\n        this.observers = [];\n        window.addEventListener('mousemove', e => this.observers.forEach(o => {\n            o.update({ x: e.clientX, y: e.clientY });\n        }));\n    }\n    addObserver(observer) {\n        this.observers ? this.observers.push(observer) : this.observers = [];\n        // this.observers.find(o => o._id === observer._id) || this.observers.push(observer)\n    }\n    removeObserver(observer) {\n        // this.observers = this.observers.filter(o => o._id !== observer._id)\n    }\n    static get_or_create() {\n        if (Cursor.cached) {\n            return Cursor.cached;\n        }\n        return Cursor.cached = new Cursor();\n    }\n}\nexports.Cursor = Cursor;\n\n\n//# sourceURL=webpack://AllergicText/./src/cursor.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.getValueInRange = (value, min, max) => {\n    return value < min ? min : value - (value - max) * Number(value > max);\n};\nexports.distanceFromCursor = (ePos, cPos) => {\n    const distance = {\n        x: Math.abs(ePos.x - cPos.x),\n        y: Math.abs(ePos.y - cPos.y)\n    };\n    return Math.floor(Math.sqrt(Math.pow(distance.x, 2) + Math.pow(distance.y, 2)));\n};\nexports.pixelToColor = (pixels, colorName) => {\n    const value = 255 - exports.getValueInRange(pixels, 0, 255);\n    return `rgb(${colorName === 'red' ? value : 0},${colorName === 'green' ? value : 0},${colorName === 'blue' ? value : 0})`;\n};\nexports.pixelToScale = (pixels, maxScaleValue) => {\n    return String(maxScaleValue - exports.getValueInRange(pixels, 1, maxScaleValue));\n};\n\n\n//# sourceURL=webpack://AllergicText/./src/utils.ts?");

/***/ })

/******/ });