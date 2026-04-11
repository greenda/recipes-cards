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

/***/ "./src/app/components/select-with-search/index.js":
/*!********************************************************!*\
  !*** ./src/app/components/select-with-search/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var html_loader_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-loader!./template.html */ "./node_modules/html-loader/dist/cjs.js!./src/app/components/select-with-search/template.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/app/components/select-with-search/style.css");
var _templateObject;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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


var SelectWithSearch = /*#__PURE__*/function (_HTMLElement) {
  function SelectWithSearch() {
    var _this2;
    _classCallCheck(this, SelectWithSearch);
    _this2 = _callSuper(this, SelectWithSearch);
    _defineProperty(_this2, "handleInputChange", function () {
      var searchString = (_this2.input.value || '').toLowerCase();
      _this2.setOptions(_this2.commonOptions.filter(function (_ref) {
        var label = _ref.label;
        return label.toLowerCase().includes(searchString);
      }), _this2.popup, true);

      // Переделать в Open и Close
      _this2.popup.classList.remove('hide');
    });
    _defineProperty(_this2, "setOptions", function (options, popup, isFilter) {
      popup.innerHTML = null;
      options.forEach(function (option) {
        return _this2.setOption(option, popup);
      });
      if (!isFilter) {
        _this2.commonOptions = options;
      }
    });
    _defineProperty(_this2, "setOption", function (_ref2, popup, isDefault) {
      var id = _ref2.id,
        label = _ref2.label;
      var optionNode = document.createElement('div');
      optionNode.className = 'select__option';
      optionNode.innerHTML = label;
      optionNode.id = id;
      optionNode.addEventListener('click', _this2.selectOption);
      popup.appendChild(optionNode);
    });
    _defineProperty(_this2, "addOption", function () {
      var newValue = _this2.input.value;
      if (!newValue || _this2.options.some(function (_ref3) {
        var label = _ref3.label;
        return label === newValue;
      })) return;
      _this2.newOption = _this2.input.value;
      _this2.dispatchEvent(new CustomEvent('addOption'));
      if (!_this2.popup.classList.contains('hide')) {
        _this2.togglePopup();
      }
    });
    _defineProperty(_this2, "togglePopup", function () {
      _this2.popup.classList.toggle('hide');
    });
    _defineProperty(_this2, "selectOption", function (event) {
      _this2.input.value = event.currentTarget.innerHTML;
      _this2.togglePopup();
      _this2.dispatchEvent(new CustomEvent('selectOption'));
    });
    _defineProperty(_this2, "handleExternalClick", function (event) {
      var target = event.target;
      if (target.id !== _this2.id || target.classList.contains(/select/) && !target.classList.contains('select__hide-button')) {
        _this2.popup.classList.add('hide');
      }
    });
    _this2.isOpen = false;
    _this2.commonOptions = [];
    return _this2;
  }
  _inherits(SelectWithSearch, _HTMLElement);
  return _createClass(SelectWithSearch, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log('%c' + 'connected', 'color: green');
      if (!document.getElementById("select-with-search")) {
        var text = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), html_loader_template_html__WEBPACK_IMPORTED_MODULE_0__["default"]);
        if (!text) throw new Error('No template.');
        document.querySelector('.page').insertAdjacentHTML('beforebegin', text);
      }
      var template = document.getElementById("select-with-search");
      var templateContent = template.cloneNode(true).content;
      this.content = templateContent;
      this.options = [];
      var tabIndex = template.getAttribute('index2');
      var selectHideButton = templateContent.querySelector('.select__hide-button');
      selectHideButton.addEventListener('click', this.togglePopup);
      var selectInput = templateContent.querySelector('.select__input');
      selectInput.addEventListener('input', this.handleInputChange);
      selectInput.tabIndex = tabIndex;
      var shadowRoot = this.attachShadow({
        mode: "open"
      });
      shadowRoot.appendChild(templateContent);
      this.popup = shadowRoot.querySelector('.select__container');
      this.input = shadowRoot.querySelector('.select__input');
      this.selectContainer = shadowRoot.querySelector('.select__container');
      this.select = shadowRoot.querySelector('.select');
      document.querySelector('html').addEventListener('click', this.handleExternalClick);
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('%c%s', 'background: cadetblue; padding: 8px;', 'attributeChangedCallback ' + name);
      if (name === 'options') {
        this.setOptions(JSON.parse(newValue), this.popup);
        var tabIndex = +this.getAttribute('index');
        this.select.querySelector('.select__field').tabIndex = -1;
        this.select.querySelector('.select__input').tabIndex = tabIndex;
        this.select.querySelector('.select__hide-button').tabIndex = tabIndex + 1;
        var newValue1 = this.getAttribute('value1');
        if (newValue1) {
          // TODO должен как-то в init выполняться
          this.select.querySelector('.select__input').value = this.getAttribute('value1');
        }
      }
      if (name === 'mix' && newValue) {
        var newClasses = Array.isArray(newValue) ? newValue : [newValue];
        var input = this.select.querySelector('.select__field');
        newClasses.forEach(function (className) {
          return input.classList.add(className);
        });
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var selectHideButton = this.select.querySelector('.select__hide-button');
      selectHideButton.removeEventListener('click', this.togglePopup);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['options', 'mix'];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("select-with-search", SelectWithSearch); // (2)

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
      console.log('%c' + 'init', 'color: #3fcbff');
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
function connectedCallback() {
  console.log('%c' + 'connectedCallback ' + this.getAttribute('options'), 'color: #3fcbff');
}
function attributeChangedCallback(name, oldVal, newVal) {
  console.log('%c' + 'attributeChangedCallback', 'color: #3fcbff');
}
Select.prototype.connectedCallback = connectedCallback;
Select.prototype.attributeChangedCallback = attributeChangedCallback;
customElements.define('select-with-options', Select);

//# sourceURL=webpack://recipe-cards/./src/app/components/select/index.js?");

/***/ }),

/***/ "./src/app/components/simple-comp/index.js":
/*!*************************************************!*\
  !*** ./src/app/components/simple-comp/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html_loader_template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-loader!./template.html */ "./node_modules/html-loader/dist/cjs.js!./src/app/components/simple-comp/template.html");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

function SimpleComp() {
  var superCtor = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' ? function () {
    return Reflect.construct(HTMLElement, arguments, this.constructor);
  } : function () {
    return HTMLElement.apply(this, arguments) || this;
  };
  var $_ = superCtor.apply(this, arguments);
  $_.nothing = null;
  $_.padding = 0;
  $_.message = '';
  return $_;
}
function connectedCallback() {
  // console.log('%c' + 'connectedCallback 1', 'color: #3fcbff');

  // document.querySelector('.section').appendChild(div);
}
SimpleComp.prototype.connectedCallback = connectedCallback;
SimpleComp.prototype.constructor = SimpleComp;
Object.setPrototypeOf(SimpleComp, HTMLElement);
customElements.define('simple-comp', SimpleComp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleComp);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/components/select-with-search/style.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/components/select-with-search/style.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.select__container {
  position: absolute;
  background: white;
  display: block;
  border: 1px solid #E5E5E5;
  width: 180px;
  box-shadow: 0px 2px 8px 0px rgb(34 60 80 / 20%);
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
  grid-template-columns: 182px 24px;
  gap: 4px;
  align-items: center;
}

.select__input::after {
  content: 'v';
}`, "",{"version":3,"sources":["webpack://./src/app/components/select-with-search/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,+CAA+C;AACjD;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd","sourcesContent":[".select__container {\n  position: absolute;\n  background: white;\n  display: block;\n  border: 1px solid #E5E5E5;\n  width: 180px;\n  box-shadow: 0px 2px 8px 0px rgb(34 60 80 / 20%);\n}\n\n.select__option {\n  padding: 8px;\n  border-bottom: 1px solid #E5E5E5;\n}\n\n.select__option:hover {\n  background-color: #F8AE29;\n}\n\n.select__field {\n  display: grid;\n  grid-template-columns: 182px 24px;\n  gap: 4px;\n  align-items: center;\n}\n\n.select__input::after {\n  content: 'v';\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  width: 100vw;\n  height: 100vh;\n}\n\nbody {\n  font-family: monospace;\n  color: #1B1D19;\n}\n\n.page {\n  padding: 24px;\n  display: grid;\n  grid-template-columns: 1fr 800px 1fr;\n}\n\n.page__title {\n  display: grid;\n  justify-content: center;\n}\n\n.table {\n  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);\n}\n\n.table__head {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 36px 36px;\n  height: 42px;\n  background: #DBB6A4;\n}\n\n.table__head div {\n  /* border: 4px solid white; */\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  padding: 8px 0px;\n  border-bottom: 0;\n}\n\n.table__head div:not(:last-child) {\n  border-right: 0;\n}\n\n/* TODO миксин */\n.table__row {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 32px 32px;\n  border: 1px solid #E5E5E5;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.table__row:last-child {\n  border: 1px solid #E5E5E5;\n}\n\n.table__cell {\n  padding: 8px;\n  border-bottom: 0;\n}\n\n.table__cell:not(:last-child) {\n  border-right: 0px;\n}\n\n.table {\n  width: 752px;\n  font-size: 16px;\n  color: #1B1D19;\n  margin: 24px;\n}\n\n.table button {\n  padding: 0px;\n}\n\n.table input {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n}\n\n.add-button {\n  background-image: url(edit-icon.svg);\n  background-size: 100%;\n  width: 32px;\n  height: 32px;\n  /* background: mediumaquamarine; */\n  border: none;\n  background-color: transparent;\n}\n\n.delete-button {\n  background-image: url(cancell-icon.svg);\n  background-size: 100%;\n  width: 32px;\n  height: 32px;\n  /* background: mediumaquamarine; */\n  border: none;\n  background-color: transparent;\n}\n\n.table input:focus {\n  border: 1px solid #d9d9d9;\n  outline-color: #d9d9d9;\n}\n\n.table input:focus-visible {\n  border: 1px solid #d9d9d9;\n  outline-color: #d9d9d9;\n}\n\n.table input:active {\n  border: 1px solid red;\n}\n\n.table__cell_type_ingredients div:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.table__cell_type_units div:not(:last-child) {\n  margin-bottom: 4px;\n}\n\n.text-input input {\n  width: 192px;\n}\n\n.table__active-button {\n  padding: 0;\n  display: grid;\n  align-items: center;\n}\n\n.create-card-button {\n  background-color: #F8AE29;\n  width: 192px;\n  height: 42px;\n  border-radius: 16px;\n  border: none;\n  font-family: monospace;\n  color: #1B1D19;\n  font-size: 14px;\n}\n\n.create-card-button:hover {\n  background-color: #EEA729;\n}\n\n.copy-card-button {\n  background-color: #B76C49;\n  width: 192px;\n  height: 42px;\n  border-radius: 16px;\n  border: none;\n  font-family: monospace;\n  color: #1B1D19;\n  font-size: 14px;\n}\n\n.copy-card-button:hover {\n  background-color: #a86342;\n}\n\n.active-buttons {\n  margin: 24px;\n  margin-top: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  gap: 10px;\n  font-family: monospace;\n  font-size: 14px;\n}\n\n.title {\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  stroke: #000000;\n}\n\n.content {\n  font-size: 16px;\n  font-family: 'FreeMono';\n  fill: #000000;\n}\n\n.preparing {\n  font-style: italic;\n  font-size: 24px;\n  font-family: 'FreeMono';\n  text-align: center;\n  fill: #000000;\n}\n\n.preparing__content {\n  font-family: 'FreeMono';\n  font-size: 16px;\n  fill: #000000;\n}\n\n.recipe__container {\n  fill: transparent;\n  stroke: black;\n  stroke-width: 1;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.section {\n  display: flex;\n  margin: 0px 24px;\n  align-items: center;\n  gap: 24px;\n  font-size: 16px;\n}\n\n.section input {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n  padding-right: 24px;\n  width: 272px;\n}\n\n.section h2 {\n  width: 116px;\n}\n\n.directions {\n  margin: 0px 24px 36px;\n  font-size: 16px;\n}\n\n.directions textarea {\n  border: none;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  font-size: 16px;\n  padding-right: 24px;\n  width: 416px;\n}\n\n.hidden {\n  display: none;\n}\n\n.menu__container {\n  margin: 16px;\n  margin-left: 0;\n}\n\n.menu__head {\n  display: grid;\n  grid-template-columns: 226px 226px 226px 36px 36px;\n  height: 42px;\n  background: #DBB6A4;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/html-loader/dist/cjs.js!./src/app/components/select-with-search/template.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./src/app/components/select-with-search/template.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `// Module
var code = \`<template id="select-with-search">
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
      /* background-image: url(./app/components/select-with-search/hide-select-button.svg); */
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
\`;
// Exports
export default code;`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/cjs.js!./src/app/components/simple-comp/template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/html-loader/dist/cjs.js!./src/app/components/simple-comp/template.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `// Module
var code = \`<div id="nothing"></div>
\`;
// Exports
export default code;`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/app/components/select-with-search/style.css":
/*!*********************************************************!*\
  !*** ./src/app/components/select-with-search/style.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/app/components/select-with-search/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/units.json":
/*!************************!*\
  !*** ./src/units.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"version":"1.0","id":1,"name":"л"},{"id":2,"name":["кочан","кочана"]},{"id":3,"name":"шт"},{"id":4,"name":["крупная","крупный"]},{"id":5,"name":"ст.л"},{"id":6,"name":"ч.л"},{"id":7,"name":"по вкусу"},{"id":8,"name":"г"},{"id":9,"name":["зубчик","зубчика","зубчиков"]},{"id":10,"name":["банка","банки","банок"]},{"id":11,"name":"мл"},{"id":12,"name":["головка","головки","головок"]},{"id":13,"name":["пучок","пучка","пучков"]},{"id":14,"name":["большая","большие"]},{"id":15,"name":["стебель","стебля","стеблей"]},{"id":16,"name":["м. пучок","м. пучка"]},{"id":17,"name":["стакан","стакана","стаканов"]},{"id":18,"name":["кусок","куска","кусков"]},{"id":19,"name":["горсть","горсти","горстей"]},{"id":20,"name":"кг"}]');

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
/* harmony import */ var _app_components_select_with_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/select-with-search */ "./src/app/components/select-with-search/index.js");
/* harmony import */ var _app_components_simple_comp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/components/simple-comp */ "./src/app/components/simple-comp/index.js");
/* harmony import */ var _ingredients_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingredients.json */ "./src/ingredients.json");
/* harmony import */ var _recipes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes.json */ "./src/recipes.json");
/* harmony import */ var _units_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./units.json */ "./src/units.json");
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

// import * as menu from './menu.css';





// TODO в константы капсом



