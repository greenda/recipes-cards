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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://recipe-cards/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://recipe-cards/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/app/components/select/index.js":
/*!********************************************!*\
  !*** ./src/app/components/select/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Select)\n/* harmony export */ });\n/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/app-constants */ \"./src/app/constants/app-constants.js\");\n// TODO разобраться, как сделать адрес от app\n\nclass Select extends HTMLElement {\n  init = options => {\n    this.sortOptions(options);\n    this.selectElement = document.createElement(_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SELECT);\n    this.selectElement.setAttribute('tabIndex', this.getAttribute('tabIndex'));\n    this.addOptions(this.options);\n    this.appendChild(this.selectElement);\n  };\n  sortOptions = options => {\n    this.options = [...options].sort(({\n      name: name1\n    }, {\n      name: name2\n    }) => {\n      switch (true) {\n        case name1 < name2:\n          return -1;\n\n        case name1 > name2:\n          return 1;\n\n        default:\n          return 0;\n      }\n    });\n  };\n  addOptions = options => {\n    this.options = options;\n    options.forEach(({\n      id,\n      name\n    }) => {\n      const option = document.createElement(_constants_app_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OPTION);\n      option.value = id;\n      option.innerHTML = name;\n      this.selectElement.appendChild(option);\n    });\n  };\n  updateOptions = options => {\n    this.removeAllOptions();\n    this.sortOptions(options);\n    this.addOptions(this.options);\n  };\n  removeAllOptions = () => {\n    while (this.selectElement.firstChild) {\n      this.selectElement.removeChild(this.selectElement.firstChild);\n    }\n  };\n}\ncustomElements.define('select-with-options', Select);\n\n//# sourceURL=webpack://recipe-cards/./src/app/components/select/index.js?");

/***/ }),

/***/ "./src/app/constants/app-constants.js":
/*!********************************************!*\
  !*** ./src/app/constants/app-constants.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ELEMENT_TYPE = {\n  SELECT: 'select',\n  OPTION: 'option'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ELEMENT_TYPE\n});\n\n//# sourceURL=webpack://recipe-cards/./src/app/constants/app-constants.js?");

/***/ }),

