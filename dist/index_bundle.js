/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/app/components/select/index.js":
/*!********************************************!*\
  !*** ./src/app/components/select/index.js ***!
  \********************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf(derived);
  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
}
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// TODO разобраться, как сделать адрес от app
var Select = /*#__PURE__*/function (_HTMLElement) {
  function Select() {
    var _this2;
    _classCallCheck(this, Select);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _callSuper(this, Select, [].concat(args));
    _defineProperty(_this2, "init", function (options) {
      _this2.sortOptions(options);

      // this.selectElement = document.createElement(
      //   .SELECT);
      _this2.selectElement.setAttribute('tabIndex', _this2.getAttribute('tabIndex'));
      _this2.addOptions(_this2.options);
      _this2.appendChild(_this2.selectElement);
    });
    _defineProperty(_this2, "sortOptions", function (options) {
      _this2.options = _toConsumableArray(options).sort(function (_ref, _ref2) {
        var name1 = _ref.name;
        var name2 = _ref2.name;
        switch (true) {
          case name1 < name2:
            return -1;
          case name1 > name2:
            return 1;
          default:
            return 0;
        }
      });
    });
    _defineProperty(_this2, "addOptions", function (options) {
      _this2.options = options;
      options.forEach(function (_ref3) {
        var id = _ref3.id,
          name = _ref3.name;
        var option = document.createElement('option');
        option.value = id;
        option.innerHTML = name;
        _this2.selectElement.appendChild(option);
      });
    });
    _defineProperty(_this2, "updateOptions", function (options) {
      _this2.removeAllOptions();
      _this2.sortOptions(options);
      _this2.addOptions(_this2.options);
    });
    _defineProperty(_this2, "removeAllOptions", function () {
      while (_this2.selectElement.firstChild) {
        _this2.selectElement.removeChild(_this2.selectElement.firstChild);
      }
    });
    return _this2;
  }
  _inherits(Select, _HTMLElement);
  return _createClass(Select);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('select-with-options', Select);

//# sourceURL=webpack://recipe-cards/./src/app/components/select/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! edit-icon.svg */ "./src/edit-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! cancell-icon.svg */ "./src/cancell-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  width: 100vw;
  height: 100vh;
}

body {
  font-family: monospace;
  color: #1B1D19;
}

.page {
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 800px 1fr;
}

.page__title {
  display: grid;
  justify-content: center;
}

.table {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
}

.table__head {
  display: grid;
  grid-template-columns: 226px 226px 226px 36px 36px;
  height: 42px;
  background: #DBB6A4;
}

.table__head div {
  /* border: 4px solid white; */
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 8px 0px;
  border-bottom: 0;
}

.table__head div:not(:last-child) {
  border-right: 0;
}

/* TODO миксин */
.table__row {
  display: grid;
  grid-template-columns: 226px 226px 226px 32px 32px;
  border: 1px solid #E5E5E5;
  border-top: 0;
  border-bottom: 0;
}

.table__row:last-child {
  border: 1px solid #E5E5E5;
}

.table__cell {
  padding: 8px;
  border-bottom: 0;
}

.table__cell:not(:last-child) {
  border-right: 0px;
}

.table {
  width: 752px;
  font-size: 16px;
  color: #1B1D19;
  margin: 24px;
}

.table button {
  padding: 0px;
}

.table input {
  border: none;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
}

.add-button {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 100%;
  width: 32px;
  height: 32px;
  /* background: mediumaquamarine; */
  border: none;
  background-color: transparent;
}

.delete-button {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: 100%;
  width: 32px;
  height: 32px;
  /* background: mediumaquamarine; */
  border: none;
  background-color: transparent;
}

.table input:focus {
  border: 1px solid #d9d9d9;
  outline-color: #d9d9d9;
}

.table input:focus-visible {
  border: 1px solid #d9d9d9;
  outline-color: #d9d9d9;
}

.table input:active {
  border: 1px solid red;
}

.table__cell_type_ingredients div:not(:last-child) {
  margin-bottom: 4px;
}

.table__cell_type_units div:not(:last-child) {
  margin-bottom: 4px;
}

.text-input input {
  width: 192px;
}

.table__active-button {
  padding: 0;
  display: grid;
  align-items: center;
}

.create-card-button {
  background-color: #F8AE29;
  width: 192px;
  height: 42px;
  border-radius: 16px;
  border: none;
  font-family: monospace;
  color: #1B1D19;
  font-size: 14px;
}

.create-card-button:hover {
  background-color: #EEA729;
}

.copy-card-button {
  background-color: #B76C49;
  width: 192px;
  height: 42px;
  border-radius: 16px;
  border: none;
  font-family: monospace;
  color: #1B1D19;
  font-size: 14px;
}

.copy-card-button:hover {
  background-color: #a86342;
}

.active-buttons {
  margin: 24px;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  font-family: monospace;
  font-size: 14px;
}

.title {
  font-size: 24px;
  font-family: 'FreeMono';
  text-align: center;
  stroke: #000000;
}

.content {
  font-size: 16px;
  font-family: 'FreeMono';
  fill: #000000;
}

.preparing {
  font-style: italic;
  font-size: 24px;
  font-family: 'FreeMono';
  text-align: center;
  fill: #000000;
}

.preparing__content {
  font-family: 'FreeMono';
  font-size: 16px;
  fill: #000000;
}

.recipe__container {
  fill: transparent;
  stroke: black;
  stroke-width: 1;
}

.bold {
  font-weight: bold;
}

.section {
  display: flex;
  margin: 0px 24px;
  align-items: center;
  gap: 24px;
  font-size: 16px;
}

.section input {
  border: none;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  padding-right: 24px;
  width: 272px;
}

.section h2 {
  width: 116px;
}

.directions {
  margin: 0px 24px 36px;
  font-size: 16px;
}

.directions textarea {
  border: none;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
  padding-right: 24px;
  width: 416px;
}

.hidden {
  display: none;
}

.menu__container {
  margin: 16px;
  margin-left: 0;
}

.menu__head {
  display: grid;
  grid-template-columns: 226px 226px 226px 36px 36px;
  height: 42px;
  background: #DBB6A4;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,kDAAkD;EAClD,yBAAyB;EACzB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,cAAc;EACd,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,yDAAoC;EACpC,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,yDAAuC;EACvC,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kCAAkC;EAClC,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,SAAS;EACT,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,kDAAkD;EAClD,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["html {\n  width: 100vw;\n  height: 100vh;\n}\n\nbody {\n  font-family: monospace;\n  color: #1B1D19;\n}\n\n.page {\n  padding: 24px;\n  display: grid;\n  grid-template-columns: 1fr 800px 1fr;\n}\n\n.page__title {\n  display: grid;\n  justify-content: center;\n}\n\n.table {\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);\n}\n\n.table__head {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 36px 36px;\n  height: 42px;\n  background: #DBB6A4;\n}\n\n.table__head div {\n  /* border: 4px solid white; */\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  padding: 8px 0px;\n  border-bottom: 0;\n}\n\n.table__head div:not(:last-child) {\n  border-right: 0;\n}\n\n/* TODO миксин */\n.table__row {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 32px 32px;\n  border: 1px solid #E5E5E5;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.table__row:last-child {\n  border: 1px solid #E5E5E5;\n}\n\n.table__cell {\n  padding: 8px;\n  border-bottom: 0;\n}\n\n.table__cell:not(:last-child) {\n  border-right: 0px;\n}\n\n.table {\n  width: 752px;\n  font-size: 16px;\n  color: #1B1D19;\n  margin: 24px;\n}\n\n.table button {\n  padding: 0px;\n}\n\n.table input {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n}\n\n.add-button {\n  background-image: url(edit-icon.svg);\n  background-size: 100%;\n  width: 32px;\n  height: 32px;\n  /* background: mediumaquamarine; */\n  border: none;\n  background-color: transparent;\n}\n\n.delete-button {\n  background-image: url(cancell-icon.svg);\n  background-size: 100%;\n  width: 32px;\n  height: 32px;\n  /* background: mediumaquamarine; */\n  border: none;\n  background-color: transparent;\n}\n\n.table input:focus {\n  border: 1px solid #d9d9d9;\n  outline-color: #d9d9d9;\n}\n\n.table input:focus-visible {\n  border: 1px solid #d9d9d9;\n  outline-color: #d9d9d9;\n}\n\n.table input:active {\n  border: 1px solid red;\n}\n\n.table__cell_type_ingredients div:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.table__cell_type_units div:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.text-input input {\n  width: 192px;\n}\n\n.table__active-button {\n  padding: 0;\n  display: grid;\n  align-items: center;\n}\n\n.create-card-button {\n  background-color: #F8AE29;\n  width: 192px;\n  height: 42px;\n  border-radius: 16px;\n  border: none;\n  font-family: monospace;\n  color: #1B1D19;\n  font-size: 14px;\n}\n\n.create-card-button:hover {\n  background-color: #EEA729;\n}\n\n.copy-card-button {\n  background-color: #B76C49;\n  width: 192px;\n  height: 42px;\n  border-radius: 16px;\n  border: none;\n  font-family: monospace;\n  color: #1B1D19;\n  font-size: 14px;\n}\n\n.copy-card-button:hover {\n  background-color: #a86342;\n}\n\n.active-buttons {\n  margin: 24px;\n  margin-top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 10px;\n  font-family: monospace;\n  font-size: 14px;\n}\n\n.title {\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  stroke: #000000;\n}\n\n.content {\n  font-size: 16px;\n  font-family: 'FreeMono';\n  fill: #000000;\n}\n\n.preparing {\n  font-style: italic;\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  fill: #000000;\n}\n\n.preparing__content {\n  font-family: 'FreeMono';\n  font-size: 16px;\n  fill: #000000;\n}\n\n.recipe__container {\n  fill: transparent;\n  stroke: black;\n  stroke-width: 1;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.section {\n  display: flex;\n  margin: 0px 24px;\n  align-items: center;\n  gap: 24px;\n  font-size: 16px;\n}\n\n.section input {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n  padding-right: 24px;\n  width: 272px;\n}\n\n.section h2 {\n  width: 116px;\n}\n\n.directions {\n  margin: 0px 24px 36px;\n  font-size: 16px;\n}\n\n.directions textarea {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n  padding-right: 24px;\n  width: 416px;\n}\n\n.hidden {\n  display: none;\n}\n\n.menu__container {\n  margin: 16px;\n  margin-left: 0;\n}\n\n.menu__head {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 36px 36px;\n  height: 42px;\n  background: #DBB6A4;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/svg1.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/svg1.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.title {
  font-size: 24px;
  font-family: 'FreeMono';
  text-align: center;
  stroke: #000000;
}

.content {
  font-size: 16px;
  font-family: 'FreeMono';
  fill: #000000;
}

.preparing {
  font-style: italic;
  font-size: 24px;
  font-family: 'FreeMono';
  text-align: center;
  fill: #000000;
}

.preparing__content {
  font-family: 'FreeMono';
  font-size: 16px;
  fill: #000000;
}

.recipe__container {
  fill: white;
  stroke: black;
  stroke-width: 1;
}

.bold {
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/svg1.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".title {\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  stroke: #000000;\n}\n\n.content {\n  font-size: 16px;\n  font-family: 'FreeMono';\n  fill: #000000;\n}\n\n.preparing {\n  font-style: italic;\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  fill: #000000;\n}\n\n.preparing__content {\n  font-family: 'FreeMono';\n  font-size: 16px;\n  fill: #000000;\n}\n\n.recipe__container {\n  fill: white;\n  stroke: black;\n  stroke-width: 1;\n}\n\n.bold {\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/app/components/select-with-search/template.html":
/*!*************************************************************!*\
  !*** ./src/app/components/select-with-search/template.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<template id="select-with-search">
  <!-- TODO сделать это как-то через пропсы -->
  <style>
    @import "./menu.css";
  </style>
  <style>
    .select__container {
      max-height: calc(55px * 6);
      overflow-y: scroll;
      position: absolute;
      background: white;
      display: block;
      border: 1px solid #E5E5E5;
      width: 210px;
      box-shadow: 0px 2px 8px 0px rgb(34 60 80 / 20%);
      z-index: 10;
    }

    .select__option {
      padding: 8px;
      border-bottom: 1px solid #E5E5E5;
    }

    .select__option:hover {
      background-color: #F8AE29;
    }

    .select__field {
      display: grid;
      grid-template-columns: 210px;
      gap: 4px;
      align-items: center;
      position: relative;
    }

    .select:focus-visible {
      outline: 1px solid rgb(110, 0, 0);
      border: 1px solid rgb(52, 4, 4);
    }

    #s1:focus-visible {
      outline: 1px solid #1a1d75;
    }

    button:focus-visible {
      outline: 1px solid #B0B0B0;
    }

    .select__input {
      border: none;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      font-size: 16px;
      /* padding-right: 24px; */
    }

    .select__input:focus-visible {
      outline: 1px solid #B0B0B0;
    }

    .select__input_short {
      width: 60px;
    }

    .select__hide-button {
      position: absolute;
      background-image: url(./hide-select-button.svg);
      background-color: transparent;
      border: none;
      height: 36px;
      width: 30px;
      left: 180px;
      background-repeat: no-repeat;
      background-position-y: 16px;
      background-position-x: 8px;
      padding: 0;
    }

    .select__container.hide {
      display: none;
    }

    .section input {
      color: red;
      border: none;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      font-size: 16px;
      padding-right: 24px;
    }

    .date-input_short input {
      width: 44px;
    }

    .date-input_short button {
      left: 32px;
    }

    .date-input_short + .select__container{
      width: 68px;
    }

    .select__field.date-input_short {
      grid-template-columns: 62px;
    }
  </style>

  <!-- TODO сделать это через b() -->
  <div class="select">
    <div class="select__field">
      <input type="text" class="select__input" />
      <button class="select__hide-button"></button>
    </div>
    <div class="select__container  hide">
    </div>
  </div>
</template>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/svg1.css":
/*!**********************!*\
  !*** ./src/svg1.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_svg1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./svg1.css */ "./node_modules/css-loader/dist/cjs.js!./src/svg1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_svg1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_svg1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_svg1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_svg1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cancell-icon.svg":
/*!******************************!*\
  !*** ./src/cancell-icon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "649328348d47e8a27061.svg";

/***/ }),

/***/ "./src/edit-icon.svg":
/*!***************************!*\
  !*** ./src/edit-icon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ae95753b31e5a97e07a8.svg";

/***/ }),

/***/ "./src/ingredients.json":
/*!******************************!*\
  !*** ./src/ingredients.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"name":"Овощной или мясной бульон","linkedUnits":[1],"inReserve":true,"check":true},{"id":2,"name":"Белокочаная капуста","linkedUnits":[2]},{"id":3,"name":"Картофель","linkedUnits":[3]},{"id":4,"name":"Перец болгарский красный","linkedUnits":[]},{"id":5,"name":"Морковь","linkedUnits":[4],"inReserve":true,"check":true},{"id":6,"name":"Свёкла","linkedUnits":[4]},{"id":7,"name":"Лук репчатый","linkedUnits":[4],"inReserve":true,"check":true},{"id":8,"name":"Помидоры","linkedUnits":[3]},{"id":9,"name":"Томатная паста","linkedUnits":[5],"inReserve":true,"check":true},{"id":10,"name":"Оливковое масло","linkedUnits":[5],"inReserve":true},{"id":11,"name":"Петрушка/укроп","linkedUnits":[7]},{"id":12,"name":"Лимонный сок","linkedUnits":[5]},{"id":13,"name":"Сметана","linkedUnits":[7]},{"id":14,"name":"Морская соль/перец","linkedUnits":[7],"inReserve":true},{"id":15,"name":"Чеснок","inReserve":true,"check":true},{"id":16,"name":"Фасоль белая","inReserve":true,"check":true},{"id":17,"name":"Кукуруза консервированная"},{"id":18,"name":"Куриный бульон","inReserve":true,"check":true},{"id":19,"name":"Сливки"},{"id":20,"name":"Сливочное масло","inReserve":true,"check":true},{"id":21,"name":"Петрушка"},{"id":22,"name":"Соль","inReserve":true},{"id":23,"name":"Перец молотый","inReserve":true},{"id":24,"name":"Филе индейки"},{"id":25,"name":"Горчица","inReserve":true,"check":true},{"id":26,"name":"Паприка","inReserve":true,"check":true},{"id":27,"name":"Сухой чеснок","inReserve":true,"check":true},{"id":28,"name":"Укроп"},{"id":29,"name":"Масло растительное","inReserve":true},{"id":30,"name":"Фасоль красная","inReserve":true,"check":true},{"id":31,"name":"Грецкие орехи","inReserve":true,"check":true},{"id":32,"name":"Кинза"},{"id":33,"name":"Орегано","inReserve":true,"check":true},{"id":34,"name":"Кориандр","inReserve":true,"check":true},{"id":35,"name":"Хмели-сунели","inReserve":true,"check":true},{"id":36,"name":"Говядина","inReserve":true,"check":true},{"id":37,"name":"Лавровый лист","inReserve":true},{"id":38,"name":"Вода","inReserve":true},{"id":39,"name":"Мука","inReserve":true,"check":true},{"id":40,"name":"Макрель конс.сс"},{"id":41,"name":"Сардины конс.сс"},{"id":42,"name":"Сельдерей"},{"id":43,"name":"Шафран","inReserve":true,"check":true},{"id":44,"name":"Карри","inReserve":true,"check":true},{"id":45,"name":"Тмин","inReserve":true,"check":true},{"id":46,"name":"Душистый перец","inReserve":true,"check":true},{"id":47,"name":"Макароны Radiatori"},{"id":48,"name":"Помидоры в соб.соку"},{"id":49,"name":"Тыква"},{"id":50,"name":"Перец чили зеленый","inReserve":true,"check":true},{"id":51,"name":"Перец чили красный","inReserve":true,"check":true},{"id":52,"name":"Йогурт греческий"},{"id":53,"name":"Яблочный уксус","inReserve":true,"check":true},{"id":54,"name":"Зира","inReserve":true,"check":true},{"id":55,"name":"Чечевица","inReserve":true,"check":true},{"id":56,"name":"Кумин","inReserve":true,"check":true},{"id":57,"name":"Фасоль стручковая"},{"id":58,"name":"Огурцы мар."},{"id":59,"name":"Соевый соус","inReserve":true,"check":true},{"id":60,"name":"Булгур","inReserve":true,"check":true},{"id":61,"name":"Сыр"},{"id":62,"name":"Хлеб ржаной"},{"id":63,"name":"Яйцо"},{"id":64,"name":"Треска"},{"id":65,"name":"Кабачок"},{"id":66,"name":"Мясной бульон"},{"id":67,"name":"Колбаса варёная"},{"id":68,"name":"Оливки"},{"id":69,"name":"Огуречный рассол"},{"id":70,"name":"Каперсы"},{"id":71,"name":"Лимон"},{"id":72,"name":"Укроп"},{"id":73,"name":"Филе курицы"},{"id":74,"name":"Чернослив без косточек"},{"id":75,"name":"Курага"},{"id":76,"name":"Творожный сыр"},{"id":77,"name":"Приправа для курицы"},{"id":78,"name":"Креветки","linkedUnits":[]},{"id":79,"name":"Лук-порей","linkedUnits":[]},{"id":80,"name":"Фунчоза","linkedUnits":[]},{"id":81,"name":"Лайм","linkedUnits":[]},{"id":82,"name":"Карри паста","linkedUnits":[]},{"id":83,"name":"Черри","linkedUnits":[]},{"id":84,"name":"Лук зеленый","linkedUnits":[]},{"id":85,"name":"Кокосовое молоко","linkedUnits":[]},{"id":86,"name":"Зеленый горошек","linkedUnits":[]},{"id":87,"name":"Цветная капуста","linkedUnits":[]},{"id":88,"name":"Базилик","linkedUnits":[]},{"id":89,"name":"Макароны","linkedUnits":[]},{"id":90,"name":"Фарш","linkedUnits":[]},{"id":91,"name":"Куриные ножки","linkedUnits":[]},{"id":92,"name":"Прованские травы","linkedUnits":[]},{"id":93,"name":"Куриное филе","linkedUnits":[]},{"id":94,"name":"Сухари панировочные","linkedUnits":[]},{"id":95,"name":"Нут вареный","linkedUnits":[]},{"id":96,"name":"Кокосовое немолоко","linkedUnits":[]},{"id":97,"name":"Куркума","linkedUnits":[]},{"id":98,"name":"Рис","linkedUnits":[]},{"id":99,"name":"Творог 9%","linkedUnits":[]},{"id":100,"name":"Манная крупа","linkedUnits":[]},{"id":101,"name":"Сахар","linkedUnits":[]},{"id":102,"name":"Паста","linkedUnits":[]},{"id":103,"name":"Томатный итальянский соус","linkedUnits":[]},{"id":104,"name":"Моцарелла","linkedUnits":[]},{"id":105,"name":"Сливочный сыр","linkedUnits":[]},{"id":106,"name":"Сливки 10-20%","linkedUnits":[]},{"id":107,"name":"Базилик свежий","linkedUnits":[]},{"id":108,"name":"Орехи","linkedUnits":[]},{"id":109,"name":"Кукурузная крупа","linkedUnits":[]},{"id":110,"name":"Молоко","linkedUnits":[]},{"id":111,"name":"Ваниль","linkedUnits":[]},{"id":112,"name":"Куриные сердечки"},{"id":113,"name":"Шампиньоны"},{"id":114,"name":"Огурцы соленые"},{"id":115,"name":"Перец чили"},{"id":116,"name":"Желтки","linkedUnits":[]},{"id":117,"name":"Свинина шейка","linkedUnits":[]},{"id":118,"name":"Майонез","linkedUnits":[]},{"id":119,"name":"Кардамон молотый","linkedUnits":[]},{"id":118,"name":"Кефир 3.2%","linkedUnits":[]},{"id":119,"name":"Сода","linkedUnits":[]},{"id":120,"name":"Белый хлеб","linkedUnits":[]},{"id":121,"name":"Барбарис","linkedUnits":[]},{"id":122,"name":"Свекла","linkedUnits":[]},{"id":123,"name":"Капуста квашенная","linkedUnits":[]},{"id":124,"name":"Растительное масло нерафинированное","linkedUnits":[]},{"id":122,"name":"Свинина","linkedUnits":[]},{"id":122,"name":"Говяжья печень","linkedUnits":[]},{"id":123,"name":"Розмарин","linkedUnits":[]},{"id":124,"name":"Майоран","linkedUnits":[]},{"id":125,"name":"Батон","linkedUnits":[]},{"id":126,"name":"Зелень","linkedUnits":[]},{"id":125,"name":"Изюм","linkedUnits":[]}]');

/***/ }),

