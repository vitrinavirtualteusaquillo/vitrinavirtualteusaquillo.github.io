async function renderCategoriasHome() {

    const container = document.getElementById("categories-container");

    if (!container) return;

    const categorias = await obtenerCategorias();

    container.innerHTML = categorias
        .map(categoryCard)
        .join("");

}

async function renderDestacados() {

    const container = document.getElementById("featured-container");

    if (!container) return;

    const emprendimientos = await obtenerEmprendimientos();

    const destacados = emprendimientos.filter(e => e.destacado);

    container.innerHTML = destacados
        .map(businessCard)
        .join("");

}

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

    document.querySelectorAll(".category-card, .business-card")
        .forEach((card, index) => {

            card.classList.add("animate");

            // Retraso para que aparezcan una tras otra
            card.style.transitionDelay = `${index * 80}ms`;

            observer.observe(card);

        });

}

async function iniciarHome() {

    await renderCategoriasHome();

    await renderDestacados();

    iniciarAnimaciones();

}

iniciarHome();