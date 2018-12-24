import clear from 'rollup-plugin-clear'
import postcss from 'rollup-plugin-postcss'
import name from './name'
export default [
	clear({
		targets: ['dist']
	}),
	postcss({
		extract: `dist/css/${name}.css`
	})
]