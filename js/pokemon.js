/**
 * pokemon.js — Lógica para la pestaña de Pokémon Spawn Blocker
 */

const savedBlocked = localStorage.getItem('pkmn_blocked');
const initialBlocked = savedBlocked ? new Set(JSON.parse(savedBlocked)) : new Set();

const savedGlobalCfg = localStorage.getItem('pkmn_global_cfg');
const initialGlobalCfg = savedGlobalCfg ? JSON.parse(savedGlobalCfg) : {
  level: "10-35",
  weight: 5.4,
  biomes: "#cobblemon:is_forest\n#cobblemon:is_hills\n#cobblemon:is_snowy_forest\n#cobblemon:is_snowy_taiga\n#cobblemon:is_taiga"
};

const savedOverrides = localStorage.getItem('pkmn_overrides');
const initialOverrides = savedOverrides ? JSON.parse(savedOverrides) : {};

const POKEMON_STATE = {
  selected: null,       // Dex ID del Pokémon seleccionado
  selectedSpawnIdx: 0,  // Índice del spawn seleccionado si tiene varios
  activeGen: 0,
  activeType: 'all',
  search: '',
  blocked: initialBlocked,
  globalConfig: initialGlobalCfg,
  overrides: initialOverrides, // dex -> { level, weight, biomes }
  dirtyFields: new Set()       // Campos modificados por el usuario
};

function saveConfigState() {
  localStorage.setItem('pkmn_blocked', JSON.stringify([...POKEMON_STATE.blocked]));
  localStorage.setItem('pkmn_global_cfg', JSON.stringify(POKEMON_STATE.globalConfig));
  localStorage.setItem('pkmn_overrides', JSON.stringify(POKEMON_STATE.overrides));
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
  
  document.getElementById('btn-block-all-pkmn').addEventListener('click', () => {
    if(confirm("¿Estás seguro de que quieres bloquear TODOS los Pokémon a la vez? (Los 1025 serán marcados)")) {
      POKEMON_DB.forEach(p => POKEMON_STATE.blocked.add(p.dex));
      saveConfigState();
      renderPokemonGrid();
      showToast("¡Se han bloqueado todos los Pokémon!");
    }
  });

  // Limpiar Selección (Pokemons)
  document.getElementById('btn-clear-pkmn').addEventListener('click', () => {
    if(POKEMON_STATE.blocked.size > 0 && !confirm("¿Seguro que quieres limpiar toda tu selección y configuración actual?")) return;
    POKEMON_STATE.blocked.clear();
    POKEMON_STATE.selected = null;
    POKEMON_STATE.overrides = {};
    POKEMON_STATE.dirtyFields.clear();
    saveConfigState();
    document.getElementById('pkmn-json-output').innerHTML = '<span style="color:#75715E">// Usa la configuración de arriba para moldear el JSON.</span>';
    document.getElementById('pkmn-preview-filename').textContent = 'Configuración Global';
    document.getElementById('pkmn-override-toggle-container').style.display = 'none';
    refreshConfigUI();
    renderPokemonGrid();
  });

  // Background clic deselecciona
  document.getElementById('pkmn-grid').addEventListener('click', (e) => {
    if(e.target.id === 'pkmn-grid') {
      POKEMON_STATE.selected = null;
      POKEMON_STATE.dirtyFields.clear();
      document.getElementById('pkmn-preview-filename').textContent = 'Configuración Global';
      document.getElementById('pkmn-override-toggle-container').style.display = 'none';
      refreshConfigUI();
      renderPokemonGrid();
      document.getElementById('pkmn-json-output').innerHTML = '<span style="color:#75715E">// Usa la configuración de arriba para moldear el JSON.</span>';
    }
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
        saveConfigState();
        renderPokemonGrid();
        showToast(`¡Se importaron ${arr.length} Pokémon bloqueados exitosamente!`);
      } else {
        alert("El código no contiene ningún Pokémon válido.");
      }
    } catch(e) {
      alert("El código introducido no es válido.");
    }
  });

  // Config UI listeners
  refreshConfigUI();
  
  const cbOverride = document.getElementById('pkmn-override-check');

  // Rastrear campos modificados (dirty tracking)
  const dirtyIndicator = document.getElementById('pkmn-dirty-indicator');
  ['pkmn-cfg-level', 'pkmn-cfg-weight', 'pkmn-cfg-biomes'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      POKEMON_STATE.dirtyFields.add(id);
      if (dirtyIndicator) dirtyIndicator.style.display = 'block';
    });
  });

  // Helper para ocultar el indicador dirty
  function clearDirtyUI() {
    POKEMON_STATE.dirtyFields.clear();
    if (dirtyIndicator) dirtyIndicator.style.display = 'none';
  }

  cbOverride.addEventListener('change', () => {
    if (!POKEMON_STATE.selected) return;
    const dex = POKEMON_STATE.selected;
    if (cbOverride.checked) {
      // Activar override: copiar valores que ya se muestran (default del juego o global)
      const p = POKEMON_DB.find(i => i.dex === dex);
      const defaultCfg = p ? getDefaultSpawnCfg(p.id) : null;
      const base = defaultCfg || POKEMON_STATE.globalConfig;
      POKEMON_STATE.overrides[dex] = { ...base };
    } else {
      // Remover override
      delete POKEMON_STATE.overrides[dex];
    }
    clearDirtyUI();
    refreshConfigUI();
    saveConfigState();
    renderPokemonJSON();
  });
  
  document.getElementById('btn-save-pkmn-cfg').addEventListener('click', () => {
    savePkmnConfig(POKEMON_STATE.selected);
  });

  // Botón: Aplicar a todos los Pokémon activos (no bloqueados)
  document.getElementById('btn-apply-active-pkmn').addEventListener('click', () => {
    const activeList = POKEMON_DB.filter(p => !POKEMON_STATE.blocked.has(p.dex));
    if (activeList.length === 0) {
      showToast('No hay Pokémon activos a los que aplicar la configuración.', 'warn');
      return;
    }
    const levelVal  = document.getElementById('pkmn-cfg-level').value.trim();
    const weightVal = document.getElementById('pkmn-cfg-weight').value.trim();
    const biomesVal = document.getElementById('pkmn-cfg-biomes').value.trim();
    const dirty = POKEMON_STATE.dirtyFields;

    activeList.forEach(p => {
      // Obtener base actual del Pokémon
      const existing = POKEMON_STATE.overrides[p.dex];
      const defaultCfg = getDefaultSpawnCfg(p.id);
      const base = existing || defaultCfg || { ...POKEMON_STATE.globalConfig };

      const updated = { ...base };
      if (dirty.has('pkmn-cfg-level')   && levelVal)  updated.level  = levelVal;
      if (dirty.has('pkmn-cfg-weight')  && weightVal) updated.weight = parseFloat(weightVal) || base.weight;
      if (dirty.has('pkmn-cfg-biomes')  && biomesVal) updated.biomes = biomesVal;

      // Solo crear override si hay algo que difiere de los datos reales del juego
      const hasChanges = dirty.size > 0 && (levelVal || weightVal || biomesVal);
      if (hasChanges) {
        POKEMON_STATE.overrides[p.dex] = updated;
      }
    });

    clearDirtyUI();
    saveConfigState();
    renderPokemonGrid();
    if (POKEMON_STATE.selected) renderPokemonJSON();
    showToast(`✅ Cambios aplicados a ${activeList.length} Pokémon activos`);
  });
}

