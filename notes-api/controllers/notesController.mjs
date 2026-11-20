import { getAllNotes } from "../services/notesService.mjs"

export function getAll(req, res) {
    const allNotes = getAllNotes();
    res.json(allNotes);
}