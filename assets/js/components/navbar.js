document.getElementById("navbar").innerHTML = `

<div class="top-logos">

    <div class="container d-flex justify-content-between align-items-center">

        <img
            src="assets/img/logos/aqui.png"
            class="top-logo"
            alt="aqui">

        <img
            src="assets/img/logos/bogota.png"
            class="top-logo"
            alt="Alcaldía Local de Teusaquillo">

    </div>

</div>


<nav class="navbar navbar-expand-lg shadow-sm sticky-top">

    <div class="container">

<a class="navbar-brand d-flex align-items-center gap-3" href="index.html">

    <img 
        src="assets/img/logos/logo.png"
        alt="Logo Vitrina Virtual"
        class="logo-navbar">

    <div class="brand-text">

        <div class="brand-title">
            Mercado de Emprendedoras de Teusaquillo
        </div>

        <div class="brand-subtitle">
            Vitrina Virtual
        </div>

    </div>

</a>


        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu">

            <span class="navbar-toggler-icon"></span>

        </button>


        <div class="collapse navbar-collapse" id="menu">

            <ul class="navbar-nav ms-auto">


                <li class="nav-item">
                    <a class="nav-link" href="index.html">
                        Inicio
                    </a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="acerca.html">
                        Acerca del proyecto
                    </a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="categorias.html">
                        Categorías
                    </a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" href="emprendimientos.html">
                        Emprendimientos
                    </a>
                </li>


            </ul>

        </div>

    </div>

</nav>

`;

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});