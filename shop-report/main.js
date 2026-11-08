import { fetchProducts, fetchCategories } from "./api.js";
import { getAveragePrice, getTopExpensive, getTopRated, countByCategory } from "./stats.js";

const products = await fetchProducts();
const categories = await fetchCategories();

console.log("Товаров: ", products.length);
console.log("Категорий: ", categories.length);
console.log("Средняя цена:", getAveragePrice(products));

const top = getTopExpensive(products);
console.log("Самые дорогие:", top.map(product => `${product.title} - ${product.price}`))

const topRated = getTopRated(products);
console.log("С самым высоким рейтингом:", topRated.map(product => `${product.title} - ${product.rating}`))

console.log("По категориям:", countByCategory(products));