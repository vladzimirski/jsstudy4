// Сортировка массивов

// Сотритовка слов
// let arrOne = ['Иштван', 'Ваня', 'Оля'];
// console.log(arrOne.sort());

// Сотритовка чисел
// let arrTwo = [8, 22, 1,];
// console.log(arrTwo.sort());

// По умолчанию элементы сортируются как строки.
// Для строк применяется лексикографический порядок,
// и действительно выходит, что "8" > "22".
// console.log("8" > "22");

//--------

// Метод sort(fn)
// сортирует массив на месте, меняя в нём порядок элементов.


// Сотритовка чисел
// let arr = [8, 22, 1,];
// console.log(arr.sort());

// Функция сортировки

// function compareNumeric(a, b) {
// 	console.log(`Сравниваем ${a} и ${b}`);
// 	if (a > b) return 1;
// 	if (a == b) return 0;
// 	if (a < b) return -1;

// 	//return a - b
// }

// console.log(arr.sort((a, b) => a - b)); // стрелочная функция которая делает все тоже самое что и функция сверху

//console.log(arr.sort(compareNumeric));


//--------


// Метод reverse
// меняет порядок элементов в массиве на обратный.

// let arrOneA = ['Ваня', 'Иштван', 'Оля'];
// console.log(arrOne.reverse());



// Преобразование массивов

// Метод map.
// вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.

let resultone = arrOne.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});

let arrOne = ['Ваня', 'Иштван', 'Оля',];

let result = arrOne.map(function (item, index, array) {
	return item[0];
});
//let result = arr.map(item => item[0]);
console.log(arrOne);
console.log(result);


//------------------------

/*
 Метод split преобразовывает строку в
 массив по заданному разделителю
 Синтаксис: str.split(delim)
*/

let str = 'Ваня,Иштван,Оля';

let arr = str.split(',');// разделитель запятая
console.log(arr);


// Можно ограничить кол-во объектов
// которые попадут в массив

let arrTwo = str.split(',', 2);
console.log(arrTwo);

//----------

/*
 Метод join преобразовывает массив в
 строку c заданным разделителем
 Синтаксис: arr.join(glue)
*/

let arr = ['Ваня', 'Иштван', 'Оля',];
let srt = arr.join(',');
console.log(srt);


// Получение строки из массива
let arrTwo = ['Ваня', 'Иштван', 'Оля'];
console.log(String(arrTwo));

// Проверка Array.isArray()

/*
Напомню, массивы не образуют отдельный тип данных.
Они основаны на объектах.
*/
/*
let obj = {};
let arr = [];

console.log(typeof obj);
console.log(typeof arr);
*/
// Как же нам узнать где массив а где нет?
/*
if (Array.isArray(obj)) {
	console.log('Это массив!');
} else {
	console.log('Это не массив!');
}*/



// Перебор элементов


let array = ['Ваня', 'Иштван', 'Оля',];
console.log(array.length);

// Цикл FOR тут мы перебираем элементы по длине массива
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// Цикл FOR...OF
// Можно использовать для вывода значений
let arrA = ['Ваня', 'Иштван', 'Оля',];

for (let arrItem of arrA) {
	console.log(arrItem);
}

let pasha = ["Vanya", "Kolya0", "Jopa", "kaka"];

// pasha.forEach(function(item,index,array){
// console.log(`${item} находится на позиции ${index} в массиве ${array}`);
// });

pasha.forEach((item,index,array,)=>{
    console.log(`${item} находится на позиции ${index} в массиве ${array}`); //стрелочная функция 
});




// Методы reduce/reduceRight

/*
Итак, мы выяснили что если нам нужно перебрать
массив – мы можем использовать forEach, for или for..of.
Если нам нужно перебрать массив и вернуть
данные для каждого элемента – мы используем map.

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они немного сложнее и используются для вычисления
какого-нибудь единого значения на основе всего массива.
*/
/*
// Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
  // ...
}, [initial]);
*/
/*
К привычным нам аргументам item, index, array
добавляется previousValue:

previousValue – результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item – очередной элемент массива,
index – его индекс,
array – сам массив.

Функция применяется по очереди ко всем элементам
массива и «переносит» свой результат на следующий вызов.
*/


/*
let arrOne = [1, 2, 3, 4];
let reduceValueOne = arrOne.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceValueOne);
*/
/*
Шаг №1
previousValue = 0
item = 1
их сумма = 1

Шаг №2
previousValue = 1
item = 2
их сумма = 3

Шаг №3
previousValue = 3
item = 3
их сумма = 6

Шаг №4
previousValue = 6
item = 4
их сумма = 10
*/
//--------

/*
let arrArrow = [1, 2, 3, 4];
let reduceValueArrow = arrArrow.reduce((pValue, item) => item + pValue, 0);
console.log(reduceValueArrow);
*/


//--------

/*
let arrTwo = ['Ваня', 'Иштван', 'Оля',];

Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Ваня)
А работа метода начнется со второго элемента (item=Иштван)
*/
/*
let reduceValueTwo = arrTwo.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
	console.log(item);
	return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);
*/


// Метод arr.reduceRight работает аналогично, 
// но проходит по массиву справа налево.
