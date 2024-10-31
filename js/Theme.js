export class Theme {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.isDark = false;
        this.setupEventListener();
    }

    setupEventListener() {
        this.themeToggle.addEventListener('click', () => this.toggle());
    }

    toggle() {
        this.isDark = !this.isDark;
        document.body.classList.toggle('dark-mode');
        this.themeToggle.textContent = this.isDark ? '☀️' : '🌙';
    }
}