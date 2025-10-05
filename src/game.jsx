import React from 'react';

const Game = ({ board, onClick }) => {
  return (
    <div className="w-full max-w-sm aspect-square grid grid-cols-3 grid-rows-3 gap-1 bg-black">
      {board.map((cell, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className="box bg-gray-600 hover:bg-gray-700 text-[9vw] cursor-pointer flex justify-center items-center text-white"
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Game;
