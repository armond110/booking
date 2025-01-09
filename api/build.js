const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const indexPath = path.join(publicDir, 'index.html');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(
  indexPath,
  '<!DOCTYPE html><html><head><title>Express App</title></head><body><h1>Express App</h1></body></html>'
);
console.log('Build completed.');
