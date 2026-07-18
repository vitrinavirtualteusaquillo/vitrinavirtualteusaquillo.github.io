function emptyState(
    titulo = "No hay información",
    mensaje = "No se encontraron registros."
) {

    return `
        <div class="col-12">

            <div class="empty-state">

                <i class="bi bi-search"></i>

                <h3>${titulo}</h3>

                <p>${mensaje}</p>

            </div>

        </div>
    `;

}