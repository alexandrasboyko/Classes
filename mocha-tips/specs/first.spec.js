// @ts-check
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

function wrapper(b) {
  return () => {
    ///
    b()
  }

}

function wrappedIt(title, bodyCallback, options) {
  console.log(options)
  if(argv.a && options && options.a) {
    it(title, wrapper())// bodyCallback)
  } else if(argv.a && (!options || !options.a)) {
    it.skip(title, bodyCallback)
  } else {it(title, bodyCallback)}

}
wrappedIt.skip = function(title, func) {
  it.skip(title, func)
}
wrappedIt.only = function(title, func) {
  it.only(title, func)
}

describe('firstSuite', function() {
  wrappedIt('firstTest', function() {
    console.log('in first it')
  }, {skip: 'skip'})
  wrappedIt.only('secondTest', function() {
    console.log('in second it')
  }, {a: 'a'})
  beforeEach('beforeEach', function() {
    console.log('beforeEach')
  })
  afterEach('afterEach', function() {
    console.log('afterEach')
  })
})

console.log(global.it)

console.log(argv)






