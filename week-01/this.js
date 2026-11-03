const user = {
  name: "Danila",
  sayHi: function () {
    console.log(this.name);
  },
  sayHiArrow: () => {
    console.log(this.name);
  },
};

user.sayHi();       // 1
user.sayHiArrow();  // 2

const hi = user.sayHi.bind(user);
hi();               // 3

function greet(greeting) {
    console.log(greeting + ", " + this.name);
}

const vasya = { name: "Вася" };

greet.call(vasya, "Здорова");

const timer = {
  name: "Таймер",
  start: function () {
    setTimeout(() => {
        console.log(this.name)
    }, 1000);
  },
};

timer.start();