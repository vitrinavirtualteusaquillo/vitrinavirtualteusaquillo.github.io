-- ==========================================
-- CATEGORIAS
-- ==========================================

-- Lectura pública
create policy "Categorias públicas"
on categorias
for select
using (activa = true);

-- Administración
create policy "Administrar categorias"
on categorias
for all
to authenticated
using (true)
with check (true);

-- ==========================================
-- EMPRENDIMIENTOS
-- ==========================================

-- Lectura pública
create policy "Emprendimientos públicos"
on emprendimientos
for select
using (visible = true);

-- Administración
create policy "Administrar emprendimientos"
on emprendimientos
for all
to authenticated
using (true)
with check (true);

-- ==========================================
-- IMAGENES
-- ==========================================

-- Lectura pública
create policy "Imágenes públicas"
on imagenes
for select
using (true);

-- Administración
create policy "Administrar imágenes"
on imagenes
for all
to authenticated
using (true)
with check (true);