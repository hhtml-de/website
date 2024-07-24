import svgToJpeg from './svg-to-jpeg.js';

function eventsPlugin(eleventyConfig) {
  // build events
  eleventyConfig.on('afterBuild', () => {
    svgToJpeg();
  });
}

export {
  svgToJpeg,
  eventsPlugin,
};

