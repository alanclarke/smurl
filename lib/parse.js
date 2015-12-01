var urlite = require('urlite/querystring/urlite')
var pick = require('lodash-compat/object/pick')
var identity = require('lodash-compat/utility/identity')

module.exports = function smurlParse (url) {
  var attr = ['protocol', 'host', 'pathname', 'query', 'hash']
  if (!/^(?:\w*:)?\/\//.test(url) && !/\/|\?|#/.test(url.charAt(0))) url = '//' + url
  var parsed = pick(urlite.parse(url), attr)
  if (parsed.host && !parsed.pathname) parsed.pathname = '/'
  return pick(parsed, identity)
}
