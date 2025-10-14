
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  return {
    pathPrefix: "/loopspacecafe/", // Add this line!

    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    }
  };
};