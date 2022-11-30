//unordered list where the player’s guessed letters will appear
const list = document.querySelector(".guessed-letters");

//button with the text “Guess!” in it
const guessButton = document.querySelector(".guess");

//text input where the player will guess a letter
const letterInput = document.querySelector(".letter");

//empty paragraph where the word in progress will appear
let wordInProgress = document.querySelector(".word-in-progress");

//paragraph where the remaining guesses will display
const remainingGuesses = document.querySelector(".remaining");

//span inside the paragraph where the remaining guesses will display
const guessesNumber = document.querySelector("span");

//empty paragraph where messages will appear when the player guesses a letter
const message = document.querySelector(".message");

//hidden button that will appear prompting the player to play again
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
      console.log(letter);
      placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
  };
  
  placeholder(word);

  guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    let inputNumber = letterInput.value;
    console.log(inputNumber); 
  })