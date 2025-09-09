//==============functions======================//
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function fact(a){
    if(a==0 || a==1){
        return 1;
    }
    return a*fact(a-1);
}

function mod(a,b){
    return a%b;
}

function power(a,b){
    return a**b;
}

const var1=0;
const var2=0;
let operator;

function operation(var1, var2, operator){
    switch (operator) {
        case '+':
            return add(var1, var2);
            break;
        
        case '-':
            return subtract(var1, var2);
            break;

        case '×':
            return multiply(var1, var2);
            break;
        
        case '÷':
            return divide(var1, var2);
            break;
        case '!':
            return fact(var1);
            break;
        case '%':
            return mod(var1,var2);
            break;
        case '^':
            return power(var1, var2);
            break;
        default:
            return 'Invalid Entry!';
            break;
    }
}

//==========================Digits==============================//
const display = document.querySelector('.screen');

const zero_btn = document.getElementById('zero');
const one_btn = document.getElementById('one');
const two_btn = document.getElementById('two');
const three_btn = document.getElementById('three');
const four_btn = document.getElementById('four');
const five_btn = document.getElementById('five');
const six_btn = document.getElementById('six');
const seven_btn = document.getElementById('seven');
const eight_btn = document.getElementById('eight');
const nine_btn = document.getElementById('nine');

const zero = parseInt(zero_btn.value);
const one = parseInt(one_btn.value);
const two = parseInt(two_btn.value);
const three = parseInt(three_btn.value);
const four = parseInt(four_btn.value);
const five = parseInt(five_btn.value);
const six = parseInt(six_btn.value);
const seven = parseInt(seven_btn.value);
const eight = parseInt(eight_btn.value);
const nine = parseInt(nine_btn.value);

//=========================operators=====================================//
const plus_btn = document.getElementById('plus');
const multi_btn = document.getElementById('mul');
const subtract_btn = document.getElementById('sub');
const divide_btn = document.getElementById('divide');
const power_btn = document.getElementById('power');
const mod_btn = document.getElementById('modulos');
const fact_btn = document.getElementById('factor');

//=============================cal function================================//
const clear_btn = document.getElementById('clear');
const dot_btn = document.getElementById('decimal');
const equals_btn = document.getElementById('equals');

const equlas = equals_btn.value;
const decimal = dot_btn.value;
const clear = clear_btn.value;

const disDiv = document.createElement('div');
disDiv.setAttribute("style",`
    display:flex; 
    justify-content:end;
    padding:1px; 
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
`);

function clearScreen(cls){
    disDiv.textContent="";
}
clear_btn.addEventListener("click", ()=> clearScreen(clear));

function displayScreen(val){
    disDiv.textContent+=val;
}
display.append(disDiv);

zero_btn.addEventListener("click", ()=> displayScreen(zero));
one_btn.addEventListener("click", ()=> displayScreen(one));
two_btn.addEventListener("click", ()=> displayScreen(two));
three_btn.addEventListener("click", ()=> displayScreen(three));
four_btn.addEventListener("click", ()=> displayScreen(four));
five_btn.addEventListener("click", ()=> displayScreen(five));
six_btn.addEventListener("click", ()=> displayScreen(six));
seven_btn.addEventListener("click", ()=> displayScreen(seven));
eight_btn.addEventListener("click", ()=> displayScreen(eight));
nine_btn.addEventListener("click", ()=> displayScreen(nine));

plus_btn.addEventListener("click", ()=> displayScreen(plus_btn.value));
subtract_btn.addEventListener("click", ()=> displayScreen(subtract_btn.value));
multi_btn.addEventListener("click", ()=> displayScreen(multi_btn.value));
divide_btn.addEventListener("click", ()=> displayScreen(divide_btn.value));
power_btn.addEventListener("click", ()=> displayScreen(power_btn.value));
mod_btn.addEventListener("click", ()=> displayScreen(mod_btn.value));
fact_btn.addEventListener("click", ()=> displayScreen(fact_btn.value));
dot_btn.addEventListener("click", ()=> displayScreen(decimal));

function parseAndEvaluate(expr) {
    if (expr.endsWith('!')) {
        let number = parseFloat(expr.slice(0, -1));
        if (isNaN(number)) return "Invalid!";
        return fact(number);
    }

    let operatorMatch = expr.match(/[\+\-\×\÷\%\^]/);
    if (!operatorMatch) return "Invalid Expression";

    let operator = operatorMatch[0];
    let parts = expr.split(operator);

    let var1 = parseFloat(parts[0]);
    let var2 = parseFloat(parts[1]);

    if (isNaN(var1) || isNaN(var2)) return "Invalid Numbers";

    return operation(var1, var2, operator);
}

equals_btn.addEventListener("click", () => {
    let expr = disDiv.textContent;
    let result = parseAndEvaluate(expr);
    disDiv.textContent = result;
});
