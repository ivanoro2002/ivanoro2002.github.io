# Modo admin del portafolio

## Objetivo

Tener una zona privada para que Ivan pueda editar datos del portafolio desde la web:

- Cambiar textos personales.
- Cambiar nivel de ingles, por ejemplo de A1 a B1.
- Agregar tecnologias.
- Agregar cursos.
- Agregar proyectos.
- Cambiar descripciones.
- Cambiar el tema visual de la web publica.
- Actualizar CV.

Los visitantes publicos solo pueden ver la web y tocar enlaces. No pueden editar nada.

## Regla de seguridad

No sirve poner una clave escrita dentro de HTML, CSS o JavaScript. Si la web esta publicada, cualquier persona puede inspeccionar esos archivos y encontrar la clave.

Un modo admin real necesita:

- Login seguro.
- Permisos de usuario.
- Un lugar donde guardar cambios.

## Opcion recomendada para este portafolio

### Decap CMS + GitHub + Netlify

Es la mejor opcion para una web estatica publicada gratis.

Como funcionaria:

1. La web queda publicada para todos.
2. Existe una ruta privada tipo `/admin`.
3. Ivan inicia sesion con GitHub.
4. El panel permite editar proyectos, datos, habilidades, cursos y CV.
5. Cada cambio se guarda como commit en el repositorio.
6. Netlify vuelve a publicar la web.

Ventajas:

- Mantiene la web rapida y gratis.
- No requiere crear una app completa con backend propio.
- Solo edita quien tenga permisos en el repositorio.
- Es ideal para portafolios, blogs y sitios personales.

Condiciones:

- Hay que tener el repositorio creado en GitHub.
- Hay que configurar autenticacion para Decap CMS.
- Solo usuarios con permiso de escritura pueden editar.

## Alternativas futuras

### Firebase

Permite login, base de datos y archivos. Sirve si el portafolio se vuelve una app mas dinamica.

Ventaja: panel admin muy personalizable.

Desventaja: mas configuracion y mas cuidado con reglas de seguridad.

### Supabase

Permite login, base de datos, storage y reglas de acceso.

Ventaja: muy potente si luego se quiere guardar proyectos, cursos y archivos en una base de datos.

Desventaja: mas complejo que Decap CMS para una primera version.

## Fase recomendada

### Fase 1 - Portafolio estatico

Publicar la web actual en Netlify.

Edicion:

- Desde archivos del proyecto.
- Con ayuda de Codex.
- Subiendo cambios al repositorio.

### Fase 2 - Admin con Decap CMS

Usar `/admin` con login privado mediante Netlify Identity.

Campos editables:

- Nombre y perfil.
- Sobre mi.
- Perfil de busqueda.
- Contacto.
- CV.
- Apariencia visual.
- Proyectos.
- Habilidades.
- Herramientas.
- Cursos.
- Idiomas.

### Fase 3 - Admin avanzado

Si hace falta algo mas potente:

- Firebase o Supabase.
- Base de datos.
- Subida de imagenes.
- Login privado.
- Panel personalizado.

## Decision actual

La web ya esta publicada en Netlify y el admin ya esta integrado. El mantenimiento recomendado es seguir editando contenido desde el admin o con cambios locales pequenos, y luego publicar con GitHub/Netlify.

## Base integrada

Ya existe una base de admin en:

- `/admin/index.html`
- `/admin/config.yml`
- `content/portfolio.json`

La web publica carga los datos desde `content/portfolio.json`. El panel admin editara ese archivo.

## Cambiar color del sitio

En el admin, entrar a `Editar contenido` y abrir la seccion `Apariencia`.

La opcion `Tema de color` permite elegir una combinacion visual para la web publica:

- Verde menta + grafito.
- Azul tech + verde.
- Violeta creativo + verde.
- Ambar calido + azul.
- Coral suave + celeste.
- Rojo rubi + celeste.
- Indigo elegante + cian.

El cambio es liviano: solo se guarda el nombre del tema en `content/portfolio.json` y la web publica aplica esos colores al cargar.

La web publica no muestra ningun boton visible al admin. Ivan debe guardar el enlace directo:

- Local: `http://127.0.0.1:8765/admin/`
- Publicado: `https://ivan-portafolioit.netlify.app/admin/`

Antes de publicar hay que confirmar:

- Que Netlify termine el deploy.
- Que el login de Netlify Identity siga funcionando.
- Que el cambio guardado aparezca en `content/portfolio.json`.
