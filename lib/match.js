var parse = require('./parse')
var spec = require('./spec')

module.exports = function smurlMatch (actual, expected) {
  actual = parse(actual)
  expected = parse(expected)
  if (!actual.pathname) actual.pathname = '/'
  return spec(actual, expected)
}
