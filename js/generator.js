/**
 * generator.js — Generación de archivos JSON para el datapack
 * Funciones puras sin efectos secundarios (no tocan el DOM).
 */

/**
 * Bloquea la receta de crafteo de un ítem.
 * Usa fabric:load_conditions con "fabric:false" para que Fabric API
 * ignore el archivo al cargar el juego, efectivamente suprimiendo la receta.
 * @param {string} itemId - ID técnico del ítem (sin namespace)
 * @returns {object} JSON del recipe blocker
 */
function buildRecipeJSON(itemId) {
  return {
    "type": "minecraft:crafting_shapeless",
    "ingredients": [ { "item": `${NAMESPACE}:${itemId}` } ],
    "result": { "id": `${NAMESPACE}:${itemId}`, "count": 1 },
    "fabric:load_conditions": [
      { "condition": "fabric:false" }
    ]
  };
}

/**
 * Genera un override de Species para vaciar los drops del Pokémon.
 * Ruta destino: data/cobblemon/species/overrides/<id>.json
 * @param {string} itemId - ID técnico del ítem
 * @returns {object} JSON del species override
 */
function buildDropOverrideJSON(itemId) {
  return {
    "drops": {
      "amount": 0,
      "entries": []
    }
  };
}

// Alias mantenido por compatibilidad con llamadas existentes
const buildLootJSON = buildDropOverrideJSON;

/**
 * Aplica resaltado de sintaxis estilo Monokai a un objeto JSON.
 * Retorna HTML con spans coloreados.
 * @param {object} json - Objeto a resaltar
 * @returns {string} HTML con spans
 */
function syntaxHighlight(json) {
  const str = JSON.stringify(json, null, 2);
  return str.replace(
    /(\"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*\"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    match => {
      let cls = 'json-num';
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? 'json-key' : 'json-str';
      } else if (/true|false/.test(match)) {
        cls = 'json-bool';
      } else if (/null/.test(match)) {
        cls = 'json-null';
      }
      return `<span class="${cls}">${match}</span>`;
    }
  ).replace(/[{}\[\],]/g, m => `<span class="json-punc">${m}</span>`);
}

/**
 * Descarga un objeto JSON como archivo .json en el navegador.
 * @param {string} filename - Nombre del archivo a descargar
 * @param {object} data - Objeto JSON a serializar
 */
function downloadJSON(filename, data) {
  try {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  } catch (err) {
    console.error('[CobblemonStudio] Error descargando JSON:', err);
    showToast('❌', 'Error al descargar el archivo.');
  }
}
