const age = 20;

const checkAge = new Promise((resolve, reject) =>  {

    if (age >= 18)  {
        resolve("Пользователю 18 или больше лет!")
    } else {
        reject ("Пользователю меньше 18 лет!");
    }
})

checkAge
    .then((result) => console.log("Успех", result))
    .catch((error) => console.log("Ошибка", error))
    .finally(() => console.log("Готово"));

const delay = new Promise((resolve) => {
    setTimeout(() => resolve("Прошла 1 секунда"), 1000);
});

delay.then((msg) => console.log(msg));