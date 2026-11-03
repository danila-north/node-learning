function myMap(arr, callback) {
    const result = [];
    for (const item of arr) {
        result.push (callback(item));
    }
    return result;
}

console.log(myMap([1, 2, 3], n => n*10));

function myFilter(arr, callback) {
    const result = [];
    for (const item of arr) {
    if (callback(item)) {
        result.push(item);
       }
    }
    return result;
}

console.log(myFilter([1, 2, 3, 4], n => n > 2));