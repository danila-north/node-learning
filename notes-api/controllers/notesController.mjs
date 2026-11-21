import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from "../services/notesService.mjs";

import { noteSchema } from "../schemas/note.mjs";

export async function getAll(req, res) {
  const allNotes = await getAllNotes();
  res.json(allNotes);
}

export async function getById(req, res) {
  const id = Number(req.params.id);
  const note = await getNoteById(id);
  if (!note) {
    res.status(404).json({ error: "Заметка не найдена" });
  } else {
    return res.json(note);
  }
}

export async function create(req, res) {
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
  const note = await createNote(result.data.text);
  res.status(201).json(note);
}

export function remove(req, res) {
  const id = Number(req.params.id);
  const deleted = deleteNote(id);
  if (!deleted) {
    res.status(404).json({ error: "Заметка не найдена" });
  } else {
    res.status(204).end();
  }
}

export function update(req, res) {
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
  const id = Number(req.params.id);
  const updated = updateNote(id, result.data.text);
  if (updated === null) {
    res.status(404).json({ error: "Заметка не найдена" });
  } else {
    res.json(updated);
  }
}
