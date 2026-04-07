// Implementación de gestión de lista de compras
// - arreglo `listaDeCompras`
// - funciones arrow: agregarProducto, eliminarProducto, mostrarLista

export const listaDeCompras = [];

export const agregarProducto = (producto) => {
  if (!producto || typeof producto !== "string") return false;
  const prod = producto.trim();
  if (!prod) return false;
  const existe = listaDeCompras.some(
    (p) => p.toLowerCase() === prod.toLowerCase(),
  );
  if (existe) return false;
  listaDeCompras.push(prod);
  return true;
};

export const eliminarProducto = (producto) => {
  if (!producto || typeof producto !== "string") return false;
  const prod = producto.trim();
  const index = listaDeCompras.findIndex(
    (p) => p.toLowerCase() === prod.toLowerCase(),
  );
  if (index === -1) return false;
  listaDeCompras.splice(index, 1);
  return true;
};

export const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
    return;
  }
  console.log("Lista de compras:");
  listaDeCompras.forEach((p, i) => console.log(`${i + 1}. ${p}`));
};
