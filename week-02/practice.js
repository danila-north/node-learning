function getProduct(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id<=0) {
                reject("Неверный id")
            } else {
                resolve({ id, title: "Товар " + id, price: id * 100 });
            }
        }, 300)
    })
}

async function showProduct(id) {
    try {
        const product = await getProduct(id);
        console.log(`${product.title}, ${product.price}`)
    } catch (error) {
        console.log("Ошибка:", error);
    }
}

showProduct(1);
showProduct(-1);