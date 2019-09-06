function getNumber(num){
    var input_var = document.getElementById("input");
    switch(num){
        case 1:
            input_var.value +='1';
            break;
        case 2:
            input_var.value +='2';
            break;
        case 3:
            input_var.value +='3';
            break;
        case 4:
            input_var.value +='4';
            break;
        case 5:
            input_var.value +='5';
            break;
        case 6:
            input_var.value +='6';
            break;
        case 7:
            input_var.value +='7';
            break;
        case 8:
            input_var.value +='8';
            break;
        case 9 :
            input_var.value +='9';
            break;
        case 0:
            input_var.value +='0';
            break;
    }
}
// for the decimal Point sign
function point(){
    var inputVar = document.getElementById("input");
    inputVar.value = inputVar.value + '.';
}
// mathematical operation sign
function getOperand(operand){
    var inputVar = document.getElementById("input");
    var answerVar = document.getElementById("answer");
    switch(operand) {
        case"-":
        inputVar.value += "-";
        break;
        case"+":
        inputVar.value += "+";
        break;
        case"/":
        inputVar.value += "/";
        break;
        case"*":
        inputVar.value += "*";
        break;
        case"=":
        inputVar.value += "=";
        break;
        case"CB":
        inputVar.value += ")";
        break;
        case"OB":
        inputVar.value += "(";
        break;
        case '+/-':
        inputVar.value = '-' + inputVar.value;
        break;
}
}
function squareRoot(){
var inputVar = document.getElementById("input");
var answerVar = document.getElementById("answer");
    if (inputVar.value != ""){
        answerVar.value =   Math.sqrt(inputVar.value);
    }
    else if(answerVar.value >= 0){
    answerVar.value =   Math.sqrt(answerVar.value);
    }
}
function square(){
var inputVar = document.getElementById("input");
var answerVar = document.getElementById("answer");
    if (inputVar.value != ""){
        answerVar.value =   Math.pow(inputVar.value, 2);
    }
    else if(answerVar.value >= 0){
    answerVar.value =   Math.pow(answerVar.value, 2);
    }
    clearInput();
}
// to clear the screen
function clearScreen() {
document.getElementById("input").value = "";
document.getElementById("answer").value = "";
}
function clearInput(){
document.getElementById("input").value = ""
}
function getAns(ans){
    document.getElementById("input").value = document.getElementById("answer").value;	
}
function backSpace(){
var inputVar = document.getElementById("input");
var x = inputVar.value;
if (x.length > 0){
    x = x.substring(0, x.length-1);
    inputVar.value = x;
} 
}
// to compute answer
function compute (){
var inputVar = document.getElementById("input");
var answerVar = document.getElementById("answer");
//alert("There is an error")
var string = inputVar.value;
var regEx2 = /[a-zA-Z]/; // any alphabet
const alphabet = regEx2.test(string);
if (alphabet){
    alert("there is an error in your expression");
}
else {
answerVar.value = eval(inputVar.value);
clearInput();
}  
}
