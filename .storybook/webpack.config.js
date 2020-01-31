const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [["react-app", { flow: false, typescript: true }]]
    }
  });

  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: "postcss-loader",
        options: {
          sourceMap: false,
          config: {
            path: "./.storybook/"
          }
        }
      }
    ],

    include: path.resolve(__dirname, "../")
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
