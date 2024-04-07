let cells = document.querySelectorAll(".cell");
let newButton = document.querySelector(".new");
let currentPlayer = "X"; // Use a descriptive variable name

let winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerText === "") { // Check if cell is empty before placing mark
      cell.innerText = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle player
      cell.disabled = true; // Disable clicked cell
      checkWinner();
    }
  });
});

let checkWinner = () => {
  for (const pattern of winningPatterns) {
    let value1 = cells[pattern[0]].innerText;
    let value2 = cells[pattern[1]].innerText;
    let value3 = cells[pattern[2]].innerText;

    if (value1 !== "" && value2 !== "" && value3 !== "") { // Ensure all cells have values
      if (value1 === value2 && value2 === value3) {
        console.log("Winner:", value1); // Or display an alert for the winner
        // Optional: Disable all cells or display a game over message
        return; // Exit the loop after finding a winner
      }
    }
  }
};

newButton.addEventListener("click", () => {
  // Reset the game
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
  });
  currentPlayer = "X"; // Start with player X
});