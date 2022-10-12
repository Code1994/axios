import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:4].js',
    libraryTarget: 'umd',
    library: 'axios',
    // axios源码利用的是Es6导出，不加的话，需要多访问一个default属性
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      entryName: 'index'
    })
  ]
}
