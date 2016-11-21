# Literate ES Babel Loader 

Write Markdown files with ES6 blocks in them, and then execute the
ES6 code.

## Installation

```bash
me $ npm install -D literate-es-loader
```

```js
# webpack.config.js (or equivalent)

  module: {
    loaders:       [
       {
         test:   /.*\.js\.md$/,
         loader: 'bable!literate-es'
      }
    ]
    ...
```


## The Problem

I was writing a README.md for [Test Pantry](https://github.com/ndp/test-pantry),
and I wanted to make sure all the examples were executable and correct.
So I found Erudite, which would let me compile and execute the code, but
I thought it would be nice to have it more integrated with Webpack-- so
I could write any code in Markdown.

## References

* Donald Knuth and [Literate Programming](http://en.wikipedia.org/wiki/Literate_programming) 
* [Literate CoffeeScript](http://coffeescript.org/#literate).
* Add the direct ancestor, [Erudite](https://github.com/artisonian/erudite). 
  I started off trying to use this code, but I ended up copying it over
  so that I can get at and modify the pieces independently. That may do
  what you want.




