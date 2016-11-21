import  { expect } from 'chai'

const requiredFns = require('babel!literate-es!./example.js.md')
import { plus, times } from 'babel!literate-es!./example.js.md'

describe('webpack loader integration', function() {

  it('can read a markdown file via require statement', function() {
    expect(requiredFns.times(2, 2)).to.eq(4)
    expect(requiredFns.plus(2, 2)).to.eq(4)
  })

  it('can read a markdown file via import statement', function() {
    expect(times(2, 2)).to.eq(4)
    expect(plus(2, 2)).to.eq(4)
  })

})




