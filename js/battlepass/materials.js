// Categories for the material selector
const BATTLEPASS_MATERIALS = {
  "pokeballs": [
    "COBBLEMON_POKE_BALL", "COBBLEMON_GREAT_BALL", "COBBLEMON_ULTRA_BALL", "COBBLEMON_MASTER_BALL",
    "COBBLEMON_DIVE_BALL", "COBBLEMON_DUSK_BALL", "COBBLEMON_FAST_BALL", "COBBLEMON_FRIEND_BALL",
    "COBBLEMON_HEAL_BALL", "COBBLEMON_HEAVY_BALL", "COBBLEMON_LEVEL_BALL", "COBBLEMON_LOVE_BALL",
    "COBBLEMON_LURE_BALL", "COBBLEMON_LUXURY_BALL", "COBBLEMON_MOON_BALL", "COBBLEMON_NEST_BALL",
    "COBBLEMON_NET_BALL", "COBBLEMON_PREMIER_BALL", "COBBLEMON_QUICK_BALL", "COBBLEMON_REPEAT_BALL",
    "COBBLEMON_SAFARI_BALL", "COBBLEMON_SPORT_BALL", "COBBLEMON_TIMER_BALL"
  ],
  "medicine": [
    "COBBLEMON_POTION", "COBBLEMON_SUPER_POTION", "COBBLEMON_HYPER_POTION", "COBBLEMON_MAX_POTION",
    "COBBLEMON_FULL_RESTORE", "COBBLEMON_ANTIDOTE", "COBBLEMON_AWAKENING", "COBBLEMON_BURN_HEAL",
    "COBBLEMON_ICE_HEAL", "COBBLEMON_PARALYZE_HEAL", "COBBLEMON_FULL_HEAL", "COBBLEMON_ETHER",
    "COBBLEMON_MAX_ETHER", "COBBLEMON_ELIXIR", "COBBLEMON_MAX_ELIXIR", "COBBLEMON_REVIVE",
    "COBBLEMON_MAX_REVIVE", "COBBLEMON_HEAL_POWDER", "COBBLEMON_ENERGY_ROOT", "COBBLEMON_REVIVAL_HERB"
  ],
  "exp_items": [
    "COBBLEMON_RARE_CANDY", "COBBLEMON_EXP_CANDY_XS", "COBBLEMON_EXP_CANDY_S", 
    "COBBLEMON_EXP_CANDY_M", "COBBLEMON_EXP_CANDY_L", "COBBLEMON_EXP_CANDY_XL"
  ],
  "vitamins": [
    "COBBLEMON_HP_UP", "COBBLEMON_PROTEIN", "COBBLEMON_IRON", "COBBLEMON_CALCIUM",
    "COBBLEMON_ZINC", "COBBLEMON_CARBOS", "COBBLEMON_PP_UP", "COBBLEMON_PP_MAX"
  ],
  "battle_items": [
    "COBBLEMON_X_ATTACK", "COBBLEMON_X_DEFENSE", "COBBLEMON_X_SP_ATK", "COBBLEMON_X_SP_DEF",
    "COBBLEMON_X_SPEED", "COBBLEMON_X_ACCURACY", "COBBLEMON_DIRE_HIT", "COBBLEMON_GUARD_SPEC"
  ],
  "evolution_items": [
    "COBBLEMON_FIRE_STONE", "COBBLEMON_WATER_STONE", "COBBLEMON_THUNDER_STONE", "COBBLEMON_LEAF_STONE",
    "COBBLEMON_MOON_STONE", "COBBLEMON_SUN_STONE", "COBBLEMON_DAWN_STONE", "COBBLEMON_DUSK_STONE",
    "COBBLEMON_SHINY_STONE", "COBBLEMON_ICE_STONE", "COBBLEMON_KINGS_ROCK", "COBBLEMON_METAL_COAT",
    "COBBLEMON_DRAGON_SCALE", "COBBLEMON_UPGRADE", "COBBLEMON_DUBIOUS_DISC", "COBBLEMON_RAZOR_CLAW",
    "COBBLEMON_RAZOR_FANG", "COBBLEMON_PRISM_SCALE", "COBBLEMON_ELECTIRIZER", "COBBLEMON_MAGMARIZER",
    "COBBLEMON_PROTECTOR", "COBBLEMON_OVAL_STONE", "COBBLEMON_REAPER_CLOTH", "COBBLEMON_LINK_CABLE"
  ],
  "held_items": [
    "COBBLEMON_EXP_SHARE", "COBBLEMON_LUCKY_EGG", "COBBLEMON_BLACK_BELT", "COBBLEMON_BLACK_GLASSES",
    "COBBLEMON_CHARCOAL", "COBBLEMON_DRAGON_FANG", "COBBLEMON_FOCUS_BAND", "COBBLEMON_HARD_STONE",
    "COBBLEMON_LIGHT_CLAY", "COBBLEMON_MAGNET", "COBBLEMON_MENTAL_HERB", "COBBLEMON_MIRACLE_SEED",
    "COBBLEMON_MYSTIC_WATER", "COBBLEMON_NEVER_MELT_ICE", "COBBLEMON_POISON_BARB", "COBBLEMON_POWER_HERB",
    "COBBLEMON_QUICK_CLAW", "COBBLEMON_SHARP_BEAK", "COBBLEMON_SILK_SCARF", "COBBLEMON_SILVER_POWDER",
    "COBBLEMON_SOFT_SAND", "COBBLEMON_SPELL_TAG", "COBBLEMON_TWISTED_SPOON", "COBBLEMON_WHITE_HERB",
    "COBBLEMON_LEFTOVERS", "COBBLEMON_ROCKY_HELMET"
  ],
  "berries": [
    "COBBLEMON_ORAN_BERRY", "COBBLEMON_SITRUS_BERRY", "COBBLEMON_LUM_BERRY", "COBBLEMON_LEPPA_BERRY",
    "COBBLEMON_CHERI_BERRY", "COBBLEMON_CHESTO_BERRY", "COBBLEMON_PECHA_BERRY", "COBBLEMON_RAWST_BERRY",
    "COBBLEMON_ASPEAR_BERRY", "COBBLEMON_PERSIM_BERRY", "COBBLEMON_RAZZ_BERRY", "COBBLEMON_BLUK_BERRY",
    "COBBLEMON_NANAB_BERRY", "COBBLEMON_WEPEAR_BERRY", "COBBLEMON_PINAP_BERRY"
  ],
  "utility": [
    "COBBLEMON_POKE_EGG", "COBBLEMON_HEALER", "COBBLEMON_POKEDEX", "COBBLEMON_POKE_ROD",
    "COBBLEMON_POKE_BAIT", "COBBLEMON_POKE_SNACK", "COBBLEMON_BERRY_JUICE"
  ]
};

// Modal Logic
let bpSelectorCallback = null;

function renderMaterialSelectorModal() {
    let modal = document.getElementById('bp-material-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bp-material-modal';
        modal.className = 'bp-modal-overlay';
        modal.innerHTML = `
            <div class="bp-modal-content">
                <div class="bp-modal-header">
                    <h3>Seleccionar Material</h3>
                    <button onclick="closeMaterialSelector()">✕</button>
                </div>
                <div class="bp-modal-body" id="bp-modal-items"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
}

window.openMaterialSelector = function(currentValue, callback) {
    bpSelectorCallback = callback;
    renderMaterialSelectorModal();
    
    let html = '';
    // Use a local reference to be safe
    const getVisual = window.getSlotVisualHtml || ((m) => `<div class="gui-slot-icon">📦</div>`);

    for (const [category, items] of Object.entries(BATTLEPASS_MATERIALS)) {
        html += `<h4 class="bp-cat-title">${category.toUpperCase()}</h4>`;
        html += `<div class="bp-item-grid">`;
        for (const itemId of items) {
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
    
    document.getElementById('bp-modal-items').innerHTML = html;
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
