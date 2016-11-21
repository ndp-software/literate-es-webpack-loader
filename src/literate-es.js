// var extractCodeBlocks = require('./extractCodeBlocks')
import extractCodeBlocks from './extractCodeBlocks'

module.exports = function(source, map) {
  if (this.cacheable) this.cacheable()
  const code = extractCodeBlocks(source)
  this.callback(null, code, map)
}

