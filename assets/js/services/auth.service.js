async function iniciarSesion(correo, password) {

    const { error } = await window.supabaseClient.auth.signInWithPassword({

        email: correo,
        password: password

    });

    if (error) {

        console.error(error);

        return false;

    }

    return true;

}

async function cerrarSesion() {

    await window.supabaseClient.auth.signOut();

}

async function obtenerSesion() {

    const { data } = await window.supabaseClient.auth.getSession();

    return data.session;

}

async function protegerPagina() {

    const sesion = await obtenerSesion();

    if (sesion) {
        return;
    }

    window.location.href = "login.html";

}