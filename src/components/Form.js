import React, { useState } from 'react'

function Form() {

 const [name,setName] = useState("");

    const nameChangeHandler=(e)=>{
        setName(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
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

export default Form