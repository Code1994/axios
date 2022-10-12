import path from 'path'
import commonConfig from './webpack.common.js'
import { merge } from 'webpack-merge'
import { fileURLToPath } from 'url'
import ip from 'ip'
import portfinder from 'portfinder'
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const devConfig = merge(commonConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '5000',
    open: false,
    hot: true,
    liveReload: false,
    headers: {},
    proxy: []
  },
  plugins: [
  ]
})

export default new Promise((resolve, reject) => {
  portfinder.basePort = devConfig.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // 找到可使用的port后 对devServer重新设置
      devConfig.devServer.port = port
      const httpType = devConfig.devServer.https ? 'https' : 'http'
      devConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here:
              ${httpType}://${devConfig.devServer.host}:${port}
              ${httpType}://127.0.0.1:${port}
              ${httpType}://localhost:${port}
              ${httpType}://${ip.address()}:${port}
              `
            ]
          }
        })
      )
      resolve(devConfig)
    }
  })
})
