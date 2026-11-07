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

async function showCart() {
    try {
        const products = await Promise.all([getProduct(1), getProduct(2), getProduct(3)])
        const total = products.reduce((total, product) => total + product.price, 0)
        console.log(`Итого: ${total} руб.`)
    } catch (error) {
        console.log("Ошибка")
    }
}

showCart();

async function loadProduct() {
    const products = await Promise.allSettled([getProduct(1), getProduct(-1), getProduct(3)])
    console.log(products)
}

loadProduct();