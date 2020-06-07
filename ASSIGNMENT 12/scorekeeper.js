var p1Button = document.querySelector("#btn-1");
var p2Button = document.querySelector("#btn-2");
var resetButton = document.querySelector("#btn-3");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input"); // or input[type='number], here in this case, there is only one input, both will work fine
winningScoreDisplay = document.querySelector("p span"); // Selects the span inside the p
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Event for button 1
p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

//Event for button 2
p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

//RESET FUNCTION
function reset() {
  p1Score = 0;
  p1Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function () {
  // change is used instead of click because, click will work only on the buttons in the box
  winningScoreDisplay.textContent = numInput.value;
  winningScore = Number(numInput.value);
  //numInput.value is actually a string, so we need to convert it into an integer, we can also use == at the comparing part, but this is better
  reset();
});
