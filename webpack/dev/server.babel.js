import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

import devConfig from '../dev'
import serverConfig from '../server'

const baseConfig = {
  ...serverConfig,
  ...devConfig,
  plugins: [
    ...serverConfig.plugins,
    ...devConfig.plugins
  ]
}

export default {
  ...baseConfig,
  module: {
    loaders: [
      ...baseConfig.module.loaders,
      {
        exclude: /\/Page/,
        loader: 'css-loader?modules',
        test: /\.css$/
      },
      {
        include: /\/Page/,
        loader: ExtractTextWebpackPlugin.extract(
          'style',
          'css?modules&importLoaders=1!postcss'
        ),
        test: /\.css$/
      }
    ]
  },
  output: {
    ...baseConfig.output,
    filename: 'server.js'
  },
  plugins: [
    ...baseConfig.plugins,
    new ExtractTextWebpackPlugin('styles.css')
  ]
}
