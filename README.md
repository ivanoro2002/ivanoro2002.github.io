# Portafolio personal de Ivan

Esta carpeta contiene una version estatica y liviana del portafolio. Esta publicada gratis en Netlify y conectada a GitHub para usar el modo admin con Decap CMS.

## Archivos principales

- `index.html`: estructura de la pagina.
- `styles.css`: diseno visual, responsive y animaciones.
- `content/portfolio.json`: datos editables del portafolio.
- `script.js`: renderizado de secciones, menu movil y animaciones.
- `assets/portfolio-hero.png`: imagen principal.
- `admin/index.html`: panel privado de entrada.
- `admin/cms.html`: editor de contenido con Decap CMS.
- `admin/config.yml`: campos editables desde el admin.
- `MODO-ADMIN.md`: explicacion del modo admin.

## Como editar datos

La mayoria del contenido esta en `content/portfolio.json`.

Para cambiar email, GitHub, LinkedIn, resumen, perfil de busqueda, habilidades o proyectos, edita ese archivo.

Para agregar el CV:

1. Guarda el PDF dentro de `assets/`, por ejemplo `assets/cv-ivan-valicenti.pdf`.
2. En `content/portfolio.json`, cambia:

```js
cvUrl: "",
```

por:

```js
cvUrl: "assets/cv-ivan-valicenti.pdf",
```

## Como agregar un proyecto

En `content/portfolio.json`, dentro de `projects`, copia un bloque de proyecto y cambia:

- `name`
- `status`
- `type`
- `description`
- `tags`
- `links`

## Publicacion gratuita actual

La publicacion actual esta en Netlify:

```text
https://ivan-portafolioit.netlify.app/
```

El admin esta en:

```text
https://ivan-portafolioit.netlify.app/admin/
```

## Acceso publico y edicion

La web publicada es de solo lectura para visitantes. Cualquier persona con el link puede verla y tocar enlaces de contacto, pero no puede editar el contenido ni subir proyectos.

La edicion se hace desde `/admin/` con Netlify Identity y Git Gateway. Solo una cuenta autorizada puede guardar cambios reales en el repositorio.

## Pendientes para cerrar la primera version

- Confirmar si el email visible es el definitivo.
- CV en PDF agregado en `assets/cv-ivan-valicenti.pdf`.
- Confirmar si el telefono o WhatsApp debe quedar publico en la version final.
- Reemplazar proyectos provisorios por proyectos reales con repositorio y demo.
- Completar disponibilidad horaria.
- Agregar cursos/certificados reales cuando existan.
- La experiencia del kiosco esta en el CV, pero no se muestra como experiencia dentro de la web por decision del titular.
