function categoryCard(categoria) {

    return `
        <div class="col-md-6 col-lg-4">

            <a href="emprendimientos.html?categoria=${categoria.slug}"
               class="category-link">

                <div class="category-card h-100">

                    <div class="category-icon">
                        <i class="${categoria.icono}"></i>
                    </div>

                    <h4>${categoria.nombre}</h4>

                    <p>${categoria.descripcion}</p>

                </div>

            </a>

        </div>
    `;

}