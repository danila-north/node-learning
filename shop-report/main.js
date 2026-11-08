import { fetchProducts, fetchCategories } from "./api.js";

const products = await fetchProducts();
const categories = await fetchCategories();

console.log("Товаров: ", products.length);
console.log("Категорий: ", categories.length);