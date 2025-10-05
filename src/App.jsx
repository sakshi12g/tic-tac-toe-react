
import React from 'react';
import Game from './game';
import Info from './info';
import { useState } from 'react';



function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');  
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of winPatterns) {
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (!newBoard.includes(null)) {
      setWinner("Draw");
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

   const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <>
    
     <div className='min-h-screen w-screen bg-gradient-to-br from-gray-700 to-gray-900  p-4  justify-center items-center flex '>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 w-full'>
      {/* game grid */}
      <div className='justify-center items-center flex'><Game board={board} onClick={handleClick} /></div>


      {/* game info */}
      <div><Info player={player} winner={winner} resetGame={resetGame}/></div>

      </div>
     </div>
    </>
  )
}

export default App
//  <Spline scene="https://prod.spline.design/neZZ1z8iotusXYLs/scene.splinecode" />//
