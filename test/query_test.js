/* global describe, it, expect */
var query = require('../lib/query')

describe('query', function () {
  it('should get the query', function () {
    expect(query('?a=b')).to.eql({a: 'b'})
    expect(query('?a=b&b=c')).to.eql({a: 'b', b: 'c'})
    // expect(query('')).to.eql({})
  })
})
