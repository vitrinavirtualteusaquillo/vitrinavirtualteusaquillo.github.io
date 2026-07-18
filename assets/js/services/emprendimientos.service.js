async function obtenerEmprendimientos() {

    const { data, error } = await window.supabaseClient
        .from("emprendimientos")
        .select(`
    *,
    categorias!inner(
        nombre,
        slug
    ),
    imagenes (
        id,
        url,
        orden
    )
`)
        .eq("visible", true)
        .order("nombre");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
        console.error(error);
        return [];

    }



    const resultado = data.map(e => ({
        ...e,
        categoria: e.categorias.nombre,
        categoria_slug: e.categorias.slug
    }));

    console.log("RESULTADO:", resultado);

    return resultado;

}

async function obtenerEmprendimiento(slug) {

    const { data, error } = await window.supabaseClient
        .from("emprendimientos")
        .select(`
    *,
    categorias!inner(
        nombre,
        slug
    ),
    imagenes(
        id,
        url,
        orden
    )
`)
        .eq("slug", slug)
        .single();

    if (error) {

        console.error("Error obteniendo emprendimiento:", error);

        return null;

    }
    console.log(data);

    return {

    ...data,

    categoria: data.categorias.nombre,

    categoria_slug: data.categorias.slug,

    imagenes: (data.imagenes || [])
        .sort((a, b) => a.orden - b.orden)
        .map(img => img.url)

};

}

async function crearEmprendimiento(datos) {

    const slug = datos.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-");

    const { error } = await window.supabaseClient
        .from("emprendimientos")
        .insert({

            categoria_id: datos.categoria_id,

            nombre: datos.nombre,

            slug,

            descripcion_corta: datos.descripcion_corta,

            descripcion: datos.descripcion,

            whatsapp: datos.whatsapp,

            telefono: datos.telefono,

            correo: datos.correo,

            instagram: datos.instagram,

            facebook: datos.facebook,

            pagina_web: datos.pagina_web,

            visible: datos.visible,

            destacado: datos.destacado,

            logo: "",

            portada: ""

        });

    return error;

}

async function actualizarEmprendimiento(id, datos) {

    const slug = datos.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-");

    const { error } = await window.supabaseClient
        .from("emprendimientos")
        .update({

            categoria_id: datos.categoria_id,

            nombre: datos.nombre,

            slug,

            descripcion_corta: datos.descripcion_corta,

            descripcion: datos.descripcion,

            whatsapp: datos.whatsapp,

            telefono: datos.telefono,

            correo: datos.correo,

            instagram: datos.instagram,

            facebook: datos.facebook,

            pagina_web: datos.pagina_web,

            visible: datos.visible,

            destacado: datos.destacado

        })
        .eq("id", id);

    return error;

}

async function eliminarEmprendimiento(id) {

    const { error } = await window.supabaseClient
        .from("emprendimientos")
        .delete()
        .eq("id", id);

    return error;

}

async function actualizarLogo(id, url) {

    const { error } = await window.supabaseClient
        .from("emprendimientos")
        .update({

            logo: url

        })
        .eq("id", id);

    return error;

}

async function actualizarPortada(id, url) {

    const { error } = await window.supabaseClient
        .from("emprendimientos")
        .update({
            portada: url
        })
        .eq("id", id);

    return error;

}

async function agregarImagen(
    emprendimientoId,
    url
) {

    const { error } = await window.supabaseClient
        .from("imagenes")
        .insert({

            emprendimiento_id: emprendimientoId,
            url

        });

    return error;

}

async function obtenerImagenes(emprendimientoId) {

    const { data, error } = await window.supabaseClient
        .from("imagenes")
        .select("*")
        .eq("emprendimiento_id", emprendimientoId)
        .order("orden");

    if (error) return [];

    return data;

}

async function eliminarImagen(id) {

    const { error } = await window.supabaseClient
        .from("imagenes")
        .delete()
        .eq("id", id);

    return error;

}