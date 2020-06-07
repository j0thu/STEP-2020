var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
  hard.classList.remove("selected");
  easy.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hard.addEventListener("click", function () {
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  // Generate all new colors
  colors = generateRandomColors(numSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  //Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  //Change colors of squares
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //  Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // Add Click Listeners to squares
  squares[i].addEventListener("click", function () {
    // Grab the color of the clicked square
    var clickedColor = this.style.backgroundColor;
    // Compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// To make all colors the same as the correct color
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

// To pick a random color
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Add num random colors to the colors array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  // Return that array
  return arr;
}

function randomColor() {
  // Pick red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // Pick green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // Pick Blue from 0 to 255
  var b = Math.floor(Math.random() * 256);

  // Converting to into a format of rgb(r, g, b); STRING

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
