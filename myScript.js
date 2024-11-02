//TODO check out what display window i should use? 
//Maybe just a reguler container with p that updates based on buttons
//TODO TUrn numbers into an array and store and use latter on for operations.
//Start with basic functions 
//Only two inputs varibals hower look into use of array and reduce to calculate sum 
// + - * /

//Global variabals

//Operators Varibals
let firstNumbervar
let secondeNumbervar
let operatorvar





//DOM  
//CREATE BASIC DOM 
const calculatorContainer = document.querySelector(".calculator")
const inputWindow = document.createElement("div")
const inputText = document.createElement("p")

//Buttons and contianers
const operatorButtonContainer = document.createElement("div")
const numberButtonsContainer = document.createElement("div")

//Basic operations
const plusButton = document.createElement("button")
const subtractButton = document.createElement("button")
const multiplyButton = document.createElement("button")
const divideButton = document.createElement("button")
const EqualButton = document.createElement("button")

//other buttons
const clearButton = document.createElement("button")

//Numbers
const zeroButton = document.createElement("button")
const oneButton = document.createElement("button")
const twoButton = document.createElement("button")
const threeButton = document.createElement("button")
const fourButton = document.createElement("button")
const fiveButton = document.createElement("button")
const sixButton = document.createElement("button")
const sevenButton = document.createElement("button")
const eightButton = document.createElement("button")
const nineButton = document.createElement("button")



//add class
inputWindow.classList.add("inputWindow")

//Button classes
operatorButtonContainer.classList.add("operatorButtonContainer")
numberButtonsContainer.classList.add("ButtonContainer")

plusButton.classList.add("buttonPlus")
subtractButton.classList.add("buttonSubtract")
multiplyButton.classList.add("buttonMultiply")
divideButton.classList.add("buttonDivide")
EqualButton.classList.add("buttonEqual")
clearButton.classList.add("buttonClear")


//Numbers 
zeroButton.classList.add("zeroButton")
oneButton.classList.add("oneButton")
twoButton.classList.add("twoButton")
threeButton.classList.add("threeButton")
fourButton.classList.add("fourButton")
fiveButton.classList.add("fiveButton")
sixButton.classList.add("sixButton")
sevenButton.classList.add("sevenButton")
eightButton.classList.add("eightButton")
nineButton.classList.add("nineButton")

//ADD TEXT
inputText.textContent = "2 + 2"



//Buttons
plusButton.textContent = "+"
subtractButton.textContent = "-"
multiplyButton.textContent = "*"
divideButton.textContent = "/"
EqualButton.textContent = "="
clearButton.textContent = "CLEAR"

//numbers 
zeroButton.textContent = "0"
oneButton.textContent = "1"
twoButton.textContent = "2"
threeButton.textContent = "3"
fourButton.textContent = "4"
fiveButton.textContent = "5"
sixButton.textContent = "6"
sevenButton.textContent = "7"
eightButton.textContent = "8"
nineButton.textContent = "9"


//append children
calculatorContainer.appendChild(inputWindow)
inputWindow.appendChild(inputText)
calculatorContainer.appendChild(operatorButtonContainer)
calculatorContainer.appendChild(numberButtonsContainer)

operatorButtonContainer.appendChild(plusButton)
operatorButtonContainer.appendChild(subtractButton)
operatorButtonContainer.appendChild(multiplyButton)
operatorButtonContainer.appendChild(divideButton)
operatorButtonContainer.appendChild(EqualButton)
operatorButtonContainer.appendChild(clearButton)

numberButtonsContainer.appendChild(zeroButton)
numberButtonsContainer.appendChild(oneButton)
numberButtonsContainer.appendChild(twoButton)
numberButtonsContainer.appendChild(threeButton)
numberButtonsContainer.appendChild(fourButton)
numberButtonsContainer.appendChild(fiveButton)
numberButtonsContainer.appendChild(sixButton)
numberButtonsContainer.appendChild(sevenButton)
numberButtonsContainer.appendChild(eightButton)
numberButtonsContainer.appendChild(nineButton)


//Event Listeners 

//Operation buttons 
plusButton.addEventListener("click", () => console.log("PlusButton clicked"), operatorvar = "+")
subtractButton.addEventListener("click", () => console.log("subtractButton clicked"))
multiplyButton.addEventListener("click", () => console.log("multiplyButton clicked"))
divideButton.addEventListener("click", () => console.log("divideButton clicked"))
EqualButton.addEventListener("click", () => console.log("EqualButton clicked"), operate(operatorvar, firstNumbervar, secondeNumbervar))
clearButton.addEventListener("click", () => console.log("clearButton clicked"))


//Numbers 
zeroButton.addEventListener("click", () => display(zeroButton.textContent))
oneButton.addEventListener("click", () => display(oneButton.textContent), secondeNumbervar = 1)
twoButton.addEventListener("click", () => display(twoButton.textContent))
threeButton.addEventListener("click", () => display(threeButton.textContent))
fourButton.addEventListener("click", () => display(fourButton.textContent))
fiveButton.addEventListener("click", () => display(fiveButton.textContent))
sixButton.addEventListener("click", () => display(sixButton.textContent))
sevenButton.addEventListener("click", () => display(sevenButton.textContent))
eightButton.addEventListener("click", () => display(eightButton.textContent))
nineButton.addEventListener("click", () => display(nineButton.textContent, firstNumbervar = 9))


//Functions that perform calculations
function add(a, b) {
    let sum = a + b
    return sum
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

//When user presses = then perform operation !
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


function display(number) {
    inputText.textContent = number
}





