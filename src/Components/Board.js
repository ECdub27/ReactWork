import React  from "react";
import Square from "./Square";
import CalculateWinner from "./CalculateWinner";

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate:
'repeat(3, 1fr)/ (3, 1fr)'
};

const Board = ({ squares, onPlay, xIsNext }) => {
    const handleClick = (i) => {
        if(CalculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        let XisNext;
        if(XisNext){
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
       const winner = CalculateWinner(squares);
        let status;
         if(winner){
        status = "Winner!:" + winner;
       } else {
        // eslint-disable-next-line no-unused-vars
        status = "Player 2:" + (xIsNext ? 'X' : 'O');
       }
    }
    <div style = {style}>
        {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => handleClick(i)} />
        
))}
        </div>
 
}
export default Board;