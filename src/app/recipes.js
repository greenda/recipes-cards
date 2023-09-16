// eval("__webpack_require__.r(__webpack_exports__);
// /* harmony export */ __webpack_require__.d(__webpack_exports__, { /* harmony export */
// \"RECIPES\": () => (/* binding */ RECIPES) /* harmony export */ });

// TODO писать тексты в одном стиле (режем, разогеваем...)

const RECIPES = [{
  id: 1,
  title: 'Борщ от Высоцкой',
  ingredients: [{
    id: 1,
    ingredientId: 1,
    amountOf: 1.5,
    unitId: 1
  }, {
    id: 2,
    ingredientId: 2,
    amountOf: 0.5,
    unitId: 2,
    index: 1
  }, {
    id: 3,
    ingredientId: 3,
    amountOf: 3,
    unitId: 3
  }, {
    id: 4,
    ingredientId: 4,
    amountOf: 1,
    unitId: 3
  }, {
    id: 5,
    ingredientId: 5,
    amountOf: 1,
    unitId: 4,
    index: 0
  }, {
    id: 6,
    ingredientId: 6,
    amountOf: 1,
    unitId: 4,
    index: 0
  }, {
    id: 7,
    ingredientId: 7,
    amountOf: 1,
    unitId: 4,
    index: 1
  }, {
    id: 8,
    ingredientId: 8,
    amountOf: '2-3',
    unitId: 3
  }, {
    id: 9,
    isAnalogue: true,
    ingredientId: 9,
    amountOf: 1.5,
    unitId: 5
  }, {
    id: 10,
    ingredientId: 10,
    amountOf: 100,
    unitId: 5
  }, {
    id: 11,
    ingredientId: 11,
    unitId: 7
  }, {
    id: 12,
    ingredientId: 12,
    amountOf: 1,
    unitId: 5
  }, {
    id: 13,
    ingredientId: 13,
    unitId: 7
  }, {
    id: 14,
    ingredientId: 14,
    unitId: 7
  }],
  directions: [
    'Вымытый и очищенный картофель и перец режем кубиками, а капусту - соломкой.',
    'Опускаем овощи в кипящий бульон.',
    'Морковь натираем на крупной терке, лук мелко режем.',
    'Свёклу натираем на крупной терке.',
    'Разогреваем на сковороде масло, обжариваем на нём лук, добавляем морковь.',
    'Через некоторое время добавляем свёклу. Тушим.',
    'Добавляем протертые помидоры или томатную пасту и лимонный сок. Тушим 20-25 мин до готовности.',
    'Готовую заправку выкладываем в кастрюлю с бульоном, солим, перчим, добавляем зелень. Доводим до кипения и снимаем с огня.',
    'Даём настояться. Подаём со сметаной и зеленью.'
  ],
  nutritionalValue: ''
}, {
  id: 2,
  title: 'Индейка в сметане в духовке',
  nutritionalValue: '11/7/7 143',
  ingredients: [{
    id: 1,
    ingredientId: 24,
    amountOf: 300,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 7,
    amountOf: 70,
    unitId: 12,
    index: 1
  }, {
    id: 3,
    ingredientId: 13,
    amountOf: 200,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 25,
    amountOf: 1,
    unitId: 6
  }, {
    id: 5,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 6,
    ingredientId: 23,
    unitId: 7
  }, {
    id: 7,
    ingredientId: 26,
    unitId: 7
  }, {
    id: 8,
    ingredientId: 27,
    unitId: 7
  }, {
    id: 9,
    ingredientId: 28,
    amountOf: 5,
    unitId: 8
  }, {
    id: 10,
    ingredientId: 29,
    amountOf: 2,
    unitId: 5
  }],
  directions: [
    'Разогреваем духовку до 180°.',
    'Моем и очищаем луковицу, моем и просушиваем 300 г филе.',
    'Луковицу нарезаем полукольцами. Филе нарезаем средними кусочками.',
    'Пассируем лук на растительном масле, добавляем индейку и готовим 7-8 минут.',
    'В конце приготовления добавляем соль, перец, паприку и сухой чеснок.',
    'Перекладываем индейку в форму, добавляем 200г сметаны и 1ч.л. горчицы.',
    'Запекаем при 180° 25-30 минут.', 'Готовое блюдо посыпаем укропом и подаём.'
  ]
}, {
  id: 3,
  title: 'Суккотаж',
  nutritionalValue: '21/15/37 370',
  ingredients: [{
    id: 1,
    ingredientId: 4,
    amountOf: 2,
    unitId: 3
  }, {
    id: 2,
    ingredientId: 15,
    amountOf: 4,
    unitId: 9,
    index: 2
  }, {
    id: 3,
    ingredientId: 16,
    amountOf: 400,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 17,
    amountOf: 1,
    unitId: 10,
    index: 1
  }, {
    id: 5,
    ingredientId: 18,
    amountOf: 1,
    unitId: 1
  }, {
    id: 6,
    ingredientId: 19,
    amountOf: 50,
    unitId: 11,
    index: 1
  }, {
    id: 7,
    ingredientId: 20,
    amountOf: 2,
    unitId: 5
  }, {
    id: 8,
    ingredientId: 21,
    amountOf: 2,
    unitId: 5
  }, {
    id: 9,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 10,
    ingredientId: 23,
    unitId: 7
  }, {
    id: 11,
    ingredientId: 7,
    amountOf: 1,
    unitId: 12,
    index: 1
  }], directions: [
    'Лук очищаем и немелко нарезаем, обжариваем на сливочном масле около 2 минут.',
    'Моем, чистим болгарский перец и нарезаем полосочками. Добавляем к луку и жарим ещё 7 минут.',
    'Очищаем чеснок, измельчаем и добавляем к овощам. Перемешиваем и даём обжариться ещё минуту.',
    'Добавляем вареную фасоль, кукурузу.',
    'Заливаем горячим бульоном и от момента закипания варим 10 минут на слабом огне. Солим и перчим по вкусу.',
    'В конце добавляем сливки и прогреваем.',
    'Добавляем зелень и снимаем с огня.',
    'Даём супу настояться 15-20 минут (можно и дольше). Подаём с сухариками-крутонами.'
  ]
}, {
  id: 4,
  title: 'Лобио',
  ingredients: [{
    id: 1,
    ingredientId: 30,
    amountOf: 400,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 29,
    amountOf: 2,
    unitId: 5
  }, {
    id: 3,
    ingredientId: 7,
    amountOf: 2,
    unitId: 12,
    index: 2
  }, {
    id: 4,
    ingredientId: 8,
    amountOf: '4-5',
    unitId: 3
  }, {
    id: 5,
    ingredientId: 31,
    amountOf: 100,
    unitId: 8
  }, {
    id: 6,
    ingredientId: 32,
    amountOf: 0.5,
    unitId: 13,
    index: 2
  }, {
    id: 7,
    ingredientId: 33,
    amountOf: 0.5,
    unitId: 13,
    index: 2
  }, {
    id: 8,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 9,
    ingredientId: 34,
    unitId: 7
  }, {
    id: 10,
    ingredientId: 35,
    unitId: 7
  }],
  directions: [
    'Замачиваем на ночь 400 г фасоли и отвариваем её в солёной воде.',
    'Чистим и измельчаем 2 луковицы.',
    'Пассеруем их до золотистого цвета и смешиваем с фасолью.',
    'Опускаем в горячую воду 4-5 томатов, снимаем кожицу, разминаем мякоть в пюре и смешиваем с фасолью.',
    'Добавляем 100 г толчёных грецких орехов, по половине пучка кинзы и орегано, солим, добавляем кориандр и хмели-сунели.',
    'Часто помешивая, тушим фасоль на слабом огне 20 минут.',
    'Подавать с жареной свининой или кукурузной кашей.'
  ]
}, {
  id: 5,
  title: 'Венгерский гуляш',
  ingredients: [{
    id: 1,
    ingredientId: 7,
    amountOf: 2,
    unitId: 12,
    index: 2
  }, {
    id: 2,
    ingredientId: 36,
    amountOf: 800,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 3,
    amountOf: 10,
    unitId: 3
  }, {
    id: 4,
    ingredientId: 37,
    amountOf: 2,
    unitId: 3
  }, {
    id: 5,
    ingredientId: 26,
    amountOf: 2,
    unitId: 5
  }, {
    id: 6,
    ingredientId: 38,
    amountOf: 700,
    unitId: 11
  }, {
    id: 7,
    ingredientId: 39,
    amountOf: 2,
    unitId: 5
  }, {
    id: 8,
    ingredientId: 29,
    amountOf: 2,
    unitId: 5
  }],
  directions: [
    'Говядину 800 г моем, высушиваем, освобождаем от пленок, режем небольшими кусочками.',
    'Жарим говядину на растительном масле до румяного цвета.',
    '2 головки лука очищаем, режем небольшими кубиками и жарим в той же сковороде до золотистого цвета.',
    'Складываем мясо и лук в кастрюлю, добавляем 2 ст.л паприки, лавровый лист и 2 ст.л муки.',
    ' Вливаем 200 мл воды и доводим до кипения. Делаем огонь на минимум и тушим около 1 часа под крышкой.',
    '10 шт картофеля очищаем и нарезаем крупными дольками. Добавляем его к мясу, вливаем 500 мл воды.',
    'Солим и тушим около 40 мин.'
  ]
}, {
  id: 6,
  title: 'Суп из консервов',
  ingredients: [{
    id: 1,
    ingredientId: 40,
    amountOf: 250,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 41,
    amountOf: 250,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 7,
    amountOf: 1,
    unitId: 14,
    index: 1
  }, {
    id: 4,
    ingredientId: 5,
    amountOf: 1,
    unitId: 14,
    index: 1
  }, {
    id: 5,
    ingredientId: 42,
    amountOf: 1,
    unitId: 15,
    index: 1
  }, {
    id: 6,
    ingredientId: 3,
    amountOf: '2-3',
    unitId: 3
  }, {
    id: 7,
    ingredientId: 43,
    amountOf: 1,
    unitId: 6
  }, {
    id: 8,
    ingredientId: 44,
    amountOf: 0.5,
    unitId: 6
  }, {
    id: 9,
    ingredientId: 45,
    amountOf: 0.5,
    unitId: 6
  }, {
    id: 10,
    ingredientId: 37,
    amountOf: '2-3',
    unitId: 3
  }, {
    id: 11,
    ingredientId: 46,
    amountOf: '6-7',
    unitId: 3
  }, {
    id: 12,
    ingredientId: 28,
    amountOf: 1,
    unitId: 13,
    index: 1
  }, {
    id: 13,
    ingredientId: 29,
    amountOf: 1,
    unitId: 5
  }, {
    id: 14,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 15,
    ingredientId: 23,
    unitId: 7
  }],
  directions: [
    'Одну большую луковицу, одну большую морковь, один стебель сельдерея моем, чистим.',
    'Моем, чистим 2-3 картофелины.', 'Лук, морковь, сельдерей нарезаем кусочками, поджариваем на растительном масле.',
    'Добавляем картофель, шафран 1 ч.л., 2-3 лавровых листа, перец.', 'Заливаем 750 мл воды и варим до готовности овощей.',
    'Рыбу из консервов разбираем на кусочки, удаляем косточки, выкладываем вместе с жидкостью в суп.',
    'Солим, добавляем 0.5 ч.л. карри и 0.5 ч.л тмина, укроп и варим ещё 5-7 минут.'
  ]
}, {
  id: 7,
  title: 'Ароматная паста с тыквой',
  ingredients: [{
    id: 1,
    ingredientId: 47,
    amountOf: 300,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 48,
    amountOf: 300,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 49,
    amountOf: 200,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 7,
    amountOf: 2,
    unitId: 12,
    index: 2
  }, {
    id: 5,
    ingredientId: 50,
    amountOf: 0.5,
    unitId: 3
  }, {
    id: 6,
    ingredientId: 51,
    amountOf: 0.5,
    unitId: 3
  }, {
    id: 7,
    ingredientId: 15,
    amountOf: 1,
    unitId: 9,
    index: 1
  }, {
    id: 8,
    ingredientId: 32,
    amountOf: 1,
    unitId: 16,
    index: 1
  }, {
    id: 9,
    ingredientId: 52,
    amountOf: 200,
    unitId: 8
  }, {
    id: 10,
    ingredientId: 10,
    amountOf: 6,
    unitId: 5
  }, {
    id: 11,
    ingredientId: 53,
    amountOf: 1,
    unitId: 6
  }, {
    id: 12,
    ingredientId: 54,
    amountOf: '1/4',
    unitId: 6
  }, {
    id: 13,
    ingredientId: 23,
    unitId: 7
  }, {
    id: 14,
    ingredientId: 22,
    unitId: 7
  }],
  directions: [
    'Духовку разогреваем до 180°.',
    'Тыкву 200г чистим, нарезам на кубики, лук 2 головки чистим, режем дольками, поливаем 1-2 ст.л масла, выкладываем на противень, посыпаем 1/4 ч.л. зиры, солим, перчим, запекаем до готовности.',
    'Макароны 200г отвариваем в подсоленой воде на 1 минуту меньше, чем указано на упаковке.',
    'Чеснок чистим и мелко рубим, поджариваем на нескольких ложках оливкового масла.',
    'Весь или нарезаем тонкими колечками и отправляем к чесноку. Добавляем помидоры, солим, перемешиваем и прогреваем.',
    'Запеченую тыкву выкладываем в блендер, вливаем оставшееся масло, яблочный уксус 1ч.л и измельчаем в пюре.',
    'Пюре в сковороду с помидорами и чили, все перемешиваем, добавляем макароны, снова перемешиваем.',
    'Подаём с мелкопорубленной кинзой и йогуртом.'
  ]
}, {
  id: 8,
  title: 'Тыквенный суп с чечевицей',
  ingredients: [{
    id: 1,
    ingredientId: 42,
    amountOf: '1 / 2',
    unitId: 3
  }, {
    id: 2,
    ingredientId: 49,
    amountOf: 500,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 5,
    amountOf: 1,
    unitId: 3
  }, {
    id: 4,
    ingredientId: 55,
    amountOf: 1,
    unitId: 17,
    index: 1
  }, {
    id: 5,
    ingredientId: 7,
    amountOf: 1,
    unitId: 3
  }, {
    id: 6,
    ingredientId: 26,
    amountOf: 1,
    unitId: 6
  }, {
    id: 7,
    ingredientId: 56,
    unitId: 7
  }, {
    id: 8,
    ingredientId: 44,
    amountOf: 1 / 2,
    unitId: 6
  }, {
    id: 9,
    ingredientId: 18,
    amountOf: 1,
    unitId: 1
  }, {
    id: 10,
    ingredientId: 19,
    amountOf: 50,
    unitId: 11
  }], directions: [
    'Пассеруем 1 головку лука, добавляем нарезанный кубиками 1 морковь, 500г тыквы, 1/2 стебля сельдерея, обжариваем 5 мин.',
    'Добавляем 1 стакан чечевицы, заливаем бульоном и варим 20-25 минут до мягкости, накрыв крышкой.',
    'Добавляем 1 ч.л. паприки, кумин по вкусу, карри 1/2 ч.л.', 'Делаем пюре, добавляем сливки. Подаём с тыквенными семечками.'
  ]
}, {
  id: 9,
  title: 'Булгур с сердечками и овощами',
  ingredients: [{
    id: 1,
    ingredientId: 55,
    amountOf: 500,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 7,
    amountOf: 1,
    unitId: 12,
    index: 1
  }, {
    id: 3,
    ingredientId: 56,
    amountOf: 150,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 4,
    amountOf: 2,
    unitId: 3
  }, {
    id: 5,
    ingredientId: 57,
    amountOf: 100,
    unitId: 8
  }, {
    id: 6,
    ingredientId: 58,
    amountOf: 4,
    unitId: 3
  }, {
    id: 7,
    ingredientId: 8,
    amountOf: 2,
    unitId: 3
  }, {
    id: 8,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 9,
    ingredientId: 54,
    unitId: 7
  }, {
    id: 10,
    ingredientId: 23,
    unitId: 7
  }, {
    id: 11,
    ingredientId: 13,
    amountOf: 2,
    unitId: 5
  }, {
    id: 12,
    ingredientId: 25,
    amountOf: 1,
    unitId: 5
  }, {
    id: 13,
    ingredientId: 59,
    amountOf: 2,
    unitId: 5
  }, {
    id: 14,
    ingredientId: 60,
    amountOf: 150,
    unitId: 8
  }, {
    id: 15,
    ingredientId: 15,
    amountOf: '1 / 2',
    unitId: 12,
    index: 1
  }],
  directions: [
    'Нарезаем 1 луковицу полукольцами, обжариваем. В это время готовим булгур (крупу в кипящую соленую воду 1/2, 10-15 мин на сл.огне).',
    'Добавляем 500г куриных сердечек, жарим 15 мин. Добавляем шампиньоны 150г, жарим 10 мин. Солим, перчим, добавляем зиру.',
    'Добавляем мелко порезанный болгарский перец 2 шт. и обжариеваем до мягкости.',
    'Добавляем 100г фасоли и жарим 15 минут. Затем огурчики 4 шт, жарим 10 мин. Добавляем 2 помидора, обжариваем 10 мин.',
    'Добавляем горчицу 1 ст.л., сметану 2 ст.л., соевый соус 2 ст.л, тушим на слабом огне около 10 мин.',
    'Выкладываем содержимое сковороды к булгуру, перемешиваем, тушим ещё 7 минут. В конце добавляем мелко порезанный чеснок, держим ещё 5 минут.'
  ]
}, {
  id: 10,
  title: 'Чеснечка',
  ingredients: [{
    id: 1,
    ingredientId: 18,
    amountOf: 1.5,
    unitId: 1
  }, {
    id: 2,
    ingredientId: 3,
    amountOf: 3,
    unitId: 3
  }, {
    id: 3,
    ingredientId: 7,
    amountOf: 1,
    unitId: 12,
    index: 1
  }, {
    id: 4,
    ingredientId: 15,
    amountOf: 9,
    unitId: 9,
    index: 3
  }, {
    id: 5,
    ingredientId: 29,
    amountOf: 50,
    unitId: 8
  }, {
    id: 6,
    ingredientId: 22,
    unitId: 7
  }, {
    id: 7,
    ingredientId: 23,
    unitId: 7
  }, {
    id: 8,
    ingredientId: 61,
    amountOf: 100,
    unitId: 8
  }, { id: 9, ingredientId: 62, amountOf: 3, unitId: 18, index: 2 }, { id: 10, ingredientId: 63, amountOf: 1, unitId: 3 }], directions: ['Режем кубиками 3 ломтика ржаного хлеба, складываем в пакет, добавляем раст.масло, закрываем, трясём. Выкладываем на противень, печём при 180° 3-4 минут до хруста.', 'Лук и 6 зубчиков нарезаем кубиками, обжариваем на сливочном масле.', 'Заливаем бульоном, доводим до кипения, добавляем картофель, уменьшаем огонь и варим до готовности картофеля.', 'Яйцо хорошо разбалтываем вилкой. Когда картофель уже готов, тонкой струйкой, помешивая суп, вливаем в яйцо.', '3 зубчика чеснока раздавить, добавить в суп. Посолить, добавить молотый перец. Прокипятить всё. Дать настояться.', 'Посыпать тёртым сыром и сухариками.']
}, {
  id: 11,
  title: 'Овощной суп с треской',
  ingredients: [{
    id: 1,
    ingredientId: 64,
    amountOf: 500,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 8,
    amountOf: 450,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 5,
    amountOf: 100,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 7,
    amountOf: 1,
    unitId: 12,
    index: 1
  }, {
    id: 5,
    ingredientId: 65,
    amountOf: 1,
    unitId: 3
  }, {
    id: 6,
    ingredientId: 15,
    amountOf: 3,
    unitId: 9,
    index: 2
  }, {
    id: 7,
    ingredientId: 14,
    unitId: 7
  }, {
    id: 8,
    ingredientId: 37,
    amountOf: 2,
    unitId: 3
  }, {
    id: 9,
    ingredientId: 29,
    amountOf: 1,
    unitId: 5
  }, {
    id: 10,
    ingredientId: 38,
    amountOf: 300,
    unitId: 8
  }],
  directions: [
    'Луковицу нарезаем кусочками, морковь трём на тёрке.',
    'Помидоры 450г обдаем кипятком, снимаем кожицу, сохраняем сок.',
    'Небольшой кабачок нарезаем кусочками, 3 зубчика чеснока мелко рубим.',
    'Филе трески 500г моем, сушим, нарезаем на кусочки, вынимаем косточки.',
    'Жарим лук, добавляем морковь, жарим до мягкости. Добавляем нарезанные помидоры и сок. Готовим 5 мин.',
    'Добавляем кабачок и порубленный чеснок. Готовим ещё 10 минут, помешивая.', 'Солим, перчим, томим 1 минуту. Добавляем 300г воды, доводим до кипения. Кладём филе трески. Варим 10 минут под крышкой.',
    'За пару минут до готовности добавляем лавровый лист. Даём настояться 10 минут.'
  ]
}, {
  id: 12,
  title: 'Солянка',
  ingredients: [{
    id: 1,
    ingredientId: 66,
    amountOf: 1,
    unitId: 1
  }, {
    id: 2,
    ingredientId: 36,
    amountOf: 250,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 67,
    amountOf: 150,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 7,
    amountOf: 1.5,
    unitId: 3
  }, {
    id: 5,
    ingredientId: 68,
    amountOf: 70,
    unitId: 8
  }, {
    id: 6,
    ingredientId: 2,
    amountOf: 5,
    unitId: 3
  }, {
    id: 7,
    ingredientId: 69,
    amountOf: 50,
    unitId: 11
  }, {
    id: 8,
    ingredientId: 9,
    amountOf: 1,
    unitId: 5
  }, {
    id: 9,
    ingredientId: 70,
    amountOf: 30,
    unitId: 8
  }, {
    id: 10,
    ingredientId: 12,
    amountOf: 0.5,
    unitId: 3
  }, {
    id: 11,
    ingredientId: 71,
    amountOf: 0.5,
    unitId: 3
  }, {
    id: 12,
    ingredientId: 46,
    amountOf: 3,
    unitId: 3
  }, {
    id: 13,
    ingredientId: 37,
    amountOf: 1,
    unitId: 3
  }, {
    id: 14,
    ingredientId: 29,
    amountOf: 30,
    unitId: 11
  }, {
    id: 15,
    ingredientId: 72,
    unitId: 7
  }],
  directions: [
    'Луковицу (1.5шт) нарезаем четвертинками, жарим до золотистого цвета. Добавляем томатную пасту томим на среднем огне несколько минут.',
    'Режем огурцы (5шт) соломкой, добавляем к луку, слегка обжариваем.',
    'Вливаем половник бульона, тушим на небольшом огне 15-20 минут до размягчения огурцов.',
    'Шинкуем говядину 250г, колбасу 150г тонкими брусочками, закладываем в бульон, доводим до кипения, варим 5-7 минут.',
    'Нарезаем оливки, добавляем их в суп вместе с каперсами, лавровым листом, душистым перцем, мелко-нарезанной зеленью.',
    'Доводим до кипения, провариваем 1-2 минуты, солим и перчим.',
    'Настаиваем 5-7 минут. Подаём со сметаной, ломтиками лимона, веточкой зелени.'
  ]
}, {
  id: 13,
  title: '«Эскимо» из курицы',
  ingredients: [{
    id: 1,
    ingredientId: 66,
    amountOf: 700,
    unitId: 8
  }, {
    id: 2,
    ingredientId: 67,
    amountOf: 150,
    unitId: 8
  }, {
    id: 3,
    ingredientId: 68,
    amountOf: 150,
    unitId: 8
  }, {
    id: 4,
    ingredientId: 69,
    amountOf: 200,
    unitId: 8
  }, {
    id: 5,
    ingredientId: 27,
    amountOf: 1,
    unitId: 6
  }, {
    id: 6,
    ingredientId: 70,
    amountOf: 2,
    unitId: 6
  }],
  directions: [
    'Заливаем курагу (150г) и черносилв (150г) кипятком.',
    'Филе курицы отбиваем, закрыв плёнкой.',
    'Творожный сыр смешиваем с солью, чесноком и приправой для курицы. Отбитое филе кладём на кусок фольги, смазываем смесью с творожным сыром.'
  ],
  url: 'https://www.edimdoma.ru/retsepty/127852-eskimo-iz-kurinogo-file-s-kuragoy-i-chernoslivom'
}];

//# sourceURL=webpack://recipe-cards/./src/app/recipes.js?");
