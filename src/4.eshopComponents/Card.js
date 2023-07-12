import React, { memo } from 'react'

const Card = ({data,dispatch}) => { 
    console.log("card", data)
    debugger
  return (
    <div style={{color: data.isVisible === false ? "red":"blue"}}> 
   {`${data.name} :: ${data.price}  ${data.isVisible} `}
    
    <button onClick={()=> dispatch({type:"setVisible", payload:{id :data.id}})}>  Visible </button>
    <button onClick={()=> dispatch({type:"delete", payload:{id :data.id}})}> delete </button> 
    </div>
  )

}

export default memo(Card)