const path = require('path');

console.log(path.sep)
const filePath = path.join('/github/','01-node-tutorial','01-intro.js')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'github','01-node-tutorial','01-intro.js')

console.log(absolute)