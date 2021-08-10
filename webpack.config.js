const path  = require("path");

const inputPath = "_assets/main.js";
const output = {
  path: "assets/js",
  fileName: "app.js",
};

const config = {
  entry: {
    main: path.join(__dirname, inputPath),
  },
  output: {
    path: path.resolve(__dirname, output.path),
    filename: output.fileName,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      }
    ]
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
  }
  if (argv.mode === "production") {
    config.devtool = "source-map";
  }
  return config;
};
