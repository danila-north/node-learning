const notes = [
  { id: 1, text: "Привет" },
  { id: 2, text: "Учу Express" },
];

function updateNote(notes, id, text) {
  const result = notes.find((note) => note.id === id);
  if (result) {
    result.text = text;
    return result;
  } else {
    return null;
  }
}

console.log(updateNote(notes, 2, "Учу zod"));
console.log(updateNote(notes, 99, "Что-то"));
console.log(notes);
