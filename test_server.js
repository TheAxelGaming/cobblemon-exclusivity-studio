const http = require('http'), fs = require('fs'), path = require('path');
const mimes = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
http.createServer((r,s) => {
    let f = r.url.split('?')[0]; 
    if(f === '/') f = '/index.html';
    const ext = path.extname(f);
    try {
        const content = fs.readFileSync('.' + f);
        s.writeHead(200, { 'Content-Type': mimes[ext] || 'text/plain' });
        s.end(content);
    } catch(e) {
        s.writeHead(404); s.end('Not found');
    }
}).listen(5502, () => console.log('Server started on port 5502'));
