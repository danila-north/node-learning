import http from "http";
import { readFile, writeFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    if (req.url === "/") {
        res.end("Главная страница")
    } else if (req.url === "/about") {
        res.end("Меня зовут Данила, я учу Node.js")
    } else if (req.url === "/time") {
        res.end(new Date().toLocaleTimeString())
    } else if (req.url === "/notes" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        const text = await readFile("week-03/notes.json", "utf-8")  
        res.end(text)
    } else if(req.url === "/notes" && req.method === "POST") {
        let body = "";
        for await (const chunk of req) {
            body += chunk;
        }
        const newNote = JSON.parse(body);
        if (!newNote.text) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json; charset=utf-8")
            res.end(JSON.stringify({ error: "Поле text - обязательно!" }))
            return
        }
        const text = await readFile("week-03/notes.json", "utf-8")
        const notes = JSON.parse(text)
        const newId = Math.max(...notes.map(note => note.id)) + 1;
        const created = ({id: newId, text: newNote.text})
        notes.push(created);
        await writeFile("week-03/notes.json", JSON.stringify(notes, null, 2))
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.end(JSON.stringify(created))
    } else if (req.url.startsWith("/notes/") && req.method === "DELETE") {
        const text = await readFile("week-03/notes.json", "utf-8")
        const id = Number(req.url.split("/")[2])
        const loaded = JSON.parse(text)
        const note = loaded.find(note => note.id === id)
        if (!note) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json; charset=utf-8")
            res.end(JSON.stringify({ error: "Заметка не найдена" }))
            return
        }
        const remaining = loaded.filter(n => n.id !== id);
        await writeFile("week-03/notes.json", JSON.stringify(remaining, null, 2));
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(note));
    }
      else if (req.url.startsWith("/notes/")) {
        const id = Number(req.url.split("/")[2])
        const text = await readFile("week-03/notes.json", "utf-8")
        const loaded = JSON.parse(text)
        const note = loaded.find(note => note.id === id)
        if (note) {
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(note))
        } else {
            res.statusCode = 404;
            res.end("Заметка не найдена")
        }
    } else {
        res.statusCode = 404;
        res.end("Страница не найдена")
    }
})

server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})