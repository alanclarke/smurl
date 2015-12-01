# ![smurl](https://cloud.githubusercontent.com/assets/640611/11503072/7901f55c-9836-11e5-9e5f-d3fdcd690b1d.png)

[![Dependency Status](https://david-dm.org/qubitdigital/smurl.svg)](https://david-dm.org/qubitdigital/smurl)
[![devDependency Status](https://david-dm.org/qubitdigital/smurl/dev-status.svg)](https://david-dm.org/qubitdigital/smurl#info=devDependencies)

smart partial url matching
```
npm install smurl
```
```javascript
// api
match(actual, expected)

// match on protocol
match('http://www.domain.com/?a=b#blah', 'http://') // true
match('http://www.domain.com/?a=b&b=c#blah', 'https://') // false

// match on path
match('http://www.domain.com/somepath?a=b&b=c#blah', '/somepath') // true
match('http://www.domain.com/somepath/anotherpath?a=b&b=c#blah', '/somepath') // false
match('http://www.domain.com/?a=b&b=c#blah', '/') // true

// match on querystring (query params are order agnostic)
match('https://www.domain.com/?a=b#blah', '?a=b') // true
match('http://www.domain.com/?a=b&b=c#blah', '?b=c&a=b') // true
match('http://www.domain.com/?a=b&b=c&c=d#blah', '?b=c&a=b') // true
match('http://www.domain.com/?y=z#blah', '?b=c&a=b') // false

// match on hash
match('http://www.domain.com/somepath?a=b&b=c#blah', '#blah') // true

// match on domain and path
match('https://www.domain.com/blah?a=b#blah', 'www.domain.com/blah') // true

// match on all possible fragments
match('https://www.domain.com/?a=b#blah', 'https://www.domain.com?a=b#blah') // true
```

```
npm test
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
