var assert = require('assert');
var fun = require('../src/plus');

describe('demo test', function () {
  it('1 + 1 should equal to 2', function () {
    assert.equal(fun.plus(1, 1), 2);
  });
});
