const postcssImport = require('postcss-import');
const postcssClamp = require('postcss-clamp');
const autoprefixer = require('autoprefixer');
const postcssCssVars = require('postcss-css-variables');

module.exports = {
  plugins: [
    postcssImport({root: __dirname}),
    postcssClamp(),
    postcssCssVars(),
    autoprefixer()
  ]
}