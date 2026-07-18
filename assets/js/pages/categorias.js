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

}

renderCategoriasPage();