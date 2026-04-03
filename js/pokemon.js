/**
 * pokemon.js — Lógica para la pestaña de Pokémon Spawn Blocker
 */

const savedBlocked = localStorage.getItem('pkmn_blocked');
const initialBlocked = savedBlocked ? new Set(JSON.parse(savedBlocked)) : new Set();

const POKEMON_STATE = {
  selected: null, // Dex ID of the last selected for JSON preview
  activeGen: 0, // 0 = all
  activeType: 'all',
  search: '',
  blocked: initialBlocked // Set con dex numbers de los Pokémon bloqueados
};

function saveBlockedState() {
  localStorage.setItem('pkmn_blocked', JSON.stringify([...POKEMON_STATE.blocked]));
}

// ============================================================
// INICIALIZADOR
// ============================================================
function initPokemonTab() {
  renderPokemonGrid();

  // Búsqueda
  document.getElementById('pkmn-search').addEventListener('input', e => {
    POKEMON_STATE.search = e.target.value;
    renderPokemonGrid();
  });

  // Filtros de Generación
  document.querySelectorAll('.gen-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.gen-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      POKEMON_STATE.activeGen = parseInt(pill.dataset.gen);
      renderPokemonGrid();
    });
  });
  
  // Bloquear Todos
  document.getElementById('btn-block-all-pkmn').addEventListener('click', () => {
    if(confirm("¿Estás seguro de que quieres bloquear TODOS los Pokémon a la vez? (Los 1025 serán marcados)")) {
      POKEMON_DB.forEach(p => POKEMON_STATE.blocked.add(p.dex));
      saveBlockedState();
      renderPokemonGrid();
      showToast("¡Se han bloqueado todos los Pokémon!");
    }
  });

  // Limpiar Selección (Pokemons)
  document.getElementById('btn-clear-pkmn').addEventListener('click', () => {
    if(POKEMON_STATE.blocked.size > 0 && !confirm("¿Seguro que quieres limpiar toda tu selección actual?")) return;
    POKEMON_STATE.blocked.clear();
    saveBlockedState();
    POKEMON_STATE.selected = null;
    document.getElementById('pkmn-json-output').innerHTML = '<span style="color:#75715E">// Selecciona un Pokémon para ver el JSON.</span>';
    document.getElementById('pkmn-preview-filename').textContent = '—';
    renderPokemonGrid();
  });

  // Exportar Código (Base64 csv)
  document.getElementById('btn-export-pkmn').addEventListener('click', () => {
    if (POKEMON_STATE.blocked.size === 0) {
      alert("No has bloqueado ningún Pokémon para compartir.");
      return;
    }
    const code = btoa(Array.from(POKEMON_STATE.blocked).join(','));
    navigator.clipboard.writeText(code).then(() => {
      showToast("¡Código copiado al portapapeles!");
    }).catch(() => {
      prompt("Copia este código manualmente:", code);
    });
  });

  // Importar Código
  document.getElementById('btn-import-pkmn').addEventListener('click', () => {
    const code = prompt("Introduce el código de Pokémon a bloquear:");
    if (!code) return;
    try {
      const decoded = atob(code);
      const arr = decoded.split(',').map(n => parseInt(n)).filter(n => !isNaN(n) && n > 0 && n <= 1025);
      if (arr.length > 0) {
        POKEMON_STATE.blocked = new Set(arr);
        saveBlockedState();
        renderPokemonGrid();
        showToast(`¡Se importaron ${arr.length} Pokémon exitosamente!`);
      } else {
        alert("El código no contiene ningún Pokémon válido.");
      }
    } catch(e) {
      alert("El código introducido no es válido.");
    }
  });
}

