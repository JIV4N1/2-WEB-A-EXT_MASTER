document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formComentario");
  const texto = document.getElementById("textoComentario");
  const contenedor = document.getElementById("comentarios");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valor = texto.value.trim();
    if (valor === "") return;
    agregarComentario(valor);
    texto.value = "";
  });

  function agregarComentario(texto) {
    const div = document.createElement("div");
    div.className = "comentario";
    const fecha = new Date();
    const fechaTexto = fecha.toLocaleString();
    div.innerHTML = `<p>${texto}</p><p class="fecha">${fechaTexto}</p>`;

    // botón eliminar opcional
    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.addEventListener("click", function () {
      contenedor.removeChild(div);
    });
    div.appendChild(btn);

    contenedor.appendChild(div);
  }
});
