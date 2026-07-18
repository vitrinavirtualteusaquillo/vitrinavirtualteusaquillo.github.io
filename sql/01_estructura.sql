-- ==========================================
-- TABLA: categorias
-- ==========================================

create table categorias (

    id bigint generated always as identity primary key,

    nombre text not null,
    slug text not null unique,
    descripcion text,
    icono text,

    orden integer default 0,

    activa boolean default true

);

-- ==========================================
-- TABLA: emprendimientos
-- ==========================================

create table emprendimientos (

    id bigint generated always as identity primary key,

    categoria_id bigint not null references categorias(id),

    nombre text not null,
    slug text not null unique,

    descripcion_corta text,
    descripcion text,

    logo text,
    portada text,

    whatsapp text,
    telefono text,
    correo text,

    instagram text,
    facebook text,
    pagina_web text,

    destacado boolean default false,
    visible boolean default true,

    created_at timestamptz default now(),
    updated_at timestamptz default now()

);

-- ==========================================
-- TABLA: imagenes
-- ==========================================

create table imagenes (

    id bigint generated always as identity primary key,

    emprendimiento_id bigint not null
        references emprendimientos(id)
        on delete cascade,

    url text not null,

    orden integer default 0

);

-- ==========================================
-- ÍNDICES
-- ==========================================

create index idx_emprendimientos_categoria
on emprendimientos(categoria_id);

create index idx_emprendimientos_destacado
on emprendimientos(destacado);

create index idx_emprendimientos_visible
on emprendimientos(visible);

create index idx_imagenes_emprendimiento
on imagenes(emprendimiento_id);