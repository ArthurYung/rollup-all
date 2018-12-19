import clear from 'rollup-plugin-clear'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import name from './name'

export default [
    clear({
        targets: ['dist']
    }),
    babel({
        exclude: 'node_modules',
    }),
    postcss({
        extract : `dist/css/${name}.css`
    })
]