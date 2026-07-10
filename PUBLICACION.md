# Publicacion gratuita del portafolio

## Opcion actual recomendada: Netlify + GitHub

Esta opcion es gratis y permite mantener la web estatica, rapida y con modo admin mediante Netlify Identity.

Para una guia completa, ver tambien:

```text
MANUAL-PUBLICACION-GRATIS.md
```

## Pasos generales

1. Editar los archivos o usar el admin.
2. Guardar los cambios.
3. Hacer commit y `Push origin` si el cambio se hizo localmente.
4. Netlify despliega automaticamente el sitio desde GitHub.
5. Esperar unos minutos y revisar la URL publicada.

La URL publicada en Netlify es:

```text
https://ivan-portafolioit.netlify.app/
```

El admin publicado esta en:

```text
https://ivan-portafolioit.netlify.app/admin/
```

GitHub Pages queda como alternativa posible, pero para este proyecto conviene Netlify porque ya esta preparado el admin.

## Seguridad

La gente que entra a la web solo puede verla y tocar enlaces. No puede editar nada.

Solo puede modificar la web quien tenga permisos de escritura en el repositorio o acceso a los archivos originales.

## Contacto desde la web

- El email abre Gmail con el destinatario cargado.
- GitHub y LinkedIn abren tus perfiles.
- WhatsApp esta preparado con el numero del CV. Antes de publicar, conviene confirmar que queres dejarlo publico.

## Modo admin

La web ya tiene una base de panel admin en:

```text
/admin/
```

El link no aparece dentro de la web publica. Ivan debe guardarlo aparte.

La seguridad real no depende de esconder el link, sino de que solo una cuenta con permisos del repositorio pueda iniciar sesion y guardar cambios.

Ver tambien `MODO-ADMIN.md` para la estrategia recomendada.
