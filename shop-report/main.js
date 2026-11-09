import { fetchProducts, fetchCategories } from "./api.js";
import { printReport } from "./report.js";
import { NetworkError, ApiError } from "./errors.js";

try {
    console.time("Загрузка товаров")
    const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()])
    console.timeEnd("Загрузка товаров")
    printReport(products, categories);
} catch (error) {
    if (error instanceof NetworkError) {
        console.log("Нет интернета:", error.message)
    } else if (error instanceof ApiError) {
        console.log("Ошибка API, код: ", error.status);
    } else {
        console.log("Неизвестная ошибка:", error.message);
    }
}