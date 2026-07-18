async function iniciarDashboard() {

    await protegerPagina();

    const categorias = await obtenerCategorias();

    const emprendimientos = await obtenerEmprendimientos();

    document.getElementById("totalCategorias").textContent =
        categorias.length;

    document.getElementById("totalEmprendimientos").textContent =
        emprendimientos.length;

    const destacados = emprendimientos.filter(e => e.destacado);

    document.getElementById("totalDestacados").textContent =
        destacados.length;

    const tabla = document.getElementById("tablaDestacados");

    tabla.innerHTML = destacados.map(e => `

        <tr>

            <td>${e.categoria}</td>

            <td>${e.nombre}</td>

        </tr>

    `).join("");

}

iniciarDashboard();