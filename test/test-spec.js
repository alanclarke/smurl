/* global describe it */
var expect = require('expect.js')
var spec = require('../lib/spec')

describe('spec', function () {
  it('should return true if spec matches', function () {
    expect(spec({ a: 1, b: 2 }, { a: 1 })).to.eql(true)
    expect(spec({ a: 1, b: 2 }, { b: 2 })).to.eql(true)
  })
  it('should return false if spec does not match', function () {
    expect(spec({ a: 1, b: 2 }, { b: 1 })).to.eql(false)
    expect(spec({ a: 1, b: 2 }, { a: 2 })).to.eql(false)
  })
  describe('nested', function () {
    it('should return true if spec matches', function () {
      expect(spec({ nested: { a: 1, b: 2 } }, { nested: { a: 1 } })).to.eql(true)
      expect(spec({ nested: { a: 1, b: 2 } }, { nested: { b: 2 } })).to.eql(true)
    })
    it('should return false if spec does not match', function () {
      expect(spec({ nested: { a: 1, b: 2 } }, { nested: { b: 1 } })).to.eql(false)
      expect(spec({ nested: { a: 1, b: 2 } }, { nested: { a: 2 } })).to.eql(false)
    })
  })
  it('should handle undefined', function () {
    expect(spec({ nested: { a: 'hello' } }, { nested: { a: undefined } })).to.eql(true)
  })
})
