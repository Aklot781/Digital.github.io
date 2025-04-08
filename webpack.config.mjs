//import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "image/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ ".js" ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // new ESLintPlugin({
    //  extensions: [ "js" ],
    //  fix: true,
    // }),
  ],
  devServer: {
    static: "./dist",
  },
  mode: "development",
};
