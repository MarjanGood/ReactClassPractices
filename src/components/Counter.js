import React, { useState } from 'react'

function Counter() {
    const[number,setNumber]=useState(10);

    const minsHandler=()=>{
        setNumber(number-1);
    }
    const plusHandler=()=>{
        setNumber(number+1);
    }

  return (
    <div>
        <button onClick={minsHandler}>-</button>
        <lable>{number}</lable>
        <button onClick={plusHandler}>+</button>
    </div>
  )
}

export default Counter