import { useState } from "react";
import React  from "react";



const style = {
    background: 'lightblue',
    border: ' 2px solid darkblue',
    fontSize: '30px',
    fontWieght: '800',
    cursor:'pointer',
    outline: 'none'
}
const Square = () => {
    const [value, setValue] = useState(null);
    function onSquareClick() {
        setValue('X');
    };
    
    return (
        <div>
           
    <button style={style} onClick={onSquareClick}>
        {value}
    </button>
    </div>
    );
}
export default Square;