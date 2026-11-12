import http from "http";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Привет! Это мой первый сервер")
})

server.listen(3000, () => {
    console.log("Сервер запущен: http://localhost:3000")
})