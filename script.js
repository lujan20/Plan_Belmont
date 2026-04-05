// Posiciona la flecha debajo del título y la mueve hacia el botón
window.onload = function () {
    const titulo = document.getElementById("titulo");
    const flecha = document.getElementById("flecha");
    const boton = document.getElementById("btnDescarga");

    // Ajustar posición de la flecha cerca del botón
    flecha.style.position = "absolute";
    flecha.style.left = boton.offsetLeft + "px";
    flecha.style.top = (boton.offsetTop - 50) + "px";
};
