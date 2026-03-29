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
        
        // Ensure new fields exist for old saved data
        this.dailyQuests.forEach(q => {
          if (!q.difficulty) q.difficulty = 'easy';
          if (q.permanent === undefined) q.permanent = false;
        });

        const savedStrategy = localStorage.getItem('bp_strategy');
        this.strategy = savedStrategy ? JSON.parse(savedStrategy) : {
            enabled: true,
            easy: 3,
            medium: 2,
            hard: 1
        };

        return;
      } catch (e) { console.error("Error loading quests", e); }
    }

    this.dailyQuests = [
      { id: '1', type: 'COBBLEMON_CATCH', name: '&a&lCapturar Salvajes', requiredProgress: 3, incremental: true, material: 'COBBLEMON_POKE_BALL', lore: ['&7Captura &e3 Pokemon &7salvajes.'], difficulty: 'easy', permanent: false },
      { id: '2', type: 'COBBLEMON_BERRY', name: '&a&lRecolector de Bayas', requiredProgress: 10, incremental: true, material: 'COBBLEMON_ORAN_BERRY', lore: ['&7Recolecta &e10 Bayas/Apricorns.'], difficulty: 'easy', permanent: false },
      { id: '3', type: 'COBBLEMON_BATTLE', name: '&a&lCombate NPC', requiredProgress: 1, incremental: true, material: 'COBBLEMON_EXP_CANDY_S', lore: ['&7Gana &e1 combate &7contra un NPC.'], difficulty: 'medium', permanent: false }
    ];

    this.weeklyQuests = [
      { id: '1', type: 'placeholder', placeholder: '%cobblemon:pokedex_amount_caught%', name: '&6&lMaestro Captura', requiredProgress: 50, points: 150, difficulty: 'hard', material: 'COBBLEMON_ULTRA_BALL', lore: ['&7Atrapa &e50 Pokemon &7a lo largo', '&7de la semana.'], permanent: false },
      { id: '2', type: 'placeholder', placeholder: '%cobblemon_eggs_hatched%', name: '&6&lCriador Experto', requiredProgress: 1, points: 200, difficulty: 'hard', material: 'COBBLEMON_POKE_EGG', lore: ['&7Eclosiona &e1 huevo Pokemon', '&7para completar esta mision.'], permanent: false },
      { id: '3', type: 'block-break', materialField: 'ancient_debris', name: '&6&lMinero Legendario', requiredProgress: 5, points: 250, difficulty: 'hard', material: 'ANCIENT_DEBRIS', lore: ['&7Pica &e5 escombros ancestrales.'], permanent: false },
      { id: '4', type: 'craft', materialField: 'COBBLEMON_HEALER', name: '&6&lIngeniero Pokemon', requiredProgress: 1, points: 180, difficulty: 'hard', material: 'COBBLEMON_HEALER', lore: ['&7Fabrica &e1 Maquina de Curacion.'], permanent: false }
    ];

    this.strategy = {
        enabled: true,
        easy: 3,
        medium: 2,
        hard: 1
    };
  }

  save() {
    localStorage.setItem('bp_daily_quests', JSON.stringify(this.dailyQuests));
    localStorage.setItem('bp_weekly_quests', JSON.stringify(this.weeklyQuests));
    localStorage.setItem('bp_strategy', JSON.stringify(this.strategy));
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
          lore: ['&7Nueva misión por configurar.'],
          difficulty: 'easy',
          permanent: false
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
    if (type === 'settings') {
      const permanentIds = this.dailyQuests.filter(q => q.permanent).map(q => q.id);
      const settingsObj = {
        'daily-quest-difficulty': {
          enabled: this.strategy.enabled,
          strategy: {
            easy: this.strategy.easy,
            medium: this.strategy.medium,
            hard: this.strategy.hard
          }
        },
        'permanent-daily-quest-ids': permanentIds
      };
      return jsyaml.dump(settingsObj, { quotingType: "'", forceQuotes: true });
    }

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

  /**
   * Importa un archivo YML de misiones (daily o weekly).
   * Auto-detecta el tipo basándose en heurísticas:
   * - Si las quests tienen campos 'points' o 'difficulty' → weekly
   * - Si las quests son simples con 'incremental' → daily
   * - También se puede forzar un tipo con el segundo parámetro
   * @param {string} yamlText - Contenido del archivo YML
   * @param {string|null} forceType - Forzar 'daily' o 'weekly' (null = auto-detectar)
   * @param {string} fileName - Nombre del archivo original para ayudar a detectar
   * @returns {{ type: string, questCount: number }} Resumen de la importación
   */
  importFromYaml(yamlText, forceType = null, fileName = '') {
    const data = jsyaml.load(yamlText);
    if (!data || !data.quests) throw new Error('El archivo no contiene quests válidos');

    const questKeys = Object.keys(data.quests).sort((a, b) => parseInt(a) - parseInt(b));
    
    // Auto-detectar tipo
    let detectedType = forceType;
    if (!detectedType) {
      const lowerName = fileName.toLowerCase();
      if (lowerName.includes('daily') || lowerName.includes('diaria')) {
        detectedType = 'daily';
      } else if (lowerName.includes('week') || lowerName.includes('semanal')) {
        detectedType = 'weekly';
      } else {
        // Heuristic: weekly quests usually have 'points' or 'difficulty' fields
        const hasWeeklyFields = questKeys.some(key => {
          const q = data.quests[key];
          return q.points !== undefined || q.difficulty !== undefined;
        });
        // Heuristic: daily quests usually have 'incremental: true'
        const hasDailyFields = questKeys.some(key => {
          const q = data.quests[key];
          return q.incremental === true;
        });

        if (hasWeeklyFields && !hasDailyFields) {
          detectedType = 'weekly';
        } else {
          detectedType = 'daily';
        }
      }
    }

    const importedQuests = [];

    questKeys.forEach(key => {
      const qData = data.quests[key];
      
      const quest = {
        id: key.toString(),
        type: qData.type || 'COBBLEMON_CATCH',
        name: qData.name || 'Misión Importada',
        requiredProgress: qData['required-progress'] || 1,
        material: (qData.item && qData.item.material) || qData.material || 'COBBLEMON_POKE_BALL',
        lore: [],
        difficulty: qData.difficulty || 'easy',
        permanent: false
      };

      // Extract lore from the item block (skip the last progress line)
      if (qData.item && qData.item.lore) {
        quest.lore = qData.item.lore.filter(line => 
          !line.includes('%total_progress%') && 
          !line.includes('%progress_bar%') && 
          !line.includes('%percentage_progress%') &&
          line !== ''
        );
      }

      // Optional fields
      if (qData.incremental !== undefined) quest.incremental = qData.incremental;
      if (qData.placeholder) quest.placeholder = qData.placeholder;
      if (qData.points) quest.points = qData.points;
      if (qData.material && qData.type === 'block-break') quest.materialField = qData.material;
      if (qData.material && qData.type === 'craft') quest.materialField = qData.material;

      importedQuests.push(quest);
    });

    // Replace the quests of the detected type
    if (detectedType === 'daily') {
      this.dailyQuests = importedQuests;
    } else {
      this.weeklyQuests = importedQuests;
    }

    this.save();
    return { type: detectedType, questCount: importedQuests.length };
  }
}

const questManager = new QuestManager();
