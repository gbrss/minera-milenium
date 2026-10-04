# Guía de contribución

Gracias por colaborar con el sitio de Minera Milenium. Esta guía explica cómo proponer cambios de forma ordenada.

## Flujo de trabajo

1. Crea una rama desde `main` con un nombre descriptivo:
   - `feat/seccion-noticias`
   - `fix/menu-movil`
   - `content/actualizar-cifras-sal`
2. Haz tus cambios y verifica que el sitio compila:
   ```bash
   npm install
   npm run build
   ```
3. Abre un Pull Request hacia `main` usando la plantilla. Los PR deben pasar el chequeo de build (GitHub Actions).
4. Espera la revisión antes de fusionar.

## Convención de commits

Usamos mensajes cortos en español con prefijo:

| Prefijo | Uso |
|---|---|
| `feat:` | Nueva funcionalidad o sección |
| `fix:` | Corrección de errores |
| `content:` | Cambios de textos, cifras o imágenes |
| `style:` | Cambios visuales/CSS sin lógica nueva |
| `docs:` | Documentación |
| `chore:` | Mantenimiento, dependencias, configuración |

Ejemplo: `content: actualizar capacidad productiva de sal`

## Dónde cambiar cada cosa

- Textos, cifras y datos de contacto: `src/data/site.ts`
- Estructura de cada sección: `src/components/`
- Estilos y colores: `src/styles/global.css`
- Imágenes: `public/img/` (optimizadas, idealmente menos de 300 KB cada una)

## Criterios de calidad

- Mantener la identidad visual: azul marino y dorado, logo sin deformar.
- Textos en español de Chile, sin faltas de ortografía.
- Todas las imágenes con atributo `alt` descriptivo.
- Probar en móvil y escritorio antes de pedir revisión.
- No subir `node_modules/`, `dist/` ni archivos con credenciales.

## Contenido sensible

Las cifras de producción, contratos proyectados y empleo deben ser aprobadas por la gerencia antes de publicarse. Márcalas en el PR con la etiqueta `content`.

## Reportar problemas

Usa las plantillas de *Issues*: error del sitio o solicitud de cambio de contenido.
