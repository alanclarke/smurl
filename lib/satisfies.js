var isPlainObject = require('lodash-compat/lang/isPlainObject')

module.exports = function satisfies (obj, spec) {
  var satisfied = true
  for (var key in spec) {
    if (spec.hasOwnProperty(key)) {
      if (isPlainObject(spec[key])) {
        satisfied = obj[key] && satisfies(obj[key], spec[key])
      } else {
        satisfied = spec[key] === obj[key]
      }
      if (!satisfied) break
    }
  }
  return satisfied
}
