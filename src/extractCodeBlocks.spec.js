import extractCodeBlocks from './extractCodeBlocks'
import { expect } from 'chai'


describe('extractCodeBlocks', function () {

  it('parses indented code blocks', function () {

    const src = `# Indented Example
Let's try indented code.

    const text = 'Lorem ipsum dolor, sit amet...';

Now, print it.

    console.log(text);
`

const expected = `const text = 'Lorem ipsum dolor, sit amet...';

console.log(text);`

    expect(extractCodeBlocks(src)).to.equal(expected)
  });

  it('parses fenced code blocks', function () {

    const src = `
# Indented Example
Let's try fenced code.
\`\`\`
const text = 'Lorem ipsum dolor, sit amet...';
\`\`\`
   
Now, print it.
   
\`\`\`
console.log(text);
\`\`\`
`

    const expected =
            `const text = 'Lorem ipsum dolor, sit amet...';

console.log(text);`

    expect(extractCodeBlocks(src)).to.equal(expected)
  });


  it('parses jsx code blocks', function () {

    const src = `# Include Some JSX
[React][] is a library by Facebook for building UIs. It features an optional
HTML-like syntax called **JSX**:

    var React = require("react");

Then, declare a _component_:

    var Panel = module.exports = React.createClass({
      render() {
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">{this.props.title}</h3>
            </div>
            <div className="panel-body">
              {this.props.children}
            </div>
          </div>
        )
      }
    });
    
**That's it!** It's just that simple.
[react]: http://facebook.github.io/react`

    const expected = `var React = require("react");

var Panel = module.exports = React.createClass({
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
});`

    expect(extractCodeBlocks(src)).to.equal(expected)
  })

})




