const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", async function (event) {

    event.preventDefault();

    const correo = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const ok = await iniciarSesion(correo, password);

    if (!ok) {

        alert("Correo o contraseña incorrectos.");

        return;

    }

    window.location.href = "dashboard.html";

});