/**
 * Vuelve inmediatamente a la configuración global, deseleccionando cualquier Pokémon.
 * Llamado desde el botón "Config Global" del panel derecho.
 */
function resetToGlobalConfig() {
  POKEMON_STATE.selected = null;
  POKEMON_STATE.dirtyFields.clear();

  // Ocultar indicador dirty si estaba visible
  const di = document.getElementById('pkmn-dirty-indicator');
  if (di) di.style.display = 'none';

  // Resetear UI del panel
  document.getElementById('pkmn-preview-filename').textContent = 'Configuración Global';
  document.getElementById('pkmn-override-toggle-container').style.display = 'none';
  document.getElementById('pkmn-json-output').innerHTML = '<span style="color:#75715E">// Ajustes globales — se aplican a todos los Pokémon\n// sin excepción individual configurada.</span>';

  // Ocultar selector de spawn si estaba abierto
  const spawnSel = document.getElementById('pkmn-spawn-selector');
  if (spawnSel) spawnSel.style.display = 'none';

  refreshConfigUI();

  // Feedback visual en el botón
  const btn = document.getElementById('btn-global-cfg');
  if (btn) {
    btn.style.background = 'rgba(74,144,217,0.3)';
    btn.style.borderColor = '#4A90D9';
    setTimeout(() => {
      btn.style.background = 'rgba(74,144,217,0.1)';
      btn.style.borderColor = 'rgba(74,144,217,0.3)';
    }, 400);
  }

  // Re-render grid para quitar el "selected" visual de alguna card
  renderPokemonGrid();
}

/**
 * Guarda la configuración del panel para un Pokémon concreto o globalmente.
 * Solo modifica los campos que el usuario tocó (dirty fields).
 */
