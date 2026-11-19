function countWords(str) {
    const words = str.split(' ');
    const result = words.reduce((acc, word) => {
    if (!acc[word]) {
        acc[word] = 0;
    }
    acc[word] ++;
    return acc;
    }, {})
    return result;
}

console.log(countWords('кот пёс кот рыба кот пёс'));