import http, { createServer } from "http";
import { readFile, writeFile } from "fs/promises";

const server = http.createServer(async(req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8")
    if(req.url.startsWith("/notes/") && req.method === "GET") {
        const id = Number(req.url.split("/")[2])
        const text = await readFile("week-03/notes.json", "utf-8")
        const loaded = JSON.parse(text);
        const note = loaded.find((note) => note.id === id)
    if (note) {
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.end(JSON.stringify(note))
    } else {
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.statusCode = 404;
        res.end(JSON.stringify({ error:"Заметка не найдена" }))
    }
    } else if ((req.url.startsWith("/notes/") && req.method === "PUT")){
        const id = Number(req.url.split("/")[2])
        let body = ""
        for await (const chunk of req) {
            body += chunk
        }
        const update = JSON.parse(body)
        if (!update.text) {
            res.setHeader("Content-Type", "application/json; charset=utf-8")
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Поле text - обязательно" }))
            return
        }
            const text = await readFile("week-03/notes.json", "utf-8")
            const loaded = JSON.parse(text);
            const note = loaded.find((note) => note.id === id)
        if (!note) {
            res.setHeader("Content-Type", "application/json; charset=utf-8")
            res.statusCode = 404;
            res.end(JSON.stringify({ error: "Заметка не найдена" }))
            return
        }   
        note.text = update.text;
        await writeFile("week-03/notes.json", JSON.stringify(loaded, null, 2))
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.end(JSON.stringify(note ))
    } else {
        res.statusCode = 404;
        res.end("Страница не найдена")
    }
})

server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})