const { resolve } = require('path');
const { readdirSync, copyFileSync, existsSync, mkdirSync } = require('fs');

/**
 * Will replace destination folder with dist files
 * @param {string} destination - absolute path
 */
exports.replaceWithDist = destination => {
  if (!existsSync(destination)) mkdirSync(destination);

  const files = readdirSync(resolve('./dist'));

  files.forEach(file => copyFileSync(resolve('./dist', file), `${destination}/${file}`));
};
