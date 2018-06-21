var goal = Math.floor((Math.random() * 120) + 19);

var green = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor((Math.random() * 12) + 1);

var guessTotal = 0;
var wins = 0;
var losses = 0;

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