import {
  getAllNotes,
  getNoteById,
  createNote,
} from "../services/notesService.mjs";

import { noteSchema } from "../schemas/note.mjs";

export function getAll(req, res) {
  const allNotes = getAllNotes();
  res.json(allNotes);
}

export function getById(req, res) {
  const id = Number(req.params.id);
  const note = getNoteById(id);
  if (!note) {
    res.status(404).json({ error: "Заметка не найдена" });
  } else {
    return res.json(note);
  }
}

export function create(req, res) {
  const result = noteSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      })),
    });
  }
  const note = createNote(result.data.text);
  res.status(201).json(note);
}
