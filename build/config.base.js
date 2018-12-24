import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import moduleName from './name';
import filesize from 'rollup-plugin-filesize'
import autoprefixer from 'autoprefixer'

const TYPE = process.env.NODE_ENV
const ENV = process.env.npm_lifecycle_event

const baseConfig = {
	input: TYPE === 'ts' ? 'src/index.ts' : 'src/index.js',
	plugins: [
		alias({
			src: 'src'
		}),
		resolve(),
		postcss({
      extract : `dist/css/${moduleName}.css`,
			plugins: [
				autoprefixer({
						browsers: [
							'ie >= 9',
							'ie_mob >= 10',
							'ff >= 30',
							'chrome >= 34',
							'safari >= 7',
							'opera >= 23',
							'ios >= 7',
							'android >= 4.4',
							'bb >= 10'
						]
				})
			], 
			minimize: ENV !== 'start'
    }),
    filesize() 
	]
}

export default baseConfig
