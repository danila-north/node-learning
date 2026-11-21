function countWords(str) {
  const arr = str.split(" ");
  return arr.reduce((acc, word) => {
    if (!acc[word]) {
      acc[word] = 0;
    }
    acc[word]++;
    return acc;
  }, {});
}

console.log(countWords("кот пёс кот рыба кот пёс"));
