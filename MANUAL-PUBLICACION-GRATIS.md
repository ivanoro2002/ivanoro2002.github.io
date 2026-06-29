# Manual para publicar el portafolio gratis

Este manual tiene dos caminos:

- Camino A: publicar gratis con GitHub Pages.
- Camino B: publicar gratis con GitHub + Netlify para usar mejor el modo admin.

## Recomendacion

Si solo queres publicar la web: usa GitHub Pages.

Si queres publicar la web y ademas usar el panel `/admin/` para editar desde la web: usa GitHub como repositorio y Netlify gratis como publicador. Decap CMS necesita autenticacion real para guardar cambios; no alcanza con subir archivos a cualquier hosting estatico.

## Antes de empezar

Necesitas:

- Una cuenta de GitHub.
- El usuario de GitHub: `ivanoro2002`.
- La carpeta del sitio: `outputs/portfolio`.

Archivos importantes:

- `index.html`: pagina principal.
- `content/portfolio.json`: datos editables del portafolio.
- `admin/index.html`: entrada al panel admin.
- `admin/config.yml`: configuracion del panel admin.
- `assets/cv-ivan-valicenti.pdf`: CV descargable.

## Camino A - Publicar gratis con GitHub Pages

Este camino publica la web gratis. El admin puede quedar preparado, pero la autenticacion completa del admin necesita configuracion adicional.

### 1. Crear repositorio

1. Entrar a GitHub.
2. Tocar el boton `+`.
3. Elegir `New repository`.
4. Nombre del repositorio:

```text
ivanoro2002.github.io
```

5. Elegir `Public`.
6. Crear el repositorio.

La documentacion oficial de GitHub Pages indica que un sitio de usuario debe usar el nombre `<usuario>.github.io`.

### 2. Subir archivos

Opcion recomendada: GitHub Desktop.

1. Abrir GitHub Desktop.
2. Iniciar sesion con tu GitHub.
3. Elegir `File` > `Add local repository`.
4. Seleccionar la carpeta:

```text
C:\Users\ivann\Documents\Codex\2026-06-29\bien-vamos-a-hacer-va\outputs\portfolio
```

5. Si GitHub Desktop pregunta si queres crear un repositorio desde esa carpeta, aceptar.
6. Publicarlo en GitHub con el nombre:

```text
ivanoro2002.github.io
```

7. Hacer commit con un mensaje como:

```text
Primera version del portafolio
```

8. Hacer `Push origin`.

### 3. Activar GitHub Pages

1. Entrar al repositorio en GitHub.
2. Ir a `Settings`.
3. Ir a `Pages`.
4. En `Build and deployment`, elegir:

```text
Deploy from a branch
```

5. En `Branch`, elegir:

```text
main
```

6. En carpeta, elegir:

```text
/ (root)
```

7. Guardar.

### 4. Ver la web publicada

Esperar unos minutos.

La URL deberia ser:

```text
https://ivanoro2002.github.io
```

GitHub puede tardar hasta unos minutos en publicar cambios.

### 5. Admin en GitHub Pages

El admin quedaria en:

```text
https://ivanoro2002.github.io/admin/
```

Pero para poder guardar cambios desde Decap CMS hace falta configurar autenticacion con GitHub. Este paso lo hacemos despues de publicar, porque depende de que el repositorio y la URL ya existan.

## Camino B - Publicar gratis con Netlify y GitHub para usar admin

Este camino tambien es gratis y es el mas recomendable si queres editar desde `/admin/`.

### 1. Crear repositorio en GitHub

Crear un repositorio para el portafolio, por ejemplo:

```text
ivanoro2002.github.io
```

Subir los archivos de `outputs/portfolio`.

### 2. Crear cuenta en Netlify

1. Entrar a Netlify.
2. Iniciar sesion con GitHub.
3. Crear un sitio nuevo desde GitHub.
4. Elegir el repositorio del portafolio.
5. Configurar:

```text
Build command: dejar vacio
Publish directory: dejar vacio o usar /
```

Como esta web no necesita build, Netlify solo tiene que publicar los archivos.

### 3. Activar admin

Para que `/admin/` permita editar:

1. Conectar el sitio con GitHub.
2. Configurar autenticacion para Decap CMS.
3. Permitir solo tu usuario.
4. Probar entrar a:

```text
https://TU-SITIO.netlify.app/admin/
```

5. Iniciar sesion.
6. Editar un dato simple, por ejemplo el nivel de ingles.
7. Guardar.
8. Confirmar que el cambio aparece en la web.

## Como editar despues

Desde el admin podrias cambiar:

- Nombre y perfil.
- Sobre mi.
- Nivel de ingles.
- Habilidades.
- Herramientas.
- Cursos.
- Proyectos.
- Links.
- CV.
- Imagenes de proyectos.

Los visitantes comunes no pueden editar. Solo pueden ver la web y tocar enlaces.

## Seguridad

No hay contraseña escrita en la web.

La seguridad real depende del login con GitHub y los permisos del repositorio.

Aunque alguien adivine `/admin/`, no puede guardar cambios sin permiso.

## Links importantes

Web local:

```text
http://127.0.0.1:8765/
```

Admin local:

```text
http://127.0.0.1:8765/admin/
```

Web publicada en GitHub Pages:

```text
https://ivanoro2002.github.io
```

Admin publicado:

```text
https://ivanoro2002.github.io/admin/
```

## Fuentes oficiales

- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Crear repositorio en GitHub: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- Decap CMS con GitHub: https://decapcms.org/docs/github-backend/
- Decap CMS Git Gateway: https://decapcms.org/docs/git-gateway-backend/
