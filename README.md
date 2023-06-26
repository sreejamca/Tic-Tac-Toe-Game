<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)

- [Usage](#eyes-usage)



<!-- About the Project -->
## :star2: About the Project


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="![image](https://github.com/sreejamca/Week11CodingAssignment/assets/75954803/e0dbce85-0a1c-42da-bc32-9fca01bea446)" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.index.js/">JavaScript</a></li>
    <li><a href="https://style.css/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.index.js">JavaScript</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

-A Tic-Tac-Toe game allows the user to click the cells of the board.
- It displays each players turn.
- Players take turns placing a mark in one of the cells of the grid.
- It allows to position their marks so that they make a continuous line of three     cells vertically, horizontally, or diagonally. 
-An opponent can prevent a win by blocking the completion of the opponent's line.


<!-- Installation -->
### :gear: Installation
```Terminal
npm install bootstrap
```

Install Tic-Tac-Toe with npm
<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/sreejamca/Tic-Tac-Toe.git 
```



<!-- Usage -->
## :eyes: Usage

1.Initializing the Game:
--Display an empty 3x3 grid,representing the Tic-Tac-Toe game board.
--Assign each cell of the grid with a unique number to help players make their moves.
2.Player Input:
--Prompt the first player to choose a cell number to make their move.
--Validate the input to ensure it's a valid cell number and not already occupied.
--Update the grid with the player's move.
3.Switch Players:
--Swap the active player to the second player's turn.
4.Repeat Player Input and Switch Player:
--Prompt the second player for their move.
--Validate the input and update the grid.
5.Game Progression:
--After each move, display the updated grid to show the current state of the game.
6.Win condition:
--Check after each move if any player has achieved a winning combination (three in a row, column, or diagonal).
   If a player has won, display a congratulatory message and end the game.
7.Draw Condition:
--If all the cells are occupied, and no player has won, declare the game as a draw and end it.
8.Repeat the game until the game reaches a win or draw.








