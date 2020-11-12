module.exports = function glob (str, pattern) {
  if (!pattern) return true
  pattern = '^' + String(pattern)
    .replace(/[?.+^$[\]()]/g, function (a) {
      return '\\' + a
    })
    .replace(/\*+/g, function (m) {
      return m.length === 1 ? '[^/]+' : '.+'
    }) + '$'
  return new RegExp(pattern, 'gi').test(String(str))
}
