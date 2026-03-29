// ==========================================
// TierManager.js - Lógica de Tiers (Premium)
// ==========================================

class TierManager {
  constructor() {
    this.tiers = [];
    this.initDefaultTiers();
  }

  initDefaultTiers() {
    const saved = localStorage.getItem('bp_tiers');
    if (saved) {
      try {
        this.tiers = JSON.parse(saved);
        return;
      } catch (e) { console.error("Error loading tiers", e); }
    }

    // ====================================================
    // PASE PREMIUM: 100 niveles preconfigurados
    // ====================================================
    const premiumData = [
      // --- NIVELES 1-25: Establecimiento ---
      { mat: 'COBBLEMON_POKE_BALL',     qty: 16 },  // 1
      { mat: 'COBBLEMON_POTION',        qty: 5 },   // 2
      { mat: 'COBBLEMON_ORAN_BERRY',    qty: 2 },   // 3
      { mat: 'COBBLEMON_REPEL',         qty: 1 },   // 4
      { mat: 'COBBLEMON_GREAT_BALL',    qty: 8 },   // 5
      { mat: 'COBBLEMON_FIRE_STONE',    qty: 1 },   // 6
      { mat: 'COBBLEMON_RARE_CANDY',    qty: 5 },   // 7
      { mat: 'COBBLEMON_WATER_STONE',   qty: 1 },   // 8
      { mat: 'COBBLEMON_ESCAPE_ROPE',   qty: 1 },   // 9
      { mat: 'COBBLEMON_LUCKY_EGG',     qty: 1 },   // 10 HITO
      { mat: 'COBBLEMON_LEAF_STONE',    qty: 1 },   // 11
      { mat: 'COBBLEMON_LUM_BERRY',     qty: 10 },  // 12
      { mat: 'COBBLEMON_ULTRA_BALL',    qty: 4 },   // 13
      { mat: 'COBBLEMON_THUNDER_STONE', qty: 1 },   // 14
      { mat: 'COBBLEMON_SUPER_POTION',  qty: 5 },   // 15
      { mat: 'COBBLEMON_MOON_STONE',    qty: 1 },   // 16
      { mat: 'COBBLEMON_REVIVE',        qty: 3 },   // 17
      { mat: 'COBBLEMON_SUN_STONE',     qty: 1 },   // 18
      { mat: 'COBBLEMON_SEA_INCENSE',   qty: 1 },   // 19
      { mat: 'COBBLEMON_SILVER_BOTTLE_CAP', qty: 5 }, // 20 HITO
      { mat: 'COBBLEMON_ICE_STONE',     qty: 1 },   // 21
      { mat: 'COBBLEMON_PP_UP',         qty: 5 },   // 22
      { mat: 'COBBLEMON_DAWN_STONE',    qty: 1 },   // 23
      { mat: 'COBBLEMON_DUSK_STONE',    qty: 1 },   // 24
      { mat: 'COBBLEMON_EXP_SHARE',     qty: 1 },   // 25 HITO

      // --- NIVELES 26-50: Utilidad Media (Crianza y Evolucion) ---
      { mat: 'COBBLEMON_SHINY_STONE',   qty: 1 },   // 26
      { mat: 'COBBLEMON_MAX_REVIVE',    qty: 3 },   // 27
      { mat: 'COBBLEMON_IRON',          qty: 5 },   // 28
      { mat: 'COBBLEMON_CALCIUM',       qty: 5 },   // 29
      { mat: 'COBBLEMON_DESTINY_KNOT',  qty: 1 },   // 30 HITO
      { mat: 'COBBLEMON_PROTEIN',       qty: 5 },   // 31
      { mat: 'COBBLEMON_CARBOS',        qty: 5 },   // 32
      { mat: 'COBBLEMON_METAL_COAT',    qty: 1 },   // 33
      { mat: 'COBBLEMON_KINGS_ROCK',    qty: 1 },   // 34
      { mat: 'COBBLEMON_DRAGON_SCALE',  qty: 1 },   // 35
      { mat: 'COBBLEMON_ELECTIRIZER',   qty: 1 },   // 36
      { mat: 'COBBLEMON_MAGMARIZER',    qty: 1 },   // 37
      { mat: 'COBBLEMON_PROTECTOR',     qty: 1 },   // 38
      { mat: 'COBBLEMON_REAPER_CLOTH',  qty: 1 },   // 39
      { mat: 'COBBLEMON_EVERSTONE',     qty: 1 },   // 40 HITO
      { mat: 'COBBLEMON_RAZOR_CLAW',    qty: 1 },   // 41
      { mat: 'COBBLEMON_RAZOR_FANG',    qty: 1 },   // 42
      { mat: 'COBBLEMON_UPGRADE',       qty: 1 },   // 43
      { mat: 'COBBLEMON_DUBIOUS_DISC',  qty: 1 },   // 44
      { mat: 'COBBLEMON_WHIPPED_DREAM', qty: 1 },   // 45
      { mat: 'COBBLEMON_SACHET',        qty: 1 },   // 46
      { mat: 'COBBLEMON_CRACKED_POT',   qty: 1 },   // 47
      { mat: 'COBBLEMON_CHIPPED_POT',   qty: 1 },   // 48
      { mat: 'COBBLEMON_SWEET_APPLE',   qty: 1 },   // 49
      { mat: 'COBBLEMON_EXP_CANDY_XL',  qty: 1 },   // 50 HITO

      // --- NIVELES 51-75: Utilidad Competitiva ---
      { mat: 'COBBLEMON_LEFTOVERS',     qty: 1 },   // 51
      { mat: 'COBBLEMON_LIFE_ORB',      qty: 1 },   // 52
      { mat: 'COBBLEMON_FOCUS_SASH',    qty: 1 },   // 53
      { mat: 'COBBLEMON_ASSAULT_VEST',  qty: 1 },   // 54
      { mat: 'COBBLEMON_CHOICE_BAND',   qty: 1 },   // 55
      { mat: 'COBBLEMON_CHOICE_SPECS',  qty: 1 },   // 56
      { mat: 'COBBLEMON_CHOICE_SCARF',  qty: 1 },   // 57
      { mat: 'COBBLEMON_ROCKY_HELMET',  qty: 1 },   // 58
      { mat: 'COBBLEMON_EVIOLITE',      qty: 1 },   // 59
      { mat: 'COBBLEMON_ABILITY_CAPSULE', qty: 3 },  // 60 HITO
      { mat: 'COBBLEMON_AIR_BALLOON',   qty: 1 },   // 61
      { mat: 'COBBLEMON_MENTAL_HERB',   qty: 1 },   // 62
      { mat: 'COBBLEMON_POWER_HERB',    qty: 1 },   // 63
      { mat: 'COBBLEMON_WEAKNESS_POLICY', qty: 1 },  // 64
      { mat: 'COBBLEMON_HEAVY_DUTY_BOOTS', qty: 1 }, // 65
      { mat: 'COBBLEMON_LIFE_ORB',      qty: 1 },   // 66
      { mat: 'COBBLEMON_EXPERT_BELT',   qty: 1 },   // 67
      { mat: 'COBBLEMON_SCOPE_LENS',    qty: 1 },   // 68
      { mat: 'COBBLEMON_QUICK_CLAW',    qty: 1 },   // 69
      { mat: 'COBBLEMON_ADAMANT_MINT',  qty: 1 },   // 70 HITO
      { mat: 'COBBLEMON_MODEST_MINT',   qty: 1 },   // 71
      { mat: 'COBBLEMON_JOLLY_MINT',    qty: 1 },   // 72
      { mat: 'COBBLEMON_TIMID_MINT',    qty: 1 },   // 73
      { mat: 'COBBLEMON_BOLD_MINT',     qty: 1 },   // 74
      { mat: 'COBBLEMON_EXP_CANDY_XL',  qty: 10 },  // 75 HITO

      // --- NIVELES 76-99: Elite ---
      { mat: 'COBBLEMON_GOLD_BOTTLE_CAP', qty: 1 }, // 76
      { mat: 'COBBLEMON_PP_MAX',        qty: 1 },   // 77
      { mat: 'COBBLEMON_ABILITY_PATCH',  qty: 1 },  // 78
      { mat: 'COBBLEMON_CALM_MINT',     qty: 1 },   // 79
      { mat: 'COBBLEMON_MASTER_BALL',   qty: 1 },   // 80 HITO
      { mat: 'COBBLEMON_GOLD_BOTTLE_CAP', qty: 3 }, // 81
      { mat: 'COBBLEMON_PRISM_SCALE',   qty: 1 },   // 82
      { mat: 'COBBLEMON_RARE_CANDY',    qty: 10 },  // 83
      { mat: 'COBBLEMON_KEY_STONE',     qty: 1 },   // 84
      { mat: 'COBBLEMON_OVAL_STONE',    qty: 1 },   // 85
      { mat: 'COBBLEMON_LUCK_INCENSE',  qty: 1 },   // 86
      { mat: 'COBBLEMON_LUCKY_EGG',     qty: 1 },   // 87
      { mat: 'COBBLEMON_BLACK_BELT',    qty: 1 },   // 88
      { mat: 'COBBLEMON_BLACK_GLASSES', qty: 1 },   // 89
      { mat: 'COBBLEMON_ABILITY_PATCH',  qty: 5 },  // 90 HITO
      { mat: 'COBBLEMON_ENIGMA_BERRY',  qty: 1 },   // 91
      { mat: 'COBBLEMON_LANSAT_BERRY',  qty: 1 },   // 92
      { mat: 'COBBLEMON_STARF_BERRY',   qty: 1 },   // 93
      { mat: 'COBBLEMON_MAX_REVIVE',    qty: 3 },   // 94
      { mat: 'COBBLEMON_MASTER_BALL',   qty: 5 },   // 95
      { mat: 'COBBLEMON_BOLD_MINT',     qty: 1 },   // 96
      { mat: 'COBBLEMON_HASTY_MINT',    qty: 1 },   // 97
      { mat: 'COBBLEMON_CAREFUL_MINT',  qty: 1 },   // 98
      { mat: 'COBBLEMON_IMPISH_MINT',   qty: 1 },   // 99

      // --- NIVEL 100: SHINY CHARM ---
      { mat: 'COBBLEMON_SHINY_CHARM',   qty: 1 },   // 100
    ];

    // ====================================================
    // PASE FREE: Recompensas cada 5 niveles
    // ====================================================
    const freeData = {
      5:  { mat: 'COBBLEMON_POKE_BALL',    qty: 5 },
      10: { mat: 'COBBLEMON_GREAT_BALL',    qty: 3 },
      15: { mat: 'COBBLEMON_SUPER_POTION',  qty: 2 },
      20: { mat: 'COBBLEMON_ULTRA_BALL',    qty: 3 },
      25: { mat: 'COBBLEMON_RARE_CANDY',    qty: 1 },
      30: { mat: 'COBBLEMON_REVIVE',        qty: 3 },
      35: { mat: 'COBBLEMON_EXP_CANDY_M',   qty: 1 },
      40: { mat: 'COBBLEMON_EXP_CANDY_L',   qty: 1 },
      45: { mat: 'COBBLEMON_MAX_REVIVE',    qty: 3 },
      50: { mat: 'COBBLEMON_RARE_CANDY',    qty: 5 },
      55: { mat: 'COBBLEMON_PP_UP',         qty: 1 },
      60: { mat: 'COBBLEMON_ULTRA_BALL',    qty: 3 },
      65: { mat: 'COBBLEMON_EXP_CANDY_XL',  qty: 1 },
      70: { mat: 'COBBLEMON_RARE_CANDY',    qty: 5 },
      75: { mat: 'COBBLEMON_MAX_REVIVE',    qty: 1 },
      80: { mat: 'COBBLEMON_RARE_CANDY',    qty: 1 },
      85: { mat: 'COBBLEMON_ULTRA_BALL',    qty: 3 },
      90: { mat: 'COBBLEMON_PP_MAX',        qty: 1 },
      95: { mat: 'COBBLEMON_RARE_CANDY',    qty: 5 },
      100:{ mat: 'COBBLEMON_RARE_CANDY',    qty: 1 },
    };

    // ====================================================
    // Puntos por decena (escalado suave)
    // ====================================================
    const pointsScale = [100, 150, 200, 250, 350, 450, 550, 700, 850, 1000];

    for (let i = 1; i <= 100; i++) {
      const decadeIdx = Math.min(Math.floor((i - 1) / 10), 9);
      const points = pointsScale[decadeIdx];
      const prem = premiumData[i - 1];
      const free = freeData[i] || null;

      this.tiers.push({
        id: i.toString(),
        freeRewards:    free ? [free.qty.toString()] : [],
        freeMaterial:   free ? free.mat : '',
        freeAmount:     free ? free.qty : 0,
        premiumRewards: [prem.qty.toString()],
        premiumMaterial: prem.mat,
        premiumAmount:  prem.qty,
        requiredPoints: points,
        lockedItem:     prem.mat,
        unlockedItem:   prem.mat,
        claimedItem:    prem.mat
      });
    }
  }

