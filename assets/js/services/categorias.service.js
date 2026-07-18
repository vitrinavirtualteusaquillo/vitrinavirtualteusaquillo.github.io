async function obtenerCategorias(){

    const { data, error } = await window.supabaseClient
        .from("categorias")
        .select("*")
        .eq("activa", true)
        .order("orden", { ascending:true });


    if(error){

        console.error("Error obteniendo categorías:", error);

        return [];

    }


    return data;

}

async function crearCategoria(datos) {

    const slug = datos.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-");

    const { error } = await window.supabaseClient
        .from("categorias")
        .insert({

            nombre: datos.nombre,

            slug,

            descripcion: datos.descripcion,

            icono: datos.icono,

            activa: true

        });

    return error;

}

async function actualizarCategoria(id, datos) {

    const slug = datos.nombre
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replaceAll(" ", "-");

    const { error } = await window.supabaseClient
        .from("categorias")
        .update({

            nombre: datos.nombre,

            slug,

            descripcion: datos.descripcion,

            icono: datos.icono

        })
        .eq("id", id);

    return error;

}

async function eliminarCategoria(id) {

    const { error } = await window.supabaseClient
        .from("categorias")
        .delete()
        .eq("id", id);

    return error;

}