/***/ "./src/recipes.json":
/*!**************************!*\
  !*** ./src/recipes.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"version":"1.0","id":1,"title":"Борщ от Высоцкой","type":"first-course","idInCategory":1,"ingredients":[{"id":1,"ingredientId":1,"amountOf":1.5,"unitId":1},{"id":2,"ingredientId":2,"amountOf":0.5,"unitId":2,"index":1},{"id":3,"ingredientId":3,"amountOf":3,"unitId":3},{"id":4,"ingredientId":4,"amountOf":1,"unitId":3},{"id":5,"ingredientId":5,"amountOf":1,"unitId":4,"index":1},{"id":6,"ingredientId":6,"amountOf":1,"unitId":4,"index":1},{"id":7,"ingredientId":7,"amountOf":1,"unitId":12,"index":1},{"id":8,"ingredientId":8,"amountOf":"2-3","unitId":3},{"id":9,"isAnalogue":true,"ingredientId":9,"amountOf":1.5,"unitId":5},{"id":10,"ingredientId":10,"amountOf":100,"unitId":5},{"id":11,"ingredientId":11,"unitId":7},{"id":12,"ingredientId":12,"amountOf":1,"unitId":5},{"id":13,"ingredientId":13,"unitId":7},{"id":14,"ingredientId":14,"unitId":7}],"directions":["Вымытый и очищенный картофель и перец режем кубиками, а капусту - соломкой.","Опускаем овощи в кипящий бульон.","Морковь натираем на крупной терке, лук мелко режем.","Свёклу натираем на крупной терке.","Разогреваем на сковороде масло, обжариваем на нём лук, добавляем морковь.","Через некоторое время добавляем свёклу. Тушим.","Добавляем протертые помидоры или томатную пасту и лимонный сок. Тушим 20-25 мин до готовности.","Готовую заправку выкладываем в кастрюлю с бульоном, солим, перчим, добавляем зелень. Доводим до кипения и снимаем с огня.","Даём настояться. Подаём со сметаной и зеленью."],"nutritionalValue":"8/21/39 360","url":"https://www.edimdoma.ru/retsepty/2820-borsch"},{"id":2,"title":"Индейка в сметане в духовке","type":"secound-course","idInCategory":1,"nutritionalValue":"11/7/7 143","ingredients":[{"id":1,"ingredientId":24,"amountOf":300,"unitId":8},{"id":2,"ingredientId":7,"amountOf":1,"unitId":12,"index":1},{"id":3,"ingredientId":13,"amountOf":200,"unitId":8},{"id":4,"ingredientId":25,"amountOf":1,"unitId":6},{"id":5,"ingredientId":22,"unitId":7},{"id":6,"ingredientId":23,"unitId":7},{"id":7,"ingredientId":26,"unitId":7},{"id":8,"ingredientId":27,"unitId":7},{"id":9,"ingredientId":28,"amountOf":5,"unitId":8},{"id":10,"ingredientId":29,"amountOf":2,"unitId":5}],"directions":["Разогреваем духовку до 180°.","Моем и очищаем луковицу, моем и просушиваем 300 г филе.","Луковицу нарезаем полукольцами. Филе нарезаем средними кусочками.","Пассируем лук на растительном масле, добавляем индейку и готовим 7-8 минут.","В конце приготовления добавляем соль, перец, паприку и сухой чеснок.","Перекладываем индейку в форму, добавляем 200г сметаны и 1ч.л. горчицы.","Запекаем при 180° 25-30 минут.","Готовое блюдо посыпаем укропом и подаём."],"url":"https://kopilka-kulinara.ru/ptica/indeika/indeika_v_duhovke/indejka-v-smetane-v-duxovke/#recipe_title"},{"id":3,"title":"Суккоташ","type":"first-course","idInCategory":2,"nutritionalValue":"21/15/37 370","ingredients":[{"id":1,"ingredientId":4,"amountOf":2,"unitId":3},{"id":2,"ingredientId":15,"amountOf":4,"unitId":9,"index":2},{"id":3,"ingredientId":16,"amountOf":400,"unitId":8},{"id":4,"ingredientId":17,"amountOf":1,"unitId":10,"index":1},{"id":5,"ingredientId":18,"amountOf":1,"unitId":1},{"id":6,"ingredientId":19,"amountOf":50,"unitId":11},{"id":7,"ingredientId":20,"amountOf":2,"unitId":5},{"id":8,"ingredientId":21,"amountOf":2,"unitId":5},{"id":9,"ingredientId":22,"unitId":7},{"id":10,"ingredientId":23,"unitId":7},{"id":11,"ingredientId":7,"amountOf":1,"unitId":12,"index":1}],"directions":["Лук очищаем и немелко нарезаем, обжариваем на сливочном масле около 2 минут.","Моем, чистим болгарский перец и нарезаем полосочками. Добавляем к луку и жарим ещё 7 минут.","Очищаем чеснок, измельчаем и добавляем к овощам. Перемешиваем и даём обжариться ещё минуту.","Добавляем вареную фасоль, кукурузу.","Заливаем горячим бульоном и от момента закипания варим 10 минут на слабом огне. Солим и перчим по вкусу.","В конце добавляем сливки и прогреваем.","Добавляем зелень и снимаем с огня.","Даём супу настояться 15-20 минут (можно и дольше). Подаём с сухариками-крутонами."],"url":"https://www.edimdoma.ru/retsepty/74885-sukkotash-kukuruzno-fasolevaya-pohlebka"},{"id":4,"title":"Лобио","type":"secound-course","idInCategory":2,"ingredients":[{"id":1,"ingredientId":30,"amountOf":400,"unitId":8},{"id":2,"ingredientId":29,"amountOf":2,"unitId":5},{"id":3,"ingredientId":7,"amountOf":2,"unitId":12,"index":2},{"id":4,"ingredientId":8,"amountOf":"4-5","unitId":3},{"id":5,"ingredientId":31,"amountOf":100,"unitId":8},{"id":6,"ingredientId":32,"amountOf":0.5,"unitId":13,"index":2},{"id":7,"ingredientId":33,"amountOf":0.5,"unitId":13,"index":2},{"id":8,"ingredientId":22,"unitId":7},{"id":9,"ingredientId":34,"unitId":7},{"id":10,"ingredientId":35,"unitId":7}],"directions":["Замачиваем на ночь 400 г фасоли и отвариваем её в солёной воде.","Чистим и измельчаем 2 луковицы.","Пассеруем их до золотистого цвета и смешиваем с фасолью.","Опускаем в горячую воду 4-5 томатов, снимаем кожицу, разминаем мякоть в пюре и смешиваем с фасолью.","Добавляем 100 г толчёных грецких орехов, по половине пучка кинзы и орегано, солим, добавляем кориандр и хмели-сунели.","Часто помешивая, тушим фасоль на слабом огне 20 минут.","Подавать с жареной свининой или кукурузной кашей."],"url":"https://www.edimdoma.ru/retsepty/5033-lobio","nutritionalValue":"40/34/70 765"},{"id":5,"title":"Венгерский гуляш","type":"secound-course","idInCategory":3,"ingredients":[{"id":1,"ingredientId":7,"amountOf":2,"unitId":12,"index":2},{"id":2,"ingredientId":36,"amountOf":800,"unitId":8},{"id":3,"ingredientId":3,"amountOf":10,"unitId":3},{"id":4,"ingredientId":37,"amountOf":2,"unitId":3},{"id":5,"ingredientId":26,"amountOf":2,"unitId":5},{"id":6,"ingredientId":38,"amountOf":700,"unitId":11},{"id":7,"ingredientId":39,"amountOf":2,"unitId":5},{"id":8,"ingredientId":29,"amountOf":2,"unitId":5}],"directions":["Говядину 800 г моем, высушиваем, освобождаем от пленок, режем небольшими кусочками.","Жарим говядину на растительном масле до румяного цвета.","2 головки лука очищаем, режем небольшими кубиками и жарим в той же сковороде до золотистого цвета.","Складываем мясо и лук в кастрюлю, добавляем 2 ст.л паприки, лавровый лист и 2 ст.л муки.","Вливаем 200 мл воды и доводим до кипения. Делаем огонь на минимум и тушим около 1 часа под крышкой.","10 шт картофеля очищаем и нарезаем крупными дольками. Добавляем его к мясу, вливаем 500 мл воды.","Солим и тушим около 40 мин."],"nutritionalValue":"30/17/40 427"},{"id":6,"title":"Суп из консервов","type":"first-course","idInCategory":3,"ingredients":[{"id":1,"ingredientId":40,"amountOf":250,"unitId":8},{"id":2,"ingredientId":41,"amountOf":250,"unitId":8},{"id":3,"ingredientId":7,"amountOf":1,"unitId":14,"index":1},{"id":4,"ingredientId":5,"amountOf":1,"unitId":14,"index":1},{"id":5,"ingredientId":42,"amountOf":1,"unitId":15,"index":1},{"id":6,"ingredientId":3,"amountOf":"2-3","unitId":3},{"id":7,"ingredientId":43,"amountOf":1,"unitId":6},{"id":8,"ingredientId":44,"amountOf":0.5,"unitId":6},{"id":9,"ingredientId":45,"amountOf":0.5,"unitId":6},{"id":10,"ingredientId":37,"amountOf":"2-3","unitId":3},{"id":11,"ingredientId":46,"amountOf":"6-7","unitId":3},{"id":12,"ingredientId":28,"amountOf":1,"unitId":13,"index":1},{"id":13,"ingredientId":29,"amountOf":1,"unitId":5},{"id":14,"ingredientId":22,"unitId":7},{"id":15,"ingredientId":23,"unitId":7}],"directions":["Одну большую луковицу, одну большую морковь, один стебель сельдерея моем, чистим.","Моем, чистим 2-3 картофелины.","Лук, морковь, сельдерей нарезаем кусочками, поджариваем на растительном масле.","Добавляем картофель, шафран 1 ч.л., 2-3 лавровых листа, перец.","Заливаем 750 мл воды и варим до готовности овощей.","Рыбу из консервов разбираем на кусочки, удаляем косточки, выкладываем вместе с жидкостью в суп.","Солим, добавляем 0.5 ч.л. карри и 0.5 ч.л тмина, укроп и варим ещё 5-7 минут."]},{"id":7,"type":"secound-course","title":"Ароматная паста с тыквой","idInCategory":4,"ingredients":[{"id":1,"ingredientId":47,"amountOf":300,"unitId":8},{"id":2,"ingredientId":48,"amountOf":300,"unitId":8},{"id":3,"ingredientId":49,"amountOf":200,"unitId":8},{"id":4,"ingredientId":7,"amountOf":2,"unitId":12,"index":2},{"id":5,"ingredientId":115,"amountOf":1,"unitId":3},{"id":6,"ingredientId":15,"amountOf":1,"unitId":9,"index":1},{"id":7,"ingredientId":32,"amountOf":1,"unitId":16,"index":1},{"id":8,"ingredientId":52,"amountOf":200,"unitId":8},{"id":9,"ingredientId":10,"amountOf":6,"unitId":5},{"id":10,"ingredientId":53,"amountOf":1,"unitId":6},{"id":11,"ingredientId":54,"amountOf":"1/4","unitId":6}],"directions":["Духовку разогреваем до 180°.","Тыкву 200г чистим, нарезам на кубики, лук 2 головки чистим, режем дольками, поливаем 1-2 ст.л масла, выкладываем на противень, посыпаем 1/4 ч.л. зиры, солим, перчим, запекаем до готовности.","Макароны 200г отвариваем в подсоленой воде на 1 минуту меньше, чем указано на упаковке.","Чеснок чистим и мелко рубим, поджариваем на нескольких ложках оливкового масла.","Весь или нарезаем тонкими колечками и отправляем к чесноку. Добавляем помидоры, солим, перемешиваем и прогреваем.","Запеченую тыкву выкладываем в блендер, вливаем оставшееся масло, яблочный уксус 1ч.л и измельчаем в пюре.","Пюре в сковороду с помидорами и чили, все перемешиваем, добавляем макароны, снова перемешиваем.","Подаём с мелкопорубленной кинзой и йогуртом."],"url":"https://www.edimdoma.ru/retsepty/149051-aromatnaya-pasta-s-zapechennoy-tykvoy-i-yogurtom","nutritionalValue":"8/17/44 360"},{"id":8,"type":"first-course","title":"Тыквенный суп с чечевицей","idInCategory":4,"ingredients":[{"id":1,"ingredientId":42,"amountOf":"1 / 2","unitId":3},{"id":2,"ingredientId":49,"amountOf":500,"unitId":8},{"id":3,"ingredientId":5,"amountOf":1,"unitId":3},{"id":4,"ingredientId":55,"amountOf":1,"unitId":17,"index":1},{"id":5,"ingredientId":7,"amountOf":1,"unitId":3},{"id":6,"ingredientId":26,"amountOf":1,"unitId":6},{"id":7,"ingredientId":56,"unitId":7},{"id":8,"ingredientId":44,"amountOf":0.5,"unitId":6},{"id":9,"ingredientId":18,"amountOf":1,"unitId":1},{"id":10,"ingredientId":19,"amountOf":50,"unitId":11}],"directions":["Пассеруем 1 головку лука, добавляем нарезанный кубиками 1 морковь, 500г тыквы, 1/2 стебля сельдерея, обжариваем 5 мин.","Добавляем 1 стакан чечевицы, заливаем бульоном и варим 20-25 минут до мягкости, накрыв крышкой.","Добавляем 1 ч.л. паприки, кумин по вкусу, карри 1/2 ч.л.","Делаем пюре, добавляем сливки. Подаём с тыквенными семечками."],"nutritionalValue":"13/3/28 189","url":"https://www.edimdoma.ru/retsepty/83430-tykvennyy-sup-s-krasnoy-chechevitsey"},{"id":9,"title":"Булгур с сердечками и овощами","type":"secound-course","idInCategory":5,"ingredients":[{"id":1,"ingredientId":112,"amountOf":500,"unitId":8},{"id":2,"ingredientId":7,"amountOf":1,"unitId":12,"index":1},{"id":3,"ingredientId":113,"amountOf":150,"unitId":8},{"id":4,"ingredientId":4,"amountOf":2,"unitId":3},{"id":5,"ingredientId":57,"amountOf":100,"unitId":8},{"id":6,"ingredientId":58,"amountOf":4,"unitId":3},{"id":7,"ingredientId":8,"amountOf":2,"unitId":3},{"id":8,"ingredientId":54,"unitId":7},{"id":9,"ingredientId":13,"amountOf":2,"unitId":5},{"id":10,"ingredientId":25,"amountOf":1,"unitId":5},{"id":11,"ingredientId":59,"amountOf":2,"unitId":5},{"id":12,"ingredientId":60,"amountOf":150,"unitId":8},{"id":13,"ingredientId":15,"amountOf":"½","unitId":12,"index":1}],"directions":["Нарезаем 1 луковицу полукольцами, обжариваем. В это время готовим булгур (крупу в кипящую соленую воду 1/2, 10-15 мин на сл.огне).","Добавляем 500г куриных сердечек, жарим 15 мин. Добавляем шампиньоны 150г, жарим 10 мин. Солим, перчим, добавляем зиру.","Добавляем мелко порезанный болгарский перец 2 шт. и обжариеваем до мягкости.","Добавляем 100г фасоли и жарим 15 минут. Затем огурчики 4 шт, жарим 10 мин. Добавляем 2 помидора, обжариваем 10 мин.","Добавляем горчицу 1 ст.л., сметану 2 ст.л., соевый соус 2 ст.л, тушим на слабом огне около 10 мин.","Выкладываем содержимое сковороды к булгуру, перемешиваем, тушим ещё 7 минут. В конце добавляем мелко порезанный чеснок, держим ещё 5 минут."],"url":"https://www.edimdoma.ru/retsepty/140319-bulgur-s-kurinymi-serdechkami-i-ovoschami","nutritionalValue":"22/12/23 298"},{"id":10,"title":"Чеснечка","type":"first-course","url":"https://www.edimdoma.ru/retsepty/148182-cheshskiy-sup-chesnechka","idInCategory":5,"ingredients":[{"id":1,"ingredientId":18,"amountOf":1.5,"unitId":1},{"id":2,"ingredientId":3,"amountOf":3,"unitId":3},{"id":3,"ingredientId":7,"amountOf":1,"unitId":12,"index":1},{"id":4,"ingredientId":15,"amountOf":9,"unitId":9,"index":2},{"id":5,"ingredientId":29,"amountOf":50,"unitId":8},{"id":6,"ingredientId":22,"unitId":7},{"id":7,"ingredientId":23,"unitId":7},{"id":8,"ingredientId":61,"amountOf":100,"unitId":8},{"id":9,"ingredientId":62,"amountOf":3,"unitId":18,"index":2},{"id":10,"ingredientId":63,"amountOf":1,"unitId":3}],"directions":["Режем кубиками 3 ломтика ржаного хлеба, складываем в пакет, добавляем раст.масло, закрываем, трясём. Выкладываем на противень, печём при 180° 3-4 минут до хруста.","Лук и 6 зубчиков нарезаем кубиками, обжариваем на сливочном масле.","Заливаем бульоном, доводим до кипения, добавляем картофель, уменьшаем огонь и варим до готовности картофеля.","Яйцо хорошо разбалтываем вилкой. Когда картофель уже готов, тонкой струйкой, помешивая суп, вливаем в яйцо.","3 зубчика чеснока раздавить, добавить в суп. Посолить, добавить молотый перец. Прокипятить всё. Дать настояться.","Посыпать тёртым сыром и сухариками."]},{"id":11,"title":"Овощной суп с треской","url":"https://www.edimdoma.ru/retsepty/137708-ovoschnoy-sup-s-treskoy","type":"first-course","idInCategory":6,"ingredients":[{"id":1,"ingredientId":64,"amountOf":500,"unitId":8},{"id":2,"ingredientId":8,"amountOf":450,"unitId":8},{"id":3,"ingredientId":5,"amountOf":100,"unitId":8},{"id":4,"ingredientId":7,"amountOf":1,"unitId":12,"index":1},{"id":5,"ingredientId":65,"amountOf":1,"unitId":3},{"id":6,"ingredientId":15,"amountOf":3,"unitId":9,"index":2},{"id":7,"ingredientId":14,"unitId":7},{"id":8,"ingredientId":37,"amountOf":2,"unitId":3},{"id":9,"ingredientId":29,"amountOf":1,"unitId":5},{"id":10,"ingredientId":38,"amountOf":300,"unitId":8}],"directions":["Луковицу нарезаем кусочками, морковь трём на тёрке.","Помидоры 450г обдаем кипятком, снимаем кожицу, сохраняем сок.","Небольшой кабачок нарезаем кусочками, 3 зубчика чеснока мелко рубим.","Филе трески 500г моем, сушим, нарезаем на кусочки, вынимаем косточки.","Жарим лук, добавляем морковь, жарим до мягкости. Добавляем нарезанные помидоры и сок. Готовим 5 мин.","Добавляем кабачок и порубленный чеснок. Готовим ещё 10 минут, помешивая.","Солим, перчим, томим 1 минуту. Добавляем 300г воды, доводим до кипения. Кладём филе трески. Варим 10 минут под крышкой.","За пару минут до готовности добавляем лавровый лист. Даём настояться 10 минут."]},{"id":12,"title":"Наваристая солянка","type":"first-course","idInCategory":7,"ingredients":[{"id":1,"ingredientId":66,"amountOf":1,"unitId":1},{"id":2,"ingredientId":36,"amountOf":250,"unitId":8},{"id":3,"ingredientId":67,"amountOf":150,"unitId":8},{"id":4,"ingredientId":7,"amountOf":1.5,"unitId":3},{"id":5,"ingredientId":68,"amountOf":70,"unitId":8},{"id":6,"ingredientId":114,"amountOf":5,"unitId":3},{"id":7,"ingredientId":69,"amountOf":50,"unitId":11},{"id":8,"ingredientId":9,"amountOf":1,"unitId":5},{"id":9,"ingredientId":70,"amountOf":30,"unitId":8},{"id":10,"ingredientId":12,"amountOf":0.5,"unitId":3},{"id":11,"ingredientId":71,"amountOf":0.5,"unitId":3},{"id":12,"ingredientId":46,"amountOf":3,"unitId":3},{"id":13,"ingredientId":37,"amountOf":1,"unitId":3},{"id":14,"ingredientId":29,"amountOf":30,"unitId":11},{"id":15,"ingredientId":72,"unitId":7}],"directions":["Луковицу (1.5шт) нарезаем четвертинками, жарим до золотистого цвета. Добавляем томатную пасту томим на среднем огне несколько минут.","Режем огурцы (5шт) соломкой, добавляем к луку, слегка обжариваем.","Вливаем половник бульона, тушим на небольшом огне 15-20 минут до размягчения огурцов.","Шинкуем говядину 250г, колбасу 150г тонкими брусочками, закладываем в бульон, доводим до кипения, варим 5-7 минут.","Нарезаем оливки, добавляем их в суп вместе с каперсами, лавровым листом, душистым перцем, мелко-нарезанной зеленью.","Доводим до кипения, провариваем 1-2 минуты, солим и перчим.","Настаиваем 5-7 минут. Подаём со сметаной, ломтиками лимона, веточкой зелени."],"url":"https://www.edimdoma.ru/retsepty/148667-navaristaya-solyanka-po-firmennomu-retseptu","nutritionalValue":"17/22/5 286"},{"id":13,"title":"«Эскимо» из курицы","type":"secound-course","idInCategory":6,"ingredients":[{"id":1,"ingredientId":73,"amountOf":700,"unitId":8},{"id":2,"ingredientId":74,"amountOf":150,"unitId":8},{"id":3,"ingredientId":75,"amountOf":150,"unitId":8},{"id":4,"ingredientId":76,"amountOf":200,"unitId":8},{"id":5,"ingredientId":27,"amountOf":1,"unitId":6},{"id":6,"ingredientId":77,"amountOf":2,"unitId":6},{"id":7,"ingredientId":22,"amountOf":1,"unitId":6}],"directions":["Заливаем курагу (150г) и чернослив (150г) кипятком.","Филе курицы отбиваем, закрыв плёнкой.","Творожный сыр смешиваем с солью, чесноком и приправой для курицы. Отбитое филе кладём на кусок фольги, смазываем смесью с творожным сыром."],"url":"https://www.edimdoma.ru/retsepty/127852-eskimo-iz-kurinogo-file-s-kuragoy-i-chernoslivom"},{"id":14,"title":"Фунчоза с креветками","type":"secound-course","idInCategory":7,"ingredients":[{"ingredientId":78,"amountOf":150,"unitId":8},{"ingredientId":38,"amountOf":"1 ½","unitId":1},{"ingredientId":79,"amountOf":1,"unitId":3},{"ingredientId":15,"amountOf":1,"unitId":9,"index":1},{"ingredientId":59,"amountOf":1,"unitId":5},{"ingredientId":10,"amountOf":1,"unitId":5},{"ingredientId":80,"amountOf":50,"unitId":8},{"ingredientId":81,"amountOf":1,"unitId":3},{"ingredientId":85,"amountOf":150,"unitId":11},{"ingredientId":82,"amountOf":20,"unitId":8},{"ingredientId":32,"amountOf":null,"unitId":7},{"ingredientId":83,"amountOf":10,"unitId":3},{"ingredientId":51,"amountOf":1,"unitId":3},{"ingredientId":22,"amountOf":null,"unitId":7},{"ingredientId":23,"amountOf":null,"unitId":7},{"ingredientId":84,"amountOf":3,"unitId":15,"index":1}],"directions":["Размораживаем и чистим креветки.","Мелко режем лук, чили, помидоры, обжариваем их на оливковом масле.","Разогреваем кокосовое молоко, добавляем оливки, поджарку, карри 20г, соевое масло 1 ст.л и мелко порезанную кинзу. Солим и перчим.","Заливаем фунчозу, ждем 5-7 минут."],"url":"https://www.edimdoma.ru/retsepty/130062-sup-s-krevetkami"},{"id":15,"title":"Щи из свежей капусты","type":"first-course","idInCategory":8,"ingredients":[{"ingredientId":2,"amountOf":"½","unitId":3},{"ingredientId":3,"amountOf":"4","unitId":3},{"ingredientId":5,"amountOf":"2","unitId":3},{"ingredientId":7,"amountOf":"1","unitId":12,"index":1},{"ingredientId":21,"amountOf":"1","unitId":16,"index":1},{"ingredientId":29,"amountOf":"2","unitId":5},{"ingredientId":23,"amountOf":null,"unitId":7},{"ingredientId":23,"unitId":7},{"ingredientId":22,"unitId":7},{"ingredientId":1,"amountOf":"1 ½","unitId":1}],"directions":["Капусту шинкуем соломкой. Картофель чистим, режим кубиками.","Кипятим бульон, отвариваем в нём картофель, через несколько минут добавляем капусту.","Лук чистим и мелко режем. Морковь чистим и трём на крупной терке. Петрушку мелко рубим.","На растительном масле поджариваем лук до золотистого цвета, добавляем морковь. Вводим зажарку в бульон.","Солим, перчим, варим до готовности овощей, в конце добавляем петкушку."],"nutritionalValue":"3/5/19 119","url":"https://www.edimdoma.ru/retsepty/2826-schi-iz-svezhey-kapusty"},{"id":16,"title":"Суп из цв.капусты из горошка","type":"first-course","idInCategory":9,"ingredients":[{"ingredientId":24,"amountOf":"1 ½","unitId":1},{"ingredientId":86,"amountOf":"1","unitId":10,"index":1},{"ingredientId":87,"amountOf":"60","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":5,"amountOf":"1","unitId":3},{"ingredientId":4,"amountOf":"1","unitId":3},{"ingredientId":42,"amountOf":"2","unitId":15,"index":1},{"ingredientId":88,"amountOf":"1","unitId":6},{"ingredientId":33,"amountOf":"1","unitId":6},{"ingredientId":23,"amountOf":null,"unitId":7},{"ingredientId":51,"amountOf":null,"unitId":7},{"ingredientId":29,"amountOf":"2","unitId":5}],"directions":["Варим бульон из индейки и сельдерея. Сельдерей удаляем.","Капусту делим на соцветия, перец и луковицу режем кубиками, морковь трём на терке.","На растительном масле жарим лук до прозрачности, добавляем морковь с перцем, жарим пару минут.","Поджарку вводим в бульон, добавляем горошек, сухие специи, перец, соль.","Доводим до кипения и вводим цветную капусту. Ждём закипания, убираем с плиты, даем настояться 10-15 минут."],"nutritionalValue":"8/9/21 200","url":"https://www.edimdoma.ru/retsepty/129886-sup-iz-masha-s-tsvetnoy-kapustoy"},{"id":17,"title":"Суп с фрикадельками","type":"first-course","idInCategory":10,"ingredients":[{"ingredientId":24,"amountOf":"800","unitId":8},{"ingredientId":5,"amountOf":"1","unitId":3},{"ingredientId":63,"amountOf":"1","unitId":3},{"ingredientId":29,"amountOf":"1","unitId":5},{"ingredientId":22,"amountOf":null,"unitId":7},{"ingredientId":89,"amountOf":null,"unitId":7},{"ingredientId":23,"amountOf":null,"unitId":7},{"ingredientId":90,"amountOf":"400","unitId":8},{"ingredientId":3,"amountOf":"2","unitId":3},{"ingredientId":37,"amountOf":null,"unitId":7}],"directions":["Варим бульон из индейки.","Добавляем в фарш мелко порезанную луковицу, яйцо, соль, перец. Вымешиваем, лепим фрикадельки, бросаем в кипящий бульон.","Через пару минут добавляем порезанный кубиками картофель и макароны.","Обжариваем на растительном масле мелко нарезанный лук и натёртую морковь. Вводим в бульон.","Добавляем соль, лавровый лист. Варим ещё 5 минут на маленьком огне."],"nutritionalValue":"7/22/2 237","url":"https://www.edimdoma.ru/retsepty/51292-sup-s-frikadelkami"},{"id":18,"title":"Куриные ножки в духовке","type":"secound-course","idInCategory":8,"ingredients":[{"ingredientId":91,"amountOf":"8","unitId":3},{"ingredientId":15,"amountOf":"3","unitId":9,"index":1},{"ingredientId":29,"amountOf":"4","unitId":5},{"ingredientId":92,"amountOf":null,"unitId":7},{"ingredientId":23,"amountOf":null,"unitId":7},{"ingredientId":22,"amountOf":null,"unitId":7}],"directions":["Чистим чеснок, пропускаем через давилку.","Ножки перчим, солим, натираем чесночной массой. Ставим в холодильник на полчаса.","Разогреваем духовку до 190°.","Выкладываем на фольгу, поливаем масло. Заворачиваем фольгу, чтобы не вытекал сок. Ставим мясо на 35 минут.","Открываем фольгу, держим ещё 10-15 минут до образования румяной корочки."],"nutritionalValue":null,"url":"https://www.edimdoma.ru/retsepty/18654-zapechennye-kurinye-nozhki"},{"id":19,"title":"Куриные наггетсы","type":"secound-course","idInCategory":9,"ingredients":[{"ingredientId":93,"amountOf":"1","unitId":3},{"ingredientId":63,"amountOf":"3","unitId":3},{"ingredientId":39,"amountOf":"½","unitId":17,"index":2},{"ingredientId":94,"amountOf":"1","unitId":17,"index":1},{"ingredientId":22,"amountOf":null,"unitId":7},{"ingredientId":23,"amountOf":null,"unitId":7}],"directions":["Режем филе не кусочки, солим и перчим.","Готовим три миски: с мукой, сухарями, яйцами. Обваливаем кусочки курицы в муке, яйце и затем в сухарях.","Жарим наггетсы на растительном масле."],"nutritionalValue":"47/12/106 709","url":"https://www.edimdoma.ru/retsepty/111907-kurinye-naggetsy"},{"id":20,"title":"Карри с нутом на кокосовом молоке","type":"secound-course","idInCategory":10,"ingredients":[{"ingredientId":95,"amountOf":"200","unitId":8},{"ingredientId":96,"amountOf":"200","unitId":11},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":15,"amountOf":"3","unitId":9,"index":1},{"ingredientId":10,"amountOf":"2","unitId":5},{"ingredientId":9,"amountOf":"1","unitId":5},{"ingredientId":44,"amountOf":"½","unitId":6},{"ingredientId":97,"amountOf":"½","unitId":6},{"ingredientId":22,"amountOf":null,"unitId":7},{"ingredientId":98,"amountOf":null,"unitId":7},{"ingredientId":51,"amountOf":null,"unitId":7}],"directions":["Лук и чеснок мелко режем и обжариваем на оливковом масле.","Добавляем карри, куркуму и томатную пасту. Обжариваем минуту.","Добавляем острый перец и соль, перемешиваем.","Добавляем в сковороду варенный нут.","Вливаем Немолоко, тушим под крышкой на небольшом огне 25 минут."],"nutritionalValue":"24/24/76 610","url":"https://www.edimdoma.ru/retsepty/149572-karri-s-nutom-na-kokosovom-moloke"},{"id":21,"title":"Нежные сырники с манкой","type":"dessert","idInCategory":2,"ingredients":[{"ingredientId":99,"amountOf":"500","unitId":8},{"ingredientId":100,"amountOf":"6","unitId":5},{"ingredientId":101,"amountOf":"4","unitId":5},{"ingredientId":22,"amountOf":"","unitId":7},{"ingredientId":29,"amountOf":"2","unitId":5}],"directions":["Блендером взбиваем творог, чтобы он был пышным.","Смешиваем творог, манку, сахар и соль. Оставляем массу на 10 минут.","Делим на 8 равных частей, скатываем шарики, плющим их, обваливаем в муке.","Обжариваем сырники на растительном масле на слабом огне.","Выкладываем сырники на бумажное полотенце для удаления масла."],"nutritionalValue":"25/20/54 499","url":"https://www.edimdoma.ru/retsepty/140924-nezhnye-syrniki-s-mankoy"},{"id":22,"title":"Паста с соусом из сливочного сыра и моцареллы","type":"secound-course","idInCategory":11,"ingredients":[{"ingredientId":102,"amountOf":"500","unitId":8},{"ingredientId":103,"amountOf":"500","unitId":11},{"ingredientId":104,"amountOf":"125","unitId":8},{"ingredientId":105,"amountOf":"50","unitId":8},{"ingredientId":106,"amountOf":"50","unitId":11},{"ingredientId":107,"amountOf":"20","unitId":8},{"ingredientId":108,"amountOf":"½","unitId":19,"index":1},{"ingredientId":15,"amountOf":"1","unitId":9,"index":1},{"ingredientId":10,"amountOf":"60","unitId":11},{"ingredientId":22,"amountOf":"","unitId":7},{"ingredientId":23,"amountOf":"","unitId":7}],"directions":["Мелко рубим моцареллу (до состояния кашицы), добавляем сливочный сыр, сливки, немного солим, отставляем в холодильник на 30-40 минут.","Базилик, орехи, чеснок, оливковое масло, соль и перец закладываем в блендер, мелко рубим.","Отвариваем пасту (альденте). Откидываем на дуршлаг и смешиваем с томатным соусом.","Прогреваем минуту, подаем. Сверху сырный соус, на него - зеленое масло."],"nutritionalValue":"24/40/102 859","url":"https://www.edimdoma.ru/retsepty/147775-pasta-s-sousom-iz-slivochnogo-syra-i-motsarelly"},{"id":23,"title":"Фунчоза с курицей и овощами","type":"secound-course","idInCategory":12,"ingredients":[{"ingredientId":80,"amountOf":"70","unitId":8},{"ingredientId":93,"amountOf":"250","unitId":8},{"ingredientId":57,"amountOf":"80","unitId":8},{"ingredientId":4,"amountOf":"½","unitId":3},{"ingredientId":8,"amountOf":"1","unitId":3},{"ingredientId":5,"amountOf":"1","unitId":3},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":15,"amountOf":"1","unitId":9,"index":1},{"ingredientId":59,"amountOf":"50","unitId":11},{"ingredientId":22,"amountOf":"","unitId":7},{"ingredientId":23,"amountOf":"","unitId":7},{"ingredientId":29,"amountOf":"2","unitId":5}],"directions":["Морковь, лук чистим и нарезаем произвольно.","Болгарский перец чистим, моем, нарезаем небольшими кусочками.","Помидор нарезаем средними кусочками.","Чеснок чистим и нарезаем тонкими полосочками.","На растительном масле жарим сперва куриное филе, откладываем. Затем лук, чеснок, морковь, болгарский перец, стручковую фасоль. Обжариваем 10 минут.","Убавляем огонь до минимум, накрываем крышкой и готовим ещё 15 минут.","Заливаем фунчозу кипятком, затем сливаем воду.","Выкладываем фунчозу к овощам, добавляем перец, соевый соус и прогреваем 1-2 минуты."],"nutritionalValue":null,"url":"https://www.russianfood.com/recipes/recipe.php?rid=157439"},{"id":24,"title":"Кукурузная каша в духовке","type":"garnish","idInCategory":2,"ingredients":[{"ingredientId":109,"amountOf":"1","unitId":17,"index":1},{"ingredientId":38,"amountOf":"½","unitId":17,"index":1},{"ingredientId":110,"amountOf":"½","unitId":17,"index":1},{"ingredientId":20,"amountOf":"60","unitId":8},{"ingredientId":22,"amountOf":"","unitId":7},{"ingredientId":101,"amountOf":"","unitId":7},{"ingredientId":111,"amountOf":"","unitId":7}],"directions":["Прогреваем духовку до 180°.","Промыть крупу до чистой воды.","Выложить крупу в жаропрочную форму, добавить щепотку соли, сахар, ваниль.","Влить в форму половину стакана теплого молока и половину стакана теплой воды.","Закрыть форму фольгой и поставить в духовку. Через 25 минут убрать фольгу, снять пробу, если нужно, подержать ещё минут 5-7.","К готовой каше добавить сливочное масло."],"nutritionalValue":"2/5/23 148","url":"https://kopilka-kulinara.ru/kashi/kukuruznie_kashi/kukuruznaya-kasha-v-duxovke/#recipe_title"},{"id":25,"title":"Сырники с Пикабу","type":"dessert","idInCategory":3,"ingredients":[{"ingredientId":99,"amountOf":"1","unitId":20},{"ingredientId":101,"amountOf":"100","unitId":8},{"ingredientId":39,"amountOf":"100","unitId":8},{"ingredientId":116,"amountOf":"3","unitId":3}],"directions":["Смешиваем все ингредиенты.","Катаем шарики по 70г и сплющиваем их.","Поджариваем до румяной корочки.","Запекаем в духовке 7-10 минут при 180°."],"nutritionalValue":null,"url":"https://pikabu.ru/story/otvet_cheburillo_v_pro_syirniki_11203988#comments"},{"id":26,"title":"Бефстроганов","type":"secound-course","idInCategory":13,"ingredients":[{"ingredientId":36,"amountOf":"500","unitId":8},{"ingredientId":7,"amountOf":"2","unitId":3},{"ingredientId":46,"amountOf":"¼","unitId":6},{"ingredientId":51,"amountOf":"¼","unitId":6},{"ingredientId":9,"amountOf":"2","unitId":5},{"ingredientId":13,"amountOf":"120","unitId":8},{"ingredientId":66,"amountOf":"150","unitId":8},{"ingredientId":39,"amountOf":"1","unitId":5}],"directions":["Говядину (поясничную или заднюю часть) нарезаем поперёк волокон на широкие ломтики толщиной 2см, отбиваем.","Нарезаем брусочками длиной 4см. Солим, перчим и обжариваем на растительном масле до золотистой корочки.","Лук нарезаем полукольцами, добавляем к мясу, обжариваем до золотистого цвета.","Добавляем муку, томатную пасту, вливаем сметану, бульон или горячую воду.","Доводим до кипения, тушим до готовности."],"nutritionalValue":"28/47/16 595","url":"https://www.edimdoma.ru/retsepty/70243-befstroganov"},{"id":27,"title":"Сердечки с солеными огурцами","type":"secound-course","idInCategory":14,"ingredients":[{"ingredientId":112,"amountOf":"1","unitId":20},{"ingredientId":114,"amountOf":"1 - 2","unitId":3},{"ingredientId":5,"amountOf":"1","unitId":4,"index":1}],"directions":["Сердечки зачищаем от пленок и трубок. Складываем в посуду с толстым дном. Вливаем 2-3 стакана воды, доводим до кипения, снимаем пену и варим до полного выкипания жидкости.","Режем лук полукольцами, морковь и огурцы - соломкой.","Когда вода выкипит, вливаем растительное масло, добавляем лук и жарим, перемешивая, пару минут.","Добавляем морковь и жарим 2-3 минуты.","Добавляем огурцы, слегка обжариваем. Вливаем стакан воды (можно рассола), добавляем молотый чёрный перец, перец горошком и лавровый лист.","Тушим ещё 25-30 минут. В конце варки солим.","Блюдо можно готовить в горшочках."],"nutritionalValue":null,"url":"https://harch.ru/headline/serdechki-tushenye-s-solenymi-ogurcami-po-mixajlovski/"},{"id":28,"title":"Свинина с тыквой в духовке","type":"secound-course","idInCategory":15,"ingredients":[{"ingredientId":117,"amountOf":"560","unitId":8},{"ingredientId":49,"amountOf":"650","unitId":8},{"ingredientId":7,"amountOf":"","unitId":7},{"ingredientId":118,"amountOf":"2","unitId":5},{"ingredientId":56,"amountOf":"½","unitId":6},{"ingredientId":119,"amountOf":"½","unitId":6},{"ingredientId":46,"amountOf":"½","unitId":6},{"ingredientId":10,"amountOf":"1","unitId":5},{"ingredientId":26,"amountOf":"½","unitId":6}],"directions":["Нарезаем мясо небольшими кусочками, нарезаем лук полукольцами, добавляем майонез, кумин, кардамон, душистый перец, паприку, хорошо всё перемешиваем и убираем в холодильник на час.","Очищаем тыкву и нарезаем дольками.","Разогреваем духовку до 180°.","В мясо добавляем соль.","Застилаем противень фольгой, укладываем мясо со специями, сверху укладываем тыкву, сбрызгиваем тыкву маслом.","Запекаем в духовке на 30 минут. В конце можно включить гриль, чтобы получить поджаристые корочки."],"nutritionalValue":"22/58/14 647","url":"https://www.edimdoma.ru/retsepty/59233-svinina-zapechennaya-s-tykvoy"},{"id":28,"title":"Манник ночной","type":"dessert","idInCategory":4,"ingredients":[{"ingredientId":100,"amountOf":"1","unitId":17,"index":1},{"ingredientId":118,"amountOf":"1","unitId":17,"index":1},{"ingredientId":13,"amountOf":"3","unitId":5},{"ingredientId":63,"amountOf":"1","unitId":3},{"ingredientId":111,"amountOf":"","unitId":7},{"ingredientId":119,"amountOf":"½","unitId":6},{"ingredientId":53,"amountOf":"1","unitId":5},{"ingredientId":101,"amountOf":"100","unitId":8}],"directions":["Манную крупу заливаем кефиром, можно добавить сметану. Хорошо перемешиваем и оставляем на ночь (12 часов).","Разогреть духовку до 180°.","В разбухшую манку на следующий день добавляем 1 яйцо, щепотку соли, ванилин, 1/2 чайной ложки соды, гашеной 1 столовой ложкой яблочного уксуса. Добавить 100г сахара.","Выкладываем в форму и выпекаем в духовке около 40-50 минут."],"nutritionalValue":"2/2/15 82","url":"https://www.edimdoma.ru/retsepty/149421-mannik-nochnoy-k-zavtraku"},{"id":29,"title":"Тушёная капуста","type":"garnish","idInCategory":3,"ingredients":[{"ingredientId":2,"amountOf":"2.5","unitId":20},{"ingredientId":5,"amountOf":"1","unitId":3},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":21,"amountOf":"1","unitId":13,"index":1}],"directions":["Лук и морковь мелко нарезаем, капусту шинкуем.","На растительном масле обжариваем лук и морковь, добавляем капусту, накрываем крышкой и тушим на медленном огне 20 минут, периодически помешивая.","Добавить немного воды, соль, перец, лавровый лист, хорошо перемешать и тушить ещё 15-20 минут, периодически помешивая."],"nutritionalValue":"52/5/199 826","url":"https://www.edimdoma.ru/retsepty/5151-tushenaya-kapusta"},{"id":30,"title":"Котлеты из мяса (курицы, трески, щуки)","type":"secound-course","idInCategory":16,"ingredients":[{"ingredientId":90,"amountOf":"1","unitId":20},{"ingredientId":120,"amountOf":"200","unitId":8},{"ingredientId":110,"amountOf":"250","unitId":11},{"ingredientId":63,"amountOf":"1","unitId":3},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":20,"amountOf":"50","unitId":8}],"directions":["Замачиваем хлеб в молоке.","Готовим фарш из свинины и говядины (примерно по половине) или из курицы, трески, щуки, также измельчаем лук и отжатый хлеб.","Добавляем соль, перец, яйцо и сливочное масло. Хорошо вымешиваем.","Формируем котлеты, смачивая руки холодной водой.","Обжариваем с двух сторон на растительном масле.","Перекладываем котлеты в форму, добавляем немного воды, закрываем крышкой и ставим на 5 минут в микроволновку или в разогретую духовку."],"nutritionalValue":null,"url":null},{"id":31,"title":"Плов из курицы","type":"secound-course","idInCategory":17,"ingredients":[{"ingredientId":73,"amountOf":"400","unitId":8},{"ingredientId":98,"amountOf":"400","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":5,"amountOf":"1","unitId":3},{"ingredientId":15,"amountOf":"3","unitId":9,"index":2},{"ingredientId":54,"amountOf":"","unitId":7},{"ingredientId":121,"amountOf":"","unitId":7}],"directions":["Нарезаем филе на кусочки, обжариваем на сковороде на среднем огне. Перекладываем филе в кастрюлю с толстым дном.","Нарезаем лук полукольцами, морковь - соломкой.","Обжариваем лук до золотистого цвета, выкладываем на курицу, не перемешивая.","Обжариваем морковь, выкладываем на лук.","Заливаем поджарку (зирвак) кипятком так, чтобы вода слегка покрывала слой моркови, тушим до готовности мяса на слабом огне. Тушим примерно 15 минут. В конце тушения добавляем зиру, молотый перец, соль.","Рис промываем, осторожно выкладываем на зирвак, добавляем барбарис, слегка утрамбовываем рис шумовкой. Аккуратно заливаем кипятком так, чтобы вода покрывала рис примерно на 1.5-2 см.","Варим плов без крышки на среднем огне, пока вода не впитается в рис.","Когда вода впиталась, делаем маленький огонь и закладываем зубчики чеснока.","Закрываем плотной крышкой, делаем самый слабый огонь и выдерживаем под крышкой 15 минут. Выключаем огонь и не снимаем крышку ещё 10 минут."],"nutritionalValue":"21/1/59 330","url":"https://www.edimdoma.ru/retsepty/13358-plov-s-kuritsey"},{"id":32,"title":"Макароны по-флотски","type":"secound-course","idInCategory":18,"ingredients":[{"ingredientId":36,"amountOf":"250","unitId":8},{"ingredientId":89,"amountOf":"300","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":20,"amountOf":"50","unitId":8}],"directions":["Говядину отвариваем, перекручиваем в фарш.","Поджариваем лук на смеси сливочного и растительного масло на среднем огне. Добавляем фарш, разминаем лопаткой, обжариваем до испарения жидкости.","Добавляем соль, молотый перец и лавровый лист. Перемешиваем, даём настояться 10 минут.","Отвариваем до готовности макароны (лучше брать ребристые или полые). Откидываем на дуршлаг и соединяем с фаршем. Прогреваем на сковороде 1 минуту и подаём."],"nutritionalValue":null,"url":null},{"id":32,"title":"Винегрет","type":"secound-course","idInCategory":18,"ingredients":[{"ingredientId":122,"amountOf":"1","unitId":3},{"ingredientId":3,"amountOf":"3","unitId":3},{"ingredientId":5,"amountOf":"3","unitId":3},{"ingredientId":58,"amountOf":"5","unitId":3},{"ingredientId":86,"amountOf":"½","unitId":10,"index":2},{"ingredientId":123,"amountOf":"250","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":124,"amountOf":"20","unitId":11}],"directions":["Отвариваем или печём свёклу, отвариваем картофель и морковь.","Мелко режем все овощи кубиком. (Для Вани не добавляем лук).","Свеклу отдельно смешиваем с маслом.","Заправляем солью, перцем, масло."],"nutritionalValue":"5/68/11 670","url":"https://www.edimdoma.ru/retsepty/77556-vinegret-klassicheskiy"},{"id":32,"title":"Мясо по-французски","type":"secound-course","idInCategory":18,"ingredients":[{"ingredientId":122,"amountOf":"500","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":63,"amountOf":"6","unitId":3},{"ingredientId":118,"amountOf":"","unitId":7},{"ingredientId":61,"amountOf":"","unitId":7}],"directions":["Отвариваем вкрутую яйца.","Нарезаем свинину мелким кубиком (для этого её удобно немного заморозить).","Разогреть духовку до 200°.","Режем яйцо мелким кубиком.","Смешиваем яйцо и свинину, солим, перчим, заправляем майонезом (не жалеть майонез), складываем в форму. Закрываем форму фольгой и ставим в духовку примерно на полчаса.","Трём на терке сыр.","Когда свинина приготовиться, и выкипит лишняя жидкость, посыпаем натертым на терке сыром и оставляем в духовке ещё на 5 минут."],"nutritionalValue":null,"url":null},{"id":32,"title":"Оладьи из говяжьей печени","type":"secound-course","idInCategory":18,"ingredients":[{"ingredientId":122,"amountOf":"600","unitId":8},{"ingredientId":63,"amountOf":"2","unitId":3},{"ingredientId":110,"amountOf":"100","unitId":11},{"ingredientId":39,"amountOf":"100","unitId":8},{"ingredientId":123,"amountOf":"","unitId":7},{"ingredientId":124,"amountOf":"","unitId":7},{"ingredientId":88,"amountOf":"","unitId":7}],"directions":["Печень очищаем от кожицы и пленок, режем на  крупные кусочки. Перемалываем в блендере. Добавляем к ней муку, молоко, яйца, соль, перец, специи.","Выпекаем на растительном масле, выкладывая оладушки ложкой."],"nutritionalValue":null,"url":"https://www.edimdoma.ru/retsepty/7131-oladi-iz-govyazhey-pecheni"},{"id":33,"title":"Мясной рулет с омлетом","type":"breakfast","idInCategory":2,"ingredients":[{"ingredientId":90,"amountOf":"500","unitId":8},{"ingredientId":7,"amountOf":"1","unitId":3},{"ingredientId":125,"amountOf":"60","unitId":8},{"ingredientId":110,"amountOf":"100","unitId":11},{"ingredientId":63,"amountOf":"4","unitId":3},{"ingredientId":13,"amountOf":"2","unitId":5},{"ingredientId":126,"amountOf":"","unitId":7},{"ingredientId":20,"amountOf":"10","unitId":8}],"directions":["Разогреваем духовку до 180°.","Яйца, сметану, соль, перец и зелень взбиваем в блендере.","Противень смазываем сливочным маслом. Выливаем омлет. Выпекаем в духовке 15-20 минут. Готовый омлет остужаем.","Батон замачиваем в молоке.","Лук измельчаем в блендере. Добавляем к луку фарш, размоченный в молоке хлеб, соль и специи. Измельчаем до однородного состояния в блендере.","Стол сбрызгиваем водой, кладем пищевую пленку. На неё выкладываем фарш ровным слоем в виде прямоугольника. На фарш выкладываем омлет и с помощью пленки заворачиваем рулет.","Перекладываем рулет на смазанный растительным маслом противень. Делаем проколы в нескольких местах.","Запекаем рулет в духовке при 180° в течении 45-50 минут."],"nutritionalValue":"4/4/4 130","url":"https://www.povarenok.ru/recipes/show/161387/"},{"id":33,"title":"Творожная запеканка","type":"dessert","idInCategory":5,"ingredients":[{"ingredientId":99,"amountOf":"500","unitId":8},{"ingredientId":63,"amountOf":"3","unitId":3},{"ingredientId":20,"amountOf":"3","unitId":5},{"ingredientId":101,"amountOf":"3","unitId":5},{"ingredientId":13,"amountOf":"3","unitId":5},{"ingredientId":100,"amountOf":"3","unitId":5},{"ingredientId":111,"amountOf":"","unitId":7},{"ingredientId":125,"amountOf":"","unitId":7}],"directions":["Растапливаем сливочное масло, добавляем сахар, сметану, манку. Хорошо смешиваем. Добавляем яйца, взбиваем. Добавляем творог и ванильный экстракт. Взбиваем всё миксером 10-15 минут.","Разогреваем духовку до 160°.","Смазываем форму маслом, выливаем массу и выпекаем около 60-70 минут."],"nutritionalValue":"19/19/24 343","url":"https://www.edimdoma.ru/retsepty/141344-tvorozhnaya-zapekanka"}]');

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _svg1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg1.css */ "./src/svg1.css");
/* harmony import */ var _app_components_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/select */ "./src/app/components/select/index.js");
/* harmony import */ var _app_components_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_components_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ingredients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients.json */ "./src/ingredients.json");
/* harmony import */ var _recipes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes.json */ "./src/recipes.json");
/* harmony import */ var _app_components_select_with_search_template_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/components/select-with-search/template.html */ "./src/app/components/select-with-search/template.html");
var _this = undefined;
var _excluded = ["ingredientId"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// TODO в константы капсом



var ingredients = JSON.stringify(_ingredients_json__WEBPACK_IMPORTED_MODULE_3__);
var recipes = JSON.stringify(_recipes_json__WEBPACK_IMPORTED_MODULE_4__);
console.log('%c' + JSON.parse(JSON.stringify(ingredients)), 'color: green');
var addRow = function addRow(recipeRow) {
  var ingredientSelectId = "s".concat(window.maxIndex + 1);
  var unitSelectId = "s".concat(window.maxIndex + 2);
  var rowIndex = window.rowIndex;
  addTableRow(_objectSpread({
    ingredientSelectId: ingredientSelectId,
    unitSelectId: unitSelectId,
    rowIndex: window.rowIndex
  }, recipeRow));
  window.maxIndex = window.maxIndex + 3;
  window.table = [].concat(_toConsumableArray(window.table), [{
    rowIndex: rowIndex,
    ingredients: window[ingredientSelectId],
    units: window[unitSelectId]
  }]);
  updateIngredients(INGREDIENTS);
  updateUnits(UNITS);
};
var removeRow = function removeRow(event) {
  var rowIndex = event.target.parentNode.parentNode.getAttribute('rowindex');
  window.table = window.table.filter(function (_ref) {
    var index = _ref.rowIndex;
    return index !== rowIndex;
  });
  document.querySelector(".table__row[rowindex=\"".concat(rowIndex, "\"]")).remove();
};
var getIngredients = function getIngredients() {
  return [].concat(_toConsumableArray(window.INGREDIENTS), _toConsumableArray(window.NEW_INGREDIENTS));
};
var getUnits = function getUnits() {
  return [].concat(_toConsumableArray(window.UNITS), _toConsumableArray(window.NEW_UNITS));
};
var trimRow = function trimRow(limit, text) {
  return text.split(' ').reduce(function (acc, word, index) {
    var lastElement = acc.length - 1;
    if (index === 0) return [word];
    var prevElement = acc[lastElement];
    return prevElement.length < 3 ? [].concat(_toConsumableArray(acc.slice(0, -1)), ["".concat(prevElement, " ").concat(word)]) : [].concat(_toConsumableArray(acc), [word]);
  }, []).reduce(function (acc, word) {
    if (!acc.length) return [word];
    var lastIndex = acc.length - 1;
    var lastElement = acc[lastIndex];
    var rowWithNewWord = "".concat(lastElement, " ").concat(word);
    return rowWithNewWord.length < limit ? [].concat(_toConsumableArray(acc.slice(0, -1)), [rowWithNewWord]) : [].concat(_toConsumableArray(acc), [word]);
  }, []);
};
var createCardSvg = function createCardSvg(recipe, x0, y0) {
  var startX = +x0;
  var startY = +y0;
  var svg = document.querySelector('svg');
  var container = document.querySelector('.cards__container');
  if (svg) {
    container.removeChild(svg);
  }
  svg = createSvgElement(TYPE.SVG, {
    id: 'svg',
    width: mm(148),
    height: mm(210)
  });
  var defs = createSvgElement(TYPE.DEFS);
  var style = createSvgElement(TYPE.STYLE);
  var docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
  var cdata = docu.createCDATASection("".concat(window.css));
  style.appendChild(cdata);
  defs.appendChild(style);
  svg.appendChild(defs);
  var recipeGroup = createSvgElement(TYPE.GROUP);
  var recipeContainer = createSvgElement(TYPE.RECTANGLE, {
    x: mm(startX),
    y: mm(startY),
    width: mm(CARD_WIDTH),
    height: mm(CARD_HEIGHT),
    "class": 'recipe__container'
  });
  var id = recipe.id,
    title = recipe.title,
    idInCategory = recipe.idInCategory,
    type = recipe.type,
    ingredients = recipe.ingredients,
    directions = recipe.directions;
  var titleContainer = createSvgElement(TYPE.RECTANGLE, {
    x: mm(startX),
    y: mm(startY + BASE_OFFSET / 2),
    width: mm(CARD_WIDTH),
    height: mm(BASE_OFFSET - BASE_OFFSET / 4),
    style: 'stroke: gray; fill: none'
  });
  var recipeTitle = createSvgElement(TYPE.TEXT, {
    'text-anchor': 'middle',
    x: mm(startX + CARD_WIDTH / 2),
    y: mm(startY + BASE_OFFSET),
    "class": 'title',
    style: "".concat(title.length > 20 ? 'font-size: 16px;' : '')
  }, title);
  var ingredientsAmountOfGroup = createSvgElement(TYPE.GROUP, {
    "class": 'content'
  });
  var ingredientMainText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + BASE_OFFSET),
    y: mm(startY + BASE_OFFSET * 2)
  });
  var ingredientProductsText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + PRODUCTS_OFFSET),
    y: mm(startY + BASE_OFFSET * 2)
  });
  var ingredientsOffset = ingredients.reduce(function (acc, _ref2) {
    var ingredientId = _ref2.ingredientId,
      rest = _objectWithoutProperties(_ref2, _excluded);
    // TODO сделать получение ингредиентов методом
    var a = getIngredients().find(function (_ref3) {
      var id = _ref3.id;
      return id === ingredientId;
    });
    var ingredientElementsRows = trimRow(INGREDIENTS_MAX_CHAR_COUNT, getIngredients().find(function (_ref4) {
      var id = _ref4.id;
      return id === ingredientId;
    }).label);
    return [].concat(_toConsumableArray(acc), [_objectSpread({
      ingredientId: ingredientId,
      ingredientElementsRows: ingredientElementsRows
    }, rest)]);
  }, []).reduce(function (acc, _ref5, index) {
    var amountOf = _ref5.amountOf,
      unitId = _ref5.unitId,
      unitIndex = _ref5.index,
      isAnalogue = _ref5.isAnalogue,
      ingredientId = _ref5.ingredientId,
      ingredientElementsRows = _ref5.ingredientElementsRows;
    var isFirstRow = index === 0;
    var lastRowCount = isFirstRow ? 1 : acc[acc.length - 1].rowCount;
    var processedUnitId = Number.isInteger(unitIndex) ? "".concat(unitId, "_").concat(unitIndex) : unitId;
    var unit = window.UNITS.find(function (_ref6) {
      var id = _ref6.id;
      return id === processedUnitId;
    });
    var amountOfUnitElement = createSvgElement(TYPE.TSPAN, {
      x: mm(startX + BASE_OFFSET),
      dy: isFirstRow ? '0' : isAnalogue ? '0.8em' : "".concat((lastRowCount + 1) * 0.8, "em")
    }, "\u25AA ".concat(amountOf || '', " ").concat(unit === null || unit === void 0 ? void 0 : unit.label));
    ingredientMainText.appendChild(amountOfUnitElement);
    var ingredientOffset = ingredientElementsRows.reduce(function (elementAcc, word, wordIndex) {
      var dy = isFirstRow && wordIndex === 0 ? 0 : wordIndex === 0 && !isAnalogue ? 1.6 : 0.8;
      var productRow = createSvgElement(TYPE.TSPAN, {
        x: mm(startX + PRODUCTS_OFFSET),
        dy: "".concat(dy, "em")
      }, isAnalogue ? "\u0438\u043B\u0438 ".concat(word.toLowerCase()) : word);
      ingredientProductsText.appendChild(productRow);
      return elementAcc + dy;
    }, 0);
    return [].concat(_toConsumableArray(acc), [{
      rowCount: ingredientElementsRows.length,
      offset: ingredientOffset
    }]);
  }, []);

  // const separatorOffset = Math.floor(ingredientsOffset.reduce((acc, { offset }) => (acc + offset * 16), 0));
  // console.log('%c%s', 'background: cadetblue; padding: 8px;', JSON.stringify(ingredientsOffset) + separatorOffset);

  ingredientsAmountOfGroup.appendChild(ingredientMainText);
  ingredientsAmountOfGroup.appendChild(ingredientProductsText);
  recipeGroup.appendChild(recipeContainer);
  recipeGroup.appendChild(titleContainer);
  recipeGroup.appendChild(recipeTitle);
  recipeGroup.appendChild(ingredientsAmountOfGroup);
  svg.appendChild(recipeGroup);
  container.appendChild(svg);
  // ---------------------------- //

  var directionsGroup = createSvgElement(TYPE.GROUP, {
    "class": 'content'
  });

  // const directionsTitle = createSvgElement(TYPE.TEXT, {
  //   // TODO 52 в константы
  //   x: mm(startX + 52),
  //   y: mm(startY + BASE_OFFSET + DIRECTION_Y_OFFSET),
  //   'text-anchor': 'middle',
  //   class: 'preparing'
  // }, 'Приготовление');

  var separatorOffset = Math.floor(document.querySelector('.content').getBBox().height * 0.26) + BASE_OFFSET * 2 + BASE_OFFSET / 2;
  var separator = createSvgElement(TYPE.TEXT, {
    'text-anchor': 'middle',
    x: mm(startX + CARD_WIDTH / 2),
    y: separatorOffset + 'mm',
    "class": 'title',
    style: "".concat(title.length > 20 ? 'font-size: 16px;' : '')
  }, '—');
  recipeGroup.appendChild(separator);
  var directionsMainText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + BASE_OFFSET / 2),
    y: mm(startY + separatorOffset + BASE_OFFSET / 2),
    "class": 'preparing__content'
  });
  var PIXEL_IN_MM = 0.26;
  directions.forEach(function (direction, index) {
    trimRow(DIRECTIONS_MAX_CHAR_COUNT, direction).forEach(function (row, rowIndex) {
      if (rowIndex === 0) {
        directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
          x: mm(startX + BASE_OFFSET / 2),
          dy: index === 0 && rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em',
          "class": 'bold'
        }, "".concat(index + 1, ".")));
      }
      directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
        x: rowIndex === 0 ? mm(startX + BASE_OFFSET / 2 + 16 * ("".concat(index).length + 1) * PIXEL_IN_MM) : mm(startX + BASE_OFFSET),
        dy: rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em'
      }, row));
    });
  });
  recipeGroup.appendChild(directionsGroup);
  recipeGroup.appendChild(directionsMainText);
};
var createCard = function createCard() {
  createCardSvg(window.selectedRecipe || copyCard(), 0, 0);
};
var addIngredient = function addIngredient(ingredient) {
  var ingredients = getIngredients();
  var newId = Math.max.apply(Math, _toConsumableArray(ingredients.map(function (_ref7) {
    var id = _ref7.id;
    return id;
  }))) + 1;
  updateIngredients([].concat(_toConsumableArray(ingredients), [{
    id: newId,
    label: ingredient
  }]));
  window.NEW_INGREDIENTS = [].concat(_toConsumableArray(window.NEW_INGREDIENTS), [{
    id: newId,
    label: ingredient
  }]);
  return newId;
};
var addUnit = function addUnit(unit) {
  var units = getUnits();
  var newId = Math.max.apply(Math, _toConsumableArray(units.map(function (_ref8) {
    var id = _ref8.id;
    var a = /_/.test(id) ? id.match(/^(\d+)/)[1] : id;
    return +a;
  }))) + 1;

  // TODO Нужно ли?
  updateUnits([].concat(_toConsumableArray(units), [{
    id: newId,
    label: unit
  }]));
  window.NEW_UNITS = [].concat(_toConsumableArray(window.NEW_UNITS), [{
    id: newId,
    label: unit
  }]);
  return newId;
};
var copyCard = function copyCard() {
  var acc = window.table.reduce(function (acc, _ref9, index) {
    var _document$querySelect;
    var rowIndex = _ref9.rowIndex,
      ingredients = _ref9.ingredients,
      units = _ref9.units;
    var ingredientValue = ingredients.input.value;
    var ingredient = getIngredients().find(function (_ref0) {
      var label = _ref0.label;
      return label === ingredientValue;
    });
    var ingredientId = ingredient ? ingredient.id : addIngredient(ingredientValue);
    var amountOf = (_document$querySelect = document.querySelector(".table__row[rowindex=\"".concat(rowIndex, "\"] .amount-of__input"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
    var unitValue = units.input.value;
    var unit = window.UNITS.find(function (_ref1) {
      var label = _ref1.label;
      return label === unitValue;
    });
    var unitId = unit ? unit.id : addUnit(unitValue);
    return [].concat(_toConsumableArray(acc), [_objectSpread({
      ingredientId: ingredientId,
      amountOf: amountOf,
      unitId: Number.isInteger(unitId) ? unitId : +unitId.split('_')[0]
    }, !Number.isInteger(unitId) && {
      index: +unitId.split('_')[1]
    })]);
  }, []);
  var newIngredients = window.NEW_INGREDIENTS.map(function (_ref10) {
    var id = _ref10.id,
      label = _ref10.label;
    return {
      id: id,
      name: label
    };
  }).reduce(function (ingredientAcc, ingredient) {
    return [].concat(_toConsumableArray(ingredientAcc), [_objectSpread(_objectSpread({}, ingredient), {}, {
      linkedUnits: []
    })]);
  }, []);
  var newUnits = window.NEW_UNITS.reduce(function (unitAcc, unit) {
    return [].concat(_toConsumableArray(unitAcc), [unit]);
  }, []);
  var newId = Math.max.apply(Math, _toConsumableArray(window.RECIPES.map(function (_ref11) {
    var id = _ref11.id;
    return id;
  }))) + 1;
  var typeLabel = document.getElementById('recipeTypeSelect').input.value;
  var type = Object.entries(RECIPE_TYPE_MAP).find(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
      key = _ref13[0],
      value = _ref13[1];
    return value === typeLabel;
  })[0];
  var inCategoryIds = window.RECIPES.filter(function (_ref14) {
    var recipeType = _ref14.type;
    return type === recipeType;
  }).map(function (_ref15) {
    var idInCategory = _ref15.idInCategory;
    return idInCategory;
  });
  var idInCategory = Math.max.apply(Math, _toConsumableArray(inCategoryIds.length ? inCategoryIds : [1])) + 1;
  var title = document.querySelector('.recipe-title').value;
  var directions = document.querySelector('.directions__textarea').value.split('\n');
  var nutritionalValue = document.querySelector('.recipe-nutritional-value').value || null;
  var url = document.querySelector('.recipe-url').value || null;
  var newRecipe = {
    id: newId,
    title: title,
    type: type,
    idInCategory: idInCategory,
    ingredients: acc,
    directions: directions,
    nutritionalValue: nutritionalValue,
    url: url
  };
  var result = "".concat(JSON.stringify(newRecipe, null, 2), "\n").concat(JSON.stringify(newIngredients), " \n").concat(JSON.stringify(newUnits), "}");
  console.log('%c%s', 'background: cadetblue; padding: 8px;', result);
  navigator.clipboard.writeText(result);
  return newRecipe;
};
var copySvg = function copySvg() {
  var svg = document.getElementById('svg');
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);
  if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
  var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

  // TODO эту и подобные функции в хелпер
  var newId = Math.max.apply(Math, _toConsumableArray(window.RECIPES.map(function (_ref16) {
    var id = _ref16.id;
    return id;
  }))) + 1;
  var link = document.getElementById("link");
  link.href = url;
  link.download = "".concat(document.querySelector('.recipe-title').value);
  link.classList.toggle('hidden');
};
var addTableRow = function addTableRow(_ref17) {
  var ingredientSelectId = _ref17.ingredientSelectId,
    unitSelectId = _ref17.unitSelectId,
    rowIndex = _ref17.rowIndex,
    ingredientId = _ref17.ingredientId,
    amountOf = _ref17.amountOf,
    unitId = _ref17.unitId,
    index = _ref17.index;
  var tableContentElement = document.querySelector('.table__content');
  var tabIndex = window.tabIndex;
  var rowElement = document.createElement('div');
  rowElement.className = 'table__row';

  // TODO сделать функцию для создания элемента с параметрами
  // В идеале для вложенных
  var ingredientsCell = document.createElement('div');
  ingredientsCell.className = 'table__cell';
  var ingredientsSelect = document.createElement('select-with-search');
  ingredientsSelect.id = ingredientSelectId;
  ingredientsCell.appendChild(ingredientsSelect);
  var countInputCell = document.createElement('div');
  countInputCell.className = 'table__cell';
  var countInputContаiner = document.createElement('div');
  countInputContаiner.className = 'text-input';
  var countInput = document.createElement('input');
  countInput.type = 'text';
  countInput.className = 'amount-of__input';
  countInput.tabIndex = tabIndex + 5;
  countInputContаiner.appendChild(countInput);
  countInputCell.appendChild(countInputContаiner);
  var unitsCell = document.createElement('div');
  unitsCell.className = 'table__cell';
  var unitsSelect = document.createElement('select-with-search');
  unitsSelect.id = unitSelectId;
  unitsCell.appendChild(unitsSelect);
  var tableAddButtonContainer = document.createElement('div');
  tableAddButtonContainer.className = 'table__cell table__active-button';
  var tableAddButton = document.createElement('button');
  tableAddButton.className = 'add-button';
  tableAddButton.tabIndex = tabIndex + 10;
  tableAddButton.onclick = _this.addRow;
  tableAddButtonContainer.appendChild(tableAddButton);
  var tableDeleteButtonContainer = document.createElement('div');
  tableDeleteButtonContainer.className = 'table__cell table__active-button';
  var tableDeleteButton = document.createElement('button');
  tableDeleteButton.className = 'delete-button';
  tableDeleteButton.onclick = _this.removeRow;
  tableDeleteButton.tabIndex = tabIndex + 11;
  tableDeleteButtonContainer.appendChild(tableDeleteButton);
  rowElement.appendChild(ingredientsCell);
  rowElement.appendChild(countInputCell);
  rowElement.appendChild(unitsCell);
  rowElement.appendChild(tableAddButtonContainer);
  rowElement.appendChild(tableDeleteButtonContainer);
  tableContentElement.appendChild(rowElement);
  window.tabIndex = window.tabIndex + 10;
  rowElement.setAttribute('rowIndex', rowIndex);
  ingredientsSelect.setAttribute('index', tabIndex + 1);
  ingredientsSelect.setAttribute('tabindex', tabIndex + 4);
  // TODO type в константы
  ingredientsSelect.setAttribute('type', 'ingredients');
  ingredientsSelect.setAttribute('options', JSON.stringify(window.INGREDIENTS));
  if (ingredientId && unitId) {
    // TODO функцией
    var ingredientLabel = window.ingredients.find(function (_ref18) {
      var id = _ref18.id;
      return id === ingredientId;
    }).label;
    var processedUnitId = Number.isInteger(index) ? "".concat(unitId, "_").concat(index) : unitId;
    var unitLabel = window.units.find(function (_ref19) {
      var id = _ref19.id;
      return id === processedUnitId;
    }).label;
    // TODO переименовать value1 во что-то лучше
    ingredientsSelect.setAttribute('value1', ingredientLabel);
    unitsSelect.setAttribute('value1', unitLabel);
  }
  if (amountOf) {
    countInput.value = amountOf;
  }
  unitsSelect.setAttribute('index', tabIndex + 7);
  unitsSelect.setAttribute('tabindex', tabIndex + 7);
  unitsSelect.setAttribute('type', 'units');
  unitsSelect.setAttribute('options', JSON.stringify(window.UNITS));
  window.rowIndex = rowIndex + 1;
};
var sortAlphabetically = function sortAlphabetically(_ref20, _ref21) {
  var aLabel = _ref20.label;
  var bLabel = _ref21.label;
  if (aLabel < bLabel) {
    return -1;
  }
  if (aLabel > bLabel) {
    return 1;
  }
  return 0;
};
var fillTable = function fillTable(recipe) {
  var tableContent = document.querySelector('.table__content');
  tableContent.innerHTML = '';
  window.table = [];
  document.querySelector('.recipe-title').value = recipe.title;
  document.querySelector('.directions__textarea').value = recipe.directions.join('\n');
  document.querySelector('.recipe-nutritional-value').value = recipe.nutritionalValue;
  document.querySelector('.recipe-url').value = recipe.url;
  document.getElementById('recipeTypeSelect').input.value = RECIPE_TYPE_MAP[recipe.type];
  recipe.ingredients.forEach(function (row) {
    addRow(row);
  });
};
var selectRecipe = function selectRecipe(event) {
  var selectedRecipe = window.RECIPES.find(function (_ref22) {
    var title = _ref22.title;
    return event.target.input.value === title;
  });
  window.selectedRecipe = selectedRecipe;

  // TODO лоадер на загрузку

  fillTable(selectedRecipe);
  createCard();
};
var updateSelectOptions = function updateSelectOptions(unit, options) {
  return window.table.forEach(function (select) {
    select[unit].setAttribute('options', JSON.stringify(options));
  });
};
var updateIngredients = function updateIngredients(ingredients) {
  return updateSelectOptions('ingredients', ingredients.sort(sortAlphabetically));
};
var updateUnits = function updateUnits(units) {
  return updateSelectOptions('units', units.sort(sortAlphabetically));
};
var mm = function mm(value) {
  return "".concat(value, "mm");
};
var NAMESPACE = 'http://www.w3.org/2000/svg';
var CARD_WIDTH = 148;
var CARD_HEIGHT = 210;
var BASE_OFFSET = 16;
var PRODUCTS_OFFSET = 50;
var DIRECTION_Y_OFFSET = 105;
var INGREDIENTS_MAX_CHAR_COUNT = 40;
var DIRECTIONS_MAX_CHAR_COUNT = 50;
var TYPE = {
  SVG: 'svg',
  GROUP: 'g',
  RECTANGLE: 'rect',
  TEXT: 'text',
  TSPAN: 'tspan',
  DEFS: 'defs',
  STYLE: 'style'
};
var RECIPE_TYPE = {
  FIRST_COURSE: 'first-course',
  SECOND_COURSE: 'secound-course',
  GARNISH: 'garnish',
  SALAD: 'salad',
  DESSERT: 'dessert',
  BREAKFAST: 'breakfast'
};
var RECIPE_TYPE_MAP = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, RECIPE_TYPE.FIRST_COURSE, 'Первое блюдо'), RECIPE_TYPE.SECOND_COURSE, 'Второе блюдо'), RECIPE_TYPE.GARNISH, 'Гарнир'), RECIPE_TYPE.SALAD, 'Салат'), RECIPE_TYPE.DESSERT, 'Десерт'), RECIPE_TYPE.BREAKFAST, 'Завтрак');

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = 'Hello, webpack!';

