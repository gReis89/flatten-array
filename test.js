var expect = require('chai').expect;
var flattenArray = require('./index.js');

var test1 = [1,2,3,4,5,[6,7],[8,9],10];
var test2 = [1,2,[3,4],[5,[6,7,[8]], 9], 10];
var test3 = [[1,[2,[3,[4,[5,[6]]]]]], 7, 8, [9,[10]]];
var expected = [1,2,3,4,5,6,7,8,9,10];

describe('Flatten Array', function () {
  it('should return a flattened array on test case 1', function () {
    expect(flattenArray(test1)).to.deep.equal(expected);
  })
  it('should return a flattened array on test case 2', function () {
    expect(flattenArray(test2)).to.deep.equal(expected);
  })
  it('should return a flattened array on test case 3', function () {
    expect(flattenArray(test3)).to.deep.equal(expected);
  })
});
