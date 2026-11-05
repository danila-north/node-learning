class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    getInfo () {
        return `${this.title} - ${this.price} руб.`
    }
}

const mouse = new Product("Мышь", 1500);
const keyboard = new Product("Клавиатура", 3000);
console.log(mouse.getInfo());
console.log(keyboard.getInfo());