//   return element;
// }

// document.body.appendChild(component());

var init = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var units, recipeSelectorContainer, recipeSelector, categoryContainer, categorySelector, cardsNumberSelect1, cardsNumberSelect2;
    return _regeneratorRuntime().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // await initTemplates();
          document.querySelector('.page').insertAdjacentHTML('beforebegin', _app_components_select_with_search_template_html__WEBPACK_IMPORTED_MODULE_5__);
          window.INGREDIENTS = JSON.parse(ingredients).map(function (_ref24) {
            var id = _ref24.id,
              name = _ref24.name;
            return {
              id: id,
              label: name
            };
          });
          window.NEW_INGREDIENTS = [];
          window.NEW_UNITS = [];
          window.RECIPES = JSON.parse(recipes).sort(function (_ref25, _ref26) {
            var a = _ref25.title;
            var b = _ref26.title;
            return a > b ? 1 : -1;
          });

          // const css = await fetchFile('./svg1.css');
          // window.css = css;
          _context.next = 1;
          return fetchFile('./units.js');
        case 1:
          units = _context.sent;
          window.UNITS = JSON.parse(units).reduce(function (acc, _ref27) {
            var id = _ref27.id,
              name = _ref27.name;
            return [].concat(_toConsumableArray(acc), _toConsumableArray(Array.isArray(name) ? name.map(function (word, index) {
              return {
                id: "".concat(id, "_").concat(index + 1),
                label: word
              };
            }) : [{
              id: id,
              label: name
            }]));
          }, []);
          window.tabIndex = 0;
          recipeSelectorContainer = document.querySelector('.section');
          recipeSelector = document.createElement('select-with-search');
          recipeSelector.id = 'recipeSelect';
          recipeSelectorContainer.appendChild(recipeSelector);
          recipeSelector.setAttribute('options', JSON.stringify(window.RECIPES.map(function (_ref28) {
            var id = _ref28.id,
              title = _ref28.title;
            return {
              id: id,
              label: title
            };
          })));
          recipeSelector.addEventListener('selectOption', selectRecipe);

          // TODO сделать хелпер по поиску и вставки в контейнер (отдельно для списков)
          categoryContainer = document.querySelector('.recipe-type'); // TODO сделать здесь простой селектор. Сделать наследование от него в селекторе с выбором
          categorySelector = document.createElement('select-with-search');
          categorySelector.id = 'recipeTypeSelect';
          categoryContainer.appendChild(categorySelector);
          // TODO сделать удобный хелпер для выставления опций к списку
          categorySelector.setAttribute('options', JSON.stringify(Object.values(RECIPE_TYPE).map(function (value) {
            return {
              id: value,
              label: RECIPE_TYPE_MAP[value]
            };
          })));
          addTableRow({
            ingredientSelectId: 's1',
            ingredients: INGREDIENTS,
            unitSelectId: 's2',
            units: UNITS,
            rowIndex: 1
          });
          window.ingredients = INGREDIENTS;
          window.units = UNITS;
          window.table = [{
            rowIndex: 1,
            ingredients: s1,
            units: s2
          }];
          window.maxIndex = 3;
          window.rowIndex = 2;
          console.log('%c' + 'init 2', 'color: green');
          cardsNumberSelect1 = document.querySelector('.cards__number1');
          cardsNumberSelect2 = document.querySelector('.cards__number2');
          if (cardsNumberSelect1) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _recipes__WEBPACK_IMPORTED_MODULE_3__.RECIPES.forEach(function (_ref29) {
            var id = _ref29.id,
              title = _ref29.title;
            var option1 = document.createElement('option');
            option1.value = id;
            option1.innerHTML = title;
            cardsNumberSelect1.appendChild(option1);
            var option2 = document.createElement('option');
            option2.value = id;
            option2.innerHTML = title;
            cardsNumberSelect2.appendChild(option2);
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function init() {
    return _ref23.apply(this, arguments);
  };
}();
init();
var createCards = function createCards() {
  var cardsNumberSelect1 = document.querySelector('.cards__number1');
  var cardsNumberSelect2 = document.querySelector('.cards__number2');
  createCard(+cardsNumberSelect1.value, 0, 0);
  createCard(+cardsNumberSelect2.value, 0, 148);
};
var createSvgElement = function createSvgElement(type) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var textContent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var node = document.createElementNS(NAMESPACE, type);
  Object.entries(attrs).forEach(function (_ref30) {
    var _ref31 = _slicedToArray(_ref30, 2),
      key = _ref31[0],
      value = _ref31[1];
    node.setAttribute(key, value);
  });
  if ([TYPE.TEXT, TYPE.TSPAN].includes(type)) {
    node.textContent = textContent;
  }
  return node;
};

