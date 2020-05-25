// ===========================================
/*Задание 1 Напиши скрипт, который, для объекта user, последовательно:
добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user 
в формате ключ:значение используя Object.keys() и for...of */
// ===========================================
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.mood = "happy";
user.premium = false;
for (const key of Object.keys(user)) console.log("#1", key + ":" + user[key]);
// ===========================================
/* Задание 2 Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств.*/
// ===========================================

const countProps = function (obj) {
  return Object.keys(obj).length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log("#2", countProps({})); // 0

console.log("#2", countProps({ name: "Mango", age: 2 })); // 2

console.log(
  "#2",
  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
); // 3
// ===========================================
/* Задание 3 Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого продуктивного 
(который выполнил больше всех задач). 
Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате 
"имя":"кол-во задач".*/
// ===========================================
const findBestEmployee = function (employees) {
  return Object.keys(employees)[
    [...Object.values(employees)].indexOf(Math.max(...Object.values(employees)))
  ];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  "#3",
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  "#3",
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  "#3",
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
// ===========================================
/* Задание 4 Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
 Функция считает общую сумму запрплаты работников и возращает ее. 
 Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".*/
// ===========================================

const countTotalSalary = function (employees) {
  let total = 0;
  Object.values(employees).forEach((value) => {
    total += value;
  });
  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log("#4", countTotalSalary({})); // 0

console.log(
  "#4",
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  "#4",
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
// ===========================================
/*  Задание 5 Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя свойства. 
Возвращает массив значений определенного свойства prop из каждого объекта в массиве */
// ===========================================

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 0 },
];

const getAllPropValues = function (arr, prop) {
  let result = [];
  arr.forEach((i) => {
    if (i[prop] !== undefined) result.push(i[prop]);
  });
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log("#5", getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log("#5", getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log("#5", getAllPropValues(products, "category")); // []
// ===========================================
/*   Задание 6 Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации*/
// ===========================================
const products2 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let result;
  allProdcuts.forEach((obj) => {
    if (obj.name === productName) result = obj.price * obj.quantity;
  });
  return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log("#6", calculateTotalPrice(products2, "Радар")); // 5200

console.log("#6", calculateTotalPrice(products2, "Дроид")); // 2800
// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };
