var parse = require('./parse')
var isMatch = require('lodash-compat/lang/isMatch')

module.exports = function smurlMatch (actual, expected, interpreter) {
  actual = parse(actual)
  expected = parse(expected)
  if (!actual.pathname) actual.pathname = '/'
  if (interpreter) expected = interpreter(expected)
  return isMatch(actual, expected)
}
