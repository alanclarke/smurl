/* global describe, it, before, expect */
var parse = require('../parse')

describe('parse', function () {
  describe('protocol', function () {
    it('should get the protocol', function () {
      expect(parse('http://www.blah.com').protocol).to.eql('http://')
      expect(parse('https://www.blah.com').protocol).to.eql('https://')
      expect(parse('https://').protocol).to.eql('https://')
      expect(parse('http://').protocol).to.eql('http://')
      expect(parse('www.blah.com')).not.to.have.key('protocol')
    })
  })
  describe('path', function () {
    it('should get the path', function () {
      expect(parse('/path/blah').path).to.eql('/path/blah')
      expect(parse('/path/blah?a=b#b=2').path).to.eql('/path/blah')
      expect(parse('http://www.blah.com/path/blah?a=b#b=2').path).to.eql('/path/blah')
      expect(parse('www.blah.com')).not.to.have.key('path')
    })
  })
  describe('query', function () {
    expect(parse('?a=b').query).to.eql('?a=b')
    expect(parse('?a=b#b=2').query).to.eql('?a=b')
    expect(parse('http://www.blah.com/path/blah?a=b#b=2').query).to.eql('?a=b')
    expect(parse('www.blah.com')).not.to.have.key('query')
  })
  describe('hash', function () {
    expect(parse('#a=b').hash).to.eql('#a=b')
    expect(parse('?a=b#b=2').hash).to.eql('#b=2')
    expect(parse('http://www.blah.com/path/blah?a=b#b=2').hash).to.eql('#b=2')
    expect(parse('www.blah.com')).not.to.have.key('hash')
  })
})