// const trimRow = (limit, text) => text.split(' ')
//   .reduce((acc, word, index) => {
//     const lastElement = acc.length - 1;
//     if (index === 0) return [word];

//     const prevElement = acc[lastElement];

//     return prevElement.length < 3
//       ? [...acc.slice(0, -1), `${prevElement} ${word}`]
//       : [...acc, word];
//   }, [])
//   .reduce((acc, word) => {
//     if (!acc.length) return [word]; const lastIndex = acc.length - 1; const lastElement = acc[lastIndex]; const rowWithNewWord = `${lastElement} ${word}`; return rowWithNewWord.length < limit ? [...acc.slice(0, -1), rowWithNewWord] : [...acc, word];
//   }, []);

// const createCard = (cardId, x0, y0) => {
//   const startX = +x0;
//   const startY = +y0;

//   let svg = document.querySelector('svg');

//   const container = document.querySelector('.cards__container');

//   if (!svg) {
//     svg = createSvgElement(TYPE.SVG, { width: mm(210), height: mm(297) });
//   }

//   const recipeGroup = createSvgElement(TYPE.GROUP);

//   const recipeContainer = createSvgElement(
//     TYPE.RECTANGLE, {
//     x: mm(startX),
//     y: mm(startY),
//     width: mm(CARD_WIDTH),
//     height: mm(CARD_HEIGHT),
//     class: 'recipe__container'
//   });

//   const {
//     id,
//     title,
//     ingredients,
//     directions
//   } = _recipes__WEBPACK_IMPORTED_MODULE_3__.RECIPES.find(({ id }) => cardId === id);

//   const recipeTitle = createSvgElement(TYPE.TEXT, {
//     'text-anchor': 'middle',
//     x: mm(startX + CARD_WIDTH / 2),
//     y: mm(startY + BASE_OFFSET),
//     class: 'title',
//     style: `${title.length > 20 ? 'font-size: 16px;' : ''}`
//   },
//     `${id}. ${title}`
//   );

//   const ingredientsAmountOfGroup = createSvgElement(TYPE.GROUP, { class: 'content' });

//   const ingredientMainText = createSvgElement(TYPE.TEXT, {
//     x: mm(startX + BASE_OFFSET),
//     y: mm(startY + BASE_OFFSET * 2)
//   });

//   const ingredientProductsText = createSvgElement(TYPE.TEXT, {
//     x: mm(startX + PRODUCTS_OFFSET),
//     y: mm(startY + BASE_OFFSET * 2)
//   });

//   ingredients.reduce((acc, { ingredientId, ...rest }) => {
//     const a = _ingredients__WEBPACK_IMPORTED_MODULE_4__.INGREDIENTS.find(({ id }) => id === ingredientId);

