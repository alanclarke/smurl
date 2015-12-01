var parse = require('./parse')
var isMatch = require('lodash-compat/lang/isMatch')

module.exports = function smurlMatch (actual, expected) {
  actual = parse(actual)
  expected = parse(expected)
  if (!actual.pathname) actual.pathname = '/'
  return isMatch(actual, expected)
}
