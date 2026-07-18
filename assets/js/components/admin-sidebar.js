function adminSidebar() {

    return `

    <aside class="admin-sidebar">

        <h4 class="mb-4">

            Vitrina Virtual

        </h4>

        <a href="dashboard.html">

            <i class="bi bi-speedometer2"></i>

            Dashboard

        </a>

        <a href="categorias.html">

            <i class="bi bi-grid"></i>

            Categorías

        </a>

        <a href="emprendimientos.html">

            <i class="bi bi-shop"></i>

            Emprendimientos

        </a>

        <hr>

        <a href="../index.html">

            <i class="bi bi-globe"></i>

            Ver sitio

        </a>

        <a href="#"
           id="btnCerrarSesion">

            <i class="bi bi-box-arrow-right"></i>

            Cerrar sesión

        </a>

    </aside>

    `;

}

document.addEventListener("DOMContentLoaded", () => {

    const contenedor =
        document.getElementById("adminSidebar");

    if (!contenedor) return;

    contenedor.innerHTML = adminSidebar();

    document
        .getElementById("btnCerrarSesion")
        .addEventListener("click", async e => {

            e.preventDefault();

            await cerrarSesion();

            location.href = "login.html";

        });

});