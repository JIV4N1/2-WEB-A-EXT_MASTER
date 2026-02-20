let client_del_banco = true;
let buen_historial = true;
let condicion;
let condicion_1;
let condicion_2;
let condicion_3;

// Definición

// If sólo
if (condicion) {
  // Que pasa si se cumple
}
// Siguiente instrucción

// Definición
if (condicion) {
  // Que pasa si se cumple
} else {
  // Que pasa si no...
}
// Siguiente instrucción

// Definición
if (condicion_1) {
  // Se cumple ela condicion 1
} else if (condicion_2) {
  // Se cumple la condicion 2
} else if (condicion_3) {
  // Se cumple la condicion 3
} else {
  // No se cumple ninguna condicion
}

// Ejemplos

if (5 > 2) {
  console.log("5 es mayor que 2");
}
console.log("Siguiente instrucción");

if (client_del_banco && buen_historial) {
  // Proceso para otorgar el credito...
  console.log("Proceso para otorgar el credito...");
} else {
  // Que pasa si no cumple?...
  console.log("Que pasa si no cumple?...");
}
console.log("Siguiente instrucción");

let edad = 18;
if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 65) {
  console.log("Eres adulto");
} else {
  console.log("Eres adulto mayor");
}
console.log("Siguiente instrucción");

// Anidados...

if (edad >= 18) {
  // Es mayor de edad
  if (edad < 65) {
    console.log("Eres adulto");
  } else {
    console.log("Eres adulto mayor");
  }
} else {
  console.log("Eres menor de edad");
}
console.log("Siguiente instrucción");

// Actividad evaluar calificacion
function evaluarNota(nota, nombre = "Estudiante") {
  let resultado;
  if (nota >= 90) {
    resultado = "Excelente";
  } else if (nota >= 75) {
    resultado = "Bien";
  } else if (nota >= 60) {
    resultado = "Suficiente";
  } else {
    resultado = "No aprueba";
  }
  const mensaje = `${nombre}: ${resultado} (nota: ${nota})`;
  console.log(mensaje);
  return mensaje;
}

// Ejemplo
evaluarNota(95, "María");
evaluarNota(82, "Luis");
evaluarNota(67, "Ana");
evaluarNota(50, "Juan");
