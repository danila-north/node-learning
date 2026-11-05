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

class DiscountProduct extends Product {
    constructor(title, price, discount) {
        super(title, price);
        this.discount = discount;
    }

    getFinalPrice() {
        const discountAmount = this.price * this.discount /  100;
        return this.price - discountAmount;
    }

    getInfo() {
        return `${this.title} - скидка ${this.getFinalPrice()} руб. ${this.discount}%`
    }
}

const sale = new DiscountProduct("Наушники", 4000, 25);
console.log(sale.getInfo());       // Наушники - 4000 руб. (метод от Product!)
console.log(sale.getFinalPrice()); // 3000

const saleMouse = new DiscountProduct("Мышь", 1500, 10);
console.log(saleMouse.getFinalPrice()); // ?

