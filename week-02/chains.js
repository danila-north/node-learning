function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Данила" }), 500);
  });
}

function getOrders(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Мышь", "Клавиатура"]), 500);
  });
}

getUser(1)
  .then((user) => {
    console.log("Пользователь:", user.name);
    return getOrders(user);   // возвращаем промис
  })
  .then((orders) => {
    console.log("Заказы:", orders);
    return orders;
  })
  .then((orders) => {
    return orders.length;
  })
  .then((count) => {
    console.log("Всего заказов", count);
  })
  .catch((error) => console.log("Ошибка:", error)); 