# Literate ES Webpack Loader 

Write Markdown files with ES6 blocks in them, and then execute the
ES6 code.

## Installation

```bash
me$ npm install -D literate-es-webpack-loader
```

And configure webpack:

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
and I wanted to ensure all the examples were executable and correct.
So I found Erudite, which would let me compile and execute the code.
I thought it would be nice to have it integrated with Webpack-- so
one could write any code within Markdown.

## References

* Donald Knuth and [Literate Programming](http://en.wikipedia.org/wiki/Literate_programming) 
* [Literate CoffeeScript](http://coffeescript.org/#literate).
* [Erudite](https://github.com/artisonian/erudite) is Literate Programming
  in Javascript. I started off using this code, but I ended up copying it over
  so that I could modify it freely. 
  
## Todo

* Better support for tests written in literate Javascript




