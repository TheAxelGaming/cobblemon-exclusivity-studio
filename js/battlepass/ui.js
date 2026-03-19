// ============================================
// ui.js - BattlePass UI Interactions
// ============================================

const bpState = {
  activeTab: localStorage.getItem('bp_activeTab') || 'tiers',  // 'tiers' | 'quests' | 'events' | 'settings'
  questSubTab: localStorage.getItem('bp_questSubTab') || 'daily', // 'daily' | 'weekly'
  selectedId: null,
  tierPage: parseInt(localStorage.getItem('bp_tierPage')) || 0, // 0 = Tiers 1-7, 1 = Tiers 8-14, etc.
  calcExpanded: localStorage.getItem('bp_calcExpanded') === 'true' // Retraído por defecto (false)
};
const progressManager = new ProgressManager();
const eventManager = new EventManager();

window.toggleProgressCalc = () => {
    bpState.calcExpanded = !bpState.calcExpanded;
    localStorage.setItem('bp_calcExpanded', bpState.calcExpanded);
    
    const panel = document.getElementById('bp-progress-calculator');
    const arrow = document.getElementById('bp-calc-arrow');
    
    if (panel) {
        panel.style.display = bpState.calcExpanded ? 'flex' : 'none';
        if (bpState.calcExpanded && window.updateCalculator) window.updateCalculator();
    }
    
    if (arrow) {
        arrow.style.transform = bpState.calcExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }
};

window.updateCalculator = () => {
  const weeksInput = document.getElementById('bp-calc-weeks');
  const ratioInput = document.getElementById('bp-calc-ratio');
  if(!weeksInput || !ratioInput) return;

  const weeks = parseInt(weeksInput.value) || 1;
  const ratio = (parseInt(ratioInput.value) || 60) / 100;
  
  // Get counts from managers
  const dailyCount = questManager.dailyQuests.length;
  const weeklyCount = questManager.weeklyQuests.length;
  const eventPoints = eventManager.getTotalEventPoints();

  const results = progressManager.calculate(weeks, dailyCount, weeklyCount, ratio, eventPoints);
  
  if (results) {
    document.getElementById('bp-res-daily').textContent = results.dailyPoints;
    document.getElementById('bp-res-weekly').textContent = results.weeklyPoints;

    // Handle Alerts
    const alertsDiv = document.getElementById('bp-calc-alerts');
    if(alertsDiv) {
      alertsDiv.innerHTML = '';
      
      // Barra de distribución de XP
      const barContainer = document.createElement('div');
      barContainer.style.height = '12px';
      barContainer.style.background = '#161B27';
      barContainer.style.borderRadius = '6px';
      barContainer.style.overflow = 'hidden';
      barContainer.style.display = 'flex';
      barContainer.style.margin = '8px 0';
      barContainer.style.border = '1px solid #2A3347';

      const dailyWidth = (results.dailyPoints * dailyCount * 7 * weeks / results.totalXpNeeded) * 100;
      const weeklyWidth = (results.weeklyPoints * weeklyCount * weeks / results.totalXpNeeded) * 100;
      const eventWidth = (eventPoints / results.totalXpNeeded) * 100;

      barContainer.innerHTML = `
        <div style="width:${dailyWidth}%; background:#A6E22E;" title="Diarias: ${Math.round(dailyWidth)}%"></div>
        <div style="width:${weeklyWidth}%; background:#F5C518;" title="Semanales: ${Math.round(weeklyWidth)}%"></div>
        <div style="width:${eventWidth}%; background:#FF5722;" title="Eventos: ${Math.round(eventWidth)}%"></div>
      `;
      alertsDiv.appendChild(barContainer);

      results.alerts.forEach(alert => {
        const div = document.createElement('div');
        div.style.fontSize = '10px';
        div.style.padding = '4px 8px';
        div.style.borderRadius = '4px';
        div.style.marginBottom = '4px';
        div.style.background = alert.type === 'danger' ? 'rgba(239,83,80,0.1)' : (alert.type === 'warning' ? 'rgba(245,197,24,0.1)' : 'rgba(74,144,217,0.1)');
        div.style.color = alert.type === 'danger' ? '#EF5350' : (alert.type === 'warning' ? '#F5C518' : '#4A90D9');
        div.style.border = `1px solid ${alert.type === 'danger' ? 'rgba(239,83,80,0.2)' : (alert.type === 'warning' ? 'rgba(245,197,24,0.2)' : 'rgba(74,144,217,0.2)')}`;
        div.textContent = alert.message;
        alertsDiv.appendChild(div);
      });
    }
  }
};

// ==========================================
// PROYECTO (.studio / JSON)
// ==========================================

