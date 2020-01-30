const postcssPresetEnv = require("postcss-preset-env");
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss-import"),
    postcssPresetEnv({
      browsers: "last 2 versions"
    }),
    tailwindcss("./tailwind.config.js")
  ]
};
