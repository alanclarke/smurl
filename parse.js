module.exports = function smurlParse (url) {
  var parts = {
    protocol: /http/.test(url) && url.split('/')[0] && url.split('/')[0] + '//',
    domain: url.replace(/\/.*/, ''),
    path: url.replace(/(https?:)?\/\//, '').replace(/[^\/]*/, '').replace(/\?.*/, ''),
    query: /\?/.test(url) && url.replace(/.*\?/, '').replace(/\#.*/, ''),
    hash: /\#/.test(url) && url.replace(/.*\#/, '')
  }
  parts.query = parts.query && '?' + parts.query
  parts.hash = parts.hash && '#' + parts.hash
  for (var part in parts) {
    if (parts.hasOwnProperty(part)) {
      if (!parts[part]) {
        delete parts[part]
      }
    }
  }
  return parts
}
