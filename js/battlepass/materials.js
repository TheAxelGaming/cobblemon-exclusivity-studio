// Categories for the material selector
// source: "base" = Cobblemon base mod, otherwise name of the addon
const BATTLEPASS_MATERIALS = {
  "pokeballs": {
    items: [
      "COBBLEMON_POKE_BALL", "COBBLEMON_GREAT_BALL", "COBBLEMON_ULTRA_BALL", "COBBLEMON_MASTER_BALL",
      "COBBLEMON_DIVE_BALL", "COBBLEMON_DUSK_BALL", "COBBLEMON_FAST_BALL", "COBBLEMON_FRIEND_BALL",
      "COBBLEMON_HEAL_BALL", "COBBLEMON_HEAVY_BALL", "COBBLEMON_LEVEL_BALL", "COBBLEMON_LOVE_BALL",
      "COBBLEMON_LURE_BALL", "COBBLEMON_LUXURY_BALL", "COBBLEMON_MOON_BALL", "COBBLEMON_NEST_BALL",
      "COBBLEMON_NET_BALL", "COBBLEMON_PREMIER_BALL", "COBBLEMON_QUICK_BALL", "COBBLEMON_REPEAT_BALL",
      "COBBLEMON_SAFARI_BALL", "COBBLEMON_SPORT_BALL", "COBBLEMON_TIMER_BALL"
    ],
    source: "base"
  },
  "medicine": {
    items: [
      "COBBLEMON_POTION", "COBBLEMON_SUPER_POTION", "COBBLEMON_HYPER_POTION", "COBBLEMON_MAX_POTION",
      "COBBLEMON_FULL_RESTORE", "COBBLEMON_ANTIDOTE", "COBBLEMON_AWAKENING", "COBBLEMON_BURN_HEAL",
      "COBBLEMON_ICE_HEAL", "COBBLEMON_PARALYZE_HEAL", "COBBLEMON_FULL_HEAL", "COBBLEMON_ETHER",
      "COBBLEMON_MAX_ETHER", "COBBLEMON_ELIXIR", "COBBLEMON_MAX_ELIXIR", "COBBLEMON_REVIVE",
      "COBBLEMON_MAX_REVIVE", "COBBLEMON_HEAL_POWDER", "COBBLEMON_ENERGY_ROOT", "COBBLEMON_REVIVAL_HERB"
    ],
    source: "base"
  },
  "exp_items": {
    items: [
      "COBBLEMON_RARE_CANDY", "COBBLEMON_EXP_CANDY_XS", "COBBLEMON_EXP_CANDY_S", 
      "COBBLEMON_EXP_CANDY_M", "COBBLEMON_EXP_CANDY_L", "COBBLEMON_EXP_CANDY_XL"
    ],
    source: "base"
  },
  "vitamins": {
    items: [
      "COBBLEMON_HP_UP", "COBBLEMON_PROTEIN", "COBBLEMON_IRON", "COBBLEMON_CALCIUM",
      "COBBLEMON_ZINC", "COBBLEMON_CARBOS", "COBBLEMON_PP_UP", "COBBLEMON_PP_MAX"
    ],
    source: "base"
  },
  "battle_items": {
    items: [
      "COBBLEMON_X_ATTACK", "COBBLEMON_X_DEFENSE", "COBBLEMON_X_SP_ATK", "COBBLEMON_X_SP_DEF",
      "COBBLEMON_X_SPEED", "COBBLEMON_X_ACCURACY", "COBBLEMON_DIRE_HIT", "COBBLEMON_GUARD_SPEC"
    ],
    source: "base"
  },
  "competitive": {
    items: [
      "COBBLEMON_LEFTOVERS", "COBBLEMON_ROCKY_HELMET", "COBBLEMON_LIFE_ORB", "COBBLEMON_FOCUS_SASH",
      "COBBLEMON_ASSAULT_VEST", "COBBLEMON_CHOICE_BAND", "COBBLEMON_CHOICE_SPECS", "COBBLEMON_CHOICE_SCARF",
      "COBBLEMON_EVIOLITE", "COBBLEMON_AIR_BALLOON", "COBBLEMON_WEAKNESS_POLICY", "COBBLEMON_HEAVY_DUTY_BOOTS",
      "COBBLEMON_EXPERT_BELT", "COBBLEMON_SCOPE_LENS", "COBBLEMON_ABILITY_CAPSULE", "COBBLEMON_ABILITY_PATCH"
    ],
    source: "base"
  },
  "mints": {
    items: [
      "COBBLEMON_ADAMANT_MINT", "COBBLEMON_MODEST_MINT", "COBBLEMON_JOLLY_MINT", "COBBLEMON_TIMID_MINT",
      "COBBLEMON_BOLD_MINT", "COBBLEMON_CALM_MINT", "COBBLEMON_IMPISH_MINT", "COBBLEMON_CAREFUL_MINT",
      "COBBLEMON_HASTY_MINT", "COBBLEMON_NAIVE_MINT", "COBBLEMON_BRAVE_MINT", "COBBLEMON_QUIET_MINT",
      "COBBLEMON_RELAXED_MINT", "COBBLEMON_SASSY_MINT", "COBBLEMON_NAUGHTY_MINT", "COBBLEMON_LAX_MINT",
      "COBBLEMON_MILD_MINT", "COBBLEMON_RASH_MINT", "COBBLEMON_GENTLE_MINT", "COBBLEMON_LONELY_MINT",
      "COBBLEMON_SERIOUS_MINT"
    ],
    source: "base"
  },
  "bottle_caps": {
    items: [
      "COBBLEMON_SILVER_BOTTLE_CAP", "COBBLEMON_GOLD_BOTTLE_CAP"
    ],
    source: "Cobblemon Unimplemented Items"
  },
  "evolution_items": {
    items: [
      "COBBLEMON_FIRE_STONE", "COBBLEMON_WATER_STONE", "COBBLEMON_THUNDER_STONE", "COBBLEMON_LEAF_STONE",
      "COBBLEMON_MOON_STONE", "COBBLEMON_SUN_STONE", "COBBLEMON_DAWN_STONE", "COBBLEMON_DUSK_STONE",
      "COBBLEMON_SHINY_STONE", "COBBLEMON_ICE_STONE", "COBBLEMON_KINGS_ROCK", "COBBLEMON_METAL_COAT",
      "COBBLEMON_DRAGON_SCALE", "COBBLEMON_UPGRADE", "COBBLEMON_DUBIOUS_DISC", "COBBLEMON_RAZOR_CLAW",
      "COBBLEMON_RAZOR_FANG", "COBBLEMON_PRISM_SCALE", "COBBLEMON_ELECTIRIZER", "COBBLEMON_MAGMARIZER",
      "COBBLEMON_PROTECTOR", "COBBLEMON_OVAL_STONE", "COBBLEMON_REAPER_CLOTH", "COBBLEMON_LINK_CABLE",
      "COBBLEMON_WHIPPED_DREAM", "COBBLEMON_SACHET", "COBBLEMON_CRACKED_POT", "COBBLEMON_CHIPPED_POT",
      "COBBLEMON_SWEET_APPLE", "COBBLEMON_TART_APPLE", "COBBLEMON_EVERSTONE"
    ],
    source: "base"
  },
  "breeding": {
    items: [
      "COBBLEMON_DESTINY_KNOT", "COBBLEMON_LUCK_INCENSE", "COBBLEMON_SEA_INCENSE",
      "COBBLEMON_LAX_INCENSE", "COBBLEMON_FULL_INCENSE", "COBBLEMON_ROSE_INCENSE",
      "COBBLEMON_PURE_INCENSE", "COBBLEMON_ROCK_INCENSE", "COBBLEMON_ODD_INCENSE",
      "COBBLEMON_WAVE_INCENSE"
    ],
    source: "base"
  },
  "held_items": {
    items: [
      "COBBLEMON_EXP_SHARE", "COBBLEMON_LUCKY_EGG", "COBBLEMON_BLACK_BELT", "COBBLEMON_BLACK_GLASSES",
      "COBBLEMON_CHARCOAL", "COBBLEMON_DRAGON_FANG", "COBBLEMON_FOCUS_BAND", "COBBLEMON_HARD_STONE",
      "COBBLEMON_LIGHT_CLAY", "COBBLEMON_MAGNET", "COBBLEMON_MENTAL_HERB", "COBBLEMON_MIRACLE_SEED",
      "COBBLEMON_MYSTIC_WATER", "COBBLEMON_NEVER_MELT_ICE", "COBBLEMON_POISON_BARB", "COBBLEMON_POWER_HERB",
      "COBBLEMON_QUICK_CLAW", "COBBLEMON_SHARP_BEAK", "COBBLEMON_SILK_SCARF", "COBBLEMON_SILVER_POWDER",
      "COBBLEMON_SOFT_SAND", "COBBLEMON_SPELL_TAG", "COBBLEMON_TWISTED_SPOON", "COBBLEMON_WHITE_HERB"
    ],
    source: "base"
  },
  "berries": {
    items: [
      "COBBLEMON_ORAN_BERRY", "COBBLEMON_SITRUS_BERRY", "COBBLEMON_LUM_BERRY", "COBBLEMON_LEPPA_BERRY",
      "COBBLEMON_CHERI_BERRY", "COBBLEMON_CHESTO_BERRY", "COBBLEMON_PECHA_BERRY", "COBBLEMON_RAWST_BERRY",
      "COBBLEMON_ASPEAR_BERRY", "COBBLEMON_PERSIM_BERRY", "COBBLEMON_RAZZ_BERRY", "COBBLEMON_BLUK_BERRY",
      "COBBLEMON_NANAB_BERRY", "COBBLEMON_WEPEAR_BERRY", "COBBLEMON_PINAP_BERRY",
      "COBBLEMON_ENIGMA_BERRY", "COBBLEMON_LANSAT_BERRY", "COBBLEMON_STARF_BERRY"
    ],
    source: "base"
  },
  "rare_items": {
    items: [
      "COBBLEMON_SHINY_CHARM", "COBBLEMON_KEY_STONE", "COBBLEMON_REPEL",
      "COBBLEMON_ESCAPE_ROPE", "COBBLEMON_POKE_EGG"
    ],
    source: "Cobblemon Unimplemented Items"
  },
  "utility": {
    items: [
      "COBBLEMON_HEALER", "COBBLEMON_POKEDEX", "COBBLEMON_POKE_ROD",
      "COBBLEMON_POKE_BAIT", "COBBLEMON_POKE_SNACK", "COBBLEMON_BERRY_JUICE"
    ],
    source: "base"
  }
};