  save() {
    localStorage.setItem('bp_tiers', JSON.stringify(this.tiers));
  }

  getTier(id) {
    return this.tiers.find(t => t.id === id.toString());
  }

  updateTier(id, data) {
    const t = this.getTier(id);
    if (t) {
        Object.assign(t, data);
        this.save();
    }
  }

  resetTiers() {
      localStorage.removeItem('bp_tiers');
      this.tiers = [];
      this.initDefaultTiers();
      this.save();
  }

  /**
   * Importa un archivo YML de pase (Free o Premium).
   * Auto-detecta el tipo basándose en el campo 'name' del YAML.
   * Preserva los datos del otro pase (si importas free, no borra premium y viceversa).
   * @param {string} yamlText - Contenido del archivo YML
   * @returns {{ mode: string, tierCount: number, name: string }} Resumen de la importación
   */
  importFromYaml(yamlText) {
    const data = jsyaml.load(yamlText);
    if (!data || !data.tiers) throw new Error('El archivo no contiene tiers válidos');

    // Auto-detectar modo: si name contiene 'free' o 'gratu' → free, sino → premium
    const passName = (data.name || '').toLowerCase();
    const mode = (passName.includes('free') || passName.includes('gratu')) ? 'free' : 'premium';

    const defaultPoints = data['default-points-required'] || 100;
    const tierKeys = Object.keys(data.tiers).sort((a, b) => parseInt(a) - parseInt(b));
    const maxTier = Math.max(...tierKeys.map(k => parseInt(k)));

    // Ensure we have enough tiers in our internal array
    while (this.tiers.length < maxTier) {
      const i = this.tiers.length + 1;
      this.tiers.push({
        id: i.toString(),
        freeRewards: [], freeMaterial: '', freeAmount: 0,
        premiumRewards: [], premiumMaterial: '', premiumAmount: 0,
        requiredPoints: defaultPoints,
        lockedItem: 'COBBLEMON_POKE_BALL',
        unlockedItem: 'COBBLEMON_POKE_BALL',
        claimedItem: 'COBBLEMON_POKE_BALL'
      });
    }

    // Parse each tier from the YAML
    tierKeys.forEach(key => {
      const tierData = data.tiers[key];
      const tierIdx = parseInt(key);
      const internalTier = this.getTier(tierIdx);
      if (!internalTier) return;

      // Extract points
      const points = tierData['required-points'] || defaultPoints;
      internalTier.requiredPoints = points;

      // Extract rewards (array of IDs)
      const rewards = tierData.rewards || [];

      // Extract material from locked-tier-item (or unlocked/claimed as fallback)
      let material = '';
      if (tierData['locked-tier-item'] && tierData['locked-tier-item'].material) {
        material = tierData['locked-tier-item'].material;
      } else if (tierData['unlocked-tier-item'] && tierData['unlocked-tier-item'].material) {
        material = tierData['unlocked-tier-item'].material;
      } else if (tierData['claimed-tier-item'] && tierData['claimed-tier-item'].material) {
        material = tierData['claimed-tier-item'].material;
      }

      // Extract amount from tier items
      let amount = 1;
      if (tierData['locked-tier-item'] && tierData['locked-tier-item'].amount) {
        amount = tierData['locked-tier-item'].amount;
      }

      // Apply to the correct mode (free or premium) without touching the other
      if (mode === 'free') {
        internalTier.freeRewards = rewards.map(r => r.toString());
        internalTier.freeMaterial = material;
        internalTier.freeAmount = amount;
      } else {
        internalTier.premiumRewards = rewards.map(r => r.toString());
        internalTier.premiumMaterial = material;
        internalTier.premiumAmount = amount;
      }
    });

    this.save();
    return { mode, tierCount: tierKeys.length, name: data.name || mode };
  }

