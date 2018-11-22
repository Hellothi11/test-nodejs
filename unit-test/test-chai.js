const assert = require('chai').assert
  , expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe("Test chai ne ban oi", function() {
  it("chai", function() {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);

    assert.typeOf(foo, 'string'); // without optional message
    assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
    assert.equal(foo, 'bar', 'foo equal `bar`');
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
  });
});
