const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const brokenText = `    const isActive 

// ============================================================
// SELECCIONAR ÍTEM`;

const fixText = `    const isActive = state.selected === item.id;

    const card = document.createElement('div');
    card.className = \`item-card fade-in \${isActive ? 'active' : ''} \${inPack ? 'selected-for-pack' : ''}\`;
    card.addEventListener('click', () => selectItem(item.id));

    const badges = [];
    if (opts.recipe) badges.push(\`<span class="badge badge-blue"  style="font-size:10px;padding:1px 6px;">R</span>\`);
    if (opts.loot)   badges.push(\`<span class="badge badge-yellow" style="font-size:10px;padding:1px 6px;">D</span>\`);

    const checkmark = inPack
      ? \`<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"
             stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>\`
      : '';

    card.innerHTML = \`
      <div class="item-img">\${getItemVisual(item, 32)}</div>
      <div style="flex:1;min-width:0;">
        <div class="item-name">\${item.name}</div>
        <div class="item-id">\${NAMESPACE}:\${item.id}</div>
        \${badges.length ? \`<div style="margin-top:3px;display:flex;gap:3px;">\${badges.join('')}</div>\` : ''}
      </div>
      <div class="pack-check \${inPack ? 'checked' : ''}">\${checkmark}</div>\`;

    list.appendChild(card);
  });

  // Actualizar contadores
  const packCount = Object.values(state.options).filter(o => o.inPack).length;
  document.getElementById('pack-count').textContent      = packCount;
  document.getElementById('sel-count-badge').textContent = \`\${packCount} en el Pack\`;
}

// ============================================================
// SELECCIONAR ÍTEM`;

html = html.replace(brokenText, fixText);
fs.writeFileSync('index.html', html);
console.log('Fixed renderList in index.html');
