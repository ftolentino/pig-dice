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
    // this.diceSum += this.totalScore;
    console.log('good job!');
  } else {
    // this.totalScore;
    console.log('sorry!')
  }
}

// UI Logic

$(document).ready(function () {
  $("#dice-button-one").click(function (event) {
    event.preventDefault();

    playerOne.diceRoll();
    playerOne.scoreSum();

    $("#dice-number-one").show().html(playerOne.diceNumber);
    $("#dice-sum-one").show().html(playerOne.diceSum);
  });
  $("#dice-button-two").click(function () {
    
    playerTwo.diceRoll();
    playerTwo.scoreSum();

    $("#dice-number-two").show().html(playerTwo.diceNumber);
    $("#dice-sum-two").show().html(playerTwo.diceSum);
  });

  // Hold Buttons
  $("#hold-button-one").click(function () {
    playerOne.holdSum();
    $("#total-score-one").text(playerOne.totalScore);
  });

  $("#hold-button-two").click(function () {
    playerTwo.totalSum();
    $("#total-score-two").text(playerTwo.totalScore);
  });
});
