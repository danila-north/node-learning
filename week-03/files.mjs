import { readFile, writeFile } from "fs/promises";

// записать текст в файл
await writeFile("hello.txt", "Привет из Node!");

// прочитать файл
const text = await readFile("hello.txt", "utf-8");
console.log(text);