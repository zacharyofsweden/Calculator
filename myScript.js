
//Start with basic functions 
//Only two inputs varibals hower look into use of array and reduce to calculate sum 
// + - * /

//TODO Refector code
//TODO add another container for all the button containers
//Global variabals

//Operators Varibals
let firstNumbervar
let secondeNumbervar
let operatorvar
let sumVar = -1;
//
const firstNumberArr = []
const secondNumberArr = []


//DOM  
//CREATE BASIC DOM 
const calculatorContainer = document.querySelector(".calculator")
const inputWindow = document.createElement("div")
const inputText = document.createElement("p")

//Buttons and contianers
const buttonContainersCon = document.createElement("div")
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
buttonContainersCon.classList.add("buttonContainersCon")
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
inputText.textContent = ""



//Buttons
plusButton.textContent = "+"
subtractButton.textContent = "-"
multiplyButton.textContent = "*"
divideButton.textContent = "/"
EqualButton.textContent = "REASULT"
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
calculatorContainer.appendChild(buttonContainersCon)
buttonContainersCon.appendChild(operatorButtonContainer)
buttonContainersCon.appendChild(numberButtonsContainer)

operatorButtonContainer.appendChild(clearButton)
operatorButtonContainer.appendChild(plusButton)
operatorButtonContainer.appendChild(subtractButton)
operatorButtonContainer.appendChild(multiplyButton)



operatorButtonContainer.appendChild(oneButton)
operatorButtonContainer.appendChild(twoButton)
operatorButtonContainer.appendChild(threeButton)
operatorButtonContainer.appendChild(divideButton)
operatorButtonContainer.appendChild(fourButton)
operatorButtonContainer.appendChild(fiveButton)
operatorButtonContainer.appendChild(sixButton)
operatorButtonContainer.appendChild(sevenButton)
operatorButtonContainer.appendChild(EqualButton)
operatorButtonContainer.appendChild(eightButton)
operatorButtonContainer.appendChild(nineButton)




operatorButtonContainer.appendChild(zeroButton)




//Event Listeners 

//Operation buttons 
clear()
plusButton.addEventListener("click", () => { console.log("PlusButton clicked"), operatorvar = "+", console.log("Operatorvar = " + operatorvar) })
subtractButton.addEventListener("click", () => { console.log("subtractButton clicked"), operatorvar = "-", console.log("Operatorvar = " + operatorvar) })
multiplyButton.addEventListener("click", () => { console.log("multiplyButton clicked"), operatorvar = "*", console.log("Operatorvar = " + operatorvar) })
divideButton.addEventListener("click", () => {
    console.log("divideButton clicked")
    operatorvar = "/"
    console.log("Operatorvar = " + operatorvar)
})

EqualButton.addEventListener("click", () => {
    console.log("EqualButton clicked")
    console.log("Current Sumvar is :" + sumVar)
    //TODO Refactor so it has it's own function
    console.log("Operator var right now in equalbutton is : " + operatorvar)
    if ((sumVar > 0 && operatorvar == "+" )|| (sumVar > 0 &&  operatorvar == "-") || (sumVar > 0 &&  operatorvar == "*") || (sumVar > 0 &&  operatorvar == "/")) {
        firstNumbervar = sumVar
        secondeNumbervar = secondNumberArr.reduce((sum, current) => sum += current)
    }
    else {
        
        firstNumbervar = firstNumberArr.reduce((sum, current) => sum += current)
        secondeNumbervar = secondNumberArr.reduce((sum, current) => sum += current)
    }

    operate(operatorvar, firstNumbervar, secondeNumbervar)
    operatorvar = "";
    console.log("First Array is :" + firstNumberArr)
    console.log("Second Array is :" + secondNumberArr)


})
clearButton.addEventListener("click", () => clear())


//Numbers 
zeroButton.addEventListener("click", () => { display(zeroButton.textContent), firstOrSeconde("0", operatorvar) })
oneButton.addEventListener("click", () => { display(oneButton.textContent), firstOrSeconde("1", operatorvar) })
twoButton.addEventListener("click", () => { display(twoButton.textContent), firstOrSeconde("2", operatorvar) })
threeButton.addEventListener("click", () => { display(threeButton.textContent), firstOrSeconde("3", operatorvar) })
fourButton.addEventListener("click", () => { display(fourButton.textContent), firstOrSeconde("4", operatorvar) })
fiveButton.addEventListener("click", () => { display(fiveButton.textContent), firstOrSeconde("5", operatorvar) })
sixButton.addEventListener("click", () => { display(sixButton.textContent), firstOrSeconde("6", operatorvar) })
sevenButton.addEventListener("click", () => { display(sevenButton.textContent), firstOrSeconde("7", operatorvar) })
eightButton.addEventListener("click", () => { display(eightButton.textContent), firstOrSeconde("8", operatorvar) })
nineButton.addEventListener("click", () => { display(nineButton.textContent), firstOrSeconde("9", operatorvar) })


//Functions that perform calculationssssss
function add(a, b) {
    sumVar = parseFloat(a) + parseFloat(b)
    secondeNumbervar = 0;
    firstNumbervar = 0;
    firstNumberArr.length = 0
    secondNumberArr.length = 0
    
    return display(sumVar)
}

function subtract(a, b) {
    sumVar = parseFloat(a) - parseFloat(b)
    console.log("subtract Accesed")
    console.log(firstNumbervar)
    console.log(secondeNumbervar)
    secondeNumbervar = 0;
    firstNumbervar = 0;
    firstNumberArr.length = 0
    secondNumberArr.length = 0
    console.log(sumVar)
    return display(sumVar)
}


function multiply(a, b) {
    sumVar = parseFloat(a) * parseFloat(b)
    secondeNumbervar = 0;
    firstNumbervar = 0;
    firstNumberArr.length = 0
    secondNumberArr.length = 0
    return display(sumVar)
}


function divide(a, b) {
    let sumBeforeDec = parseFloat(a) / parseFloat(b)
    sumVar = sumBeforeDec.toFixed(3)
    secondeNumbervar = 0;
    firstNumbervar = 0;
    firstNumberArr.length = 0
    secondNumberArr.length = 0
    return display(sumVar)
}



function firstOrSeconde(num, operatorval) {
    console.log("FirostOrSeconde Accesed")
    console.log(num)
    console.log(operatorval)


    if (operatorval == "+" || operatorval == "-" || operatorval == "*" || operatorval == "/") {

        secondNumberArr.push(num)
        console.log("secondArr " + secondNumberArr)
    }
    else {

        sumVar = -1;
        firstNumberArr.push(num)
        console.log("firstarr " + firstNumberArr)
    }
}


//When user presses = then perform operations !ss
function operate(operator, firstNumber, secondeNumber) {
    console.log("Function accesed ")
    console.log(operator)
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




function clear() {
    //Reset Everything 
    firstNumbervar = ""
    secondeNumbervar = ""
    operatorvar = ""
    sumVar = -1;

    firstNumberArr.length = 0
    secondNumberArr.length = 0
    display("Waiting for input...")

}
