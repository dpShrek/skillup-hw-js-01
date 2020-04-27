/*Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. 
Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

Китай - 100 кредитов
Чили - 250 кредитов
Австралия - 170 кредитов
Индия - 80 кредитов
Ямайка - 120 кредитов*/

let strObj = {"китай": 100, 
              "чили": 250,
              "австралия": 170,
              "индия": 80,
              "ямайка": 120};
console.log (strObj)


let country = prompt("Укажите страну доставки", "КиТай")
switch (country && country.toLowerCase()) {
    case "китай" :
        alert ('Доставка в [китай] будет стоить [' + strObj['китай'] + '] кредитов')
    break;

    case "чили" :
        alert ('Доставка в [чили] будет стоить [' + strObj['чили'] + '] кредитов')
    break;

    case "австралия" :
        alert ('Доставка в [австралию] будет стоить [' + strObj['австралия'] + '] кредитов')
    break;

    case "индия" :
        alert ('Доставка в [индию] будет стоить [' + strObj['индия'] + '] кредитов')
    break;

    case "ямайка" :
        alert ('Доставка в [ямайку] будет стоить [' + strObj['ямайка'] + '] кредитов')
    break;

    default:
        alert ('Доставка в вашу страну не осуществляется')
    break;
}
