const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import"),
    postcssPresetEnv({
      browsers: "last 2 versions"
    }),
    tailwindcss("./tailwind.config.js"),
    purgecss({
      content: ["**/*.tsx"],
      css: ["**/*.css"]
    })
  ]
};
