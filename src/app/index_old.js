// "use strict";
// eval("__webpack_require__.r(__webpack_exports__);

// /* harmony export */ __webpack_require__.d(__webpack_exports__, {

// /* harmony export */   \"createCard\": () => (/* binding */ createCard),/* harmony export */   \"


// createCards: () => (/* binding */ createCards),/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),
// /* harmony export */   \"saveSvg\": () => (/* binding */ saveSvg)/* harmony export */ });/* 
// harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/ * ! ./ style.css * / \"./src / app / style.css\");
// /* harmony import */ var _svg_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-style.css */ \"./src/app/svg-style.css\");/* harmony
// import */ var _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/ * ! @doist / todoist - api - typescript * / \"./node_modules / @doist / todoist - api - typescript / dist / index.js\");
// harmony import */ var _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_5___default = / * #__PURE__ * /__webpack_require__.n(_doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_5__);
// harmony import */ var _units__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/ * ! ./ units * / \"./src / app / units.js\");
// /* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes */ \"./src/app/recipes.js\");
// /* harmony import */ var _ingredients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingredients */ \"./src/app/ingredients.js\");
const mm = value => `${value}mm`;
const NAMESPACE = 'http://www.w3.org/2000/svg';
const CARD_WIDTH = 104;
const CARD_HEIGHT = 148;
const BASE_OFFSET = 16;
const PRODUCTS_OFFSET = 50;
const INGREDIENTS_MAX_CHAR_COUNT = 20;
const DIRECTIONS_MAX_CHAR_COUNT = 34;
const TYPE = {
  SVG: 'svg',
  GROUP: 'g',
  RECTANGLE: 'rect',
  TEXT: 'text',
  TSPAN: 'tspan'
};

const init = () => {
  const cardsNumberSelect1 = document.querySelector('.cards__number1');
  const cardsNumberSelect2 = document.querySelector('.cards__number2');
  if (!cardsNumberSelect1) return;
  _recipes__WEBPACK_IMPORTED_MODULE_3__.RECIPES.forEach(({ id, title }) => {
    const option1 = document.createElement('option');
    option1.value = id; option1.innerHTML = title;
    cardsNumberSelect1.appendChild(option1);
    const option2 = document.createElement('option');
    option2.value = id; option2.innerHTML = title;
    cardsNumberSelect2.appendChild(option2);
  });
};

init();

const createCards = () => {
  const cardsNumberSelect1 = document.querySelector('.cards__number1');
  const cardsNumberSelect2 = document.querySelector('.cards__number2');

  createCard(+cardsNumberSelect1.value, 0, 0);
  createCard(+cardsNumberSelect2.value, 0, 148);
};

const createSvgElement = (type, attrs = {}, textContent = '') => {
  const node = document.createElementNS(NAMESPACE, type);

  Object.entries(attrs).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  if ([TYPE.TEXT, TYPE.TSPAN].includes(type)) {
    node.textContent = textContent;
  }

  return node;
};

const trimRow = (limit, text) => text.split(' ')
  .reduce((acc, word, index) => {
    const lastElement = acc.length - 1;
    if (index === 0) return [word];

    const prevElement = acc[lastElement];

    return prevElement.length < 3
      ? [...acc.slice(0, -1), `${prevElement} ${word}`]
      : [...acc, word];
  }, [])
  .reduce((acc, word) => {
    if (!acc.length) return [word]; const lastIndex = acc.length - 1; const lastElement = acc[lastIndex]; const rowWithNewWord = `${lastElement} ${word}`; return rowWithNewWord.length < limit ? [...acc.slice(0, -1), rowWithNewWord] : [...acc, word];
  }, []);

