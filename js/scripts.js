// Business Logic for Player Scores
function ScoreTable () {
  this.diceNumber = 0;
  this.diceSum = 0;
}

let playerOne = new ScoreTable();
let playerTwo = new ScoreTable();


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
  $("#dice-button").click(function(event) {
    event.preventDefault();
    
    playerOne.diceRoll();
    playerOne.scoreSum();

    console.log(playerOne);
   

   $('#dice-number').show().html(playerOne.diceNumber);
   $('#dice-sum').show().html(playerOne.diceSum);
  });
});