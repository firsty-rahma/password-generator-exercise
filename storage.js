export function storePassword(passwordData) {
    localStorage.setItem('password_data', JSON.stringify(passwordData));
}

export function getLatestPassword() {
    const storedPassword = localStorage.getItem('password_data');
    return storedPassword ? JSON.parse(storedPassword):[]
}