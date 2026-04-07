const librosLeidos = [];

function agregarLibro(titulo) {
  if (typeof titulo === "string" && titulo.trim() !== "") {
    librosLeidos.push(titulo.trim());
    console.log(`Libro "${titulo.trim()}" agregado.`);
  } else {
    console.log("Introduzca un título válido.");
  }
}

function mostrarLibrosLeidos() {
  if (librosLeidos.length === 0) {
    console.log("No has leído ningún libro todavía.");
    return;
  }
  console.log("Libros leídos:");
  librosLeidos.forEach((libro, indice) => {
    console.log(`${indice + 1}. ${libro}`);
  });
}
