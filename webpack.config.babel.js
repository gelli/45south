import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const config = {
  entry: {
    main: ['./src/js/main.js', './src/css/main.scss'],
  },
  output: {
    path: path.resolve('assets'),
    publicPath: '/assets/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass!resolve-url!sass?sourceMap'),
      },
      {
        test: /lightslider\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.eot$/,
        loader: "url-loader?limit=8192&name=name=./images/[hash].[ext]"
      },
    ],
  },
  resolve: {
    modulesDirectories: ['./bower_components', './node_modules'],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          compress: { screw_ie8: true },
          comments: false,
          output: { comments: false}
      })
  )
}


export default config;
