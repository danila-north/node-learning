async function loadProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products/199");
    if(!response.ok) {
    throw new Error("Товар не найден")
}
    const product = await response.json();
    console.log(product.title, product.price);
  } catch (error) {
    console.log("Ошибка: ", error.message);
  }

}

loadProduct();