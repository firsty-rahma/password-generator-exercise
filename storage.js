export function storePassword(password, url) {
    localStorage.setItem('lastGeneratedPassword', JSON.stringify({
        password, url
    }));
}

export function getLatestPassword() {
    const storedPassword = localStorage.getItem('lastGeneratedPassword');
    return storedPassword ? JSON.parse(storedPassword):null
}