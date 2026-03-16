const fs = require('fs');

const filepath = 'index.html';
const lines = fs.readFileSync(filepath, 'utf-8').split('\n');

let start_idx = -1;
let end_idx = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- CDN: JSZip y Lucide Icons -->')) {
        start_idx = i;
        break;
    }
}

for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '</body>') {
        end_idx = i;
        break;
    }
}

if (start_idx !== -1 && end_idx !== -1) {
    const new_lines = [
        ...lines.slice(0, start_idx),
        '  <!-- Scripts Locales -->',
        '  <script src="js/config.js"></script>',
        '  <script src="js/data.js"></script>',
        '  <script src="js/generator.js"></script>',
        '  <script src="js/ui.js"></script>',
        '  <script src="js/app.js"></script>',
        ...lines.slice(end_idx)
    ];
    
    fs.writeFileSync(filepath, new_lines.join('\n'), 'utf-8');
    console.log("Replace successful. Start:", start_idx, "End:", end_idx);
} else {
    console.log("Could not find boundaries. start:", start_idx, "end:", end_idx);
}
