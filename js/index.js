// // let header = document.querySelector('h1')
// // header.style.color = 'red' 

// // function MyFun() {
// //     const testvariable = 'hello user'
// //     document.write(testvariable) 
// // }

// // const newvar = [1,2,3,3,4,5,6,9]
// // newvar.sort()
// // newvar.reverse()
// // console.log(newvar)
// // document.write(newvar)
// // alert(newvar)

// // Задача 1: вычислить результат 158+2 и вывести значение выражения в диалоговое окно.

// alert(158 + 2)

// // Задача2: передать строковый параметр в диалоговое окно. 
// // Например, вывести “Привет, Алевтина!”, где имя - это передаваемый параметр.

// let MyName = 'Yulia'
// alert('Hello ' + MyName + '!')
// // alert('Hello, "${MyName}"')

// // Задача3: вызвать диалоговое окно с заголовком “Как вас зовут?” и подсказкой в поле ввода “Имя”. 
// // А затем вывести имя, которое ввели в поле ввода.

// let newName  = prompt("Как вас зовут?", "Имя")
// alert(newName)

// // Задача4: написать функцию выводящую в диалоговом окне текст и переменную.

// function HEllo(name){
//     alert('Мое имя ' + MyName)
// }
// HEllo(MyName)

// function Hello(){
//     let mass = 'HEllo ' + MyName
//     alert(mass)
// }

// // Задача5: вывести на экран в диалоговом окне текст 
// // с сообщением: “Вы уверены?” и кнопками «ОК» , «Отмена».

// let MyNamee = confirm('these is try?')
// if (MyNamee){alert("yes")}
// else{alert('no')}

// // Задача6: перепишите код, используя конструкцию switch-case, 
// // запрашивая возраст пользователя через диалоговое окно.

// let age = parseInt(prompt("our age: "))
// switch (age){
//     case 18:
//         alert("Good! you ready!")
//         break
//     case 10:
//         alert("go to sleep! you yange")
//         break
//     case 30:
//         alert("go to sleep! you old man")
//     default:
//         alert("sorry, we don`t know what to do")
//         break
// }

// // Задание №7. Создайте массив с произвольными элементами. 
// // Выведите в документе или консоли все данные из массива. 
// // При желании можете его предварительно отсортировать, как вам будет удобно(по возрастанию или убыванию)

// const newArray = [1,84,6,93,6,1,50,4,7,2,1,4]
// newArray.sort(function(a,b){
//     return a - b;
// })
// alert(newArray)

// Задание №8. Создайте массив с элементами 'a', 'b', 'c'. 
// Запишите вместо первого элемента слово, вместо второго - предложение, вместо третьего - новую букву. Массив должен состоять только из строк. 
// Выведите итоговый массив в документ или в консоль.
// a = "HEllo "
// b = "new user "
// c = 'U'

// var newamas = [2, 7, 9]
// alert(newamas)
// var massnew = newamas.splice(0, newamas.length, a + b + c)
// alert(newamas)
   

// ДОМАШНЕЕ ЗАДАНИЕ

// // Задание №9. Создайте массив с произвольными элементами(числами). 
// // Увеличьте каждый элемент массива на единицу. 
// // Выведите итоговый массив в документ или в консоль.

var numMas = [2,80,65,40,9,1]
alert(numMas)
numMas.sort(function(a,b){
    return a - b})
alert(numMas)
let j = 0
var newMAS = []
for (let j = 0; j < numMas.length; j++) {
    newMAS[j] = numMas[j] + 1                
}
alert(newMAS)

//Задача 10.Создайте всплывающее окно, которое спрашивает (у вводящего пользователя на экране) ввод вашего любимого фильма и если ввод неверен, то программа отправляет запрос alert “Попробуйте ещё раз”. 
// В функции должны быть минимум 1 условие(истиное и ложное). Если можете - используйте вариант создания своей функции, пример: function Вашеимяфункциитут()"
// Если не получается - использовуйте prompt и alert.


let nameSer = "Клиника"
let nameUser = prompt("Назовите мой любимый сериал")
function verity(){
    if (nameUser == nameSer){
        alert("WOOOWYY!! Вы совершенно правы")}
    else{
        alert('УВЫ! Попробуйте ещё раз')}
}
alert(verity())
