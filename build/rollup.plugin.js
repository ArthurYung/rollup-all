import { uglify } from "rollup-plugin-uglify";
import sourcemaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import progress from 'rollup-plugin-progress'
import html from 'rollup-plugin-fill-html'
import dev from './rollup.dev.js'

const plugin = mode => {

    const plugins = dev

    if(mode === 'build') plugins.push(uglify(), progress({clearLine: false})),plugins.shift()
    
    else if(mode === 'start') plugins.push(
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
        livereload(
            {watch: ['dist', 'src']}
        ))

    else plugins.push(progress({clearLine: false}))
    
    return plugins
}

export default plugin