const path = require("path");
const HTMLWebPackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/index.js",
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, "dist")
     },
  plugins:[
    new HTMLWebPackPlugin({
        template:'./src/index.html'
    })
  ],
  module: { 
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{loader: 'file-loader',},],
      },
    ],
  },

  devServer:{
    historyApiFallback: true,
    static: {
        directory: path.join(__dirname, 'public'),
      },
    port: 9000
  }
};