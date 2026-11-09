function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results)
                    }
                })
                .catch(reject);
        })
    })
}

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

const result = await myPromiseAll([wait(300, "A"), wait(100, "B"), wait(200, "C")]);
console.log(result);