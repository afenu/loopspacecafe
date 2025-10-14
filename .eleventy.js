// .eleventy.js
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  return {
    pathPrefix: "/loopspacecafe/", // This must be correct

    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    }
  };
};