function CalculateWinner(squares){

// these are the combos of how you win
const lines = [
    [0, 1, 2],
    [ 3, 4, 5],
    [7, 8, 9 ],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 8]
];
for (let i = 0; i < lines.length; i++){
    const [a, b, c ] = lines[i];
    if (squares[a] === squares[b] && squares[b] === squares[c]){
        return squares[a]
    }
    
}
return null;


};
export default CalculateWinner;