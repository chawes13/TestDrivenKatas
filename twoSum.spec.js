const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
 it('Returns empty array if an empty array was provided', () => {
   expect(twoSum([], 2)).to.deep.equal([]);
 });

 it('Returns an array of unique indices', () => {
  expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });

  it('Returns an array of unique indices when passed an unordered array', () => {
    expect(twoSum([29, 1, 4, 2, 9, 30, 7, 17], 34)).to.deep.equal([2, 5]);
    });

});
