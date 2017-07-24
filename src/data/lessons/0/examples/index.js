const fs = require('fs')
const path = require('path')
const literalsSource = fs.readFileSync(path.resolve(__dirname, 'literals.js'), 'utf-8')

module.exports = {
  literals: literalsSource
}
