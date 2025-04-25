
// Word list
const words = ["apple", "banana", "grape", "orange", "peach", "mango", "kiwi"];
let secretWord = words[Math.floor(Math.random() * words.length)];

let maxAttempts = 5;
let attemptsLeft = maxAttempts;
let gameOver = false;

// Get DOM elements
const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");

// Submit guess function
function submitGuess() {
  if (gameOver) return;

  let userGuess = input.value.trim().toLowerCase();

  if (userGuess === "") {
    showMessage(`Incorrect guess. You have ${attemptsLeft - 1} attempts left. Try again!`, "black");
    attemptsLeft--;
  } else if (userGuess === secretWord) {
    showMessage("Congratulations! You guessed the secret word!", "win");
    endGame();
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      showMessage(`Incorrect guess. You have ${attemptsLeft} attempts left. Try again!`, "black");
    } else {
      showMessage(`Game over! The secret word was '${secretWord}'.`, "lose");
      endGame();
    }
  }

  input.value = "";
  input.focus();
}

// Show message with color class
function showMessage(text, status) {
  message.textContent = text;
  message.className = status;
}

// End the game
function endGame() {
  gameOver = true;
  input.disabled = true;
  restartBtn.style.display = "inline-block";
}

// Restart game
function restartGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  console.log("New secret word:", secretWord);
  attemptsLeft = maxAttempts;
  gameOver = false;
  input.disabled = false;
  input.value = "";
  message.textContent = "";
  message.className = "";
  restartBtn.style.display = "none";
  input.focus();
}

// Allow Enter key to submit guess
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submitGuess();
  }
});
