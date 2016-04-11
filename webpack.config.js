module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'dist/bundle.js'
  },
  watch: true,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'jshint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css?sourceMap!autoprefixer!sass?sourceMap', exclude: /node_modules/},
      {test: /\.(png|jpg|jpeg)$/, loader: 'url?limit=100000', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/}
    ]
  },
  resolve: {
    extension: ['', '.js', '.es6', '.scss', '.html']
  }
};
