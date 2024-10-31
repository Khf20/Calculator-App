export class ButtonHandler {
    constructor(calculator) {
        this.calculator = calculator;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.querySelectorAll('.number').forEach(button => {
            button.addEventListener('click', () => {
                this.calculator.handleNumber(button.textContent);
            });
        });

        document.querySelectorAll('.operator').forEach(button => {
            button.addEventListener('click', () => {
                const action = button.dataset.action;
                this.calculator.handleOperator(action);
            });
        });

        document.querySelector('[data-action="clear"]').addEventListener('click', () => {
            this.calculator.clear();
        });
    }
}
