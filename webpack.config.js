var path = require('path')

module.exports = {
  context:       __dirname + '/src',
  devtool:       'source-map',
  // entry: '../test/integration.js',
  entry:         {
    'literate-es': './literate-es.js'
    // example:       './example.js.md'
  },
  output:        {
    path:           __dirname + '/dist',
    filename:       '[name].js',
    library:        'literate-es-loader',
    libraryTarget:  'umd',
    umdNamedDefine: true
  },
  module: {
    loaders:       [
      {
        test:    /\.js$/,
        loader:  'babel',
        exclude: /node_modules/
      // },
      // {
      //   test:   /.*\.js\.md$/,
      //   exclude: /node_modules/,
      //   loader: 'literate-es'
      }
    ]
  },
  resolveLoader: {
    alias: {
      'literate-es': path.resolve(__dirname, "dist/literate-es.js")
    }
  }


}
