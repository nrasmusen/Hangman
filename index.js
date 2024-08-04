console.log("2 player Hangman\nWelcome!!");
console.log("Player 1: Your turn!!");
console.log("Enter 3 words for Player 2 to guess.");

var playerWordsEntered = 1;//keep track of entered player words
var playerInput;//variable for player input
var playWordArr = [];//array for player 1 words

//loop to get player1 words-------------------------------------
while (playerWordsEntered < 4) {
  playerInput = prompt("Enter Word " + playerWordsEntered);
  playerInput = playerInput.toLowerCase();
  playWordArr.push(playerInput);//Add to array
  playerInput = "";//Reset Input
  playerWordsEntered++;//Incrament words entered
}
////End Loop----------------------------------------------------

//Prompt player 2 to guess first word
//Gabe was here :]
var wordToGuess;//word from array
var wordsLeft = playWordArr.length;//how many games to play
var numberGuesses;//player guesses
var playerProg = "";//Word as *******
var index;

//Main loop for game--------------------------------------------
while (wordsLeft > 0) {
  console.clear();
  //pick random array word
  console.log("-------New Word-------");
  //random index to choose from array
  var randomIndex = Math.floor(Math.random() * playWordArr.length);
  wordToGuess = playWordArr[randomIndex];
  //remove word from array
  playWordArr.splice(randomIndex, 1);//(index, how many to remove)

  wordsLeft = playWordArr.length;//update wordsLEft
  numberGuesses = wordToGuess.length;
  //reset playerProg for every round
  playerProg = "";
  for (i = 0; i < numberGuesses; i++) {
    playerProg += "*";
  }

  var counter = playerProg.length;
  while (numberGuesses > 0) {//loop for player round with word
    
    if(wordToGuess == playerProg){
      numberGuesses = -1;
    }
    else{
      var guessedLetter = false;
      console.log("GuessesLeft : " + numberGuesses);
      console.log(playerProg);
      input = prompt("Guess a letter");
      guessedLetter = checkGuess(input);
  
      if (guessedLetter) {
        console.clear();
        console.log("--Correct Guess--")
        //playerProg = replaceChar(input, index, playerProg)
      }
      if (!guessedLetter) {
        console.clear();
        console.log("--Wrong Guess--");
        numberGuesses--;
      }
    }
  }
}

console.clear();
console.log("--Game Over!!--")

function checkGuess(input) {
  for (i = 0; i < wordToGuess.length; i++) {
    if (input == wordToGuess.charAt(i)) {
      var correctGuess = true;
      index = i;
      playerProg = replaceChar(input, index, playerProg);
    }
  }
  if (correctGuess) {
    return true;
  }
  return false;
}

function replaceChar(input, index, playerProg) {
  console.log(input + " " + index + " " + playerProg);
  playerProg = playerProg.substring(0, index) + input + playerProg.substring(index + 1, playerProg.length);
  return playerProg;
}