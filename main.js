 // Função para resolver e exibir o tabuleiro
 function solveAndDisplay() {
  const board = solveQueens();

  if (Array.isArray(board)) {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (board[i][j] === 1) {
          cell.className += ' queen';
        }
        boardElement.appendChild(cell);
      }
    }
  } else {
    alert(board); // Exibe a mensagem de "Não há solução"
  }
  // Função para resolver o problema das 8 Rainhas
    function solveQueens() {
    const boardSize = parseInt(document.getElementById('board-size').value, 10);
    const board = [];
    const boardElement = document.getElementById('board');
    boardElement.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    boardElement.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    

    // Inicializa o tabuleiro vazio
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
        board[i][j] = 0;
        }
    }

    // Função auxiliar para verificar se é seguro colocar uma rainha em determinada posição
    function isSafe(board, row, col) {
        // Verifica a linha horizontal
        for (let i = 0; i < col; i++) {
        if (board[row][i] === 1) {
            return false;
        }
        }

        // Verifica a diagonal superior esquerda
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 1) {
            return false;
        }
        }

        // Verifica a diagonal inferior esquerda
        for (let i = row, j = col; i < boardSize && j >= 0; i++, j--) {
        if (board[i][j] === 1) {
            return false;
        }
        }

        return true;
    }

    // Função auxiliar recursiva para resolver o problema das 8 Rainhas
    function solveQueensRecursive(board, col) {
        // Caso base: todas as rainhas foram colocadas com sucesso
        if (col >= boardSize) {
        return true;
        }

        // Tenta colocar uma rainha em cada linha da coluna atual
        for (let i = 0; i < boardSize; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;

            // Chamada recursiva para a próxima coluna
            if (solveQueensRecursive(board, col + 1)) {
            return true;
            }

            // Backtracking: remove a rainha se não levar a uma solução
            board[i][col] = 0;
        }
        }

        // Não foi possível colocar uma rainha em nenhuma linha da coluna atual
        return false;
    }

    // Chama a função recursiva para resolver o problema das 8 Rainhas
    if (solveQueensRecursive(board, 0)) {
        return board;
    } else {
        return 'Não há solução para o problema das 8 Rainhas.';
    }
    }

}