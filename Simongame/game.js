var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosenPattern = [];
var level = 0;
var started = "false";
console.log(userChosenPattern);
console.log(gamePattern);


function nextSequence() {
  userChosenPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(200).fadeIn(200);
  animateSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
  started = "true";
}

$(document).keydown(function() {
  if (started !== "true") {
    nextSequence();
  }
});


$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userChosenPattern.push(userChosenColour);
  animateSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userChosenPattern.length - 1);
});


function animateSound(color) {
  switch (color) {
    case "blue":
      var bluesound = new Audio("sounds/blue.mp3");
      bluesound.play();
      break;

    case "red":
      var redsound = new Audio("sounds/red.mp3");
      redsound.play();
      break;

    case "green":
      var greensound = new Audio("sounds/green.mp3");
      greensound.play();
      break;

    case "yellow":
      var yellowsound = new Audio("sounds/yellow.mp3");
      yellowsound.play();
      break;

    default:
      var wrongsound = new Audio("sounds/wrong.mp3");
      wrongsound.play();

  }
}

function animatePress(chosenColor) {
  $("#" + chosenColor).addClass("pressed");
  setTimeout(function() {
    $("#" + chosenColor).removeClass("pressed");
  }, 200);
}

function startOver() {
  started = "false";
  level = 0;
  gamePattern = [];
}


function checkAnswer(userlevel) {
  if (userChosenPattern[userlevel] === gamePattern[userlevel]) {
    if (userChosenPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    animateSound();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }


}
