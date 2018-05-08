const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
 it('Returns empty string if empty string was provided', () => {
   expect(wrap("", 10)).to.equal("");
 });

 it('Returns 1 line of string for string length equal to maxLen', () => {
   expect(wrap("Lorem ipsum dolor si", 20)).to.equal
   ("Lorem ipsum dolor si");
 });

 it('Returns multiple lines of string greater than maxLen', () => {
   expect(
     wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal
     (`Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`);
 });
});
