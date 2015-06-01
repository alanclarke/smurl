module.exports = function query (querystring) {
  var obj = {}, i, keyValue
  querystring = querystring.replace(/^\?/, '')
  if (!querystring) return {}
  var pairs = querystring.split('&')
  for (i in pairs) {
    keyValue = pairs[i].split('=')
    obj[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1])
  }
  return obj
}
