const labajs = document.querySelector('.labajs');
const cButton = labajs.querySelector('.compatibility');
const IMTButton = labajs.querySelector('.BMI');
const leapYear = labajs.querySelector('.leapYear');
const dinnerRand = labajs.querySelector('.dinner');


cButton.addEventListener('click', compatibility);
IMTButton.addEventListener('click', BMI);
leapYear.addEventListener('click', leapyear);
dinnerRand.addEventListener('click', dinner);



function compatibility() {

    var femName = prompt("Её имя");
    var maleName = prompt("Его имя");
    if (femName & maleName == null){
        alert('Вы не указали имена.')

    }
    else {
        
        alert(`Совместимость: ${femName} и ${maleName} ` + Math.floor(Math.random() * 100) + "%")
    }

}

function BMI() {
    var high = prompt("Укажите свой рост");
    var weight = prompt("Укажите свой вес");

    if (high & weight == null) {

        alert('Вы не указали все данные.')
    
    }
    else {
        result = weight / Math.pow(high/100, 2)

        if (result <= 18.5)
            alert("Недостаток веса");
        if (result <= 25 && result > 18.5)
            alert("Нормальный вес");
        if (result <= 30 && result > 25)
            alert("Излишек веса");
         if (result > 30)
            alert("Ожирение");

    }
}

function leapyear() {
    var year = prompt("Укажите год");
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        alert("Год является високосным");
        }
    else {
        alert("Год не високосный");
        }
}

function dinner() {
    var countPeople = prompt("Укажите количество человек на ужине");
    let choose = new Array();
    for (i = 0; i < countPeople; ++i) {
        var personNames = prompt(`Укажиет имя человека № ${i + 1}`);
        choose[i] = personNames;
    }
    alert("Ужин оплачивает: " + choose[Math.floor(Math.random() * countPeople)]);
}