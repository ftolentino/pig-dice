// Business Logic for Player Scores
function ScoreTable () {
  // this.diceNumber = function () {
  //   Math.floor(Math.random() * 6) + 1;
  // }
  this.score = 0;
  this.diceNumber = 0;
  this.diceSum = 0;
}

let playerOne = new ScoreTable();


// Business Logic for Dice
ScoreTable.prototype.diceRoll = function () {
  this.diceNumber = Math.floor(Math.random() * 6) + 1;
}

// Business Logic for Adding Dice total
ScoreTable.prototype.scoreSum = function () {
  if (this.diceNumber === 1) {
    this.diceSum = 0;
  } else {
    this.diceSum += this.diceNumber; 
  }
}


// UI Logic

$(document).ready(function() {
  $("button#dice-button").click(function(event) {
    event.preventDefault();
    playerOne.diceRoll();
    playerOne.scoreSum();

    console.log(playerOne);
   

   $('ul#dice-number').show().html(playerOne);
  });
});