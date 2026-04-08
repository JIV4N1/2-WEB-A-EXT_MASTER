const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "notas.json");

function loadNotes() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2), "utf8");
}

function addNote(title, body) {
  const notes = loadNotes();
  if (notes.find((n) => n.title === title)) {
    return { success: false, message: "Ya existe una nota con ese título." };
  }
  notes.push({ title, body });
  saveNotes(notes);
  return { success: true, message: "Nota agregada." };
}

function listNotes() {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log("No hay notas guardadas.");
    return notes;
  }
  notes.forEach((n, i) => {
    console.log(`${i + 1}. ${n.title}: ${n.body}`);
  });
  return notes;
}

function removeNote(title) {
  const notes = loadNotes();
  const filtered = notes.filter((n) => n.title !== title);
  if (filtered.length === notes.length) {
    return {
      success: false,
      message: "No se encontró una nota con ese título.",
    };
  }
  saveNotes(filtered);
  return { success: true, message: "Nota eliminada." };
}

module.exports = { addNote, listNotes, removeNote };
