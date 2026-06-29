# Portafolio personal de Ivan

Esta carpeta contiene una version estatica y liviana del portafolio. Esta pensada para publicarse gratis en GitHub Pages, Netlify o Vercel.

## Archivos principales

- `index.html`: estructura de la pagina.
- `styles.css`: diseno visual, responsive y animaciones.
- `content/portfolio.json`: datos editables del portafolio.
- `script.js`: renderizado de secciones, menu movil y animaciones.
- `assets/portfolio-hero.png`: imagen principal.
- `MODO-ADMIN.md`: plan para agregar un panel privado de edicion.

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

## Publicacion gratuita recomendada

Primera opcion: GitHub Pages.

Nombre ideal del repositorio:

```text
ivanoro2002.github.io
```

Cuando el repositorio este publicado con Pages, la web deberia quedar en:

```text
https://ivanoro2002.github.io
```

## Acceso publico y edicion

La web publicada es de solo lectura para visitantes. Cualquier persona con el link puede verla y tocar enlaces de contacto, pero no puede editar el contenido ni subir proyectos.

La edicion queda limitada a quien tenga acceso de escritura al repositorio de GitHub o a los archivos locales. Para una primera version, esto es suficiente y seguro.

Si mas adelante se quiere un panel admin dentro de la web, hay que agregar autenticacion y un servicio externo gratuito, por ejemplo Decap CMS, Firebase o Supabase.

Una version futura del panel podria incluir:

- Login privado.
- Dashboard para agregar proyectos.
- Editor de datos personales.
- Carga de CV en PDF.
- Panel para editar tecnologias, cursos y enlaces.
- Guardado en un servicio gratuito con autenticacion.

## Pendientes para cerrar la primera version

- Confirmar si el email visible es el definitivo.
- CV en PDF agregado en `assets/cv-ivan-valicenti.pdf`.
- Confirmar si el telefono o WhatsApp debe quedar publico en la version final.
- Reemplazar proyectos provisorios por proyectos reales con repositorio y demo.
- Completar disponibilidad horaria.
- Agregar cursos/certificados reales cuando existan.
- La experiencia del kiosco esta en el CV, pero no se muestra como experiencia dentro de la web por decision del titular.
