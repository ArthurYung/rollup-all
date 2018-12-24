import sourcemaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import clear from 'rollup-plugin-clear'
import html from 'rollup-plugin-fill-html'
import baseConfig from './config.base';
import moduleName from './name'
import userPlugins from './plugins'


export default{
  ...baseConfig,
  output: {
    name: moduleName,
    file: `dist/${moduleName}.js`,
    format: 'umd',
    sourcemap: false
  },
  plugins: [
    clear({
      targets: ['dist']
    }),
    ...baseConfig.plugins,
    ...userPlugins,
    sourcemaps(),
    html({
        template: 'public/index.html',
        filename: 'index.html',
      }),
      serve({
        open: true,
        openPage: '/index.html',
        contentBase: ['dist'],
        host: 'localhost',
        port: 10001,
      }),
      livereload({
        watch: ['dist', 'src']
      })
  ]
}