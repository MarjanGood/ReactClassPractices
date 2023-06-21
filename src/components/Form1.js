import React, { useState } from 'react'

function Form1() {

 const [name,setName] = useState("");

    const nameChangeHandler=(e)=>{
        setName(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(name);
        setName("");
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type="text" onChange={nameChangeHandler} value={name}/>
        <input type="number"/>
        <button type="submit">ADD</button>
        </form>
    </div>
  )
}

export default Form1