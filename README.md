# Smurl
smart url matching

- matches url fragments (protocol, domain, path, querystring)
- ignores url fragments if omitted
- does case insensitive matching on querystring params

## Usage

```javascript
//api
match(actual, expected)

// match protocol (omit to make the matching protocol agnostic)
match('http://www.domain.com?a=b#blah', 'http://') // true
match('https://www.domain.com?a=b&b=c#blah', 'https://') // true

// match path (omit to make the matching path agnostic)
match('http://www.domain.com/somepath?a=b&b=c#blah', '/somepath') // true
match('http://www.domain.com/somepath/anotherpath?a=b&b=c#blah', '/somepath') // false

// match query (omit to make the matching querystring agnostic)
match('https://www.domain.com?a=b#blah', '?a=b') // true
match('http://www.domain.com?a=b&b=c#blah', '?b=c&a=b') // true

// match hash (omit to make the matching hash agnostic)
match('http://www.domain.com/somepath?a=b&b=c#blah', '#blah') // true

//match on domain and path
match('https://www.domain.com/blah?a=b#blah', 'www.domain.com/blah') // true

//match on all possible fragments
match('https://www.domain.com?a=b#blah', 'https://www.domain.com?a=b#blah') // true
```
