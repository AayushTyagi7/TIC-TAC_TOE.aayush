// Tic Tac Toe Game Logic

var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  var currentPlayer = 'X';
  var moves = 0;
  var gameOver = false;
  
  function makeMove(row, col) {
    if (gameOver || board[row][col] !== '') {
      return;
    }
  
    board[row][col] = currentPlayer;
    document.getElementById('board').children[row].children[col].innerText = currentPlayer;
    moves++;
  
    if (checkWin(row, col)) {
      document.getElementById('message').innerText = currentPlayer + ' wins!';
      gameOver = true;
    } else if (moves === 9) {
      document.getElementById('message').innerText = 'It\'s a draw!';
      gameOver = true;
    }
  
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  
  function checkWin(row, col) {
    var symbol = board[row][col];
  
    // Check row
    if (board[row][0] === symbol && board[row][1] === symbol && board[row][2] === symbol) {
      return true;
    }
  
    // Check column
    if (board[0][col] === symbol && board[1][col] === symbol && board[2][col] === symbol) {
      return true;
    }
  
    // Check diagonals
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
      return true;
    }
  
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
      return true;
    }
  
    return false;
  }
  
  function resetBoard() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    moves = 0;
    gameOver = false;
  
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
  
    document.getElementById('message').innerText = '';
  }
  
  