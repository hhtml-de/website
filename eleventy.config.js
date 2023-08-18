const pluginsPlugin = require('./plugins');

module.exports = (eleventyConfig) => {
  // custom watch targets
  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.addPlugin(pluginsPlugin);

  // short codes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles

  // passthrough copy
  
  eleventyConfig.addPassthroughCopy('./src/images/');

  // social icons to root directory
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/*': '/',
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
