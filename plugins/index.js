import syntaxHighlightPlugin from '@11ty/eleventy-plugin-syntaxhighlight';

import rssPlugin from '@11ty/eleventy-plugin-rss';
import { EleventyRenderPlugin } from '@11ty/eleventy';

import esbuildPlugin from './esbuild.js';
import lightningCSSPlugin from './lightning-css.js';
import htmlTransformPlugin from './html-transform.js';
import imagePlugin from './image.js';
import { filterPlugin } from './filters/index.js';
import { eventsPlugin } from './events/index.js';

export default (eleventyConfig) => {
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