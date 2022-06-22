// Business Logic for Player Scores
function ScoreTable() {
  this.diceNumber = 0;
  this.diceSum = 0;
  this.totalScore = 0;
}

let playerOne = new ScoreTable();
let playerTwo = new ScoreTable();

// Business Logic for Dice
ScoreTable.prototype.diceRoll = function () {
  this.diceNumber = Math.floor(Math.random() * 6) + 1;
};

// Business Logic for Adding Dice total
ScoreTable.prototype.scoreSum = function () {
  if (this.diceNumber === 1) {
    this.diceSum = 0;
  } else {
    this.diceSum += this.diceNumber;
  }
};

//Businesss Logic for Total Rolling Score
ScoreTable.prototype.totalSum = function () {
  if (this.diceNumber === 1) {
    this.diceNumber = this.totalScore;
  } else {
    this.totalScore = this.diceSum;
  }

}

ScoreTable.prototype.holdSum = function () {
  if (this.diceNumber != 1) {
    console.log('good job!');
  } else {
    console.log('sorry!')
  }
}



