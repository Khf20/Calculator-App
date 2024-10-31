import { Display } from './Display.js';
import { ButtonHandler } from './ButtonHandler.js';
import { Calculator } from './Calculator.js';
import { Theme } from './Theme.js';

document.addEventListener('DOMContentLoaded', () => {
    const display = new Display();
    const calculator = new Calculator(display);
    const buttonHandler = new ButtonHandler(calculator);
    const theme = new Theme();
});