var ingredients = JSON.stringify(_ingredients_json__WEBPACK_IMPORTED_MODULE_5__);
var recipes = JSON.stringify(_recipes_json__WEBPACK_IMPORTED_MODULE_6__);
var units = JSON.stringify(_units_json__WEBPACK_IMPORTED_MODULE_7__);
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
  tableAddButton.onclick = addRow;
  tableAddButtonContainer.appendChild(tableAddButton);
  var tableDeleteButtonContainer = document.createElement('div');
  tableDeleteButtonContainer.className = 'table__cell table__active-button';
  var tableDeleteButton = document.createElement('button');
  tableDeleteButton.className = 'delete-button';
  tableDeleteButton.onclick = removeRow;
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
    var recipeSelectorContainer, recipeSelector, categoryContainer, categorySelector, cardsNumberSelect1, cardsNumberSelect2;
    return _regeneratorRuntime().wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('%c' + 'init 1', 'color: #3fcbff');

          // TODO переделать не через windows
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

          // console.log('%c' + 'init 2', 'color: green');
          cardsNumberSelect1 = document.querySelector('.cards__number1');
          cardsNumberSelect2 = document.querySelector('.cards__number2');
          if (cardsNumberSelect1) {
            _context.next = 1;
            break;
          }
          return _context.abrupt("return");
        case 1:
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
        case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ3BCLElBQU03TCxHQUFHLEdBQUduUixRQUFRLENBQUNnQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDLElBQU1zVyxVQUFVLEdBQUcsSUFBSUMsYUFBYSxDQUFDLENBQUM7RUFDdEMsSUFBTTdMLE1BQU0sR0FBRzRMLFVBQVUsQ0FBQ0UsaUJBQWlCLENBQUNySCxHQUFHLENBQUM7RUFDaEQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNFO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7QUFDQSxDQUFDO0FBRUhqQyxNQUFNLENBQUMyRyxVQUFVLEdBQUdBLFVBQVU7QUFDOUIzRyxNQUFNLENBQUM4TixPQUFPLEdBQUdBLE9BQU87QUFDeEI7QUFDQTlOLE1BQU0sQ0FBQ3VOLFdBQVcsR0FBR0EsV0FBVyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qtd2l0aC1zZWFyY2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2ltcGxlLWNvbXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC13aXRoLXNlYXJjaC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9zcmMvc3ZnMS5jc3MiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC13aXRoLXNlYXJjaC90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zaW1wbGUtY29tcC90ZW1wbGF0ZS5odG1sIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qtd2l0aC1zZWFyY2gvc3R5bGUuY3NzPzU0MzgiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL3NyYy9zdmcxLmNzcz85MTEyIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlY2lwZS1jYXJkcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVjaXBlLWNhcmRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZWNpcGUtY2FyZHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgY29tcG9uZW50VGVtcGxhdGUgZnJvbSAnaHRtbC1sb2FkZXIhLi90ZW1wbGF0ZS5odG1sJztcbmltcG9ydCAqIGFzIGNzcyBmcm9tICcuL3N0eWxlLmNzcyc7XG5cbmNsYXNzIFNlbGVjdFdpdGhTZWFyY2ggZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNvbW1vbk9wdGlvbnMgPSBbXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkgeyByZXR1cm4gWydvcHRpb25zJywgJ21peCddOyB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc29sZS5sb2coJyVjJyArICdjb25uZWN0ZWQnLCAnY29sb3I6IGdyZWVuJyk7XG5cbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXdpdGgtc2VhcmNoXCIpKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gU3RyaW5nLnJhd2Ake2NvbXBvbmVudFRlbXBsYXRlfWA7XG4gICAgICBpZiAoIXRleHQpIHRocm93IG5ldyBFcnJvcignTm8gdGVtcGxhdGUuJyk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmViZWdpbicsIHRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Qtd2l0aC1zZWFyY2hcIik7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSkuY29udGVudDtcblxuICAgIHRoaXMuY29udGVudCA9IHRlbXBsYXRlQ29udGVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcblxuICAgIGNvbnN0IHRhYkluZGV4ID0gdGVtcGxhdGUuZ2V0QXR0cmlidXRlKCdpbmRleDInKTtcblxuICAgIGNvbnN0IHNlbGVjdEhpZGVCdXR0b24gPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGlkZS1idXR0b24nKTtcbiAgICBzZWxlY3RIaWRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQb3B1cCk7XG5cbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pbnB1dCcpO1xuICAgIHNlbGVjdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSk7XG4gICAgc2VsZWN0SW5wdXQudGFiSW5kZXggPSB0YWJJbmRleDtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGVDb250ZW50KTtcblxuICAgIHRoaXMucG9wdXAgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2NvbnRhaW5lcicpO1xuICAgIHRoaXMuaW5wdXQgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0Jyk7XG4gICAgdGhpcy5zZWxlY3RDb250YWluZXIgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2NvbnRhaW5lcicpO1xuICAgIHRoaXMuc2VsZWN0ID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0Jyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUV4dGVybmFsQ2xpY2spO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKCclYyVzJywgJ2JhY2tncm91bmQ6IGNhZGV0Ymx1ZTsgcGFkZGluZzogOHB4OycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgJyArIG5hbWUpO1xuICAgIGlmIChuYW1lID09PSAnb3B0aW9ucycpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhKU09OLnBhcnNlKG5ld1ZhbHVlKSwgdGhpcy5wb3B1cCk7XG5cbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gK3RoaXMuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuXG4gICAgICB0aGlzLnNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19maWVsZCcpLnRhYkluZGV4ID0gLTE7XG4gICAgICB0aGlzLnNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19pbnB1dCcpLnRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICB0aGlzLnNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaWRlLWJ1dHRvbicpLnRhYkluZGV4ID0gdGFiSW5kZXggKyAxO1xuXG4gICAgICBjb25zdCBuZXdWYWx1ZTEgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUxJyk7XG5cbiAgICAgIGlmIChuZXdWYWx1ZTEpIHtcbiAgICAgICAgLy8gVE9ETyDQtNC+0LvQttC10L0g0LrQsNC6LdGC0L4g0LIgaW5pdCDQstGL0L/QvtC70L3Rj9GC0YzRgdGPXG4gICAgICAgIHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2lucHV0JykudmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUxJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09ICdtaXgnICYmIG5ld1ZhbHVlKSB7XG4gICAgICBjb25zdCBuZXdDbGFzc2VzID0gQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkgPyBuZXdWYWx1ZSA6IFtuZXdWYWx1ZV07XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2ZpZWxkJyk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4gaW5wdXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpKTtcbiAgICB9XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCBzZWxlY3RIaWRlQnV0dG9uID0gdGhpcy5zZWxlY3QucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGlkZS1idXR0b24nKTtcbiAgICBzZWxlY3RIaWRlQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQb3B1cCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hTdHJpbmcgPSAodGhpcy5pbnB1dC52YWx1ZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuc2V0T3B0aW9ucyhcbiAgICAgIHRoaXMuY29tbW9uT3B0aW9ucy5maWx0ZXIoKHsgbGFiZWwgfSkgPT4gbGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcpKSxcbiAgICAgIHRoaXMucG9wdXAsXG4gICAgICB0cnVlLFxuICAgICk7XG5cbiAgICAvLyDQn9C10YDQtdC00LXQu9Cw0YLRjCDQsiBPcGVuINC4IENsb3NlXG4gICAgdGhpcy5wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH1cblxuICBzZXRPcHRpb25zID0gKG9wdGlvbnMsIHBvcHVwLCBpc0ZpbHRlcikgPT4ge1xuICAgIHBvcHVwLmlubmVySFRNTCA9IG51bGw7XG5cbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgcG9wdXApKTtcblxuICAgIGlmICghaXNGaWx0ZXIpIHtcbiAgICAgIHRoaXMuY29tbW9uT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgc2V0T3B0aW9uID0gKHsgaWQsIGxhYmVsIH0sIHBvcHVwLCBpc0RlZmF1bHQpID0+IHtcbiAgICBjb25zdCBvcHRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uTm9kZS5jbGFzc05hbWUgPSAnc2VsZWN0X19vcHRpb24nO1xuICAgIG9wdGlvbk5vZGUuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgb3B0aW9uTm9kZS5pZCA9IGlkO1xuICAgIG9wdGlvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNlbGVjdE9wdGlvbik7XG5cbiAgICBwb3B1cC5hcHBlbmRDaGlsZChvcHRpb25Ob2RlKTtcbiAgfVxuXG4gIGFkZE9wdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbHVlIHx8IHRoaXMub3B0aW9ucy5zb21lKCh7IGxhYmVsIH0pID0+IGxhYmVsID09PSBuZXdWYWx1ZSkpIHJldHVybjtcblxuICAgIHRoaXMubmV3T3B0aW9uID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2FkZE9wdGlvbicpKTtcblxuICAgIGlmICghdGhpcy5wb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgdGhpcy50b2dnbGVQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICB9XG5cbiAgc2VsZWN0T3B0aW9uID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVySFRNTDtcbiAgICB0aGlzLnRvZ2dsZVBvcHVwKCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0T3B0aW9uJykpO1xuICB9XG5cbiAgaGFuZGxlRXh0ZXJuYWxDbGljayA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBpZiAodGFyZ2V0LmlkICE9PSB0aGlzLmlkIHx8IChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoL3NlbGVjdC8pXG4gICAgICAgICYmICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RfX2hpZGUtYnV0dG9uJylcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMucG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzZWxlY3Qtd2l0aC1zZWFyY2hcIiwgU2VsZWN0V2l0aFNlYXJjaCk7IC8vICgyKVxuIiwiLy8gVE9ETyDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPLCDQutCw0Log0YHQtNC10LvQsNGC0Ywg0LDQtNGA0LXRgSDQvtGCIGFwcFxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBpbml0ID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc29sZS5sb2coJyVjJyArICdpbml0JywgJ2NvbG9yOiAjM2ZjYmZmJyk7XG5cbiAgICB0aGlzLnNvcnRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgLy8gdGhpcy5zZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAvLyAgIC5TRUxFQ1QpO1xuICAgIHRoaXMuc2VsZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgdGhpcy5nZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JykpO1xuXG4gICAgdGhpcy5hZGRPcHRpb25zKHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnNlbGVjdEVsZW1lbnQpO1xuICB9O1xuXG4gIHNvcnRPcHRpb25zID0gb3B0aW9ucyA9PiB7XG4gICAgdGhpcy5vcHRpb25zID0gWy4uLm9wdGlvbnNdXG4gICAgICAuc29ydCgoeyBuYW1lOiBuYW1lMSB9LCB7IG5hbWU6IG5hbWUyIH0pID0+IHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgY2FzZSBuYW1lMSA8IG5hbWUyOiByZXR1cm4gLTE7XG5cbiAgICAgICAgICBjYXNlIG5hbWUxID4gbmFtZTI6IHJldHVybiAxO1xuXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGFkZE9wdGlvbnMgPSBvcHRpb25zID0+IHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgoeyBpZCwgbmFtZSB9KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGlkOyBvcHRpb24uaW5uZXJIVE1MID0gbmFtZTtcbiAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9O1xuICBcbiAgdXBkYXRlT3B0aW9ucyA9IG9wdGlvbnMgPT4geyB0aGlzLnJlbW92ZUFsbE9wdGlvbnMoKTsgdGhpcy5zb3J0T3B0aW9ucyhvcHRpb25zKTsgdGhpcy5hZGRPcHRpb25zKHRoaXMub3B0aW9ucyk7IH07XG4gIFxuICByZW1vdmVBbGxPcHRpb25zID0gKCkgPT4geyB3aGlsZSAodGhpcy5zZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpIHsgdGhpcy5zZWxlY3RFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKTsgfSB9OyBcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICBjb25zb2xlLmxvZygnJWMnICsgJ2Nvbm5lY3RlZENhbGxiYWNrICcgKyB0aGlzLmdldEF0dHJpYnV0ZSgnb3B0aW9ucycpLCAnY29sb3I6ICMzZmNiZmYnKTtcbn1cblxuZnVuY3Rpb24gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIChuYW1lLCBvbGRWYWwsIG5ld1ZhbCkge1xuICBjb25zb2xlLmxvZygnJWMnICsgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaycsICdjb2xvcjogIzNmY2JmZicpO1xufVxuXG5TZWxlY3QucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gY29ubmVjdGVkQ2FsbGJhY2s7XG5TZWxlY3QucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaztcblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWxlY3Qtd2l0aC1vcHRpb25zJywgU2VsZWN0KTtcblxuLy8jIHNvdXJjZVVSTD13ZWJwYWNrOi8vcmVjaXBlLWNhcmRzLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC9pbmRleC5qcz9cIik7XG4iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnaHRtbC1sb2FkZXIhLi90ZW1wbGF0ZS5odG1sJztcblxuZnVuY3Rpb24gU2ltcGxlQ29tcCgpIHtcbiBjb25zdCBzdXBlckN0b3IgPSAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnKSA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QoSFRNTEVsZW1lbnQsIGFyZ3VtZW50cywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEhUTUxFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfTtcbiAgY29uc3QgJF8gPSBzdXBlckN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgJF8ubm90aGluZyA9IG51bGw7XG4gICRfLnBhZGRpbmcgPSAwO1xuICAkXy5tZXNzYWdlID0gJyc7XG4gIHJldHVybiAkXztcbn1cblxuZnVuY3Rpb24gY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gIC8vIGNvbnNvbGUubG9nKCclYycgKyAnY29ubmVjdGVkQ2FsbGJhY2sgMScsICdjb2xvcjogIzNmY2JmZicpO1xuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uJykuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuU2ltcGxlQ29tcC5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSBjb25uZWN0ZWRDYWxsYmFjaztcblNpbXBsZUNvbXAucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2ltcGxlQ29tcDtcbk9iamVjdC5zZXRQcm90b3R5cGVPZihTaW1wbGVDb21wLCBIVE1MRWxlbWVudCk7XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2ltcGxlLWNvbXAnLCBTaW1wbGVDb21wKTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ29tcDsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdF9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIHdpZHRoOiAxODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYigzNCA2MCA4MCAvIDIwJSk7XG59XG5cbi5zZWxlY3RfX29wdGlvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG59XG5cbi5zZWxlY3RfX29wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEFFMjk7XG59XG5cbi5zZWxlY3RfX2ZpZWxkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxODJweCAyNHB4O1xuICBnYXA6IDRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlbGVjdF9faW5wdXQ6OmFmdGVyIHtcbiAgY29udGVudDogJ3YnO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlbGVjdC13aXRoLXNlYXJjaC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlbGVjdF9fY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYigzNCA2MCA4MCAvIDIwJSk7XFxufVxcblxcbi5zZWxlY3RfX29wdGlvbiB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcXG59XFxuXFxuLnNlbGVjdF9fb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEFFMjk7XFxufVxcblxcbi5zZWxlY3RfX2ZpZWxkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4MnB4IDI0cHg7XFxuICBnYXA6IDRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZWxlY3RfX2lucHV0OjphZnRlciB7XFxuICBjb250ZW50OiAndic7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZWRpdC1pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImNhbmNlbGwtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgY29sb3I6ICMxQjFEMTk7XG59XG5cbi5wYWdlIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODAwcHggMWZyO1xufVxuXG4ucGFnZV9fdGl0bGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRhYmxlX19oZWFkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjZweCAyMjZweCAyMjZweCAzNnB4IDM2cHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogI0RCQjZBNDtcbn1cblxuLnRhYmxlX19oZWFkIGRpdiB7XG4gIC8qIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlOyAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi50YWJsZV9faGVhZCBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLyogVE9ETyDQvNC40LrRgdC40L0gKi9cbi50YWJsZV9fcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMjZweCAyMjZweCAyMjZweCAzMnB4IDMycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi50YWJsZV9fcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xufVxuXG4udGFibGVfX2NlbGwge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi50YWJsZV9fY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiA3NTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzFCMUQxOTtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG4udGFibGUgYnV0dG9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGFibGUgaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC8qIGJhY2tncm91bmQ6IG1lZGl1bWFxdWFtYXJpbmU7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIC8qIGJhY2tncm91bmQ6IG1lZGl1bWFxdWFtYXJpbmU7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50YWJsZSBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIG91dGxpbmUtY29sb3I6ICNkOWQ5ZDk7XG59XG5cbi50YWJsZSBpbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgb3V0bGluZS1jb2xvcjogI2Q5ZDlkOTtcbn1cblxuLnRhYmxlIGlucHV0OmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuLnRhYmxlX19jZWxsX3R5cGVfaW5ncmVkaWVudHMgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi50YWJsZV9fY2VsbF90eXBlX3VuaXRzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4udGV4dC1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxOTJweDtcbn1cblxuLnRhYmxlX19hY3RpdmUtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZS1jYXJkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEFFMjk7XG4gIHdpZHRoOiAxOTJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjMUIxRDE5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jcmVhdGUtY2FyZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVBNzI5O1xufVxuXG4uY29weS1jYXJkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNzZDNDk7XG4gIHdpZHRoOiAxOTJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjMUIxRDE5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb3B5LWNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4NjM0Mjtcbn1cblxuLmFjdGl2ZS1idXR0b25zIHtcbiAgbWFyZ2luOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHN0cm9rZTogIzAwMDAwMDtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xuICBmaWxsOiAjMDAwMDAwO1xufVxuXG4ucHJlcGFyaW5nIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZpbGw6ICMwMDAwMDA7XG59XG5cbi5wcmVwYXJpbmdfX2NvbnRlbnQge1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmaWxsOiAjMDAwMDAwO1xufVxuXG4ucmVjaXBlX19jb250YWluZXIge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VjdGlvbiBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgd2lkdGg6IDI3MnB4O1xufVxuXG4uc2VjdGlvbiBoMiB7XG4gIHdpZHRoOiAxMTZweDtcbn1cblxuLmRpcmVjdGlvbnMge1xuICBtYXJnaW46IDBweCAyNHB4IDM2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRpcmVjdGlvbnMgdGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MTZweDtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tZW51X19jb250YWluZXIge1xuICBtYXJnaW46IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ubWVudV9faGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI2cHggMjI2cHggMjI2cHggMzZweCAzNnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6ICNEQkI2QTQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlEQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlEQUF1QztFQUN2QyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELFlBQVk7RUFDWixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBjb2xvcjogIzFCMUQxOTtcXG59XFxuXFxuLnBhZ2Uge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4MDBweCAxZnI7XFxufVxcblxcbi5wYWdlX190aXRsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YWJsZSB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4udGFibGVfX2hlYWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI2cHggMjI2cHggMjI2cHggMzZweCAzNnB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYmFja2dyb3VuZDogI0RCQjZBNDtcXG59XFxuXFxuLnRhYmxlX19oZWFkIGRpdiB7XFxuICAvKiBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTsgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogOHB4IDBweDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi50YWJsZV9faGVhZCBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxufVxcblxcbi8qIFRPRE8g0LzQuNC60YHQuNC9ICovXFxuLnRhYmxlX19yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI2cHggMjI2cHggMjI2cHggMzJweCAzMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4udGFibGVfX3JvdzpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XFxufVxcblxcbi50YWJsZV9fY2VsbCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4udGFibGVfX2NlbGw6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQ6IDBweDtcXG59XFxuXFxuLnRhYmxlIHtcXG4gIHdpZHRoOiA3NTJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMUIxRDE5O1xcbiAgbWFyZ2luOiAyNHB4O1xcbn1cXG5cXG4udGFibGUgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRhYmxlIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChlZGl0LWljb24uc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgLyogYmFja2dyb3VuZDogbWVkaXVtYXF1YW1hcmluZTsgKi9cXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoY2FuY2VsbC1pY29uLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIC8qIGJhY2tncm91bmQ6IG1lZGl1bWFxdWFtYXJpbmU7ICovXFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRhYmxlIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBvdXRsaW5lLWNvbG9yOiAjZDlkOWQ5O1xcbn1cXG5cXG4udGFibGUgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgb3V0bGluZS1jb2xvcjogI2Q5ZDlkOTtcXG59XFxuXFxuLnRhYmxlIGlucHV0OmFjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YWJsZV9fY2VsbF90eXBlX2luZ3JlZGllbnRzIGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLnRhYmxlX19jZWxsX3R5cGVfdW5pdHMgZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4udGV4dC1pbnB1dCBpbnB1dCB7XFxuICB3aWR0aDogMTkycHg7XFxufVxcblxcbi50YWJsZV9fYWN0aXZlLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jcmVhdGUtY2FyZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QUUyOTtcXG4gIHdpZHRoOiAxOTJweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY29sb3I6ICMxQjFEMTk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jcmVhdGUtY2FyZC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQTcyOTtcXG59XFxuXFxuLmNvcHktY2FyZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I3NkM0OTtcXG4gIHdpZHRoOiAxOTJweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY29sb3I6ICMxQjFEMTk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5jb3B5LWNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhODYzNDI7XFxufVxcblxcbi5hY3RpdmUtYnV0dG9ucyB7XFxuICBtYXJnaW46IDI0cHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBzdHJva2U6ICMwMDAwMDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xcbiAgZmlsbDogIzAwMDAwMDtcXG59XFxuXFxuLnByZXBhcmluZyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZpbGw6ICMwMDAwMDA7XFxufVxcblxcbi5wcmVwYXJpbmdfX2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmaWxsOiAjMDAwMDAwO1xcbn1cXG5cXG4ucmVjaXBlX19jb250YWluZXIge1xcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XFxuICBzdHJva2U6IGJsYWNrO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4uYm9sZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMHB4IDI0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uc2VjdGlvbiBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNzJweDtcXG59XFxuXFxuLnNlY3Rpb24gaDIge1xcbiAgd2lkdGg6IDExNnB4O1xcbn1cXG5cXG4uZGlyZWN0aW9ucyB7XFxuICBtYXJnaW46IDBweCAyNHB4IDM2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5kaXJlY3Rpb25zIHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDQxNnB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tZW51X19jb250YWluZXIge1xcbiAgbWFyZ2luOiAxNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5tZW51X19oZWFkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNnB4IDIyNnB4IDIyNnB4IDM2cHggMzZweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJhY2tncm91bmQ6ICNEQkI2QTQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzdHJva2U6ICMwMDAwMDA7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgZmlsbDogIzAwMDAwMDtcbn1cblxuLnByZXBhcmluZyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmaWxsOiAjMDAwMDAwO1xufVxuXG4ucHJlcGFyaW5nX19jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmlsbDogIzAwMDAwMDtcbn1cblxuLnJlY2lwZV9fY29udGFpbmVyIHtcbiAgZmlsbDogd2hpdGU7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N2ZzEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHN0cm9rZTogIzAwMDAwMDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1mYW1pbHk6ICdGcmVlTW9ubyc7XFxuICBmaWxsOiAjMDAwMDAwO1xcbn1cXG5cXG4ucHJlcGFyaW5nIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiAnRnJlZU1vbm8nO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmlsbDogIzAwMDAwMDtcXG59XFxuXFxuLnByZXBhcmluZ19fY29udGVudCB7XFxuICBmb250LWZhbWlseTogJ0ZyZWVNb25vJztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZpbGw6ICMwMDAwMDA7XFxufVxcblxcbi5yZWNpcGVfX2NvbnRhaW5lciB7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIHN0cm9rZTogYmxhY2s7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IGAvLyBNb2R1bGVcbnZhciBjb2RlID0gXFxgPHRlbXBsYXRlIGlkPVwic2VsZWN0LXdpdGgtc2VhcmNoXCI+XG4gIDwhLS0gVE9ETyDRgdC00LXQu9Cw0YLRjCDRjdGC0L4g0LrQsNC6LdGC0L4g0YfQtdGA0LXQtyDQv9GA0L7Qv9GB0YsgLS0+XG4gIDxzdHlsZT5cbiAgICBAaW1wb3J0IFwiLi9tZW51LmNzc1wiO1xuICA8L3N0eWxlPlxuICA8c3R5bGU+XG4gICAgLnNlbGVjdF9fY29udGFpbmVyIHtcbiAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTVweCAqIDYpO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgICB3aWR0aDogMjEwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCAwcHggcmdiKDM0IDYwIDgwIC8gMjAlKTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC5zZWxlY3RfX29wdGlvbiB7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19vcHRpb246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4QUUyOTtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19maWVsZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTBweDtcbiAgICAgIGdhcDogNHB4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuc2VsZWN0OmZvY3VzLXZpc2libGUge1xuICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigxMTAsIDAsIDApO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDUyLCA0LCA0KTtcbiAgICB9XG5cbiAgICAjczE6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgIzFhMWQ3NTtcbiAgICB9XG5cbiAgICBidXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgI0IwQjBCMDtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19pbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLyogcGFkZGluZy1yaWdodDogMjRweDsgKi9cbiAgICB9XG5cbiAgICAuc2VsZWN0X19pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjQjBCMEIwO1xuICAgIH1cblxuICAgIC5zZWxlY3RfX2lucHV0X3Nob3J0IHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RfX2hpZGUtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2FwcC9jb21wb25lbnRzL3NlbGVjdC13aXRoLXNlYXJjaC9oaWRlLXNlbGVjdC1idXR0b24uc3ZnKTsgKi9cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBsZWZ0OiAxODBweDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDhweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLnNlbGVjdF9fY29udGFpbmVyLmhpZGUge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbiBpbnB1dCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLmRhdGUtaW5wdXRfc2hvcnQgaW5wdXQge1xuICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgfVxuXG4gICAgLmRhdGUtaW5wdXRfc2hvcnQgYnV0dG9uIHtcbiAgICAgIGxlZnQ6IDMycHg7XG4gICAgfVxuXG4gICAgLmRhdGUtaW5wdXRfc2hvcnQgKyAuc2VsZWN0X19jb250YWluZXJ7XG4gICAgICB3aWR0aDogNjhweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0X19maWVsZC5kYXRlLWlucHV0X3Nob3J0IHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjJweDtcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPCEtLSBUT0RPINGB0LTQtdC70LDRgtGMINGN0YLQviDRh9C10YDQtdC3IGIoKSAtLT5cbiAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RfX2ZpZWxkXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInNlbGVjdF9faW5wdXRcIiAvPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlbGVjdF9faGlkZS1idXR0b25cIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0X19jb250YWluZXIgIGhpZGVcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXFxgO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTtgO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYC8vIE1vZHVsZVxudmFyIGNvZGUgPSBcXGA8ZGl2IGlkPVwibm90aGluZ1wiPjwvZGl2PlxuXFxgO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTtgO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3ZnMS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N2ZzEuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGNzcyBmcm9tICcuL2luZGV4LmNzcyc7XG4vLyBpbXBvcnQgKiBhcyBtZW51IGZyb20gJy4vbWVudS5jc3MnO1xuaW1wb3J0ICogYXMgc3ZnMSBmcm9tICcuL3N2ZzEuY3NzJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zZWxlY3QnO1xuaW1wb3J0IFNlbGVjdFdpdGhTZWFyY2ggZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zZWxlY3Qtd2l0aC1zZWFyY2gnO1xuaW1wb3J0IFNpbXBsZUNvbXAgZnJvbSAnLi9hcHAvY29tcG9uZW50cy9zaW1wbGUtY29tcCc7XG5cbi8vIFRPRE8g0LIg0LrQvtC90YHRgtCw0L3RgtGLINC60LDQv9GB0L7QvFxuaW1wb3J0IGluZ3JlZGllbnRzSlNPTiBmcm9tICcuL2luZ3JlZGllbnRzLmpzb24nIHdpdGggeyB0eXBlOiBcImpzb25cIiB9O1xuaW1wb3J0IHJlY2lwZXNKU09OIGZyb20gJy4vcmVjaXBlcy5qc29uJztcbmltcG9ydCB1bml0c0pTT04gZnJvbSAnLi91bml0cy5qc29uJztcblxuY29uc3QgaW5ncmVkaWVudHMgPSBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50c0pTT04pO1xuY29uc3QgcmVjaXBlcyA9IEpTT04uc3RyaW5naWZ5KHJlY2lwZXNKU09OKTtcbmNvbnN0IHVuaXRzID0gSlNPTi5zdHJpbmdpZnkodW5pdHNKU09OKTtcblxuY29uc3QgYWRkUm93ID0gcmVjaXBlUm93ID0+IHtcbiAgY29uc3QgaW5ncmVkaWVudFNlbGVjdElkID0gYHMke3dpbmRvdy5tYXhJbmRleCArIDF9YDtcbiAgY29uc3QgdW5pdFNlbGVjdElkID0gYHMke3dpbmRvdy5tYXhJbmRleCArIDJ9YDtcblxuICBjb25zdCByb3dJbmRleCA9IHdpbmRvdy5yb3dJbmRleDtcblxuICBhZGRUYWJsZVJvdyh7IGluZ3JlZGllbnRTZWxlY3RJZCwgdW5pdFNlbGVjdElkLCByb3dJbmRleDogd2luZG93LnJvd0luZGV4LCAuLi5yZWNpcGVSb3cgfSk7XG4gIHdpbmRvdy5tYXhJbmRleCA9IHdpbmRvdy5tYXhJbmRleCArIDM7XG5cbiAgd2luZG93LnRhYmxlID0gW1xuICAgIC4uLndpbmRvdy50YWJsZSxcbiAgICB7XG4gICAgICByb3dJbmRleCxcbiAgICAgIGluZ3JlZGllbnRzOiB3aW5kb3dbaW5ncmVkaWVudFNlbGVjdElkXSxcbiAgICAgIHVuaXRzOiB3aW5kb3dbdW5pdFNlbGVjdElkXSxcbiAgICB9LFxuICBdO1xuXG4gIHVwZGF0ZUluZ3JlZGllbnRzKElOR1JFRElFTlRTKTtcbiAgdXBkYXRlVW5pdHMoVU5JVFMpO1xufVxuXG5jb25zdCByZW1vdmVSb3cgPSBldmVudCA9PiB7XG4gIGNvbnN0IHJvd0luZGV4ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ3Jvd2luZGV4Jyk7XG5cbiAgd2luZG93LnRhYmxlID0gd2luZG93LnRhYmxlLmZpbHRlcigoeyByb3dJbmRleDogaW5kZXggfSkgPT4gaW5kZXggIT09IHJvd0luZGV4KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFibGVfX3Jvd1tyb3dpbmRleD1cIiR7cm93SW5kZXh9XCJdYCkucmVtb3ZlKCk7XG59XG5cbiAgY29uc3QgZ2V0SW5ncmVkaWVudHMgPSAoKSA9PiBbLi4ud2luZG93LklOR1JFRElFTlRTLCAuLi53aW5kb3cuTkVXX0lOR1JFRElFTlRTXTtcbiAgY29uc3QgZ2V0VW5pdHMgPSAoKSA9PiBbLi4ud2luZG93LlVOSVRTLCAuLi53aW5kb3cuTkVXX1VOSVRTXTtcblxuICBjb25zdCB0cmltUm93ID0gKGxpbWl0LCB0ZXh0KSA9PiB0ZXh0LnNwbGl0KCcgJylcbiAgICAucmVkdWNlKChhY2MsIHdvcmQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGFjYy5sZW5ndGggLSAxO1xuICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gW3dvcmRdO1xuXG4gICAgICBjb25zdCBwcmV2RWxlbWVudCA9IGFjY1tsYXN0RWxlbWVudF07XG5cbiAgICAgIHJldHVybiBwcmV2RWxlbWVudC5sZW5ndGggPCAzXG4gICAgICAgID8gWy4uLmFjYy5zbGljZSgwLCAtMSksIGAke3ByZXZFbGVtZW50fSAke3dvcmR9YF1cbiAgICAgICAgOiBbLi4uYWNjLCB3b3JkXTtcbiAgICB9LCBbXSlcbiAgICAucmVkdWNlKChhY2MsIHdvcmQpID0+IHtcbiAgICAgIGlmICghYWNjLmxlbmd0aCkgcmV0dXJuIFt3b3JkXTsgY29uc3QgbGFzdEluZGV4ID0gYWNjLmxlbmd0aCAtIDE7IGNvbnN0IGxhc3RFbGVtZW50ID0gYWNjW2xhc3RJbmRleF07IGNvbnN0IHJvd1dpdGhOZXdXb3JkID0gYCR7bGFzdEVsZW1lbnR9ICR7d29yZH1gOyByZXR1cm4gcm93V2l0aE5ld1dvcmQubGVuZ3RoIDwgbGltaXQgPyBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgcm93V2l0aE5ld1dvcmRdIDogWy4uLmFjYywgd29yZF07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgY3JlYXRlQ2FyZFN2ZyA9IChyZWNpcGUsIHgwLCB5MCkgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRYID0gK3gwO1xuICAgICAgY29uc3Qgc3RhcnRZID0gK3kwO1xuXG4gICAgICBsZXQgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGFpbmVyJyk7XG5cbiAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHN2Zyk7XG4gICAgICB9XG5cbiAgICAgIHN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5TVkcsIHsgaWQ6ICdzdmcnLCB3aWR0aDogbW0oMTQ4KSwgaGVpZ2h0OiBtbSgyMTApIH0pO1xuXG4gICAgICBjb25zdCBkZWZzID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkRFRlMpO1xuICAgICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuU1RZTEUpO1xuICAgICAgY29uc3QgZG9jdSA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoXCI8eG1sPjwveG1sPlwiLCBcImFwcGxpY2F0aW9uL3htbFwiKTtcbiAgICAgIGNvbnN0IGNkYXRhID0gZG9jdS5jcmVhdGVDREFUQVNlY3Rpb24oYCR7d2luZG93LmNzc31gKTtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNkYXRhKTtcbiAgICAgIGRlZnMuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuICAgICAgY29uc3QgcmVjaXBlR3JvdXAgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuR1JPVVApO1xuXG4gICAgICBjb25zdCByZWNpcGVDb250YWluZXIgPSBjcmVhdGVTdmdFbGVtZW50KFxuICAgICAgICBUWVBFLlJFQ1RBTkdMRSwge1xuICAgICAgICB4OiBtbShzdGFydFgpLFxuICAgICAgICB5OiBtbShzdGFydFkpLFxuICAgICAgICB3aWR0aDogbW0oQ0FSRF9XSURUSCksXG4gICAgICAgIGhlaWdodDogbW0oQ0FSRF9IRUlHSFQpLFxuICAgICAgICBjbGFzczogJ3JlY2lwZV9fY29udGFpbmVyJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBpZEluQ2F0ZWdvcnksXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGluZ3JlZGllbnRzLFxuICAgICAgICBkaXJlY3Rpb25zXG4gICAgICB9ID0gcmVjaXBlO1xuXG4gICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZVN2Z0VsZW1lbnQoXG4gICAgICAgIFRZUEUuUkVDVEFOR0xFLCB7XG4gICAgICAgIHg6IG1tKHN0YXJ0WCksXG4gICAgICAgIHk6IG1tKHN0YXJ0WSsgQkFTRV9PRkZTRVQgLyAyKSxcbiAgICAgICAgd2lkdGg6IG1tKENBUkRfV0lEVEgpLFxuICAgICAgICBoZWlnaHQ6IG1tKEJBU0VfT0ZGU0VUIC0gQkFTRV9PRkZTRVQgLyA0KSxcbiAgICAgICAgc3R5bGU6ICdzdHJva2U6IGdyYXk7IGZpbGw6IG5vbmUnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVjaXBlVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCAvIDIpLFxuICAgICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCksXG4gICAgICAgIGNsYXNzOiAndGl0bGUnLFxuICAgICAgICBzdHlsZTogYCR7dGl0bGUubGVuZ3RoID4gMjAgPyAnZm9udC1zaXplOiAxNnB4OycgOiAnJ31gXG4gICAgICB9LFxuICAgICAgICB0aXRsZVxuICAgICAgKTtcblxuICAgICAgY29uc3QgaW5ncmVkaWVudHNBbW91bnRPZkdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7IGNsYXNzOiAnY29udGVudCcgfSk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRNYWluVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4gICAgICAgIHg6IG1tKHN0YXJ0WCArIEJBU0VfT0ZGU0VUKSxcbiAgICAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQgKiAyKVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGluZ3JlZGllbnRQcm9kdWN0c1RleHQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgICB4OiBtbShzdGFydFggKyBQUk9EVUNUU19PRkZTRVQpLFxuICAgICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCAqIDIpXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaW5ncmVkaWVudHNPZmZzZXQgPSBpbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgeyBpbmdyZWRpZW50SWQsIC4uLnJlc3QgfSkgPT4ge1xuICAgICAgICAvLyBUT0RPINGB0LTQtdC70LDRgtGMINC/0L7Qu9GD0YfQtdC90LjQtSDQuNC90LPRgNC10LTQuNC10L3RgtC+0LIg0LzQtdGC0L7QtNC+0LxcbiAgICAgICAgY29uc3QgYSA9IGdldEluZ3JlZGllbnRzKCkuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gaW5ncmVkaWVudElkKTtcblxuICAgICAgICBjb25zdCBpbmdyZWRpZW50RWxlbWVudHNSb3dzID0gdHJpbVJvdyhJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCwgZ2V0SW5ncmVkaWVudHMoKS5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpbmdyZWRpZW50SWQpLmxhYmVsKTtcblxuICAgICAgICByZXR1cm4gWy4uLmFjYywgeyBpbmdyZWRpZW50SWQsIGluZ3JlZGllbnRFbGVtZW50c1Jvd3MsIC4uLnJlc3QgfV07XG4gICAgICB9LCBbXSlcbiAgICAgICAgLnJlZHVjZSgoYWNjLCB7IGFtb3VudE9mLCB1bml0SWQsIGluZGV4OiB1bml0SW5kZXgsIGlzQW5hbG9ndWUsIGluZ3JlZGllbnRJZCwgaW5ncmVkaWVudEVsZW1lbnRzUm93cyB9LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRmlyc3RSb3cgPSBpbmRleCA9PT0gMDsgY29uc3QgbGFzdFJvd0NvdW50ID0gaXNGaXJzdFJvdyA/IDEgOiBhY2NbYWNjLmxlbmd0aCAtIDFdLnJvd0NvdW50O1xuXG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2VkVW5pdElkID0gTnVtYmVyLmlzSW50ZWdlcih1bml0SW5kZXgpID8gYCR7dW5pdElkfV8ke3VuaXRJbmRleH1gIDogdW5pdElkO1xuICAgICAgICAgIGNvbnN0IHVuaXQgPSB3aW5kb3cuVU5JVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gcHJvY2Vzc2VkVW5pdElkKTtcblxuICAgICAgICAgIGNvbnN0IGFtb3VudE9mVW5pdEVsZW1lbnQgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgIHg6IG1tKHN0YXJ0WCArIEJBU0VfT0ZGU0VUKSxcbiAgICAgICAgICAgIGR5OiBpc0ZpcnN0Um93ID8gJzAnIDpcbiAgICAgICAgICAgICAgaXNBbmFsb2d1ZSA/ICcwLjhlbScgOiBgJHsobGFzdFJvd0NvdW50ICsgMSkgKiAwLjh9ZW1gXG4gICAgICAgICAgfSxcbiAgICAgICAgICAgIGDilqogJHthbW91bnRPZiB8fCAnJ30gJHt1bml0Py5sYWJlbH1gKTtcblxuICAgICAgICAgIGluZ3JlZGllbnRNYWluVGV4dC5hcHBlbmRDaGlsZChhbW91bnRPZlVuaXRFbGVtZW50KTtcblxuICAgICAgICAgIGNvbnN0IGluZ3JlZGllbnRPZmZzZXQgPSBpbmdyZWRpZW50RWxlbWVudHNSb3dzLnJlZHVjZSgoZWxlbWVudEFjYywgd29yZCwgd29yZEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkeSA9IGlzRmlyc3RSb3cgJiYgd29yZEluZGV4ID09PSAwID8gMCA6IHdvcmRJbmRleCA9PT0gMCAmJiAhaXNBbmFsb2d1ZSA/IDEuNiA6IDAuODtcblxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFJvdyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuICAgICAgICAgICAgICB4OiBtbShzdGFydFggKyBQUk9EVUNUU19PRkZTRVQpLFxuICAgICAgICAgICAgICBkeTogYCR7ZHl9ZW1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaXNBbmFsb2d1ZSA/IGDQuNC70LggJHt3b3JkLnRvTG93ZXJDYXNlKCl9YCA6IHdvcmQpOyBpbmdyZWRpZW50UHJvZHVjdHNUZXh0LmFwcGVuZENoaWxkKHByb2R1Y3RSb3cpO1xuXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudEFjYyArIGR5O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgcmV0dXJuIFsuLi5hY2MsIHsgcm93Q291bnQ6IGluZ3JlZGllbnRFbGVtZW50c1Jvd3MubGVuZ3RoLCBvZmZzZXQ6IGluZ3JlZGllbnRPZmZzZXQgfV07XG4gICAgICAgIH0sIFtdKTtcblxuICAgICAgLy8gY29uc3Qgc2VwYXJhdG9yT2Zmc2V0ID0gTWF0aC5mbG9vcihpbmdyZWRpZW50c09mZnNldC5yZWR1Y2UoKGFjYywgeyBvZmZzZXQgfSkgPT4gKGFjYyArIG9mZnNldCAqIDE2KSwgMCkpO1xuICAgICAgLy8gY29uc29sZS5sb2coJyVjJXMnLCAnYmFja2dyb3VuZDogY2FkZXRibHVlOyBwYWRkaW5nOiA4cHg7JywgSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudHNPZmZzZXQpICsgc2VwYXJhdG9yT2Zmc2V0KTtcblxuXG4gICAgICBpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudE1haW5UZXh0KTtcbiAgICAgIGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cC5hcHBlbmRDaGlsZChpbmdyZWRpZW50UHJvZHVjdHNUZXh0KTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQocmVjaXBlQ29udGFpbmVyKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKHJlY2lwZVRpdGxlKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cCk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChyZWNpcGVHcm91cCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAgICAgY29uc3QgZGlyZWN0aW9uc0dyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7XG4gICAgICAgIGNsYXNzOiAnY29udGVudCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb25zdCBkaXJlY3Rpb25zVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuICAgICAgLy8gICAvLyBUT0RPIDUyINCyINC60L7QvdGB0YLQsNC90YLRi1xuICAgICAgLy8gICB4OiBtbShzdGFydFggKyA1MiksXG4gICAgICAvLyAgIHk6IG1tKHN0YXJ0WSArIEJBU0VfT0ZGU0VUICsgRElSRUNUSU9OX1lfT0ZGU0VUKSxcbiAgICAgIC8vICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgICAvLyAgIGNsYXNzOiAncHJlcGFyaW5nJ1xuICAgICAgLy8gfSwgJ9Cf0YDQuNCz0L7RgtC+0LLQu9C10L3QuNC1Jyk7XG5cbiAgICAgIGNvbnN0IHNlcGFyYXRvck9mZnNldCA9IE1hdGguZmxvb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5nZXRCQm94KCkuaGVpZ2h0ICogMC4yNikgKyBCQVNFX09GRlNFVCAqIDIgKyBCQVNFX09GRlNFVCAvIDI7XG5cbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4gICAgICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuICAgICAgICB4OiBtbShzdGFydFggKyBDQVJEX1dJRFRIIC8gMiksXG4gICAgICAgIHk6IHNlcGFyYXRvck9mZnNldCArICdtbScsXG4gICAgICAgIGNsYXNzOiAndGl0bGUnLFxuICAgICAgICBzdHlsZTogYCR7dGl0bGUubGVuZ3RoID4gMjAgPyAnZm9udC1zaXplOiAxNnB4OycgOiAnJ31gXG4gICAgICB9LFxuICAgICAgICAn4oCUJ1xuICAgICAgKTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblxuICAgICAgY29uc3QgZGlyZWN0aW9uc01haW5UZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbiAgICAgICAgeDogbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQgLyAyKSxcbiAgICAgICAgeTogbW0oc3RhcnRZICsgc2VwYXJhdG9yT2Zmc2V0ICsgQkFTRV9PRkZTRVQgLyAyKSwgY2xhc3M6ICdwcmVwYXJpbmdfX2NvbnRlbnQnXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgUElYRUxfSU5fTU0gPSAwLjI2OyBkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgdHJpbVJvdyhESVJFQ1RJT05TX01BWF9DSEFSX0NPVU5ULCBkaXJlY3Rpb24pLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAocm93SW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbnNNYWluVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgICAgeDogbW0oc3RhcnRYICArIEJBU0VfT0ZGU0VUIC8gMiksXG4gICAgICAgICAgICAgIGR5OiBpbmRleCA9PT0gMCAmJiByb3dJbmRleCA9PT0gMCA/ICcwJyA6IHJvd0luZGV4ID09PSAwID8gJzEuNWVtJyA6ICcwLjhlbScsIGNsYXNzOiAnYm9sZCdcbiAgICAgICAgICAgIH0sIGAke2luZGV4ICsgMX0uYCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpcmVjdGlvbnNNYWluVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVTdmdFbGVtZW50KFRZUEUuVFNQQU4sIHtcbiAgICAgICAgICAgIHg6IHJvd0luZGV4ID09PSAwID8gbW0oc3RhcnRYICsgQkFTRV9PRkZTRVQgLyAyICsgMTYgKiAoYCR7aW5kZXh9YC5sZW5ndGggKyAxKSAqIFBJWEVMX0lOX01NKVxuICAgICAgICAgICAgICA6IG1tKHN0YXJ0WCAgKyBCQVNFX09GRlNFVCksIGR5OiByb3dJbmRleCA9PT0gMCA/ICcwJyA6IHJvd0luZGV4ID09PSAwID8gJzEuNWVtJyA6ICcwLjhlbSdcbiAgICAgICAgICB9LCByb3cpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc0dyb3VwKTtcbiAgICAgIHJlY2lwZUdyb3VwLmFwcGVuZENoaWxkKGRpcmVjdGlvbnNNYWluVGV4dCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAoKSA9PiB7XG4gICAgICBjcmVhdGVDYXJkU3ZnKHdpbmRvdy5zZWxlY3RlZFJlY2lwZSB8fCBjb3B5Q2FyZCgpLCAwLCAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRJbmdyZWRpZW50ID0gaW5ncmVkaWVudCA9PiB7XG4gICAgICBjb25zdCBpbmdyZWRpZW50cyA9IGdldEluZ3JlZGllbnRzKCk7XG4gICAgICBjb25zdCBuZXdJZCA9IE1hdGgubWF4KC4uLmluZ3JlZGllbnRzLm1hcCgoeyBpZCB9KSA9PiBpZCkpICsgMTtcblxuICAgICAgdXBkYXRlSW5ncmVkaWVudHMoWy4uLmluZ3JlZGllbnRzLCB7IGlkOiBuZXdJZCwgbGFiZWw6IGluZ3JlZGllbnQgfV0pO1xuXG4gICAgICB3aW5kb3cuTkVXX0lOR1JFRElFTlRTID0gWy4uLndpbmRvdy5ORVdfSU5HUkVESUVOVFMsIHsgaWQ6IG5ld0lkLCBsYWJlbDogaW5ncmVkaWVudCB9XTtcblxuICAgICAgcmV0dXJuIG5ld0lkO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFVuaXQgPSB1bml0ID0+IHtcbiAgICAgIGNvbnN0IHVuaXRzID0gZ2V0VW5pdHMoKTtcbiAgICAgIGNvbnN0IG5ld0lkID0gTWF0aC5tYXgoLi4udW5pdHMubWFwKCh7IGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgYSA9IC9fLy50ZXN0KGlkKSA/IGlkLm1hdGNoKC9eKFxcZCspLylbMV0gOiBpZDtcbiAgICAgICAgcmV0dXJuICthO1xuICAgICAgfSkpICsgMTtcblxuICAgICAgLy8gVE9ETyDQndGD0LbQvdC+INC70Lg/XG4gICAgICB1cGRhdGVVbml0cyhbLi4udW5pdHMsIHsgaWQ6IG5ld0lkLCBsYWJlbDogdW5pdCB9XSk7XG5cbiAgICAgIHdpbmRvdy5ORVdfVU5JVFMgPSBbLi4ud2luZG93Lk5FV19VTklUUywgeyBpZDogbmV3SWQsIGxhYmVsOiB1bml0fV07XG5cbiAgICAgIHJldHVybiBuZXdJZDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5Q2FyZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHdpbmRvdy50YWJsZS5yZWR1Y2UoKGFjYywgeyByb3dJbmRleCwgaW5ncmVkaWVudHMsIHVuaXRzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRWYWx1ZSA9IGluZ3JlZGllbnRzLmlucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBpbmdyZWRpZW50ID0gZ2V0SW5ncmVkaWVudHMoKS5maW5kKCh7IGxhYmVsIH0pID0+IGxhYmVsID09PSBpbmdyZWRpZW50VmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRJZCA9IGluZ3JlZGllbnQgPyBpbmdyZWRpZW50LmlkIDogYWRkSW5ncmVkaWVudChpbmdyZWRpZW50VmFsdWUpO1xuXG4gICAgICAgIGNvbnN0IGFtb3VudE9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhYmxlX19yb3dbcm93aW5kZXg9XCIke3Jvd0luZGV4fVwiXSAuYW1vdW50LW9mX19pbnB1dGApPy52YWx1ZTtcbiAgICAgICAgY29uc3QgdW5pdFZhbHVlID0gdW5pdHMuaW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB3aW5kb3cuVU5JVFMuZmluZCgoeyBsYWJlbCB9KSA9PiBsYWJlbCA9PT0gdW5pdFZhbHVlKTtcbiAgICAgICAgY29uc3QgdW5pdElkID0gdW5pdCA/IHVuaXQuaWQgOiBhZGRVbml0KHVuaXRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW5ncmVkaWVudElkLFxuICAgICAgICAgICAgYW1vdW50T2YsXG4gICAgICAgICAgICB1bml0SWQ6IE51bWJlci5pc0ludGVnZXIodW5pdElkKSA/IHVuaXRJZCA6ICt1bml0SWQuc3BsaXQoJ18nKVswXSxcbiAgICAgICAgICAgIC4uLighTnVtYmVyLmlzSW50ZWdlcih1bml0SWQpICYmIHsgaW5kZXg6ICt1bml0SWQuc3BsaXQoJ18nKVsxXSB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBjb25zdCBuZXdJbmdyZWRpZW50cyA9IHdpbmRvdy5ORVdfSU5HUkVESUVOVFMubWFwKCh7IGlkLCBsYWJlbCB9KSA9PiAoeyBpZCwgbmFtZTogbGFiZWwgfSkpLnJlZHVjZSgoaW5ncmVkaWVudEFjYywgaW5ncmVkaWVudCkgPT4gKFsuLi5pbmdyZWRpZW50QWNjLCAuLi5beyAuLi5pbmdyZWRpZW50LCBsaW5rZWRVbml0czogW119XV0pLCBbXSlcbiAgICAgIGNvbnN0IG5ld1VuaXRzID0gd2luZG93Lk5FV19VTklUUy5yZWR1Y2UoKHVuaXRBY2MsIHVuaXQpID0+IChbLi4udW5pdEFjYywgLi4uW3VuaXRdXSksIFtdKTtcbiAgICAgIGNvbnN0IG5ld0lkID0gTWF0aC5tYXgoLi4ud2luZG93LlJFQ0lQRVMubWFwKCh7IGlkIH0pID0+IGlkKSkgKyAxO1xuICAgICAgY29uc3QgdHlwZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZVR5cGVTZWxlY3QnKS5pbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHR5cGUgPSBPYmplY3QuZW50cmllcyhSRUNJUEVfVFlQRV9NQVApLmZpbmQoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgPT09IHR5cGVMYWJlbClbMF07XG4gICAgICBjb25zdCBpbkNhdGVnb3J5SWRzID0gd2luZG93LlJFQ0lQRVMuZmlsdGVyKCh7IHR5cGU6IHJlY2lwZVR5cGUgfSkgPT4gdHlwZSA9PT0gcmVjaXBlVHlwZSkubWFwKCh7IGlkSW5DYXRlZ29yeSB9KSA9PiBpZEluQ2F0ZWdvcnkpO1xuICAgICAgY29uc3QgaWRJbkNhdGVnb3J5ID0gTWF0aC5tYXgoLi4uKGluQ2F0ZWdvcnlJZHMubGVuZ3RoID8gaW5DYXRlZ29yeUlkcyA6IFsxXSkpICsgMTtcbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS10aXRsZScpLnZhbHVlO1xuICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb25zX190ZXh0YXJlYScpLnZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICAgIGNvbnN0IG51dHJpdGlvbmFsVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLW51dHJpdGlvbmFsLXZhbHVlJykudmFsdWUgfHwgbnVsbDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtdXJsJykudmFsdWUgfHwgbnVsbDtcblxuICAgICAgY29uc3QgbmV3UmVjaXBlID0ge1xuICAgICAgICBpZDogbmV3SWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0eXBlLFxuICAgICAgICBpZEluQ2F0ZWdvcnksXG4gICAgICAgIGluZ3JlZGllbnRzOiBhY2MsXG4gICAgICAgIGRpcmVjdGlvbnMsXG4gICAgICAgIG51dHJpdGlvbmFsVmFsdWUsXG4gICAgICAgIHVybCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gYCR7SlNPTi5zdHJpbmdpZnkobmV3UmVjaXBlLCBudWxsLCAyKX1cXG4ke0pTT04uc3RyaW5naWZ5KG5ld0luZ3JlZGllbnRzKX0gXFxuJHtKU09OLnN0cmluZ2lmeShuZXdVbml0cyl9fWA7XG5cbiAgICAgIGNvbnNvbGUubG9nKCclYyVzJywgJ2JhY2tncm91bmQ6IGNhZGV0Ymx1ZTsgcGFkZGluZzogOHB4OycsIHJlc3VsdCk7XG5cbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiBuZXdSZWNpcGU7XG4gICAgfVxuXG4gICAgY29uc3QgY29weVN2ZyA9ICgpID0+IHtcbiAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnJyk7XG5cbiAgICAgIHZhciBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcbiAgICAgIHZhciBzb3VyY2UgPSBzZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Zyk7XG5cbiAgICAgIGlmKCFzb3VyY2UubWF0Y2goL148c3ZnW14+XSt4bWxucz1cImh0dHBcXDpcXC9cXC93d3dcXC53M1xcLm9yZ1xcLzIwMDBcXC9zdmdcIi8pKXtcbiAgICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXjxzdmcvLCAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCInKTtcbiAgICAgIH1cblxuICAgICAgc291cmNlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+XFxyXFxuJyArIHNvdXJjZTtcblxuICAgICAgdmFyIHVybCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KHNvdXJjZSk7XG5cbiAgICAgIC8vIFRPRE8g0Y3RgtGDINC4INC/0L7QtNC+0LHQvdGL0LUg0YTRg9C90LrRhtC40Lgg0LIg0YXQtdC70L/QtdGAXG4gICAgICBjb25zdCBuZXdJZCA9IE1hdGgubWF4KC4uLndpbmRvdy5SRUNJUEVTLm1hcCgoeyBpZCB9KSA9PiBpZCkpICsgMTtcblxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBgJHtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLXRpdGxlJykudmFsdWV9YDtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFibGVSb3cgPSAoe1xuICAgICAgaW5ncmVkaWVudFNlbGVjdElkLFxuICAgICAgdW5pdFNlbGVjdElkLFxuICAgICAgcm93SW5kZXgsXG4gICAgICBpbmdyZWRpZW50SWQsXG4gICAgICBhbW91bnRPZixcbiAgICAgIHVuaXRJZCxcbiAgICAgIGluZGV4LFxuICAgIH0pID0+IHtcbiAgICAgIGNvbnN0IHRhYmxlQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2NvbnRlbnQnKTtcbiAgICAgIGNvbnN0IHRhYkluZGV4ID0gd2luZG93LnRhYkluZGV4O1xuXG4gICAgICBjb25zdCByb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByb3dFbGVtZW50LmNsYXNzTmFtZSA9ICd0YWJsZV9fcm93JztcblxuICAgICAgLy8gVE9ETyDRgdC00LXQu9Cw0YLRjCDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDRjdC70LXQvNC10L3RgtCwINGBINC/0LDRgNCw0LzQtdGC0YDQsNC80LhcbiAgICAgIC8vINCSINC40LTQtdCw0LvQtSDQtNC70Y8g0LLQu9C+0LbQtdC90L3Ri9GFXG4gICAgICBjb25zdCBpbmdyZWRpZW50c0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGluZ3JlZGllbnRzQ2VsbC5jbGFzc05hbWUgPSAndGFibGVfX2NlbGwnO1xuICAgICAgY29uc3QgaW5ncmVkaWVudHNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3Qtd2l0aC1zZWFyY2gnKTtcbiAgICAgIGluZ3JlZGllbnRzU2VsZWN0LmlkID0gaW5ncmVkaWVudFNlbGVjdElkO1xuICAgICAgaW5ncmVkaWVudHNDZWxsLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzU2VsZWN0KTtcblxuICAgICAgY29uc3QgY291bnRJbnB1dENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvdW50SW5wdXRDZWxsLmNsYXNzTmFtZSA9ICd0YWJsZV9fY2VsbCc7XG4gICAgICBjb25zdCBjb3VudElucHV0Q29udNCwaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY291bnRJbnB1dENvbnTQsGluZXIuY2xhc3NOYW1lID0gJ3RleHQtaW5wdXQnO1xuICAgICAgY29uc3QgY291bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBjb3VudElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICBjb3VudElucHV0LmNsYXNzTmFtZSA9ICdhbW91bnQtb2ZfX2lucHV0JztcbiAgICAgIGNvdW50SW5wdXQudGFiSW5kZXggPSB0YWJJbmRleCArIDU7XG4gICAgICBjb3VudElucHV0Q29udNCwaW5lci5hcHBlbmRDaGlsZChjb3VudElucHV0KTtcbiAgICAgIGNvdW50SW5wdXRDZWxsLmFwcGVuZENoaWxkKGNvdW50SW5wdXRDb2500LBpbmVyKTtcblxuICAgICAgY29uc3QgdW5pdHNDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB1bml0c0NlbGwuY2xhc3NOYW1lID0gJ3RhYmxlX19jZWxsJztcbiAgICAgIGNvbnN0IHVuaXRzU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0LXdpdGgtc2VhcmNoJyk7XG4gICAgICB1bml0c1NlbGVjdC5pZCA9IHVuaXRTZWxlY3RJZDtcbiAgICAgIHVuaXRzQ2VsbC5hcHBlbmRDaGlsZCh1bml0c1NlbGVjdCk7XG5cbiAgICAgIGNvbnN0IHRhYmxlQWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YWJsZUFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFibGVfX2NlbGwgdGFibGVfX2FjdGl2ZS1idXR0b24nO1xuICAgICAgY29uc3QgdGFibGVBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRhYmxlQWRkQnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtYnV0dG9uJztcbiAgICAgIHRhYmxlQWRkQnV0dG9uLnRhYkluZGV4ID0gdGFiSW5kZXggKyAxMDtcbiAgICAgIHRhYmxlQWRkQnV0dG9uLm9uY2xpY2sgPSBhZGRSb3c7XG4gICAgICB0YWJsZUFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZUFkZEJ1dHRvbik7XG5cbiAgICAgIGNvbnN0IHRhYmxlRGVsZXRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YWJsZURlbGV0ZUJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFibGVfX2NlbGwgdGFibGVfX2FjdGl2ZS1idXR0b24nO1xuICAgICAgY29uc3QgdGFibGVEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHRhYmxlRGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtYnV0dG9uJztcbiAgICAgIHRhYmxlRGVsZXRlQnV0dG9uLm9uY2xpY2sgPSByZW1vdmVSb3c7XG4gICAgICB0YWJsZURlbGV0ZUJ1dHRvbi50YWJJbmRleCA9IHRhYkluZGV4ICsgMTE7XG4gICAgICB0YWJsZURlbGV0ZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJsZURlbGV0ZUJ1dHRvbik7XG5cbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNDZWxsKTtcbiAgICAgIHJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY291bnRJbnB1dENlbGwpO1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZCh1bml0c0NlbGwpO1xuICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZCh0YWJsZUFkZEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICByb3dFbGVtZW50LmFwcGVuZENoaWxkKHRhYmxlRGVsZXRlQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgdGFibGVDb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb3dFbGVtZW50KTtcblxuICAgICAgd2luZG93LnRhYkluZGV4ID0gd2luZG93LnRhYkluZGV4ICsgMTA7XG5cbiAgICAgIHJvd0VsZW1lbnQuc2V0QXR0cmlidXRlKCdyb3dJbmRleCcsIHJvd0luZGV4KTtcblxuICAgICAgaW5ncmVkaWVudHNTZWxlY3Quc2V0QXR0cmlidXRlKCdpbmRleCcsIHRhYkluZGV4ICsgMSk7XG4gICAgICBpbmdyZWRpZW50c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGFiSW5kZXggKyA0KTtcbiAgICAgIC8vIFRPRE8gdHlwZSDQsiDQutC+0L3RgdGC0LDQvdGC0YtcbiAgICAgIGluZ3JlZGllbnRzU2VsZWN0LnNldEF0dHJpYnV0ZSgndHlwZScsICdpbmdyZWRpZW50cycpO1xuICAgICAgaW5ncmVkaWVudHNTZWxlY3Quc2V0QXR0cmlidXRlKCdvcHRpb25zJywgSlNPTi5zdHJpbmdpZnkod2luZG93LklOR1JFRElFTlRTKSk7XG4gICAgICBpZiAoaW5ncmVkaWVudElkICYmIHVuaXRJZCkge1xuICAgICAgICAvLyBUT0RPINGE0YPQvdC60YbQuNC10LlcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudExhYmVsID0gd2luZG93LmluZ3JlZGllbnRzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IGluZ3JlZGllbnRJZCkubGFiZWw7XG5cbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkVW5pdElkID0gTnVtYmVyLmlzSW50ZWdlcihpbmRleCkgPyBgJHt1bml0SWR9XyR7aW5kZXh9YCA6IHVuaXRJZDtcblxuICAgICAgICBjb25zdCB1bml0TGFiZWwgPSB3aW5kb3cudW5pdHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gcHJvY2Vzc2VkVW5pdElkKS5sYWJlbDtcbiAgICAgICAgLy8gVE9ETyDQv9C10YDQtdC40LzQtdC90L7QstCw0YLRjCB2YWx1ZTEg0LLQviDRh9GC0L4t0YLQviDQu9GD0YfRiNC1XG4gICAgICAgIGluZ3JlZGllbnRzU2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUxJywgaW5ncmVkaWVudExhYmVsKTtcbiAgICAgICAgdW5pdHNTZWxlY3Quc2V0QXR0cmlidXRlKCd2YWx1ZTEnLCB1bml0TGFiZWwpXG5cbiAgICAgIH1cblxuICAgICAgaWYgKGFtb3VudE9mKSB7XG4gICAgICAgIGNvdW50SW5wdXQudmFsdWUgPSBhbW91bnRPZjtcbiAgICAgIH1cbiAgICAgIHVuaXRzU2VsZWN0LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCB0YWJJbmRleCArIDcpO1xuICAgICAgdW5pdHNTZWxlY3Quc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRhYkluZGV4ICsgNyk7XG4gICAgICB1bml0c1NlbGVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndW5pdHMnKTtcblxuICAgICAgdW5pdHNTZWxlY3Quc2V0QXR0cmlidXRlKCdvcHRpb25zJywgSlNPTi5zdHJpbmdpZnkod2luZG93LlVOSVRTKSk7XG5cbiAgICAgIHdpbmRvdy5yb3dJbmRleCA9IHJvd0luZGV4ICsgMTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0QWxwaGFiZXRpY2FsbHkgPSAoeyBsYWJlbDogYUxhYmVsIH0sIHsgbGFiZWw6IGJMYWJlbH0pID0+IHtcbiAgICAgIGlmIChhTGFiZWwgPCBiTGFiZWwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGFMYWJlbCA+IGJMYWJlbCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGxUYWJsZSA9IHJlY2lwZSA9PiB7XG4gICAgICBjb25zdCB0YWJsZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGVfX2NvbnRlbnQnKTtcbiAgICAgIHRhYmxlQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHdpbmRvdy50YWJsZSA9IFtdO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLXRpdGxlJykudmFsdWUgPSByZWNpcGUudGl0bGU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9uc19fdGV4dGFyZWEnKS52YWx1ZSA9IHJlY2lwZS5kaXJlY3Rpb25zLmpvaW4oJ1xcbicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2lwZS1udXRyaXRpb25hbC12YWx1ZScpLnZhbHVlID0gcmVjaXBlLm51dHJpdGlvbmFsVmFsdWU7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLXVybCcpLnZhbHVlID0gcmVjaXBlLnVybDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNpcGVUeXBlU2VsZWN0JykuaW5wdXQudmFsdWUgPSBSRUNJUEVfVFlQRV9NQVBbcmVjaXBlLnR5cGVdO1xuXG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICBhZGRSb3cocm93KTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0UmVjaXBlID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWNpcGUgPSB3aW5kb3cuUkVDSVBFUy5maW5kKCh7IHRpdGxlIH0pID0+IGV2ZW50LnRhcmdldC5pbnB1dC52YWx1ZSA9PT0gdGl0bGUpO1xuXG4gICAgICB3aW5kb3cuc2VsZWN0ZWRSZWNpcGUgPSBzZWxlY3RlZFJlY2lwZTtcblxuICAgICAgLy8gVE9ETyDQu9C+0LDQtNC10YAg0L3QsCDQt9Cw0LPRgNGD0LfQutGDXG5cbiAgICAgIGZpbGxUYWJsZShzZWxlY3RlZFJlY2lwZSk7XG5cbiAgICAgIGNyZWF0ZUNhcmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVTZWxlY3RPcHRpb25zID0gKHVuaXQsIG9wdGlvbnMpID0+IHdpbmRvdy50YWJsZS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICBzZWxlY3RbdW5pdF0uc2V0QXR0cmlidXRlKCdvcHRpb25zJywgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXBkYXRlSW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cyA9PiB1cGRhdGVTZWxlY3RPcHRpb25zKCdpbmdyZWRpZW50cycsIGluZ3JlZGllbnRzLnNvcnQoc29ydEFscGhhYmV0aWNhbGx5KSk7XG5cbiAgICBjb25zdCB1cGRhdGVVbml0cyA9IHVuaXRzID0+IHVwZGF0ZVNlbGVjdE9wdGlvbnMoJ3VuaXRzJywgdW5pdHMuc29ydChzb3J0QWxwaGFiZXRpY2FsbHkpKTtcblxuXG5jb25zdCBtbSA9IHZhbHVlID0+IGAke3ZhbHVlfW1tYDtcbmNvbnN0IE5BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBDQVJEX1dJRFRIID0gMTQ4O1xuY29uc3QgQ0FSRF9IRUlHSFQgPSAyMTA7XG5jb25zdCBCQVNFX09GRlNFVCA9IDE2O1xuY29uc3QgUFJPRFVDVFNfT0ZGU0VUID0gNTA7XG5jb25zdCBESVJFQ1RJT05fWV9PRkZTRVQgPSAxMDU7XG5jb25zdCBJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCA9IDQwO1xuY29uc3QgRElSRUNUSU9OU19NQVhfQ0hBUl9DT1VOVCA9IDUwO1xuY29uc3QgVFlQRSA9IHtcbiAgU1ZHOiAnc3ZnJyxcbiAgR1JPVVA6ICdnJyxcbiAgUkVDVEFOR0xFOiAncmVjdCcsXG4gIFRFWFQ6ICd0ZXh0JyxcbiAgVFNQQU46ICd0c3BhbicsXG4gIERFRlM6ICdkZWZzJyxcbiAgU1RZTEU6ICdzdHlsZScsXG59O1xuXG5jb25zdCBSRUNJUEVfVFlQRSA9IHtcbiAgRklSU1RfQ09VUlNFOiAnZmlyc3QtY291cnNlJyxcbiAgU0VDT05EX0NPVVJTRTogJ3NlY291bmQtY291cnNlJyxcbiAgR0FSTklTSDogJ2dhcm5pc2gnLFxuICBTQUxBRDogJ3NhbGFkJyxcbiAgREVTU0VSVDogJ2Rlc3NlcnQnLFxuICBCUkVBS0ZBU1Q6ICdicmVha2Zhc3QnLFxufTtcblxuY29uc3QgUkVDSVBFX1RZUEVfTUFQID0ge1xuICBbUkVDSVBFX1RZUEUuRklSU1RfQ09VUlNFXTogJ9Cf0LXRgNCy0L7QtSDQsdC70Y7QtNC+JyxcbiAgW1JFQ0lQRV9UWVBFLlNFQ09ORF9DT1VSU0VdOiAn0JLRgtC+0YDQvtC1INCx0LvRjtC00L4nLFxuICBbUkVDSVBFX1RZUEUuR0FSTklTSF06ICfQk9Cw0YDQvdC40YAnLFxuICBbUkVDSVBFX1RZUEUuU0FMQURdOiAn0KHQsNC70LDRgicsXG4gIFtSRUNJUEVfVFlQRS5ERVNTRVJUXTogJ9CU0LXRgdC10YDRgicsXG4gIFtSRUNJUEVfVFlQRS5CUkVBS0ZBU1RdOiAn0JfQsNCy0YLRgNCw0LonLFxufTtcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbi8vICAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSAnSGVsbG8sIHdlYnBhY2shJztcblxuLy8gICByZXR1cm4gZWxlbWVudDtcbi8vIH1cblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cblxuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coJyVjJyArICdpbml0IDEnLCAnY29sb3I6ICMzZmNiZmYnKTtcbiAgICAgXG4gICAgLy8gVE9ETyDQv9C10YDQtdC00LXQu9Cw0YLRjCDQvdC1INGH0LXRgNC10Lcgd2luZG93c1xuICAgIHdpbmRvdy5JTkdSRURJRU5UUyA9IEpTT04ucGFyc2UoaW5ncmVkaWVudHMpLm1hcCgoeyBpZCwgbmFtZSB9KSA9PiAoeyBpZCwgbGFiZWw6IG5hbWUgfSkpXG4gICAgd2luZG93Lk5FV19JTkdSRURJRU5UUyA9IFtdO1xuICAgIHdpbmRvdy5ORVdfVU5JVFMgPSBbXTtcbiAgICB3aW5kb3cuUkVDSVBFUyA9IEpTT04ucGFyc2UocmVjaXBlcykuc29ydCgoeyB0aXRsZTogYSB9LCB7IHRpdGxlOiBiIH0pID0+IGEgPiBiID8gMSA6IC0xKTtcblxuXG4gICAgd2luZG93LlVOSVRTID0gSlNPTi5wYXJzZSh1bml0cykucmVkdWNlKChhY2MsIHsgaWQsIG5hbWUgfSkgPT4gKFtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICAuLi5BcnJheS5pc0FycmF5KG5hbWUpXG4gICAgICAgICAgPyBuYW1lLm1hcCgod29yZCwgaW5kZXggKSA9PiAoeyBpZDogYCR7aWR9XyR7aW5kZXggKyAxfWAsIGxhYmVsOiB3b3JkIH0pKVxuICAgICAgICAgIDogW3sgaWQsIGxhYmVsOiBuYW1lIH1dXG4gICAgICBdKSxcbiAgICBbXSk7XG5cbiAgICB3aW5kb3cudGFiSW5kZXggPSAwO1xuXG4gICAgY29uc3QgcmVjaXBlU2VsZWN0b3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbicpO1xuICAgIGNvbnN0IHJlY2lwZVNlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0LXdpdGgtc2VhcmNoJyk7XG4gICAgcmVjaXBlU2VsZWN0b3IuaWQgPSAncmVjaXBlU2VsZWN0JztcbiAgICByZWNpcGVTZWxlY3RvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWNpcGVTZWxlY3Rvcik7XG4gICAgcmVjaXBlU2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdvcHRpb25zJywgSlNPTi5zdHJpbmdpZnkoXG4gICAgICB3aW5kb3cuUkVDSVBFUy5tYXAoKHsgaWQsIHRpdGxlIH0pID0+ICh7IGlkLCBsYWJlbDogdGl0bGUgfSkpKSxcbiAgICApO1xuICAgIHJlY2lwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdE9wdGlvbicsIHNlbGVjdFJlY2lwZSk7XG5cbiAgICAgIC8vIFRPRE8g0YHQtNC10LvQsNGC0Ywg0YXQtdC70L/QtdGAINC/0L4g0L/QvtC40YHQutGDINC4INCy0YHRgtCw0LLQutC4INCyINC60L7QvdGC0LXQudC90LXRgCAo0L7RgtC00LXQu9GM0L3QviDQtNC70Y8g0YHQv9C40YHQutC+0LIpXG4gICAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWNpcGUtdHlwZScpO1xuICAgICAgLy8gVE9ETyDRgdC00LXQu9Cw0YLRjCDQt9C00LXRgdGMINC/0YDQvtGB0YLQvtC5INGB0LXQu9C10LrRgtC+0YAuINCh0LTQtdC70LDRgtGMINC90LDRgdC70LXQtNC+0LLQsNC90LjQtSDQvtGCINC90LXQs9C+INCyINGB0LXQu9C10LrRgtC+0YDQtSDRgSDQstGL0LHQvtGA0L7QvFxuICAgICAgY29uc3QgY2F0ZWdvcnlTZWxlY3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdC13aXRoLXNlYXJjaCcpO1xuICAgICAgY2F0ZWdvcnlTZWxlY3Rvci5pZCA9ICdyZWNpcGVUeXBlU2VsZWN0JztcbiAgICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5U2VsZWN0b3IpO1xuICAgICAgLy8gVE9ETyDRgdC00LXQu9Cw0YLRjCDRg9C00L7QsdC90YvQuSDRhdC10LvQv9C10YAg0LTQu9GPINCy0YvRgdGC0LDQstC70LXQvdC40Y8g0L7Qv9GG0LjQuSDQuiDRgdC/0LjRgdC60YNcbiAgICAgIGNhdGVnb3J5U2VsZWN0b3Iuc2V0QXR0cmlidXRlKCdvcHRpb25zJywgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LnZhbHVlcyhSRUNJUEVfVFlQRSkubWFwKHZhbHVlID0+ICh7IGlkOiB2YWx1ZSwgbGFiZWw6IFJFQ0lQRV9UWVBFX01BUFt2YWx1ZV0gfSkpKSk7XG5cbiAgICAgIGFkZFRhYmxlUm93KHtcbiAgICAgICAgaW5ncmVkaWVudFNlbGVjdElkOiAnczEnLFxuICAgICAgICBpbmdyZWRpZW50czogSU5HUkVESUVOVFMsXG4gICAgICAgIHVuaXRTZWxlY3RJZDogJ3MyJyxcbiAgICAgICAgdW5pdHM6IFVOSVRTLFxuICAgICAgICByb3dJbmRleDogMSxcbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuaW5ncmVkaWVudHMgPSBJTkdSRURJRU5UUztcbiAgICAgIHdpbmRvdy51bml0cyA9IFVOSVRTO1xuICAgICAgd2luZG93LnRhYmxlID0gW3tcbiAgICAgICAgcm93SW5kZXg6IDEsXG4gICAgICAgIGluZ3JlZGllbnRzOiBzMSxcbiAgICAgICAgdW5pdHM6IHMyLFxuICAgICAgfV07XG4gICAgICB3aW5kb3cubWF4SW5kZXggPSAzO1xuICAgICAgd2luZG93LnJvd0luZGV4ID0gMjtcblxuICAvLyBjb25zb2xlLmxvZygnJWMnICsgJ2luaXQgMicsICdjb2xvcjogZ3JlZW4nKTtcblxuICBjb25zdCBjYXJkc051bWJlclNlbGVjdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX251bWJlcjEnKTtcbiAgY29uc3QgY2FyZHNOdW1iZXJTZWxlY3QyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19udW1iZXIyJyk7XG4gIGlmICghY2FyZHNOdW1iZXJTZWxlY3QxKSByZXR1cm47XG4gIF9yZWNpcGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18uUkVDSVBFUy5mb3JFYWNoKCh7IGlkLCB0aXRsZSB9KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjEudmFsdWUgPSBpZDsgb3B0aW9uMS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICBjYXJkc051bWJlclNlbGVjdDEuYXBwZW5kQ2hpbGQob3B0aW9uMSk7XG4gICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjIudmFsdWUgPSBpZDsgb3B0aW9uMi5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICBjYXJkc051bWJlclNlbGVjdDIuYXBwZW5kQ2hpbGQob3B0aW9uMik7XG4gIH0pO1xuXG4gIFxufTtcblxuaW5pdCgpO1xuXG5jb25zdCBjcmVhdGVDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNOdW1iZXJTZWxlY3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19udW1iZXIxJyk7XG4gIGNvbnN0IGNhcmRzTnVtYmVyU2VsZWN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fbnVtYmVyMicpO1xuXG4gIGNyZWF0ZUNhcmQoK2NhcmRzTnVtYmVyU2VsZWN0MS52YWx1ZSwgMCwgMCk7XG4gIGNyZWF0ZUNhcmQoK2NhcmRzTnVtYmVyU2VsZWN0Mi52YWx1ZSwgMCwgMTQ4KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN2Z0VsZW1lbnQgPSAodHlwZSwgYXR0cnMgPSB7fSwgdGV4dENvbnRlbnQgPSAnJykgPT4ge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5BTUVTUEFDRSwgdHlwZSk7XG5cbiAgT2JqZWN0LmVudHJpZXMoYXR0cnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcblxuICBpZiAoW1RZUEUuVEVYVCwgVFlQRS5UU1BBTl0uaW5jbHVkZXModHlwZSkpIHtcbiAgICBub2RlLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn07XG5cbi8vIGNvbnN0IHRyaW1Sb3cgPSAobGltaXQsIHRleHQpID0+IHRleHQuc3BsaXQoJyAnKVxuLy8gICAucmVkdWNlKChhY2MsIHdvcmQsIGluZGV4KSA9PiB7XG4vLyAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBhY2MubGVuZ3RoIC0gMTtcbi8vICAgICBpZiAoaW5kZXggPT09IDApIHJldHVybiBbd29yZF07XG5cbi8vICAgICBjb25zdCBwcmV2RWxlbWVudCA9IGFjY1tsYXN0RWxlbWVudF07XG5cbi8vICAgICByZXR1cm4gcHJldkVsZW1lbnQubGVuZ3RoIDwgM1xuLy8gICAgICAgPyBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgYCR7cHJldkVsZW1lbnR9ICR7d29yZH1gXVxuLy8gICAgICAgOiBbLi4uYWNjLCB3b3JkXTtcbi8vICAgfSwgW10pXG4vLyAgIC5yZWR1Y2UoKGFjYywgd29yZCkgPT4ge1xuLy8gICAgIGlmICghYWNjLmxlbmd0aCkgcmV0dXJuIFt3b3JkXTsgY29uc3QgbGFzdEluZGV4ID0gYWNjLmxlbmd0aCAtIDE7IGNvbnN0IGxhc3RFbGVtZW50ID0gYWNjW2xhc3RJbmRleF07IGNvbnN0IHJvd1dpdGhOZXdXb3JkID0gYCR7bGFzdEVsZW1lbnR9ICR7d29yZH1gOyByZXR1cm4gcm93V2l0aE5ld1dvcmQubGVuZ3RoIDwgbGltaXQgPyBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgcm93V2l0aE5ld1dvcmRdIDogWy4uLmFjYywgd29yZF07XG4vLyAgIH0sIFtdKTtcblxuLy8gY29uc3QgY3JlYXRlQ2FyZCA9IChjYXJkSWQsIHgwLCB5MCkgPT4ge1xuLy8gICBjb25zdCBzdGFydFggPSAreDA7XG4vLyAgIGNvbnN0IHN0YXJ0WSA9ICt5MDtcblxuLy8gICBsZXQgc3ZnID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG5cbi8vICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19jb250YWluZXInKTtcblxuLy8gICBpZiAoIXN2Zykge1xuLy8gICAgIHN2ZyA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5TVkcsIHsgd2lkdGg6IG1tKDIxMCksIGhlaWdodDogbW0oMjk3KSB9KTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHJlY2lwZUdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQKTtcblxuLy8gICBjb25zdCByZWNpcGVDb250YWluZXIgPSBjcmVhdGVTdmdFbGVtZW50KFxuLy8gICAgIFRZUEUuUkVDVEFOR0xFLCB7XG4vLyAgICAgeDogbW0oc3RhcnRYKSxcbi8vICAgICB5OiBtbShzdGFydFkpLFxuLy8gICAgIHdpZHRoOiBtbShDQVJEX1dJRFRIKSxcbi8vICAgICBoZWlnaHQ6IG1tKENBUkRfSEVJR0hUKSxcbi8vICAgICBjbGFzczogJ3JlY2lwZV9fY29udGFpbmVyJ1xuLy8gICB9KTtcblxuLy8gICBjb25zdCB7XG4vLyAgICAgaWQsXG4vLyAgICAgdGl0bGUsXG4vLyAgICAgaW5ncmVkaWVudHMsXG4vLyAgICAgZGlyZWN0aW9uc1xuLy8gICB9ID0gX3JlY2lwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXy5SRUNJUEVTLmZpbmQoKHsgaWQgfSkgPT4gY2FyZElkID09PSBpZCk7XG5cbi8vICAgY29uc3QgcmVjaXBlVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuLy8gICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuLy8gICAgIHg6IG1tKHN0YXJ0WCArIENBUkRfV0lEVEggLyAyKSxcbi8vICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCksXG4vLyAgICAgY2xhc3M6ICd0aXRsZScsXG4vLyAgICAgc3R5bGU6IGAke3RpdGxlLmxlbmd0aCA+IDIwID8gJ2ZvbnQtc2l6ZTogMTZweDsnIDogJyd9YFxuLy8gICB9LFxuLy8gICAgIGAke2lkfS4gJHt0aXRsZX1gXG4vLyAgICk7XG5cbi8vICAgY29uc3QgaW5ncmVkaWVudHNBbW91bnRPZkdyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7IGNsYXNzOiAnY29udGVudCcgfSk7XG5cbi8vICAgY29uc3QgaW5ncmVkaWVudE1haW5UZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbi8vICAgICB4OiBtbShzdGFydFggKyBCQVNFX09GRlNFVCksXG4vLyAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQgKiAyKVxuLy8gICB9KTtcblxuLy8gICBjb25zdCBpbmdyZWRpZW50UHJvZHVjdHNUZXh0ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRFWFQsIHtcbi8vICAgICB4OiBtbShzdGFydFggKyBQUk9EVUNUU19PRkZTRVQpLFxuLy8gICAgIHk6IG1tKHN0YXJ0WSArIEJBU0VfT0ZGU0VUICogMilcbi8vICAgfSk7XG5cbi8vICAgaW5ncmVkaWVudHMucmVkdWNlKChhY2MsIHsgaW5ncmVkaWVudElkLCAuLi5yZXN0IH0pID0+IHtcbi8vICAgICBjb25zdCBhID0gX2luZ3JlZGllbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18uSU5HUkVESUVOVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gaW5ncmVkaWVudElkKTtcblxuLy8gICAgIGNvbnN0IGluZ3JlZGllbnRFbGVtZW50c1Jvd3MgPSB0cmltUm93KElOR1JFRElFTlRTX01BWF9DSEFSX0NPVU5ULCBfaW5ncmVkaWVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXy5JTkdSRURJRU5UUy5maW5kKCh7IGlkIH0pID0+IGlkID09PSBpbmdyZWRpZW50SWQpLm5hbWUpO1xuXG4vLyAgICAgcmV0dXJuIFsuLi5hY2MsIHsgaW5ncmVkaWVudElkLCBpbmdyZWRpZW50RWxlbWVudHNSb3dzLCAuLi5yZXN0IH1dO1xuLy8gICB9LCBbXSlcbi8vICAgICAucmVkdWNlKChhY2MsIHsgYW1vdW50T2YsIHVuaXRJZCwgaW5kZXg6IHVuaXRJbmRleCwgaXNBbmFsb2d1ZSwgaW5ncmVkaWVudElkLCBpbmdyZWRpZW50RWxlbWVudHNSb3dzIH0sIGluZGV4KSA9PiB7XG4vLyAgICAgICBjb25zdCBpc0ZpcnN0Um93ID0gaW5kZXggPT09IDA7IGNvbnN0IGxhc3RSb3dDb3VudCA9IGlzRmlyc3RSb3cgPyAxIDogYWNjW2FjYy5sZW5ndGggLSAxXS5yb3dDb3VudDtcblxuLy8gICAgICAgY29uc3QgdW5pdCA9IF91bml0c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fLlVOSVRTLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IHVuaXRJZCkubmFtZTtcblxuLy8gICAgICAgY29uc3QgYW1vdW50T2ZVbml0RWxlbWVudCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuLy8gICAgICAgICB4OiBtbShzdGFydFggKyBCQVNFX09GRlNFVCksXG4vLyAgICAgICAgIGR5OiBpc0ZpcnN0Um93ID8gJzAnIDpcbi8vICAgICAgICAgICBpc0FuYWxvZ3VlID8gJzAuOGVtJyA6IGAkeyhsYXN0Um93Q291bnQgKyAxKSAqIDAuOH1lbWBcbi8vICAgICAgIH0sXG4vLyAgICAgICAgIGDilqogJHthbW91bnRPZiB8fCAnJ30gJHtBcnJheS5pc0FycmF5KHVuaXQpID8gdW5pdFt1bml0SW5kZXhdIDogdW5pdH1gKTtcblxuLy8gICAgICAgaW5ncmVkaWVudE1haW5UZXh0LmFwcGVuZENoaWxkKGFtb3VudE9mVW5pdEVsZW1lbnQpOyBpbmdyZWRpZW50RWxlbWVudHNSb3dzLmZvckVhY2goKHdvcmQsIHdvcmRJbmRleCkgPT4ge1xuLy8gICAgICAgICBjb25zdCBwcm9kdWN0Um93ID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRTUEFOLCB7XG4vLyAgICAgICAgICAgeDogbW0oc3RhcnRYICsgUFJPRFVDVFNfT0ZGU0VUKSxcbi8vICAgICAgICAgICBkeTogaXNGaXJzdFJvdyAmJiB3b3JkSW5kZXggPT09IDAgPyAnMCcgOiB3b3JkSW5kZXggPT09IDAgJiYgIWlzQW5hbG9ndWUgPyAnMS42ZW0nIDogJzAuOGVtJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICAgIGlzQW5hbG9ndWUgPyBg0LjQu9C4ICR7d29yZC50b0xvd2VyQ2FzZSgpfWAgOiB3b3JkKTsgaW5ncmVkaWVudFByb2R1Y3RzVGV4dC5hcHBlbmRDaGlsZChwcm9kdWN0Um93KTtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgICByZXR1cm4gWy4uLmFjYywgeyByb3dDb3VudDogaW5ncmVkaWVudEVsZW1lbnRzUm93cy5sZW5ndGggfV07XG4vLyAgICAgfSwgW10pO1xuXG4vLyAgIGluZ3JlZGllbnRzQW1vdW50T2ZHcm91cC5hcHBlbmRDaGlsZChpbmdyZWRpZW50TWFpblRleHQpO1xuLy8gICBpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudFByb2R1Y3RzVGV4dCk7XG5cbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQocmVjaXBlQ29udGFpbmVyKTtcbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQocmVjaXBlVGl0bGUpO1xuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXApO1xuLy8gICBzdmcuYXBwZW5kQ2hpbGQocmVjaXBlR3JvdXApO1xuLy8gICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuLy8gICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vICAgY29uc3QgZGlyZWN0aW9uc0dyb3VwID0gY3JlYXRlU3ZnRWxlbWVudChUWVBFLkdST1VQLCB7XG4vLyAgICAgY2xhc3M6ICdjb250ZW50J1xuLy8gICB9KTtcblxuLy8gICBjb25zdCBkaXJlY3Rpb25zVGl0bGUgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuVEVYVCwge1xuLy8gICAgIC8vIFRPRE8gNTIg0LIg0LrQvtC90YHRgtCw0L3RgtGLXG4vLyAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCArIDUyKSxcbi8vICAgICB5OiBtbShzdGFydFkgKyBCQVNFX09GRlNFVCksXG4vLyAgICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4vLyAgICAgY2xhc3M6ICdwcmVwYXJpbmcnXG4vLyAgIH0sICfQn9GA0LjQs9C+0YLQvtCy0LvQtdC90LjQtScpO1xuXG4vLyAgIGNvbnN0IGRpcmVjdGlvbnNNYWluVGV4dCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5URVhULCB7XG4vLyAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCArIEJBU0VfT0ZGU0VUIC8gMiksXG4vLyAgICAgeTogbW0oc3RhcnRZICsgQkFTRV9PRkZTRVQgKiAyKSwgY2xhc3M6ICdwcmVwYXJpbmdfX2NvbnRlbnQnXG4vLyAgIH0pO1xuXG4vLyAgIGNvbnN0IFBJWEVMX0lOX01NID0gMC4yNjsgZGlyZWN0aW9ucy5mb3JFYWNoKChkaXJlY3Rpb24sIGluZGV4KSA9PiB7XG4vLyAgICAgdHJpbVJvdyhESVJFQ1RJT05TX01BWF9DSEFSX0NPVU5ULCBkaXJlY3Rpb24pLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbi8vICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuLy8gICAgICAgICBkaXJlY3Rpb25zTWFpblRleHQuYXBwZW5kQ2hpbGQoY3JlYXRlU3ZnRWxlbWVudChUWVBFLlRTUEFOLCB7XG4vLyAgICAgICAgICAgeDogbW0oc3RhcnRYICsgQ0FSRF9XSURUSCArIEJBU0VfT0ZGU0VUIC8gMiksXG4vLyAgICAgICAgICAgZHk6IGluZGV4ID09PSAwICYmIHJvd0luZGV4ID09PSAwID8gJzAnIDogcm93SW5kZXggPT09IDAgPyAnMS41ZW0nIDogJzAuOGVtJywgY2xhc3M6ICdib2xkJ1xuLy8gICAgICAgICB9LCBgJHtpbmRleCArIDF9LmApKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgZGlyZWN0aW9uc01haW5UZXh0LmFwcGVuZENoaWxkKGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5UU1BBTiwge1xuLy8gICAgICAgICB4OiByb3dJbmRleCA9PT0gMCA/IG1tKHN0YXJ0WCArIENBUkRfV0lEVEggKyBCQVNFX09GRlNFVCAvIDIgKyAxNiAqIChgJHtpbmRleH1gLmxlbmd0aCArIDEpICogUElYRUxfSU5fTU0pXG4vLyAgICAgICAgICAgOiBtbShzdGFydFggKyBDQVJEX1dJRFRIICsgQkFTRV9PRkZTRVQpLCBkeTogcm93SW5kZXggPT09IDAgPyAnMCcgOiByb3dJbmRleCA9PT0gMCA/ICcxLjVlbScgOiAnMC44ZW0nXG4vLyAgICAgICB9LCByb3cpKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cbi8vICAgY29uc3QgZGlyZWN0aW9uc0NvbnRhaW5lciA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5SRUNUQU5HTEUsIHtcbi8vICAgICB4OiBtbShzdGFydFggKyBDQVJEX1dJRFRIKSxcbi8vICAgICB5OiBtbShzdGFydFkpLFxuLy8gICAgIHdpZHRoOiBtbShDQVJEX1dJRFRIKSxcbi8vICAgICBoZWlnaHQ6IG1tKENBUkRfSEVJR0hUKSxcblxuLy8gICAgIC8vIFRPRE8g0LLRi9C90LXRgdGC0Lgg0LIg0LrQu9Cw0YHRgVxuLy8gICAgIHN0eWxlOiAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJ1xuLy8gICB9KTtcblxuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zR3JvdXApO1xuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zVGl0bGUpO1xuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zTWFpblRleHQpO1xuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChkaXJlY3Rpb25zQ29udGFpbmVyKTtcblxuLy8gICBjb25zdCB0b3BIb2xlUmVjdCA9IGNyZWF0ZVN2Z0VsZW1lbnQoVFlQRS5SRUNUQU5HTEUsIHtcbi8vICAgICB4OiBtbSgwICsgc3RhcnRYKSxcbi8vICAgICB5OiBtbSgzMiArIHN0YXJ0WSksXG4vLyAgICAgd2lkdGg6IG1tKDEwKSxcbi8vICAgICBoZWlnaHQ6IDIsXG4vLyAgICAgLy8gVE9ETyDQsiDRgdGC0LjQu9GMXG4vLyAgICAgc3R5bGU6ICdmaWxsOiAjZGZkZmRmOyBzdHJva2U6IG5vbmU7J1xuLy8gICB9KTtcbi8vICAgY29uc3QgYm90dG9tSG9sZVJlY3QgPSBjcmVhdGVTdmdFbGVtZW50KFRZUEUuUkVDVEFOR0xFLCB7XG4vLyAgICAgeDogbW0oMCArIHN0YXJ0WCksXG4vLyAgICAgeTogbW0oMTEyICsgc3RhcnRZKSxcbi8vICAgICB3aWR0aDogbW0oMTApLFxuLy8gICAgIGhlaWdodDogMixcbi8vICAgICAvLyBUT0RPINCyINGB0YLQuNC70Yxcbi8vICAgICBzdHlsZTogJ2ZpbGw6I2RmZGZkZjsgc3Ryb2tlOiBub25lOydcbi8vICAgfSk7XG5cbi8vICAgcmVjaXBlR3JvdXAuYXBwZW5kQ2hpbGQodG9wSG9sZVJlY3QpO1xuLy8gICByZWNpcGVHcm91cC5hcHBlbmRDaGlsZChib3R0b21Ib2xlUmVjdCk7XG4vLyB9O1xuXG5jb25zdCBzYXZlU3ZnID0gKCkgPT4ge1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgY29uc3Qgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gIGNvbnN0IHNvdXJjZSA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcbiAgLy8gLy9hZGQgbmFtZSBzcGFjZXMuXG4gIC8vIGlmKCFzb3VyY2UubWF0Y2goL148c3ZnW14+XSt4bWxucz1cXFwiaHR0cFxcXFw6XFxcXC9cXFxcL3d3d1xcXFwudzNcXFxcLm9yZ1xcXFwvMjAwMFxcXFwvc3ZnXFxcIi8pKXtcbiAgLy8gICAgIHNvdXJjZSA9IHNvdXJjZS5yZXBsYWNlKC9ePHN2Zy8sICc8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCInKTsgIC8vIH1cbiAgLy8gaWYoIXNvdXJjZS5tYXRjaCgvXjxzdmdbXj5dK1xcXCJodHRwXFxcXDpcXFxcL1xcXFwvd3d3XFxcXC53M1xcXFwub3JnXFxcXC8xOTk5XFxcXC94bGlua1xcXCIvKSl7XG4gIC8vICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZSgvXjxzdmcvLCAnPHN2ZyB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCInKTsgIC8vIH1cbiAgLy8gLy9hZGQgeG1sIGRlY2xhcmF0aW9uICAvLyBzb3VyY2UgPSAnPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBzdGFuZGFsb25lPVxcXCJub1xcXCI/PlxcXFxyXFwnICsgc291cmNlO1xuXG4gIC8vIGNvbnZlcnQgc3ZnIHNvdXJjZSB0byBVUkkgZGF0YSBzY2hlbWUuICBjb25zdCB1cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJHtlbmNvZGVVUklDb21wb25lbnQoc291cmNlKX1gO1xuICAvLyBjb25zb2xlLmxvZygnJWMlcycsICdiYWNrZ3JvdW5kOiBjYWRldGJsdWU7IHBhZGRpbmc6IDhweDsnLCBlbmNvZGVVUklDb21wb25lbnQoc291cmNlKSk7XG4gIC8vIHNldCB1cmwgdmFsdWUgdG8gYSBlbGVtZW50J3MgaHJlZiBhdHRyaWJ1dGUuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG93bmxvYWQtbGluaycpLmhyZWYgPSB1cmw7XG4gIC8vIHlvdSBjYW4gZG93bmxvYWQgc3ZnIGZpbGUgYnkgcmlnaHQgY2xpY2sgbWVudS59O1xuXG4gIC8vIGNvbnN0IHsgVG9kb2lzdEFwaSB9ID0gcmVxdWlyZSgnQGRvaXN0L3RvZG9pc3QtYXBpLXR5cGVzY3JpcHQnKVxuICAvLyBjb25zdCBhID0gcmVxdWlyZShbJy4vLi4vbm9kZV9tb2R1bGVzL0Bkb2lzdC90b2RvaXN0LWFwaS10eXBlc2NyaXB0L2Rpc3QvaW5kZXguanMnXSk7XG4gIC8vIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIC8vIGNvbnN0IGFwaSA9IG5ldyBfZG9pc3RfdG9kb2lzdF9hcGlfdHlwZXNjcmlwdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fLlRvZG9pc3RBcGkoJ2I2ZDA3OTIxYmM3NDlkNGY1MDA0MDk2M2NkMWJjMTNhNTFmZDMzZTInKTtcbiAgLy8gY29uc3QgY2FyZHNOdW1iZXIgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19udW1iZXIxJykudmFsdWU7XG4gIC8vIGNvbnNvbGUubG9nKCclYyVzJywgJ2JhY2tncm91bmQ6IGNhZGV0Ymx1ZTsgcGFkZGluZzogOHB4OycsIGNhcmRzTnVtYmVyKTtcbiAgLy8gY29uc3QgcmVjaXBlID0gX3JlY2lwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXy5SRUNJUEVTLmZpbmQoKHsgICAgaWQgIH0pID0+IGlkID09PSBjYXJkc051bWJlcik7XG4gIC8vIGNvbnN0IHRhc2tzID0gcmVjaXBlLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBpbmdyZWRpZW50KSA9PiB7XG4gIC8vICAgY29uc3Qge1xuICAvLyAgICAgaWQsXG4gIC8vICAgICBpbmdyZWRpZW50SWQsXG4gIC8vICAgICBhbW91bnRPZixcbiAgLy8gICAgIHVuaXRJZCxcbiAgLy8gICAgIGluZGV4IH0gPSBpbmdyZWRpZW50OyBjb25zdCB1bml0ID0gX3VuaXRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18uVU5JVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gdW5pdElkKTsgY29uc3QgdW5pdE5hbWUgPSBpbmRleCA/IHVuaXQubmFtZVtpbmRleCAtIDFdIDogdW5pdC5uYW1lOyBjb25zdCBpbmdyZWRpZW50RW50aXR5ID0gX2luZ3JlZGllbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18uSU5HUkVESUVOVFMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gaW5ncmVkaWVudElkKTsgY29uc3QgeyBpblJlc2VydmUsIGNoZWNrIH0gPSBpbmdyZWRpZW50RW50aXR5OyBpZiAoaW5SZXNlcnZlICYmICFjaGVjaykgcmV0dXJuIGFjYzsgY29uc3QgY2hlY2tQb3N0Zml4ID0gaW5SZXNlcnZlID09PSBmYWxzZSB8fCBpblJlc2VydmUgPT09IHRydWUgJiYgY2hlY2sgPT09IHRydWUgPyAnICjQv9GA0L7QstC10YDQuNGC0YwpJyA6ICcnOyBjb25zdCBwb3N0Zml4ID0gdW5pdE5hbWUgJiYgdW5pdE5hbWUgIT09ICfQv9C+INCy0LrRg9GB0YMnID8gYCDigJQgJHthbW91bnRPZiB8fCAnJ30gJHt1bml0TmFtZX0ke2NoZWNrUG9zdGZpeH1gIDogJyc7IHJldHVybiBbLi4uYWNjLCB7IGNvbnRlbnQ6IGAke2luZ3JlZGllbnRFbnRpdHkubmFtZX0ke3Bvc3RmaXh9YCwgcHJvamVjdElkOiAnMjI5MDE4ODYwOScgfV07XG4gIC8vIH0sIFtdKTtcblxuICAvLyBjb25zb2xlLmxvZygnJWMlcycsICdiYWNrZ3JvdW5kOiBjYWRldGJsdWU7IHBhZGRpbmc6IDhweDsnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuXG4gIC8vIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gIC8vICAgYXBpLmFkZFRhc2sodGFzaykudGhlbigoeyBpZCB9KSA9PiBjb25zb2xlLmxvZygnJWMlcycsICdiYWNrZ3JvdW5kOiBjYWRldGJsdWU7IHBhZGRpbmc6IDhweDsnLCBpZCkpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIC8vIH0pO1xuXG4gIC8vIGFwaS5nZXRQcm9qZWN0cygpLnRoZW4ocHJvamVjdHMgPT4gY29uc29sZS5sb2cocHJvamVjdHMpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuXG53aW5kb3cuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG53aW5kb3cuc2F2ZVN2ZyA9IHNhdmVTdmc7XG4vLyB3aW5kb3cuZ2V0UHJvamVjdHMgPSBnZXRQcm9qZWN0cztcbndpbmRvdy5jcmVhdGVDYXJkcyA9IGNyZWF0ZUNhcmRzO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwidGVzdCIsInNsaWNlIiwiaGFzaCIsIm5lZWRRdW90ZXMiLCJyZXBsYWNlIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImNvbXBvbmVudFRlbXBsYXRlIiwiY3NzIiwiU2VsZWN0V2l0aFNlYXJjaCIsIl9IVE1MRWxlbWVudCIsIl90aGlzMiIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfZGVmaW5lUHJvcGVydHkiLCJzZWFyY2hTdHJpbmciLCJpbnB1dCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZXRPcHRpb25zIiwiY29tbW9uT3B0aW9ucyIsImZpbHRlciIsIl9yZWYiLCJsYWJlbCIsImluY2x1ZGVzIiwicG9wdXAiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpc0ZpbHRlciIsImlubmVySFRNTCIsImZvckVhY2giLCJvcHRpb24iLCJzZXRPcHRpb24iLCJfcmVmMiIsImlzRGVmYXVsdCIsIm9wdGlvbk5vZGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwic2VsZWN0T3B0aW9uIiwiYXBwZW5kQ2hpbGQiLCJuZXdWYWx1ZSIsInNvbWUiLCJfcmVmMyIsIm5ld09wdGlvbiIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImNvbnRhaW5zIiwidG9nZ2xlUG9wdXAiLCJ0b2dnbGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJhZGQiLCJpc09wZW4iLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJjb25uZWN0ZWRDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInRleHQiLCJyYXciLCJfdGVtcGxhdGVPYmplY3QiLCJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwiRXJyb3IiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJ0YWJJbmRleCIsImdldEF0dHJpYnV0ZSIsInNlbGVjdEhpZGVCdXR0b24iLCJzZWxlY3RJbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwic2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJzZWxlY3RDb250YWluZXIiLCJzZWxlY3QiLCJoYW5kbGVFeHRlcm5hbENsaWNrIiwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIiwibmFtZSIsIm9sZFZhbHVlIiwicGFyc2UiLCJuZXdWYWx1ZTEiLCJuZXdDbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0IiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJTZWxlY3QiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIl9rZXkiLCJzb3J0T3B0aW9ucyIsInNlbGVjdEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZGRPcHRpb25zIiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic29ydCIsIm5hbWUxIiwibmFtZTIiLCJyZW1vdmVBbGxPcHRpb25zIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwib2xkVmFsIiwibmV3VmFsIiwicHJvdG90eXBlIiwiU2ltcGxlQ29tcCIsInN1cGVyQ3RvciIsIlJlZmxlY3QiLCJfdHlwZW9mIiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIiRfIiwibm90aGluZyIsInBhZGRpbmciLCJtZXNzYWdlIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsIm1hcmsiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImVyciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNvdXJjZSIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwic291cmNlS2V5cyIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsImZyb20iLCJpdGVyIiwibGVuIiwiYXJyMiIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJzdmcxIiwiaW5ncmVkaWVudHNKU09OIiwicmVjaXBlc0pTT04iLCJ1bml0c0pTT04iLCJpbmdyZWRpZW50cyIsInJlY2lwZXMiLCJ1bml0cyIsImFkZFJvdyIsInJlY2lwZVJvdyIsImluZ3JlZGllbnRTZWxlY3RJZCIsIndpbmRvdyIsIm1heEluZGV4IiwidW5pdFNlbGVjdElkIiwicm93SW5kZXgiLCJhZGRUYWJsZVJvdyIsInRhYmxlIiwidXBkYXRlSW5ncmVkaWVudHMiLCJJTkdSRURJRU5UUyIsInVwZGF0ZVVuaXRzIiwiVU5JVFMiLCJyZW1vdmVSb3ciLCJwYXJlbnROb2RlIiwiaW5kZXgiLCJnZXRJbmdyZWRpZW50cyIsIk5FV19JTkdSRURJRU5UUyIsImdldFVuaXRzIiwiTkVXX1VOSVRTIiwidHJpbVJvdyIsImxpbWl0Iiwic3BsaXQiLCJyZWR1Y2UiLCJhY2MiLCJ3b3JkIiwibGFzdEVsZW1lbnQiLCJwcmV2RWxlbWVudCIsImxhc3RJbmRleCIsInJvd1dpdGhOZXdXb3JkIiwiY3JlYXRlQ2FyZFN2ZyIsInJlY2lwZSIsIngwIiwieTAiLCJzdGFydFgiLCJzdGFydFkiLCJzdmciLCJjb250YWluZXIiLCJjcmVhdGVTdmdFbGVtZW50IiwiVFlQRSIsIlNWRyIsIndpZHRoIiwibW0iLCJoZWlnaHQiLCJkZWZzIiwiREVGUyIsInN0eWxlIiwiU1RZTEUiLCJkb2N1IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiY2RhdGEiLCJjcmVhdGVDREFUQVNlY3Rpb24iLCJyZWNpcGVHcm91cCIsIkdST1VQIiwicmVjaXBlQ29udGFpbmVyIiwiUkVDVEFOR0xFIiwieCIsIkNBUkRfV0lEVEgiLCJDQVJEX0hFSUdIVCIsInRpdGxlIiwiaWRJbkNhdGVnb3J5IiwiZGlyZWN0aW9ucyIsInRpdGxlQ29udGFpbmVyIiwiQkFTRV9PRkZTRVQiLCJyZWNpcGVUaXRsZSIsIlRFWFQiLCJpbmdyZWRpZW50c0Ftb3VudE9mR3JvdXAiLCJpbmdyZWRpZW50TWFpblRleHQiLCJpbmdyZWRpZW50UHJvZHVjdHNUZXh0IiwiUFJPRFVDVFNfT0ZGU0VUIiwiaW5ncmVkaWVudHNPZmZzZXQiLCJpbmdyZWRpZW50SWQiLCJyZXN0IiwiX2V4Y2x1ZGVkIiwiZmluZCIsImluZ3JlZGllbnRFbGVtZW50c1Jvd3MiLCJJTkdSRURJRU5UU19NQVhfQ0hBUl9DT1VOVCIsIl9yZWY0IiwiX3JlZjUiLCJhbW91bnRPZiIsInVuaXRJZCIsInVuaXRJbmRleCIsImlzQW5hbG9ndWUiLCJpc0ZpcnN0Um93IiwibGFzdFJvd0NvdW50Iiwicm93Q291bnQiLCJwcm9jZXNzZWRVbml0SWQiLCJpc0ludGVnZXIiLCJ1bml0IiwiX3JlZjYiLCJhbW91bnRPZlVuaXRFbGVtZW50IiwiVFNQQU4iLCJkeSIsImluZ3JlZGllbnRPZmZzZXQiLCJlbGVtZW50QWNjIiwid29yZEluZGV4IiwicHJvZHVjdFJvdyIsIm9mZnNldCIsImRpcmVjdGlvbnNHcm91cCIsInNlcGFyYXRvck9mZnNldCIsIk1hdGgiLCJmbG9vciIsImdldEJCb3giLCJzZXBhcmF0b3IiLCJkaXJlY3Rpb25zTWFpblRleHQiLCJQSVhFTF9JTl9NTSIsImRpcmVjdGlvbiIsIkRJUkVDVElPTlNfTUFYX0NIQVJfQ09VTlQiLCJyb3ciLCJjcmVhdGVDYXJkIiwic2VsZWN0ZWRSZWNpcGUiLCJjb3B5Q2FyZCIsImFkZEluZ3JlZGllbnQiLCJpbmdyZWRpZW50IiwibmV3SWQiLCJtYXgiLCJfcmVmNyIsImFkZFVuaXQiLCJfcmVmOCIsIm1hdGNoIiwiX3JlZjkiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJpbmdyZWRpZW50VmFsdWUiLCJfcmVmMCIsInVuaXRWYWx1ZSIsIl9yZWYxIiwibmV3SW5ncmVkaWVudHMiLCJfcmVmMTAiLCJpbmdyZWRpZW50QWNjIiwibGlua2VkVW5pdHMiLCJuZXdVbml0cyIsInVuaXRBY2MiLCJSRUNJUEVTIiwiX3JlZjExIiwidHlwZUxhYmVsIiwiZW50cmllcyIsIlJFQ0lQRV9UWVBFX01BUCIsIl9yZWYxMiIsIl9yZWYxMyIsImluQ2F0ZWdvcnlJZHMiLCJfcmVmMTQiLCJyZWNpcGVUeXBlIiwiX3JlZjE1IiwibnV0cml0aW9uYWxWYWx1ZSIsIm5ld1JlY2lwZSIsInJlc3VsdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImNvcHlTdmciLCJzZXJpYWxpemVyIiwiWE1MU2VyaWFsaXplciIsInNlcmlhbGl6ZVRvU3RyaW5nIiwiX3JlZjE2IiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsIl9yZWYxNyIsInRhYmxlQ29udGVudEVsZW1lbnQiLCJyb3dFbGVtZW50IiwiaW5ncmVkaWVudHNDZWxsIiwiaW5ncmVkaWVudHNTZWxlY3QiLCJjb3VudElucHV0Q2VsbCIsImNvdW50SW5wdXRDb2500LBpbmVyIiwiY291bnRJbnB1dCIsInVuaXRzQ2VsbCIsInVuaXRzU2VsZWN0IiwidGFibGVBZGRCdXR0b25Db250YWluZXIiLCJ0YWJsZUFkZEJ1dHRvbiIsIm9uY2xpY2siLCJ0YWJsZURlbGV0ZUJ1dHRvbkNvbnRhaW5lciIsInRhYmxlRGVsZXRlQnV0dG9uIiwiaW5ncmVkaWVudExhYmVsIiwiX3JlZjE4IiwidW5pdExhYmVsIiwiX3JlZjE5Iiwic29ydEFscGhhYmV0aWNhbGx5IiwiX3JlZjIwIiwiX3JlZjIxIiwiYUxhYmVsIiwiYkxhYmVsIiwiZmlsbFRhYmxlIiwidGFibGVDb250ZW50Iiwic2VsZWN0UmVjaXBlIiwiX3JlZjIyIiwidXBkYXRlU2VsZWN0T3B0aW9ucyIsIk5BTUVTUEFDRSIsIkRJUkVDVElPTl9ZX09GRlNFVCIsIlJFQ0lQRV9UWVBFIiwiRklSU1RfQ09VUlNFIiwiU0VDT05EX0NPVVJTRSIsIkdBUk5JU0giLCJTQUxBRCIsIkRFU1NFUlQiLCJCUkVBS0ZBU1QiLCJpbml0IiwiX3JlZjIzIiwiX2NhbGxlZSIsInJlY2lwZVNlbGVjdG9yQ29udGFpbmVyIiwicmVjaXBlU2VsZWN0b3IiLCJjYXRlZ29yeUNvbnRhaW5lciIsImNhdGVnb3J5U2VsZWN0b3IiLCJjYXJkc051bWJlclNlbGVjdDEiLCJjYXJkc051bWJlclNlbGVjdDIiLCJfY29udGV4dCIsIl9yZWYyNCIsIl9yZWYyNSIsIl9yZWYyNiIsImIiLCJfcmVmMjciLCJfcmVmMjgiLCJzMSIsInMyIiwiX3JlY2lwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyIsIl9yZWYyOSIsIm9wdGlvbjEiLCJvcHRpb24yIiwiY3JlYXRlQ2FyZHMiLCJhdHRycyIsInRleHRDb250ZW50Iiwibm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsIl9yZWYzMCIsIl9yZWYzMSIsInNhdmVTdmciXSwic291cmNlUm9vdCI6IiJ9