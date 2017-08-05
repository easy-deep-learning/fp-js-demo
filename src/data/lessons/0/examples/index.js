const fs = require('fs')
const path = require('path')
const esprima = require('esprima')

const examples = fs.readdirSync(__dirname).reduce((result, exampleID) => {
  if (exampleID === 'index.js') return result

  const code = fs.readFileSync(path.resolve(__dirname, exampleID), 'utf-8')
  const ast = esprima.parseScript(code)

  result[exampleID.split('.')[0]] = {
    code,
    ast
  }
  return result
}, {})

module.exports = examples