function savePkmnConfig(selectedDex) {
  const levelInput  = document.getElementById('pkmn-cfg-level');
  const weightInput = document.getElementById('pkmn-cfg-weight');
  const biomesInput = document.getElementById('pkmn-cfg-biomes');
  const cbOverride  = document.getElementById('pkmn-override-check');
  const dirty = POKEMON_STATE.dirtyFields;

  const isIndividual = selectedDex && cbOverride.checked;

  // Obtener la config base actual (lo que ya había guardado)
  let base;
  if (isIndividual) {
    const p = POKEMON_DB.find(i => i.dex === selectedDex);
    const defaultCfg = p ? getDefaultSpawnCfg(p.id) : null;
    base = POKEMON_STATE.overrides[selectedDex] || defaultCfg || { ...POKEMON_STATE.globalConfig };
  } else {
    base = { ...POKEMON_STATE.globalConfig };
  }

  const updated = { ...base };

  // Solo sobreescribir campos que el usuario modificó explícitamente
  if (dirty.has('pkmn-cfg-level')  && levelInput.value.trim())  updated.level  = levelInput.value.trim();
  if (dirty.has('pkmn-cfg-weight') && weightInput.value.trim()) updated.weight = parseFloat(weightInput.value) || base.weight;
  if (dirty.has('pkmn-cfg-biomes') && biomesInput.value.trim()) updated.biomes = biomesInput.value.trim();

  if (isIndividual) {
    POKEMON_STATE.overrides[selectedDex] = updated;
    showToast('✅ Solo los campos modificados fueron guardados para este Pokémon');
  } else {
    POKEMON_STATE.globalConfig = updated;
    showToast('✅ Solo los campos modificados fueron guardados globalmente');
  }

  POKEMON_STATE.dirtyFields.clear();
  const di = document.getElementById('pkmn-dirty-indicator');
  if (di) di.style.display = 'none';
  saveConfigState();
  renderPokemonJSON();
}

/**
 * Obtiene los datos de spawn por defecto del Pokémon desde POKEMON_SPAWN_DATA.
 * Si tiene varios spawns, devuelve el del índice seleccionado.
 */
function getDefaultSpawnCfg(pokemonId) {
  const spawns = (typeof POKEMON_SPAWN_DATA !== 'undefined') ? POKEMON_SPAWN_DATA[pokemonId] : null;
  if (!spawns || spawns.length === 0) return null;
  const idx = POKEMON_STATE.selectedSpawnIdx || 0;
  const spawn = spawns[Math.min(idx, spawns.length - 1)];
  const biomesStr = Array.isArray(spawn.biomes) ? spawn.biomes.join('\n') : '';
  return {
    level: spawn.level || '1-60',
    weight: spawn.weight || 1.0,
    biomes: biomesStr,
    context: spawn.context || 'grounded',
    bucket: spawn.bucket || 'common',
    presets: spawn.presets || ['natural', 'wild'],
    allSpawns: spawns
  };
}

/**
 * Renderiza los tabs de selector de spawn si el Pokémon tiene varios spawn entries.
 */
function renderSpawnSelector(p) {
  const container = document.getElementById('pkmn-spawn-selector');
  if (!container) return;
  const spawns = (typeof POKEMON_SPAWN_DATA !== 'undefined') ? POKEMON_SPAWN_DATA[p.id] : null;
  if (!spawns || spawns.length <= 1) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'flex';
  container.innerHTML = spawns.map((s, i) => {
    const active = i === (POKEMON_STATE.selectedSpawnIdx || 0);
    return `<button 
      onclick="POKEMON_STATE.selectedSpawnIdx=${i}; refreshConfigUI(); renderPokemonJSON();"
      style="flex:1; padding:4px 6px; font-size:10px; background:${ active ? 'rgba(74,144,217,0.2)' : 'transparent'};
        border:1px solid ${ active ? '#4A90D9' : '#2A3347'}; border-radius:4px; color:${ active ? '#4A90D9' : '#6B7FA3'};
        cursor:pointer; transition:all 0.2s;"
    >Spawn ${i+1}${s.context ? ' · '+s.context : ''}</button>`;
  }).join('');
}

