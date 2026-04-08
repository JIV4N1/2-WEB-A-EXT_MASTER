const { addNote, listNotes, removeNote } = require("./gestorNotas.js");

// Limpiar o reiniciar archivo de notas para pruebas (opcional)
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "notas.json");
fs.writeFileSync(filePath, "[]", "utf8");

console.log("-- Agregar notas --");
console.log(addNote("compras", "Comprar leche y pan"));
console.log(addNote("recordatorio", "Llamar al doctor"));
console.log(addNote("compras", "Intento duplicado"));

console.log("\n-- Listar notas --");
listNotes();

console.log('\n-- Eliminar nota "compras" --');
console.log(removeNote("compras"));

console.log("\n-- Listar notas tras eliminación --");
listNotes();
