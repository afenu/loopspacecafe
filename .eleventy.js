module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy the 'static' folder to the output folder
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "pages", // Source folder
      includes: "../_includes", // Includes folder
      output: "_site" // Output folder (where the final site is built)
    }
  };
};