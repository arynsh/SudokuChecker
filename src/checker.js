export function Board(mainArray){
  this.grid = mainArray;
}

Board.prototype.to2DArray = function(){

  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      this.grid[i][j] = $("#element" + i + j).val();
    }
  }
};

Board.prototype.checkBoard = function(){
  var isCorrect = true;
  var correct = true;
  var incorrect = false;
  for (var i = 0; i < 9; i++) {
    var tempArray = [];
    for (var j = 0; j < 9; j++) {
      tempArray[j] = this.grid[i][j];
    }
    for (var k = 0; k < 9; k++) {
      if (i !== k && tempArray[k] == tempArray[i]) {
        isCorrect = false;
      }
    }
  }
  return isCorrect;
};
