var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = -1;
var currentLevel;

$(".btn").click(function(){
  var userChosenColour = this.id; // gets the id of the clicked button
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer((userClickedPattern.length) - 1);
});

$(document).keypress(function() { // when users press a key to start the game
  if(level === -1){
    nextSequence();
  }
})

function nextSequence() {

  userClickedPattern = []; // setting to empty array at each level
  ++level;
  $("h1").text("Level "+ level); //updates h1's text at each level

  var randomNumber = Math.floor(Math.random() * 4); // returns random number between 0 and 3
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); // adds new button colour to end of the array

  $('#'+randomChosenColour).fadeOut(100).fadeIn(100); // creating a flash effect

  playSound(randomChosenColour);
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){ // check if the users last answer is true
      if(userClickedPattern.length === gamePattern.length){
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
  }
  else{ // if user is wrong
    playSound("wrong");
    $("h1").text("Game Over. Press any key to restart");
    $("body").addClass("game-over");
    setTimeout(function()   {
      $("body").removeClass("game-over");
    }, 100);
    startOver();
  }
}

function playSound(buttonName) {
  var audio = new Audio("sounds/" + buttonName + ".mp3"); // specify the button's audio
  audio.play();
}

function animatePress(color) {
  $("#"+color).addClass("pressed");
  setTimeout(function() {
      $("#"+color).removeClass("pressed");
    }, 100); // removing class after 0.1 seconds to create an animation
}

function startOver(){ // to restart the game
  level = -1
  gamePattern = [];
}
