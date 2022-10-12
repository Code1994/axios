// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log('__dirname', __dirname,  path.resolve(__dirname, './public/index.html'))
export default {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:4].js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [{
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   include: [path.resolve(__dirname, '../src')]
      // }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      // filename: `${entryName}.html`,
      filename: 'index.html',
      entryName: 'index',
      // minify: isDevelopment ? {} : {
      //   removeComments: true,
      //   collapseWhitespace: true,
      //   removeAttributeQuotes: false
      // },
      // favicon: existsFavicon ? faviconPath : null
      // 多页面的话，必须设置chunks，否则该插件会将所有的js都注入到每个html中---由于更改为多个动态路径出口，所以注释下列，因为entry是字符串路径 而不是对象。也可以将下面的entry配置改为对象形式，这里依然设置chunks。
      // chunks:[entryName]
    })
  ]
}
