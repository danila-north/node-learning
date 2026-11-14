import express from "express";
import { readFile, writeFile } from "fs/promises"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Привет из Express")
});

app.get("/about", (req, res) => {
    res.send("Привет, меня зовут Данила, я учу Express")
})

app.get("/time", (req, res) => {
    res.send(new Date().toLocaleTimeString())
})

app.get("/notes", async (req, res) => {
    const text = await readFile("week-03/notes.json", "utf-8");
    const notes = JSON.parse(text);
    res.json(notes);
})

app.get("/notes/:id", async (req, res) => {
    const id = Number(req.params.id)
    const text = await readFile("week-03/notes.json", "utf-8");
    const notes = JSON.parse(text)
    const note = notes.find((note) => note.id === id)
    if (note) {
        res.json(note)
    } else {
        res.status(404).json({ error: "Заметка не найдена"  })
    }
})

app.post("/notes", async (req, res) => {
    if(!req.body.text) {
        res.status(400).json({ error: "Поле text - обязательно" })
        return
    }
    const text = await readFile("week-03/notes.json", "utf-8")
    const notes = JSON.parse(text)
    const newId = Math.max(...notes.map(n => n.id)) + 1;
    const created = { id: newId, text: req.body.text }
    notes.push(created);
    await writeFile("week-03/notes.json", JSON.stringify(notes, null, 2))
    res.status(201).json(created);  
})

app.listen(3000, () => {
    console.log("Express запущен: http://localhost:3000")
})