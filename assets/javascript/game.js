//assign variables for goal(19-120), crystals (1-12), total, wins, losses

var goal = Math.floor((Math.random() * 120) + 19);

var green = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);

var guessTotal = 0;
var wins = 0;
var losses = 0;


//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

$(document).ready(function(){
  $(".goal").html(goal);

  $(".green").click(function() {
  update(green);
  });

  $(".yellow").click(function() {
  update(yellow);
  });

  $(".red").click(function() {
  update(red);
  });

  $(".purple").click(function() {
  update(purple);
  });
});


//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

function reset() {
  goal = Math.floor((Math.random() * 120) + 19);
  $(".goal").html(goal);

  green = Math.floor((Math.random() * 12) + 1);
  yellow = Math.floor((Math.random() * 12) + 1);
  red = Math.floor((Math.random() * 12) + 1);
  purple = Math.floor((Math.random() * 12) + 1);

  guessTotal = 0;

  $(".current").html(guessTotal);
}

//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.
//The game restarts whenever the player wins or loses.

function update(color) {
  guessTotal += color;

  $(".current").empty();
  $(".current").append(guessTotal);


  if (guessTotal > goal) {
    losses++;
    $("#losses").html(losses);

    reset();

  } else if (guessTotal == goal) {
      wins++;
      $("#wins").html(wins);
      reset();
  };
};
