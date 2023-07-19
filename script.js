function reset() {
    content.textContent = "0";
}

function add(a, b) {
    return a += b;
}

function subtract(a, b) {
    return a -= b;
}

function divide(a, b) {
    return a /= b;
}

function multiply(a, b) {
    return a *= b;
}

function operate(a, b, sign) {
    if (sign === "+") return add(a, b);
    if (sign === "-") return subtract(a, b);
    if (sign === "/") return divide(a, b);
    if (sign === "*") return multiply(a, b);
}

let sign = "";
let numArray = [];

const content = document.querySelector('.displayText');
const buttons = document.querySelectorAll('.num');
content.textContent = 0;

buttons.forEach((button) => {
    button.addEventListener('click', changeDisplay);
});

function changeDisplay() {
    if (content.textContent === "0") {
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

const signs = document.querySelectorAll(".sign");
signs.forEach((keys) => {
    keys.addEventListener('click', () => {
        sign = keys.textContent;
        numArray.push(content.textContent);
        console.log(numArray);
    });
});












