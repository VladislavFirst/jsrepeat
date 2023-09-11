const names = ['Владислав', 'Мария', 'Елена', 'Ксения']

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

const string = 'Привет, как дела?'

const reversed = string.split('').toReversed().join('!').split('').filter((c) => c != '!').join()

console.log(reversed)