function refreshConfigUI() {
  const selectedDex = POKEMON_STATE.selected;
  const cbOverride = document.getElementById('pkmn-override-check');
  const levelInput = document.getElementById('pkmn-cfg-level');
  const weightInput = document.getElementById('pkmn-cfg-weight');
  const biomesInput = document.getElementById('pkmn-cfg-biomes');
  const configTitle = document.getElementById('pkmn-config-title');
  const defaultBadge = document.getElementById('pkmn-default-badge');
  const weightWrap = document.getElementById('pkmn-cfg-weight-wrap');
  const biomesWrap = document.getElementById('pkmn-cfg-biomes-wrap');
  const fieldsGrid = document.getElementById('pkmn-cfg-fields-grid');
  
  if (selectedDex) {
    // Modo individual — mostrar todos los campos
    if (weightWrap) weightWrap.style.display = 'block';
    if (biomesWrap) biomesWrap.style.display = 'block';
    if (fieldsGrid) fieldsGrid.style.gridTemplateColumns = '1fr 1fr';

    const p = POKEMON_DB.find(i => i.dex === selectedDex);
    const hasOverride = !!POKEMON_STATE.overrides[selectedDex];
    cbOverride.checked = hasOverride;

    // Mostrar "Aplicar a Activos" solo en modo individual
    const applyBtn = document.getElementById('btn-apply-active-pkmn');
    const actionBtns = document.getElementById('pkmn-action-btns');
    if (applyBtn) applyBtn.style.display = 'flex';
    if (actionBtns) actionBtns.style.gridTemplateColumns = '1fr 1fr';
    
    // Obtener la configuración a mostrar: override > datos reales del jar > global
    let cfg, source;
    if (hasOverride) {
      cfg = POKEMON_STATE.overrides[selectedDex];
      source = 'override';
    } else {
      const defaultCfg = p ? getDefaultSpawnCfg(p.id) : null;
      if (defaultCfg) {
        cfg = defaultCfg;
        source = 'default';
      } else {
        cfg = POKEMON_STATE.globalConfig;
        source = 'global';
      }
    }
    
    levelInput.value = cfg.level;
    weightInput.value = cfg.weight;
    biomesInput.value = cfg.biomes;
    
    // Mostrar de dónde vienen estos datos
    if (defaultBadge) {
      if (source === 'override') {
        configTitle.textContent = 'Excepción Individual';
        configTitle.style.color = '#E6DB74';
        defaultBadge.textContent = '✏️ Override activo';
        defaultBadge.style.color = '#E6DB74';
      } else if (source === 'default') {
        configTitle.textContent = 'Datos del Juego (por defecto)';
        configTitle.style.color = '#A6E22E';
        defaultBadge.textContent = '📦 Datos reales de Cobblemon';
        defaultBadge.style.color = '#A6E22E';
      } else {
        configTitle.textContent = 'Sin datos — Usando Config Global';
        configTitle.style.color = '#6B7FA3';
        defaultBadge.textContent = '🌐 Usando ajuste global';
        defaultBadge.style.color = '#6B7FA3';
      }
    }
    
    // Los inputs solo son editables si override está activo
    levelInput.disabled = !hasOverride;
    weightInput.disabled = !hasOverride;
    biomesInput.disabled = !hasOverride;
    
  } else {
    // Modo Global — solo nivel, sin botón "Aplicar a Activos"
    if (weightWrap) weightWrap.style.display = 'none';
    if (biomesWrap) biomesWrap.style.display = 'none';
    if (fieldsGrid) fieldsGrid.style.gridTemplateColumns = '1fr';

    const applyBtn = document.getElementById('btn-apply-active-pkmn');
    const actionBtns = document.getElementById('pkmn-action-btns');
    if (applyBtn) applyBtn.style.display = 'none';
    if (actionBtns) actionBtns.style.gridTemplateColumns = '1fr';

    configTitle.textContent = 'Nivel Global de Aparición';
    configTitle.style.color = '#E6DB74';
    if (defaultBadge) {
      defaultBadge.textContent = 'Se aplica a todos los Pokémon sin excepción individual';
      defaultBadge.style.color = '#6B7FA3';
    }
    const cfg = POKEMON_STATE.globalConfig;
    levelInput.value = cfg.level;
    levelInput.disabled = false;
  }
}

