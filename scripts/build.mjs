import fs from 'node:fs'
import { minify_sync } from 'terser'

let src = fs.readFileSync('main.js').toString()
    .replace(/export default .+/, '')

src = '{' + src + '\n}'

const result = minify_sync(src)

let dst = result.code

fs.writeFileSync('browser.min.js', dst)
