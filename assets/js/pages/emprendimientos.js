const inputBusqueda = document.getElementById("searchBusiness");
const selectCategoria = document.getElementById("categoryFilter");

let lista = [];

async function iniciarPagina() {

    lista = await obtenerEmprendimientos();

    await cargarCategorias();

    aplicarFiltroDesdeURL();

    filtrarEmprendimientos();

}

function renderBusinessList(datos) {

    const container = document.getElementById("business-list");

    if (!container) return;

    if (datos.length === 0) {

        container.innerHTML = emptyState(
            "No encontramos emprendimientos",
            "Intenta cambiar la búsqueda o seleccionar otra categoría."
        );

        return;

    }

    container.innerHTML = datos
        .map(businessCard)
        .join("");

}

async function cargarCategorias() {

    const categorias = await obtenerCategorias();

    selectCategoria.innerHTML =
        '<option value="">Todas las categorías</option>';

    categorias.forEach(categoria => {

        selectCategoria.innerHTML += `
            <option value="${categoria.slug}">
                ${categoria.nombre}
            </option>
        `;

    });

}

function aplicarFiltroDesdeURL() {

    const params = new URLSearchParams(window.location.search);

    const categoria = params.get("categoria");

    if (categoria) {

        selectCategoria.value = categoria;

    }

}

function filtrarEmprendimientos() {

    const texto = inputBusqueda.value.toLowerCase().trim();

    const categoria = selectCategoria.value;

    let resultado = [...lista];

    if (categoria !== "") {

        resultado = resultado.filter(
            e => e.categoria_slug === categoria
        );

    }

    resultado = resultado.filter(
        e => e.nombre.toLowerCase().includes(texto)
    );

    renderBusinessList(resultado);

}

inputBusqueda.addEventListener("input", filtrarEmprendimientos);

selectCategoria.addEventListener("change", filtrarEmprendimientos);

iniciarPagina();