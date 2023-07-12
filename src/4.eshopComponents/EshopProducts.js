import React, { useReducer, useState } from 'react'
import Cards from './Cards';

const reducer=(state,action)=>{

    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: new Date(),
            name: action.payload.name,
            price: action.payload.price,
            isVisible: false,
          },
        ];

      case "setVisible":
        return state.map((item) => {
          if (item.id === action.payload.id) {   
            return { ...item, isVisible: !item.isVisible };
          }
          return item;
        });

      case "delete":
        return state = state.filter((item) => item.id !== action.payload.id);
           

      default:
        break;
    }
}

const EshopProducts = () => {

const [state, dispatch]=useReducer(reducer,[]);
console.log(state);

const [productName, setName]= useState('');
const [productPrice, setPrice]= useState(0);

const nameHandler= (e)=>{
 setName(e.target.value);
}

const priceHandler= (e)=>{
 setPrice(e.target.value);
}

const addProductHandler= (e)=>{
 e.preventDefault();
 dispatch({type:"add" , payload:{price:productPrice , name:productName}});
}

  return (
    <>
    <form onSubmit={addProductHandler}>
        <label>نام کالا</label>
        <input type="text" value={productName} onChange={nameHandler}></input>
        <br/>
        <label>قیمت کالا</label>
        <input type="number" value={productPrice} onChange={priceHandler}></input>

        <button type='submit'>ثبت</button>
    </form>

     <Cards data={state} dispatch={dispatch}></Cards>
    
 
   </>
  );
}

export default EshopProducts