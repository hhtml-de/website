import array from './array.js';
import formatDate from './formatdate.js';
import isoDate from './isodate.js';
import limit from './limit.js';
import minify from './minify.js';
import where from './where.js';
import splitLines from './splitlines.js';
import slugify from './slugify.js';
import upcoming from './upcoming.js';
import past from './past.js';
import decrapify from './decrapify.js';

const filterPlugin = (eleventyConfig) => {
  eleventyConfig.addFilter('array', array);
  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('isoDate', isoDate);
  eleventyConfig.addFilter('limit', limit);
  eleventyConfig.addFilter('minify', minify);
  eleventyConfig.addFilter('where', where);
  eleventyConfig.addFilter('splitLines', splitLines);
  eleventyConfig.addFilter('slugify', slugify);
  eleventyConfig.addFilter('keys', Object.keys);
  eleventyConfig.addFilter('values', Object.values);
  eleventyConfig.addFilter('entries', Object.entries);
  eleventyConfig.addFilter('json', JSON.stringify);
  eleventyConfig.addFilter('upcoming', upcoming);
  eleventyConfig.addFilter('past', past);
  eleventyConfig.addFilter('decrapify', decrapify);
};

export {
  formatDate,
  isoDate,
  limit,
  minify,
  where,
  splitLines,
  slugify,
  filterPlugin,
};
