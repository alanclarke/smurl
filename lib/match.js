var parse = require('./parse')
var isMatch = require('lodash-compat/lang/isMatch')

module.exports = function smurlMatch (actual, expected, expectPath) {
  actual = parse(actual)
  expected = parse(expected)
  if (!actual.pathname) actual.pathname = '/'
  if (expectPath && expected.host && !expected.pathname) expected.pathname = '/'
  return isMatch(actual, expected)
}
