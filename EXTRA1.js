/*Создай две переменные которые будут хранить название и цену товара: name и price
Присвой переменным такие характеристики товара (сразу при объявлении)
название: Домкрат гидравлический
цена: 100
Используя шаблонную строку выведи в консоль информацию о товаре, должно получится: 'Выбран «Домкрат гидравлический», цена за штуку 100 тугриков'.
Присвой товару новую цену - 300
Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Домкрат гидравлический», цена за штуку 300 тугриков'.*/


let tovar = {name: 'Домкрат гидравлический', 
         price: 100};
console.log ("Выбран «" + tovar.name + "», цена за штуку " + tovar.price + " тугриков");
         tovar.price = 300;
console.log ("Выбран «" + tovar.name + "», цена за штуку " + tovar.price + " тугриков");