// ============================================================
// RENDER GRID
// ============================================================
function renderPokemonGrid() {
  const list = document.getElementById('pkmn-grid');
  const q    = POKEMON_STATE.search.toLowerCase();
  
  const filtered = POKEMON_DB.filter(p => {
    const matchGen = POKEMON_STATE.activeGen === 0 || p.gen === POKEMON_STATE.activeGen;
    const matchType = POKEMON_STATE.activeType === 'all' || p.types.includes(POKEMON_STATE.activeType);
    const matchQ = p.name.toLowerCase().includes(q) || p.dex.toString().includes(q) || p.id.includes(q);
    return matchGen && matchType && matchQ;
  });

  document.getElementById('pkmn-total-count').textContent = filtered.length;
  document.getElementById('pkmn-blocked-count').textContent = POKEMON_STATE.blocked.size;

  list.innerHTML = '';

  if (filtered.length === 0) {
    list.style.display = 'block';
    list.innerHTML = `<div style="text-align:center;padding:64px 0;color:#6B7FA3;font-size:14px; width: 100%;">
      Sin resultados para "<em>${q}</em>"
    </div>`;
    return;
  } else {
    // Restaurar grid
    list.style.display = 'grid';
  }

  // Optimize appending by grouping fragments if needed, but innerHTML assignment is usually fine via document fragment:
  const fragment = document.createDocumentFragment();

  filtered.forEach(p => {
    const isBlocked = POKEMON_STATE.blocked.has(p.dex);

    const card = document.createElement('div');
    card.className = `pkmn-grid-card fade-in ${isBlocked ? 'blocked-card' : ''}`;
    
    // Toggle on click
    card.addEventListener('click', () => {
        togglePokemonBlock(p.dex);
    });

    // Tooltip events (Drops)
    card.addEventListener('mouseenter', (e) => showPokemonTooltip(e, p));
    card.addEventListener('mousemove', (e) => movePokemonTooltip(e));
    card.addEventListener('mouseleave', hidePokemonTooltip);

    const typesHtml = p.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join('');
    
    // Official artwork load slower, but for a grid it's superior. Let's use the lowres local sprite but style it nicely. Using official artwork:
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.dex}.png`;

    card.innerHTML = `
      <div class="pkmn-grid-img-wrap">
        <img src="${imgUrl}" class="pkmn-grid-img" loading="lazy" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B7FA3%22 stroke-width=%222%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2210%22/%3E%3Cline x1=%2212%22 y1=%2222%22 x2=%2212%22 y2=%2212%22/%3E%3C/svg%3E'"/>
      </div>
      <div class="pkmn-grid-name">${p.name}</div>
      <div class="pkmn-grid-dex">#${p.dex.toString().padStart(4, '0')} &bull; Gen ${p.gen}</div>
      <div class="pkmn-grid-types">${typesHtml}</div>
    `;

    fragment.appendChild(card);
  });
  
  list.appendChild(fragment);
}

// ============================================================
// TOGGLE & PREVIEW
// ============================================================

function togglePokemonBlock(dex) {
  const currentlyBlocked = POKEMON_STATE.blocked.has(dex);
  if (currentlyBlocked) {
    POKEMON_STATE.blocked.delete(dex);
  } else {
    POKEMON_STATE.blocked.add(dex);
  }
  saveBlockedState();
  
  POKEMON_STATE.selected = dex;

  updatePokemonPreview(dex);
  renderPokemonGrid();
}

function buildPokemonSpawnBlockJSON() {
  return {
    "enabled": false
  };
}

function updatePokemonPreview(dex) {
  const p = POKEMON_DB.find(i => i.dex === dex);
  const out = document.getElementById('pkmn-json-output');
  const fn = document.getElementById('pkmn-preview-filename');
  
  const paddedDex = dex.toString().padStart(4, '0');
  const filename = `${paddedDex}_${p.id}.json`;
  
  fn.textContent = `data/${NAMESPACE}/spawn_pool_world/${filename}`;
  out.innerHTML = syntaxHighlight(buildPokemonSpawnBlockJSON());
}

// Assign globally to be called from app.js tab logic if needed
window.renderPokemonList = renderPokemonGrid;

// ============================================================
// TOOLTIP (DROPS) LOGIC
// ============================================================

function showPokemonTooltip(e, p) {
  const tooltip = document.getElementById('pokemon-tooltip');
  if (!tooltip) return;

  // Si no hay drops registrados o el array está vacío
  if (!p.drops || p.drops.length === 0) {
    tooltip.innerHTML = `
      <div class="pokemon-tooltip-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        Drops - ${p.name}
      </div>
      <div class="pokemon-tooltip-empty">Sin drops registrados</div>
    `;
  } else {
    // Construir la lista de ítems
    let dropsHtml = `<div class="pokemon-tooltip-title">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      Drops - ${p.name}
    </div>`;

    p.drops.forEach(drop => {
      // Intentamos encontrarlo en minecraft_data.js o ITEMS
      let imgSrc = `assets/items/${drop.id}.png`; // por defecto asumimos minúscula
      
      // Fallback por si la imagen no carga, mostraremos un icono genérico
      dropsHtml += `
        <div class="pokemon-tooltip-item">
          <div class="pokemon-tooltip-item-left">
            <img src="${imgSrc}" class="pokemon-tooltip-icon" 
                 onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%236B7FA3\\' stroke-width=\\'2\\'><circle cx=\\'12\\' cy=\\'12\\' r=\\'10\\'/><path d=\\'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\\'/><line x1=\\'12\\' y1=\\'17\\' x2=\\'12.01\\' y2=\\'17\\'/></svg>'"/>
            <span class="pokemon-tooltip-name" title="${drop.name}">${drop.name}</span>
          </div>
          <span class="pokemon-tooltip-chance">${drop.text}</span>
        </div>
      `;
    });
    tooltip.innerHTML = dropsHtml;
  }

  tooltip.classList.remove('hidden');
  movePokemonTooltip(e);
}

function movePokemonTooltip(e) {
  const tooltip = document.getElementById('pokemon-tooltip');
  if (!tooltip || tooltip.classList.contains('hidden')) return;

  const offset = 15;
  let x = e.clientX + offset;
  let y = e.clientY + offset;

  const rect = tooltip.getBoundingClientRect();
  
  // Evitar salir por la derecha
  if (x + rect.width > window.innerWidth) {
    x = e.clientX - rect.width - offset;
  }
  
  // Evitar salir por abajo
  if (y + rect.height > window.innerHeight) {
    y = e.clientY - rect.height - offset;
  }

  tooltip.style.transform = `translate(${x}px, ${y}px)`;
}

function hidePokemonTooltip() {
  const tooltip = document.getElementById('pokemon-tooltip');
  if (tooltip) {
    tooltip.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // We defer initPokemonTab so that POKEMON_DB has time to load if it's placed before
    setTimeout(initPokemonTab, 200);
});
