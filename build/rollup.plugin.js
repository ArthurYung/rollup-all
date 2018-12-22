import { uglify } from "rollup-plugin-uglify";
import sourcemaps from 'rollup-plugin-sourcemaps'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import progress from 'rollup-plugin-progress'
import html from 'rollup-plugin-fill-html'
import dev from './rollup.dev.js'
import clear from 'rollup-plugin-clear'

const plugin = mode => {

    const plugins = dev

    if(mode === 'env-build') plugins.push(uglify(),progress({clearLine: false}))
    
    else if(mode === 'start'){ 
        plugins.push(
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
        
        plugins.unshift(clear('dist'))

    } else {
        plugins.push(progress({clearLine: false}))
        
        plugins.unshift(clear('dist'))
    }
    
    return plugins
}

export default plugin
