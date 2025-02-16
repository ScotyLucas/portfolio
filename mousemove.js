document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");

    document.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = intro.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = (e.clientX - centerX) * 0.1; // Enyhén mozduljon el
        const deltaY = (e.clientY - centerY) * 0.1;

        intro.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        intro.style.boxShadow = `${-deltaX}px ${-deltaY}px 15px rgba(0, 0, 0, 0.3)`;
    });

    document.addEventListener("mouseleave", () => {
        intro.style.transform = "translate(0, 0)";
        intro.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
    });
});
