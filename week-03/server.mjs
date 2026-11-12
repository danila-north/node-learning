import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    if (req.url === "/") {
        res.end("Главная страница")
    } else if (req.url === "/about") {
        res.end("Меня зовут Данила, я учу Node.js")
    } else if (req.url === "/time") {
        res.end(new Date().toLocaleTimeString())
    } else {
        res.end("Страница не найдена")
    }
})

server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})