//Start with basic functions 
// + - * /





//Global variabals

//Operators Varibals
let firstNumbervar
let secondeNumbervar
let operatorvar 


//Functions calculations
function add(a, b) {
    return sum = a + b
}

function subtract(a, b) {
    return a - b
}


function multiply(a, b) {
    return a * b
}


function divide(a, b) {
    return a / b
}

//Function operator 

function operate(operator, firstNumber, secondeNumber) {
    console.log("Function accesed ")

    if (operator === "+") {
        console.log("Operator + Acess")
        return add(firstNumber, secondeNumber)
    }

    if (operator === "-") {
        console.log("Operator - Acess")
        return subtract(firstNumber, secondeNumber)
    }

    if (operator === "*") {
        console.log("Operator * Acess")
        return multiply(firstNumber, secondeNumber)
    }

    if (operator === "/") {
        console.log("Operator / Acess")
        return divide(firstNumber, secondeNumber)
    }
}

console.log(operate("/", 20, 12))

 //Dom 

 