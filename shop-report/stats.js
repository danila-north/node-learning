export function getAveragePrice(products) {
    const sum = products.reduce((total, product) => total + product.price, 0)
    return sum / products.length;
}

export function getTopExpensive(products) {
    const copy = [...products];
    copy.sort((a, b) => b.price - a.price);
    return copy.slice(0, 5);
}

export function getTopRated(products) {
    const copy = [...products];
    copy.sort((a, b) => b.rating - a.rating);
    return copy.slice(0, 5);
}

export function countByCategory(products) {
    return products.reduce((counts, product) => {
        const key = product.category;
        counts[key] = (counts[key] || 0) + 1;
        return counts;
    }, {})
}

export function getLowStock(products) {
    return products.filter(product => product.stock < 10);
}