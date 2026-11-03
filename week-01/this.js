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

const hi = user.sayHi;
hi();               // 3