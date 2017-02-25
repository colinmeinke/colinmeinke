import proConfig from '../pro'
import serverConfig from '../server'

const baseConfig = {
  ...serverConfig,
  ...proConfig,
  plugins: [
    ...serverConfig.plugins,
    ...proConfig.plugins
  ]
}

export default {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: 'server.min.js'
  }
}
