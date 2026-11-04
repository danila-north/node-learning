const order = { id: 1, product: "Продукт", quantity: 2 }

const json = JSON.stringify(order);
console.log(json);
console.log(typeof json);

const obj = JSON.parse(json);
console.log(obj.product);

try {
    JSON.parse("{oops!}")
} catch (error){
    console.log("Невалидный JSON")
}