//     const ingredientElementsRows = trimRow(INGREDIENTS_MAX_CHAR_COUNT, _ingredients__WEBPACK_IMPORTED_MODULE_4__.INGREDIENTS.find(({ id }) => id === ingredientId).name);

//     return [...acc, { ingredientId, ingredientElementsRows, ...rest }];
//   }, [])
//     .reduce((acc, { amountOf, unitId, index: unitIndex, isAnalogue, ingredientId, ingredientElementsRows }, index) => {
//       const isFirstRow = index === 0; const lastRowCount = isFirstRow ? 1 : acc[acc.length - 1].rowCount;

//       const unit = _units__WEBPACK_IMPORTED_MODULE_2__.UNITS.find(({ id }) => id === unitId).name;

//       const amountOfUnitElement = createSvgElement(TYPE.TSPAN, {
//         x: mm(startX + BASE_OFFSET),
//         dy: isFirstRow ? '0' :
//           isAnalogue ? '0.8em' : `${(lastRowCount + 1) * 0.8}em`
//       },
//         `▪ ${amountOf || ''} ${Array.isArray(unit) ? unit[unitIndex] : unit}`);

//       ingredientMainText.appendChild(amountOfUnitElement); ingredientElementsRows.forEach((word, wordIndex) => {
//         const productRow = createSvgElement(TYPE.TSPAN, {
//           x: mm(startX + PRODUCTS_OFFSET),
//           dy: isFirstRow && wordIndex === 0 ? '0' : wordIndex === 0 && !isAnalogue ? '1.6em' : '0.8em'
//         },
//           isAnalogue ? `или ${word.toLowerCase()}` : word); ingredientProductsText.appendChild(productRow);
//       });

//       return [...acc, { rowCount: ingredientElementsRows.length }];
//     }, []);

//   ingredientsAmountOfGroup.appendChild(ingredientMainText);
//   ingredientsAmountOfGroup.appendChild(ingredientProductsText);

//   recipeGroup.appendChild(recipeContainer);
//   recipeGroup.appendChild(recipeTitle);
//   recipeGroup.appendChild(ingredientsAmountOfGroup);
//   svg.appendChild(recipeGroup);
//   container.appendChild(svg);

//   // ---------------------------- //

//   const directionsGroup = createSvgElement(TYPE.GROUP, {
//     class: 'content'
//   });

//   const directionsTitle = createSvgElement(TYPE.TEXT, {
//     // TODO 52 в константы
//     x: mm(startX + CARD_WIDTH + 52),
//     y: mm(startY + BASE_OFFSET),
//     'text-anchor': 'middle',
//     class: 'preparing'
//   }, 'Приготовление');

//   const directionsMainText = createSvgElement(TYPE.TEXT, {
//     x: mm(startX + CARD_WIDTH + BASE_OFFSET / 2),
//     y: mm(startY + BASE_OFFSET * 2), class: 'preparing__content'
//   });

//   const PIXEL_IN_MM = 0.26; directions.forEach((direction, index) => {
//     trimRow(DIRECTIONS_MAX_CHAR_COUNT, direction).forEach((row, rowIndex) => {
//       if (rowIndex === 0) {
//         directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
//           x: mm(startX + CARD_WIDTH + BASE_OFFSET / 2),
//           dy: index === 0 && rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em', class: 'bold'
//         }, `${index + 1}.`));
//       }

//       directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
//         x: rowIndex === 0 ? mm(startX + CARD_WIDTH + BASE_OFFSET / 2 + 16 * (`${index}`.length + 1) * PIXEL_IN_MM)
//           : mm(startX + CARD_WIDTH + BASE_OFFSET), dy: rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em'
//       }, row));
//     });
//   });

//   const directionsContainer = createSvgElement(TYPE.RECTANGLE, {
//     x: mm(startX + CARD_WIDTH),
//     y: mm(startY),
//     width: mm(CARD_WIDTH),
//     height: mm(CARD_HEIGHT),

//     // TODO вынести в класс
//     style: 'fill: none; stroke: black; stroke-width: 1'
//   });

//   recipeGroup.appendChild(directionsGroup);
//   recipeGroup.appendChild(directionsTitle);
//   recipeGroup.appendChild(directionsMainText);
//   recipeGroup.appendChild(directionsContainer);

//   const topHoleRect = createSvgElement(TYPE.RECTANGLE, {
//     x: mm(0 + startX),
//     y: mm(32 + startY),
//     width: mm(10),
//     height: 2,
//     // TODO в стиль
//     style: 'fill: #dfdfdf; stroke: none;'
//   });
//   const bottomHoleRect = createSvgElement(TYPE.RECTANGLE, {
//     x: mm(0 + startX),
//     y: mm(112 + startY),
//     width: mm(10),
//     height: 2,
//     // TODO в стиль
//     style: 'fill:#dfdfdf; stroke: none;'
//   });

//   recipeGroup.appendChild(topHoleRect);
//   recipeGroup.appendChild(bottomHoleRect);
// };

