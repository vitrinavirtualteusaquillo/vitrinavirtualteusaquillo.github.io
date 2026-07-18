async function subirLogo(emprendimientoId, archivo) {

    const ruta =
        `${emprendimientoId}/logo-${Date.now()}.webp`;

    const { error } = await window.supabaseClient
        .storage
        .from("emprendimientos")
        .upload(ruta, archivo);

    if (error) {

        return { error };

    }

    const { data } = window.supabaseClient
        .storage
        .from("emprendimientos")
        .getPublicUrl(ruta);

    return {

        error: null,

        url: data.publicUrl

    };

}

async function subirPortada(emprendimientoId, archivo) {

    const ruta =
    `${emprendimientoId}/portada-${Date.now()}.webp`;

    const { error } = await window.supabaseClient
        .storage
        .from("emprendimientos")
        .upload(ruta, archivo, {

            upsert: true

        });

    if (error) return { error };

    const { data } = window.supabaseClient
        .storage
        .from("emprendimientos")
        .getPublicUrl(ruta);

    return {

        error: null,

        url: data.publicUrl

    };

}

async function eliminarArchivo(url) {

    if (!url) return;

    const ruta = url.split("/object/public/emprendimientos/")[1];

    const { error } = await window.supabaseClient
        .storage
        .from("emprendimientos")
        .remove([ruta]);

    return error;

}

async function subirImagenGaleria(
    emprendimientoId,
    archivo
) {

    const ruta =
        `${emprendimientoId}/galeria/${Date.now()}.webp`;

    const { error } = await window.supabaseClient
        .storage
        .from("emprendimientos")
        .upload(ruta, archivo);

    if (error) {

        return { error };

    }

    const { data } = window.supabaseClient
        .storage
        .from("emprendimientos")
        .getPublicUrl(ruta);

    return {

        error: null,
        url: data.publicUrl

    };

}

