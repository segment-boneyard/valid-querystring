var assert = require('assert');
var valid = require('./');

describe('valid-querystring', function(){
  it('should return true for valid querystrings', function(){
    var obj = { a: { good: { string: true }}};
    assert(valid(obj));
  });

  it('should return false for invalid querystrings', function(){
    var obj = { a: { bad: { string: '\uD800'}}};
    assert(!valid(obj));
  });
});