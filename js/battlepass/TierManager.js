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

    for (let i = 1; i <= 100; i++) {
        // Asignar puntos por defecto basados en premium.yml
        let points = 100;
        if (i > 10) points = 150;
        if (i > 20) points = 200;
        if (i > 30) points = 250;
        if (i > 40) points = 350;
        if (i > 50) points = 450;
        if (i > 60) points = 550;
        if (i > 70) points = 700;
        if (i > 80) points = 850;
        if (i > 90) points = 1000;

        let locked = 'COBBLEMON_POKE_BALL';
        
        // Recompensas vacías por defecto a petición del usuario
        let premiumRewards = []; 
        let freeRewards = [];

        const defMat = ''; // Sin material por defecto para que salgan vacíos
        this.tiers.push({
            id: i.toString(),
            freeRewards: freeRewards,
            freeMaterial: defMat,
            freeAmount: 0,
            premiumRewards: premiumRewards,
            premiumMaterial: defMat,
            premiumAmount: 0,
            requiredPoints: points,
            lockedItem: 'COBBLEMON_POKE_BALL', // Fallbacks internos
            unlockedItem: 'COBBLEMON_POKE_BALL',
            claimedItem: 'COBBLEMON_POKE_BALL'
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
