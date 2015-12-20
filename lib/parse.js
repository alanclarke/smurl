var urlite = require('urlite/querystring/urlite')
var pick = require('./pick')

module.exports = function smurlParse (url) {
  var attr = ['protocol', 'host', 'pathname', 'query', 'hash']
  if (!/^(?:\w*:)?\/\//.test(url) && !/\/|\?|#/.test(url.charAt(0))) url = '//' + url
  var parsed = pick(urlite.parse(url), attr)
  return pick(parsed, function truthy (val) {
    return !!val
  })
}
