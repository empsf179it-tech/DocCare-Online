const fs = require('fs');

const logPath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\3482651d-e525-411a-ad36-ad05fd2308ad\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

for (const line of lines) {
    if (!line) continue;
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT' && obj.content && obj.content.includes('<!DOCTYPE html>')) {
        const content = obj.content;
        const start = content.indexOf('<!DOCTYPE html>');
        const end = content.lastIndexOf('</html>') + 7;
        const html = content.substring(start, end);
        
        fs.writeFileSync('original_full.html', html, 'utf8');
        console.log('Extracted original_full.html');
        break;
    }
}
