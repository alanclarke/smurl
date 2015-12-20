module.exports = function pick (obj, include) {
  var result = {}
  if (typeof include === 'function') {
    for (var key in obj) if (obj.hasOwnProperty(key) && include(obj[key], key)) result[key] = obj[key]
  } else {
    var l = include.length
    while (l--) result[include[l]] = obj[include[l]]
  }
  return result
}
