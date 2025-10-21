document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du label
            const input = card.previousElementSibling;
            input.checked = !input.checked;
        });
    });
});