const createCard = (cardId, x0, y0) => {
  const startX = +x0;
  const startY = +y0;

  let svg = document.querySelector('svg');

  const container = document.querySelector('.cards__container');

  if (!svg) {
    svg = createSvgElement(TYPE.SVG, { width: mm(210), height: mm(297) });
  }

  const recipeGroup = createSvgElement(TYPE.GROUP);

  const recipeContainer = createSvgElement(
    TYPE.RECTANGLE, {
    x: mm(startX),
    y: mm(startY),
    width: mm(CARD_WIDTH),
    height: mm(CARD_HEIGHT),
    class: 'recipe__container'
  });

  const {
    id,
    title,
    ingredients,
    directions
  } = _recipes__WEBPACK_IMPORTED_MODULE_3__.RECIPES.find(({ id }) => cardId === id);

  const recipeTitle = createSvgElement(TYPE.TEXT, {
    'text-anchor': 'middle',
    x: mm(startX + CARD_WIDTH / 2),
    y: mm(startY + BASE_OFFSET),
    class: 'title',
    style: `${title.length > 20 ? 'font-size: 16px;' : ''}`
  },
    `${id}. ${title}`
  );

  const ingredientsAmountOfGroup = createSvgElement(TYPE.GROUP, { class: 'content' });

  const ingredientMainText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + BASE_OFFSET),
    y: mm(startY + BASE_OFFSET * 2)
  });

  const ingredientProductsText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + PRODUCTS_OFFSET),
    y: mm(startY + BASE_OFFSET * 2)
  });

  ingredients.reduce((acc, { ingredientId, ...rest }) => {
    const a = _ingredients__WEBPACK_IMPORTED_MODULE_4__.INGREDIENTS.find(({ id }) => id === ingredientId);

    const ingredientElementsRows = trimRow(INGREDIENTS_MAX_CHAR_COUNT, _ingredients__WEBPACK_IMPORTED_MODULE_4__.INGREDIENTS.find(({ id }) => id === ingredientId).name);

    return [...acc, { ingredientId, ingredientElementsRows, ...rest }];
  }, [])
    .reduce((acc, { amountOf, unitId, index: unitIndex, isAnalogue, ingredientId, ingredientElementsRows }, index) => {
      const isFirstRow = index === 0; const lastRowCount = isFirstRow ? 1 : acc[acc.length - 1].rowCount;

      const unit = _units__WEBPACK_IMPORTED_MODULE_2__.UNITS.find(({ id }) => id === unitId).name;

      const amountOfUnitElement = createSvgElement(TYPE.TSPAN, {
        x: mm(startX + BASE_OFFSET),
        dy: isFirstRow ? '0' :
          isAnalogue ? '0.8em' : `${(lastRowCount + 1) * 0.8}em`
      },
        `▪ ${amountOf || ''} ${Array.isArray(unit) ? unit[unitIndex] : unit}`);

      ingredientMainText.appendChild(amountOfUnitElement); ingredientElementsRows.forEach((word, wordIndex) => {
        const productRow = createSvgElement(TYPE.TSPAN, {
          x: mm(startX + PRODUCTS_OFFSET),
          dy: isFirstRow && wordIndex === 0 ? '0' : wordIndex === 0 && !isAnalogue ? '1.6em' : '0.8em'
        },
          isAnalogue ? `или ${word.toLowerCase()}` : word); ingredientProductsText.appendChild(productRow);
      });

      return [...acc, { rowCount: ingredientElementsRows.length }];
    }, []);

  ingredientsAmountOfGroup.appendChild(ingredientMainText);
  ingredientsAmountOfGroup.appendChild(ingredientProductsText);

  recipeGroup.appendChild(recipeContainer);
  recipeGroup.appendChild(recipeTitle);
  recipeGroup.appendChild(ingredientsAmountOfGroup);
  svg.appendChild(recipeGroup);
  container.appendChild(svg);

  // ---------------------------- //

  const directionsGroup = createSvgElement(TYPE.GROUP, {
    class: 'content'
  });

  const directionsTitle = createSvgElement(TYPE.TEXT, {
    // TODO 52 в константы
    x: mm(startX + CARD_WIDTH + 52),
    y: mm(startY + BASE_OFFSET),
    'text-anchor': 'middle',
    class: 'preparing'
  }, 'Приготовление');

  const directionsMainText = createSvgElement(TYPE.TEXT, {
    x: mm(startX + CARD_WIDTH + BASE_OFFSET / 2),
    y: mm(startY + BASE_OFFSET * 2), class: 'preparing__content'
  });

  const PIXEL_IN_MM = 0.26; directions.forEach((direction, index) => {
    trimRow(DIRECTIONS_MAX_CHAR_COUNT, direction).forEach((row, rowIndex) => {
      if (rowIndex === 0) {
        directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
          x: mm(startX + CARD_WIDTH + BASE_OFFSET / 2),
          dy: index === 0 && rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em', class: 'bold'
        }, `${index + 1}.`));
      }

      directionsMainText.appendChild(createSvgElement(TYPE.TSPAN, {
        x: rowIndex === 0 ? mm(startX + CARD_WIDTH + BASE_OFFSET / 2 + 16 * (`${index}`.length + 1) * PIXEL_IN_MM)
          : mm(startX + CARD_WIDTH + BASE_OFFSET), dy: rowIndex === 0 ? '0' : rowIndex === 0 ? '1.5em' : '0.8em'
      }, row));
    });
  });

  const directionsContainer = createSvgElement(TYPE.RECTANGLE, {
    x: mm(startX + CARD_WIDTH),
    y: mm(startY),
    width: mm(CARD_WIDTH),
    height: mm(CARD_HEIGHT),

    // TODO вынести в класс
    style: 'fill: none; stroke: black; stroke-width: 1'
  });

  recipeGroup.appendChild(directionsGroup);
  recipeGroup.appendChild(directionsTitle);
  recipeGroup.appendChild(directionsMainText);
  recipeGroup.appendChild(directionsContainer);

  const topHoleRect = createSvgElement(TYPE.RECTANGLE, {
    x: mm(0 + startX),
    y: mm(32 + startY),
    width: mm(10),
    height: 2,
    // TODO в стиль
    style: 'fill: #dfdfdf; stroke: none;'
  });
  const bottomHoleRect = createSvgElement(TYPE.RECTANGLE, {
    x: mm(0 + startX),
    y: mm(112 + startY),
    width: mm(10),
    height: 2,
    // TODO в стиль
    style: 'fill:#dfdfdf; stroke: none;'
  });

  recipeGroup.appendChild(topHoleRect);
  recipeGroup.appendChild(bottomHoleRect);
};

const saveSvg = () => {
  const svg = document.querySelector('svg');
  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);
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
  // const getProjects = () => {  const api = new _doist_todoist_api_typescript__WEBPACK_IMPORTED_MODULE_5__.TodoistApi('b6d07921bc749d4f50040963cd1bc13a51fd33e2');
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
  // };

window.createCard = createCard;
window.saveSvg = saveSvg;
window.getProjects = getProjects;
window.createCards = createCards;

// # sourceURL=webpack://recipe-cards/./src/app/index.js?");