/***/ "./src/app/ingredients.js":
/*!********************************!*\
  !*** ./src/app/ingredients.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INGREDIENTS\": () => (/* binding */ INGREDIENTS)\n/* harmony export */ });\nconst INGREDIENTS = [{\n  id: 1,\n  name: 'Овощной или мясной бульон',\n  linkedUnits: [1],\n  inReserve: true,\n  check: true\n}, {\n  id: 2,\n  name: 'Белокочаная капуста',\n  linkedUnits: [2]\n}, {\n  id: 3,\n  name: 'Картофель',\n  linkedUnits: [3]\n}, {\n  id: 4,\n  name: 'Перец болгарский красный',\n  linkedUnits: []\n}, {\n  id: 5,\n  name: 'Морковь',\n  linkedUnits: [4],\n  inReserve: true,\n  check: true\n}, {\n  id: 6,\n  name: 'Свёкла',\n  linkedUnits: [4]\n}, {\n  id: 7,\n  name: 'Лук репчатый',\n  linkedUnits: [4],\n  inReserve: true,\n  check: true\n}, {\n  id: 8,\n  name: 'Помидоры',\n  linkedUnits: [3]\n}, {\n  id: 9,\n  name: 'Томатная паста',\n  linkedUnits: [5],\n  inReserve: true,\n  check: true\n}, {\n  id: 10,\n  name: 'Оливковое масло',\n  linkedUnits: [5],\n  inReserve: true\n}, {\n  id: 11,\n  name: 'Петрушка/укроп',\n  linkedUnits: [7]\n}, {\n  id: 12,\n  name: 'Лимонный сок',\n  linkedUnits: [5]\n}, {\n  id: 13,\n  name: 'Сметана',\n  linkedUnits: [7]\n}, {\n  id: 14,\n  name: 'Морская соль/перец',\n  linkedUnits: [7],\n  inReserve: true\n}, {\n  id: 15,\n  name: 'Чеснок',\n  inReserve: true,\n  check: true\n}, {\n  id: 16,\n  name: 'Фасоль белая',\n  inReserve: true,\n  check: true\n}, {\n  id: 17,\n  name: 'Кукуруза консервированная'\n}, {\n  id: 18,\n  name: 'Куриный бульон',\n  inReserve: true,\n  check: true\n}, {\n  id: 19,\n  name: 'Сливки'\n}, {\n  id: 20,\n  name: 'Сливочное масло',\n  inReserve: true,\n  check: true\n}, {\n  id: 21,\n  name: 'Петрушка'\n}, {\n  id: 22,\n  name: 'Соль',\n  inReserve: true\n}, {\n  id: 23,\n  name: 'Перец молотый',\n  inReserve: true\n}, {\n  id: 24,\n  name: 'Филе индейки'\n}, {\n  id: 25,\n  name: 'Горчица',\n  inReserve: true,\n  check: true\n}, {\n  id: 26,\n  name: 'Паприка',\n  inReserve: true,\n  check: true\n}, {\n  id: 27,\n  name: 'Сухой чеснок',\n  inReserve: true,\n  check: true\n}, {\n  id: 28,\n  name: 'Укроп'\n}, {\n  id: 29,\n  name: 'Масло растительное',\n  inReserve: true\n}, {\n  id: 30,\n  name: 'Фасоль красная',\n  inReserve: true,\n  check: true\n}, {\n  id: 31,\n  name: 'Грецкие орехи',\n  inReserve: true,\n  check: true\n}, {\n  id: 32,\n  name: 'Кинза'\n}, {\n  id: 33,\n  name: 'Орегано',\n  inReserve: true,\n  check: true\n}, {\n  id: 34,\n  name: 'Кориандр',\n  inReserve: true,\n  check: true\n}, {\n  id: 35,\n  name: 'Хмели-сунели',\n  inReserve: true,\n  check: true\n}, {\n  id: 36,\n  name: 'Говядина',\n  inReserve: true,\n  check: true\n}, {\n  id: 37,\n  name: 'Лавровый лист',\n  inReserve: true\n}, {\n  id: 38,\n  name: 'Вода',\n  inReserve: true\n}, {\n  id: 39,\n  name: 'Мука',\n  inReserve: true,\n  check: true\n}, {\n  id: 40,\n  name: 'Макрель конс.сс'\n}, {\n  id: 41,\n  name: 'Сардины конс.сс'\n}, {\n  id: 42,\n  name: 'Сельдерей'\n}, {\n  id: 43,\n  name: 'Шафран',\n  inReserve: true,\n  check: true\n}, {\n  id: 44,\n  name: 'Карри',\n  inReserve: true,\n  check: true\n}, {\n  id: 45,\n  name: 'Тмин',\n  inReserve: true,\n  check: true\n}, {\n  id: 46,\n  name: 'Душистый перец',\n  inReserve: true,\n  check: true\n}, {\n  id: 47,\n  name: 'Макароны Radiatori'\n}, {\n  id: 48,\n  name: 'Помидоры в соб.соку'\n}, {\n  id: 49,\n  name: 'Тыква'\n}, {\n  id: 50,\n  name: 'Перец чили зеленый',\n  inReserve: true,\n  check: true\n}, {\n  id: 51,\n  name: 'Перец чили красный',\n  inReserve: true,\n  check: true\n}, {\n  id: 52,\n  name: 'Йогурт греческий'\n}, {\n  id: 53,\n  name: 'Яблочный уксус',\n  inReserve: true,\n  check: true\n}, {\n  id: 54,\n  name: 'Зира',\n  inReserve: true,\n  check: true\n}, {\n  id: 55,\n  name: 'Чечевица',\n  inReserve: true,\n  check: true\n}, {\n  id: 56,\n  name: 'Кумин',\n  inReserve: true,\n  check: true\n}, {\n  id: 55,\n  name: 'Куриные сердечки'\n}, {\n  id: 56,\n  name: 'Шампиньоны'\n}, {\n  id: 57,\n  name: 'Фасоль стручковая'\n}, {\n  id: 58,\n  name: 'Огурцы мар.'\n}, {\n  id: 59,\n  name: 'Соевый соус',\n  inReserve: true,\n  check: true\n}, {\n  id: 60,\n  name: 'Булгур',\n  inReserve: true,\n  check: true\n}, {\n  id: 61,\n  name: 'Сыр'\n}, {\n  id: 62,\n  name: 'Хлеб ржаной'\n}, {\n  id: 63,\n  name: 'Яйцо'\n}, {\n  id: 64,\n  name: 'Треска'\n}, {\n  id: 65,\n  name: 'Кабачок'\n}, {\n  id: 66,\n  name: 'Мясной бульон'\n}, {\n  id: 67,\n  name: 'Колбаса варёная'\n}, {\n  id: 68,\n  name: 'Оливки'\n}, {\n  id: 69,\n  name: 'Огуречный рассол'\n}, {\n  id: 70,\n  name: 'Каперсы'\n}, {\n  id: 71,\n  name: 'Лимон'\n}, {\n  id: 72,\n  name: 'Укроп'\n}, {\n  id: 66,\n  name: 'Филе курицы'\n}, {\n  id: 67,\n  name: 'Чернослив без косточек'\n}, {\n  id: 68,\n  name: 'Курага'\n}, {\n  id: 69,\n  name: 'Творожный сыр'\n}, {\n  id: 70,\n  name: 'Приправа для курицы'\n}, {\n  id: 66,\n  name: 'Филе курицы'\n}, {\n  id: 67,\n  name: 'Чернослив без косточек'\n}, {\n  id: 68,\n  name: 'Курага'\n}, {\n  id: 69,\n  name: 'Творожный сыр'\n}, {\n  id: 70,\n  name: 'Приправа для курицы'\n}];\n\n\n//# sourceURL=webpack://recipe-cards/./src/app/ingredients.js?");

