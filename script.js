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
            add(var1, var2);
            break;
        
        case '-':
            subtract(var1, var2);
            break;

        case '×':
            multiply(var1, var2);
            break;
        
        case '÷':
            divide(var1, var2);
            break;
        case '!':
            fact(var1);
            break;
        case '%':
            mod(var1,var2);
            break;
        case 'pow':
            power(var1, var2);
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
