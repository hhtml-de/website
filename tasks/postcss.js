const { dest, src } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const OUTPUT_DIR = './src/_includes/css';
// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// The main postCSS method grabs all root postcss files,
// processes them, then sends them to the output calculator
const postCSS = () => {
  return src('./src/css/*.css')
    .pipe(postcss())
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2,
            }
          : {}
      )
    )
    .pipe(dest(OUTPUT_DIR));
};

module.exports = postCSS;