function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Данила" }), 500);
  });
}


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

async function showOrdersCount() {
    try {
        const user = await getUser(1);
        const orders = await getOrders(user);
        console.log(user.name, "у вас", orders.length, "заказа")
    } catch (error) {
        console.log("Ошибка:", error)
    }
}

showOrdersCount();