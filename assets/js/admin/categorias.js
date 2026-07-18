async function iniciarPagina() {

    await protegerPagina();

    const categorias = await obtenerCategorias();

    const tabla = document.getElementById("tablaCategorias");

    tabla.innerHTML = categorias.map(c => `

        <tr>

            <td>${c.nombre}</td>

            <td>${c.slug}</td>

            <td>

                ${c.activa ? "Activa" : "Inactiva"}

            </td>

            <td>

                <button
                class="btn btn-sm btn-outline-primary btnEditar"
                data-id="${c.id}">

                Editar

                </button>

                <button
                    class="btn btn-sm btn-outline-danger btnEliminar"
                    data-id="${c.id}">

                    Eliminar

                </button>

            </td>

        </tr>

    `).join("");

    document.querySelectorAll(".btnEditar").forEach(boton => {

    boton.addEventListener("click", async () => {

        const id = Number(boton.dataset.id);

        const categoria = categorias.find(c => c.id === id);

        categoriaEditando = categoria.id;

        document.querySelector(".modal-title").textContent =
            "Editar categoría";

        document.getElementById("categoriaNombre").value =
            categoria.nombre;

        document.getElementById("categoriaDescripcion").value =
            categoria.descripcion || "";

        document.getElementById("categoriaIcono").value =
            categoria.icono || "";

        modalCategoria.show();

    });

});

    document.querySelectorAll(".btnEliminar").forEach(boton => {

    boton.addEventListener("click", async () => {

        const confirmar = confirm(
            "¿Deseas eliminar esta categoría?"
        );

        if (!confirmar) return;

        const error = await eliminarCategoria(
            Number(boton.dataset.id)
        );

        if (error) {

            alert(error.message);

            return;

        }

        location.reload();

    });

});

}

iniciarPagina();

const modalCategoria = new bootstrap.Modal(
    document.getElementById("modalCategoria")
);

document
    .getElementById("btnNuevaCategoria")
    .addEventListener("click", () => {

        categoriaEditando = null;

        document.querySelector(".modal-title").textContent =
            "Nueva categoría";

        document.getElementById("categoriaNombre").value = "";

        document.getElementById("categoriaDescripcion").value = "";

        document.getElementById("categoriaIcono").value = "";

        modalCategoria.show();

    });

document
    .getElementById("btnGuardarCategoria")
    .addEventListener("click", async () => {

        let error;

const datos = {

    nombre: document.getElementById("categoriaNombre").value,

    descripcion: document.getElementById("categoriaDescripcion").value,

    icono: document.getElementById("categoriaIcono").value

};

if (categoriaEditando) {

    error = await actualizarCategoria(
        categoriaEditando,
        datos
    );

} else {

    error = await crearCategoria(datos);

}

        if (error) {

            alert(error.message);

            return;

        }

        location.reload();

    });

    let categoriaEditando = null;

