// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
//
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//
// Example 1:
//
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:
//
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:
//
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let set = new Set();
    for(let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          continue;
        }
        if (set.has(board[i][j])) {
          return false;
        }
        set.add(board[i][j]);
      }
      set.clear();
    }

    for (let j = 0; j < 9; j++) {
      for (let i = 0; i < 9; i++) {
        if (board[i][j] === '.') {
          continue;
        }
        if (set.has(board[i][j])) {
          return false;
        }
        set.add(board[i][j]);
      }
      set.clear();
    }

    for (let k = 0; k < 9; k++) {
      for (let i = Math.floor(k / 3) * 3; i < Math.floor(k / 3) * 3 + 3; i++) {
        for (let j = (k % 3) * 3; j < (k % 3) * 3 + 3; j++) {
          if (board[i][j] === '.') {
            continue;
          }
          if (set.has(board[i][j])) {
            return false;
          }
          set.add(board[i][j]);
        }
      }
      set.clear();
    }

    return true;
};

var isValidSudoku = function(board) {
    let hash = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== ".") {
                let row = `${num} is in row ${i}`
                let col = `${num} is in col ${j}`
                let box = `${num} is in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`

                if (hash[row] || hash[col] || hash[box]) {
                    return false;
                }
                hash[row] = true;
                hash[col] = true;
                hash[box] = true;
            }
        }
    }

    return true;
};
