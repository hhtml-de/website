const svgToJpeg = require('./svg-to-jpeg.js');

function eventsPlugin(eleventyConfig) {
  // build events
  eleventyConfig.on('afterBuild', () => {
    svgToJpeg();
  });
}

module.exports = {
  svgToJpeg,
  eventsPlugin,
};

