// Счетчики
let evens = 0; // четные
let odds = 0; // нечетные
let zeros = 0; // нулевые

let array = [0, 7, 2, 2, 100, 122, false, null, 5, 1, "qwe", 148, 0, null, true, 0, 2, 4, 6, 8, "zxc", false, 5, 1, "asd", 7, 1, true, 9, 3, null, 3, 0,];

for (let i = 0; i < array.length; i++) {
    if(typeof array[i] == 'number') { // если тип = число
        if(array[i] == 0){ // если это ноль прибавляем счетчик нулей
            zeros++;
        } else { // если это не ноль
            if(array[i] % 2 == 0) { // проверим на четность
                evens++; // прибавляем счетчик четных
            } else {
                odds++; // прибавляем счетчик нечетных
            }
        }
    }
}

console.log(`количество четных ${evens}`);
console.log(`количество нечетных ${odds}`);
console.log(`количество нулевых ${zeros}`);