// Modal Logic
let bpSelectorCallback = null;
let activeMaterialTab = 'cobblemon';
let bpSearchTerm = '';

function renderMaterialSelectorModal() {
    let modal = document.getElementById('bp-material-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bp-material-modal';
        modal.className = 'bp-modal-overlay';
        modal.innerHTML = `
            <div class="bp-modal-content">
                <div class="bp-modal-header">
                    <div style="display:flex; flex-direction:column; gap:8px; width:100%;">
                        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                            <h3>Seleccionar Recompensa</h3>
                            <button onclick="closeMaterialSelector()">✕</button>
                        </div>
                        <div class="bp-search-container">
                            <input type="text" id="bp-item-search" placeholder="Buscar ítem por nombre..." autocomplete="off">
                            <span class="bp-search-icon">🔍</span>
                        </div>
                    </div>
                </div>
                <div class="bp-modal-tabs">
                    <button id="tab-material-cobblemon" class="bp-tab-btn active" onclick="switchMaterialTab('cobblemon')">Cobblemon</button>
                    <button id="tab-material-minecraft" class="bp-tab-btn" onclick="switchMaterialTab('minecraft')">Minecraft</button>
                    <button id="tab-material-otros" class="bp-tab-btn" onclick="switchMaterialTab('otros')">Otros</button>
                </div>
                <div class="bp-modal-body" id="bp-modal-items"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add search listener
        const searchInput = modal.querySelector('#bp-item-search');
        searchInput.addEventListener('input', (e) => {
            bpSearchTerm = e.target.value.toLowerCase();
            renderActiveTabItems();
        });
    }
}

window.switchMaterialTab = function(tabId) {
    activeMaterialTab = tabId;
    // Update UI
    document.querySelectorAll('.bp-tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-material-${tabId}`).classList.add('active');
    
    renderActiveTabItems();
};

