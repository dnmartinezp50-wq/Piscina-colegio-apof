# Aula · Directorio escolar

Directorio de estudiantes con una interfaz adaptable a móvil y escritorio.

## Funcionalidades

- Consulta los datos de los estudiantes en fichas visuales.
- Busca por nombre y apellidos y filtra por grupos de edad.
- Revisa indicadores con el tamaño y los promedios de la comunidad.
- Navega por las secciones desde el menú adaptable.

## Estructura

- `index.html`: página principal.
- `src/main.mjs`: inicialización de la interfaz y menú.
- `src/componentes/`: navegación y fichas de estudiantes.
- `src/datos/estudiantes.mjs`: datos del alumnado.
- `src/styles/estilos.css`: estilos y diseño adaptable.
- `docs/`: copia publicable del sitio para GitHub Pages, configurado para usar
  la carpeta `/docs` de la rama `main`.

Sirve la carpeta raíz desde cualquier servidor HTTP estático que admita módulos
JavaScript del navegador. Al cambiar el sitio, actualiza también los archivos
de `docs/` para que la versión publicada coincida con la versión fuente.