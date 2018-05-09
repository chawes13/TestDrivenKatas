const { expect } = require('chai');
const longestCommonPrefix = require('./longestCommonPrefix');

describe('Longest Common Prefix', () => {
  it('returns an empty string when passed an empty array', () => {
    expect(longestCommonPrefix([])).to.equal('');
  });

  it('returns the entire word when only one element is passed in the array', () => {
    expect(longestCommonPrefix(['foobar'])).to.equal('foobar');
  });

  it('returns the longest common prefix between two words', () => {
    expect(longestCommonPrefix(['foobar', 'football'])).to.equal('foo');
  });

  it('returns the longest common prefix between three words', () => {
    expect(longestCommonPrefix(['football', 'foot', 'foosball'])).to.equal('foo');
  });

  it('returns an empty string when there are no common prefixes', () => {
    expect(longestCommonPrefix(['soccer', 'first', 'third', 'fourth'])).to.equal('');
  });

});