window.exportStudioProject = () => {
    const project = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        tiers: tierManager.tiers,
        dailyQuests: questManager.dailyQuests,
        weeklyQuests: questManager.weeklyQuests,
        events: eventManager.events
    };

    const data = JSON.stringify(project, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cobblemon_studio_project_${new Date().toISOString().split('T')[0]}.studio`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('💾', 'Proyecto guardado correctamente');
};

window.importStudioProject = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const project = JSON.parse(e.target.result);
            if (!project.tiers || !project.dailyQuests || !project.weeklyQuests) {
                throw new Error('Formato de proyecto inválido');
            }

            // Actualizar Managers
            tierManager.tiers = project.tiers;
            questManager.dailyQuests = project.dailyQuests;
            questManager.weeklyQuests = project.weeklyQuests;
            if (project.events) eventManager.events = project.events;

            // Guardar en LocalStorage
            tierManager.save();
            questManager.save();

            // Refrescar UI
            bpRenderList();
            bpRenderEditor();
            showToast('✅', 'Proyecto cargado con éxito');
        } catch (err) {
            console.error('Error cargando proyecto:', err);
            showToast('❌', 'Error al cargar el proyecto.');
        }
    };
    reader.readAsText(file);
};

// ==========================================
// PROYECTO (.studio / JSON / MICRO-CODE)
// ==========================================

const PROJECT_MAP = {
    t: 'tiers', d: 'dailyQuests', w: 'weeklyQuests',
    i: 'id', n: 'name', type: 'type', rp: 'requiredProgress', ic: 'incremental', m: 'material', l: 'lore',
    p: 'points', df: 'difficulty', ph: 'placeholder', mf: 'materialField',
    fr: 'freeRewards', fm: 'freeMaterial', fa: 'freeAmount',
    pr: 'premiumRewards', pm: 'premiumMaterial', pa: 'premiumAmount', rpts: 'requiredPoints'
};

const invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
const PROJECT_MAP_INV = invertMap(PROJECT_MAP);

window.exportProjectCode = async () => {
    // 1. Preparar datos mínimos (Micro-JSON)
    const minimize = (obj, map) => {
        if (Array.isArray(obj)) return obj.map(item => minimize(item, map));
        if (typeof obj !== 'object' || obj === null) return obj;
        
        const mini = {};
        for (let key in obj) {
            let val = obj[key];
            // Omitir valores vacíos/por defecto para ahorrar espacio
            if (val === null || val === undefined || val === '' || (Array.isArray(val) && val.length === 0)) continue;
            
            const shortKey = map[key] || key;
            mini[shortKey] = minimize(val, map);
        }
        return mini;
    };

    const projectData = {
        tiers: tierManager.tiers,
        dailyQuests: questManager.dailyQuests,
        weeklyQuests: questManager.weeklyQuests,
        events: eventManager.events
    };

    const miniProject = minimize(projectData, PROJECT_MAP_INV);
    const json = JSON.stringify(miniProject);
    
    try {
        const zip = new JSZip();
        zip.file("p", json); // "p" por "project"
        
        const code = await zip.generateAsync({
            type: "base64",
            compression: "DEFLATE",
            compressionOptions: { level: 9 }
        });
        
        navigator.clipboard.writeText(code).then(() => {
            showToast('🚀', 'Micro-Código copiado (Ultra corto)');
        }).catch(err => {
            prompt('Copia este Micro-Código:', code);
        });
    } catch (err) {
        console.error('Error Micro-Code:', err);
        showToast('❌', 'Error al generar el código.');
    }
};

window.importProjectCode = async () => {
    const code = prompt('Pega aquí el código del proyecto:');
    if (!code) return;

    try {
        let json;
        let isMini = false;
        
        try {
            const zip = await new JSZip().loadAsync(code, { base64: true });
            // Intentamos buscar "p" (nuevo formato mini) o "project.json" (formato anterior comprimido)
            const file = zip.file("p") || zip.file("project.json");
            if (file) {
                json = await file.async("string");
                if (zip.file("p")) isMini = true;
            }
        } catch (e) {
            // Fallback: Base64 directo (formato original v1)
            json = decodeURIComponent(escape(atob(code)));
        }

        if (!json) throw new Error('Inválido');
        
        let data = JSON.parse(json);

        // Si es mini, reconstruir con mapeo y valores por defecto
        if (isMini) {
            const maximize = (obj, map) => {
                if (Array.isArray(obj)) return obj.map(item => maximize(item, map));
                if (typeof obj !== 'object' || obj === null) return obj;
                
                const full = {};
                for (let shortKey in obj) {
                    const longKey = map[shortKey] || shortKey;
                    full[longKey] = maximize(obj[shortKey], map);
                }
                return full;
            };
            data = maximize(data, PROJECT_MAP);

            // Asegurar campos básicos de Tiers si faltan por la purga
            if (data.tiers) {
                data.tiers.forEach(t => {
                    t.freeRewards = t.freeRewards || [];
                    t.premiumRewards = t.premiumRewards || [];
                    t.freeMaterial = t.freeMaterial || '';
                    t.premiumMaterial = t.premiumMaterial || '';
                    t.freeAmount = t.freeAmount || 0;
                    t.premiumAmount = t.premiumAmount || 0;
                });
            }
        }

        if (!data.tiers && !data.t) throw new Error('Formato roto');

        tierManager.tiers = data.tiers || data.t;
        questManager.dailyQuests = data.dailyQuests || data.d;
        questManager.weeklyQuests = data.weeklyQuests || data.w;
        if (data.events || data.e) eventManager.events = data.events || data.e;

        tierManager.save();
        questManager.save();
        
        bpRenderList();
        bpRenderEditor();
        showToast('✅', 'Proyecto restaurado con éxito');
    } catch (err) {
        console.error('Error import:', err);
        showToast('❌', 'Código inválido o incompatible.');
    }
};


document.addEventListener('DOMContentLoaded', () => {
    
  // Navbar Tabs
  const tabExc = document.getElementById('tab-exclusivity');
  const tabBP = document.getElementById('tab-battlepass');
  const viewExc = document.getElementById('exclusivity-view');
  const viewBP = document.getElementById('battlepass-view');

  tabExc.addEventListener('click', () => {
    tabExc.classList.add('active');
    tabExc.style.background = '#2A3347';
    tabExc.style.color = '#fff';
    tabBP.classList.remove('active');
    tabBP.style.background = 'transparent';
    tabBP.style.color = '#6B7FA3';

    viewExc.style.display = 'flex';
    viewBP.style.display = 'none';

    // Button Visibility Logic
    if (document.getElementById('btn-export-bp-zip')) document.getElementById('btn-export-bp-zip').style.display = 'none';
    if (document.getElementById('btn-gen-pack')) document.getElementById('btn-gen-pack').style.display = 'inline-flex';
    if (document.getElementById('sel-count-badge')) document.getElementById('sel-count-badge').style.display = 'inline-flex';

    if (window.renderList) window.renderList();
    localStorage.setItem('bp_view', 'exclusivity');
  });

  tabBP.addEventListener('click', () => {
    tabBP.classList.add('active');
    tabBP.style.background = '#2A3347';
    tabBP.style.color = '#fff';
    tabExc.classList.remove('active');
    tabExc.style.background = 'transparent';
    tabExc.style.color = '#6B7FA3';

    viewExc.style.display = 'none';
    viewBP.style.display = 'flex';
    
    // Button Visibility Logic
    if (document.getElementById('btn-export-bp-zip')) document.getElementById('btn-export-bp-zip').style.display = 'inline-flex';
    if (document.getElementById('btn-gen-pack')) document.getElementById('btn-gen-pack').style.display = 'none';
    if (document.getElementById('sel-count-badge')) document.getElementById('sel-count-badge').style.display = 'none';

    localStorage.setItem('bp_view', 'battlepass');
    bpRenderList();
  });

  // Restore View Persistence
  const savedView = localStorage.getItem('bp_view');
  if (savedView === 'battlepass') {
      tabBP.click();
  } else {
      tabExc.click(); // Ensure buttons visibility correct in initial state
  }

  // Sidebar Tabs
  document.getElementById('bp-tab-tiers').addEventListener('click', (e) => {
     document.getElementById('bp-tab-quests').classList.remove('active');
     e.target.classList.add('active');
     bpState.activeTab = 'tiers';
     bpState.selectedId = null;
     localStorage.setItem('bp_activeTab', 'tiers');
     bpRenderList();
     bpRenderEditor();
  });
  document.getElementById('bp-tab-quests').addEventListener('click', (e) => {
     document.getElementById('bp-tab-tiers').classList.remove('active');
     document.getElementById('bp-tab-events').classList.remove('active');
     document.getElementById('bp-tab-settings').classList.remove('active');
     e.target.classList.add('active');
     bpState.activeTab = 'quests';
     bpState.selectedId = null;
     localStorage.setItem('bp_activeTab', 'quests');
     bpRenderList();
     bpRenderEditor();
  });

  document.getElementById('bp-tab-events').addEventListener('click', (e) => {
     document.getElementById('bp-tab-tiers').classList.remove('active');
     document.getElementById('bp-tab-quests').classList.remove('active');
     document.getElementById('bp-tab-settings').classList.remove('active');
     e.target.classList.add('active');
     bpState.activeTab = 'events';
     bpState.selectedId = null;
     localStorage.setItem('bp_activeTab', 'events');
     bpRenderList();
     bpRenderEditor();
  });

  // Sync Sidebar Tab Active Class on Load
  if (bpState.activeTab === 'quests') {
      document.getElementById('bp-tab-tiers').classList.remove('active');
      document.getElementById('bp-tab-quests').classList.add('active');
  } else if (bpState.activeTab === 'events') {
      document.getElementById('bp-tab-tiers').classList.remove('active');
      document.getElementById('bp-tab-events').classList.add('active');
  } else {
      document.getElementById('bp-tab-quests').classList.remove('active');
      document.getElementById('bp-tab-tiers').classList.add('active');
  }

  // Iniciar listeners del calculador
  const weeksInput = document.getElementById('bp-calc-weeks');
  const ratioInput = document.getElementById('bp-calc-ratio');
  
  if(weeksInput) weeksInput.addEventListener('input', window.updateCalculator);
  if(ratioInput) ratioInput.addEventListener('input', window.updateCalculator);

  // Proyecto (Guardar/Cargar)
  const btnSaveProject = document.getElementById('btn-save-project');
  const btnLoadProject = document.getElementById('btn-load-project');
  const inputLoadProject = document.getElementById('input-load-project');

  if (btnSaveProject) btnSaveProject.addEventListener('click', () => window.exportStudioProject());
  if (btnLoadProject) btnLoadProject.addEventListener('click', () => inputLoadProject.click());
  if (inputLoadProject) {
      inputLoadProject.addEventListener('change', (e) => {
          if (e.target.files.length > 0) {
              window.importStudioProject(e.target.files[0]);
              e.target.value = ''; 
          }
      });
  }

  // Código (Copiar/Pegar)
  const btnCopyCode = document.getElementById('btn-copy-code');
  const btnImportCode = document.getElementById('btn-import-code');

  if (btnCopyCode) btnCopyCode.addEventListener('click', () => window.exportProjectCode());
  if (btnImportCode) btnImportCode.addEventListener('click', () => window.importProjectCode());

  document.getElementById('btn-apply-calc').addEventListener('click', () => {
    const dailyPts = parseInt(document.getElementById('bp-res-daily').textContent);
    const weeklyPts = parseInt(document.getElementById('bp-res-weekly').textContent);

    if (isNaN(dailyPts) || isNaN(weeklyPts)) return;

    // Apply to all daily quests
    questManager.dailyQuests.forEach(q => q.points = dailyPts);
    // Apply to all weekly quests
    questManager.weeklyQuests.forEach(q => q.points = weeklyPts);

    showToast('📈', 'Puntos actualizados en todas las misiones');
    bpRenderList();
    bpRenderEditor();
  });

  // Export Buttons
  document.getElementById('btn-export-premium').addEventListener('click', () => {
      const yaml = tierManager.exportToYaml('premium');
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'premium.yml';
  });

  document.getElementById('btn-export-free').addEventListener('click', () => {
      const yaml = tierManager.exportToYaml('free');
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'free.yml';
  });
  
  document.getElementById('btn-export-daily').addEventListener('click', () => {
      const yaml = questManager.exportToYaml('daily');
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'daily-quests.yml';
  });

  document.getElementById('btn-export-weekly').addEventListener('click', () => {
      const yaml = questManager.exportToYaml('weekly');
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'week-1-quests.yml';
  });

  document.getElementById('btn-export-events').addEventListener('click', () => {
      const yaml = eventManager.generateYaml();
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'events.yml';
  });

  document.getElementById('btn-export-settings').addEventListener('click', () => {
      const yaml = questManager.exportToYaml('settings');
      document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yaml}</pre>`;
      document.getElementById('bp-preview-filename').textContent = 'settings.yml';
  });

  document.getElementById('bp-btn-copy-yaml').addEventListener('click', () => {
      const text = document.getElementById('bp-yaml-preview').innerText;
      if(text.includes('aparecerá aquí')) return;
      navigator.clipboard.writeText(text)
         .then(() => showToast('✓', 'YAML copiado!'))
         .catch(() => showToast('❌', 'Error al copiar'));
  });

  // ZIP Export Logic
  const updateExportBtnText = () => {
    const includeTiers = document.getElementById('check-export-tiers').checked;
    const includeQuests = document.getElementById('check-export-quests').checked;
    const btnText = document.getElementById('btn-export-bp-text');
    
    if (includeTiers && includeQuests) {
      btnText.textContent = 'Descargar pase y misiones';
    } else if (includeTiers) {
      btnText.textContent = 'Descargar pase';
    } else if (includeQuests) {
      btnText.textContent = 'Descargar misiones';
    } else {
      btnText.textContent = 'Nada seleccionado';
    }
  };

  document.getElementById('check-export-tiers').addEventListener('change', updateExportBtnText);
  document.getElementById('check-export-quests').addEventListener('change', updateExportBtnText);

  document.getElementById('bp-tab-settings').addEventListener('click', (e) => {
     document.getElementById('bp-tab-tiers').classList.remove('active');
     document.getElementById('bp-tab-quests').classList.remove('active');
     e.target.classList.add('active');
     bpState.activeTab = 'settings';
     bpState.selectedId = 'settings'; 
     localStorage.setItem('bp_activeTab', 'settings');
     bpRenderList();
     bpRenderEditor();
  });

  document.getElementById('btn-export-bp-zip').onclick = async () => {
    const includeTiers = document.getElementById('check-export-tiers').checked;
    const includeQuests = document.getElementById('check-export-quests').checked;

    if (!includeTiers && !includeQuests) {
      showToast('⚠️', 'Selecciona al menos una opción para exportar');
      return;
    }

    if (includeQuests && confirm('¿Deseas actualizar la Estrategia de Dificultad en settings.yml?')) {
        const yamlSettings = questManager.exportToYaml('settings');
        document.getElementById('bp-yaml-preview').innerHTML = `<pre style="color:#A6E22E;font-size:12px;margin:0;font-family:'JetBrains Mono',monospace;">${yamlSettings}</pre>`;
        document.getElementById('bp-preview-filename').textContent = 'settings.yml';
        showToast('⚙️', 'Revisando estrategia en settings.yml');
    }

    const zip = new JSZip();
    const folder = zip.folder("battlepass");
    
    if (includeTiers) {
      const passes = folder.folder("passes");
      passes.file("free.yml", tierManager.exportToYaml('free'));
      passes.file("premium.yml", tierManager.exportToYaml('premium'));
    }

    if (includeQuests) {
      const quests = folder.folder("quests");
      quests.file("daily.yml", questManager.exportToYaml('daily'));
      quests.file("weekly.yml", questManager.exportToYaml('weekly'));
      folder.file("settings.yml", questManager.exportToYaml('settings'));
    }

    const content = await zip.generateAsync({type:"blob"});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(content);
    link.download = "battlepass_configs.zip";
    link.click();
    showToast('📦', 'Pack ZIP generado!');
  };

});