  /**
   * Genera tiers desde una configuración del asistente rápido.
   * @param {object} config - { totalLevels, pointsPerDecade: [100,150,...], rewardEvery, rewardCycle: ['MAT1','MAT2',...], mode }
   */
  generateFromWizard(config) {
    const { totalLevels = 100, pointsPerDecade = [], rewardEvery = 1, rewardCycle = [], mode = 'both' } = config;

    // Ensure we have enough tiers
    while (this.tiers.length < totalLevels) {
      const i = this.tiers.length + 1;
      this.tiers.push({
        id: i.toString(),
        freeRewards: [], freeMaterial: '', freeAmount: 0,
        premiumRewards: [], premiumMaterial: '', premiumAmount: 0,
        requiredPoints: 100,
        lockedItem: 'COBBLEMON_POKE_BALL',
        unlockedItem: 'COBBLEMON_POKE_BALL',
        claimedItem: 'COBBLEMON_POKE_BALL'
      });
    }

    // Trim if needed
    if (this.tiers.length > totalLevels) {
      this.tiers = this.tiers.slice(0, totalLevels);
    }

    for (let i = 0; i < totalLevels; i++) {
      const tier = this.tiers[i];
      const decadeIdx = Math.min(Math.floor(i / 10), pointsPerDecade.length - 1);
      tier.requiredPoints = pointsPerDecade[decadeIdx] || 100;

      const hasReward = rewardEvery > 0 && ((i + 1) % rewardEvery === 0);
      const cycleIdx = rewardCycle.length > 0 ? (Math.floor(i / rewardEvery) % rewardCycle.length) : 0;
      const material = rewardCycle[cycleIdx] || '';

      if (mode === 'free' || mode === 'both') {
        if (hasReward) {
          tier.freeRewards = ['1'];
          tier.freeMaterial = material;
          tier.freeAmount = 1;
        } else {
          tier.freeRewards = [];
          tier.freeMaterial = '';
          tier.freeAmount = 0;
        }
      }

      if (mode === 'premium' || mode === 'both') {
        if (hasReward || mode === 'premium') {
          tier.premiumRewards = ['1'];
          tier.premiumMaterial = material;
          tier.premiumAmount = 1;
        } else {
          tier.premiumRewards = [];
          tier.premiumMaterial = '';
          tier.premiumAmount = 0;
        }
      }
    }

    this.save();
  }

