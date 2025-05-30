function performOperation() {
    // Get user input from input fields
    let num1 = parseFloat(document.getElementById('input1').value); // Use parseFloat for division
    let num2 = parseFloat(document.getElementById('input2').value); // Use parseFloat for division
    let operation = document.getElementById('operation').value; // Get the selected operation

    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let result;
        // Perform the selected operation
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                displayResult('Invalid operation selected');
                return;
        }
        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    debugger;
    return a + b;
}

function subtract(a, b) {
    debugger; // Introduce a debugger statement to pause execution
    return a - b;
}

function multiply(a, b) {
    debugger; 
    return a * b;
}

function divide(a, b) {
    debugger;
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}