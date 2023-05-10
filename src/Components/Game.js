import React, { useState} from 'react';
import CalculateWinner from './CalculateWinner';
import Square from './Square';
import Board from './Board';

const styles = {
    width:'280px',
    margin: '20px auto',
}

const Game = () => {
    const[ history, setHistory] = useState([Array(0).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
     const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    // eslint-disable-next-line no-undef
    const winner = CalculateWinner(history[currentMove],squares);
    
const handlePlay = (nextSquares) => {
        const nextHistory = history.slice( 0, currentMove + 1);
        setHistory(nextHistory);
         setCurrentMove(nextHistory.length - 1);
    }
    const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0 ){
            description = 'Go to move' + move;
        } else {
            description = 'Game start'; 
        }
   return ( <li key={move}>
    <button onClick={() => jumpTo(move)}>
     {description}
    </button>
   </li>
    );
    });
    
    
    
    return (
        <>
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/> 
        <div style={styles}>
            <p>{winner ? 'Winner' + winner : 'next player:' + (xIsNext ? 'X' : 'O')}</p>
            {moves()}
            <div className="Board-Row">
        <Square value={Square[1]} onSquareClick={() => handlePlay(0) }/>
        <Square value={Square[2]} />
        <Square value={Square[3]} />
        </div>
        <div ClassName="Board-Row">
       <Square value={Square[4]} />
       <Square  value={Square[5]} />
        <Square value={Square[6]}  />
        </div>
        <div className="Square">
        <Square value={Square[7]}  />
        <Square value={Square[8]} />
        <Square value={Square[9]} />
        </div>
        </div>
        </>
        
    );


}
export default Game;