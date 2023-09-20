// Function declaration
// function greet(name){
//     console.log('hello - ', name)
// }


// //Function expression
// const greet2 = function (name){
//     console.log('2 hello - ', name)
// }
// greet('Vlad')
// greet2('VLad')

// console.dir(typeof greet)

//анонимные функции

// setTimeout(function(){
//     greet('Vlad')
// // }, 1500)
// let counter = 0
// const interval = setInterval(function(){
//     // if (counter === 5){
//     //     clearInterval(interval)
//     // }else {
//         console.log(++counter)
//     // }
// }, 10)


//arrow function

function greet(name){
    console.log('hello - ', name)
}

const arrow = (name,age) => {
    console.log('hello - ', name, age)
}

arrow('Vlad', 11)

const arrow2 = name => console.log('hello - ', name)

arrow2('vvlaad')

function pow(num, exp){
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

console.log(pow2(42,3))

//--------Default parameter
const sum = (a=11, b = a/2) => a+b
console.log(sum(40))

//...оператор rest
function sumAll( ...numbers ){
    // let res = 0
    // for (let num of numbers){
    //     res +=num
    // } 
    // return res
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(2,44,34,6,234,3))

//Closures - замыкание

function createPerson(name){
    return function(lastname){
        console.log(name + ' ' + lastname )
    }    
}

const addLastName = createPerson('Vlad')
addLastName('Miagkov')
addLastName('Ivanov')






