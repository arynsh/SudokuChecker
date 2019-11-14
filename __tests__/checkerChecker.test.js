import {Board} from './../src/checker.js';

describe('Sudoku Board Checker', () => {

  var correctBoard;
  var incorrectBoard;

  beforeEach(() => {
    var correctArray = [];
    var incorrectArray = [];
    for (var i = 0; i < 9; i++) {
      correctArray[i] = new Array(9);
      incorrectArray[i] = new Array(9);
    }

    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        correctArray[j][i] = i;
      }
    }
    correctBoard = new Board(correctArray);

    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        incorrectArray[i][j] = 1;
      }
    }
    incorrectBoard = new Board(incorrectArray);
  });

  test('should return true when a correct 2D array is entered', () => {
    expect(correctBoard.checkBoard()).toEqual(true);
  });
  test('should return false when an invalid 2D array is entered', () => {
    expect(incorrectBoard.checkBoard()).toEqual(false);
  });
  test('should return a 2D array from values entered into forms', () => {

  });
  test('check for input from forms', () => {
    console.log();
  });
});
