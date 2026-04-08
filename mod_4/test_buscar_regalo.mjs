import { findGift } from "./buscar_regalo_recursivo.mjs";

const gifts = ["mu%C3%B1eca", "pelota", "tren", "libro", "juego"];

console.log(findGift(gifts, "tren"));
console.log(findGift(gifts, "bici"));

// Ejemplo con posición inicial distinta (opcional)
console.log(findGift(gifts, "mu%C3%B1eca", 0));
