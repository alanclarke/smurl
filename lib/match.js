var parse = require('./parse')
var spec = require('./spec')

module.exports = function smurlMatch (actual, expected, interpreter) {
  actual = parse(actual)
  expected = parse(expected)
  if (!actual.pathname) actual.pathname = '/'
  if (interpreter) expected = interpreter(expected)
  return spec(actual, expected)
}
