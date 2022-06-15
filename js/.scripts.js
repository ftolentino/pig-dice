// Business Logic for Dice
function randomizeNumber (min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}







// UI Logic
$(document).ready(function() {
  attachContactListeners();
  $("form#dice-form").submit(function(event) {
    event.preventDefault();
    const diceRollNumber = 
    

   
   $('ul#dice-number').show().html(diceRollNumber);
  });
});