// Напишите функцию, которая выводит нечетные числа от 0 до 10

function showOdd() {
    for (let i = 0; i < 11; i++) {
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
showOdd();



// Напишите функцию, которая принимает два числа в качестве диапазона и возвращает сумму чисел в указанном диапазоне

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNum = getRandomNum(20, 40);
console.log(randomNum);



// Через массив опишите трех игроков (имя, здоровье, урон)

let treePlayer = [
    {

        name: "Jon",
        health: 68,
        damage: 32,
    },
    {
        name: "Lize",
        health: 85,
        damage: 15,
    },
    {
        name: "Karl",
        health: 41,
        damage: 59,
    }
]

console.log(treePlayer);



// Напишите функцию, которая получает массив чисел и возвращает среднее ариф. значение

const arr = [4, 7, 2, 6, 1, 9, 3, 5];

function averageArr(arr) {
    let sumElements = 0;
    for (let i = 0; i < arr.length; i++) {
        sumElements += arr[i];
    }
    return sumElements / arr.length;
    
}

console.log(averageArr(arr));



// Напишите функцию, которая конвертирует градусы из шкалы по Цельсию в градусы в шкалу по Фаренгейту

function convert(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

convert(20);