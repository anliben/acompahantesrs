const workboxBuild = require('workbox-build');
const SRC_DIR = 'src';
const BUILD_DIR = 'dist/tgatasmix';
const SW = 'sw.js';
const globPatterns = [
  '**/*.{js,png,ico,svg,html,css}',
  'assets/**/*'
];

const globIgnores = [
  'package.json',
  'index.js',
  'sw.js'
];

const input = {
  swDest: `dist/tgatasmix/sw.js`,
  globDirectory: 'dist/tgatasmix',
  globPatterns: globPatterns,
  globIgnores: globIgnores,
  maximumFileSizeToCacheInBytes: 4000000
};


workboxBuild.generateSW(input).then(() => {
  console.log(`The service worker ${BUILD_DIR}/${SW} has been injected with a precache list.`);
});
