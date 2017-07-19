/*eslint-disable no-param-reassign */
class Game{
  constructor(height = 9, width = 9, board){
    this.rowSize = height;
    this.cellsPerRow = width;
    this.boardContainer = board;
    this.cellQty = height*width;
  }
  
  startGame(){
    this.drawBoard();
    this.createBoard();
  }
  
  endGame(win){
    if(win){
      alert("Felicidades, ganaste!");
    } else {
      alert("Perdiste! :(")
    }
  }
  
  drawRow(rowNumber, parent){
    var row = document.createElement('div');
    row.setAttribute('id','Row'+(++rowNumber));
    row.setAttribute('class', 'row-container');
    parent.appendChild(row);
    return row;
  }
  
  drawCell(cellNumber, rowNumber, parent){
    var cell = document.createElement('div');
    cell.setAttribute('class', 'cell-container');
    cell.setAttribute('id','['+rowNumber+']['+cellNumber+']');
    parent.appendChild(cell);
  }
  
  drawBoard(){
    for(let i=0; i<this.rowSize; i++){
      var currentRow = this.drawRow(i, this.boardContainer);
      for(let j=0; j<this.cellsPerRow; j++){
        this.drawCell(j+1, i+1, currentRow);
      }
    }

  }  
}
class Cell {
  static openCell(e){
    let cellPos = e.target.id;
    console.log(cellPos+' clicked. ');
  }
}

class Utility {
  static isMineDuplicated(mine, mineArr){
    for(let m of mineArr){
      if(m == mine){
        return true;
      }
    }
    return false;
  }
}

var boardContainer = document.getElementById('board-container');
// hardcoded for testing purposes
const g = new Game(9,9, boardContainer);
g.startGame();