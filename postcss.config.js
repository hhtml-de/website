const postcssPresetEnv = require('postcss-preset-env')
const postcssImport = require('postcss-import');
const postcssClamp = require('postcss-clamp');

module.exports = {
  plugins: [
    postcssImport({root: __dirname}),
    postcssClamp(),
//    postcssPresetEnv()
  ]
}