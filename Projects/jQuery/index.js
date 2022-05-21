/* $("h1").css("color") //gets all the h1's color property
   $("button").css("font-size", "Maritona") //sets all the button's font-size to Maritona */

// In order to keep our code clean we need to seperate design from javascript

/*$("h1").addClass("big-title margin-50"); //adding 2 class to h1

  $("button").attr("class", "margin-50"); // we can also add class by adding attribute ("name of the attribute", "value you want to set")
// If you add class like this, it deletes the old class.*/

$(document).keypress(function(event) {
  $("h1").text(event.key);
}) //changes the h1 text whenever any key pressed in all website

$("h1").on("mouseover", function(){
  $("h1").addClass("purple");
}) // adding mouseover event

$("h1").on("mouseleave", function(){
  $("h1").removeClass("purple");
})

var i = 0.9;

$(document).on("click", function() {
  $("h1").fadeOut().fadeIn().animate({opacity: i});
  i -= 0.1;
}) // decrease the opacity of h1 for each click
