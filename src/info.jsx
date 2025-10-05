import React from 'react'
import excitedGif from './assets/excited.gif';

const Info = ({ player, winner, resetGame }) => {
    return (
        <div className='flex flex-col  text-white px-4'>
            <h2 className='text-3xl font-bold mb-4'>Welcome</h2>
            <div className="flex items-center">
                <div className='p-2 '>
                    <p className='text-lg font-medium mb-6'>turn for {player}</p>
                    <button
                        onClick={resetGame}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
                        Reset
                    </button>

                </div>

                <div>
                    
                        <div>{winner ? <img src={excitedGif} className='h-28  m-2' /> : null}</div>
                        <span className='mt-10 text-lg font-semibold text-purple-600  text-center m-4 '>{winner ? (
                            winner === "Draw" ? <p>It's a Draw!</p> : <p> {winner} Won</p>
                        ) : null}</span>
                   
                </div>
            </div>

        </div>
    )
}

export default Info
