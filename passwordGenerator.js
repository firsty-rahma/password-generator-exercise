export function generatePassword(length) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+":?></';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password
}

export function powerPassword(password) {
    let power = document.getElementById('power-point');
    let point = 0;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /W/];

    arrayTest.forEach((item) => {
        if (item.test(password)) {
            point += 1;
        }
    });

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
    
}