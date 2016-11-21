import os from 'os'
import marked from 'marked'

export default function extractCodeBlocks(source) {
  const SEPARATOR = os.EOL + os.EOL

  // Break the Markdown `text` into tokens.
  const tokens     = marked.lexer(source)
  // Check each token, and push it unto an array if it is a code block.
  const codeBlocks = tokens.reduce(function(blocks, token) {
    if (token.type === 'code') {
      blocks.push(new Buffer(token.text))
      blocks.push(new Buffer(SEPARATOR))
    }

    return blocks
  }, [])

  codeBlocks.pop() // remove trailing EOL adding from the while loop

  return Buffer.concat(codeBlocks).toString()
}

