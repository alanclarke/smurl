var glob = require('./glob')

module.exports = function matchesSpec (obj, spec) {
  var match = true
  for (var key in spec) {
    match = match && (typeof spec[key] === 'object'
      ? matchesSpec(obj[key], spec[key])
      : glob(obj[key], spec[key])
    )
  }
  return match
}
