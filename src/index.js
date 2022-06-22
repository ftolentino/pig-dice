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
