import React, { memo } from 'react'
import Card from './Card'

const Cards = ({data,dispatch}) => {
  debugger
  console.log("cards", data)
  return (
  
    <div>
      {
        data.map((i)=>{ return <Card data={i} dispatch={dispatch}></Card> })
      }
    
    </div>
  )
}
export default memo(Cards)