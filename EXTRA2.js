/*Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (количество товаров на складе).

Сравни эти значения и по результатам выведи:

Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const total = 100;
const ordered = 50;*/


const total = 100;  //количество товаров на складе
const ordered = 120;  //количество в заказе

if (ordered  <= total) {
    console.log ("Заказ оформлен, с вами свяжется менеджер");
} else  if (ordered > total) {
    console.log ('На складе недостаточно твоаров!');
};
