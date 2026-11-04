const user = {
  name: "Данила",
  address: { city: "Москва" },
};

const copy = { ...user };

copy.name = "Петя";
copy.address.city = "Казань";

console.log(user.name);         // 1
console.log(user.address.city); // 2

const deepCopy = structuredClone(user);
deepCopy.address.city = "Сочи";
console.log(user.address.city); // Казань - оригинал не тронут
console.log(deepCopy.address.city);