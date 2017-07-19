const path = require('path')
const browserSyncPlugin = require('browser-sync-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const prefixers = require('autoprefixer-stylus')
const webpack = require('webpack')

module.exports = {
 entry : './src/js/index.js',
 output : {
   filename: 'bundle.js',
   path : path.resolve(__dirname, 'dist')
 },

 module: {
  rules : [
    {
      test: /\.css|.styl/, use: extractTextPlugin.extract({
        use: [
          'css-loader',{
             loader : 'stylus-loader',
             options : {
               use: [prefixers()]
             }
           }
           ]
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

    {test : /\.html/, use:
      [
        {
          loader : 'html-loader'
        }
      ]
    },

    { 
      test: /\.html/, use: 
      [
        {
          loader : 'file-loader',
          options : {
            name : '[name].[ext]'
          }
        }
      ],
      exclude : path.resolve(__dirname, './src/index.html')
    },

    {test: /\.(svg|eot|wof|ttf|otf)/, use: [
      {
        loader : 'url-loader',
        options : {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]},
    
  ]
 },

 plugins : [
    new browserSyncPlugin({
      host : 'localhost',
      port: 3000,
      server: { baseDir : ['dist'] },
      open:false
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      JQuery: 'jquery'
    }),

    new extractTextPlugin('style.css'),

    new htmlWebpackPlugin({
      favicon : './src/favicon/filename.png',
      template : './src/index.html'
    }),

    new cleanPlugin(['dist'])
 ]
}