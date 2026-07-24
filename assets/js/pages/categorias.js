async function renderCategoriasPage() {

    const container =
        document.getElementById("categories-page");

    if (!container) return;

    const categorias =
        await obtenerCategorias();

    container.innerHTML =
        categorias
            .filter(c => c.activa)
            .map(categoryCard)
            .join("");

iniciarAnimaciones();

}

renderCategoriasPage();

function iniciarAnimaciones() {

    if (window.innerWidth > 768) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

    entry.target.classList.add("show");

} else {

    entry.target.classList.remove("show");

}

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".category-card").forEach((card, index) => {

        card.classList.add("animate");

        card.style.transitionDelay = `${index * 80}ms`;

        observer.observe(card);

    });

}