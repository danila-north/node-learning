function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

console.log("старт");
delay(1000).then(() => console.log("прошла секунда"));