window.bpToggleStrategy = function() {
    questManager.strategy.enabled = !questManager.strategy.enabled;
    questManager.save();
    bpRenderEditor();
    showToast('⚙️', `Estrategia ${questManager.strategy.enabled ? 'Activada' : 'Desactivada'}`);
};

window.bpUpdateStrategy = function() {
    questManager.strategy.easy = parseInt(document.getElementById('st-easy').value) || 0;
    questManager.strategy.medium = parseInt(document.getElementById('st-medium').value) || 0;
    questManager.strategy.hard = parseInt(document.getElementById('st-hard').value) || 0;
    questManager.save();
    showToast('✓', 'Estrategia guardada');
};

window.bpAdminCmd = function(type) {
    const cmd = type === 'refresh' ? '/bpa refresh daily quests' : '/bpa sync daily quests';
    navigator.clipboard.writeText(cmd).then(() => {
        showToast('🚀', 'Comando copiado!');
    });
};

function bpRenderList() {
    const list = document.getElementById('bp-list');
    list.innerHTML = '';

    // YAML Buttons Visibility Logic
    const tierYamlBtns = document.getElementById('bp-yaml-export-tiers');
    const questYamlBtns = document.getElementById('bp-yaml-export-quests');
    const calcHeader = document.getElementById('bp-calc-header');
    const calcPanel = document.getElementById('bp-progress-calculator');
    const calcArrow = document.getElementById('bp-calc-arrow');
    
    if (bpState.activeTab === 'tiers') {
       if (tierYamlBtns) tierYamlBtns.style.display = 'flex';
       if (questYamlBtns) questYamlBtns.style.display = 'none';
       if (calcHeader) calcHeader.style.display = 'none';
       if (calcPanel) calcPanel.style.display = 'none';
    } else if (bpState.activeTab === 'quests') {
       if (tierYamlBtns) tierYamlBtns.style.display = 'none';
       if (questYamlBtns) questYamlBtns.style.display = 'flex';
       
       if (calcHeader) calcHeader.style.display = 'flex';
       if (calcPanel) {
         calcPanel.style.display = bpState.calcExpanded ? 'flex' : 'none';
         if (calcArrow) calcArrow.style.transform = bpState.calcExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
         if (bpState.calcExpanded && window.updateCalculator) window.updateCalculator();
       }
    } else if (bpState.activeTab === 'events') {
        if (tierYamlBtns) tierYamlBtns.style.display = 'none';
        if (questYamlBtns) questYamlBtns.style.display = 'none';
        if (calcHeader) calcHeader.style.display = 'none';
        if (calcPanel) calcPanel.style.display = 'none';
     } else {
       if (tierYamlBtns) tierYamlBtns.style.display = 'none';
       if (questYamlBtns) questYamlBtns.style.display = 'none';
       if (calcHeader) calcHeader.style.display = 'none';
       if (calcPanel) calcPanel.style.display = 'none';
    }

    if (bpState.activeTab === 'tiers') {
       // Botón de Reiniciar en Tiers
       const resetDiv = document.createElement('div');
       resetDiv.style.padding = '0 10px 10px';
       resetDiv.innerHTML = `
         <button class="btn-ghost" onclick="bpResetTiers()" style="width:100%; border-color:rgba(244,67,54,0.3); color:#f44336; font-size:11px; display:flex; align-items:center; justify-content:center; gap:6px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/></svg>
            REINICIAR TODO EL PASE
         </button>
       `;
       list.appendChild(resetDiv);

       tierManager.tiers.forEach(t => {
           const div = document.createElement('div');
           div.className = `bp-list-item ${bpState.selectedId === t.id ? 'active' : ''}`;
           div.innerHTML = `
             <div class="bp-item-icon" style="color:#F5C518">⭐</div>
             <div class="bp-item-details">
                <div class="bp-item-title">Tier ${t.id}</div>
                <div class="bp-item-sub">${t.requiredPoints} Puntos</div>
             </div>
           `;
           div.onclick = () => { bpState.selectedId = t.id; bpRenderList(); bpRenderEditor(); };
           list.appendChild(div);
       });
    } else if (bpState.activeTab === 'quests') {
       // Quests
       const tgl = document.createElement('div');
       tgl.style.display = 'flex'; tgl.style.gap = '5px'; tgl.style.marginBottom = '10px';
       tgl.innerHTML = `
         <button class="cat-pill ${bpState.questSubTab==='daily'?'active':''}" onclick="bpSetQuestSub('daily')" style="font-size:11px;padding:4px 8px;flex:1;">Diarias</button>
         <button class="cat-pill ${bpState.questSubTab==='weekly'?'active':''}" onclick="bpSetQuestSub('weekly')" style="font-size:11px;padding:4px 8px;flex:1;">Semanales</button>
       `;
       list.appendChild(tgl);
        // Boton de Añadir Mision
        const addQDiv = document.createElement('div');
        addQDiv.style.marginBottom = '12px';
        addQDiv.innerHTML = `
          <button class="btn-primary" onclick="bpAddQuest()" style="width:100%; background:#4CAF50; font-size:11px; font-weight:700;">+ NUEVA MISIÓN</button>
        `;
        list.appendChild(addQDiv);

       const quests = bpState.questSubTab === 'daily' ? questManager.dailyQuests : questManager.weeklyQuests;
       quests.forEach(q => {
           const div = document.createElement('div');
           div.className = `bp-list-item ${bpState.selectedId === q.id ? 'active' : ''}`;
           div.innerHTML = `
             <div class="bp-item-icon" style="color:#A6E22E">📜</div>
             <div class="bp-item-details">
                <div class="bp-item-title">${q.name.replace(/&[0-9a-flk-or]/g, '')}</div>
                <div class="bp-item-sub">Tipo: ${q.type}</div>
             </div>
           `;
           div.onclick = () => { bpState.selectedId = q.id; bpRenderList(); bpRenderEditor(); };
           list.appendChild(div);
       });
    } else if (bpState.activeTab === 'events') {
        // Boton de Añadir Evento
        const addEvDiv = document.createElement('div');
        addEvDiv.style.marginBottom = '12px';
        addEvDiv.innerHTML = `
          <button class="btn-primary" onclick="bpAddEvent()" style="width:100%; background:#FF5722; font-size:11px; font-weight:700;">+ NUEVO EVENTO</button>
        `;
        list.appendChild(addEvDiv);

        eventManager.events.forEach(e => {
            const div = document.createElement('div');
            div.className = `bp-list-item ${bpState.selectedId === e.id ? 'active' : ''}`;
            div.innerHTML = `
              <div class="bp-item-icon" style="color:#FF5722">⚡</div>
              <div class="bp-item-details">
                 <div class="bp-item-title">${e.description}</div>
                 <div class="bp-item-sub">${e.points} Puntos</div>
              </div>
            `;
            div.onclick = () => { bpState.selectedId = e.id; bpRenderList(); bpRenderEditor(); };
            list.appendChild(div);
        });
     } else if (bpState.activeTab === 'settings') {
       const div = document.createElement('div');
       div.className = 'bp-list-item active';
       div.style.cursor = 'default';
       div.innerHTML = `
         <div class="bp-item-icon" style="color:#4A90D9">⚙️</div>
         <div class="bp-item-details">
            <div class="bp-item-title">Estrategia</div>
            <div class="bp-item-sub">Configuración Global</div>
         </div>
       `;
       list.appendChild(div);
    }
}

