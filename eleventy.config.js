module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("app-ads.txt");
  eleventyConfig.addPassthroughCopy(".nojekyll");
  // Dated privacy page: served exactly as it was published.
  eleventyConfig.addPassthroughCopy("tumpyeo/privacy/2026-10-15");
  eleventyConfig.ignores.add("tumpyeo/privacy/2026-10-15/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
