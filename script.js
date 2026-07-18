"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const site = document.getElementById("site");

    if (!intro || !site) {
        console.error("No se encontraron los elementos de introducción.");
        return;
    }

    /*
     * Tiempo total durante el cual aparece el logo inicial.
     * Puedes cambiar 1800 por:
     *
     * 1500 = transición más rápida
     * 2200 = transición más lenta
     */
    const introDuration = 1800;

    window.setTimeout(() => {
        intro.classList.add("is-hidden");
        site.classList.add("is-visible");
    }, introDuration);

    /*
     * Retira la pantalla inicial del flujo después
     * de completar la animación.
     */
    window.setTimeout(() => {
        intro.remove();
    }, introDuration + 1000);
});