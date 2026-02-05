// Arreglo de frutas
const frutas = [
  "manzana",
  "banana",
  "naranja",
  "manzana",
  "kiwi",
  "banana",
  "manzana",
  "pera",
  "naranja",
  "kiwi",
  "pera",
  "pera",
];

// Conteo usando for
const conteoFor = {};
for (let i = 0; i < frutas.length; i++) {
  const f = frutas[i];
  conteoFor[f] = (conteoFor[f] || 0) + 1;
}
console.log("Conteo con for:");
for (const [fruta, cantidad] of Object.entries(conteoFor)) {
  console.log(`${fruta}: ${cantidad}`);
}
