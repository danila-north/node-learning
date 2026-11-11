const products = [
  { title: "Мышь", price: 1500, category: "tech" },
  { title: "Чай", price: 300, category: "food" },
  { title: "Ноутбук", price: 80000, category: "tech" },
  { title: "Кофе", price: 600, category: "food" },
];

const names = products.map(product => product.title)
const tech = products.filter(product => product.category === 'tech')
const firstExpensive = products.find(product => product.price > 1000)
const hasCheap = products.some(product => product.price < 500)
const total = products.reduce((sum, product) => sum + product.price, 0)

console.log(names);
console.log(tech);
console.log(firstExpensive);
console.log(hasCheap);
console.log(total);