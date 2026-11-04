const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "PostgreSQL"];
const user = { id: 1, name: "Данила", email: "d@mail.ru", password: "secret" };

const skills = [...frontend, ...backend];
console.log(skills);

const updated = { ...user, email: "danila@mail.ru" };
console.log(updated);

const { password, ...publicUser } = user;
console.log(publicUser);

const [main, ...rest] = skills;
console.log(main);
console.log(rest);
