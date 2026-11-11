import { readFile, writeFile } from "fs/promises";

const notes = [
    { id: 1, text: "Выучить Node.js"},
    { id: 2, text: "Сделать первый сервер"},
];

await writeFile("week-03/notes.json", JSON.stringify(notes, null, 2));
const text = await readFile("week-03/notes.json", "utf-8");
const loaded = JSON.parse(text);

loaded.push({ id: 3, text:"Сделать второй сервер"});

await writeFile("week-03/notes.json", JSON.stringify(loaded, null, 2));

console.log(loaded);