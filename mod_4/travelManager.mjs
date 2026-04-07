const destinos = [];

const registrarDestino = (
  destino,
  fecha,
  transporte,
  personas = 1,
  alojamiento = "estandar",
) => {
  destinos.push({ destino, fecha, transporte, personas, alojamiento });
};

const calcularCosto = (
  destino,
  transporte = "economico",
  personas = 1,
  alojamiento = "estandar",
) => {
  const baseCosts = new Map([
    ["Paris", 800],
    ["Madrid", 600],
    ["Lima", 700],
    ["Tokyo", 1200],
  ]);

  const base = baseCosts.get(destino) ?? 500;

  const transporteFactor =
    {
      economico: 1,
      premium: 1.5,
      avion: 1.4,
      bus: 0.6,
      tren: 0.9,
    }[transporte] ?? 1;

  const alojamientoFactor =
    {
      estandar: 1,
      hotel: 1.2,
      hostal: 0.8,
      lujo: 1.6,
    }[alojamiento] ?? 1;

  let costPerPerson = base * transporteFactor * alojamientoFactor;
  let total = costPerPerson * personas;

  if (personas >= 4) total *= 0.9; // 10% de descuento para grupos

  return Math.round(total * 100) / 100;
};

const mostrarItinerario = () => {
  if (destinos.length === 0) {
    console.log("No hay destinos registrados.");
    return;
  }

  destinos.forEach((d, i) => {
    const costo = calcularCosto(
      d.destino,
      d.transporte,
      d.personas,
      d.alojamiento,
    );
    console.log(
      `${i + 1}. ${d.destino} — Fecha: ${d.fecha} — Transporte: ${d.transporte} — Personas: ${d.personas} — Alojamiento: ${d.alojamiento} — Costo estimado: $${costo}`,
    );
  });
};

const obtenerDestinos = () => destinos.slice();

export { registrarDestino, calcularCosto, mostrarItinerario, obtenerDestinos };
