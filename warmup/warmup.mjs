const items = [
    { name: 'apple', type: 'fruit' },
    { name: 'carrot', type: 'veg' },
    { name: 'banana', type: 'fruit' },
];

function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
    const group = item[key];
    if(!acc[group]) {
        acc[group] = [];
    }
    console.log('группа:', group, '| копилка сейчас:', acc);
    acc[group].push(item);
    return acc;
    }, {})
}

console.log(groupBy(items, 'type'));

const users = [
  { name: 'Даня', city: 'Москва' },
  { name: 'Игорь', city: 'Казань' },
  { name: 'Лёша', city: 'Москва' },
];

console.log(groupBy(users, 'city'));

function delay(ms) {
    return new Promise((resolve) => {setTimeout(resolve, ms)})
    }


console.log('старт');
delay(1000).then(() => console.log('прошла секунда'))