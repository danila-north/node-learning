const items = [
  { name: "apple", type: "fruit" },
  { name: "carrot", type: "veg" },
  { name: "banana", type: "fruit" },
];

function groupBy(arr, key) {
    return arr.reduce((acc, item) => {
        if(!acc[key]) {
            const group = item[key]
        }
        acc.push(key)
        return acc
    }, {});
}

console.log(groupBy(items, "type"))