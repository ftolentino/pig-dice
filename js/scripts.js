// Business Logic for Player Scores
function ScoreTable () {
  this.score = {};
}
PlayerOneScore.prototype.addScore = function(score){
  
}
// Business Logic for Players
function Players(playerOneScore, playerTwoScore) {
  this.playerOneScore = playerOneScore;
  this.playerTwoScore = playerTwoScore;
}

Players.prototype.scoreSum = function () {
  let diceRollNumber = diceRoll(1, 6);
  return this.playerOneScore = diceRollNumber;
}

// Business Logic for Dice
function diceRoll (min, max) {
   min = Math.ceil(min);

   max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}







// UI Logic


$(document).ready(function() {
  $("button#dice-button").click(function(event) {
    event.preventDefault();
    let diceRollNumber = diceRoll(1, 6);
    console.log(diceRollNumber);
    

   
   $('ul#dice-number').show().html(diceRollNumber);
  });
});