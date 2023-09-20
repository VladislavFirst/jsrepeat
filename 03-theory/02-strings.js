const firstName = 'Vlad'
const age = 29


function getAge(){
    return age
}
const old = `Hello my name is ${getAge() > 18 ? 'CanDrive' : "Can't drive"}`
const output = `any string`

console.log(old)

console.log(firstName.length)
console.log(firstName.toLowerCase())
console.log(firstName.charAt(2))
console.log(firstName.indexOf('a'))
console.log(firstName.toLowerCase().startsWith('Vl'))
console.log(firstName.endsWith('ad'))
console.log(firstName.repeat(2))

const password =  '   my pass   '
console.log(password.trim())