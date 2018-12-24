import clear from 'rollup-plugin-clear'
import baseConfig from './config.base';
import moduleName from './name'
import userPlugins from './plugins'
import progress from 'rollup-plugin-progress'
import {uglify} from "rollup-plugin-uglify";
import { name, version, author, license} from '../package.json';

// banner
const banner =
  `${'/*!\n' + ' * '}${name}js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */`;

export default[{
  ...baseConfig,
  output: {
    name: moduleName,
    file: `dist/${moduleName}.js`,
    format: 'umd',
    sourcemap: false
  },
  banner,
  plugins: [
    ...baseConfig.plugins,
    ...userPlugins,
    progress(),
  ]
},{
  ...baseConfig,
  output: {
    name: moduleName,
    file: `dist/${moduleName}.min.js`,
    format: 'umd',
    sourcemap: false
  },
  plugins: [
    clear({
      targets: ['dist']
    }),
    ...baseConfig.plugins,
    ...userPlugins,
    progress(),
    uglify(),
  ]
}
]