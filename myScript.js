//Start with basic functions 
// + - * /

//Global variabals

//Operators Varibals
let firstNumbervar
let secondeNumbervar
let operatorvar

//Dom 
//create dom 
const calculatorContainer = document.querySelector(".calculator")
const inputWindow = document.createElement("input")

//Buttons
const buttonContainer = document.createElement("div")

//Basic operations
const plusButton = document.createElement("button")
const subtractButton = document.createElement("button")
const multiplyButton = document.createElement("button")
const divideButton = document.createElement("button")
const EqualButton = document.createElement("button")

//other buttons
const clearButton = document.createElement("button")

//add class
inputWindow.classList.add("inputWindow")

//Button classes
buttonContainer.classList.add("buttonContainer")
plusButton.classList.add("buttonPlus")
subtractButton.classList.add("buttonSubtract")
multiplyButton.classList.add("buttonMultiply")
divideButton.classList.add("buttonDivide")


//Add text or other
plusButton.textContent = "+"
subtractButton.textContent = "-"
multiplyButton.textContent = "*"
divideButton.textContent = "/"

//append children
calculatorContainer.appendChild(inputWindow)
calculatorContainer.appendChild(buttonContainer)


buttonContainer.appendChild(plusButton)
buttonContainer.appendChild(subtractButton)
buttonContainer.appendChild(multiplyButton)
buttonContainer.appendChild(divideButton)



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
    //Maybe switch is better? 
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



