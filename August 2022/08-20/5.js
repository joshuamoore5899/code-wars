//
// Tic-Tac-Toe Checker
//
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!
//
// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
//
// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:
//
// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  // TODO: Check if the board is solved!
  if (horizontal(board) === 1 || vertical(board) === 1 || diagonal(board) === 1) {
    return 1;
  }
  else if (horizontal(board) === 2 || vertical(board) === 2 || diagonal(board) === 2) {
    return 2;
  }
  else if (completed(board)) {
    return 0;
  }
  else {
    return -1;
  }
}

function completed(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function horizontal(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 2; j++) {
      if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2]) {
        return board[i][j];
      }
    }
  }
  return -1;
}

function vertical(board) {
  for (let i = 0; i < board.length - 2; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) {
        return board[i][j];
      }
    }
  }
  return -1;
}

function diagonal(board) {
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0];
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return board[0][2];
  }
  return -1;
}
