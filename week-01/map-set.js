const emails = ["a@mail.ru", "b@mail.ru", "a@mail.ru", "c@mail.ru", "b@mail.ru"];

const uniqueEmails = [...new Set(emails)];
console.log(uniqueEmails);

const stock = new Map();
stock.set("laptop", 5);
stock.set("mouse", 20);
stock.set("keyboard", 0);
stock.set("mouse", stock.get("mouse") -1 );

console.log(stock.get("mouse"));
console.log(stock.has("keyboard"));
console.log(stock);