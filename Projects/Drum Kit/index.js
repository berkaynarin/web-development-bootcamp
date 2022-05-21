/*Playing sound with mouse clicks */

var numberOfDrumButtons = document.querySelectorAll(".drum").length; // stores how many drum buttons are there

for (var i = 0; i < numberOfDrumButtons; i++) { // adding event listener to all drum buttons

  document.querySelectorAll('button')[i].addEventListener("click", function() { //anonymous function

    var buttonHTML = this.innerHTML;
    playAudio(buttonHTML);
    makeAnimation(buttonHTML);
  });
}

/*Playing sound with keyboard presses*/

document.addEventListener("keydown", function(event){
    var buttonKey = event.key; /*The key property gives the name of the key pressed */
    playAudio(buttonKey);
    makeAnimation(buttonKey);
});


/*Function for just playing sounds*/

function playAudio(userInput) {

  switch (userInput) {
    case "w":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "a":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "s":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "d":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    default:
  }
}

function makeAnimation(buttonName) {
  var activeButton = document.querySelector("." + buttonName) // selecting the button that pressed
  activeButton.classList.add("pressed"); // adding animation class to button that pressed
  setTimeout(() => { activeButton.classList.remove("pressed"); }, 200); // removing the animation class after 0.2 seconds
}
