const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const postcssCssVars = require('postcss-css-variables');

module.exports = {
  plugins: [
    postcssImport({root: __dirname}),
    postcssCssVars(),
    autoprefixer()
  ]
}