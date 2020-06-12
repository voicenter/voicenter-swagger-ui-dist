const { resolve } = require('path');
const { readdirSync, copyFileSync, existsSync, mkdirSync } = require('fs');

/**
 * Will replace destination folder with dist files
 * @param {string} destination - absolute path
 */
exports.replaceWithDist = destination => {
  if (!existsSync(destination)) mkdirSync(destination);

  const distPath = resolve(__dirname, 'dist')
  const files = readdirSync(distPath);

  files.forEach(file => copyFileSync(resolve(distPath, file), `${destination}/${file}`));
};