/***/ }),

/***/ "./src/app/units.js":
/*!**************************!*\
  !*** ./src/app/units.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UNITS\": () => (/* binding */ UNITS)\n/* harmony export */ });\nconst UNITS = [{\n  id: 1,\n  name: 'л'\n}, {\n  id: 2,\n  name: ['кочан', 'кочана']\n}, {\n  id: 3,\n  name: 'шт'\n}, {\n  id: 4,\n  name: ['крупная', 'крупный']\n}, {\n  id: 5,\n  name: 'ст.л'\n}, {\n  id: 6,\n  name: 'ч.л'\n}, {\n  id: 7,\n  name: 'по вкусу'\n}, {\n  id: 8,\n  name: 'г'\n}, {\n  id: 9,\n  name: ['зубчик', 'зубчика', ' зубчиков']\n}, {\n  id: 10,\n  name: ['банка', 'банки', ' банок']\n}, {\n  id: 11,\n  name: 'мл'\n}, {\n  id: 12,\n  name: ['головка', 'головки', ' головок']\n}, {\n  id: 13,\n  name: ['пучок', 'пучка', ' пучков']\n}, {\n  id: 14,\n  name: ['большая', 'большие']\n}, {\n  id: 15,\n  name: ['стебель', 'стебля', ' стеблей']\n}, {\n  id: 16,\n  name: ['м. пучок', 'м. пучка']\n}, {\n  id: 17,\n  name: ['стакан', 'стакана', ' стаканов']\n}, {\n  id: 18,\n  name: ['кусок', 'куска', 'кусков']\n}];\n\n\n//# sourceURL=webpack://recipe-cards/./src/app/units.js?");

/***/ }),

