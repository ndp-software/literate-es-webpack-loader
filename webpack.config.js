var path = require('path')

module.exports = {
  context:       __dirname + '/src',
  devtool:       'source-map',
  entry:         './literate-es.js',
  output:        {
    path:           __dirname + '/dist',
    filename:       'literate-es-webpack-loader.js',
    library:        'literate-es-webpack-loader',
    libraryTarget:  'umd',
    umdNamedDefine: true
  },
  module:        {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    alias: {
      'literate-es': path.resolve(__dirname, "dist/literate-es-webpack-loader.js")
    }
  }


}
