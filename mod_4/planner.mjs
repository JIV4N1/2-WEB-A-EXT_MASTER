import {
  registrarDestino,
  mostrarItinerario,
  calcularCosto,
} from "./travelManager.mjs";

const demo = () => {
  registrarDestino("Paris", "2026-08-15", "avion", 2, "hotel");
  registrarDestino("Madrid", "2026-09-01", "tren", 4, "estandar");
  registrarDestino("Lima", "2026-07-10", "avion", 1, "hostal");

  console.log("--- Itinerario registrado ---");
  mostrarItinerario();

  console.log("\n--- Costos de ejemplo ---");
  console.log(
    `Paris (2 personas, avion, hotel): $${calcularCosto("Paris", "avion", 2, "hotel")}`,
  );
  console.log(
    `Madrid (4 personas, tren, estandar): $${calcularCosto("Madrid", "tren", 4, "estandar")}`,
  );
  console.log(
    `Lima (1 persona, avion, hostal): $${calcularCosto("Lima", "avion", 1, "hostal")}`,
  );
};

demo();
