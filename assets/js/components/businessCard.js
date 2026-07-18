function businessCard(emprendimiento) {

    return `
        <div class="col-md-6 col-lg-4">

            <div class="business-card">

                <div class="business-cover">

                    <img
                        src="${emprendimiento.portada}"
                        alt="${emprendimiento.nombre}"
                        class="business-cover-img">

                </div>

                <div class="business-logo-wrapper">

                    <img
                        src="${emprendimiento.logo}"
                        alt="${emprendimiento.nombre}"
                        class="business-logo">

                </div>

                <div class="business-body">

                    <span class="business-category">
                        ${emprendimiento.categoria}
                    </span>

                    <h4>
                        ${emprendimiento.nombre}
                    </h4>

                    <p>
                        ${emprendimiento.descripcion_corta}
                    </p>

                    <a
    href="emprendimiento.html?slug=${emprendimiento.slug}"
    class="btn btn-outline-custom">

    Ver emprendimiento

</a>

                </div>

            </div>

        </div>
    `;

}