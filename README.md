# ![smurl](https://cloud.githubusercontent.com/assets/640611/11503072/7901f55c-9836-11e5-9e5f-d3fdcd690b1d.png)

smart partial url matching for nodejs and the browser
```
npm install smurl
```
```javascript
var match = require('smurl')

// match on path
match('https://www.domain.com/somepath?a=b&b=c#blah', '/somepath') // true
match('https://www.domain.com/anotherpath?a=b&b=c#blah', '/somepath') // false
match('https://www.domain.com/?a=b&b=c#blah', '/') // true

// match on querystring (order of querystring params does not matter)
match('https://www.domain.com/?a=b&b=c', '?b=c') // true
match('https://www.domain.com/?a=b&b=c', '?b=c&a=b') // true
match('https://www.domain.com/?a=b&b=c&c=d', '?b=c&a=b') // true
match('https://www.domain.com/?a=b', '?b=c') // false

// match on hash
match('https://www.domain.com/#a=b&b=c', '#b=c') // true
match('https://www.domain.com/#a=b&b=c', '#b=c&a=b') // true
match('https://www.domain.com/#a=b&b=c&c=d', '#b=c&a=b') // true
match('https://www.domain.com/#a=b', '#b=c') // false

// match on domain
match('https://www.domain.com/blah?a=b#blah', 'www.domain.com') // true

// match on domain and path
match('https://www.domain.com/a', 'www.domain.com/a') // true

// wildcard matching
match('https://a.b.c.domain.com/blah?a=b#blah', '*.domain.com') // true
match('https://www.domain.com/a/1234/b', 'www.domain.com/a/*/b') // true
match('https://www.domain.com/a/b/file.js', 'www.domain.com/**.js') // true
```

```
npm test
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)



## Want to work on this for your day job?

This project was created by the Engineering team at Qubit. As we use open source libraries, we make our projects public where possible.

We’re currently looking to grow our team, so if you’re a JavaScript engineer and keen on ES2016 React+Redux applications and Node micro services, why not get in touch? Work with like minded engineers in an environment that has fantastic perks, including an annual ski trip, yoga, a competitive foosball league, and copious amounts of yogurt.

Find more details on our Engineering site. Don’t have an up to date CV? Just link us your Github profile! Better yet, send us a pull request that improves this project.`
Contact GitHub API Training Shop Blog About
