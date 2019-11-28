/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = fn(array[i], i, array);
    }
    
    return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var x = initial || array[0],
        i = initial ? 0 : 1;

    for (; i < array.length; i++) {
        x = fn(x, array[i], i, array);
    }

    return x;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var arr = [];

    for (var key in obj) {
        key = key.toUpperCase();
        arr.push(key);
    }
    
    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    let result = [];

    to = (to < 0) ? array.length + to: to;
    to = (to > array.length) ? array.length: to;
    from = (from < 0) ? array.length + from: from;
    from = (from < -array.length) ? 0: from;

    for (let i=from; i<to; i++) {
        result.push(array[i]);
    }    
    
    return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
	return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = Math.pow(value, 2);
            
            return target[prop];
        }
    }); 
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
