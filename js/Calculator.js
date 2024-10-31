export class Calculator {
    constructor(display) {
        this.display = display;
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.newNumber = true;
        this.constants = {
            pi: Math.PI,
            e: Math.E
        };
    }

    handleNumber(number) {
        if (this.newNumber) {
            this.currentValue = number;
            this.newNumber = false;
        } else {
            this.currentValue = this.currentValue === '0' ? number : this.currentValue + number;
        }
        this.display.update(this.currentValue);
    }

    handleOperator(action) {
        switch(action) {
            case 'add':
            case 'subtract':
            case 'multiply':
            case 'divide':
            case 'power':
                this.handleBasicOperator(action);
                break;
            case 'equals':
                this.calculate();
                break;
            case 'sqrt':
                this.currentValue = Math.sqrt(parseFloat(this.currentValue)).toString();
                this.display.update(this.currentValue);
                break;
            case 'square':
                const num = parseFloat(this.currentValue);
                this.currentValue = (num * num).toString();
                this.display.update(this.currentValue);
                break;
            case 'pi':
                this.currentValue = this.constants.pi.toString();
                this.display.update(this.currentValue);
                this.newNumber = true;
                break;
            case 'e':
                this.currentValue = this.constants.e.toString();
                this.display.update(this.currentValue);
                this.newNumber = true;
                break;
            case 'exp':
                this.handleBasicOperator('multiply');
                this.currentValue = '10';
                this.operator = 'power';
                break;
            case 'percent':
                this.currentValue = (parseFloat(this.currentValue) / 100).toString();
                this.display.update(this.currentValue);
                break;
            case 'decimal':
                if (!this.currentValue.includes('.')) {
                    this.currentValue += '.';
                    this.display.update(this.currentValue);
                }
                break;
        }
    }

    handleBasicOperator(action) {
        if (this.previousValue === null) {
            this.previousValue = parseFloat(this.currentValue);
        } else if (!this.newNumber) {
            this.calculate();
        }
        this.operator = action;
        this.newNumber = true;
    }

    calculate() {
        if (this.previousValue === null || this.newNumber) return;

        const current = parseFloat(this.currentValue);
        const previous = parseFloat(this.previousValue);

        switch(this.operator) {
            case 'add':
                this.currentValue = (previous + current).toString();
                break;
            case 'subtract':
                this.currentValue = (previous - current).toString();
                break;
            case 'multiply':
                this.currentValue = (previous * current).toString();
                break;
            case 'divide':
                this.currentValue = (previous / current).toString();
                break;
            case 'power':
                this.currentValue = Math.pow(previous, current).toString();
                break;
        }

        this.display.update(this.currentValue);
        this.previousValue = null;
        this.newNumber = true;
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.newNumber = true;
        this.display.clear();
    }
}
