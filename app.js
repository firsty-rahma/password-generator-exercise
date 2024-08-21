import { generatePassword, powerPassword } from './passwordGenerator.js';
import { storePassword, getLatestPassword } from './storage.js';

class PasswordGenApp {
    constructor() {
        this.passwordLengthInput = document.getElementById('length');
        this.generateBtn = document.getElementById('generate');
        this.passwordTxt = document.getElementById('password');
        this.copyBtn = document.getElementById('copy');
        this.urlInput = document.getElementById('url');

        this.init();
    }

    init() {
        this.generateBtn.addEventListener('click', () => this.savePassword());
        this.copyBtn.addEventListener('click', () => this.copyPassword());
        
        window.addEventListener('load', () => {
            const lastPassword = getLatestPassword();

            if (lastPassword) {
                this.passwordTxt.value = lastPassword.password;
                this.urlInput.value = lastPassword.url || '';
            }
        })
    }

    savePassword() {
        const length = this.passwordLengthInput.value;
        const url = this.urlInput.value;

        let password = generatePassword(length);

        this.passwordTxt.value = password;

        powerPassword(password);
        storePassword(password, url);
    }

    copyPassword() {
        navigator.clipboard.writeText(this.passwordTxt.value)
        .then(() => {
            alert('Password copied to clipboard');
        }).catch(err => {
            alert('Failed to copy text :', err);
        });
    }
}

const app = new PasswordGenApp();