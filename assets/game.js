
var wins = 0;
//Win counter starts off at 0
var underScore = [];
//Underscore array
//var rightGuess = [];
//Array where right guesses will go
var counter = 0;
var wrongGuess = [];
//Array where wrong guesses will go
var guessesRemaining = 4;
//Guesses remaining which start at 5 in the html document
var wordList = ["Vega", "Ryu", "Chunli", "Hadoken", "Shoryuken", "Akuma", "Dragon Punch", "M.Bison", "Sagat"];
// This is the list of words that can be chosen from
var random = Math.floor(Math.random() * wordList.length);
var wordToGuess = wordList[random];
console.log(wordToGuess);
//Decides at random which word will be guessed
function printUnderScore(){
	for(var l = 0; l < wordToGuess.length; l++){
		underScore.push(" _ ");
	}
	console.log(underScore);
	document.getElementById("underscore").textContent = underScore.join(" ");
};
printUnderScore();
//The function to print the underscores to the DOM

function winOrLose(){
	if(counter === wordToGuess.length){
		wins++;
		document.getElementById("win-counter").textContent = wins;
		alert("Hey!  You did it!  Way past cool!");
		}
};
//This function alerts if all letters are guessed correctly and you win the game


document.onkeyup = function(event){
	var userGuess = event.key;
	console.log(userGuess);
	if(wordToGuess.indexOf(userGuess) > -1){
		for(var j = 0; j < wordToGuess.length; j++){
			if(wordToGuess[j] === userGuess){
				underScore[j] = userGuess;
				console.log(underScore);
				document.getElementById("underscore").textContent = underScore.join(" ");
				counter++;
				winOrLose();
			}
		}
	}

	else{
		console.log("Nope");
		wrongGuess.push(userGuess);
		document.getElementById("wrongguess").textContent = wrongGuess.join(" ");
		console.log(wrongGuess);
		document.getElementById("nogr").textContent = guessesRemaining;
		guessesRemaining--;

		
	}

	if(guessesRemaining === -1){
		console.log("Game Over");
		alert("Yikes.  You ran out of guesses.");
		confirm("Try again?");
	}
};