import React,{useState} from 'react'
import sytyles from "./Products.module.css"

function Products({name,price}) {
    //let p = price;
   
const [p,setP]=useState(price);
    const clickHandler=()=>{
      //p=200
      setP(200);
    }

  return (
    <div className={sytyles.outerContainer}>Products
        <h4>{name}</h4>
        <h5>{p}</h5>
        <button onClick={clickHandler}>change price</button>
    </div>
  )
}

export default Products