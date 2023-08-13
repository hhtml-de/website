const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

const rssPlugin = require('@11ty/eleventy-plugin-rss');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

const esbuildPlugin = require('./esbuild');
const lightningCSSPlugin = require('./lightning-css');
const htmlTransformPlugin = require('./html-transform');
const imagePlugin = require('./image');
const { filterPlugin } = require('./filters');
const { eventsPlugin } = require('./events');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(esbuildPlugin);
  eleventyConfig.addPlugin(lightningCSSPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(htmlTransformPlugin);
  eleventyConfig.addPlugin(imagePlugin);

  // filters
  eleventyConfig.addPlugin(filterPlugin);
  eleventyConfig.addPlugin(eventsPlugin);

  
}