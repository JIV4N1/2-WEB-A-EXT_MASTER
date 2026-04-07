// Encuentra el primer par de invitados consecutivos cuyos nombres
// empiezan con la misma letra usando dos punteros.

export const encontrarPrimerPar = (invitados) => {
  if (!Array.isArray(invitados) || invitados.length < 2) return null;

  let i = 0;
  let j = 1;

  while (j < invitados.length) {
    const a = typeof invitados[i] === 'string' ? invitados[i].trim() : '';
    const b = typeof invitados[j] === 'string' ? invitados[j].trim() : '';

    if (a && b) {
      const inicialA = a[0].toLowerCase();
      const inicialB = b[0].toLowerCase();
      if (inicialA === inicialB) return [a, b];
    }

    i++;
    j++;
  }

  return null;
};

// Casos de prueba
const lista1 = ['Ana', 'Beatriz', 'Bruno', 'Carlos', 'Cecilia'];
const lista2 = ['Alberto', 'Ana', 'Bea', 'Carla'];
const lista3 = ['Diego', 'Elena', 'Fernando'];
const lista4 = [];
const lista5 = ['Gabriela'];

const pruebas = [
  { name: 'lista1', data: lista1 },
  { name: 'lista2', data: lista2 },
  { name: 'lista3', data: lista3 },
  { name: 'lista4', data: lista4 },
  { name: 'lista5', data: lista5 }
];

console.log('Búsqueda de primer par de invitados consecutivos con misma inicial');
pruebas.forEach(p => {
  const res = encontrarPrimerPar(p.data);
  if (res) {
    console.log(`${p.name}: Encontrado -> ${res[0]} y ${res[1]}`);
  } else {
    console.log(`${p.name}: No se encontró ningún par válido`);
  }
});

// Exportar por defecto también (opcional)
export default encontrarPrimerPar;
