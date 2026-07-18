async function iniciarPagina() {

    await protegerPagina();

    const emprendimientos = await obtenerEmprendimientos();

    const tabla = document.getElementById("tablaEmprendimientos");

    tabla.innerHTML = emprendimientos.map(e => `

        <tr>

            <td>

                <img
                    src="${e.logo || '../assets/img/placeholders/logo-placeholder.png'}"
                    style="width:60px;height:60px;object-fit:cover;border-radius:8px;">

            </td>

            <td>${e.nombre}</td>

            <td>${e.categoria}</td>

            <td>${e.visible ? "Sí" : "No"}</td>

            <td>${e.destacado ? "Sí" : "No"}</td>

            <td>

                <button
    class="btn btn-sm btn-outline-primary btnEditar"
    data-id="${e.id}">

    <i class="bi bi-pencil me-md-1"></i>

    <span class="d-none d-md-inline">
        Editar
    </span>

</button>

<button
    class="btn btn-sm btn-outline-danger btnEliminar"
    data-id="${e.id}">

    <i class="bi bi-trash me-md-1"></i>

    <span class="d-none d-md-inline">
        Eliminar
    </span>

</button>

            </td>

        </tr>

    `).join("");

    document.querySelectorAll(".btnEditar").forEach(boton => {

    boton.addEventListener("click", async () => {

        const id = Number(boton.dataset.id);

        const emprendimiento = emprendimientos.find(e => e.id === id);

        emprendimientoEditando = id;

        document.querySelector("#modalEmprendimiento .modal-title").textContent =
            "Editar emprendimiento";

        const categorias = await obtenerCategorias();

        const select = document.getElementById("categoria");

        select.innerHTML = categorias.map(c => `
            <option value="${c.id}">
                ${c.nombre}
            </option>
        `).join("");

        document.getElementById("nombre").value = emprendimiento.nombre;

        document.getElementById("categoria").value = emprendimiento.categoria_id;

        document.getElementById("descripcionCorta").value =
            emprendimiento.descripcion_corta || "";

        document.getElementById("descripcion").value =
            emprendimiento.descripcion || "";

        document.getElementById("whatsapp").value =
            emprendimiento.whatsapp || "";

        document.getElementById("telefono").value =
            emprendimiento.telefono || "";

        document.getElementById("correo").value =
            emprendimiento.correo || "";

        document.getElementById("instagram").value =
            emprendimiento.instagram || "";

        document.getElementById("facebook").value =
            emprendimiento.facebook || "";

        document.getElementById("paginaWeb").value =
            emprendimiento.pagina_web || "";

        document.getElementById("visible").checked =
            emprendimiento.visible;

        document.getElementById("destacado").checked =
            emprendimiento.destacado;

            document.getElementById("previewLogo").src =
    emprendimiento.logo || "";

document.getElementById("previewPortada").src =
    emprendimiento.portada || "";


        modalEmprendimiento.show();

            await renderGaleria(
    emprendimiento.id
);

        document
    .getElementById("inputLogo")
    .onchange = async (e) => {

    const archivoOriginal = e.target.files[0];

    if (!archivoOriginal) return;

    const archivo = await optimizarImagen(archivoOriginal);

    if (emprendimiento.logo) {

        await eliminarArchivo(emprendimiento.logo);

    }

    const resultado = await subirLogo(
        emprendimiento.id,
        archivo
    );

    if (resultado.error) {

        alert(resultado.error.message);

        return;

    }

    await actualizarLogo(
        emprendimiento.id,
        resultado.url
    );

    emprendimiento.logo = resultado.url;

    document.getElementById("previewLogo").src =
        resultado.url + "?t=" + Date.now();

};

document
    .getElementById("inputPortada")
    .onchange = async (e) => {

        const archivoOriginal = e.target.files[0];

        if (!archivoOriginal) return;

        const archivo = await optimizarImagen(archivoOriginal, {
            anchoMax: 1600,
            altoMax: 900,
            calidad: 0.9
        });

        if (emprendimiento.portada) {

            await eliminarArchivo(emprendimiento.portada);

        }

        const resultado = await subirPortada(
            emprendimiento.id,
            archivo
        );

        if (resultado.error) {

            alert(resultado.error.message);

            return;

        }

        await actualizarPortada(
            emprendimiento.id,
            resultado.url
        );

        emprendimiento.portada = resultado.url;

        document.getElementById("previewPortada").src =
            resultado.url + "?t=" + Date.now();

    };

    document
    .getElementById("inputGaleria")
    .onchange = async (e) => {

        const archivos = [...e.target.files];

        const imagenesActuales =
            await obtenerImagenes(emprendimiento.id);

        if (
            imagenesActuales.length + archivos.length > 3
        ) {

            alert("Solo se permiten 3 imágenes.");

            return;

        }

        for (const archivoOriginal of archivos) {

            const archivo =
                await optimizarImagen(archivoOriginal, {

                    anchoMax: 1200,
                    altoMax: 1200,
                    calidad: 0.85

                });

            const resultado =
                await subirImagenGaleria(
                    emprendimiento.id,
                    archivo
                );

            if (resultado.error) {

                alert(resultado.error.message);

                return;

            }

            await agregarImagen(
                emprendimiento.id,
                resultado.url
            );

        }

        await renderGaleria(
            emprendimiento.id
        );

        e.target.value = "";

    };

    });

});

    document.querySelectorAll(".btnEliminar").forEach(boton => {

    boton.addEventListener("click", async () => {

        const confirmar = confirm(
            "¿Eliminar este emprendimiento?"
        );

        if (!confirmar) return;

        const error = await eliminarEmprendimiento(
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

async function renderGaleria(emprendimientoId) {

    const imagenes = await obtenerImagenes(
        emprendimientoId
    );

    const contenedor =
        document.getElementById("galeriaAdmin");

    if (imagenes.length === 0) {

        contenedor.innerHTML = `
            <div class="col-12 text-center text-muted">
                No hay imágenes.
            </div>
        `;

        return;

    }

    contenedor.innerHTML = imagenes.map(imagen => `

    <div class="col-md-4">

        <img
            src="${imagen.url}"
            class="img-fluid rounded border mb-2"
            style="height:180px;width:100%;object-fit:cover;">

        <button
            class="btn btn-sm btn-outline-danger w-100 btnEliminarImagen"
            data-id="${imagen.id}"
            data-url="${imagen.url}">

            🗑 Eliminar

        </button>

    </div>

`).join("");

    document
    .querySelectorAll(".btnEliminarImagen")
    .forEach(boton => {

        boton.onclick = async () => {

            if (!confirm("¿Eliminar imagen?")) return;

            await eliminarArchivo(
                boton.dataset.url
            );

            await eliminarImagen(
                Number(boton.dataset.id)
            );

            await renderGaleria(
                emprendimientoId
            );

        };

    });

}

iniciarPagina();

const modalEmprendimiento = new bootstrap.Modal(
    document.getElementById("modalEmprendimiento")
);

let emprendimientoEditando = null;

document
    .getElementById("btnNuevoEmprendimiento")
    .addEventListener("click", async () => {

        const categorias = await obtenerCategorias();

        const select = document.getElementById("categoria");

        select.innerHTML = categorias.map(c => `
            <option value="${c.id}">
                ${c.nombre}
            </option>
        `).join("");

        emprendimientoEditando = null;

document.querySelector("#modalEmprendimiento .modal-title").textContent =
    "Nuevo emprendimiento";

document.getElementById("nombre").value = "";

document.getElementById("descripcionCorta").value = "";

document.getElementById("descripcion").value = "";

document.getElementById("whatsapp").value = "";

document.getElementById("telefono").value = "";

document.getElementById("correo").value = "";

document.getElementById("instagram").value = "";

document.getElementById("facebook").value = "";

document.getElementById("paginaWeb").value = "";

document.getElementById("visible").checked = true;

document.getElementById("destacado").checked = false;

        modalEmprendimiento.show();

    });

document
    .getElementById("btnGuardarEmprendimiento")
    .addEventListener("click", async () => {

        let error;

const datos = {

    nombre: document.getElementById("nombre").value,

    categoria_id: Number(
        document.getElementById("categoria").value
    ),

    descripcion_corta:
        document.getElementById("descripcionCorta").value,

    descripcion:
        document.getElementById("descripcion").value,

    whatsapp:
        document.getElementById("whatsapp").value,

    telefono:
        document.getElementById("telefono").value,

    correo:
        document.getElementById("correo").value,

    instagram:
        document.getElementById("instagram").value,

    facebook:
        document.getElementById("facebook").value,

    pagina_web:
        document.getElementById("paginaWeb").value,

    visible:
        document.getElementById("visible").checked,

    destacado:
        document.getElementById("destacado").checked

};

if (emprendimientoEditando) {

    error = await actualizarEmprendimiento(
        emprendimientoEditando,
        datos
    );

} else {

    error = await crearEmprendimiento(datos);

}

if (error) {

    alert(error.message);

    return;

}

location.reload();
    });    