/* global describe it */
var expect = require('expect.js')
var glob = require('../lib/glob')

describe('glob', function () {
  describe('single asterisk', function () {
    it('should return true if matches', function () {
      expect(glob('https://www.blah.com/a/b/c', 'https://www.blah.com/a/*/c')).to.eql(true)
      expect(glob('https://www.blah.com/a/hello.js', 'https://www.blah.com/a/*.js')).to.eql(true)
    })
    it('should return false if does not match', function () {
      expect(glob('https://www.blah.com/a/b/c', 'https://www.blah.com/*/c')).to.eql(false)
      expect(glob('https://www.blah.com/a/hello.js', 'https://www.blah.com/*.js')).to.eql(false)
    })
  })
  describe('double asterisk', function () {
    it('should return true if matches', function () {
      expect(glob('https://www.blah.com/a/b/c/d', 'https://www.blah.com/a/**/d')).to.eql(true)
      expect(glob('https://www.blah.com/a/b/c/d', 'https://www.blah.com/a/****/d')).to.eql(true)
      expect(glob('https://www.blah.com/a/b/c/d', 'https://www.blah.com/a/**/c/d')).to.eql(true)
      expect(glob('https://www.blah.com/a/b/c/d/e/f', 'https://www.blah.com/a/**/d/**/f')).to.eql(true)
      expect(glob('https://www.blah.com/a/b/c/d/e/f', 'https://www.blah.com/a/**/d/*/f')).to.eql(true)
    })
    it('should return false if does not match', function () {
      expect(glob('https://www.blah.com/a/b/c/d', 'https://www.blah.com/a/**/c')).to.eql(false)
    })
  })
})
