const Image = require("@11ty/eleventy-img");
const path = require('path');

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("image", async function (src, alt, sizes = "100vw", classes = "") {
    const urlPath = '/assets/images';
    const fullSrc = path.join('./src', urlPath, src);

    let metadata = await Image(fullSrc, {
      widths: [200, 400, 1000],
      formats: ["avif", "webp", "jpeg"],
      outputDir: './dist/assets/images',
      urlPath: '/assets/images',
      filenameFormat(id, src, width, format) {
        const baseName = path.basename(src).replace(/\.\w+$/, '');
        return `${baseName}-x${width}.${format}`;
      }
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    // You bet we throw an error on a missing alt (alt="" works okay)
    const html = Image.generateHTML(metadata, imageAttributes);
    return classes ? html.replace(/<picture/, `<picture class="${classes}"`) : html;
  });

};
