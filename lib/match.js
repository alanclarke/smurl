var parse = require('./parse')
var satisfies = require('./satisfies')

module.exports = function smurlMatch (actual, expected) {
  actual = parse(actual)
  expected = parse(expected)
  var match = satisfies(actual, expected)
  return match
}
