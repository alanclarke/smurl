var parse = require('./parse')
var isMatch = require('lodash-compat/lang/isMatch')

module.exports = function smurlMatch (actual, expected) {
  return isMatch(parse(actual), parse(expected))
}
