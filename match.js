var parse = require('./parse')

module.exports = function smurlMatch (actual, expected) {
  actual = parse(actual)
  expected = parse(expected)
  var match = true
  for (var part in expected) {
    match = match && expected[part] === actual[part]
  }
  return match
}
