insert into emprendimientos (

    categoria_id,
    nombre,
    slug,
    descripcion_corta,
    descripcion,
    logo,
    portada,
    whatsapp,
    telefono,
    correo,
    instagram,
    facebook,
    pagina_web,
    destacado,
    visible

)

values (

    (
        select id
        from categorias
        where slug = 'mascotas'
    ),

    'SammyQR',

    'sammyqr',

    'Identificación inteligente para mascotas.',

    'Las pañoletas SammyQR permiten identificar perros y gatos mediante una pañoleta personalizada con código QR. Cuando alguien escanea el código puede acceder al perfil de la mascota y contactar rápidamente a su familia mediante WhatsApp, facilitando el reencuentro en caso de pérdida.',

    'assets/img/demo/sammyqr/logo.png',

    'assets/img/demo/sammyqr/portada.jpg',

    '573504799933',

    '3504799933',

    'sammyqr.oficial@gmail.com',

    'https://instagram.com/sammyqr',

    '',

    'https://sammyqr.com',

    true,

    true

);