import { readFile, writeFile } from "fs/promises";

const FILE = process.env.NOTES_FILE || "notes-api/data/notes.json";

async function readNotes() {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
}

async function writeNotes(notes) {
  await writeFile(FILE, JSON.stringify(notes, null, 2));
}

export async function getAllNotes() {
  const notes = await readNotes();
  return notes;
}

export async function getNoteById(id) {
  const notes = await readNotes();
  const result = notes.find((note) => note.id === id);
  if (result) {
    return result;
  } else {
    return null;
  }
}

export async function createNote(text) {
  const notes = await readNotes();
  const newNote = { id: Date.now(), text };
  notes.push(newNote);
  await writeNotes(notes);
  return newNote;
}

export async function updateNote(id, text) {
  const notes = await readNotes();
  const result = notes.find((note) => note.id === id);
  if (result) {
    result.text = text;
    await writeNotes(notes)
    return result;
  } else {
    return null;
  }
}

export async function deleteNote(id) {
  const notes = await readNotes();
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return false;
  }
  notes.splice(index, 1);
  await writeNotes(notes);
  return true;
}
