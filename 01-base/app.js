let num = 42;  //number
let firstName = 'Vladislav'; //string
const isProgrammer = true; //boolean

/* can do 
let $ = 'test'
let $num = 42
let num$ = 32

let _ = 49
let _num =49
let num_ = 49 
let first_name = 'Elena' // not use. Use cammelCase
let myNum = 34 // it's good

let num42 = 10
*/

/*Restricted
 let 42num = '11'
 let my-num = 1
 let false 
*/

// firstName = 'Max';
// isProgrammer = false;

// alert(firstName)
// console.log('Test', num, firstName)

// console.log(num + 10)
// console.log(num / 10)
// console.log(num * 10)


// let num2 = num + 10
// console.log(num, num2)

// num = num2 - num
// console.log(num)

// let num3 = (num + 10) - 2 * 10
// console.log(num3)

// const fullName = firstName + ' ' + 'Miagkov'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = 444


// console.log(typeof sum)

plusBtn.onclick = function (){
    action = '+'
}
minusBtn.onclick = function (){
   action = '-' 
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else resultElement.style.color = 'green'
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2,  actionSymbol ){
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == '+'){
    //     return num1 + num2
    // } else {
    //     return num1 - num2
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action == '+' ) {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     resultElement.textContent = sum
    //     printResult(sum)
    // } else {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     resultElement.textContent = sum
    //     printResult(sum)
    // }

    
}

