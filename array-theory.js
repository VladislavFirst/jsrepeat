// const names = ['Владислав', 'Мария', 'Елена', 'Ксения']

// names.push('Алена')  //fast 
// names.unshift('Алена')
// names.shift() //

// const firstName = names.shift()  //извлекает первый элемент из массива
// const firstName = names.pop() // последний элемент
// console.log('Names', names, firstName  )

// // console.log(names.reverse())
// console.log(names.toReversed())
// console.log(names)

// console.log(names.sort())
// console.log(names)

// console.log(names.toSpliced(1, 2))
// console.log(names)

// const greateWoman = 'Мария'
// const index = names.indexOf(greateWoman)
// const newNames = names.with(index, 'Мария Великая')
// console.log(names[index])
// console.log(names)
// // console.log(newNames)

// const capitalNames = names.map(function (name,index){
//     // const newName = name + '!'
//     // return name.toLocaleUpperCase()
//     if (index === 1){
//         return 'Мария Великая'
//     }
//     return name
// })

// console.log(capitalNames)

// console.log(names.includes('Елена'))

const people = [
    {
        name: 'Владислав',
        budget: 44200,
    },
    {
        name: 'Мария',
        budget: 1000,
    },
    {
        name: 'Елена',
        budget: 200,
    },
    {
        name: 'Ксения',
        budget: 414200,
    }
]

// console.log(people.indexOf())
// let finderPeople 

// for (let person of people) {
//     if (person.budget === 200) {
//         finderPeople = person
//     }
// }


// const finderPerson = people.find(function(person){
//     return person.budget === 200
//     // if(person.budget === 200){
//     //     return true
//     // }
// })


// const fined = people.findIndex(function(person){
//     return person.budget === 200
// })

// // const finder = people.find((p) => p.budget === 200)  //стрелочная функция

// console.log(people[fined])

// let sumBudget = 0
// const filtered = people.filter(function (p){
//     return p.budget > 5000
// })

// console.log(filtered)

// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })
// console.log(sumBudget)

// const byBudget = p =>   p.budget > 5000
// const pickBudget = p => p.budget 

// const sumBudget = people
//     .filter(byBudget)
//     .map(pickBudget)
//     .reduce((acc, p) => acc + p, 0)
// console.log(sumBudget)

// const string = 'Привет, как дела?'

// const reversed = string.split('').toReversed().join('!').split('').filter((c) => c != '!').join()

// console.log(reversed)
//Homework
//1
/*
const john = {
    name: 'Vladislav',
    age: 23,
    pet: 'Murka'
}

const ann = {
    name: 'Elena',
    age: 23,
    pet: 'Tiger'
}

const out = function (ob){
    return console.log('Меня зовут ' + ob.name + ', мне ' + ob.age + ', у меня есть питомец ' + ob.pet)
}

out(john)
out(ann)

const incrementAge = function(ob) {
    ob.age +=1
    return 
}

incrementAge(john)
out(john)

for (let key in john){
    console.log(key, john[key])
}
*/
//2
/*
function sum(array) {
    let summary = 0
    for(let i = 0; i < array.length ; i++){
        summary += array[i]
        
    }
    return summary
  }
  
  const arr = [1, 50, 20, 75, 90];
  
  console.log(sum(arr)); // 236
*/

//3
/*Задание #3
Создайте пустой массив names.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.*/
/*
const names = []

names.push('Maks', 'VLad', 'Elena', 'Igor', 'Gleb')

console.log(names)

names.shift()
console.log(names)
names.pop()
console.log(names)
*/


//4
/*
Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML. Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.
*/
/*
const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
const namesList = document.querySelector('.names_list')
namesList.innerHTML = ""
names.forEach((item, i) => {
    namesList.innerHTML +=`
    <li class="name_item">${i + 1} ${item}</li>`
})
*/


//5 
//Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 
const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const { age: age, favColor: favColor, height: height, pet: pet, money: money} = obj

console.log(age, favColor, height, pet, money)