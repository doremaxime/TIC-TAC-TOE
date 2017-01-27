'use strict';

// 3rd game engine

// Make a new 9-element array and set every element to an empty string.
let gameBoard = ['','','','','','','','',''];
// this is an array, which forms a '3x3' box.
let winner;
let token = 'x';

function checkEachIndex(e) {
  // check all gameBoard indexes are not empty.
  gameBoard.every(e === '');
}

// if there are 3 of the same token in a row, then that token wins.
function checkWinner() {
  // winning combinations
  let win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  // if one of these indexes is composed of the same token, then that token wins.
  for (let i = 0; i <= win.length; i++) {
    if (win[i] === ['x','x','x'] || ['o','o','o']) {
      winner = token;
      return (winner + ' wins!');
    } else if (checkEachIndex() === true) {
      return ("it's a tie");
    }
  }
}

// inserts token into array.
const setToken = function (a, b) {
  // a = the index, b = the token we insert.
  gameBoard[a] = b;
  // gameBoard.splice(a, 0, b); splice is not the right tool.
  // check for a winner/tie.
  checkWinner();
};


module.exports = {
  setToken,
  checkEachIndex,
  checkWinner,
  gameBoard,
};

// This example function takes an array index and a player token as arguments.
// setToken(3, 'X');
// console.log(gameBoard); // ['', '', '', 'X', '', '', '', '', '']
// setToken(0, 'O');
// console.log(gameBoard); // ['O', '', '', 'X', '', '', '', '', '']



// when reset, all array indexes are back to '' (empty).
// function restart() {
//   gameBoard = Array(9).fill('');
// }




















// 2nd game engine

// let turn = 'X';
// let winner = null;
//
// function startGame() {
//   for (let i =  0; i <= 8; i++) {
//     reset(i);
//   }
//
// }
//
// function data() {
//   let result = '';
//   let circles = document.getElementsByClassName('circle');
//   for (let i = 0; i <= circles.length; i++) {
//   result = circles[i];
//   }
//
//   return result;
// }
//
// function row(a, b, c) {
//   let result = false;
//   if ((data(a).html === data(b).html) && (data(a).html === data(c).html) && (data(a).html !== '')) {
//     result = true;
//   }
//
//   return result;
// }
//
// function checkWinner(row) {
//   let result = false;
//   if(row(0, 1, 2) ||
//      row(3, 4, 5) ||
//      row(6, 7, 8) ||
//      row(0, 3, 6) ||
//      row(1, 4, 7) ||
//      row(2, 5, 8) ||
//      row(0, 4, 8) ||
//      row(2, 4, 6)) {
//        result = true;
//      }
//
//      return result;
// }
//
// function switchTurn() {
//   if (checkWinner() === true) {
//     alert(turn + ' Wins!');
//     winner = turn;
//   } else if(turn === 'X') {
//     turn = 'O';
//   } else {
//     turn = 'X';
//   }
// }
//
// function noRepeat(circle) {
//   if (winner !== null) {
//     return  alert(turn + ' Wins!');
//   } else if (circle.innerText === '') {
//     circle.innerText = turn;
//     switchTurn();
//   } else {
//     alert('already taken');
//   }
// }
//
// function reset() {
//   document.getElementsByClassName('circle').innerText = '';
// }

////////////////////////////////////////////////////////////////////////////////

//Create new games on the server. (CREATE)      ?
//Update a game by storing new moves. (UPDATE)  ?


//Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
//must keep COUNT of wins by USERS to be assigned to them.
// The api assigns the player who creates the game as player_x?



// User constructor function
// const User = function (email, password, gamesWon) {
//   this.email = email;
//   this.password = password;
//   this.gamesWon = gamesWon;
// };
//
// User.prototype.unmask = function () {
//   return this.email + 'has won' + this.gamesWon + 'games!';
// };
//
// module.exports = User;





// 1st game engine

// When the document has been loaded...
// $(document).ready(function () {
//   const gameBoard = function () {
//
//     // first turn starts at 0 which will make the first turn X
//     let turn = 0;
//
//     // All circles blank
//     $('.circles').html('');
//
//     // isGameOver method
//     function isGameOver() {
//       // 3 X's in a row.
//       if ((($('#TL') === 'X') && ($('#TC') === 'X') && ($('#TR') === 'X')) ||
//         (($('#ML') === 'X') && ($('#MC') === 'X') && ($('#MR') === 'X')) ||
//         (($('#BL') === 'X') && ($('#BC') === 'X') && ($('#BR') === 'X')) ||
//         (($('#TL') === 'X') && ($('#MC') === 'X') && ($('#BR') === 'X')) ||
//         (($('#BL') === 'X') && ($('#MC') === 'X') && ($('#TR') === 'X'))) {
//         $('.messageX').show();
//         setTimeout(function () { $('.messageX').hide(); }, 5000);
//       } else if ((($('#TL') === 'O') && ($('#TC') === 'O') && ($('#TR') === 'O')) ||
//           (($('#ML') === 'O') && ($('#MC') === 'O') && ($('#MR') === 'O')) ||
//           (($('#BL') === 'O') && ($('#BC') === 'O') && ($('#BR') === 'O')) ||
//           (($('#TL') === 'O') && ($('#MC') === 'O') && ($('#BR') === 'O')) ||
//           (($('#BL') === 'O') && ($('#MC') === 'O') && ($('#TR') === 'O'))) {
//         $('.messageO').show();
//         setTimeout(function () { $('.messageO').hide(); }, 5000);
//       } else if (turn === 8) {
//
//         // none of the above plus board full (if one of the above is valid,
//         // does the method stop there? need to include if turn is 8?)
//         $('.messageTie').show();
//
//         // http://stackoverflow.com/questions/3428766/jquery-show-for-5-seconds-then-hide
//         setTimeout(function () { $('.messageTie').hide(); }, 5000);
//
//       }
//     } // need to create messages
//
//     // addSymbol:
//     $('.circle').on('click', function () {
//       if ($(this).html() === '') {
//         if (turn % 2 === 0) {
//           // if it's divisable then it's got to be the first player who is X
//           $(this).html('X');
//         } else {
//           // if it's NOT divisable then it's got to be the second player who is O
//           $(this).html('O');
//         }
//
//         // When clicked, THAT button is deactivated. (So as to NOT be clicked again to be O or X again)
//         // and will in turn will make the game not be playable once it's over.
//         $(this).prop('disabled', true); //http://api.jquery.com/prop/
//
//         //check to see if winner or tie
//         isGameOver();
//
//         // add turn for next player
//         turn++;
//
//       }
//
//     });
//
//     // restart
//     // If .restart is clicked, run gameBoard function?.
//     $('.restart').on('click', function () {
//
//       //resets the counter so that x starts.
//       turn = 0;
//
//       // can I run a function inside that function?
//       gameBoard();
//
//     });
//
//   };
//
//   gameBoard();
//
// });
//
