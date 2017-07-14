class Game{
  constructor(height, width){
    this.row = height;
    this.cells = width;
  }
  
  createRow(rowNumber, parent){
    var row = document.createElement('div');
    row.setAttribute('id','Row'+rowNumber);
    row.setAttribute('class', 'row-container');
    parent.appendChild(row);
    return row;
  }
  
  createCell(cellNumber, parent){
    var cell = document.createElement('div');
    cell.setAttribute('class', 'cell-container');
    parent.appendChild(cell);
  }
  
  createBoard(parent){
    for(let i=0; i<this.row; i++){
      console.log(i + " rows");
      var currentRow = this.createRow(i, parent);
      console.log(currentRow)
      
      for(let j=0; j<this.cells; j++){
        this.createCell(j, currentRow);
      } // end of for j
    } // end of for i
  }
  
}

var boardContainer = document.getElementById('board-container');
// hardcoded for testing purposes
var g = new Game(9,9);
g.createBoard(boardContainer);