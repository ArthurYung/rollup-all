import plugin from './rollup.plugin.js'
import name  from './name';
const ENV = process.env.npm_lifecycle_event
const TYPE = process.env.NODE_ENV
const config = {
    input: TYPE === 'ts' ? 'src/index.ts' : 'src/index.js',
    output:{
        name: name,
        file: ENV === 'env-build' ? `dist/${name}.min.js` : `dist/${name}.js`,
        format: 'umd',
        sourceMap: ENV === 'start'
    },
    plugins: plugin(ENV),
}

export default config