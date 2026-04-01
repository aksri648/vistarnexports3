const { copyFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');

const distDir = join(__dirname, '..', 'dist');
const source = join(distDir, 'index.html');
const target = join(distDir, '404.html');

if (!existsSync(source)) {
  console.error('postbuild: dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

copyFileSync(source, target);
console.log('postbuild: created 404.html for SPA fallback.');
