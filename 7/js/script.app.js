class Calculator {
    constructor(previousDisplay, currentDisplay) {
        this.previousDisplay = previousDisplay;
        this.currentDisplay = currentDisplay;
        this.reset();
    }


    reset() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = '';

    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return;

        this.currentOperand = this.currentOperand.toString() + number.toString();

    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';


    }
    compute() {
        let calculation;
        let prev = parseFloat(this.previousOperand);
        let curr = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(curr)) return;

        switch (this.operation) {
            case '+':
                calculation = prev + curr;
                break;
            case '-':
                calculation = prev - curr;
                break;
            case 'x':
                calculation = prev * curr;
                break;
            case '/':
                calculation = prev / curr;
                break;
             default: 
                return;
        };
        this.currentOperand = calculation;
        this.operation = undefined;
        this.previousOperand = '';


    }
    updateDisplay() {
        this.currentDisplay.innerText = this.currentOperand;
        if(this.operation!= null){
            this.previousDisplay.innerText = `${this.previousOperand}${this.operation}`;
        }
    }


}


let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalButton = document.querySelector('[data-equals]');
let deleteButton = document.querySelector('[data-delete]');
let resetButton = document.querySelector('[data-reset]');
let previousDisplay = document.querySelector('[data-previous]');
let currentDisplay = document.querySelector('[data-current]');


const calculator = new Calculator(previousDisplay, currentDisplay);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

resetButton.addEventListener('click', button => {
    calculator.reset();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});
