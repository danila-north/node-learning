function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Данила" }), 500);
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


function getOrders() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const serverOk = Math.random() > 0.5; // 50/50, заранее неизвестно

      if (serverOk) {
        resolve(["Мышь", "Клавиатура"]);
      } else {
        reject("Сервер не ответил");
      }
    }, 500);
  });
}