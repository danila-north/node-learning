const product = { title: "Ноутбук", price: 50000, stock: 3 };
const scores = [90, 75, 60];

const { title, price, stock: count, discount = 0 } = product;
const [best, second] = scores;
console.log(title);
console.log(price);
console.log(count);
console.log(discount);
console.log(best);
console.log(second);


