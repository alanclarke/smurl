/* global describe it */
var expect = require('expect.js')
var pick = require('../lib/pick')

describe('pick', function () {
  it('should filter values that arent in the list of attributes', function () {
    expect(pick({ a: 1, b: 2 }, ['a'])).to.eql({ a: 1 })
    expect(pick({ a: 1, b: 2 }, ['b'])).to.eql({ b: 2 })
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'b'])).to.eql({ a: 1, b: 2 })
  })
  it('should filter if a function is used instead of a list', function () {
    expect(pick({ a: 1, b: 2 }, function (val) { return val === 1 })).to.eql({ a: 1 })
    expect(pick({ a: 1, b: 2 }, function () { return true })).to.eql({ a: 1, b: 2 })
    expect(pick({ a: 1, b: 2, c: 3 }, function () { return false })).to.eql({})
  })
})
