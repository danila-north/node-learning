import { Router } from "express"

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
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Text is required"})
    }
    const newNote = { id: Date.now(), text}
    notes.push(newNote)
        res.status(201).json(newNote)
})

router.put('/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find((n) => n.id === id)
    if(!note) {
        return res.status(404).json({ error: "id не найден"})
    }
    const { text } = req.body
    if(!text) {
        return res.status(400).json({ error: "Text is required"})
    }
    note.text = text;
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