/* global describe, it, expect */
var parse = require('../lib/parse')

describe('parse', function () {
  describe('protocol', function () {
    it('should get the protocol', function () {
      expect(parse('http://www.blah.com').protocol).to.eql('http://')
      expect(parse('https://www.blah.com').protocol).to.eql('https://')
      expect(parse('https://').protocol).to.eql('https://')
      expect(parse('http://').protocol).to.eql('http://')
    })
    it('should omit the protocol if not specified', function () {
      expect(parse('www.blah.com')).not.to.have.key('protocol')
    })
  })
  describe('path', function () {
    it('should get the path', function () {
      expect(parse('/path/blah').path).to.eql('/path/blah')
      expect(parse('/path/blah?a=b#b=2').path).to.eql('/path/blah')
      expect(parse('http://www.blah.com/path/blah?a=b#b=2').path).to.eql('/path/blah')
    })
    it('should not omit the path if domain is specified', function () {
      expect(parse('www.blah.com').path).to.equal('')
    })
    it('should omit the path if domain is not specified', function () {
      expect(parse('?a=b')).not.to.have.key('path')
      expect(parse('#a=b')).not.to.have.key('path')
      expect(parse('https://')).not.to.have.key('path')
    })
  })
  describe('query', function () {
    it('should get the query', function () {
      expect(parse('?a=b').query).to.eql({ a: 'b' })
      expect(parse('?a=b#b=2').query).to.eql({ a: 'b' })
      expect(parse('http://www.blah.com/path/blah?a=b#b=2').query).to.eql({ a: 'b' })
    })
    it('should omit the query if not specified', function () {
      expect(parse('www.blah.com')).not.to.have.key('query')
    })
  })
  describe('hash', function () {
    it('should get the hash', function () {
      expect(parse('#a=b').hash).to.eql('#a=b')
      expect(parse('?a=b#b=2').hash).to.eql('#b=2')
      expect(parse('http://www.blah.com/path/blah?a=b#b=2').hash).to.eql('#b=2')
    })
    it('should omit the hash if not specified', function () {
      expect(parse('www.blah.com')).not.to.have.key('hash')
    })
  })
  describe('all', function () {
    it('should identify all url fragments', function () {
      expect(parse('http://www.blah.com/a?a=b#blah')).to.eql({
        protocol: 'http://',
        domain: 'www.blah.com',
        query: { a: 'b' },
        hash: '#blah',
        path: '/a'
      })
    })
  })
})
