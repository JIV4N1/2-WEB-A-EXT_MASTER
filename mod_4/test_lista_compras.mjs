import { listaDeCompras, agregarProducto, eliminarProducto, mostrarLista } from './lista_compras.mjs';

console.log('Añadiendo "Leche":', agregarProducto('Leche'));
console.log('Añadiendo "Pan":', agregarProducto('Pan'));
console.log('Añadiendo "leche" (duplicado por case):', agregarProducto('leche'));
console.log('Añadiendo "  Huevos  " (con espacios):', agregarProducto('  Huevos  '));
mostrarLista();
console.log('Eliminando "pan":', eliminarProducto('pan'));
mostrarLista();
console.log('Intentando eliminar "Azucar" (no existe):', eliminarProducto('Azucar'));
