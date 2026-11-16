const nums = [10, 2, 1];
console.log(nums.sort((a, b) => {
    return a - b;
}))
// 2 1 10, просто помню из теста
// потому что символ 1 начинается раньше символа 2
// чота там ретурн а - б

// 2. reduce без начального значения
console.log([].reduce((sum, x) => sum + x, 0));
// предсказание: type error(ошибка выполнения)
// на практике в reduce важен  initial value, он нужен когда массив может оказаться пустым и на практике его лучше всегда передавать
// если нам важно свернуть массив в одно значение, при этом чтобы обязательное начальное значение не повлияло
// досаточно просто добавить ноль в конце через запятую.

// 3. копирование
const a = { user: { name: "A" } };
const b = structuredClone(a);
b.user.name = "B";
console.log(a.user.name);
// почему: spread копирует только верхний уровень, поэтому user у a и b — один общий объект.
// Меняем b.user.name — меняется и a.user.name (было B).
// structuredClone делает полную копию: у b свой user, поэтому в a осталось A.

// 4. Promise.all с ошибкой
const wait = (ms, value) => new Promise(res => setTimeout(() => res(value), ms));
const fail = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error("упал")), ms));

const start = Date.now();
try {
  const result = await Promise.allSettled([wait(1000, "A"), fail(100), wait(1000, "C")]);
  console.log("результат:", result);
} catch (e) {
  console.log("ошибка:", e.message, "через", Date.now() - start, "мс");
}
// предсказание: ошибка: упал, примерно через 100 мс
// почему: Promise.all падает целиком, как только упал хотя бы один промис, и сразу уходит в catch.
// Остальные промисы (A и C) не отменяются, они успешно завершатся через секунду, но их результат уже никому не нужен.

