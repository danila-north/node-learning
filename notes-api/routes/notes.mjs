import { Router } from "express"
import { noteSchema } from "../schemas/note.mjs"

const router = Router();

const notes = [
    { id: 1, text: 'Привет!' },
    { id: 2, text: 'Учу middleware' }
]

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find((n) => n.id === id);
    if (!note) {
        return res.status(404).json({ error: "id не найден"})
    } else {
        res.json(note)
    }
})

router.post('/', (req, res) => {
    const result = noteSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            error: "Validation failed",
            details: result.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message,
            }))
        })
    };
    const { text } = result.data
    const newNote = { id: Date.now(), text}
    notes.push(newNote)
        res.status(201).json(newNote)
})

router.put('/:id', (req, res) => {
    const result = noteSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            error: "Validation failed",
            details: result.error.issues.map((issue) => ({
                field: issue.path[0],
                message: issue.message,
            }))
        })
    }
    const { text } = result.data
    const id = Number(req.params.id)
    const note = notes.find((n) => n.id === id)
    if(!note) {
        return res.status(404).json({ error: "id не найден"})
    }
    note.text = text
    res.json(note);
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = notes.findIndex((n) => n.id === id)
    if (index === -1) {
        return res.status(404).json({ error: "Note not found"})
    }
    notes.splice(index, 1)
    res.status(204).end()
})

router.get('/', (req, res) => {
    res.json(notes)
})

export default router;