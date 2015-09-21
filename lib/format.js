module.exports = function format (parsedUrl) {
  var parts = ['protocol', 'domain', 'path', 'query', 'hash']
  var url = ''
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i]
    if (parsedUrl.hasOwnProperty(part)) {
      if (part === 'query') {
        url += formatQuery(parsedUrl[part])
      } else {
        url += parsedUrl[part]
      }
    }
  }
  return url
}

function formatQuery (query) {
  var parts = []
  for (var param in query) {
    if (query.hasOwnProperty(param)) {
      parts.push(param + '=' + query[param])
    }
  }
  return '?' + parts.join('&')
}
