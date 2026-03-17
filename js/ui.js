/**
 * ui.js — Funciones de renderizado y manipulación del DOM
 * Gestiona la vista: lista de ítems, configurador, preview JSON y toasts.
 */

// ============================================================
// TOAST
// ============================================================
let _toastTimer = null;

function showToast(icon, msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-icon').textContent = icon;
  document.getElementById('toast-msg').textContent  = msg;
  toast.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ============================================================
// SIDEBAR COLLAPSE LOGIC
// ============================================================
function initSidebarToggles() {
  const toggles = [
    { btn: 'btn-toggle-left', panel: 'panel-left', key: 'ui_panelLeft_collapsed', dir: 'left' },
    { btn: 'btn-toggle-right', panel: 'panel-right', key: 'ui_panelRight_collapsed', dir: 'right' },
    { btn: 'bp-btn-toggle-left', panel: 'bp-panel-left', key: 'ui_bpPanelLeft_collapsed', dir: 'left' },
    { btn: 'bp-btn-toggle-right', panel: 'bp-panel-right', key: 'ui_bpPanelRight_collapsed', dir: 'right' }
  ];

  toggles.forEach(t => {
    const btn = document.getElementById(t.btn);
    const panel = document.getElementById(t.panel);
    if (!btn || !panel) return;

    const toggle = () => {
      const isCollapsed = panel.classList.toggle('collapsed');
      if (t.dir === 'left') {
        btn.innerHTML = isCollapsed ? '→' : '←';
      } else {
        btn.innerHTML = isCollapsed ? '←' : '→';
      }
      localStorage.setItem(t.key, isCollapsed);
    };

    btn.addEventListener('click', toggle);

    // Restore state
    if (localStorage.getItem(t.key) === 'true') {
      panel.classList.add('collapsed');
      if (t.dir === 'left') btn.innerHTML = '→';
      else btn.innerHTML = '←';
    }
  });
}

document.addEventListener('DOMContentLoaded', initSidebarToggles);

// ============================================================
// TOGGLES
// ============================================================
function setTrack(name, val) {
  const track = document.getElementById(`track-${name}`);
  if (!track) return;
  track.classList.toggle('active', val);
}

// ============================================================
// RENDER LISTA
// ============================================================
window.renderList = function() {
  const list = document.getElementById('item-list');
  const q    = state.search.toLowerCase();
  const cat  = state.activeCategory;

  const filtered = ITEMS.filter(item => {
    const matchCat = cat === 'all' || item.cat === cat;
    const matchQ   = item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  document.getElementById('total-count').textContent = filtered.length;
  list.innerHTML = '';

  if (filtered.length === 0) {
    list.innerHTML = `<div style="text-align:center;padding:32px 0;color:#6B7FA3;font-size:13px;">
      Sin resultados para "<em>${q}</em>"
    </div>`;
  }

  filtered.forEach(item => {
    const opts    = state.options[item.id];
    const inPack  = opts.inPack;
    const isActive = state.selected === item.id;

    const card = document.createElement('div');
    card.className = `item-card fade-in ${isActive ? 'active' : ''} ${inPack ? 'selected-for-pack' : ''}`;
    card.addEventListener('click', () => selectItem(item.id));

    const badges = [];
    if (opts.recipe) badges.push(`<span class="badge badge-blue"  style="font-size:10px;padding:1px 6px;">R</span>`);
    if (opts.loot)   badges.push(`<span class="badge badge-yellow" style="font-size:10px;padding:1px 6px;">D</span>`);

    const checkmark = inPack
      ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"
             stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : '';

    card.innerHTML = `
      <div class="item-img">${getItemVisual(item, 32)}</div>
      <div style="flex:1;min-width:0;">
        <div class="item-name">${item.name}</div>
        <div class="item-id">${NAMESPACE}:${item.id}</div>
        ${badges.length ? `<div style="margin-top:3px;display:flex;gap:3px;">${badges.join('')}</div>` : ''}
      </div>
      <div class="pack-check ${inPack ? 'checked' : ''}">${checkmark}</div>`;

    list.appendChild(card);
  });

  // Actualizar contadores
  const packCount = Object.values(state.options).filter(o => o.inPack).length;
  document.getElementById('pack-count').textContent      = packCount;
  document.getElementById('sel-count-badge').textContent = `${packCount} en el Pack`;
}

// ============================================================
// SELECCIONAR ÍTEM
// ============================================================
const CAT_LABELS = {
  pokeball: 'Pokéball', stone: 'Piedra Evo', battle: 'Combate',
  candy: 'Caramelo', berry: 'Baya', held: 'Hold Item',
  medicine: 'Medicina', mint: 'Menta', apricorn: 'Apricorn',
  gem: 'Gema', farm: 'Cultivo'
};
const CAT_COLORS = {
  pokeball: 'blue', stone: 'blue', battle: 'red',
  candy: 'yellow', berry: 'green', held: 'blue',
  medicine: 'red', mint: 'green', apricorn: 'yellow',
  gem: 'blue', farm: 'green'
};

window.selectItem = function(id) {
  state.selected = id;
  const item = ITEMS.find(i => i.id === id);
  const opts = state.options[id];

  document.getElementById('no-selection').style.display  = 'none';
  document.getElementById('item-config').style.display   = 'block';

  document.getElementById('cfg-img').innerHTML   = getItemVisual(item, 52);
  document.getElementById('cfg-name').textContent = item.name;
  document.getElementById('cfg-id').textContent   = `${NAMESPACE}:${item.id}`;

  const color = CAT_COLORS[item.cat] || 'blue';
  const label = CAT_LABELS[item.cat] || item.cat;
  document.getElementById('cfg-badges').innerHTML = `<span class="badge badge-${color}">${label}</span>`;

  setTrack('recipe', opts.recipe);
  setTrack('drop',   opts.loot);
  setTrack('pack',   opts.inPack);

  updateGiveCmd(id);
  updatePreview(id);
  renderList();
}

// ============================================================
// PREVIEW JSON
// ============================================================
function setTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll('.preview-tab').forEach(btn => {
    const isActive = btn.dataset.tab === tab;
    btn.style.color        = isActive ? '#4A90D9' : '#6B7FA3';
    btn.style.borderBottom = isActive ? '2px solid #4A90D9' : '2px solid transparent';
  });
  if (state.selected) updatePreview(state.selected);
}

function updatePreview(id) {
  const out      = document.getElementById('json-output');
  const fn       = document.getElementById('preview-filename');
  const jsonObj  = state.activeTab === 'recipe'
    ? buildRecipeJSON(id)
    : buildDropOverrideJSON(id);
  const filePath = state.activeTab === 'recipe'
    ? `data/${NAMESPACE}/recipes/${id}.json`
    : `data/${NAMESPACE}/species/overrides/${id}.json`;

  fn.textContent = filePath;
  out.innerHTML  = syntaxHighlight(jsonObj);
}

// ============================================================
// GIVE COMMAND
// ============================================================
function updateGiveCmd(id) {
  document.getElementById('give-cmd').textContent = `/give %player% ${NAMESPACE}:${id} 1`;
}

function copyGiveCmd() {
  const cmd = document.getElementById('give-cmd').textContent;
  navigator.clipboard.writeText(cmd)
    .then(() => showToast('✓', 'Comando /give copiado!'))
    .catch(() => showToast('❌', 'No se pudo copiar'));
}

// ============================================================
// ACCIONES RÁPIDAS
// ============================================================
function downloadCurrentRecipe() {
  if (!state.selected) return;
  downloadJSON(`${state.selected}.json`, buildRecipeJSON(state.selected));
  showToast('⬇️', `recipe/${state.selected}.json descargado`);
}

function downloadCurrentLoot() {
  if (!state.selected) return;
  downloadJSON(`${state.selected}.json`, buildDropOverrideJSON(state.selected));
  showToast('⬇️', `species_override/${state.selected}.json descargado`);
}

function copyPreview() {
  if (!state.selected) return;
  const jsonObj = state.activeTab === 'recipe'
    ? buildRecipeJSON(state.selected)
    : buildDropOverrideJSON(state.selected);
  navigator.clipboard.writeText(JSON.stringify(jsonObj, null, 2))
    .then(() => showToast('✓', 'JSON copiado al portapapeles'))
    .catch(() => showToast('❌', 'No se pudo copiar'));
}
