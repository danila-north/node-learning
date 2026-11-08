import { getAveragePrice, getTopExpensive, getTopRated, countByCategory, getLowStock } from "./stats.js";

export function printReport(products, categories) {
    console.log("===ОТЧЕТ ПО МАГАЗИНУ===")
    console.log("Товаров:", products.length);
    console.log("Категорий: ", categories.length);
    console.log("Средняя цена: ", getAveragePrice(products).toFixed(2));
    
    console.log("")
    console.log("Самые дорогие:");
    const top = getTopExpensive(products);
    top.forEach(product => console.log(` ${product.title} - ${product.price}`))

    console.log("")
    console.log("Лучший рейтинг:");
    const topRated = getTopRated(products);
    topRated.forEach(product => console.log(` ${product.title} - ${product.rating}`))

    console.log("")
    console.log("Заканчиваются: ")
    const lowStock = getLowStock(products);
    lowStock.forEach(product => console.log(` ${product.title} - ${product.stock}`))

    console.log("");
    console.log("По категориям:");
    const counts = countByCategory(products);
    Object.entries(counts).forEach(([category, count]) => console.log(`  ${category}: ${count}`));  
}