/***/ "./src/app/view/ingredients/ingredients.js":
/*!*************************************************!*\
  !*** ./src/app/view/ingredients/ingredients.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"copy\": () => (/* binding */ copy),\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage),\n/* harmony export */   \"onMount\": () => (/* binding */ onMount),\n/* harmony export */   \"setTab\": () => (/* binding */ setTab),\n/* harmony export */   \"submit\": () => (/* binding */ submit)\n/* harmony export */ });\n/* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ingredients */ \"./src/app/ingredients.js\");\n/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units */ \"./src/app/units.js\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/select */ \"./src/app/components/select/index.js\");\n/* harmony import */ var _ingredients_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients.css */ \"./src/app/view/ingredients/ingredients.css\");\n\n\n\n\n\nconst getIngredientSelect = () => document.querySelector('.ingredient select-with-options > select');\n\nconst getNewIngredient = () => document.querySelector('.ingredient-column > textarea:not(.filter)');\n\nconst getAmountOffInput = () => document.querySelector('.amount-of > input');\n\nconst getUnitSelect = () => document.querySelector('.unit > select');\n\nconst getNewUnit = () => document.querySelector('.unit > textarea');\n\nlet rows = [];\nconst newIngredients = [];\nconst newUnits = [];\n\nconst loadInDB = () => {\n  // TODO сделать загрузка файла по-другому\n  // fs.readFile('\"../../recipes.json\"', (error, data) => {\n  //   if (error) {\n  //     console.error(error);\n  //   }\n  const user = JSON.parse('../../recipes.json');\n  console.log(user);\n};\n\nconst loadPage = () => {\n  const unitSelect = getUnitSelect();\n  const select = document.querySelector('.ingredient select-with-options');\n  if (!select) return;\n  loadInDB();\n  new _components_select__WEBPACK_IMPORTED_MODULE_2__[\"default\"]().init(_ingredients__WEBPACK_IMPORTED_MODULE_0__.INGREDIENTS);\n  _units__WEBPACK_IMPORTED_MODULE_1__.UNITS.forEach(({\n    id,\n    name\n  }) => {\n    if (Array.isArray(name)) {\n      name.forEach((word, index) => {\n        const option = document.createElement('option');\n        option.value = `${id}_${index + 1}`;\n        option.innerHTML = word;\n        option.dataset.index = index + 1;\n        unitSelect.appendChild(option);\n      });\n    } else {\n      const option = document.createElement('option');\n      option.value = id;\n      option.innerHTML = name;\n      unitSelect.appendChild(option);\n    }\n  });\n  const newIngredient = getNewIngredient();\n  newIngredient.addEventListener('keypress', event => {\n    event.stopPropagation();\n\n    if (event.key === 'Enter') {\n      const newIngredientId = getMaxIngrendientId();\n      newIngredients.push({\n        id: newIngredientId,\n        name: newIngredient.value\n      });\n      const allIngredients = [..._ingredients__WEBPACK_IMPORTED_MODULE_0__.INGREDIENTS, ...newIngredients];\n      updateIngredientSelect(allIngredients);\n      const ingredientSelect = getIngredientSelect(); // ingredientSelect.appendChild(option);\n\n      ingredientSelect.value = newIngredientId; // TODO убрать выставление переноса строки полю\n\n      setTimeout(() => {\n        newIngredient.value = '';\n      }, 0);\n    }\n  });\n  const ingredientFilter = document.querySelector('.ingredient .filter');\n  ingredientFilter.addEventListener('keypress', event => {\n    event.stopPropagation();\n    const filter = ingredientFilter.value;\n    const allIngredients = [..._ingredients__WEBPACK_IMPORTED_MODULE_0__.INGREDIENTS, ...newIngredients];\n    const filterdIngredients = allIngredients.filter(({\n      name\n    }) => name.toLowerCase().includes(filter.toLowerCase()));\n    updateIngredientSelect(filterdIngredients);\n  });\n  const newUnit = getNewUnit();\n  newUnit.addEventListener('keypress', event => {\n    event.stopPropagation();\n\n    if (event.key === 'Enter') {\n      const allUnits = [..._units__WEBPACK_IMPORTED_MODULE_1__.UNITS, ...newUnits];\n      const newUnitId = allUnits[allUnits.length - 1].id + 1;\n      const newUnitName = newUnit.value;\n      const unitsSelect = getUnitSelect();\n      const names = newUnitName.replace(' ', '').split(',');\n\n      if (Array.isArray(names)) {\n        newUnits.push({\n          id: newUnitId,\n          name: JSON.stringify(names)\n        });\n        names.forEach((value, index) => {\n          addUnit(value, `${newUnitId}_${index + 1}`, index + 1);\n        });\n        unitsSelect.value = newUnitId + names.length - 1;\n      } else {\n        newUnits.push({\n          id: newUnitId,\n          name: newUnitName\n        });\n        addUnit(newUnitName, newUnitId);\n        unitsSelect.value = newUnitId;\n      } // TODO убрать выставление переноса строки полю\n\n\n      setTimeout(() => {\n        newUnit.value = '';\n      }, 0);\n    }\n  });\n  const jsonContainer = document.querySelector('.json-container > textarea');\n  jsonContainer.addEventListener('keypress', event => {\n    if (event.key === 'Enter') {\n      rows = JSON.parse(jsonContainer.value);\n    }\n  });\n};\n\nconst addUnit = (value, id, index) => {\n  const option = document.createElement('option'); // TODO навести порядок в именовании классов\n\n  option.value = id;\n  option.innerHTML = value;\n\n  if (index) {\n    option.dataset.index = index;\n  }\n\n  const unitsSelect = getUnitSelect();\n  unitsSelect.appendChild(option);\n};\n\nconst setTab = (event, tabId) => {\n  document.querySelectorAll('.tab').forEach(tab => {\n    tab.classList = 'tab tab-shade';\n  });\n  document.querySelector(`.tab[data-index=${tabId}]`).classList.toggle('tab-shade');\n  const textarea = document.querySelector('.json-container textarea');\n  textarea.value = '';\n\n  switch (tabId) {\n    case 'row':\n      textarea.value = JSON.stringify(rows, undefined, 4);\n      break;\n\n    case 'ingredients':\n      textarea.value = JSON.stringify(newIngredients, undefined, 4);\n      break;\n\n    case 'units':\n      textarea.value = JSON.stringify(newUnits, undefined, 4);\n      break;\n\n    default:\n      break;\n  }\n};\n\nconst submit = () => {\n  const ingredientSelect = getIngredientSelect();\n  const amountOf = getAmountOffInput();\n  const unitSelect = getUnitSelect();\n  const unitId = unitSelect.value;\n  const unitIndex = document.querySelector(`option[value='${unitId}']`).dataset.index;\n  rows.push({\n    id: rows.length + 1,\n    ingredientId: ingredientSelect.value,\n    ...(amountOf.value && {\n      amountOf: amountOf.value\n    }),\n    unitId: unitId.split('_')[0],\n    ...(unitIndex && {\n      index: unitIndex\n    })\n  });\n  document.querySelector('.json-container textarea').value = JSON.stringify(rows, undefined, 2);\n  ingredientSelect.value = null;\n  amountOf.value = null;\n  unitSelect.value = null;\n};\n\nconst updateIngredientSelect = options => {\n  const select = document.querySelector('.ingredient select-with-options');\n  select.updateOptions(options);\n};\n\nconst getMaxIngrendientId = () => Math.max.apply(null, [..._ingredients__WEBPACK_IMPORTED_MODULE_0__.INGREDIENTS, ...newIngredients].map(({\n  id\n}) => id)) + 1;\n\nconst copy = () => {\n  JSON.stringify(rows, undefined, 4);\n  const activeTab = document.querySelector('.tab:not(.tab-shade)').dataset.index;\n\n  switch (activeTab) {\n    case 'row':\n      navigator.clipboard.writeText(JSON.stringify(rows, undefined, 2).replaceAll('\\\\\"', '\\'').replaceAll('\"', '').replaceAll('[{', '{').replaceAll('}]', '}'));\n      break;\n\n    case 'ingredients':\n      const text = JSON.stringify(newIngredients, undefined, 2);\n      const result = [...text.matchAll(/\"name\": \"([\\wа-яА-Я]+)\"/g)].reduce((acc, [expression, value]) => acc.replace(expression, `\"name\": '${value}'`), text).replaceAll('\\\\\"', '\\'').replaceAll('\"', '').replaceAll('[{', '{').replaceAll('}]', '');\n      navigator.clipboard.writeText(result);\n      break;\n\n    case 'units':\n      navigator.clipboard.writeText(JSON.stringify(newUnits, undefined, 2).replaceAll('\\\\\"', '\\'').replaceAll('\"', '').replaceAll('[{', '{').replaceAll(' }]', ''));\n      break;\n\n    default:\n      break;\n  }\n};\n\nconst onMount = () => {// console.log('%c%s', 'background: cadetblue; padding: 8px;', 'onMount');\n};\n\n\nwindow.loadPage = loadPage;\nwindow.setTab = setTab;\nwindow.submit = submit;\nwindow.copy = copy;\nwindow.onMount = onMount;\nloadPage();\n\n//# sourceURL=webpack://recipe-cards/./src/app/view/ingredients/ingredients.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app/view/ingredients/ingredients.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app/view/ingredients/ingredients.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n\\n[class^=\\\"box-\\\"] {\\n  background-color: skyblue;\\n  /* Размещаем контейнеры по центру */\\n  display: grid;\\n  place-items: center;\\n}\\n\\n.ingredient__container {\\n  display: grid;\\n  grid-template-columns: 1fr 1024px 1fr;\\n}\\n\\n.ingredient__content {\\n  display: grid;\\n  gap: 10px;\\n  grid-template-columns: 1fr 1fr 1fr;\\n}\\n\\n.ingredient__center {\\n  background: antiquewhite;\\n  padding: 32px;\\n}\\n\\n.ingredient-column {\\n  grid-template-rows: 16px 36px 36px 64px;\\n  display: grid;\\n  grid-row-gap: 8px;\\n}\\n\\n/* .ingredient-column > textarea:not(.filter) {\\n  margin-top: 16px;\\n} */\\n\\n.amount-of {\\n  grid-template-rows: 16px 36px;\\n  display: grid;\\n  grid-row-gap: 8px;\\n}\\n\\n.unit {\\n  grid-template-rows: 16px 36px 64px;\\n  display: grid;\\n  grid-row-gap: 8px;\\n}\\n\\n.center {\\n  display: grid;\\n  grid-template-rows: auto 40px 64px;\\n}\\n\\n.actions {\\n  display: grid;\\n  justify-items: end;\\n  grid-template-columns: 1fr 98px;\\n}\\n\\n.ingredient {\\n  font-family: sans-serif;\\n  display: grid;\\n  grid-template-rows: 32px 1fr 32px;\\n}\\n\\nselect, textarea, input {\\n  font-size: 16px;\\n  padding: 8px;\\n  border-radius: 4px;\\n  background: white;\\n  width: 100%;\\n  border: solid 1px #9E9E9E;\\n}\\n\\n\\n\\nbutton {\\n  font-size: 16px;\\n  padding: 8px;\\n  border-radius: 4px;\\n  border: solid 1px #9E9E9E;\\n}\\n\\n\\nlabel {\\n  font-size: 16px;\\n}\\n\\n.tabs {\\n  z-index: 1;\\n  display: grid;\\n  grid-template-columns: 200px 200px 200px;\\n  grid-column-gap: 8px;\\n}\\n\\n.tab {\\n  border-radius: 4px 4px 0px 0px;\\n  border-bottom: solid 1px #efefef;\\n}\\n\\n.tab:focus {\\n  outline-width: 0px;\\n}\\n\\n.tab-shade {\\n  border-bottom: solid 1px #9E9E9E;\\n}\\n\\n.json-container {\\n  display: grid;\\n  grid-template-rows: 38px;\\n  background-color: #efefef;\\n  border: solid 1px #9E9E9E;\\n  padding: 8px;\\n  z-index: 0;\\n}\\n\\n.json-container>textarea {\\n  height: 180px;\\n}\\n\\n.json-containers {\\n  display: grid;\\n  grid-template-rows: 35px 200px;\\n}\\n\\n.buttom_primary {\\n  background-color: #CDDC39;\\n}\\n\\n.buttom_secondary  {\\n  background-color: #ffeb3b;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://recipe-cards/./src/app/view/ingredients/ingredients.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/app/view/ingredients/ingredients.css":
/*!**************************************************!*\
  !*** ./src/app/view/ingredients/ingredients.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ingredients_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./ingredients.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app/view/ingredients/ingredients.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ingredients_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ingredients_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ingredients_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ingredients_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://recipe-cards/./src/app/view/ingredients/ingredients.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://recipe-cards/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/view/ingredients/ingredients.js");
/******/ 	
/******/ })()
;