const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2));
console.log(nums.filter(n => n > 2));
console.log(nums.find(n => n > 2));
console.log(nums.some(n => n > 4));
console.log(nums.every(n => n > 0));
console.log(nums.reduce((sum, n) => sum + n, 0));

const users = [
  { name: "Данила", age: 22, active: true },
  { name: "Петя", age: 17, active: false },
  { name: "Вася", age: 30, active: true },
  { name: "Маша", age: 25, active: false },
  { name: "Оля", age: 19, active: true },
];

const names = users.map(user => user.name);
console.log(names);

const actives = users.filter(user => user.active);
console.log(actives);

const ages = users.find(user => user.age > 24);
console.log(ages);

const hasMinor = users.some(user => user.age < 18);
console.log(hasMinor);

const sum = users.reduce((total, user) => total + user.age, 0);
console.log(sum);

const activeNames = users.filter(user => user.active).map(user => user.name);
console.log(activeNames);