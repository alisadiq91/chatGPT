var currentPlayer = "X";
var gameWon = false;
var cells = document.querySelectorAll("td");
var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (!gameWon) {
      if (this.textContent === "") {
        this.textContent = currentPlayer;
        checkForWin();
        switchPlayer();
      }
    }
  });
}

function checkForWin() {
  for (var i = 0; i < winCombinations.length; i++) {
    if (cells[winCombinations[i][0]].textContent === currentPlayer &&
        cells[winCombinations[i][1]].textContent === currentPlayer &&
        cells[winCombinations[i][2]].textContent === currentPlayer) {
      gameWon = true;
      cells[winCombinations[i][0]].classList.add("winner");
      cells[winCombinations[i][1]].classList.add("winner");
      cells[winCombinations[i][2]].classList.add("winner");
      alert(currentPlayer + " wins!");
    }
  }
}

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

var resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);
resetButton.addEventListener("click", function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].classList.remove("winner");
  }
  gameWon = false;
});
