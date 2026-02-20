// Problema: Crear objeto a partir de un Libro
// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

function Libro(titulo, autor, anio, estado = "disponible") {
  this.titulo = titulo || "";
  this.autor = autor || "";
  this.anio = anio || 0;
  this.estado = estado; // 'disponible' o 'prestado'
  this.capitulos = [];
}

Libro.prototype.describirLibro = function () {
  console.log(
    `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`,
  );
};

// métodos opcionales para manejar capítulos
Libro.prototype.agregarCapitulo = function (capitulo) {
  if (typeof capitulo === "string" && capitulo.trim() !== "") {
    this.capitulos.push(capitulo.trim());
  }
};

Libro.prototype.eliminarCapitulo = function (indice) {
  if (
    typeof indice === "number" &&
    indice >= 0 &&
    indice < this.capitulos.length
  ) {
    this.capitulos.splice(indice, 1);
  }
};

// Ejemplo de uso:
// const miLibro = new Libro('El Quijote', 'Miguel de Cervantes', 1605);
// miLibro.describirLibro();
// miLibro.agregarCapitulo('Capítulo 1');
// miLibro.agregarCapitulo('Capítulo 2');
// console.log(miLibro.capitulos);
// miLibro.eliminarCapitulo(0);
// console.log(miLibro.capitulos);
