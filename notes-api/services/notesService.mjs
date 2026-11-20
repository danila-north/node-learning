const notes = [
  { id: 1, text: "Привет!" },
  { id: 2, text: "Учу middleware" },
];

export function getAllNotes() {
  return notes;
}

export function getNoteById(id) {
  const result = notes.find((note) => note.id === id);
  if (result) {
    return result;
  } else {
    return null;
  }
}

export function createNote(text) {
  const newNote = { id: Date.now(), text };
  notes.push(newNote);
  return newNote;
}

export function updateNote(id, text) {
  const result = notes.find((note) => note.id === id);
  if (result) {
    result.text = text;
    return result;
  } else {
    return null;
  }
}

export function deleteNote(id) {
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) {
    return false;
  }
  notes.splice(index, 1);
  return true;
}
