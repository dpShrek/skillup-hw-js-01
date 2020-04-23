
// Получить число pi из Math и округлить его до 2-х знаков после точки
    console.log (Math.PI.toFixed(2))   //3.14

//Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

    let mas = [15.1213, 11.12313, 16.12313, 12.12312, 51.123124, 12.21441, 13, 51]

    console.log (Math.max(...mas));     //51
    console.log (Math.min(...mas));     //11

//Работа с Math.random:
    //Получить случайное число и округлить его до двух цифр после запятой
    let rand = mas[Math.floor(Math.random() * mas.length)];
    console.log (rand.toFixed(2));

    //Получить случайное целое число от 0 до X. X - любое произвольное число.
    console.log (Math.ceil(Math.random() * 10001));

//Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
    sum = 0.6+0.7;
    console.log (sum.toFixed(1));

// Получить число из строки ‘100$’
    let a = Number("100$".replace(/\D+/g,""));
    let b = ("100$");
    console.log (a);
    console.log (parseInt(b));


//СТРОКИ
    let string = 'some test string';

//Получить первую и последнюю буквы строки
    console.log (string[0]);
    console.log (string[string.length - 1]);

//Сделать первую и последнюю буквы в верхнем регистре
    console.log (string[0].toUpperCase() + string.slice(1,string.length - 1) + string[string.length - 1].toUpperCase());

//Найти положение слова ‘string’ в строке
    console.log (string.indexOf ('string'));

//Найти положение второго пробела (“вручную” ничего не считать)
    var position = string.indexOf(' ', string.indexOf(' ') + 1);
    console.log(position);

//Получить строку с 5-го символа длиной 4 буквы
    let newSrt5 = console.log (string.substr(5, 4));

//Получить строку с 5-го по 9-й символы
    let newSrt6 = console.log (string.slice(5, 9));

//Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
    console.log (string.slice(0,string.length - 6));

//Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
    let c = 20, d = 16;
    let l = (c.toString() + d.toString());
    console.log (l);

//ОБЬЕКТЫ

//Создать объект с полем product, равным ‘iphone’
    let obj = {product: 'iphone'};
    
//Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
    obj.price = 1000;
    obj.currency = 'dollar';

//Добавить поле details, которое будет содержать объект с полями model и color
    obj.details = {};

    obj.details.model = 'xxl';
    obj.details.color = 'green';
 
    console.log(obj);


//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
    let per = 'hidden';
        if (per = 'hidden') {
            per = 'vidible'
        } else (per = 'hidden');
    console.log (per);

/*
Используя if, записать условие:

если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/
    let per1 = 2;
    console.log (per1);
        if (per1 == 0) {
                per1 = 1 
        }else if (per1 < 0) {
            per1 = 'less then zero'
        }else  
            per1 *= 10 
        
            console.log (per1);

/*Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/
    let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }      
    
    if (car.age > 5) {
        console.log('Need Repair'), (car.needRepair = true)
    }   else car.needRepair = false;
    console.log(car);
    
/*Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }. 
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN 
то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, 
обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. 
иначе если поля discount нет то вывести просто поле price в консоль.*/
    let item = { name: 'Intel core i7', price: '200$', discount: '15%' }
    let priceNew;
    
        if (item.discount){
            let moneyDiskont = Number(item.price.replace(/\D+/g,""))*(parseInt(item.discount)/100);
            item.priceWithDiscount = parseInt(item.price) - moneyDiskont + '$';   
            console.log(item); 
            } 
        else console.log (item.price)
        
        
         
/*
Дан следующий код:

let product = {
    name: “Яблоко”,
    price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене 
то вывести в консоль название этого товара, 
иначе вывести в консоль что товаров не найдено.
*/

    let product = {
        name: 'Яблоко',
        price: '30$'
    };
    let min = 10; // минимальная цена
    let max = 20; // максимальная цена
    console.log(product.name)
    let pr = parseInt(product.price);
    console.log(pr);

        if (pr >= min && pr <= max) {
            console.log(product.name);
        } else console.log ('Товар не найден');






//СРЕД АРЕФ с обьекта с ключами
/*
let info = [ {name: 'vasya', ages:25}, 
             {name: 'kola', ages:6}, 
             {name: 'peta', ages:3}];

var sum = 0;
var arrLength = [];
    for (var i = 0; i < info.length; i++) {
        arrLength[i] = info[i].ages 
    }

var result = arrLength.reduce(function(sum, current) {
    return sum + current;
        }, 0);

    result = result/arrLength.length;


console.log (info);
console.log (arrLength);
console.log (result);

*/