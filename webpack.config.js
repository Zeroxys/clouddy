const path = require('path')
const browserSyncPlugin = require('browser-sync-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
 entry : './src/js/index.js',
 output : {
   filename: 'bundle.js',
   path : path.resolve(__dirname, 'dist')
 },

 module: {
  rules : [
    {
      test: /\.css/, use: extractTextPlugin.extract({
        use: ['css-loader', 'postcss-loader']
      })
    },

    {test: /\.(png|jpeg)/, use: [
      {
        loader : 'file-loader',
        options : {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }
    ]},

    {test: /\.(svg|eot|wof|ttf)/, use: [
      {
        loader : 'url-loader',
        options : {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]},

    {test: /\.html/, use: 'html-loader'}
    
  ]
 },

 plugins : [
    new browserSyncPlugin({
      host : 'localhost',
      port: 3000,
      server: { baseDir : ['dist'] },
      open:false
    }),

    new extractTextPlugin('style.css'),

    new htmlWebpackPlugin({
      template : './src/index.html'
    }),

    new cleanPlugin(['dist'])
 ]
}