var saveSvg = function saveSvg() {
  var svg = document.querySelector('svg');
  var serializer = new XMLSerializer();
  var source = serializer.serializeToString(svg);
  // //add name spaces.
  // if(!source.match(/^<svg[^>]+xmlns=\"http\\:\\/\\/www\\.w3\\.org\\/2000\\/svg\"/)){
  //     source = source.replace(/^<svg/, '<svg xmlns=\"http://www.w3.org/2000/svg\"');  // }
  // if(!source.match(/^<svg[^>]+\"http\\:\\/\\/www\\.w3\\.org\\/1999\\/xlink\"/)){
  //     source = source.replace(/^<svg/, '<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\"');  // }
  // //add xml declaration  // source = '<?xml version=\"1.0\" standalone=\"no\"?>\\r\' + source;

  // convert svg source to URI data scheme.  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
  // console.log('%c%s', 'background: cadetblue; padding: 8px;', encodeURIComponent(source));
  // set url value to a element's href attribute.  document.querySelector('.download-link').href = url;
  // you can download svg file by right click menu.};

  // const { TodoistApi } = require('@doist/todoist-api-typescript')
  // const a = require(['./../node_modules/@doist/todoist-api-typescript/dist/index.js']);
  // const getProjects = () => {
  // const api = new _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_5__.TodoistApi('b6d07921bc749d4f50040963cd1bc13a51fd33e2');
  // const cardsNumber = +document.querySelector('.cards__number1').value;
  // console.log('%c%s', 'background: cadetblue; padding: 8px;', cardsNumber);
  // const recipe = _recipes__WEBPACK_IMPORTED_MODULE_3__.RECIPES.find(({    id  }) => id === cardsNumber);
  // const tasks = recipe.ingredients.reduce((acc, ingredient) => {
  //   const {
  //     id,
  //     ingredientId,
  //     amountOf,
  //     unitId,
  //     index } = ingredient; const unit = _units__WEBPACK_IMPORTED_MODULE_2__.UNITS.find(({ id }) => id === unitId); const unitName = index ? unit.name[index - 1] : unit.name; const ingredientEntity = _ingredients__WEBPACK_IMPORTED_MODULE_4__.INGREDIENTS.find(({ id }) => id === ingredientId); const { inReserve, check } = ingredientEntity; if (inReserve && !check) return acc; const checkPostfix = inReserve === false || inReserve === true && check === true ? ' (проверить)' : ''; const postfix = unitName && unitName !== 'по вкусу' ? ` — ${amountOf || ''} ${unitName}${checkPostfix}` : ''; return [...acc, { content: `${ingredientEntity.name}${postfix}`, projectId: '2290188609' }];
  // }, []);

  // console.log('%c%s', 'background: cadetblue; padding: 8px;', JSON.stringify(tasks));

  // tasks.forEach(task => {
  //   api.addTask(task).then(({ id }) => console.log('%c%s', 'background: cadetblue; padding: 8px;', id)).catch(error => console.log(error));
  // });

  // api.getProjects().then(projects => console.log(projects)).catch(error => console.log(error));
};
window.createCard = createCard;
window.saveSvg = saveSvg;
// window.getProjects = getProjects;
window.createCards = createCards;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxL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SUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ3BCLElBQU0xTSxHQUFHLEdBQUdyTixRQUFRLENBQUM4TCxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDLElBQU02SSxVQUFVLEdBQUcsSUFBSUMsYUFBYSxDQUFDLENBQUM7RUFDdEMsSUFBTTNNLE1BQU0sR0FBRzBNLFVBQVUsQ0FBQ0UsaUJBQWlCLENBQUN4SCxHQUFHLENBQUM7RUFDaEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNFO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7QUFDQSxDQUFDO0FBRUh0QyxNQUFNLENBQUNrSCxVQUFVLEdBQUdBLFVBQVU7QUFDOUJsSCxNQUFNLENBQUNnUCxPQUFPLEdBQUdBLE9BQU87QUFDeEI7QUFDQWhQLE1BQU0sQ0FBQ3dPLFdBQVcsR0FBR0EsV0FBVyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9zcmMvc3ZnMS5jc3MiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC13aXRoLXNlYXJjaC90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9zcmMvc3ZnMS5jc3M/OTExMiIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gVE9ETyDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPLCDQutCw0Log0YHQtNC10LvQsNGC0Ywg0LDQtNGA0LXRgSDQvtGCIGFwcFxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBpbml0ID0gb3B0aW9ucyA9PiB7XG4gICAgdGhpcy5zb3J0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIC8vIHRoaXMuc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgLy8gICAuU0VMRUNUKTtcbiAgICB0aGlzLnNlbGVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIHRoaXMuZ2V0QXR0cmlidXRlKCd0YWJJbmRleCcpKTtcblxuICAgIHRoaXMuYWRkT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5zZWxlY3RFbGVtZW50KTtcbiAgfTtcblxuICBzb3J0T3B0aW9ucyA9IG9wdGlvbnMgPT4ge1xuICAgIHRoaXMub3B0aW9ucyA9IFsuLi5vcHRpb25zXVxuICAgICAgLnNvcnQoKHsgbmFtZTogbmFtZTEgfSwgeyBuYW1lOiBuYW1lMiB9KSA9PiB7XG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgIGNhc2UgbmFtZTEgPCBuYW1lMjogcmV0dXJuIC0xO1xuXG4gICAgICAgICAgY2FzZSBuYW1lMSA+IG5hbWUyOiByZXR1cm4gMTtcblxuICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICBhZGRPcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICBvcHRpb25zLmZvckVhY2goKHsgaWQsIG5hbWUgfSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBpZDsgb3B0aW9uLmlubmVySFRNTCA9IG5hbWU7XG4gICAgICB0aGlzLnNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfTtcbiAgXG4gIHVwZGF0ZU9wdGlvbnMgPSBvcHRpb25zID0+IHsgdGhpcy5yZW1vdmVBbGxPcHRpb25zKCk7IHRoaXMuc29ydE9wdGlvbnMob3B0aW9ucyk7IHRoaXMuYWRkT3B0aW9ucyh0aGlzLm9wdGlvbnMpOyB9O1xuICBcbiAgcmVtb3ZlQWxsT3B0aW9ucyA9ICgpID0+IHsgd2hpbGUgKHRoaXMuc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKSB7IHRoaXMuc2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdEVsZW1lbnQuZmlyc3RDaGlsZCk7IH0gfTsgXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2VsZWN0LXdpdGgtb3B0aW9ucycsIFNlbGVjdCk7XG5cbi8vIyBzb3VyY2VVUkw9d2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3QvaW5kZXguanM/XCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImVkaXQtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJjYW5jZWxsLWljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjMUIxRDE5O1xufVxuXG4ucGFnZSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwMHB4IDFmcjtcbn1cblxuLnBhZ2VfX3RpdGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50YWJsZSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50YWJsZV9faGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI2cHggMjI2cHggMjI2cHggMzZweCAzNnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6ICNEQkI2QTQ7XG59XG5cbi50YWJsZV9faGVhZCBkaXYge1xuICAvKiBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTsgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4udGFibGVfX2hlYWQgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG5cbi8qIFRPRE8g0LzQuNC60YHQuNC9ICovXG4udGFibGVfX3JvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI2cHggMjI2cHggMjI2cHggMzJweCAzMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4udGFibGVfX3JvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcbn1cblxuLnRhYmxlX19jZWxsIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4udGFibGVfX2NlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuXG4udGFibGUge1xuICB3aWR0aDogNzUycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMxQjFEMTk7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLnRhYmxlIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRhYmxlIGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1hcXVhbWFyaW5lOyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1hcXVhbWFyaW5lOyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFibGUgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBvdXRsaW5lLWNvbG9yOiAjZDlkOWQ5O1xufVxuXG4udGFibGUgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG91dGxpbmUtY29sb3I6ICNkOWQ5ZDk7XG59XG5cbi50YWJsZSBpbnB1dDphY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi50YWJsZV9fY2VsbF90eXBlX2luZ3JlZGllbnRzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4udGFibGVfX2NlbGxfdHlwZV91bml0cyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnRleHQtaW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTkycHg7XG59XG5cbi50YWJsZV9fYWN0aXZlLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jcmVhdGUtY2FyZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhBRTI5O1xuICB3aWR0aDogMTkycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogIzFCMUQxOTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3JlYXRlLWNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQTcyOTtcbn1cblxuLmNvcHktY2FyZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjc2QzQ5O1xuICB3aWR0aDogMTkycHg7XG4gIGhlaWdodDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBjb2xvcjogIzFCMUQxOTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29weS1jYXJkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhODYzNDI7XG59XG5cbi5hY3RpdmUtYnV0dG9ucyB7XG4gIG1hcmdpbjogMjRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzdHJva2U6ICMwMDAwMDA7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgZmlsbDogIzAwMDAwMDtcbn1cblxuLnByZXBhcmluZyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmaWxsOiAjMDAwMDAwO1xufVxuXG4ucHJlcGFyaW5nX19jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmlsbDogIzAwMDAwMDtcbn1cblxuLnJlY2lwZV9fY29udGFpbmVyIHtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweCAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlY3Rpb24gaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNzJweDtcbn1cblxuLnNlY3Rpb24gaDIge1xuICB3aWR0aDogMTE2cHg7XG59XG5cbi5kaXJlY3Rpb25zIHtcbiAgbWFyZ2luOiAwcHggMjRweCAzNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kaXJlY3Rpb25zIHRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICB3aWR0aDogNDE2cHg7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudV9fY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLm1lbnVfX2hlYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IDIyNnB4IDIyNnB4IDM2cHggMzZweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiAjREJCNkE0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGdC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XCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY29sb3I6ICMxQjFEMTk7XFxufVxcblxcbi5wYWdlIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAwcHggMWZyO1xcbn1cXG5cXG4ucGFnZV9fdGl0bGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFibGUge1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnRhYmxlX19oZWFkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IDIyNnB4IDIyNnB4IDM2cHggMzZweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6ICNEQkI2QTQ7XFxufVxcblxcbi50YWJsZV9faGVhZCBkaXYge1xcbiAgLyogYm9yZGVyOiA0cHggc29saWQgd2hpdGU7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4udGFibGVfX2hlYWQgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUT0RPINC80LjQutGB0LjQvSAqL1xcbi50YWJsZV9fcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IDIyNnB4IDIyNnB4IDMycHggMzJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLnRhYmxlX19yb3c6bGFzdC1jaGlsZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xcbn1cXG5cXG4udGFibGVfX2NlbGwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLnRhYmxlX19jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XFxufVxcblxcbi50YWJsZSB7XFxuICB3aWR0aDogNzUycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzFCMUQxOTtcXG4gIG1hcmdpbjogMjRweDtcXG59XFxuXFxuLnRhYmxlIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50YWJsZSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZWRpdC1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIC8qIGJhY2tncm91bmQ6IG1lZGl1bWFxdWFtYXJpbmU7ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGNhbmNlbGwtaWNvbi5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICAvKiBiYWNrZ3JvdW5kOiBtZWRpdW1hcXVhbWFyaW5lOyAqL1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YWJsZSBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgb3V0bGluZS1jb2xvcjogI2Q5ZDlkOTtcXG59XFxuXFxuLnRhYmxlIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIG91dGxpbmUtY29sb3I6ICNkOWQ5ZDk7XFxufVxcblxcbi50YWJsZSBpbnB1dDphY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFibGVfX2NlbGxfdHlwZV9pbmdyZWRpZW50cyBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbi50YWJsZV9fY2VsbF90eXBlX3VuaXRzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLnRleHQtaW5wdXQgaW5wdXQge1xcbiAgd2lkdGg6IDE5MnB4O1xcbn1cXG5cXG4udGFibGVfX2FjdGl2ZS1idXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3JlYXRlLWNhcmQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEFFMjk7XFxuICB3aWR0aDogMTkycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjMUIxRDE5O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY3JlYXRlLWNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUE3Mjk7XFxufVxcblxcbi5jb3B5LWNhcmQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNzZDNDk7XFxuICB3aWR0aDogMTkycHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGNvbG9yOiAjMUIxRDE5O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29weS1jYXJkLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTg2MzQyO1xcbn1cXG5cXG4uYWN0aXZlLWJ1dHRvbnMge1xcbiAgbWFyZ2luOiAyNHB4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgc3Ryb2tlOiAjMDAwMDAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcXG4gIGZpbGw6ICMwMDAwMDA7XFxufVxcblxcbi5wcmVwYXJpbmcge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmaWxsOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJlcGFyaW5nX19jb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZmlsbDogIzAwMDAwMDtcXG59XFxuXFxuLnJlY2lwZV9fY29udGFpbmVyIHtcXG4gIGZpbGw6IHRyYW5zcGFyZW50O1xcbiAgc3Ryb2tlOiBibGFjaztcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuXFxuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDBweCAyNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnNlY3Rpb24gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICB3aWR0aDogMjcycHg7XFxufVxcblxcbi5zZWN0aW9uIGgyIHtcXG4gIHdpZHRoOiAxMTZweDtcXG59XFxuXFxuLmRpcmVjdGlvbnMge1xcbiAgbWFyZ2luOiAwcHggMjRweCAzNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZGlyZWN0aW9ucyB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIHdpZHRoOiA0MTZweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWVudV9fY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTZweDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4ubWVudV9faGVhZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjZweCAyMjZweCAyMjZweCAzNnB4IDM2cHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBiYWNrZ3JvdW5kOiAjREJCNkE0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgc3Ryb2tlOiAjMDAwMDAwO1xufVxuXG4uY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XG4gIGZpbGw6ICMwMDAwMDA7XG59XG5cbi5wcmVwYXJpbmcge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmlsbDogIzAwMDAwMDtcbn1cblxuLnByZXBhcmluZ19fY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZpbGw6ICMwMDAwMDA7XG59XG5cbi5yZWNpcGVfX2NvbnRhaW5lciB7XG4gIGZpbGw6IHdoaXRlO1xuICBzdHJva2U6IGJsYWNrO1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdmcxLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBzdHJva2U6ICMwMDAwMDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xcbiAgZmlsbDogIzAwMDAwMDtcXG59XFxuXFxuLnByZXBhcmluZyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZpbGw6ICMwMDAwMDA7XFxufVxcblxcbi5wcmVwYXJpbmdfX2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmaWxsOiAjMDAwMDAwO1xcbn1cXG5cXG4ucmVjaXBlX19jb250YWluZXIge1xcbiAgZmlsbDogd2hpdGU7XFxuICBzdHJva2U6IGJsYWNrO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPHRlbXBsYXRlIGlkPVwic2VsZWN0LXdpdGgtc2VhcmNoXCI+XG4gIDwhLS0gVE9ETyDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0LrQsNC6LdGC0L4g0YfQtdGA0LXQtyDQv9GA0L7Qv9GB0YsgLS0+XG4gIDxzdHlsZT5cbiAgICBAaW1wb3J0IFwiLi9tZW51LmNzc1wiO1xuICA8L3N0eWxlPlxuICA8c3R5bGU+XG4gICAgLnNlbGVjdF9fY29udGFpbmVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTVweCAqIDYpO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAwcHggcmdiKDM0IDYwIDgwIC8gMjAlKTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC5zZWxlY3RfX29wdGlvbiB7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19vcHRpb246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QUUyOTtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19maWVsZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTBweDtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuc2VsZWN0OmZvY3VzLXZpc2libGUge1xuICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigxMTAsIDAsIDApO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDUyLCA0LCA0KTtcbiAgICB9XG5cbiAgICAjczE6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgIzFhMWQ3NTtcbiAgICB9XG5cbiAgICBidXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19pbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLyogcGFkZGluZy1yaWdodDogMjRweDsgKi9cbiAgICB9XG5cbiAgICAuc2VsZWN0X19pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjQjBCMEIwO1xuICAgIH1cblxuICAgIC5zZWxlY3RfX2lucHV0X3Nob3J0IHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RfX2hpZGUtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2hpZGUtc2VsZWN0LWJ1dHRvbi5zdmcpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGxlZnQ6IDE4MHB4O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMTZweDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogOHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19jb250YWluZXIuaGlkZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWN0aW9uIGlucHV0IHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICB9XG5cbiAgICAuZGF0ZS1pbnB1dF9zaG9ydCBpbnB1dCB7XG4gICAgICB3aWR0aDogNDRweDtcbiAgICB9XG5cbiAgICAuZGF0ZS1pbnB1dF9zaG9ydCBidXR0b24ge1xuICAgICAgbGVmdDogMzJweDtcbiAgICB9XG5cbiAgICAuZGF0ZS1pbnB1dF9zaG9ydCArIC5zZWxlY3RfX2NvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA2OHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RfX2ZpZWxkLmRhdGUtaW5wdXRfc2hvcnQge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MnB4O1xuICAgIH1cbiAgPC9zdHlsZT5cblxuICA8IS0tIFRPRE8g0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INGH0LXRgNC10LcgYigpIC0tPlxuICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdF9fZmllbGRcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VsZWN0X19pbnB1dFwiIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwic2VsZWN0X19oaWRlLWJ1dHRvblwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RfX2NvbnRhaW5lciAgaGlkZVwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5gO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3ZnMS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N2ZzEuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGNzcyBmcm9tICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgKiBhcyBzdmcxIGZyb20gJy4vc3ZnMS5jc3MnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL2FwcC9jb21wb25lbnRzL3NlbGVjdCc7XG4vLyBUT0RPINCyINC60L7QvdGB0YLQsNC90YLRiyDQutCw0L/RgdC+0LxcbmltcG9ydCBpbmdyZWRpZW50c0pTT04gZnJvbSAnLi9pbmdyZWRpZW50cy5qc29uJyB3aXRoIHsgdHlwZTogXCJqc29uXCIgfTtcbmltcG9ydCByZWNpcGVzSlNPTiBmcm9tICcuL3JlY2lwZXMuanNvbic7XG5pbXBvcnQgKiBhcyBzZWxlY3RXaXRoU2VhcmNoVGVtcGxhdGUgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qtd2l0aC1zZWFyY2gvdGVtcGxhdGUuaHRtbCc7XG5cbmNvbnN0IGluZ3JlZGllbnRzID0gSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHNKU09OKTtcbmNvbnN0IHJlY2lwZXMgPSBKU09OLnN0cmluZ2lmeShyZWNpcGVzSlNPTik7XG5cbmNvbnNvbGUubG9nKCclYycgKyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGluZ3JlZGllbnRzKSksICdjb2xvcjogZ3JlZW4nKTtcblxuY29uc3QgYWRkUm93ID0gcmVjaXBlUm93ID0+IHtcbiAgY29uc3QgaW5ncmVkaWVudFNlbGVjdElkID0gYHMke3dpbmRvdy5tYXhJbmRleCArIDF9YDtcbiAgY29uc3QgdW5pdFNlbGVjdElkID0gYHMke3dpbmRvdy5tYXhJbmRleCArIDJ9YDtcblxuICBjb25zdCByb3dJbmRleCA9IHdpbmRvdy5yb3dJbmRleDtcblxuICBhZGRUYWJsZVJvdyh7IGluZ3JlZGllbnRTZWxlY3RJZCwgdW5pdFNlbGVjdElkLCByb3dJbmRleDogd2luZG93LnJvd0luZGV4LCAuLi5yZWNpcGVSb3cgfSk7XG4gIHdpbmRvdy5tYXhJbmRleCA9IHdpbmRvdy5tYXhJbmRleCArIDM7XG5cbiAgd2luZG93LnRhYmxlID0gW1xuICAgIC4uLndpbmRvdy50YWJsZSxcbiAgICB7XG4gICAgICByb3dJbmRleCxcbiAgICAgIGluZ3JlZGllbnRzOiB3aW5kb3dbaW5ncmVkaWVudFNlbGVjdElkXSxcbiAgICAgIHVuaXRzOiB3aW5kb3dbdW5pdFNlbGVjdElkXSxcbiAgICB9LFxuICBdO1xuXG4gIHVwZGF0ZUluZ3JlZGllbnRzKElOR1JFRElFTlRTKTtcbiAgdXBkYXRlVW5pdHMoVU5JVFMpO1xufVxuXG5jb25zdCByZW1vdmVSb3cgPSBldmVudCA9PiB7XG4gIGNvbnN0IHJvd0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ3Jvd2luZGV4Jyk7XG5cbiAgd2luZG93LnRhYmxlID0gd2luZG93LnRhYmxlLmZpbHRlcigoeyByb3dJbmRleDogaW5kZXggfSkgPT4gaW5kZXggIT09IHJvd0luZGV4KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGVfX3Jvd1tyb3dpbmRleD1cIiR7cm93SW5kZXh9XCJdYCkucmVtb3ZlKCk7XG59XG5cbiAgY29uc3QgZ2V0SW5ncmVkaWVudHMgPSAoKSA9PiBbLi4ud2luZG93LklOR1JFRElFTlRTLCAuLi53aW5kb3cuTkVXX0lOR1JFRElFTlRTXTtcbiAgY29uc3QgZ2V0VW5pdHMgPSAoKSA9PiBbLi4ud2luZG93LlVOSVRTLCAuLi53aW5kb3cuTkVXX1VOSVRTXTtcblxuICBjb25zdCB0cmltUm93ID0gKGxpbWl0LCB0ZXh0KSA9PiB0ZXh0LnNwbGl0KCcgJylcbiAgICAucmVkdWNlKChhY2MsIHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGFjYy5sZW5ndGggLSAxO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gW3dvcmRdO1xuXG4gICAgICBjb25zdCBwcmV2RWxlbWVudCA9IGFjY1tsYXN0RWxlbWVudF07XG5cbiAgICAgIHJldHVybiBwcmV2RWxlbWVudC5sZW5ndGggPCAzXG4gICAgICAgID8gWy4uLmFjYy5zbGljZSgwLCAtMSksIGAke3ByZXZFbGVtZW50fSAke3dvcmR9YF1cbiAgICAgICAgOiBbLi4uYWNjLCB3b3JkXTtcbiAgICB9LCBbXSlcbiAgICAucmVkdWNlKChhY2MsIHdvcmQpID0+IHtcbiAgICAgIGlmICghYWNjLmxlbmd0aCkgcmV0dXJuIFt3b3JkXTsgY29uc3QgbGFzdEluZGV4ID0gYWNjLmxlbmd0aCAtIDE7IGNvbnN0IGxhc3RFbGVtZW50ID0gYWNjW2xhc3RJbmRleF07IGNvbnN0IHJvd1dpdGhOZXdXb3JkID0gYCR7bGFzdEVsZW1lbnR9ICR7d29yZH1gOyByZXR1cm4gcm93V2l0aE5ld1dvcmQubGVuZ3RoIDwgbGltaXQgPyBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgcm93V2l0aE5ld1dvcmRdIDogWy4uLmFjYywgd29yZF07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgY3JlYXRlQ2FyZFN2ZyA9IChyZWNpcGUsIHgwLCB5MCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRYID0gK3gwO1xuICAgICAgY29uc3Qgc3RhcnRZID0gK3kwO1xuXG4gICAgICBsZXQgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyJyk7XG5cbiAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHN2Zyk7XG4gICAgICB9XG5cbiAgICAgIHN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5TVkcsIHsgaWQ6ICdzdmcnLCB3aWR0aDogbW0oMTQ4KSwgaGVpZ2h0OiBtbSgyMTApIH0pO1xuXG4gICAgICBjb25zdCBkZWZzID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkRFRlMpO1xuICAgICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuU1RZTEUpO1xuICAgICAgY29uc3QgZG9jdSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXCI8eG1sPjwveG1sPlwiLCBcImFwcGxpY2F0aW9uL3htbFwiKTtcbiAgICAgIGNvbnN0IGNkYXRhID0gZG9jdS5jcmVhdGVDREFUQVNlY3Rpb24oYCR7d2luZG93LmNzc31gKTtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNkYXRhKTtcbiAgICAgIGRlZnMuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuICAgICAgY29uc3QgcmVjaXBlR3JvdXAgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuR1JPVVApO1xuXG4gICAgICBjb25zdCByZWNpcGVDb250YWluZXIgPSBjcmVhdGVTdmdFbGVtZW50KFxuICAgICAgICBUWVBFLlJFQ1RBTkdMRSwge1xuICAgICAgICB4OiBtbShzdGFydFgpLFxuICAgICAgICB5OiBtbShzdGFydFkpLFxuICAgICAgICB3aWR0aDogbW0oQ0FSRF9XSURUSCksXG4gICAgICAgIGhlaWdodDogbW0oQ0FSRF9IRUlHSFQpLFxuICAgICAgICBjbGFzczogJ3JlY2lwZV9fY29udGFpbmVyJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBpZEluQ2F0ZWdvcnksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGluZ3JlZGllbnRzLFxuICAgICAgICBkaXJlY3Rpb25zXG4gICAgICB9ID0gcmVjaXBlO1xuXG4gICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZVN2Z0VsZW1lbnQoXG4gICAgICAgIFRZUEUuUkVDVEFOR0xFLCB7XG4gICAgICAgIHg6IG1tKHN0YXJ0WCksXG4gICAgICAgIHk6IG1tKHN0YXJ0WSsgQkFTRV9PRkZTRVQgLyAyKSxcbiAgICAgICAgd2lkdGg6IG1tKENBUkRfV0lEVEgpLFxuICAgICAgICBoZWlnaHQ6IG1tKEJBU0VfT0ZGU0VUIC0gQkFTRV9PRkZTRVQgLyA0KSxcbiAgICAgICAgc3R5bGU6ICdzdHJva2U6IGdyYXk7IGZpbGw6IG5vbmUnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVjaXBlVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCAvIDIpLFxuICAgICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCksXG4gICAgICAgIGNsYXNzOiAndGl0bGUnLFxuICAgICAgICBzdHlsZTogYCR7dGl0bGUubGVuZ3RoID4gMjAgPyAnZm9udC1zaXplOiAxNnB4OycgOiAnJ31gXG4gICAgICB9LFxuICAgICAgICB0aXRsZVxuICAgICAgKTtcblxuICAgICAgY29uc3QgaW5ncmVkaWVudHNBbW91bnRPZkdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7IGNsYXNzOiAnY29udGVudCcgfSk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRNYWluVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4gICAgICAgIHg6IG1tKHN0YXJ0WCArIEJBU0VfT0ZGU0VUKSxcbiAgICAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQgKiAyKVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRQcm9kdWN0c1RleHQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgICB4OiBtbShzdGFydFggKyBQUk9EVUNUU19PRkZTRVQpLFxuICAgICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCAqIDIpXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaW5ncmVkaWVudHNPZmZzZXQgPSBpbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgeyBpbmdyZWRpZW50SWQsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgICAvLyBUT0RPINGB0LTQtdC70LDRgtGMINC/0L7Qu9GD0YfQtdC90LjQtSDQuNC90LPRgNC10LTQuNC10L3RgtC+0LIg0LzQtdGC0L7QtNC+0LxcbiAgICAgICAgY29uc3QgYSA9IGdldEluZ3JlZGllbnRzKCkuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gaW5ncmVkaWVudElkKTtcblxuICAgICAgICBjb25zdCBpbmdyZWRpZW50RWxlbWVudHNSb3dzID0gdHJpbVJvdyhJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCwgZ2V0SW5ncmVkaWVudHMoKS5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpbmdyZWRpZW50SWQpLmxhYmVsKTtcblxuICAgICAgICByZXR1cm4gWy4uLmFjYywgeyBpbmdyZWRpZW50SWQsIGluZ3JlZGllbnRFbGVtZW50c1Jvd3MsIC4uLnJlc3QgfV07XG4gICAgICB9LCBbXSlcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB7IGFtb3VudE9mLCB1bml0SWQsIGluZGV4OiB1bml0SW5kZXgsIGlzQW5hbG9ndWUsIGluZ3JlZGllbnRJZCwgaW5ncmVkaWVudEVsZW1lbnRzUm93cyB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRmlyc3RSb3cgPSBpbmRleCA9PT0gMDsgY29uc3QgbGFzdFJvd0NvdW50ID0gaXNGaXJzdFJvdyA/IDEgOiBhY2NbYWNjLmxlbmd0aCAtIDFdLnJvd0NvdW50O1xuXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkVW5pdElkID0gTnVtYmVyLmlzSW50ZWdlcih1bml0SW5kZXgpID8gYCR7dW5pdElkfV8ke3VuaXRJbmRleH1gIDogdW5pdElkO1xuICAgICAgICAgIGNvbnN0IHVuaXQgPSB3aW5kb3cuVU5JVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gcHJvY2Vzc2VkVW5pdElkKTtcblxuICAgICAgICAgIGNvbnN0IGFtb3VudE9mVW5pdEVsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgIHg6IG1tKHN0YXJ0WCArIEJBU0VfT0ZGU0VUKSxcbiAgICAgICAgICAgIGR5OiBpc0ZpcnN0Um93ID8gJzAnIDpcbiAgICAgICAgICAgICAgaXNBbmFsb2d1ZSA/ICcwLjhlbScgOiBgJHsobGFzdFJvd0NvdW50ICsgMSkgKiAwLjh9ZW1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICAgIGDilqogJHthbW91bnRPZiB8fCAnJ30gJHt1bml0Py5sYWJlbH1gKTtcblxuICAgICAgICAgIGluZ3JlZGllbnRNYWluVGV4dC5hcHBlbmRDaGlsZChhbW91bnRPZlVuaXRFbGVtZW50KTtcblxuICAgICAgICAgIGNvbnN0IGluZ3JlZGllbnRPZmZzZXQgPSBpbmdyZWRpZW50RWxlbWVudHNSb3dzLnJlZHVjZSgoZWxlbWVudEFjYywgd29yZCwgd29yZEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGlzRmlyc3RSb3cgJiYgd29yZEluZGV4ID09PSAwID8gMCA6IHdvcmRJbmRleCA9PT0gMCAmJiAhaXNBbmFsb2d1ZSA/IDEuNiA6IDAuODtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJvdyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuICAgICAgICAgICAgICB4OiBtbShzdGFydFggKyBQUk9EVUNUU19PRkZTRVQpLFxuICAgICAgICAgICAgICBkeTogYCR7ZHl9ZW1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaXNBbmFsb2d1ZSA/IGDQuNC70LggJHt3b3JkLnRvTG93ZXJDYXNlKCl9YCA6IHdvcmQpOyBpbmdyZWRpZW50UHJvZHVjdHNUZXh0LmFwcGVuZENoaWxkKHByb2R1Y3RSb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEFjYyArIGR5O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIHsgcm93Q291bnQ6IGluZ3JlZGllbnRFbGVtZW50c1Jvd3MubGVuZ3RoLCBvZmZzZXQ6IGluZ3JlZGllbnRPZmZzZXQgfV07XG4gICAgICAgIH0sIFtdKTtcblxuICAgICAgLy8gY29uc3Qgc2VwYXJhdG9yT2Zmc2V0ID0gTWF0aC5mbG9vcihpbmdyZWRpZW50c09mZnNldC5yZWR1Y2UoKGFjYywgeyBvZmZzZXQgfSkgPT4gKGFjYyArIG9mZnNldCAqIDE2KSwgMCkpO1xuICAgICAgLy8gY29uc29sZS5sb2coJyVjJXMnLCAnYmFja2dyb3VuZDogY2FkZXRibHVlOyBwYWRkaW5nOiA4cHg7JywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHNPZmZzZXQpICsgc2VwYXJhdG9yT2Zmc2V0KTtcblxuXG4gICAgICBpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudE1haW5UZXh0KTtcbiAgICAgIGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cC5hcHBlbmRDaGlsZChpbmdyZWRpZW50UHJvZHVjdHNUZXh0KTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQocmVjaXBlQ29udGFpbmVyKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHJlY2lwZVRpdGxlKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cCk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChyZWNpcGVHcm91cCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAgICAgY29uc3QgZGlyZWN0aW9uc0dyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7XG4gICAgICAgIGNsYXNzOiAnY29udGVudCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb25zdCBkaXJlY3Rpb25zVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgLy8gICAvLyBUT0RPIDUyINCyINC60L7QvdGB0YLQsNC90YLRi1xuICAgICAgLy8gICB4OiBtbShzdGFydFggKyA1MiksXG4gICAgICAvLyAgIHk6IG1tKHN0YXJ0WSArIEJBU0VfT0ZGU0VUICsgRElSRUNUSU9OX1lfT0ZGU0VUKSxcbiAgICAgIC8vICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgICAvLyAgIGNsYXNzOiAncHJlcGFyaW5nJ1xuICAgICAgLy8gfSwgJ9Cf0YDQuNCz0L7RgtC+0LLQu9C10L3QuNC1Jyk7XG5cbiAgICAgIGNvbnN0IHNlcGFyYXRvck9mZnNldCA9IE1hdGguZmxvb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5nZXRCQm94KCkuaGVpZ2h0ICogMC4yNikgKyBCQVNFX09GRlNFVCAqIDIgKyBCQVNFX09GRlNFVCAvIDI7XG5cbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4gICAgICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuICAgICAgICB4OiBtbShzdGFydFggKyBDQVJEX1dJRFRIIC8gMiksXG4gICAgICAgIHk6IHNlcGFyYXRvck9mZnNldCArICdtbScsXG4gICAgICAgIGNsYXNzOiAndGl0bGUnLFxuICAgICAgICBzdHlsZTogYCR7dGl0bGUubGVuZ3RoID4gMjAgPyAnZm9udC1zaXplOiAxNnB4OycgOiAnJ31gXG4gICAgICB9LFxuICAgICAgICAn4oCUJ1xuICAgICAgKTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblxuICAgICAgY29uc3QgZGlyZWN0aW9uc01haW5UZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbiAgICAgICAgeDogbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQgLyAyKSxcbiAgICAgICAgeTogbW0oc3RhcnRZICsgc2VwYXJhdG9yT2Zmc2V0ICsgQkFTRV9PRkZTRVQgLyAyKSwgY2xhc3M6ICdwcmVwYXJpbmdfX2NvbnRlbnQnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgUElYRUxfSU5fTU0gPSAwLjI2OyBkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdHJpbVJvdyhESVJFQ1RJT05TX01BWF9DSEFSX0NPVU5ULCBkaXJlY3Rpb24pLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNNYWluVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgICAgeDogbW0oc3RhcnRYICArIEJBU0VfT0ZGU0VUIC8gMiksXG4gICAgICAgICAgICAgIGR5OiBpbmRleCA9PT0gMCAmJiByb3dJbmRleCA9PT0gMCA/ICcwJyA6IHJvd0luZGV4ID09PSAwID8gJzEuNWVtJyA6ICcwLjhlbScsIGNsYXNzOiAnYm9sZCdcbiAgICAgICAgICAgIH0sIGAke2luZGV4ICsgMX0uYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpcmVjdGlvbnNNYWluVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgIHg6IHJvd0luZGV4ID09PSAwID8gbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQgLyAyICsgMTYgKiAoYCR7aW5kZXh9YC5sZW5ndGggKyAxKSAqIFBJWEVMX0lOX01NKVxuICAgICAgICAgICAgICA6IG1tKHN0YXJ0WCAgKyBCQVNFX09GRlNFVCksIGR5OiByb3dJbmRleCA9PT0gMCA/ICcwJyA6IHJvd0luZGV4ID09PSAwID8gJzEuNWVtJyA6ICcwLjhlbSdcbiAgICAgICAgICB9LCByb3cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc0dyb3VwKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKGRpcmVjdGlvbnNNYWluVGV4dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgICBjcmVhdGVDYXJkU3ZnKHdpbmRvdy5zZWxlY3RlZFJlY2lwZSB8fCBjb3B5Q2FyZCgpLCAwLCAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRJbmdyZWRpZW50ID0gaW5ncmVkaWVudCA9PiB7XG4gICAgICBjb25zdCBpbmdyZWRpZW50cyA9IGdldEluZ3JlZGllbnRzKCk7XG4gICAgICBjb25zdCBuZXdJZCA9IE1hdGgubWF4KC4uLmluZ3JlZGllbnRzLm1hcCgoeyBpZCB9KSA9PiBpZCkpICsgMTtcblxuICAgICAgdXBkYXRlSW5ncmVkaWVudHMoWy4uLmluZ3JlZGllbnRzLCB7IGlkOiBuZXdJZCwgbGFiZWw6IGluZ3JlZGllbnQgfV0pO1xuXG4gICAgICB3aW5kb3cuTkVXX0lOR1JFRElFTlRTID0gWy4uLndpbmRvdy5ORVdfSU5HUkVESUVOVFMsIHsgaWQ6IG5ld0lkLCBsYWJlbDogaW5ncmVkaWVudCB9XTtcblxuICAgICAgcmV0dXJuIG5ld0lkO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFVuaXQgPSB1bml0ID0+IHtcbiAgICAgIGNvbnN0IHVuaXRzID0gZ2V0VW5pdHMoKTtcbiAgICAgIGNvbnN0IG5ld0lkID0gTWF0aC5tYXgoLi4udW5pdHMubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgYSA9IC9fLy50ZXN0KGlkKSA/IGlkLm1hdGNoKC9eKFxcZCspLylbMV0gOiBpZDtcbiAgICAgICAgcmV0dXJuICthO1xuICAgICAgfSkpICsgMTtcblxuICAgICAgLy8gVE9ETyDQndGD0LbQvdC+INC70Lg/XG4gICAgICB1cGRhdGVVbml0cyhbLi4udW5pdHMsIHsgaWQ6IG5ld0lkLCBsYWJlbDogdW5pdCB9XSk7XG5cbiAgICAgIHdpbmRvdy5ORVdfVU5JVFMgPSBbLi4ud2luZG93Lk5FV19VTklUUywgeyBpZDogbmV3SWQsIGxhYmVsOiB1bml0fV07XG5cbiAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5Q2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHdpbmRvdy50YWJsZS5yZWR1Y2UoKGFjYywgeyByb3dJbmRleCwgaW5ncmVkaWVudHMsIHVuaXRzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRWYWx1ZSA9IGluZ3JlZGllbnRzLmlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBpbmdyZWRpZW50ID0gZ2V0SW5ncmVkaWVudHMoKS5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsID09PSBpbmdyZWRpZW50VmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRJZCA9IGluZ3JlZGllbnQgPyBpbmdyZWRpZW50LmlkIDogYWRkSW5ncmVkaWVudChpbmdyZWRpZW50VmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGFtb3VudE9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlX19yb3dbcm93aW5kZXg9XCIke3Jvd0luZGV4fVwiXSAuYW1vdW50LW9mX19pbnB1dGApPy52YWx1ZTtcbiAgICAgICAgY29uc3QgdW5pdFZhbHVlID0gdW5pdHMuaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB3aW5kb3cuVU5JVFMuZmluZCgoeyBsYWJlbCB9KSA9PiBsYWJlbCA9PT0gdW5pdFZhbHVlKTtcbiAgICAgICAgY29uc3QgdW5pdElkID0gdW5pdCA/IHVuaXQuaWQgOiBhZGRVbml0KHVuaXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5ncmVkaWVudElkLFxuICAgICAgICAgICAgYW1vdW50T2YsXG4gICAgICAgICAgICB1bml0SWQ6IE51bWJlci5pc0ludGVnZXIodW5pdElkKSA/IHVuaXRJZCA6ICt1bml0SWQuc3BsaXQoJ18nKVswXSxcbiAgICAgICAgICAgIC4uLighTnVtYmVyLmlzSW50ZWdlcih1bml0SWQpICYmIHsgaW5kZXg6ICt1bml0SWQuc3BsaXQoJ18nKVsxXSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBjb25zdCBuZXdJbmdyZWRpZW50cyA9IHdpbmRvdy5ORVdfSU5HUkVESUVOVFMubWFwKCh7IGlkLCBsYWJlbCB9KSA9PiAoeyBpZCwgbmFtZTogbGFiZWwgfSkpLnJlZHVjZSgoaW5ncmVkaWVudEFjYywgaW5ncmVkaWVudCkgPT4gKFsuLi5pbmdyZWRpZW50QWNjLCAuLi5beyAuLi5pbmdyZWRpZW50LCBsaW5rZWRVbml0czogW119XV0pLCBbXSlcbiAgICAgIGNvbnN0IG5ld1VuaXRzID0gd2luZG93Lk5FV19VTklUUy5yZWR1Y2UoKHVuaXRBY2MsIHVuaXQpID0+IChbLi4udW5pdEFjYywgLi4uW3VuaXRdXSksIFtdKTtcbiAgICAgIGNvbnN0IG5ld0lkID0gTWF0aC5tYXgoLi4ud2luZG93LlJFQ0lQRVMubWFwKCh7IGlkIH0pID0+IGlkKSkgKyAxO1xuICAgICAgY29uc3QgdHlwZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZVR5cGVTZWxlY3QnKS5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHR5cGUgPSBPYmplY3QuZW50cmllcyhSRUNJUEVfVFlQRV9NQVApLmZpbmQoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgPT09IHR5cGVMYWJlbClbMF07XG4gICAgICBjb25zdCBpbkNhdGVnb3J5SWRzID0gd2luZG93LlJFQ0lQRVMuZmlsdGVyKCh7IHR5cGU6IHJlY2lwZVR5cGUgfSkgPT4gdHlwZSA9PT0gcmVjaXBlVHlwZSkubWFwKCh7IGlkSW5DYXRlZ29yeSB9KSA9PiBpZEluQ2F0ZWdvcnkpO1xuICAgICAgY29uc3QgaWRJbkNhdGVnb3J5ID0gTWF0aC5tYXgoLi4uKGluQ2F0ZWdvcnlJZHMubGVuZ3RoID8gaW5DYXRlZ29yeUlkcyA6IFsxXSkpICsgMTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS10aXRsZScpLnZhbHVlO1xuICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zX190ZXh0YXJlYScpLnZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICAgIGNvbnN0IG51dHJpdGlvbmFsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLW51dHJpdGlvbmFsLXZhbHVlJykudmFsdWUgfHwgbnVsbDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtdXJsJykudmFsdWUgfHwgbnVsbDtcblxuICAgICAgY29uc3QgbmV3UmVjaXBlID0ge1xuICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0eXBlLFxuICAgICAgICBpZEluQ2F0ZWdvcnksXG4gICAgICAgIGluZ3JlZGllbnRzOiBhY2MsXG4gICAgICAgIGRpcmVjdGlvbnMsXG4gICAgICAgIG51dHJpdGlvbmFsVmFsdWUsXG4gICAgICAgIHVybCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYCR7SlNPTi5zdHJpbmdpZnkobmV3UmVjaXBlLCBudWxsLCAyKX1cXG4ke0pTT04uc3RyaW5naWZ5KG5ld0luZ3JlZGllbnRzKX0gXFxuJHtKU09OLnN0cmluZ2lmeShuZXdVbml0cyl9fWA7XG5cbiAgICAgIGNvbnNvbGUubG9nKCclYyVzJywgJ2JhY2tncm91bmQ6IGNhZGV0Ymx1ZTsgcGFkZGluZzogOHB4OycsIHJlc3VsdCk7XG5cbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiBuZXdSZWNpcGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29weVN2ZyA9ICgpID0+IHtcbiAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnJyk7XG5cbiAgICAgIHZhciBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgIHZhciBzb3VyY2UgPSBzZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Zyk7XG5cbiAgICAgIGlmKCFzb3VyY2UubWF0Y2goL148c3ZnW14+XSt4bWxucz1cImh0dHBcXDpcXC9cXC93d3dcXC53M1xcLm9yZ1xcLzIwMDBcXC9zdmdcIi8pKXtcbiAgICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXjxzdmcvLCAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCInKTtcbiAgICAgIH1cblxuICAgICAgc291cmNlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+XFxyXFxuJyArIHNvdXJjZTtcblxuICAgICAgdmFyIHVybCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KHNvdXJjZSk7XG5cbiAgICAgIC8vIFRPRE8g0Y3RgtGDINC4INC/0L7QtNC+0LHQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LIg0YXQtdC70L/QtdGAXG4gICAgICBjb25zdCBuZXdJZCA9IE1hdGgubWF4KC4uLndpbmRvdy5SRUNJUEVTLm1hcCgoeyBpZCB9KSA9PiBpZCkpICsgMTtcblxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLXRpdGxlJykudmFsdWV9YDtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFibGVSb3cgPSAoe1xuICAgICAgaW5ncmVkaWVudFNlbGVjdElkLFxuICAgICAgdW5pdFNlbGVjdElkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBpbmdyZWRpZW50SWQsXG4gICAgICBhbW91bnRPZixcbiAgICAgIHVuaXRJZCxcbiAgICAgIGluZGV4LFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2NvbnRlbnQnKTtcbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gd2luZG93LnRhYkluZGV4O1xuXG4gICAgICBjb25zdCByb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dFbGVtZW50LmNsYXNzTmFtZSA9ICd0YWJsZV9fcm93JztcblxuICAgICAgLy8gVE9ETyDRgdC00LXQu9Cw0YLRjCDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRjdC70LXQvNC10L3RgtCwINGBINC/0LDRgNCw0LzQtdGC0YDQsNC80LhcbiAgICAgIC8vINCSINC40LTQtdCw0LvQtSDQtNC70Y8g0LLQu9C+0LbQtdC90L3Ri9GFXG4gICAgICBjb25zdCBpbmdyZWRpZW50c0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGluZ3JlZGllbnRzQ2VsbC5jbGFzc05hbWUgPSAndGFibGVfX2NlbGwnO1xuICAgICAgY29uc3QgaW5ncmVkaWVudHNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3Qtd2l0aC1zZWFyY2gnKTtcbiAgICAgIGluZ3JlZGllbnRzU2VsZWN0LmlkID0gaW5ncmVkaWVudFNlbGVjdElkO1xuICAgICAgaW5ncmVkaWVudHNDZWxsLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzU2VsZWN0KTtcblxuICAgICAgY29uc3QgY291bnRJbnB1dENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvdW50SW5wdXRDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZV9fY2VsbCc7XG4gICAgICBjb25zdCBjb3VudElucHV0Q29udNCwaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY291bnRJbnB1dENvbnTQsGluZXIuY2xhc3NOYW1lID0gJ3RleHQtaW5wdXQnO1xuICAgICAgY29uc3QgY291bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjb3VudElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBjb3VudElucHV0LmNsYXNzTmFtZSA9ICdhbW91bnQtb2ZfX2lucHV0JztcbiAgICAgIGNvdW50SW5wdXQudGFiSW5kZXggPSB0YWJJbmRleCArIDU7XG4gICAgICBjb3VudElucHV0Q29udNCwaW5lci5hcHBlbmRDaGlsZChjb3VudElucHV0KTtcbiAgICAgIGNvdW50SW5wdXRDZWxsLmFwcGVuZENoaWxkKGNvdW50SW5wdXRDb2500LBpbmVyKTtcblxuICAgICAgY29uc3QgdW5pdHNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB1bml0c0NlbGwuY2xhc3NOYW1lID0gJ3RhYmxlX19jZWxsJztcbiAgICAgIGNvbnN0IHVuaXRzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0LXdpdGgtc2VhcmNoJyk7XG4gICAgICB1bml0c1NlbGVjdC5pZCA9IHVuaXRTZWxlY3RJZDtcbiAgICAgIHVuaXRzQ2VsbC5hcHBlbmRDaGlsZCh1bml0c1NlbGVjdCk7XG5cbiAgICAgIGNvbnN0IHRhYmxlQWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YWJsZUFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFibGVfX2NlbGwgdGFibGVfX2FjdGl2ZS1idXR0b24nO1xuICAgICAgY29uc3QgdGFibGVBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRhYmxlQWRkQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtYnV0dG9uJztcbiAgICAgIHRhYmxlQWRkQnV0dG9uLnRhYkluZGV4ID0gdGFiSW5kZXggKyAxMDtcbiAgICAgIHRhYmxlQWRkQnV0dG9uLm9uY2xpY2sgPSB0aGlzLmFkZFJvdztcbiAgICAgIHRhYmxlQWRkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYmxlQWRkQnV0dG9uKTtcblxuICAgICAgY29uc3QgdGFibGVEZWxldGVCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhYmxlRGVsZXRlQnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YWJsZV9fY2VsbCB0YWJsZV9fYWN0aXZlLWJ1dHRvbic7XG4gICAgICBjb25zdCB0YWJsZURlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdGFibGVEZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1idXR0b24nO1xuICAgICAgdGFibGVEZWxldGVCdXR0b24ub25jbGljayA9IHRoaXMucmVtb3ZlUm93O1xuICAgICAgdGFibGVEZWxldGVCdXR0b24udGFiSW5kZXggPSB0YWJJbmRleCArIDExO1xuICAgICAgdGFibGVEZWxldGVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQodGFibGVEZWxldGVCdXR0b24pO1xuXG4gICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKGluZ3JlZGllbnRzQ2VsbCk7XG4gICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKGNvdW50SW5wdXRDZWxsKTtcbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQodW5pdHNDZWxsKTtcbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGVBZGRCdXR0b25Db250YWluZXIpO1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZURlbGV0ZUJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgIHRhYmxlQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm93RWxlbWVudCk7XG5cbiAgICAgIHdpbmRvdy50YWJJbmRleCA9IHdpbmRvdy50YWJJbmRleCArIDEwO1xuXG4gICAgICByb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgncm93SW5kZXgnLCByb3dJbmRleCk7XG5cbiAgICAgIGluZ3JlZGllbnRzU2VsZWN0LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCB0YWJJbmRleCArIDEpO1xuICAgICAgaW5ncmVkaWVudHNTZWxlY3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4ICsgNCk7XG4gICAgICAvLyBUT0RPIHR5cGUg0LIg0LrQvtC90YHRgtCw0L3RgtGLXG4gICAgICBpbmdyZWRpZW50c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW5ncmVkaWVudHMnKTtcbiAgICAgIGluZ3JlZGllbnRzU2VsZWN0LnNldEF0dHJpYnV0ZSgnb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5JTkdSRURJRU5UUykpO1xuICAgICAgaWYgKGluZ3JlZGllbnRJZCAmJiB1bml0SWQpIHtcbiAgICAgICAgLy8gVE9ETyDRhNGD0L3QutGG0LjQtdC5XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRMYWJlbCA9IHdpbmRvdy5pbmdyZWRpZW50cy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpbmdyZWRpZW50SWQpLmxhYmVsO1xuXG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZFVuaXRJZCA9IE51bWJlci5pc0ludGVnZXIoaW5kZXgpID8gYCR7dW5pdElkfV8ke2luZGV4fWAgOiB1bml0SWQ7XG5cbiAgICAgICAgY29uc3QgdW5pdExhYmVsID0gd2luZG93LnVuaXRzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHByb2Nlc3NlZFVuaXRJZCkubGFiZWw7XG4gICAgICAgIC8vIFRPRE8g0L/QtdGA0LXQuNC80LXQvdC+0LLQsNGC0YwgdmFsdWUxINCy0L4g0YfRgtC+LdGC0L4g0LvRg9GH0YjQtVxuICAgICAgICBpbmdyZWRpZW50c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlMScsIGluZ3JlZGllbnRMYWJlbCk7XG4gICAgICAgIHVuaXRzU2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUxJywgdW5pdExhYmVsKVxuXG4gICAgICB9XG5cbiAgICAgIGlmIChhbW91bnRPZikge1xuICAgICAgICBjb3VudElucHV0LnZhbHVlID0gYW1vdW50T2Y7XG4gICAgICB9XG4gICAgICB1bml0c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFiSW5kZXggKyA3KTtcbiAgICAgIHVuaXRzU2VsZWN0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0YWJJbmRleCArIDcpO1xuICAgICAgdW5pdHNTZWxlY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ3VuaXRzJyk7XG5cbiAgICAgIHVuaXRzU2VsZWN0LnNldEF0dHJpYnV0ZSgnb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5VTklUUykpO1xuXG4gICAgICB3aW5kb3cucm93SW5kZXggPSByb3dJbmRleCArIDE7XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydEFscGhhYmV0aWNhbGx5ID0gKHsgbGFiZWw6IGFMYWJlbCB9LCB7IGxhYmVsOiBiTGFiZWx9KSA9PiB7XG4gICAgICBpZiAoYUxhYmVsIDwgYkxhYmVsKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhTGFiZWwgPiBiTGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsVGFibGUgPSByZWNpcGUgPT4ge1xuICAgICAgY29uc3QgdGFibGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlX19jb250ZW50Jyk7XG4gICAgICB0YWJsZUNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICB3aW5kb3cudGFibGUgPSBbXTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS10aXRsZScpLnZhbHVlID0gcmVjaXBlLnRpdGxlO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbnNfX3RleHRhcmVhJykudmFsdWUgPSByZWNpcGUuZGlyZWN0aW9ucy5qb2luKCdcXG4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtbnV0cml0aW9uYWwtdmFsdWUnKS52YWx1ZSA9IHJlY2lwZS5udXRyaXRpb25hbFZhbHVlO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS11cmwnKS52YWx1ZSA9IHJlY2lwZS51cmw7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlVHlwZVNlbGVjdCcpLmlucHV0LnZhbHVlID0gUkVDSVBFX1RZUEVfTUFQW3JlY2lwZS50eXBlXTtcblxuICAgICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgYWRkUm93KHJvdyk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdFJlY2lwZSA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkUmVjaXBlID0gd2luZG93LlJFQ0lQRVMuZmluZCgoeyB0aXRsZSB9KSA9PiBldmVudC50YXJnZXQuaW5wdXQudmFsdWUgPT09IHRpdGxlKTtcblxuICAgICAgd2luZG93LnNlbGVjdGVkUmVjaXBlID0gc2VsZWN0ZWRSZWNpcGU7XG5cbiAgICAgIC8vIFRPRE8g0LvQvtCw0LTQtdGAINC90LAg0LfQsNCz0YDRg9C30LrRg1xuXG4gICAgICBmaWxsVGFibGUoc2VsZWN0ZWRSZWNpcGUpO1xuXG4gICAgICBjcmVhdGVDYXJkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlU2VsZWN0T3B0aW9ucyA9ICh1bml0LCBvcHRpb25zKSA9PiB3aW5kb3cudGFibGUuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgc2VsZWN0W3VuaXRdLnNldEF0dHJpYnV0ZSgnb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZUluZ3JlZGllbnRzID0gaW5ncmVkaWVudHMgPT4gdXBkYXRlU2VsZWN0T3B0aW9ucygnaW5ncmVkaWVudHMnLCBpbmdyZWRpZW50cy5zb3J0KHNvcnRBbHBoYWJldGljYWxseSkpO1xuXG4gICAgY29uc3QgdXBkYXRlVW5pdHMgPSB1bml0cyA9PiB1cGRhdGVTZWxlY3RPcHRpb25zKCd1bml0cycsIHVuaXRzLnNvcnQoc29ydEFscGhhYmV0aWNhbGx5KSk7XG5cblxuY29uc3QgbW0gPSB2YWx1ZSA9PiBgJHt2YWx1ZX1tbWA7XG5jb25zdCBOQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuY29uc3QgQ0FSRF9XSURUSCA9IDE0ODtcbmNvbnN0IENBUkRfSEVJR0hUID0gMjEwO1xuY29uc3QgQkFTRV9PRkZTRVQgPSAxNjtcbmNvbnN0IFBST0RVQ1RTX09GRlNFVCA9IDUwO1xuY29uc3QgRElSRUNUSU9OX1lfT0ZGU0VUID0gMTA1O1xuY29uc3QgSU5HUkVESUVOVFNfTUFYX0NIQVJfQ09VTlQgPSA0MDtcbmNvbnN0IERJUkVDVElPTlNfTUFYX0NIQVJfQ09VTlQgPSA1MDtcbmNvbnN0IFRZUEUgPSB7XG4gIFNWRzogJ3N2ZycsXG4gIEdST1VQOiAnZycsXG4gIFJFQ1RBTkdMRTogJ3JlY3QnLFxuICBURVhUOiAndGV4dCcsXG4gIFRTUEFOOiAndHNwYW4nLFxuICBERUZTOiAnZGVmcycsXG4gIFNUWUxFOiAnc3R5bGUnLFxufTtcblxuY29uc3QgUkVDSVBFX1RZUEUgPSB7XG4gIEZJUlNUX0NPVVJTRTogJ2ZpcnN0LWNvdXJzZScsXG4gIFNFQ09ORF9DT1VSU0U6ICdzZWNvdW5kLWNvdXJzZScsXG4gIEdBUk5JU0g6ICdnYXJuaXNoJyxcbiAgU0FMQUQ6ICdzYWxhZCcsXG4gIERFU1NFUlQ6ICdkZXNzZXJ0JyxcbiAgQlJFQUtGQVNUOiAnYnJlYWtmYXN0Jyxcbn07XG5cbmNvbnN0IFJFQ0lQRV9UWVBFX01BUCA9IHtcbiAgW1JFQ0lQRV9UWVBFLkZJUlNUX0NPVVJTRV06ICfQn9C10YDQstC+0LUg0LHQu9GO0LTQvicsXG4gIFtSRUNJUEVfVFlQRS5TRUNPTkRfQ09VUlNFXTogJ9CS0YLQvtGA0L7QtSDQsdC70Y7QtNC+JyxcbiAgW1JFQ0lQRV9UWVBFLkdBUk5JU0hdOiAn0JPQsNGA0L3QuNGAJyxcbiAgW1JFQ0lQRV9UWVBFLlNBTEFEXTogJ9Ch0LDQu9Cw0YInLFxuICBbUkVDSVBFX1RZUEUuREVTU0VSVF06ICfQlNC10YHQtdGA0YInLFxuICBbUkVDSVBFX1RZUEUuQlJFQUtGQVNUXTogJ9CX0LDQstGC0YDQsNC6Jyxcbn07XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyAgIC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXG4vLyAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJ0hlbGxvLCB3ZWJwYWNrISc7XG5cbi8vICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gYXdhaXQgaW5pdFRlbXBsYXRlcygpO1xuICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBzZWxlY3RXaXRoU2VhcmNoVGVtcGxhdGUpO1xuXG4gICAgICB3aW5kb3cuSU5HUkVESUVOVFMgPSBKU09OLnBhcnNlKGluZ3JlZGllbnRzKS5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKHsgaWQsIGxhYmVsOiBuYW1lIH0pKVxuICAgICAgd2luZG93Lk5FV19JTkdSRURJRU5UUyA9IFtdO1xuICAgICAgd2luZG93Lk5FV19VTklUUyA9IFtdO1xuICAgICAgd2luZG93LlJFQ0lQRVMgPSBKU09OLnBhcnNlKHJlY2lwZXMpLnNvcnQoKHsgdGl0bGU6IGEgfSwgeyB0aXRsZTogYiB9KSA9PiBhID4gYiA/IDEgOiAtMSk7XG5cbiAgICAgIC8vIGNvbnN0IGNzcyA9IGF3YWl0IGZldGNoRmlsZSgnLi9zdmcxLmNzcycpO1xuICAgICAgLy8gd2luZG93LmNzcyA9IGNzcztcblxuICAgICAgY29uc3QgdW5pdHMgPSBhd2FpdCBmZXRjaEZpbGUoJy4vdW5pdHMuanMnKTtcbiAgICAgIHdpbmRvdy5VTklUUyA9IEpTT04ucGFyc2UodW5pdHMpLnJlZHVjZSgoYWNjLCB7IGlkLCBuYW1lIH0pID0+IChbXG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIC4uLkFycmF5LmlzQXJyYXkobmFtZSlcbiAgICAgICAgICAgID8gbmFtZS5tYXAoKHdvcmQsIGluZGV4ICkgPT4gKHsgaWQ6IGAke2lkfV8ke2luZGV4ICsgMX1gLCBsYWJlbDogd29yZCB9KSlcbiAgICAgICAgICAgIDogW3sgaWQsIGxhYmVsOiBuYW1lIH1dXG4gICAgICAgIF0pLFxuICAgICAgW10pO1xuXG4gICAgICB3aW5kb3cudGFiSW5kZXggPSAwO1xuXG4gICAgICBjb25zdCByZWNpcGVTZWxlY3RvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJyk7XG4gICAgICBjb25zdCByZWNpcGVTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdC13aXRoLXNlYXJjaCcpO1xuICAgICAgcmVjaXBlU2VsZWN0b3IuaWQgPSAncmVjaXBlU2VsZWN0JztcbiAgICAgIHJlY2lwZVNlbGVjdG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlY2lwZVNlbGVjdG9yKTtcbiAgICAgIHJlY2lwZVNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICB3aW5kb3cuUkVDSVBFUy5tYXAoKHsgaWQsIHRpdGxlIH0pID0+ICh7IGlkLCBsYWJlbDogdGl0bGUgfSkpKSxcbiAgICAgICk7XG4gICAgICByZWNpcGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3RPcHRpb24nLCBzZWxlY3RSZWNpcGUpO1xuXG4gICAgICAvLyBUT0RPINGB0LTQtdC70LDRgtGMINGF0LXQu9C/0LXRgCDQv9C+INC/0L7QuNGB0LrRgyDQuCDQstGB0YLQsNCy0LrQuCDQsiDQutC+0L3RgtC10LnQvdC10YAgKNC+0YLQtNC10LvRjNC90L4g0LTQu9GPINGB0L/QuNGB0LrQvtCyKVxuICAgICAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLXR5cGUnKTtcbiAgICAgIC8vIFRPRE8g0YHQtNC10LvQsNGC0Ywg0LfQtNC10YHRjCDQv9GA0L7RgdGC0L7QuSDRgdC10LvQtdC60YLQvtGALiDQodC00LXQu9Cw0YLRjCDQvdCw0YHQu9C10LTQvtCy0LDQvdC40LUg0L7RgiDQvdC10LPQviDQsiDRgdC10LvQtdC60YLQvtGA0LUg0YEg0LLRi9Cx0L7RgNC+0LxcbiAgICAgIGNvbnN0IGNhdGVnb3J5U2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3Qtd2l0aC1zZWFyY2gnKTtcbiAgICAgIGNhdGVnb3J5U2VsZWN0b3IuaWQgPSAncmVjaXBlVHlwZVNlbGVjdCc7XG4gICAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeVNlbGVjdG9yKTtcbiAgICAgIC8vIFRPRE8g0YHQtNC10LvQsNGC0Ywg0YPQtNC+0LHQvdGL0Lkg0YXQtdC70L/QtdGAINC00LvRjyDQstGL0YHRgtCw0LLQu9C10L3QuNGPINC+0L/RhtC40Lkg0Log0YHQv9C40YHQutGDXG4gICAgICBjYXRlZ29yeVNlbGVjdG9yLnNldEF0dHJpYnV0ZSgnb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KE9iamVjdC52YWx1ZXMoUkVDSVBFX1RZUEUpLm1hcCh2YWx1ZSA9PiAoeyBpZDogdmFsdWUsIGxhYmVsOiBSRUNJUEVfVFlQRV9NQVBbdmFsdWVdIH0pKSkpO1xuXG4gICAgICBhZGRUYWJsZVJvdyh7XG4gICAgICAgIGluZ3JlZGllbnRTZWxlY3RJZDogJ3MxJyxcbiAgICAgICAgaW5ncmVkaWVudHM6IElOR1JFRElFTlRTLFxuICAgICAgICB1bml0U2VsZWN0SWQ6ICdzMicsXG4gICAgICAgIHVuaXRzOiBVTklUUyxcbiAgICAgICAgcm93SW5kZXg6IDEsXG4gICAgICB9KTtcblxuICAgICAgd2luZG93LmluZ3JlZGllbnRzID0gSU5HUkVESUVOVFM7XG4gICAgICB3aW5kb3cudW5pdHMgPSBVTklUUztcbiAgICAgIHdpbmRvdy50YWJsZSA9IFt7XG4gICAgICAgIHJvd0luZGV4OiAxLFxuICAgICAgICBpbmdyZWRpZW50czogczEsXG4gICAgICAgIHVuaXRzOiBzMixcbiAgICAgIH1dO1xuICAgICAgd2luZG93Lm1heEluZGV4ID0gMztcbiAgICAgIHdpbmRvdy5yb3dJbmRleCA9IDI7XG5cbiAgY29uc29sZS5sb2coJyVjJyArICdpbml0IDInLCAnY29sb3I6IGdyZWVuJyk7XG5cbiAgY29uc3QgY2FyZHNOdW1iZXJTZWxlY3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19udW1iZXIxJyk7XG4gIGNvbnN0IGNhcmRzTnVtYmVyU2VsZWN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fbnVtYmVyMicpO1xuICBpZiAoIWNhcmRzTnVtYmVyU2VsZWN0MSkgcmV0dXJuO1xuICBfcmVjaXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fLlJFQ0lQRVMuZm9yRWFjaCgoeyBpZCwgdGl0bGUgfSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24xLnZhbHVlID0gaWQ7IG9wdGlvbjEuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgY2FyZHNOdW1iZXJTZWxlY3QxLmFwcGVuZENoaWxkKG9wdGlvbjEpO1xuICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24yLnZhbHVlID0gaWQ7IG9wdGlvbjIuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgY2FyZHNOdW1iZXJTZWxlY3QyLmFwcGVuZENoaWxkKG9wdGlvbjIpO1xuICB9KTtcblxuICBcbn07XG5cbmluaXQoKTtcblxuY29uc3QgY3JlYXRlQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzTnVtYmVyU2VsZWN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fbnVtYmVyMScpO1xuICBjb25zdCBjYXJkc051bWJlclNlbGVjdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX251bWJlcjInKTtcblxuICBjcmVhdGVDYXJkKCtjYXJkc051bWJlclNlbGVjdDEudmFsdWUsIDAsIDApO1xuICBjcmVhdGVDYXJkKCtjYXJkc051bWJlclNlbGVjdDIudmFsdWUsIDAsIDE0OCk7XG59O1xuXG5jb25zdCBjcmVhdGVTdmdFbGVtZW50ID0gKHR5cGUsIGF0dHJzID0ge30sIHRleHRDb250ZW50ID0gJycpID0+IHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOQU1FU1BBQ0UsIHR5cGUpO1xuXG4gIE9iamVjdC5lbnRyaWVzKGF0dHJzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfSk7XG5cbiAgaWYgKFtUWVBFLlRFWFQsIFRZUEUuVFNQQU5dLmluY2x1ZGVzKHR5cGUpKSB7XG4gICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG4vLyBjb25zdCB0cmltUm93ID0gKGxpbWl0LCB0ZXh0KSA9PiB0ZXh0LnNwbGl0KCcgJylcbi8vICAgLnJlZHVjZSgoYWNjLCB3b3JkLCBpbmRleCkgPT4ge1xuLy8gICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gYWNjLmxlbmd0aCAtIDE7XG4vLyAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gW3dvcmRdO1xuXG4vLyAgICAgY29uc3QgcHJldkVsZW1lbnQgPSBhY2NbbGFzdEVsZW1lbnRdO1xuXG4vLyAgICAgcmV0dXJuIHByZXZFbGVtZW50Lmxlbmd0aCA8IDNcbi8vICAgICAgID8gWy4uLmFjYy5zbGljZSgwLCAtMSksIGAke3ByZXZFbGVtZW50fSAke3dvcmR9YF1cbi8vICAgICAgIDogWy4uLmFjYywgd29yZF07XG4vLyAgIH0sIFtdKVxuLy8gICAucmVkdWNlKChhY2MsIHdvcmQpID0+IHtcbi8vICAgICBpZiAoIWFjYy5sZW5ndGgpIHJldHVybiBbd29yZF07IGNvbnN0IGxhc3RJbmRleCA9IGFjYy5sZW5ndGggLSAxOyBjb25zdCBsYXN0RWxlbWVudCA9IGFjY1tsYXN0SW5kZXhdOyBjb25zdCByb3dXaXRoTmV3V29yZCA9IGAke2xhc3RFbGVtZW50fSAke3dvcmR9YDsgcmV0dXJuIHJvd1dpdGhOZXdXb3JkLmxlbmd0aCA8IGxpbWl0ID8gWy4uLmFjYy5zbGljZSgwLCAtMSksIHJvd1dpdGhOZXdXb3JkXSA6IFsuLi5hY2MsIHdvcmRdO1xuLy8gICB9LCBbXSk7XG5cbi8vIGNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZElkLCB4MCwgeTApID0+IHtcbi8vICAgY29uc3Qgc3RhcnRYID0gK3gwO1xuLy8gICBjb25zdCBzdGFydFkgPSAreTA7XG5cbi8vICAgbGV0IHN2ZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuXG4vLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyJyk7XG5cbi8vICAgaWYgKCFzdmcpIHtcbi8vICAgICBzdmcgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuU1ZHLCB7IHdpZHRoOiBtbSgyMTApLCBoZWlnaHQ6IG1tKDI5NykgfSk7XG4vLyAgIH1cblxuLy8gICBjb25zdCByZWNpcGVHcm91cCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5HUk9VUCk7XG5cbi8vICAgY29uc3QgcmVjaXBlQ29udGFpbmVyID0gY3JlYXRlU3ZnRWxlbWVudChcbi8vICAgICBUWVBFLlJFQ1RBTkdMRSwge1xuLy8gICAgIHg6IG1tKHN0YXJ0WCksXG4vLyAgICAgeTogbW0oc3RhcnRZKSxcbi8vICAgICB3aWR0aDogbW0oQ0FSRF9XSURUSCksXG4vLyAgICAgaGVpZ2h0OiBtbShDQVJEX0hFSUdIVCksXG4vLyAgICAgY2xhc3M6ICdyZWNpcGVfX2NvbnRhaW5lcidcbi8vICAgfSk7XG5cbi8vICAgY29uc3Qge1xuLy8gICAgIGlkLFxuLy8gICAgIHRpdGxlLFxuLy8gICAgIGluZ3JlZGllbnRzLFxuLy8gICAgIGRpcmVjdGlvbnNcbi8vICAgfSA9IF9yZWNpcGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18uUkVDSVBFUy5maW5kKCh7IGlkIH0pID0+IGNhcmRJZCA9PT0gaWQpO1xuXG4vLyAgIGNvbnN0IHJlY2lwZVRpdGxlID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbi8vICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbi8vICAgICB4OiBtbShzdGFydFggKyBDQVJEX1dJRFRIIC8gMiksXG4vLyAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQpLFxuLy8gICAgIGNsYXNzOiAndGl0bGUnLFxuLy8gICAgIHN0eWxlOiBgJHt0aXRsZS5sZW5ndGggPiAyMCA/ICdmb250LXNpemU6IDE2cHg7JyA6ICcnfWBcbi8vICAgfSxcbi8vICAgICBgJHtpZH0uICR7dGl0bGV9YFxuLy8gICApO1xuXG4vLyAgIGNvbnN0IGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5HUk9VUCwgeyBjbGFzczogJ2NvbnRlbnQnIH0pO1xuXG4vLyAgIGNvbnN0IGluZ3JlZGllbnRNYWluVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4vLyAgICAgeDogbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQpLFxuLy8gICAgIHk6IG1tKHN0YXJ0WSArIEJBU0VfT0ZGU0VUICogMilcbi8vICAgfSk7XG5cbi8vICAgY29uc3QgaW5ncmVkaWVudFByb2R1Y3RzVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4vLyAgICAgeDogbW0oc3RhcnRYICsgUFJPRFVDVFNfT0ZGU0VUKSxcbi8vICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCAqIDIpXG4vLyAgIH0pO1xuXG4vLyAgIGluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCB7IGluZ3JlZGllbnRJZCwgLi4ucmVzdCB9KSA9PiB7XG4vLyAgICAgY29uc3QgYSA9IF9pbmdyZWRpZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fLklOR1JFRElFTlRTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGluZ3JlZGllbnRJZCk7XG5cbi8vICAgICBjb25zdCBpbmdyZWRpZW50RWxlbWVudHNSb3dzID0gdHJpbVJvdyhJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCwgX2luZ3JlZGllbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18uSU5HUkVESUVOVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gaW5ncmVkaWVudElkKS5uYW1lKTtcblxuLy8gICAgIHJldHVybiBbLi4uYWNjLCB7IGluZ3JlZGllbnRJZCwgaW5ncmVkaWVudEVsZW1lbnRzUm93cywgLi4ucmVzdCB9XTtcbi8vICAgfSwgW10pXG4vLyAgICAgLnJlZHVjZSgoYWNjLCB7IGFtb3VudE9mLCB1bml0SWQsIGluZGV4OiB1bml0SW5kZXgsIGlzQW5hbG9ndWUsIGluZ3JlZGllbnRJZCwgaW5ncmVkaWVudEVsZW1lbnRzUm93cyB9LCBpbmRleCkgPT4ge1xuLy8gICAgICAgY29uc3QgaXNGaXJzdFJvdyA9IGluZGV4ID09PSAwOyBjb25zdCBsYXN0Um93Q291bnQgPSBpc0ZpcnN0Um93ID8gMSA6IGFjY1thY2MubGVuZ3RoIC0gMV0ucm93Q291bnQ7XG5cbi8vICAgICAgIGNvbnN0IHVuaXQgPSBfdW5pdHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXy5VTklUUy5maW5kKCh7IGlkIH0pID0+IGlkID09PSB1bml0SWQpLm5hbWU7XG5cbi8vICAgICAgIGNvbnN0IGFtb3VudE9mVW5pdEVsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbi8vICAgICAgICAgeDogbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQpLFxuLy8gICAgICAgICBkeTogaXNGaXJzdFJvdyA/ICcwJyA6XG4vLyAgICAgICAgICAgaXNBbmFsb2d1ZSA/ICcwLjhlbScgOiBgJHsobGFzdFJvd0NvdW50ICsgMSkgKiAwLjh9ZW1gXG4vLyAgICAgICB9LFxuLy8gICAgICAgICBg4paqICR7YW1vdW50T2YgfHwgJyd9ICR7QXJyYXkuaXNBcnJheSh1bml0KSA/IHVuaXRbdW5pdEluZGV4XSA6IHVuaXR9YCk7XG5cbi8vICAgICAgIGluZ3JlZGllbnRNYWluVGV4dC5hcHBlbmRDaGlsZChhbW91bnRPZlVuaXRFbGVtZW50KTsgaW5ncmVkaWVudEVsZW1lbnRzUm93cy5mb3JFYWNoKCh3b3JkLCB3b3JkSW5kZXgpID0+IHtcbi8vICAgICAgICAgY29uc3QgcHJvZHVjdFJvdyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuLy8gICAgICAgICAgIHg6IG1tKHN0YXJ0WCArIFBST0RVQ1RTX09GRlNFVCksXG4vLyAgICAgICAgICAgZHk6IGlzRmlyc3RSb3cgJiYgd29yZEluZGV4ID09PSAwID8gJzAnIDogd29yZEluZGV4ID09PSAwICYmICFpc0FuYWxvZ3VlID8gJzEuNmVtJyA6ICcwLjhlbSdcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgICBpc0FuYWxvZ3VlID8gYNC40LvQuCAke3dvcmQudG9Mb3dlckNhc2UoKX1gIDogd29yZCk7IGluZ3JlZGllbnRQcm9kdWN0c1RleHQuYXBwZW5kQ2hpbGQocHJvZHVjdFJvdyk7XG4vLyAgICAgICB9KTtcblxuLy8gICAgICAgcmV0dXJuIFsuLi5hY2MsIHsgcm93Q291bnQ6IGluZ3JlZGllbnRFbGVtZW50c1Jvd3MubGVuZ3RoIH1dO1xuLy8gICAgIH0sIFtdKTtcblxuLy8gICBpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudE1haW5UZXh0KTtcbi8vICAgaW5ncmVkaWVudHNBbW91bnRPZkdyb3VwLmFwcGVuZENoaWxkKGluZ3JlZGllbnRQcm9kdWN0c1RleHQpO1xuXG4vLyAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHJlY2lwZUNvbnRhaW5lcik7XG4vLyAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHJlY2lwZVRpdGxlKTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNBbW91bnRPZkdyb3VwKTtcbi8vICAgc3ZnLmFwcGVuZENoaWxkKHJlY2lwZUdyb3VwKTtcbi8vICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zyk7XG5cbi8vICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyAgIGNvbnN0IGRpcmVjdGlvbnNHcm91cCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5HUk9VUCwge1xuLy8gICAgIGNsYXNzOiAnY29udGVudCdcbi8vICAgfSk7XG5cbi8vICAgY29uc3QgZGlyZWN0aW9uc1RpdGxlID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbi8vICAgICAvLyBUT0RPIDUyINCyINC60L7QvdGB0YLQsNC90YLRi1xuLy8gICAgIHg6IG1tKHN0YXJ0WCArIENBUkRfV0lEVEggKyA1MiksXG4vLyAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQpLFxuLy8gICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuLy8gICAgIGNsYXNzOiAncHJlcGFyaW5nJ1xuLy8gICB9LCAn0J/RgNC40LPQvtGC0L7QstC70LXQvdC40LUnKTtcblxuLy8gICBjb25zdCBkaXJlY3Rpb25zTWFpblRleHQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuLy8gICAgIHg6IG1tKHN0YXJ0WCArIENBUkRfV0lEVEggKyBCQVNFX09GRlNFVCAvIDIpLFxuLy8gICAgIHk6IG1tKHN0YXJ0WSArIEJBU0VfT0ZGU0VUICogMiksIGNsYXNzOiAncHJlcGFyaW5nX19jb250ZW50J1xuLy8gICB9KTtcblxuLy8gICBjb25zdCBQSVhFTF9JTl9NTSA9IDAuMjY7IGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uLCBpbmRleCkgPT4ge1xuLy8gICAgIHRyaW1Sb3coRElSRUNUSU9OU19NQVhfQ0hBUl9DT1VOVCwgZGlyZWN0aW9uKS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4vLyAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbi8vICAgICAgICAgZGlyZWN0aW9uc01haW5UZXh0LmFwcGVuZENoaWxkKGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuLy8gICAgICAgICAgIHg6IG1tKHN0YXJ0WCArIENBUkRfV0lEVEggKyBCQVNFX09GRlNFVCAvIDIpLFxuLy8gICAgICAgICAgIGR5OiBpbmRleCA9PT0gMCAmJiByb3dJbmRleCA9PT0gMCA/ICcwJyA6IHJvd0luZGV4ID09PSAwID8gJzEuNWVtJyA6ICcwLjhlbScsIGNsYXNzOiAnYm9sZCdcbi8vICAgICAgICAgfSwgYCR7aW5kZXggKyAxfS5gKSk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGRpcmVjdGlvbnNNYWluVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbi8vICAgICAgICAgeDogcm93SW5kZXggPT09IDAgPyBtbShzdGFydFggKyBDQVJEX1dJRFRIICsgQkFTRV9PRkZTRVQgLyAyICsgMTYgKiAoYCR7aW5kZXh9YC5sZW5ndGggKyAxKSAqIFBJWEVMX0lOX01NKVxuLy8gICAgICAgICAgIDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCArIEJBU0VfT0ZGU0VUKSwgZHk6IHJvd0luZGV4ID09PSAwID8gJzAnIDogcm93SW5kZXggPT09IDAgPyAnMS41ZW0nIDogJzAuOGVtJ1xuLy8gICAgICAgfSwgcm93KSk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IGRpcmVjdGlvbnNDb250YWluZXIgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuUkVDVEFOR0xFLCB7XG4vLyAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCksXG4vLyAgICAgeTogbW0oc3RhcnRZKSxcbi8vICAgICB3aWR0aDogbW0oQ0FSRF9XSURUSCksXG4vLyAgICAgaGVpZ2h0OiBtbShDQVJEX0hFSUdIVCksXG5cbi8vICAgICAvLyBUT0RPINCy0YvQvdC10YHRgtC4INCyINC60LvQsNGB0YFcbi8vICAgICBzdHlsZTogJ2ZpbGw6IG5vbmU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMSdcbi8vICAgfSk7XG5cbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc0dyb3VwKTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc1RpdGxlKTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc01haW5UZXh0KTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc0NvbnRhaW5lcik7XG5cbi8vICAgY29uc3QgdG9wSG9sZVJlY3QgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuUkVDVEFOR0xFLCB7XG4vLyAgICAgeDogbW0oMCArIHN0YXJ0WCksXG4vLyAgICAgeTogbW0oMzIgKyBzdGFydFkpLFxuLy8gICAgIHdpZHRoOiBtbSgxMCksXG4vLyAgICAgaGVpZ2h0OiAyLFxuLy8gICAgIC8vIFRPRE8g0LIg0YHRgtC40LvRjFxuLy8gICAgIHN0eWxlOiAnZmlsbDogI2RmZGZkZjsgc3Ryb2tlOiBub25lOydcbi8vICAgfSk7XG4vLyAgIGNvbnN0IGJvdHRvbUhvbGVSZWN0ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlJFQ1RBTkdMRSwge1xuLy8gICAgIHg6IG1tKDAgKyBzdGFydFgpLFxuLy8gICAgIHk6IG1tKDExMiArIHN0YXJ0WSksXG4vLyAgICAgd2lkdGg6IG1tKDEwKSxcbi8vICAgICBoZWlnaHQ6IDIsXG4vLyAgICAgLy8gVE9ETyDQsiDRgdGC0LjQu9GMXG4vLyAgICAgc3R5bGU6ICdmaWxsOiNkZmRmZGY7IHN0cm9rZTogbm9uZTsnXG4vLyAgIH0pO1xuXG4vLyAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHRvcEhvbGVSZWN0KTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoYm90dG9tSG9sZVJlY3QpO1xuLy8gfTtcblxuY29uc3Qgc2F2ZVN2ZyA9ICgpID0+IHtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gIGNvbnN0IHNlcmlhbGl6ZXIgPSBuZXcgWE1MU2VyaWFsaXplcigpO1xuICBjb25zdCBzb3VyY2UgPSBzZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Zyk7XG4gIC8vIC8vYWRkIG5hbWUgc3BhY2VzLlxuICAvLyBpZighc291cmNlLm1hdGNoKC9ePHN2Z1tePl0reG1sbnM9XFxcImh0dHBcXFxcOlxcXFwvXFxcXC93d3dcXFxcLnczXFxcXC5vcmdcXFxcLzIwMDBcXFxcL3N2Z1xcXCIvKSl7XG4gIC8vICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXjxzdmcvLCAnPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiJyk7ICAvLyB9XG4gIC8vIGlmKCFzb3VyY2UubWF0Y2goL148c3ZnW14+XStcXFwiaHR0cFxcXFw6XFxcXC9cXFxcL3d3d1xcXFwudzNcXFxcLm9yZ1xcXFwvMTk5OVxcXFwveGxpbmtcXFwiLykpe1xuICAvLyAgICAgc291cmNlID0gc291cmNlLnJlcGxhY2UoL148c3ZnLywgJzxzdmcgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiJyk7ICAvLyB9XG4gIC8vIC8vYWRkIHhtbCBkZWNsYXJhdGlvbiAgLy8gc291cmNlID0gJzw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgc3RhbmRhbG9uZT1cXFwibm9cXFwiPz5cXFxcclxcJyArIHNvdXJjZTtcblxuICAvLyBjb252ZXJ0IHN2ZyBzb3VyY2UgdG8gVVJJIGRhdGEgc2NoZW1lLiAgY29uc3QgdXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCR7ZW5jb2RlVVJJQ29tcG9uZW50KHNvdXJjZSl9YDtcbiAgLy8gY29uc29sZS5sb2coJyVjJXMnLCAnYmFja2dyb3VuZDogY2FkZXRibHVlOyBwYWRkaW5nOiA4cHg7JywgZW5jb2RlVVJJQ29tcG9uZW50KHNvdXJjZSkpO1xuICAvLyBzZXQgdXJsIHZhbHVlIHRvIGEgZWxlbWVudCdzIGhyZWYgYXR0cmlidXRlLiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvd25sb2FkLWxpbmsnKS5ocmVmID0gdXJsO1xuICAvLyB5b3UgY2FuIGRvd25sb2FkIHN2ZyBmaWxlIGJ5IHJpZ2h0IGNsaWNrIG1lbnUufTtcblxuICAvLyBjb25zdCB7IFRvZG9pc3RBcGkgfSA9IHJlcXVpcmUoJ0Bkb2lzdC90b2RvaXN0LWFwaS10eXBlc2NyaXB0JylcbiAgLy8gY29uc3QgYSA9IHJlcXVpcmUoWycuLy4uL25vZGVfbW9kdWxlcy9AZG9pc3QvdG9kb2lzdC1hcGktdHlwZXNjcmlwdC9kaXN0L2luZGV4LmpzJ10pO1xuICAvLyBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBhcGkgPSBuZXcgX2RvaXN0X3RvZG9pc3RfYXBpX3R5cGVzY3JpcHRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXy5Ub2RvaXN0QXBpKCdiNmQwNzkyMWJjNzQ5ZDRmNTAwNDA5NjNjZDFiYzEzYTUxZmQzM2UyJyk7XG4gIC8vIGNvbnN0IGNhcmRzTnVtYmVyID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fbnVtYmVyMScpLnZhbHVlO1xuICAvLyBjb25zb2xlLmxvZygnJWMlcycsICdiYWNrZ3JvdW5kOiBjYWRldGJsdWU7IHBhZGRpbmc6IDhweDsnLCBjYXJkc051bWJlcik7XG4gIC8vIGNvbnN0IHJlY2lwZSA9IF9yZWNpcGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18uUkVDSVBFUy5maW5kKCh7ICAgIGlkICB9KSA9PiBpZCA9PT0gY2FyZHNOdW1iZXIpO1xuICAvLyBjb25zdCB0YXNrcyA9IHJlY2lwZS5pbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgaW5ncmVkaWVudCkgPT4ge1xuICAvLyAgIGNvbnN0IHtcbiAgLy8gICAgIGlkLFxuICAvLyAgICAgaW5ncmVkaWVudElkLFxuICAvLyAgICAgYW1vdW50T2YsXG4gIC8vICAgICB1bml0SWQsXG4gIC8vICAgICBpbmRleCB9ID0gaW5ncmVkaWVudDsgY29uc3QgdW5pdCA9IF91bml0c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fLlVOSVRTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHVuaXRJZCk7IGNvbnN0IHVuaXROYW1lID0gaW5kZXggPyB1bml0Lm5hbWVbaW5kZXggLSAxXSA6IHVuaXQubmFtZTsgY29uc3QgaW5ncmVkaWVudEVudGl0eSA9IF9pbmdyZWRpZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fLklOR1JFRElFTlRTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGluZ3JlZGllbnRJZCk7IGNvbnN0IHsgaW5SZXNlcnZlLCBjaGVjayB9ID0gaW5ncmVkaWVudEVudGl0eTsgaWYgKGluUmVzZXJ2ZSAmJiAhY2hlY2spIHJldHVybiBhY2M7IGNvbnN0IGNoZWNrUG9zdGZpeCA9IGluUmVzZXJ2ZSA9PT0gZmFsc2UgfHwgaW5SZXNlcnZlID09PSB0cnVlICYmIGNoZWNrID09PSB0cnVlID8gJyAo0L/RgNC+0LLQtdGA0LjRgtGMKScgOiAnJzsgY29uc3QgcG9zdGZpeCA9IHVuaXROYW1lICYmIHVuaXROYW1lICE9PSAn0L/QviDQstC60YPRgdGDJyA/IGAg4oCUICR7YW1vdW50T2YgfHwgJyd9ICR7dW5pdE5hbWV9JHtjaGVja1Bvc3RmaXh9YCA6ICcnOyByZXR1cm4gWy4uLmFjYywgeyBjb250ZW50OiBgJHtpbmdyZWRpZW50RW50aXR5Lm5hbWV9JHtwb3N0Zml4fWAsIHByb2plY3RJZDogJzIyOTAxODg2MDknIH1dO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gY29uc29sZS5sb2coJyVjJXMnLCAnYmFja2dyb3VuZDogY2FkZXRibHVlOyBwYWRkaW5nOiA4cHg7JywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcblxuICAvLyB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAvLyAgIGFwaS5hZGRUYXNrKHRhc2spLnRoZW4oKHsgaWQgfSkgPT4gY29uc29sZS5sb2coJyVjJXMnLCAnYmFja2dyb3VuZDogY2FkZXRibHVlOyBwYWRkaW5nOiA4cHg7JywgaWQpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAvLyB9KTtcblxuICAvLyBhcGkuZ2V0UHJvamVjdHMoKS50aGVuKHByb2plY3RzID0+IGNvbnNvbGUubG9nKHByb2plY3RzKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfTtcblxud2luZG93LmNyZWF0ZUNhcmQgPSBjcmVhdGVDYXJkO1xud2luZG93LnNhdmVTdmcgPSBzYXZlU3ZnO1xuLy8gd2luZG93LmdldFByb2plY3RzID0gZ2V0UHJvamVjdHM7XG53aW5kb3cuY3JlYXRlQ2FyZHMgPSBjcmVhdGVDYXJkcztcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJTZWxlY3QiLCJfSFRNTEVsZW1lbnQiLCJfdGhpczIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJzb3J0T3B0aW9ucyIsInNlbGVjdEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJhZGRPcHRpb25zIiwiYXBwZW5kQ2hpbGQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJzb3J0IiwiX3JlZiIsIl9yZWYyIiwibmFtZTEiLCJuYW1lIiwibmFtZTIiLCJmb3JFYWNoIiwiX3JlZjMiLCJvcHRpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImlubmVySFRNTCIsInJlbW92ZUFsbE9wdGlvbnMiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFwcGx5IiwiZXJyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiaXNBcnJheSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNvdXJjZSIsImV4Y2x1ZGVkIiwidGFyZ2V0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwic291cmNlS2V5cyIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJpdGVyIiwibGVuIiwiYXJyMiIsIm93bktleXMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsIk51bWJlciIsImNzcyIsInN2ZzEiLCJpbmdyZWRpZW50c0pTT04iLCJyZWNpcGVzSlNPTiIsInNlbGVjdFdpdGhTZWFyY2hUZW1wbGF0ZSIsImluZ3JlZGllbnRzIiwicmVjaXBlcyIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsImFkZFJvdyIsInJlY2lwZVJvdyIsImluZ3JlZGllbnRTZWxlY3RJZCIsIndpbmRvdyIsIm1heEluZGV4IiwidW5pdFNlbGVjdElkIiwicm93SW5kZXgiLCJhZGRUYWJsZVJvdyIsInRhYmxlIiwidW5pdHMiLCJ1cGRhdGVJbmdyZWRpZW50cyIsIklOR1JFRElFTlRTIiwidXBkYXRlVW5pdHMiLCJVTklUUyIsInJlbW92ZVJvdyIsImV2ZW50IiwicGFyZW50Tm9kZSIsImluZGV4IiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsImdldEluZ3JlZGllbnRzIiwiTkVXX0lOR1JFRElFTlRTIiwiZ2V0VW5pdHMiLCJORVdfVU5JVFMiLCJ0cmltUm93IiwibGltaXQiLCJ0ZXh0Iiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJ3b3JkIiwibGFzdEVsZW1lbnQiLCJwcmV2RWxlbWVudCIsImxhc3RJbmRleCIsInJvd1dpdGhOZXdXb3JkIiwiY3JlYXRlQ2FyZFN2ZyIsInJlY2lwZSIsIngwIiwieTAiLCJzdGFydFgiLCJzdGFydFkiLCJzdmciLCJjb250YWluZXIiLCJjcmVhdGVTdmdFbGVtZW50IiwiVFlQRSIsIlNWRyIsIndpZHRoIiwibW0iLCJoZWlnaHQiLCJkZWZzIiwiREVGUyIsInN0eWxlIiwiU1RZTEUiLCJkb2N1IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiY2RhdGEiLCJjcmVhdGVDREFUQVNlY3Rpb24iLCJyZWNpcGVHcm91cCIsIkdST1VQIiwicmVjaXBlQ29udGFpbmVyIiwiUkVDVEFOR0xFIiwieCIsIkNBUkRfV0lEVEgiLCJDQVJEX0hFSUdIVCIsInRpdGxlIiwiaWRJbkNhdGVnb3J5IiwiZGlyZWN0aW9ucyIsInRpdGxlQ29udGFpbmVyIiwiQkFTRV9PRkZTRVQiLCJyZWNpcGVUaXRsZSIsIlRFWFQiLCJpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAiLCJpbmdyZWRpZW50TWFpblRleHQiLCJpbmdyZWRpZW50UHJvZHVjdHNUZXh0IiwiUFJPRFVDVFNfT0ZGU0VUIiwiaW5ncmVkaWVudHNPZmZzZXQiLCJpbmdyZWRpZW50SWQiLCJyZXN0IiwiX2V4Y2x1ZGVkIiwiZmluZCIsImluZ3JlZGllbnRFbGVtZW50c1Jvd3MiLCJJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCIsIl9yZWY0IiwibGFiZWwiLCJfcmVmNSIsImFtb3VudE9mIiwidW5pdElkIiwidW5pdEluZGV4IiwiaXNBbmFsb2d1ZSIsImlzRmlyc3RSb3ciLCJsYXN0Um93Q291bnQiLCJyb3dDb3VudCIsInByb2Nlc3NlZFVuaXRJZCIsImlzSW50ZWdlciIsInVuaXQiLCJfcmVmNiIsImFtb3VudE9mVW5pdEVsZW1lbnQiLCJUU1BBTiIsImR5IiwiaW5ncmVkaWVudE9mZnNldCIsImVsZW1lbnRBY2MiLCJ3b3JkSW5kZXgiLCJwcm9kdWN0Um93IiwidG9Mb3dlckNhc2UiLCJvZmZzZXQiLCJkaXJlY3Rpb25zR3JvdXAiLCJzZXBhcmF0b3JPZmZzZXQiLCJNYXRoIiwiZmxvb3IiLCJnZXRCQm94Iiwic2VwYXJhdG9yIiwiZGlyZWN0aW9uc01haW5UZXh0IiwiUElYRUxfSU5fTU0iLCJkaXJlY3Rpb24iLCJESVJFQ1RJT05TX01BWF9DSEFSX0NPVU5UIiwicm93IiwiY3JlYXRlQ2FyZCIsInNlbGVjdGVkUmVjaXBlIiwiY29weUNhcmQiLCJhZGRJbmdyZWRpZW50IiwiaW5ncmVkaWVudCIsIm5ld0lkIiwibWF4IiwiX3JlZjciLCJhZGRVbml0IiwiX3JlZjgiLCJtYXRjaCIsIl9yZWY5IiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiaW5ncmVkaWVudFZhbHVlIiwiX3JlZjAiLCJ1bml0VmFsdWUiLCJfcmVmMSIsIm5ld0luZ3JlZGllbnRzIiwiX3JlZjEwIiwiaW5ncmVkaWVudEFjYyIsImxpbmtlZFVuaXRzIiwibmV3VW5pdHMiLCJ1bml0QWNjIiwiUkVDSVBFUyIsIl9yZWYxMSIsInR5cGVMYWJlbCIsImdldEVsZW1lbnRCeUlkIiwiZW50cmllcyIsIlJFQ0lQRV9UWVBFX01BUCIsIl9yZWYxMiIsIl9yZWYxMyIsImluQ2F0ZWdvcnlJZHMiLCJfcmVmMTQiLCJyZWNpcGVUeXBlIiwiX3JlZjE1IiwibnV0cml0aW9uYWxWYWx1ZSIsIm5ld1JlY2lwZSIsInJlc3VsdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlTdmciLCJzZXJpYWxpemVyIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiX3JlZjE2IiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9yZWYxNyIsInRhYmxlQ29udGVudEVsZW1lbnQiLCJ0YWJJbmRleCIsInJvd0VsZW1lbnQiLCJjbGFzc05hbWUiLCJpbmdyZWRpZW50c0NlbGwiLCJpbmdyZWRpZW50c1NlbGVjdCIsImNvdW50SW5wdXRDZWxsIiwiY291bnRJbnB1dENvbnTQsGluZXIiLCJjb3VudElucHV0IiwidW5pdHNDZWxsIiwidW5pdHNTZWxlY3QiLCJ0YWJsZUFkZEJ1dHRvbkNvbnRhaW5lciIsInRhYmxlQWRkQnV0dG9uIiwib25jbGljayIsIl90aGlzIiwidGFibGVEZWxldGVCdXR0b25Db250YWluZXIiLCJ0YWJsZURlbGV0ZUJ1dHRvbiIsImluZ3JlZGllbnRMYWJlbCIsIl9yZWYxOCIsInVuaXRMYWJlbCIsIl9yZWYxOSIsInNvcnRBbHBoYWJldGljYWxseSIsIl9yZWYyMCIsIl9yZWYyMSIsImFMYWJlbCIsImJMYWJlbCIsImZpbGxUYWJsZSIsInRhYmxlQ29udGVudCIsInNlbGVjdFJlY2lwZSIsIl9yZWYyMiIsInVwZGF0ZVNlbGVjdE9wdGlvbnMiLCJzZWxlY3QiLCJOQU1FU1BBQ0UiLCJESVJFQ1RJT05fWV9PRkZTRVQiLCJSRUNJUEVfVFlQRSIsIkZJUlNUX0NPVVJTRSIsIlNFQ09ORF9DT1VSU0UiLCJHQVJOSVNIIiwiU0FMQUQiLCJERVNTRVJUIiwiQlJFQUtGQVNUIiwiaW5pdCIsIl9yZWYyMyIsIl9jYWxsZWUiLCJyZWNpcGVTZWxlY3RvckNvbnRhaW5lciIsInJlY2lwZVNlbGVjdG9yIiwiY2F0ZWdvcnlDb250YWluZXIiLCJjYXRlZ29yeVNlbGVjdG9yIiwiY2FyZHNOdW1iZXJTZWxlY3QxIiwiY2FyZHNOdW1iZXJTZWxlY3QyIiwiX2NvbnRleHQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJfcmVmMjQiLCJfcmVmMjUiLCJfcmVmMjYiLCJiIiwiZmV0Y2hGaWxlIiwiX3JlZjI3IiwiX3JlZjI4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInMxIiwiczIiLCJfcmVjaXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fIiwiX3JlZjI5Iiwib3B0aW9uMSIsIm9wdGlvbjIiLCJjcmVhdGVDYXJkcyIsImF0dHJzIiwidGV4dENvbnRlbnQiLCJub2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiX3JlZjMwIiwiX3JlZjMxIiwiaW5jbHVkZXMiLCJzYXZlU3ZnIl0sInNvdXJjZVJvb3QiOiIifQ==