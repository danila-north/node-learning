const users = [
  { name: "Аня", age: 20, city: "Тбилиси" },
  { name: "Боря", age: 15, city: "Москва" },
  { name: "Вика", age: 30, city: "Тбилиси" },
];

const usersCity = users.map(user => user.city)
console.log(usersCity);

const usersAge = users.reduce((total, user) => total + user.age, 1000)
console.log(usersAge);