function renderPokemonJSON() {
  const dex = POKEMON_STATE.selected;
  if (!dex) return;

  const out = document.getElementById('pkmn-json-output');
  const p = POKEMON_DB.find(i => i.dex === dex);
  if (!p) return;
  const isBlocked = POKEMON_STATE.blocked.has(dex);
  
  if (isBlocked) {
    const code = { "enabled": false };
    out.innerHTML = syntaxHighlight(JSON.stringify(code, null, 2));
    return;
  }

  // Prioridad: override individual > datos reales por defecto > config global
  let cfg, context = 'grounded', bucket = 'common', presets = ['natural', 'wild'];
  if (POKEMON_STATE.overrides[dex]) {
    cfg = POKEMON_STATE.overrides[dex];
  } else {
    const defaultCfg = getDefaultSpawnCfg(p.id);
    if (defaultCfg) {
      cfg = defaultCfg;
      context = defaultCfg.context || 'grounded';
      bucket = defaultCfg.bucket || 'common';
      presets = defaultCfg.presets || ['natural', 'wild'];
    } else {
      cfg = POKEMON_STATE.globalConfig;
    }
  }

  const biomesStr = cfg.biomes || '';
  const biomesArr = biomesStr.split('\n').map(b => b.trim()).filter(b => b.length > 0);
  
  const code = {
    "enabled": true,
    "neededInstalledMods": [],
    "neededUninstalledMods": [],
    "spawns": [
        {
            "id": `${p.id}-1`,
            "pokemon": p.id,
            "presets": presets,
            "type": "pokemon",
            "context": context,
            "bucket": bucket,
            "level": cfg.level,
            "weight": parseFloat(cfg.weight),
            "condition": {
                "biomes": biomesArr
            }
        }
    ]
  };

  out.innerHTML = syntaxHighlight(JSON.stringify(code, null, 2));
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
    list.style.display = 'grid';
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach(p => {
    let classes = ['pkmn-grid-card', 'fade-in'];

    const isBlocked = POKEMON_STATE.blocked.has(p.dex);
    if (isBlocked) classes.push('blocked-card');

    if (POKEMON_STATE.selected === p.dex) classes.push('selected');
    
    // Si tiene un override local configurado, añadir clase para styling local visual
    if (POKEMON_STATE.overrides[p.dex]) classes.push('has-override');

    const card = document.createElement('div');
    card.className = classes.join(' ');

    // Tooltip events (Drops)
    card.addEventListener('mouseenter', (e) => showPokemonTooltip(e, p));
    card.addEventListener('mousemove', (e) => movePokemonTooltip(e));
    card.addEventListener('mouseleave', hidePokemonTooltip);

    const typesHtml = p.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join('');
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.dex}.png`;

    card.innerHTML = `
      <div class="pkmn-grid-img-wrap">
        <img src="${imgUrl}" class="pkmn-grid-img" loading="lazy" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236B7FA3%22 stroke-width=%222%22%3E%3Ccircle cx=%2212%22 cy=%2212%22 r=%2210%22/%3E%3Cline x1=%2212%22 y1=%2222%22 x2=%2212%22 y2=%2212%22/%3E%3C/svg%3E'"/>
      </div>
      <div class="pkmn-grid-name">${p.name} ${POKEMON_STATE.overrides[p.dex] && !isBlocked ? '<span style="color:#E6DB74;">★</span>' : ''}</div>
      <div class="pkmn-grid-dex">#${p.dex.toString().padStart(4, '0')} &bull; Gen ${p.gen}</div>
      <div class="pkmn-grid-types">${typesHtml}</div>
    `;

    // Click izquierdo: Seleccionar para configurar
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      POKEMON_STATE.selected = p.dex;
      POKEMON_STATE.selectedSpawnIdx = 0; // Reset al primer spawn
      POKEMON_STATE.dirtyFields.clear(); // Limpiar campos sucios al cambiar selección
      renderPokemonGrid();
      document.getElementById('pkmn-preview-filename').textContent = `Configuración — ${p.name}`;
      document.getElementById('pkmn-override-toggle-container').style.display = 'flex';
      refreshConfigUI();
      renderSpawnSelector(p);
      renderPokemonJSON();
    });

    // Right click: Toggle Block state
    card.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (isBlocked) {
        POKEMON_STATE.blocked.delete(p.dex);
      } else {
        POKEMON_STATE.blocked.add(p.dex);
      }
      saveConfigState();
      renderPokemonGrid();
      if(POKEMON_STATE.selected === p.dex) renderPokemonJSON();
    });

    fragment.appendChild(card);
  });
  
  list.appendChild(fragment);
}

// ============================================================
// TOOLTIP (DROPS) LOGIC
// ============================================================

function showPokemonTooltip(e, p) {
  const tooltip = document.getElementById('pokemon-tooltip');
  if (!tooltip) return;

  if (!p.drops || p.drops.length === 0) {
    tooltip.innerHTML = `
      <div class="pokemon-tooltip-title">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        Drops - ${p.name}
      </div>
      <div class="pokemon-tooltip-empty">Sin drops registrados</div>
    `;
  } else {
    let dropsHtml = `<div class="pokemon-tooltip-title">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
      Drops - ${p.name}
    </div>`;

    p.drops.forEach(drop => {
      let imgSrc = `assets/items/${drop.id}.png`;
      
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
