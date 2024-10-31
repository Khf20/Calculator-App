export class Display {
    constructor() {
        this.displayElement = document.getElementById('output');
        this.value = '0';
    }

    update(value) {
        this.value = value;
        this.displayElement.textContent = this.value;
    }

    clear() {
        this.update('0');
    }
}