"use strict";

// COMMIT!

// make array 9 index long

// createBoard function
// memorie game: let gameBoard = document.getElementById('game-board');

// User1 = X
// User1 always starts.
// Switch turns between X and O (or whichever markers you select).
// Each turn Users can only mark with their symbol.

// All circles blank.
// All buttons ready to be clicked.
// IF a circle is clicked, it changes fom circle to User's symbol using JQuery.
// IF clicked, THAT button is deactivated. (So as to NOT be clicked again to be O or X again).


// Check whether the game is over
// display who won IF a player gets 3 in a ROW, OR show a draw IF neither wins.
// Winner = 3 symbols of 1 player. Code is similar to boggle game??!
// Tie = all circles filled && noWinner.
// Can not be playable after finishing a game.

// When end of game, message appears with "Winner is X" || "Winner is O" || "It's a Tie!"

// IF .restart is clicked, reset board (function).




//Create new games on the server. (CREATE)      ?
//Update a game by storing new moves. (UPDATE)  ?


//Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
//must keep COUNT of wins by USERS to be assigned to them.


// The api assigns the player who creates the game as player_x
// Create a render() function which cycles through that board object and creates the appropriate HTML elements.



function coordinateToTrayIndex(traySize, coordinate) {
  const [row, col] = coordinate;

  return traySize * row + col;
}

function variableBoggle(tray, coordinates, traySize) {
  // for loop.
  let string = '';

  for (let i = 0; i < coordinates.length; i++) {
    const coordinate = coordinates[i];
    const index = coordinateToTrayIndex(traySize, coordinate);

    string += tray[index];
  }

  return string;

  // Iteration.
  // let string = '';
  //
  // coordinates.forEach(coordinate => {
  //   const index = coordinateToTrayIndex(traySize, coordinate);
  //
  //   string += tray[index];
  // });
  //
  // return string;

  // Folding.
  // return coordinates.reduce((letters, coordinate) => {
  //   const index = coordinateToTrayIndex(traySize, coordinate);
  //   const letter = tray[index];
  //
  //   return letters + letter;
  // }, '');
}

function boggle(tray, coordinates) {
  return variableBoggle(tray, coordinates, 3);
}
