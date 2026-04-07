// Filtro y Orden de Productos de una Tienda Online
// - Crea un arreglo de productos (nombre, precio, categoría)
// - Filtra productos con precio < 100
// - Ordena alfabéticamente por nombre
// - Genera un arreglo con solo los nombres
// - Muestra resultados y ejemplos opcionales (reduce, some, every, includes)

const productos = [
  { nombre: "Camiseta", precio: 299, categoria: "Ropa" },
  { nombre: "Calcetines", precio: 49, categoria: "Ropa" },
  { nombre: "Gorra", precio: 89, categoria: "Accesorios" },
  { nombre: "Audífonos", precio: 1299, categoria: "Electrónica" },
  { nombre: "Libreta", precio: 39, categoria: "Papelería" },
  { nombre: "Lápiz", precio: 9, categoria: "Papelería" },
];

console.log("Productos originales:");
console.table(productos);

// 1) Filtrar productos que cuesten menos de $100
const productosBaratos = productos.filter((p) => p.precio < 100);
console.log("\nProductos con precio < $100:");
console.table(productosBaratos);

// 2) Ordenar alfabéticamente por nombre
const productosBaratosOrdenados = productosBaratos.sort((a, b) =>
  a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" }),
);
console.log("\nProductos baratos ordenados alfabéticamente:");
console.table(productosBaratosOrdenados);

// 3) Generar un nuevo arreglo que contenga solo los nombres
const nombresProductos = productosBaratosOrdenados.map((p) => p.nombre);
console.log("\nArreglo con solo los nombres:");
console.log(nombresProductos);

// Opcional: ejemplos de otros métodos
// reduce: total del precio de los productos baratos
const totalBaratos = productosBaratosOrdenados.reduce(
  (acc, p) => acc + p.precio,
  0,
);
console.log("\nTotal precio productos < $100:", totalBaratos);

// some: ¿existe algún producto gratis (precio 0)?
const hayGratis = productos.some((p) => p.precio === 0);
console.log("\n¿Hay algún producto gratis?:", hayGratis);

// every: ¿todos los productos baratos son de la categoría Papelería? (ejemplo)
const todosPapeleria = productosBaratosOrdenados.every(
  (p) => p.categoria === "Papelería",
);
console.log("\n¿Todos los productos baratos son Papelería?:", todosPapeleria);

// includes: ¿está "Gorra" en los nombres obtenidos?
const incluyeGorra = nombresProductos.includes("Gorra");
console.log('\n¿La lista de nombres incluye "Gorra"?:', incluyeGorra);

// Mostrar resultado final en formato amigable
console.log("\nNombres finales (productos < $100, ordenados):");
nombresProductos.forEach((n, i) => console.log(`${i + 1}. ${n}`));

// Exportar por si se quiere importar desde otro módulo (opcional)
export {
  productos,
  productosBaratos,
  productosBaratosOrdenados,
  nombresProductos,
};
