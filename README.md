# Cobblemon Exclusivity Studio

¡Bienvenido a **Cobblemon Exclusivity Studio**! Una herramienta de desarrollo web diseñada para administradores de servidores de Minecraft con el mod Cobblemon. Su propósito principal es facilitar la creación de Data Packs personalizados para bloquear recetas de crafteo y anular los "drops" (recompensas al derrotar) de más de 600 ítems y Pokémon.

## ✨ Características Principales

*   **100% Client-Side:** Todo el procesamiento y la generación de archivos se realiza en tu navegador. No hay backend, lo que garantiza máxima privacidad y velocidad.
*   **Base de Datos Completa:** Incluye más de 600 ítems oficiales de Cobblemon (Pokéballs, Medicinas, Gemas, Mentas, Bayas, etc.).
*   **Imágenes Oficiales Dinámicas:** Las imágenes de los ítems se cargan en tiempo real desde el repositorio oficial de GitHub de Cobblemon, asegurando que siempre estén actualizadas y reduciendo el peso de la aplicación a un solo archivo.
*   **Data Packs Multi-función:**
    *   **Bloqueo de Recetas (Fabric):** Genera archivos `recipe.json` utilizando `fabric:load_conditions` para que el servidor ignore la receta por completo.
    *   **Bloqueo de Drops:** Genera sobreescrituras de especies (`species_overrides`) con `drops: { "amount": 0, "entries": [] }` para que los Pokémon no suelten ítems.
*   **Exportación Masiva:** Selecciona múltiples ítems y genera un archivo `.zip` (`pack.mcmeta` con `pack_format: 15` para Minecraft 1.20.1) listo para arrastrar y soltar en la carpeta `datapacks` de tu mundo.
*   **Previsualización JSON en Vivo:** Código con resaltado de sintaxis estilo Monokai.
*   **Copiar Comando /give:** Generadores de comandos de un clic, ideales para configurar recompensas en plugins como BattlePass.

## 🚀 Cómo usarlo

1.  Abre el archivo `index.html` en cualquier navegador web moderno.
2.  Usa el buscador o los filtros de categoría para encontrar el ítem que quieres modificar.
3.  En el panel central, activa los botones (Toggles) según lo que necesites:
    *   **Bloquear Receta:** Evita combinaciones en la mesa de crafteo.
    *   **Bloquear Drop:** El ítem no se soltará al derrotar al Pokémon asociado.
    *   **Incluir en Pack:** Marca el ítem para la descarga masiva final.
4.  Haz clic en "Descargar JSON" individual si solo ocupas un archivo, o arma tu Data Pack y cliquea **"Generar Pack Completo"** en la barra superior.

## 🛠️ Tecnologías Utilizadas

*   **HTML5 & JS Vanilla:** Rendimiento ultra rápido sin frameworks pesados.
*   **Tailwind CSS (CDN):** Sistema de diseño responsivo de utilidad y paleta oscura inmersiva de la marca Cobblemon.
*   **JSZip (CDN):** Empaquetado de Data Packs en ZIP del lado del cliente.
*   **Lucide Icons (CDN):** Iconografía minimalista en formato SVG.

## 🤝 Contribuciones y Problemas
Si encuentras algún problema técnico con formatos de archivos JSON cambiados en nuevas versiones de Cobblemon, puedes modificar las plantillas `buildRecipeJSON` o `buildDropOverrideJSON` fácilmente en la sección `<script>` de `index.html`.

Desarrollado con Excelencia de Ingeniería Naval. ⚓
