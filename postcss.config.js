import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import postcssCssVars from 'postcss-css-variables';

export default {
  plugins: [
    postcssImport({root: __dirname}),
    postcssCssVars(),
    autoprefixer()
  ]
}