import express from "express"
import { logger } from "./middleware/logger.mjs"

const app = express()

app.use(express.json())
app.use(logger)

const notes = [
    { id: 1, text: 'Привет!' },
    { id: 2, text: 'Учу middleware' }
]

app.get("/notes", (req, res) => {
    res.json(notes)
})

app.listen(3000, () => {
    console.log("Express запущен: http://localhost:3000")
})