# 🌸 Vitrina Virtual de Mujeres Emprendedoras de Teusaquillo

Plataforma web desarrollada para visibilizar los emprendimientos participantes del proyecto de fortalecimiento empresarial de la Alcaldía Local de Teusaquillo.

La aplicación permite consultar emprendimientos por categorías, conocer la información de cada negocio y administrar el contenido mediante un panel de administración.

---

# 📋 Descripción

La Vitrina Virtual fue desarrollada como una solución web de fácil administración y mantenimiento, utilizando tecnologías web estándar sin frameworks de JavaScript.

El sistema está compuesto por:

* 🌐 Sitio público para la consulta de emprendimientos.
* 🔐 Panel administrativo para gestionar la información.
* 🗄️ Base de datos en Supabase.
* ☁️ Despliegue en Netlify.
* 📁 Control de versiones mediante GitHub.

---

# 🚀 Tecnologías utilizadas

| Tecnología     | Descripción                   |
| -------------- | ----------------------------- |
| HTML5          | Estructura del sitio          |
| CSS3           | Estilos y diseño              |
| Bootstrap 5    | Componentes responsivos       |
| JavaScript ES6 | Lógica de la aplicación       |
| Supabase       | Base de datos y autenticación |
| GitHub         | Control de versiones          |
| Netlify        | Despliegue de la aplicación   |

---

# 📁 Estructura del proyecto

```text
vitrina-teusaquillo/
│
├── admin/
├── assets/
│   ├── css/
│   ├── img/
│   └── js/
├── services/
├── sql/
│
├── index.html
├── categorias.html
├── emprendimientos.html
├── emprendimiento.html
├── acerca.html
│
└── README.md
```

---

# ✨ Funcionalidades

## 🌐 Sitio público

* Página de inicio.
* Consulta de categorías.
* Listado de emprendimientos.
* Buscador de emprendimientos.
* Perfil detallado de cada emprendimiento.
* Información de contacto.
* Diseño adaptable a dispositivos móviles.

---

## 🔐 Panel administrativo

* Inicio de sesión.
* Administración de categorías.
* Administración de emprendimientos.
* Carga y actualización de imágenes.
* Edición de información.
* Eliminación de registros.

---
## 🗄️ Base de datos

Los scripts necesarios para crear el proyecto desde cero se encuentran en la carpeta **sql/**.

| Archivo | Descripción |
|----------|-------------|
| 01_estructura.sql | Creación de tablas e índices |
| 02_storage.sql | Creación de buckets de almacenamiento |
| 03_politicas.sql | Políticas RLS de las tablas |
| 04_storage_policies.sql | Políticas de acceso al Storage |
| 05_datos_iniciales.sql | Categorías iniciales del sistema |

Los scripts deben ejecutarse en el orden indicado.
```
---

# ⚙️ Instalación

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

---

## 2. Ingresar al proyecto

```bash
cd vitrina-teusaquillo
```

---

## 3. Ejecutar un servidor local

Con Python:

```bash
python3 -m http.server 5500
```

o

```bash
python -m http.server 5500
```

---

## 4. Abrir el navegador

```
http://localhost:5500
```

---

# 🔧 Configuración de Supabase

Antes de ejecutar el proyecto es necesario configurar las credenciales de Supabase.

En el archivo correspondiente deben definirse:

```javascript
const SUPABASE_URL = "TU_URL";
const SUPABASE_ANON_KEY = "TU_ANON_KEY";
```

---

# ☁️ Despliegue

El proyecto fue desplegado utilizando:

* GitHub para control de versiones.
* Netlify como plataforma de hosting.

---

# 👤 Administración

Los usuarios administradores son gestionados mediante **Supabase Authentication**.

El acceso al panel administrativo requiere autenticación.

---

# 🛠️ Mantenimiento

Para registrar un nuevo emprendimiento:

1. Ingresar al panel administrativo.
2. Crear el emprendimiento.
3. Completar la información general.
4. Cargar el logo.
5. Cargar la imagen de portada.
6. Agregar imágenes de la galería.
7. Guardar los cambios.

---

# 📌 Consideraciones

> **Importante**
>
> * El proyecto fue desarrollado utilizando HTML, CSS y JavaScript puro.
> * No utiliza frameworks de JavaScript.
> * Toda la información es consumida desde Supabase.
> * El sitio es completamente responsive.
> * Bootstrap se utiliza únicamente como apoyo para la interfaz.

---

# 📈 Mejoras futuras

* Recuperación de contraseña para administradores.
* Gestión de múltiples administradores.
* Optimización automática de imágenes.
* Estadísticas de visitas.
* SEO avanzado.
* Panel con indicadores y métricas.

---

# 📄 Licencia

Este proyecto fue desarrollado para el **Foro Cívico de Teusaquillo** como parte de la implementación de la **Vitrina Virtual de Mujeres Emprendedoras de Teusaquillo**.

---

# 👩‍💻 Desarrollo

**Andrea Rodríguez**
Senior Full Stack Software Engineer