function renderActiveTabItems(currentValue) {
    let html = '';
    const getVisual = window.getSlotVisualHtml || ((m) => `<div class="gui-slot-icon">📦</div>`);
    const container = document.getElementById('bp-modal-items');
    
    if (activeMaterialTab === 'cobblemon') {
        for (const [category, catData] of Object.entries(BATTLEPASS_MATERIALS)) {
            const catItems = catData.items || catData;
            const source = catData.source || 'base';
            const filteredItems = catItems.filter(itemId => 
                itemId.toLowerCase().replace('cobblemon_', '').includes(bpSearchTerm)
            );
            
            if (filteredItems.length > 0) {
                const addonBadge = source !== 'base' 
                    ? `<span style="font-size:9px; background:#FF9800; color:#000; padding:1px 5px; border-radius:3px; margin-left:6px; font-weight:400; vertical-align:middle;">ADDON: ${source}</span>` 
                    : `<span style="font-size:9px; background:#4CAF50; color:#fff; padding:1px 5px; border-radius:3px; margin-left:6px; font-weight:400; vertical-align:middle;">Cobblemon</span>`;
                html += `<h4 class="bp-cat-title">${category.toUpperCase()} ${addonBadge}</h4>`;
                html += `<div class="bp-item-grid">`;
                for (const itemId of filteredItems) {
                    const visualHtml = getVisual(itemId);
                    const activeClass = itemId === currentValue ? 'active' : '';
                    html += `
                        <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${itemId}')">
                            <div class="bp-grid-icon">${visualHtml}</div>
                            <div class="bp-grid-name">${itemId.replace('COBBLEMON_', '')}</div>
                        </div>
                    `;
                }
                html += `</div>`;
            }
        }
    } else if (activeMaterialTab === 'minecraft') {
        const filteredMinecraft = MINECRAFT_ITEMS.filter(item => 
            item.name.toLowerCase().includes(bpSearchTerm) || 
            item.id.toLowerCase().includes(bpSearchTerm)
        );
        
        const grouped = {};
        filteredMinecraft.forEach(item => {
            if (!grouped[item.cat]) grouped[item.cat] = [];
            grouped[item.cat].push(item);
        });

        const catOrder = ['Combat', 'Tools', 'Materials', 'Food', 'Blocks', 'Utility', 'Other'];
        const sortedCats = Object.keys(grouped).sort((a, b) => {
            const indexA = catOrder.indexOf(a);
            const indexB = catOrder.indexOf(b);
            if (indexA === -1 && indexB === -1) return a.localeCompare(b);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });

        for (const cat of sortedCats) {
            html += `<h4 class="bp-cat-title">${cat.toUpperCase()}</h4>`;
            html += `<div class="bp-item-grid">`;
            grouped[cat].forEach(item => {
                const visualHtml = getVisual(item.id);
                const activeClass = item.id === currentValue ? 'active' : '';
                html += `
                    <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${item.id}')">
                        <div class="bp-grid-icon">${visualHtml}</div>
                        <div class="bp-grid-name">${item.name}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    } else if (activeMaterialTab === 'otros') {
        const filteredOtros = OTHER_ITEMS.filter(item => 
            item.name.toLowerCase().includes(bpSearchTerm) || 
            item.id.toLowerCase().includes(bpSearchTerm)
        );
        
        if (filteredOtros.length > 0) {
            html += `<div class="bp-item-grid" style="padding-top:10px;">`;
            filteredOtros.forEach(item => {
                const visualHtml = getVisual(item.id);
                const activeClass = item.id === currentValue ? 'active' : '';
                html += `
                    <div class="bp-grid-item ${activeClass}" onclick="selectMaterial('${item.id}')">
                        <div class="bp-grid-icon">${visualHtml}</div>
                        <div class="bp-grid-name">${item.name}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }
    }

    if (html === '' && bpSearchTerm !== '') {
        html = `
            <div style="text-align:center; padding: 40px 20px; color: #6B7FA3;">
                <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
                <div style="font-size: 14px;">No se encontraron resultados para "${bpSearchTerm}"</div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

window.openMaterialSelector = function(currentValue, callback) {
    bpSelectorCallback = callback;
    renderMaterialSelectorModal();
    
    // Reset search when opening
    bpSearchTerm = '';
    const searchInput = document.getElementById('bp-item-search');
    if (searchInput) searchInput.value = '';
    
    // Default to cobblemon unless currentValue suggests otherwise
    if (currentValue && currentValue.startsWith('minecraft:')) activeMaterialTab = 'minecraft';
    else if (currentValue && (currentValue.includes('points') || currentValue.includes('vault'))) activeMaterialTab = 'otros';
    else activeMaterialTab = 'cobblemon';
    
    switchMaterialTab(activeMaterialTab);
    renderActiveTabItems(currentValue);
    
    document.getElementById('bp-material-modal').style.display = 'flex';
};

window.closeMaterialSelector = function() {
    document.getElementById('bp-material-modal').style.display = 'none';
};

window.selectMaterial = function(itemId) {
    if (bpSelectorCallback) {
        bpSelectorCallback(itemId);
    }
    closeMaterialSelector();
};