window.bpSetQuestSub = function(sub) {
    bpState.questSubTab = sub;
    bpState.selectedId = null;
    localStorage.setItem('bp_questSubTab', sub);
    bpRenderList();
    bpRenderEditor();
};

// Mover nivel a nivel (Botones blancos del GUI)
window.bpChangeTier = function(delta) {
    let currentId = parseInt(bpState.selectedId) || 1;
    let nextId = currentId + delta;
    
    if (nextId >= 1 && nextId <= 100) {
        // Si el nuevo nivel se sale de la "página" actual de 7, movemos la página
        const newPage = Math.floor((nextId - 1) / 7);
        if (newPage !== bpState.tierPage) {
            bpState.tierPage = newPage;
            localStorage.setItem('bp_tierPage', newPage);
        }
        
        bpState.selectedId = nextId.toString();
        bpRenderList();
        bpRenderEditor();
        
        // Auto-scroll en la lista lateral
        const listItem = Array.from(document.querySelectorAll('.bp-list-item'))
            .find(el => el.textContent.includes(`Tier ${nextId}`));
        if(listItem) listItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

// Mover página a página (Botones azules del GUI - 7 niveles de golpe)
window.bpChangeTierPage = function(delta) {
    const newPage = bpState.tierPage + delta;
    if (newPage >= 0 && newPage < 15) { 
        bpState.tierPage = newPage;
        localStorage.setItem('bp_tierPage', newPage);
        
        // Al saltar de página, seleccionamos el Tier relativo (manteniendo la posición en el grid)
        // o simplemente el primero de la nueva página si el cálculo es complejo.
        // Vamos a ser proactivos: seleccionar el que esté en la misma posición relativa [0-6]
        let relativePos = (parseInt(bpState.selectedId) - 1) % 7;
        let nextId = (newPage * 7) + 1 + relativePos;
        if (nextId > 100) nextId = 100;

        bpState.selectedId = nextId.toString();
        
        bpRenderList();
        bpRenderEditor();
    }
};

window.bpSelectTierFromGui = function(tierId) {
    bpState.selectedId = tierId.toString();
    bpRenderList();
    bpRenderEditor();
    
    // Auto-scroll in list
    const item = Array.from(document.querySelectorAll('.bp-list-item'))
        .find(el => el.textContent.includes(`Tier ${tierId}`));
    if(item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

function extractAmount(rewards) {
    if (!rewards || rewards.length === 0) return 1;
    // Buscamos el primer número en el primer comando
    const first = rewards[0];
    const match = first.match(/\d+/);
    return match ? parseInt(match[0]) : 1;
}

window.getSlotVisualHtml = function(materialStr, amount = 1) {
    if (!materialStr || materialStr === '') return '';
    const fullId = materialStr.replace(/&[a-zA-Z0-9]/g, '').trim(); // strip colors
    const cleanId = fullId.toLowerCase().replace('cobblemon_', '').replace('cobblemon:', '').trim();
    
    let html = '';
    
    // 1. Verificar si es Minecraft Vanilla
    if (fullId.startsWith('minecraft:')) {
        const itemName = fullId.split(':')[1];
        // Intentamos cargar la imagen de assets/minecraft_items/
        html = `<img src="assets/minecraft_items/${itemName}.png" class="gui-slot-img" onerror="this.outerHTML='<div class=\'gui-slot-icon\'>📦</div>';">`;
    } 
    // 2. Verificar si es de Otros (puntos, dinero)
    else if (fullId.includes('points') || fullId.includes('vault:')) {
        const otherItem = OTHER_ITEMS.find(i => i.id === fullId);
        const emoji = otherItem ? otherItem.emoji : '🎫';
        html = `<div class="gui-slot-icon" style="font-size:14px; display:flex; align-items:center; justify-content:center;">${emoji}</div>`;
    }
    // 3. Ítems de Cobblemon (con assets de imagen)
    else {
        const id = cleanId;
        const found = ITEMS.find(i => i.id === id);
        if (found) {
            html = `<img src="assets/items/${found.id}.png" class="gui-slot-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                    <div class="gui-slot-icon" style="display:none;">📦</div>`;
        } else {
            html = `<div class="gui-slot-icon">📦</div>`;
        }
    }

    if (amount > 1) {
        html += `<span class="gui-slot-amount">${amount}</span>`;
    }
    return html;
}

function bpRenderEditor() {
    const content = document.getElementById('bp-editor-content');
    
    // Auto-seleccionar el primer tier de la página si no hay nada seleccionado
    if (!bpState.selectedId && bpState.activeTab === 'tiers') {
        bpState.selectedId = (bpState.tierPage * 7 + 1).toString();
    }

    if (!bpState.selectedId) {
        content.innerHTML = `<div style="color:#6B7FA3; text-align:center; padding:60px 20px; font-size:14px;">Selecciona un elemento de la lista para editarlo...</div>`;
        return;
    }

    if (bpState.activeTab === 'tiers') {
        const t = tierManager.getTier(bpState.selectedId);
        
        let freeSlots = '';
        let premiumSlots = '';
        
        // Renderizar 7 slots basados en la página actual
        for(let i=0; i<7; i++) {
           const tierNum = (bpState.tierPage * 7) + 1 + i;
           if (tierNum <= 100) {
                const pt = tierManager.getTier(tierNum);
               const isSelected = pt.id === bpState.selectedId;
               const selStyle = isSelected ? 'background:rgba(255,255,255,0.2); border:1px solid #fff;' : '';

               const freeAmt = extractAmount(pt.freeRewards);
               const premAmt = extractAmount(pt.premiumRewards);

               freeSlots += `
                <div class="gui-slot" style="${selStyle}" onclick="bpSelectTierFromGui(${tierNum})" title="Tier ${tierNum} - Recompensa Gratuita">
                    ${pt.freeRewards.length > 0 ? getSlotVisualHtml(pt.freeMaterial, freeAmt) : ''}
                </div>`;
               
               premiumSlots += `
                <div class="gui-slot" style="${selStyle}" onclick="bpSelectTierFromGui(${tierNum})" title="Tier ${tierNum} - Recompensa Premium">
                    ${pt.premiumRewards.length > 0 ? getSlotVisualHtml(pt.premiumMaterial, premAmt) : ''}
                </div>`;
           } else {
               freeSlots += `<div class="gui-slot"></div>`;
               premiumSlots += `<div class="gui-slot"></div>`;
           }
        }

        content.innerHTML = `
          <!-- GUI VISUAL PREVIEW -->
          <div class="gui-container" style="background-image: url('assets/battlepass/rewards.png');">
              <div class="gui-slots-grid gui-rewards-free">${freeSlots}</div>
              <div class="gui-slots-grid gui-rewards-premium">${premiumSlots}</div>
              
              <!-- Botones Blancos (Mover Nivel a Nivel: 1 por 1) -->
              <div onclick="bpChangeTier(-1)" style="position:absolute; top:86px; left:48px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Nivel Anterior"></div>
              <div onclick="bpChangeTier(-1)" style="position:absolute; top:86px; left:75px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Nivel Anterior"></div>
              
              <div onclick="bpChangeTier(1)" style="position:absolute; top:86px; right:48px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Siguiente Nivel"></div>
              <div onclick="bpChangeTier(1)" style="position:absolute; top:86px; right:75px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Siguiente Nivel"></div>

              <div onclick="bpChangeTier(-1)" style="position:absolute; top:120px; left:48px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Nivel Anterior"></div>
              <div onclick="bpChangeTier(-1)" style="position:absolute; top:120px; left:75px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Nivel Anterior"></div>

              <div onclick="bpChangeTier(1)" style="position:absolute; top:120px; right:48px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Siguiente Nivel"></div>
              <div onclick="bpChangeTier(1)" style="position:absolute; top:120px; right:75px; width:22px; height:18px; cursor:pointer; z-index:11;" title="Siguiente Nivel"></div>

              <!-- Botones Azules (AHORA moficados para mover 1 por 1 como quiere el usuario) -->
              <div onclick="bpChangeTier(-1)" style="position:absolute; bottom:2px; left:12px; width:22px; height:20px; cursor:pointer; z-index:10;" title="Nivel Anterior"></div>
              <div onclick="bpChangeTier(1)" style="position:absolute; bottom:2px; right:12px; width:22px; height:20px; cursor:pointer; z-index:10;" title="Siguiente Nivel"></div>
          </div>

          <h2 style="color:#fff; font-size:20px; margin-bottom:20px; border-bottom:1px solid #2A3347; padding-bottom:10px;">Editando Tier ${t.id}</h2>
          
          <div class="bp-form-group" style="margin-bottom:20px;">
              <label>Puntos Necesarios</label>
              <input type="number" class="bp-input" id="ined-points" value="${t.requiredPoints}" onchange="bpSaveTier('${t.id}')">
          </div>

          <!-- SECTION: FREE -->
          <div style="background:rgba(76,175,80,0.05); border:1px solid rgba(76,175,80,0.2); border-radius:10px; padding:20px; margin-bottom:20px;">
              <h3 style="color:#4CAF50; font-size:14px; margin-top:0; margin-bottom:15px; display:flex; align-items:center; gap:8px;">
                 <span style="background:#4CAF50; color:#fff; padding:2px 6px; border-radius:4px; font-size:10px;">FREE</span> Recompensas Gratuitas
              </h3>
              <div style="display:grid; grid-template-columns:1fr; gap:15px;">
                  <div class="bp-form-group" style="margin-bottom:0;">
                      <label>Icono / Material a Mostrar</label>
                      <div class="bp-material-preview">
                         <div class="bp-material-icon" style="cursor:pointer;" onclick="openMaterialSelector('${t.freeMaterial}', (val) => { document.getElementById('ined-free-mat').value = val; bpSaveTier('${t.id}'); })">${getSlotVisualHtml(t.freeMaterial, extractAmount(t.freeRewards))}</div>
                         <input type="text" class="bp-input" id="ined-free-mat" value="${t.freeMaterial}" onchange="bpSaveTier('${t.id}')">
                      </div>
                  </div>
              </div>
              <div class="bp-form-group" style="margin-top:15px; margin-bottom:0;">
                  <label>Premios (ID o Comandos - Se detecta la cantidad automáticamente)</label>
                  <input type="text" class="bp-input" id="ined-free-rewards" value="${t.freeRewards.join(', ')}" onchange="bpSaveTier('${t.id}')" placeholder="Ej: apple, 5">
              </div>
          </div>

          <!-- SECTION: PREMIUM -->
          <div style="background:rgba(255,193,7,0.05); border:1px solid rgba(255,193,7,0.2); border-radius:10px; padding:20px;">
              <h3 style="color:#FFC107; font-size:14px; margin-top:0; margin-bottom:15px; display:flex; align-items:center; gap:8px;">
                 <span style="background:#FFC107; color:#000; padding:2px 6px; border-radius:4px; font-size:10px;">PREMIUM</span> Recompensas Premium
              </h3>
              <div style="display:grid; grid-template-columns:1fr; gap:15px;">
                  <div class="bp-form-group" style="margin-bottom:0;">
                      <label>Icono / Material a Mostrar</label>
                      <div class="bp-material-preview">
                         <div class="bp-material-icon" style="cursor:pointer;" onclick="openMaterialSelector('${t.premiumMaterial}', (val) => { document.getElementById('ined-premium-mat').value = val; bpSaveTier('${t.id}'); })">${getSlotVisualHtml(t.premiumMaterial, extractAmount(t.premiumRewards))}</div>
                         <input type="text" class="bp-input" id="ined-premium-mat" value="${t.premiumMaterial}" onchange="bpSaveTier('${t.id}')">
                      </div>
                  </div>
              </div>
              <div class="bp-form-group" style="margin-top:15px; margin-bottom:0;">
                  <label>Premios (ID o Comandos - Se detecta la cantidad automáticamente)</label>
                  <input type="text" class="bp-input" id="ined-premium-rewards" value="${t.premiumRewards.join(', ')}" onchange="bpSaveTier('${t.id}')" placeholder="Ej: master_ball, 1">
              </div>
          </div>
        `;
    } else if (bpState.activeTab === 'quests') {
        const q = questManager.getQuest(bpState.questSubTab, bpState.selectedId);
        
        let bgImg = bpState.questSubTab === 'daily' ? 'assets/battlepass/daily_quests.png' : 'assets/battlepass/week.png';
        
        const quests = bpState.questSubTab === 'daily' ? questManager.dailyQuests : questManager.weeklyQuests;
        let questSlots = '';
        for(let i=0; i<12; i++) {
           const qItem = quests[i];
           if (qItem) {
               const isSelected = qItem.id === bpState.selectedId;
               const selStyle = isSelected ? 'background:rgba(255,255,255,0.2); border:1px solid #fff;' : '';
               questSlots += `
                <div class="gui-slot" style="${selStyle}" onclick="bpSelectQuestFromGui('${qItem.id}')" title="Quest ${qItem.name.replace(/&[0-9a-flk-or]/g, '')}">
                    ${getSlotVisualHtml(qItem.material, qItem.requiredProgress)}
                </div>`;
           } else {
               questSlots += `<div class="gui-slot"></div>`;
           }
        }

        content.innerHTML = `
          <!-- GUI VISUAL PREVIEW -->
          <div class="gui-container" style="background-image: url('${bgImg}');">
              <div class="gui-slots-grid gui-quests">${questSlots}</div>
              
              <!-- Áreas de Navegación integradas en el GUI -->
              <div class="gui-arrow-prev" onclick="bpChangeQuest(-1)" title="Misión Anterior"></div>
              <div class="gui-arrow-next" onclick="bpChangeQuest(1)" title="Siguiente Misión"></div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; border-bottom:1px solid #2A3347; padding-bottom:10px;">
            <h2 style="color:#fff; font-size:20px; margin:0;">Editando Quest #${q.id}</h2>
          </div>
          
          <div class="bp-form-group">
             <label>Nombre de la misión</label>
             <input type="text" class="bp-input" id="ined-qname" value="${q.name}" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
          </div>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
              <div class="bp-form-group">
                <label>Tipo de Misión</label>
                <select class="bp-input" id="ined-qtype" style="background:#0F1117; color:#C8D4E8;" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
                    <option value="COBBLEMON_CATCH" ${q.type==='COBBLEMON_CATCH'?'selected':''}>Captura (CATCH)</option>
                    <option value="COBBLEMON_BATTLE" ${q.type==='COBBLEMON_BATTLE'?'selected':''}>Batalla (BATTLE)</option>
                    <option value="COBBLEMON_BERRY" ${q.type==='COBBLEMON_BERRY'?'selected':''}>Bayas (BERRY)</option>
                    <option value="placeholder" ${q.type==='placeholder'?'selected':''}>Placeholder (PAPI)</option>
                    <option value="block-break" ${q.type==='block-break'?'selected':''}>Romper Bloques</option>
                    <option value="craft" ${q.type==='craft'?'selected':''}>Crafteo (Craft)</option>
                </select>
              </div>
             <div class="bp-form-group">
                <label>Required Progress</label>
                <input type="number" class="bp-input" id="ined-qreq" value="${q.requiredProgress}" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
             </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">
              <div class="bp-form-group">
                <label>Dificultad (Difficulty)</label>
                <select class="bp-input" id="ined-qdiff" style="background:#0F1117; color:#C8D4E8;" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
                    <option value="easy" ${q.difficulty==='easy'?'selected':''}>Fácil (Easy)</option>
                    <option value="medium" ${q.difficulty==='medium'?'selected':''}>Media (Medium)</option>
                    <option value="hard" ${q.difficulty==='hard'?'selected':''}>Difícil (Hard)</option>
                </select>
              </div>
              <div class="bp-form-group">
                <label>Opciones Especiales</label>
                <div style="display:flex; align-items:center; gap:8px; height:38px; background:#161B27; border:1px solid #2A3347; border-radius:8px; padding:0 10px;">
                   <input type="checkbox" id="ined-qperm" ${q.permanent ? 'checked' : ''} onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')" style="width:16px; height:16px; accent-color:#4A90D9;">
                   <label for="ined-qperm" style="margin:0; font-size:12px; color:#C8D4E8; cursor:pointer;">Misión Permanente</label>
                </div>
              </div>
          </div>

          <div class="bp-form-group">
             <label>Material del Icono (Ej: COBBLEMON_POKE_BALL)</label>
             <div class="bp-material-preview">
                 <div class="bp-material-icon" style="cursor:pointer; transition:transform 0.1s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" title="Abrir Galería" onclick="openMaterialSelector('${q.material}', (val) => { document.getElementById('ined-qmat').value = val; bpSaveQuest('${bpState.questSubTab}', '${q.id}'); })">${getSlotVisualHtml(q.material, q.requiredProgress)}</div>
                 <input type="text" class="bp-input" id="ined-qmat" value="${q.material}" style="flex:1;" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
             </div>
          </div>

          <div class="bp-form-group">
             <label>Lore (Descripción)</label>
             <input type="text" class="bp-input" id="ined-qlore" value="${q.lore[0] || ''}" onchange="bpSaveQuest('${bpState.questSubTab}', '${q.id}')">
          </div>

          <button class="btn-ghost" onclick="bpDeleteQuest('${bpState.questSubTab}', '${q.id}')" style="margin-top:20px; color:#f44336; border-color:rgba(244,67,54,0.3); width:fit-content; font-size:12px;">
             Eliminar esta misión
          </button>
        `;
    } else if (bpState.activeTab === 'settings') {
        const s = questManager.strategy;
        content.innerHTML = `
          <h2 style="color:#fff; font-size:22px; margin-bottom:5px; font-weight:700;">Configurador de Estrategia</h2>
          <p style="color:#6B7FA3; font-size:12px; margin-bottom:25px;">Gestiona el balance de dificultad y los comandos del servidor.</p>

          <!-- BALANCE DE DIFICULTAD -->
          <div style="background:linear-gradient(135deg, rgba(74,144,217,0.1), rgba(45,110,175,0.05)); border:1px solid rgba(74,144,217,0.2); border-radius:12px; padding:25px; margin-bottom:25px;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
                  <h3 style="color:#4A90D9; font-size:15px; margin:0; display:flex; align-items:center; gap:8px; font-weight:700;">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                     Balance de Día (Strategy)
                  </h3>
                  <label class="toggle-wrap" style="transform: scale(0.9);">
                      <div class="toggle-track ${s.enabled?'active':''}" onclick="bpToggleStrategy()"><div class="toggle-thumb"></div></div>
                  </label>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px;">
                  <div class="bp-form-group">
                      <label style="color:#A6E22E;">Fácil (Easy)</label>
                      <input type="number" class="bp-input" value="${s.easy}" id="st-easy" onchange="bpUpdateStrategy()" style="background:#0F1117;">
                  </div>
                  <div class="bp-form-group">
                      <label style="color:#F5C518;">Media (Medium)</label>
                      <input type="number" class="bp-input" value="${s.medium}" id="st-medium" onchange="bpUpdateStrategy()" style="background:#0F1117;">
                  </div>
                  <div class="bp-form-group">
                      <label style="color:#EF5350;">Difícil (Hard)</label>
                      <input type="number" class="bp-input" value="${s.hard}" id="st-hard" onchange="bpUpdateStrategy()" style="background:#0F1117;">
                  </div>
              </div>
              
              <div style="margin-top:20px; background:rgba(245,197,24,0.05); border:1px solid rgba(245,197,24,0.15); border-radius:8px; padding:12px; display:flex; gap:10px;">
                  <div style="color:#F5C518; font-size:18px;">⚠️</div>
                  <div style="font-size:11px; line-height:1.4; color:#C8D4E8;">
                      <strong style="color:#F5C518;">Nota de Persistencia:</strong> Si detectas errores de repintado o progreso que no se guarda tras reinicios, activa la base de datos <strong>MySQL</strong> en tu servidor CobblePass/BattlePass para asegurar la persistencia.
                  </div>
              </div>
          </div>

          <!-- PANEL DE CONTROL DEL SERVIDOR -->
          <div style="background:rgba(255,255,255,0.02); border:1px solid #2A3347; border-radius:12px; padding:25px;">
              <h3 style="color:#fff; font-size:15px; margin-top:0; margin-bottom:20px; font-weight:700;">Panel de Control de Servidor</h3>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                  <button class="btn-primary" onclick="bpAdminCmd('refresh')" style="background:#4A90D9; border:none; padding:12px; height:auto; display:flex; flex-direction:column; align-items:center; gap:8px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
                      <div style="text-align:center;">
                          <div style="font-size:12px; font-weight:700;">REFRESCAR</div>
                          <div style="font-size:9px; opacity:0.8; font-weight:400;">BPA Refresh Daily Quests</div>
                      </div>
                  </button>
                  <button class="btn-primary" onclick="bpAdminCmd('sync')" style="background:#4CAF50; border:none; padding:12px; height:auto; display:flex; flex-direction:column; align-items:center; gap:8px;">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      <div style="text-align:center;">
                          <div style="font-size:12px; font-weight:700;">SINCRONIZAR</div>
                          <div style="font-size:9px; opacity:0.8; font-weight:400;">BPA Sync Daily Quests</div>
                      </div>
                  </button>
              </div>
          </div>
        `;
    } else if (bpState.activeTab === 'events') {
        const e = eventManager.events.find(ev => ev.id === bpState.selectedId) || eventManager.events[0];
        if (!e) {
            content.innerHTML = `<div style="color:#6B7FA3; text-align:center; padding:60px 20px; font-size:14px;">Haz clic en "+ NUEVO EVENTO" para comenzar...</div>`;
            return;
        }

        content.innerHTML = `
          <h2 style="color:#fff; font-size:22px; margin-bottom:5px; font-weight:700;">Editor de Evento</h2>
          <p style="color:#6B7FA3; font-size:12px; margin-bottom:25px;">Configura misiones especiales con recompensas de alto valor.</p>

          <div style="background:rgba(255,87,34,0.05); border:1px solid rgba(255,87,34,0.2); border-radius:12px; padding:25px; margin-bottom:25px;">
              <div class="bp-form-group">
                 <label>Nombre del Evento (Descripción)</label>
                 <input type="text" class="bp-input" id="ined-edescription" value="${e.description}" onchange="bpSaveEvent('${e.id}')">
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                  <div class="bp-form-group">
                    <label>ID del Evento (event-id)</label>
                    <input type="text" class="bp-input" id="ined-eid" value="${e.id}" onchange="bpSaveEvent('${e.id}')">
                  </div>
                  <div class="bp-form-group">
                    <label>Puntos de XP (Altos, ej: 2500)</label>
                    <input type="number" class="bp-input" id="ined-epoints" value="${e.points}" onchange="bpSaveEvent('${e.id}')">
                  </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                  <div class="bp-form-group">
                    <label>Duración / Cooldown (ej: 7d)</label>
                    <input type="text" class="bp-input" id="ined-eduration" value="${e.duration}" onchange="bpSaveEvent('${e.id}')">
                  </div>
                  <div class="bp-form-group">
                    <label>Material / Icono (ej: COBBLEMON_MASTER_BALL)</label>
                    <div class="bp-material-preview">
                        <div class="bp-material-icon" style="cursor:pointer;" onclick="openMaterialSelector('${e.material}', (val) => { document.getElementById('ined-emat').value = val; bpSaveEvent('${e.id}'); })">${getSlotVisualHtml(e.material, 1)}</div>
                        <input type="text" class="bp-input" id="ined-emat" value="${e.material}" onchange="bpSaveEvent('${e.id}')" style="flex:1;">
                    </div>
                  </div>
              </div>

              <button class="btn-ghost" onclick="bpDeleteEvent('${e.id}')" style="margin-top:10px; color:#f44336; border-color:rgba(244,67,54,0.3); width:fit-content; font-size:12px;">
                 Eliminar este evento
              </button>
          </div>
          
          <div style="background:rgba(74,144,217,0.05); border:1px solid rgba(74,144,217,0.15); border-radius:8px; padding:15px; display:flex; gap:12px; align-items:center;">
              <div style="font-size:24px;">💡</div>
              <div style="font-size:12px; color:#C8D4E8; line-height:1.5;">
                  Los puntos de estos eventos se <strong>restan automáticamente</strong> del esfuerzo total requerido para las misiones diarias y semanales. 
                  Usa eventos para "aliviar" la carga de juego en fechas especiales.
              </div>
          </div>
        `;
    }
}

window.bpSaveTier = function(id) {
    tierManager.updateTier(id, {
        requiredPoints: parseInt(document.getElementById('ined-points').value) || 0,
        freeMaterial: document.getElementById('ined-free-mat').value,
        freeRewards: document.getElementById('ined-free-rewards').value.split(',').map(s=>s.trim()).filter(s=>s),
        premiumMaterial: document.getElementById('ined-premium-mat').value,
        premiumRewards: document.getElementById('ined-premium-rewards').value.split(',').map(s=>s.trim()).filter(s=>s)
    });
    showToast('✓', `Tier ${id} guardado`);
    bpRenderEditor(); // Actualizar GUI
};

window.bpSaveQuest = function(sub, id) {
    questManager.updateQuest(sub, id, {
        name: document.getElementById('ined-qname').value,
        type: document.getElementById('ined-qtype').value,
        requiredProgress: parseInt(document.getElementById('ined-qreq').value) || 1,
        difficulty: document.getElementById('ined-qdiff').value,
        permanent: document.getElementById('ined-qperm').checked,
        material: document.getElementById('ined-qmat').value,
        lore: [document.getElementById('ined-qlore').value]
    });
    showToast('✓', `Quest ${id} guardada`);
    bpRenderList();
    bpRenderEditor(); 
};

window.bpResetTiers = function() {
    if (confirm('¿Estás seguro de que quieres borrar TODA la configuración del pase? Esto no se puede deshacer.')) {
        tierManager.resetTiers();
        bpRenderList();
        bpRenderEditor();
        showToast('🗑️', 'Pase reiniciado');
    }
};

window.bpAddQuest = function() {
    const newId = questManager.addQuest(bpState.questSubTab);
    bpState.selectedId = newId;
    bpRenderList();
    bpRenderEditor();
    showToast('✨', 'Misión añadida');
};

window.bpDeleteQuest = function(type, id) {
    if (confirm('¿Borrar esta misión?')) {
        questManager.deleteQuest(type, id);
        bpState.selectedId = null;
        bpRenderList();
        bpRenderEditor();
        showToast('🗑️', 'Misión eliminada');
    }
};

window.bpSelectQuestFromGui = function(id) {
    bpState.selectedId = id;
    bpRenderList();
    bpRenderEditor();
    
    // Auto-scroll
    const items = document.querySelectorAll('.bp-list-item');
    items.forEach(it => {
        if (it.querySelector('.bp-item-title').textContent.includes(id)) {
            it.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
};

window.bpChangeQuest = function(delta) {
    const nextId = questManager.getAdjacentQuestId(bpState.questSubTab, bpState.selectedId, delta);
    if (nextId) {
        bpState.selectedId = nextId;
        bpRenderList();
        bpRenderEditor();
        
        // Auto-scroll
        const items = document.querySelectorAll('.bp-list-item');
        items.forEach(it => {
            if (it.querySelector('.bp-item-title').textContent.includes(bpState.selectedId)) {
                it.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    }
};

window.bpAddEvent = function() {
    const newEv = eventManager.addEvent({
        description: 'Nuevo Evento de Temporada',
        points: 2500,
        duration: '7d',
        material: 'COBBLEMON_MASTER_BALL'
    });
    bpState.selectedId = newEv.id;
    bpRenderList();
    bpRenderEditor();
    if (window.updateCalculator) window.updateCalculator();
    showToast('⚡', 'Evento creado');
};

window.bpSaveEvent = function(oldId) {
    const newId = document.getElementById('ined-eid').value;
    const event = eventManager.events.find(ev => ev.id === oldId);
    if (event) {
        event.id = newId;
        event.description = document.getElementById('ined-edescription').value;
        event.points = parseInt(document.getElementById('ined-epoints').value) || 0;
        event.duration = document.getElementById('ined-eduration').value;
        event.material = document.getElementById('ined-emat').value;
        
        bpState.selectedId = newId;
        bpRenderList();
        if (window.updateCalculator) window.updateCalculator();
        showToast('✓', 'Evento actualizado');
    }
};

window.bpDeleteEvent = function(id) {
    if (confirm('¿Eliminar este evento?')) {
        eventManager.deleteEvent(id);
        bpState.selectedId = null;
        bpRenderList();
        bpRenderEditor();
        if (window.updateCalculator) window.updateCalculator();
        showToast('🗑️', 'Evento eliminado');
    }
};
