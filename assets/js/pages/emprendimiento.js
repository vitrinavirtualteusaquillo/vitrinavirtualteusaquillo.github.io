async function iniciarPagina() {

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    if (!slug) {

        window.location.href = "emprendimientos.html";

        return;

    }

    const negocio = await obtenerEmprendimiento(slug);

    if (!negocio) {

        window.location.href = "emprendimientos.html";

        return;

    }

    // ===========================
// SEO DINÁMICO
// ===========================

document.title =
`${negocio.nombre} | Vitrina Virtual de Mujeres Emprendedoras`;

document
    .getElementById("meta-description")
    .setAttribute(
        "content",
        negocio.descripcion_corta || negocio.descripcion || ""
    );

document
    .getElementById("meta-og-title")
    .setAttribute(
        "content",
        negocio.nombre
    );

document
    .getElementById("meta-og-description")
    .setAttribute(
        "content",
        negocio.descripcion_corta || negocio.descripcion || ""
    );

document
    .getElementById("meta-og-image")
    .setAttribute(
        "content",
        negocio.portada || negocio.logo
    );

document
    .getElementById("meta-og-url")
    .setAttribute(
        "content",
        `${window.location.origin}/emprendimiento.html?slug=${negocio.slug}`
    );

document
    .getElementById("canonical-url")
    .setAttribute(
        "href",
        `${window.location.origin}/emprendimiento.html?slug=${negocio.slug}`
    );

    document.getElementById("breadcrumb-name").textContent = negocio.nombre;

    document.getElementById("business-name").textContent = negocio.nombre;

    document.getElementById("business-category").textContent = negocio.categoria;

    document.getElementById("business-description").innerHTML =
    (negocio.descripcion || "")
        .replace(/\n/g, "<br>");

    document.getElementById("business-logo").src = negocio.logo;

    document.getElementById("business-cover").src = negocio.portada;

    const gallery = document.getElementById("gallery");

if (negocio.imagenes.length === 0) {

    gallery.innerHTML = `
        <div class="col-12 text-center text-muted">
            Este emprendimiento aún no tiene imágenes.
        </div>
    `;

} else {

    gallery.innerHTML = `

        <div id="carouselGaleria"
            class="carousel slide"
            data-bs-ride="carousel">

            <div class="carousel-inner">

                ${negocio.imagenes.map((imagen, index) => `

                    <div class="carousel-item ${index === 0 ? "active" : ""}">

                        <img
                            src="${imagen}"
                            class="d-block w-100 gallery-image"
                            alt="${negocio.nombre}">

                    </div>

                `).join("")}

            </div>

            ${negocio.imagenes.length > 1 ? `

                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselGaleria"
                    data-bs-slide="prev">

                    <span class="carousel-control-prev-icon"></span>

                </button>

                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselGaleria"
                    data-bs-slide="next">

                    <span class="carousel-control-next-icon"></span>

                </button>

                <div class="carousel-indicators">

                    ${negocio.imagenes.map((_, index) => `

                        <button
                            type="button"
                            data-bs-target="#carouselGaleria"
                            data-bs-slide-to="${index}"
                            class="${index === 0 ? "active" : ""}">

                        </button>

                    `).join("")}

                </div>

            ` : ""}

        </div>

    `;

}

    const contacto = document.getElementById("contact-info");

    let html = "";

    if (negocio.whatsapp) {

        html += `
            <a
                href="https://wa.me/${negocio.whatsapp}"
                target="_blank"
                class="btn btn-primary-custom w-100 mb-3">

                <i class="bi bi-whatsapp"></i>

                Contactar por WhatsApp

            </a>
        `;

    }

    if (negocio.telefono) {

        html += `
            <a
                href="tel:${negocio.telefono}"
                class="btn-contact">

                <i class="bi bi-telephone"></i>

                ${negocio.telefono}

            </a>
        `;

    }

    if (negocio.correo) {

        html += `
            <a
                href="mailto:${negocio.correo}"
                class="btn-contact">

                <i class="bi bi-envelope"></i>

                ${negocio.correo}

            </a>
        `;

    }

    if (negocio.instagram) {

        html += `
            <a
                href="${negocio.instagram}"
                target="_blank"
                class="btn-contact">

                <i class="bi bi-instagram"></i>

                Instagram

            </a>
        `;

    }

    if (negocio.facebook) {

        html += `
            <a
                href="${negocio.facebook}"
                target="_blank"
                class="btn-contact">

                <i class="bi bi-facebook"></i>

                Facebook

            </a>
        `;

    }

if (negocio.pagina_web) {

    const web = negocio.pagina_web.startsWith("http")
        ? negocio.pagina_web
        : `https://${negocio.pagina_web}`;

    html += `
        <a
            href="${web}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-contact">

            <i class="bi bi-globe"></i>

            Visitar sitio web

        </a>
    `;

}
    contacto.innerHTML = html;

}

iniciarPagina();