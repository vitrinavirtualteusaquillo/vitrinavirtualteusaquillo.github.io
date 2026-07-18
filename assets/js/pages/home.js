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

async function iniciarHome() {

    await renderCategoriasHome();

    await renderDestacados();

}

iniciarHome();