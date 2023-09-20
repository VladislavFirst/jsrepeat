// const num = 42//int
// const float = 32.32 //float
// const pow = 10e3 //
// const big = 1_000_000
/*
console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2,53)-1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.isFinite(1/0)) //проверка на кобесконечность

console.log(21/undefined)//NaN - по типу это число
const weird = 23/undefined

console.log(Number.isNaN(weird)) //проверка 

*/


const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt))
console.log(Number.parseInt(strInt)) //распарсит инт
console.log(parseFloat(strFloat))//флоат

console.log(+strInt, +strFloat)
console.log(+(0.1 + 0.2).toFixed(1))


//BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 324234234n)

// // console.log(4n - 10) //error
// console.log(parseInt(4n) -10)
// console.log(4n - BigInt(4n))

//Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(2,5))
// console.log(Math.abs(-42))
// console.log(Math.max(2,3,6,34,5234,645,32))
// console.log(Math.floor(2.3))
// const myNum = 213.2123
// console.log(Math.floor(myNum))
// console.log(Math.ceil(myNum))
// console.log(Math.round(myNum)) // ближайшее
// console.log(Math.trunc(myNum)) //только целую часть возвращает
// console.log(Math.random())

function getNumberRandom(max, min){
    return Math.floor(Math.random()* (max-min + 1) + min)
}

const num1 = getNumberRandom(10, 100)
console.log(num1)