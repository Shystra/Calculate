let currentInput = "";
let operator = "";
let firstInput = "";
let displayValue = "";
let isNewCalculation = true;



function appendToDisplay(value){
    if (isNewCalculation) {
        displayValue = "";
        isNewCalculation = false;
    }
    currentInput += value;
    displayValue += value;
    document.getElementById("display").value = displayValue;
}


function clearDisplay(){
    currentInput = "";
    operator = "";
    firstInput = "";
    displayValue = "";
    document.getElementById("display").value = displayValue;
}




function setOperator(op){
    if (currentInput === "") {
        if(firstInput !== "") {
            displayValue = firstInput.toString(); 
            displayValue += op;
            operator = op;
            document.getElementById("display").value = displayValue;
            currentInput = "";
            return;
        }
        return;
    }
    operator = op;
    firstInput = parseFloat(currentInput);
    currentInput = "";
    displayValue += op;    
    document.getElementById("display").value = displayValue;
}



function calculate() {
    firstInput = parseFloat(firstInput);
    currentInput = parseFloat(currentInput);
    let result = 0

    switch (operator){
        case '+':
            result = firstInput + currentInput;
            break;

        case '-':
            result = firstInput - currentInput;
            break;

        case '*':
            result = firstInput * currentInput;
            break;


        case '/':
            if (currentInput !== 0){
                result = firstInput / currentInput;
            } else {
                alert('Não é possivel dividir por zero');
                clearDisplay();
                return;
            }
            break;

        default:
             return
    }

    document.getElementById('display').value = result;
    firstInput = result; // Armazenando resultado em firstInput
    currentInput = ""; // Resetando currentInput
    displayValue = firstInput.toString();


}