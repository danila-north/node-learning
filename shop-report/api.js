import { NetworkError, ApiError } from "./errors.js";

async function request(url) {
    let response;

    try {
        response = await fetch(url);

    } catch (error) {
        throw new NetworkError("Нет связи с сервером");
    }

    if(!response.ok) {
        throw new ApiError("Ошибка сервера", response.status);
    }

    return response.json();
}

export async function fetchProducts() {
    const data = await request("https://dummyjson.com/products?limit=0");
    return data.products;
}

export async function fetchCategories() {
    const data = await request("https://dummyjson.com/products/categories");
    return data;
}