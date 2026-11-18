import express from "express"
import { logger } from "./middleware/logger.mjs"
import { checkApiKey } from "./middleware/checkApiKey.mjs"
import { notFound } from "./middleware/notFound.mjs"
import { errorHandler } from "./middleware/errorHandler.mjs"

const app = express()

app.use(express.json())
app.use(logger)
app.use(checkApiKey)

const notes = [
    { id: 1, text: 'Привет!' },
    { id: 2, text: 'Учу middleware' }
]

app.get("/notes", (req, res) => {
    res.json(notes)
})

app.get('/boom', (req, res) => {
    throw new Error('Что-то сломалось')
})

app.use(notFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log("Express запущен: http://localhost:3000")
})


