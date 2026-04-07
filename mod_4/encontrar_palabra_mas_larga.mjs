// Encuentra la palabra más larga usando técnica Sliding Window (ventana por palabra)

export const encontrarPalabraMasLarga = (texto) => {
  if (typeof texto !== "string" || texto.length === 0) return "";

  // dividir por espacios y filtrar entradas vacías
  const palabras = texto.split(" ").filter((w) => w.trim() !== "");
  if (palabras.length === 0) return "";

  let longestWord = "";

  // deslizar ventana por cada palabra (una palabra por ventana)
  for (let i = 0; i < palabras.length; i++) {
    // limpiar puntuación simple al inicio/fin y espacios
    const palabra = palabras[i]
      .replace(/^[^\wáéíóúÁÉÍÓÚñÑ]+|[^\wáéíóúÁÉÍÓÚñÑ]+$/g, "")
      .trim();
    if (palabra.length > longestWord.length) {
      longestWord = palabra;
    }
  }

  return longestWord;
};

// Export default
export default encontrarPalabraMasLarga;

// Pruebas rápidas (se ejecutan si corremos el archivo directamente)
if (
  typeof process !== "undefined" &&
  process.argv &&
  process.argv[1] &&
  process.argv[1].includes("encontrar_palabra_mas_larga.mjs")
) {
  const textos = [
    "Este es un texto de ejemplo para encontrar la palabra más larga",
    "Palabras cortas pero unaextraordinariamentelarga debe ser encontrada",
    "   Espacios   extras  y, puntuación! deberían ser limpiados.   ",
    "",
  ];

  console.log("Pruebas encontrarPalabraMasLarga:");
  textos.forEach((t, i) => {
    console.log(`Caso ${i + 1}:`, JSON.stringify(t));
    console.log("->", encontrarPalabraMasLarga(t));
    console.log("---");
  });
}
