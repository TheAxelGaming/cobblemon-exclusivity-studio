// ===========================================
// QuestManager.js - Lógica de Quests (Diarias/Semanales)
// ===========================================

class QuestManager {
  constructor() {
    const savedDaily = localStorage.getItem('bp_daily_quests');
    const savedWeekly = localStorage.getItem('bp_weekly_quests');

    if (savedDaily && savedWeekly) {
      try {
        this.dailyQuests = JSON.parse(savedDaily);
        this.weeklyQuests = JSON.parse(savedWeekly);
        return;
      } catch (e) { console.error("Error loading quests", e); }
    }

    this.dailyQuests = [
      { id: '1', type: 'COBBLEMON_CATCH', name: '&a&lCapturar Salvajes', requiredProgress: 3, incremental: true, material: 'COBBLEMON_POKE_BALL', lore: ['&7Captura &e3 Pokemon &7salvajes.'] },
      { id: '2', type: 'COBBLEMON_BERRY', name: '&a&lRecolector de Bayas', requiredProgress: 10, incremental: true, material: 'COBBLEMON_ORAN_BERRY', lore: ['&7Recolecta &e10 Bayas/Apricorns.'] },
      { id: '3', type: 'COBBLEMON_BATTLE', name: '&a&lCombate NPC', requiredProgress: 1, incremental: true, material: 'COBBLEMON_EXP_CANDY_S', lore: ['&7Gana &e1 combate &7contra un NPC.'] }
    ];

    this.weeklyQuests = [
      { id: '1', type: 'placeholder', placeholder: '%cobblemon:pokedex_amount_caught%', name: '&6&lMaestro Captura', requiredProgress: 50, points: 150, difficulty: 'hard', material: 'COBBLEMON_ULTRA_BALL', lore: ['&7Atrapa &e50 Pokemon &7a lo largo', '&7de la semana.'] },
      { id: '2', type: 'placeholder', placeholder: '%cobblemon_eggs_hatched%', name: '&6&lCriador Experto', requiredProgress: 1, points: 200, difficulty: 'hard', material: 'COBBLEMON_POKE_EGG', lore: ['&7Eclosiona &e1 huevo Pokemon', '&7para completar esta mision.'] },
      { id: '3', type: 'block-break', materialField: 'ancient_debris', name: '&6&lMinero Legendario', requiredProgress: 5, points: 250, difficulty: 'hard', material: 'ANCIENT_DEBRIS', lore: ['&7Pica &e5 escombros ancestrales.'] },
      { id: '4', type: 'craft', materialField: 'COBBLEMON_HEALER', name: '&6&lIngeniero Pokemon', requiredProgress: 1, points: 180, difficulty: 'hard', material: 'COBBLEMON_HEALER', lore: ['&7Fabrica &e1 Maquina de Curacion.'] }
    ];
  }

  save() {
    localStorage.setItem('bp_daily_quests', JSON.stringify(this.dailyQuests));
    localStorage.setItem('bp_weekly_quests', JSON.stringify(this.weeklyQuests));
  }

  getQuest(type, id) {
     const list = type === 'daily' ? this.dailyQuests : this.weeklyQuests;
     return list.find(q => q.id === id.toString());
  }

  getAdjacentQuestId(type, currentId, delta) {
    const list = type === 'daily' ? this.dailyQuests : this.weeklyQuests;
    const index = list.findIndex(q => q.id === currentId.toString());
    if (index === -1) return null;
    const nextIndex = index + delta;
    if (nextIndex >= 0 && nextIndex < list.length) {
      return list[nextIndex].id;
    }
    return null;
  }

  updateQuest(type, id, data) {
     const q = this.getQuest(type, id);
     if (q) {
        Object.assign(q, data);
        this.save();
     }
  }

  addQuest(type) {
      const list = type === 'daily' ? this.dailyQuests : this.weeklyQuests;
      const newId = (Math.max(0, ...list.map(q => parseInt(q.id))) + 1).toString();
      const newQuest = {
          id: newId,
          type: 'COBBLEMON_CATCH',
          name: 'Nueva Misión',
          requiredProgress: 1,
          material: 'COBBLEMON_POKE_BALL',
          lore: ['&7Nueva misión por configurar.']
      };
      list.push(newQuest);
      this.save();
      return newId;
  }

  deleteQuest(type, id) {
      if (type === 'daily') {
          this.dailyQuests = this.dailyQuests.filter(q => q.id !== id.toString());
      } else {
          this.weeklyQuests = this.weeklyQuests.filter(q => q.id !== id.toString());
      }
      this.save();
  }

  exportToYaml(type) {
    const list = type === 'daily' ? this.dailyQuests : this.weeklyQuests;
    const yamlObj = {
       'actions-version': 2,
       quests: {}
    };

    list.forEach(q => {
       const qObj = {
          type: q.type,
          name: q.name,
          'required-progress': q.requiredProgress
       };

       if (q.incremental !== undefined) qObj.incremental = q.incremental;
       if (q.placeholder) qObj.placeholder = q.placeholder;
       if (q.materialField) qObj.material = q.materialField;
       if (q.variable) qObj.variable = q.variable;
       if (q.points) qObj.points = q.points;
       if (q.difficulty) qObj.difficulty = q.difficulty;

       qObj.item = {
          material: q.material,
          name: q.name,
          lore: [...q.lore, '', type==='daily' ? '&7Progreso: &a%total_progress%&7/'+q.requiredProgress : '%progress_bar% &7(&a%percentage_progress%&7)']
       };

       yamlObj.quests[q.id] = qObj;
    });

    return jsyaml.dump(yamlObj, { quotingType: "'", forceQuotes: true });
  }
}

const questManager = new QuestManager();
