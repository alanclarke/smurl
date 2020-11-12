var urlite = require('urlite/extra')
var pick = require('./pick')

module.exports = function smurlParse (url) {
  var attr = ['hostname', 'pathname', 'search', 'hash']
  if (!/^(?:\w*:)?\/\//.test(url) && !/\/|\?|#/.test(url.charAt(0))) url = '//' + url
  var parsed = pick(urlite.parse(url), attr)
  return pick(parsed, function truthy (val) {
    return !!val
  })
}
