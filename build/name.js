import { name } from '../package.json'

const cases = name.split('-')
let CamelCase = ''
if(cases.length === 1) CamelCase = cases[0]
cases.map( (n, i) => {
    i === 0 ? CamelCase += n : CamelCase += n.replace(/^./, x=>x.toUpperCase())
})
CamelCase

export default CamelCase