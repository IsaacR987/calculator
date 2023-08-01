let total = 0;

function reset() {
    content.textContent = "0";
    numArray = [];
}

function add() {
    let a = parseFloat(numArray[numArray.length-2]);
    let b = parseFloat(numArray[numArray.length-1]);
    return a + b;
}

function subtract() {
    let a = parseFloat(numArray[numArray.length-2]);
    let b = parseFloat(numArray[numArray.length-1]);
    return a -= b;
}

function divide() {
    let a = parseFloat(numArray[numArray.length-2]);
    let b = parseFloat(numArray[numArray.length-1]);
    return a /= b;
}

function multiply() {
    let a = parseFloat(numArray[numArray.length-2]);
    let b = parseFloat(numArray[numArray.length-1]);
    return a *= b;
}

function operate() {
    if (signArray[signArray.length - 1] === "=") {
        return;
    }
    if (content.textContent === 'Undefined') {
        numArray = [];
        return;
    }
    numArray.push(content.textContent);
    if (numArray.length > 1) {
    switch (sign) {
        case '+':
            content.textContent = add();
            numArray.push(content.textContent);
            break;
        case '-':
            content.textContent = subtract();
            numArray.push(content.textContent);
            break;
        case '*':
            content.textContent = multiply();
            numArray.push(content.textContent);
            break;
        case '/':
            if (parseFloat(numArray[numArray.length-1]) === 0) {
                content.textContent = 'Undefined';
            } else {
                content.textContent = divide();
                numArray.push(content.textContent);
            }
        
        }
    }
}

let sign = "";
let numArray = [];
let signArray = [];

const content = document.querySelector('.displayText');
const buttons = document.querySelectorAll('.num');
content.textContent = 0;

buttons.forEach((button) => {
    button.addEventListener('click', changeDisplay);
});

function changeDisplay() {
    if (content.textContent === "0" || content.textContent === "Undefined") {
        content.textContent = ""; 
        content.textContent += this.textContent;
    } else if (content.textContent === numArray[numArray.length-1]) {
        content.textContent = "";
        content.textContent += this.textContent;
    } else if (content.textContent.length === 10) {
        content.textContent = content.textContent;
        //limit of 10 numbers"
    } else {
        content.textContent += this.textContent;
    }
};

// Changes operator signs (+ - / *)
const signs = document.querySelectorAll(".sign");
signs.forEach((keys) => {
    keys.addEventListener('click', () => {
        sign = keys.textContent;
        signArray.push(sign);
        if (content.textContent != 'Undefined') {
            numArray.push(content.textContent);
            console.log(numArray);
        } else {
            content.textContent = numArray[numArray.length-1];
        } 
    });
});