  exportToYaml(mode = 'premium') {
    const yamlObj = {
      name: mode === 'premium' ? 'Premium' : 'Free',
      'default-points-required': 100,
      'required-permission': mode === 'premium' ? '' : 'battlepass.free',
      items: {
        'doesnt-have-pass-item': {
          material: 'COBBLEMON_POKE_BALL',
          name: '&eTier %tier%',
          lore: ['', '&7Recompensas:', '%lore_addon%', '', '&7Estado: &eNo Elegible', mode === 'premium' ? '&cCompra el CobblePass Premium para' : '&cNo disponible', mode === 'premium' ? '&cdesbloquear estas recompensas.' : '']
        },
        'locked-tier-item': { material: 'COBBLEMON_POKE_BALL', name: '&eTier %tier%', lore: ['', '&7Recompensas:', '%lore_addon%', '', '&7Estado: &cBloqueado'] },
        'unlocked-tier-item': { material: 'COBBLEMON_POKE_BALL', name: '&aTier %tier%', lore: ['', '&7Recompensas:', '%lore_addon%', '', '&7Estado: &aDesbloqueado'] },
        'claimed-tier-item': { material: 'COBBLEMON_POKE_BALL', name: '&aTier %tier%', lore: ['', '&7Recompensas:', '%lore_addon%', '', '&7Estado: &aReclamado'] }
      },
      'tier-up-actions': [
        `[message] {&7Has alcanzado el &etier %tier% &7del &6&lCobblePass ${mode === 'premium' ? 'Premium' : 'Gratuito'}&7!}`
      ],
      tiers: {}
    };

    this.tiers.forEach(t => {
      const rewards = mode === 'premium' ? t.premiumRewards : t.freeRewards;
      const material = mode === 'premium' ? t.premiumMaterial : t.freeMaterial;
      
      // Auto-detección de cantidad para el YAML
      let amount = 1;
      if (rewards.length > 0) {
          const match = rewards[0].match(/\d+/);
          if (match) amount = parseInt(match[0]);
      }

      yamlObj.tiers[t.id] = {
        rewards: [...rewards],
        'required-points': t.requiredPoints,
        'locked-tier-item': { material: material, amount: amount },
        'unlocked-tier-item': { material: material, amount: amount },
        'claimed-tier-item': { material: material, amount: amount }
      };
    });

    return jsyaml.dump(yamlObj, { quotingType: "'", forceQuotes: true });
  }
}

const tierManager = new TierManager();
