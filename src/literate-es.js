// var extractCodeBlocks = require('./extractCodeBlocks')
import extractCodeBlocks from './extractCodeBlocks'

module.exports = function(source, map) {
  this.cacheable && this.cacheable()
  const code = extractCodeBlocks(source)
  this.callback(null, code, map)
}

