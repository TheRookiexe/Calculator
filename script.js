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
