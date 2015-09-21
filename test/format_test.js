/* global describe, it, expect */
var parse = require('../lib/parse')
var format = require('../lib/format')

describe('format', function () {
  it('should invert parse', function () {
    expect(format(parse('http://www.bgark.com'))).to.eql('http://www.bgark.com')
    expect(format(parse('http://www.bgark.com/path/s.jpg'))).to.eql('http://www.bgark.com/path/s.jpg')
    expect(format(parse('http://www.bgark.com/path/s.jpg?mcgee=1&muggins=hello'))).to.eql('http://www.bgark.com/path/s.jpg?mcgee=1&muggins=hello')
    expect(format(parse('http://www.bgark.com/path/s.jpg?mcgee=hello#hashtag'))).to.eql('http://www.bgark.com/path/s.jpg?mcgee=hello#hashtag')
    expect(format(parse('http://www.bgark.com/subfolder/?mcgee=hello#hashtag'))).to.eql('http://www.bgark.com/subfolder/?mcgee=hello#hashtag')
    expect(format(parse('www.bgark.com'))).to.eql('www.bgark.com')
  })
})
