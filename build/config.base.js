import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import moduleName from './name';
import filesize from 'rollup-plugin-filesize'
const TYPE = process.env.NODE_ENV

const baseConfig = {
	input: TYPE === 'ts' ? 'src/index.ts' : 'src/index.js',
	plugins: [
		alias({
			src: 'src'
		}),
		resolve(),
		postcss({
      extract : `dist/css/${moduleName}.css`
    }),
    filesize()],
}

export default baseConfig