import plugin from './rollup.plugin.js'
import name  from './name';
const ENV = process.env.npm_lifecycle_event
const TYPE = process.env.NODE_TYPE
const config = {
    input: TYPE === 'es' ? 'src/index.js' : 'src/index.ts',
    output:{
        file: ENV === 'build' ? `dist/${name}.min.js` : `dist/${name}.js`,
        format: 'umd',
    },
    plugins: plugin(ENV),
    sourceMap: ENV !== 'build',
    moduleName: name
}

export default config