const { expect } = require('chai');
const TennisGame = require('./tennisgame');

describe('A Tennis Game', () => {
  let tennisGame;
  beforeEach(() => {
    tennisGame = new TennisGame('Federer', 'Nadal');
  });

  it('stores the names for both players', () => {
    expect(tennisGame.playerOne).to.equal('Federer');
    expect(tennisGame.playerTwo).to.equal('Nadal');
  });

  it('starts at "Love, Love" for both players', () => {
    expect(tennisGame.getNamedScore()).to.equal('Love, Love');
  });

  it('updates score for player one', () => {
    tennisGame.playerOneScores();
    expect(tennisGame.getNamedScore()).to.equal('Fifteen, Love');
    tennisGame.playerOneScores();
    expect(tennisGame.getNamedScore()).to.equal('Thirty, Love');
  });

  it('updates score for both players', () => {
    tennisGame.bulkScore(2, 2);
    expect(tennisGame.getNamedScore()).to.equal('Thirty, Thirty');
  });

  it('handles a tie', () => {
    tennisGame.bulkScore(3, 3);
    expect(tennisGame.getNamedScore()).to.equal('Deuce');
  });

  it('indicates advantage', () => {
    tennisGame.bulkScore(4, 3);
    expect(tennisGame.getNamedScore()).to.equal('Federer advantage');
  });

  it('shows the correct winner', () => {
    tennisGame.bulkScore(4, 0);
    expect(tennisGame.getNamedScore()).to.equal('Federer wins');
  });

  it('shows the correct winner after a deuce', () => {
    tennisGame.bulkScore(5, 3);
    expect(tennisGame.getNamedScore()).to.equal('Federer wins');
  });

});
