console.log("Helo World!");

// 1- string "строка.рядок"
// 2- number 4 5 6  номер
// 3- boolean (true \ false) так або ні
// 4- null нічого
// 5- indefined щось не визначено
// 6- symbol
// 7- bigint -числовий тип дпнних
//
// object = {}
// Array = []

// Змінні ----

// var string = "Стрічка!"; -- старий спосіб, в сучасній розробці використовується дуже рідко,
// має глобальну область видимості

// let number = 333;

// const name = "Vasilisa";

// Ваша задача
// знайти елементи
// відловити клік, прослухати клік
// взаємодіяти з кліком
//

const menuBtn = document.querySelector(".menu");
const menuItem = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  //   menuItem.classList.add("active");
  //   menuItem.classList.remove("active");
  menuItem.classList.toggle("active");
  menuBtn.classList.toggle("active__btn");
});

//   menuItem.classList.add("active"); - тільки додає клас
// menuItem.classList.remove("active"); - тільки заберає клас
//

let dacha = {
  street : 'shevchenko',
  number: 11
}
console.log(dacha);