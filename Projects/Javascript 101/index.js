/* var tweet = prompt("Please enter your tweet");
tweet = tweet.slice(0, 5);
alert("I have cutted your tweet in to 4 characters and this is your new tweet: " + tweet);*/


/*var name = prompt("Enter your name: ");
var name2 = name.slice(0,1);
var name3 = name.slice(1, name.length);
name2 = name2.toUpperCase();
name3 = name3.toLowerCase();
name = name2 + name3;*/


/*var x = 3;
var y = ++x;
y += 1;*/


/*function getCoffee(type, flavor, sugar) {
          
  console.log("You got " + type + " with " + flavor + " and " + sugar + " sugars");
         
} 

console.log(getCoffee('latte', 'milk', 2));*/

/*function lifeInWeeks(age) {
    
    var newAge = 90 - age;
    var days = newAge * 365;
    var weeks = days / 7;
    var months = days/ 30;
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left");
    
}

lifeInWeeks(56);*/

/*var names = prompt("Please enter your lovers name: ")
var love_prc = Math.floor(Math.random() * 100);
alert("Your love percentage is: %" + love_prc);

if(love_prc > 50){
    alert("You're definitely soul mates");
}
else{
    alert("You should be break up");
}*/


/*var count = [];
var i = 1;

function fizzBuzz() {

for(; i < 10; i++) {

    if(i % 3 === 0 && i % 5 === 0){
        count.push("FizzBuzz");;
    }
    else if(i % 3 === 0){
        count.push("Fizz");
    }
    else if(i % 5 === 0){
        count.push("Buzz");
    }
    else{
        count.push(i);
    }

    console.log(count);

   }

}*/


/*function whosPaying(names) {
     
     var i = Math.floor(Math.random() * (names.length)); // calculating the number of people
     console.log(i);
     var people = names[i];
     console.log(people + " is going to buy lunch today!");     
}

var x = ['Berkay', 'Kübra', 'Nameless Guy'];
whosPaying(x);*/


function fibonacciGenerator(n) {
    
    var fibonacci = [];
    
    if(n === 1) {
        fibonacci.push(0);
    }
    
    else if(n === 2) {
        fibonacci.push(0,1);
    }
    
    else if(n > 2) {
        
        fibonacci.push(0,1);
        
        for(var i = 2; i < n; i++){
            
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];          
        }
    }  
    
    return fibonacci;
}

fibonacciGenerator(9);





