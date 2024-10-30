import { generatePassword, powerPassword } from './passwordGenerator.js';
import { storePassword, getLatestPassword } from './storage.js';

class PasswordGenApp {
    constructor() {
        this.passwordLengthInput = document.getElementById('length');
        this.generateBtn = document.getElementById('generate');
        this.passwordTxt = document.getElementById('password');
        this.copyBtn = document.getElementById('copy');
        this.urlInput = document.getElementById('url');
        this.latestPassword = getLatestPassword();
        this.historyList = document.getElementById('history-list');
        this.init();
    }

    init() {
        this.generateBtn.addEventListener('click', () => this.savePassword());
        this.copyBtn.addEventListener('click', () => this.copyPassword());
        
        window.addEventListener('load', () => {
            this.showHistory();
        })
    }

    savePassword() {
        const length = this.passwordLengthInput.value;
        let url = this.urlInput.value;

        if(url == '') {
            url = "No url";
        }

        let password = generatePassword(length);
        this.passwordTxt.value = password;
        
        let passwordData = {
            url_name: url,
            pass: password,
        }

        powerPassword(password);
        this.latestPassword = this.savedToHistory(passwordData);
        storePassword(this.latestPassword);
        this.showHistory();
    }

    copyPassword() {
        navigator.clipboard.writeText(this.passwordTxt.value)
        .then(() => {
            alert('Password copied to clipboard');
        }).catch(err => {
            alert('Failed to copy text :', err);
        });
    }

    savedToHistory(passwordData) {
        if (!this.latestPassword.includes(passwordData)) {
            this.latestPassword.unshift(passwordData);
            if (this.latestPassword.length > 5) {
                this.latestPassword.pop();
            }
        }
        return this.latestPassword;
    }

    showHistory(){
        this.historyList.innerHTML = this.latestPassword
        .map(passwordData => `<li>${passwordData.pass} for ${passwordData.url_name}</li>`)
        .join('')
    }
}

const app = new PasswordGenApp();