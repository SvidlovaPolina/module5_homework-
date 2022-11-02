let str = prompt('Введите значение')
let value = +str;

//console.log(typeof value);

//console.log(isNaN(value));

let type = typeof value;

if (type == 'number' && !isNaN(value)) { // если тип 'число' и значение не NaN
    if(value % 2 == 0) // Если честное
        alert('Четное');
    else               // Иначе не четное
        alert('Нечетное');
}
else {       // Если тип не число
    alert('Упс, кажется, вы ошиблись');
}