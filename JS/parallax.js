document.addEventListener("DOMContentLoaded", () => {
    const backLayer = document.querySelector(".parallaxbackground");
    const frontLayer = document.querySelector(".parallaxfront");

    // Effet Parallax pour Ordinateur (souris)
    document.addEventListener("mousemove", (event) => {
        const xOffset = (event.clientX / window.innerWidth - 0.5) * 20; // Ajustement horizontal
        const yOffset = (event.clientY / window.innerHeight - 0.5) * 20; // Ajustement vertical

        backLayer.style.transform = `translate(calc(-50% + ${xOffset * 0.5}px), calc(-50% + ${yOffset * 0.5}px))`;
        frontLayer.style.transform = `translate(calc(-50% + ${-xOffset * 1.5}px), calc(-50% + ${-yOffset * 1.5}px))`;
    });
});
