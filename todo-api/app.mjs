import express from "express";
import { z } from "zod"

const app = express();
app.use(express.json());

const todos = [
  { id: 1, title: "Купить хлеб", done: false },
  { id: 2, title: "Сделать кардио", done: true },
];

const todoSchema = z.object({
    title: z.string().trim().min(1).max(200),
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const found = todos.find((todo) => todo.id === id);
    if(!found) {
        res.status(404).json({ error: "Запись не найдена" })
    } else {
        res.json(found)
    }
})

app.post("/todos", (req, res) => {
    const result = todoSchema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json({ error: "Некорректные данные" })
    }
    const newTodo = { id: Date.now(), title: result.data.title, done: false }
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

function notFound(req, res) {
    res.status(404).json({ error: "Маршрут не найден"})
}

function errorHandler(err, req, res, next ){
    console.error(err)
    res.status(500).json({ error: "Internal server error"})
}

app.use(notFound);
app.use(errorHandler);


app.listen(3001, () => {
  console.log("Express запущен: http://localhost:3001");
});
