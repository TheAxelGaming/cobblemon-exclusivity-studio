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
  
  // Limpiar Selección (Pokemons)
  document.getElementById('btn-clear-pkmn').addEventListener('click', () => {
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

document.addEventListener('DOMContentLoaded', () => {
    // We defer initPokemonTab so that POKEMON_DB has time to load if it's placed before
    setTimeout(initPokemonTab, 200);
});
