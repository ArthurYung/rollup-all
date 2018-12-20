import plugin from './rollup.plugin.js'
import name  from './name';
const ENV = process.env.npm_lifecycle_event
const TYPE = process.env.NODE_ENV
const config = {
    input: TYPE === 'ts' ? 'src/index.ts' : 'src/index.js',
    output:{
        file: ENV === 'build' ? `dist/${name}.min.js` : `dist/${name}.js`,
        format: 'umd',
    },
    plugins: plugin(ENV, TYPE),
    sourceMap: ENV === 'start',
    moduleName: name
}

export default config