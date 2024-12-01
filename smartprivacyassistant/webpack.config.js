const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "dev_public", "extension", "background", "background.ts"),
      execute: path.resolve(__dirname, "dev_public", "extension", "content_scripts", "execute.ts"),
   },
   output: {
      path: path.join(__dirname, "public"),
      filename: "[name].js",
   },
   devtool: 'cheap-module-source-map',
   resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
      fallback: {
         "fs": false,
         "tls": false,
         "net": false,
         "path": false,
         "zlib": false,
         "http": false,
         "https": false,
         "stream": false,
         "crypto": false,
         "crypto-browserify": require.resolve('crypto-browserify'),
      }
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
         {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env'],
                  plugins: ['@babel/plugin-transform-runtime']
               }
            }
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{ from: ".", to: ".", context: "dev_public" }]
      }),
   ],
};