import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    if (req.url === "/") {
        res.end("Главная страница")
    } else if (req.url === "/about") {
        res.end("Меня зовут Данила, я учу Node.js")
    } else if (req.url === "/time") {
        res.end(new Date().toLocaleTimeString())
    } else if (req.url === "/notes") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        const text = await readFile("week-03/notes.json", "utf-8")
        res.end(text)
    } else {
        res.end("Страница не найдена")
    }
})

server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})