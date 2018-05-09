const scores = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty",
};

class TennisGame {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  playerOneScores() {
    this.playerOneScore += 1;
  }

  getNamedScore() {
    const pOneScore = scores[this.playerOneScore];
    const pTwoScore = scores[this.playerTwoScore];
    const diff = Math.abs(this.playerOneScore - this.playerTwoScore);

    if (pOneScore === pTwoScore && this.playerOneScore >= 3) {
      return "Deuce";
    } else if (this.playerOneScore > 3) {
      if (this.playerOneScore - this.playerTwoScore < 2) {
        return `${this.playerOne} advantage`;
      } else {
        return `${this.playerOne} wins`;
      }
    } else if (this.playerTwoScore > 3) {
      if (this.playerTwoScore - this.playerOneScore < 2) {
        return `${this.playerTwo} advantage`;
      } else {
        return `${this.playerTwo} wins`;
      }
    }

    return `${pOneScore}, ${pTwoScore}`;
  }

  bulkScore(pOne, pTwo) {
    this.playerOneScore += pOne;
    this.playerTwoScore += pTwo;
  }

}

module.exports = TennisGame;
