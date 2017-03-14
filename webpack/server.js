import fs from 'fs';
import webpack from 'webpack';

import config from '../src/common/config';

const externals = fs
  .readdirSync('node_modules')
  .filter(file => !file.includes('.bin'))
  .concat(config.subDirectoryNodeModules)
  .map(name => ({ [name]: `commonjs ${name}` }))
  .reduce((prev, curr) => ({ ...prev, ...curr }));

export default {
  entry: './src/server',
  externals,
  node: {
    __dirname: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'node-fetch'
    })
  ],
  target: 'node'
};
